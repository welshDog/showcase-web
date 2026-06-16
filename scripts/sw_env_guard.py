#!/usr/bin/env python3
"""HyperFocus Z0ne - Showcase Web Env Guard.

Required env vars:
  DATABASE_URL  — Prisma PostgreSQL connection string

Reads .env or .env.local at repo root.
Exits 0 on pass, 1 on failure.
"""

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

REQUIRED = ["DATABASE_URL"]
_PLACEHOLDERS = {"", "changeme", "CHANGEME", "your_value_here", "paste_here", "CHANGEME_REQUIRED"}


def _load_env():
    env = {}
    for name in (".env.local", ".env"):
        f = ROOT / name
        if not f.exists():
            continue
        for line in f.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, _, v = line.partition("=")
            env[k.strip()] = v.strip().strip('"').strip("'")
    return env


def main() -> int:
    print("\n[ENV GUARD] HyperFocus Z0ne -- Showcase Web")
    print("-" * 40)

    env = _load_env()
    if not env:
        print("   INFO  No .env / .env.local found -- checking process env")
        import os
        env = dict(os.environ)

    fails = []
    for key in REQUIRED:
        val = env.get(key, "")
        if val in _PLACEHOLDERS:
            print("   FAIL  " + key + " missing or placeholder")
            fails.append(key)
        else:
            print("   PASS  " + key)

    print()
    if fails:
        print("FAIL  Env guard FAILED -- " + str(len(fails)) + " missing var(s).\n")
        return 1

    print("PASS  All required Showcase Web env vars present. Guard passed!\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
