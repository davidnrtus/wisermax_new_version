#!/usr/bin/env bash
# Renders every card in cards.json to public/<name>.jpg (1200x630) with
# headless Chrome. Run from anywhere: scripts/og/render.sh
# CHROME can point at another Chromium binary.
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
root="$(cd "$here/../.." && pwd)"
chrome="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

for name in $(node -e "console.log(Object.keys(require('$here/cards.json')).join(' '))"); do
  hash="$(node -e "console.log(encodeURIComponent(JSON.stringify(require('$here/cards.json')['$name'])))")"
  png="$tmp/$(echo "$name" | tr / _).png"
  "$chrome" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
    --virtual-time-budget=6000 --window-size=1200,630 \
    --screenshot="$png" "file://$here/template.html#$hash" >/dev/null 2>&1
  mkdir -p "$(dirname "$root/public/$name")"
  sips -s format jpeg -s formatOptions 82 "$png" --out "$root/public/$name.jpg" >/dev/null
  echo "public/$name.jpg"
done
