#!/usr/bin/env python3
"""HyperFocus Z0ne - Showcase Web Session Start Hook.

Writes a .focus_session_start marker and checks core project files exist.
Exits 0 on pass, 1 on hard failure.
"""

import sys
import urllib.request
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SESSION_FILE = ROOT / ".focus_session_start"


def _ping(url):
    try:
        urllib.request.urlopen(url, timeout=3)
        return True
    except Exception:
        return False


def main() -> int:
    now = datetime.now()
    print("\n[SESSION START] HyperFocus Z0ne -- Showcase Web")
    print("-" * 40)
    print("   Time    : " + now.strftime("%Y-%m-%d %H:%M:%S"))

    SESSION_FILE.write_text(now.isoformat())

    pkg_ok = (ROOT / "package.json").exists()
    next_ok = (ROOT / "next.config.ts").exists()
    prisma_ok = (ROOT / "prisma" / "schema.prisma").exists()
    dev_ok = _ping("http://localhost:3000")

    print("   package.json      : " + ("PASS found" if pkg_ok else "FAIL missing"))
    print("   next.config.ts    : " + ("PASS found" if next_ok else "WARN missing"))
    print("   prisma/schema     : " + ("PASS found" if prisma_ok else "WARN missing"))
    print("   frontend :3000    : " + ("PASS reachable" if dev_ok else "WARN offline (run npm run dev)"))
    print()

    if not pkg_ok:
        print("FAIL  Session start FAILED -- package.json not found.\n")
        return 1

    print("PASS  Showcase Web session started. BROski forever! Let's build!\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
