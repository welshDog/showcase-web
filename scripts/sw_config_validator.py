#!/usr/bin/env python3
"""HyperFocus Z0ne - Showcase Web Config Validator.

Enforces Sacred Rules on Next.js/TypeScript source files:
  - NEVER docker.io image references
  - NEVER 'from backend.app.' imports
  - NEVER global wagmi/rainbowkit imports (web3 must be lazy/Pets-only)
  - WARN on plain http:// references (prefer https://)

Usage:
    python scripts/sw_config_validator.py next.config.ts
    python scripts/sw_config_validator.py app/page.tsx
    python scripts/sw_config_validator.py prisma/schema.prisma
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

_BANNED_IMAGE_PREFIXES = ("docker.io/", "index.docker.io/")
_BANNED_IMPORT_RE = re.compile(r"from\s+backend\.app\.")
_BANNED_WAGMI_RE = re.compile(r"^import\b.*\bfrom\s+['\"](?:wagmi|@rainbow-me/rainbowkit)['\"]", re.MULTILINE)
_PLAIN_HTTP_RE = re.compile(r'http://(?!localhost|127\.0\.0\.1)', re.IGNORECASE)


def _resolve_file(arg):
    p = Path(arg)
    if p.is_absolute():
        return p
    for base in (Path.cwd(), ROOT):
        candidate = base / p
        if candidate.exists():
            return candidate
    return Path.cwd() / p


def validate(file_path):
    errors = []
    warnings = []

    if not file_path.exists():
        errors.append("file not found: " + str(file_path))
        return errors, warnings

    try:
        text = file_path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        warnings.append("could not decode as UTF-8 -- skipping content checks")
        return errors, warnings

    for i, raw in enumerate(text.splitlines(), start=1):
        stripped = raw.strip()
        if not stripped:
            continue

        for prefix in _BANNED_IMAGE_PREFIXES:
            if prefix in stripped:
                errors.append("line " + str(i) + ": docker.io reference -- " + repr(stripped[:80]))

        if _BANNED_IMPORT_RE.search(stripped):
            errors.append("line " + str(i) + ": forbidden 'from backend.app.*' -- " + repr(stripped[:80]))

        if _PLAIN_HTTP_RE.search(stripped):
            warnings.append("line " + str(i) + ": plain http:// reference -- prefer https://")

    if _BANNED_WAGMI_RE.search(text):
        errors.append("global wagmi/rainbowkit import -- must be lazy/Pets-only (Sacred Rule)")

    return errors, warnings


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: python scripts/sw_config_validator.py <file>")
        return 2

    file_path = _resolve_file(sys.argv[1])

    print("\n[CONFIG VALIDATOR] HyperFocus Z0ne Showcase Web -- " + sys.argv[1])
    print("-" * 40)
    print("   Path: " + str(file_path))
    print()

    errors, warnings = validate(file_path)

    for w in warnings:
        print("   WARN  " + w)
    if warnings:
        print()

    if errors:
        for e in errors:
            print("   FAIL  " + e)
        print()
        print("FAIL  Validation FAILED -- " + str(len(errors)) + " error(s).\n")
        return 1

    print("PASS  " + file_path.name + " passed all Sacred Rules checks!")
    if warnings:
        print("      (" + str(len(warnings)) + " warning(s) -- non-blocking)")
    print()
    return 0


if __name__ == "__main__":
    sys.exit(main())
