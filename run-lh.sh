#!/bin/bash
cd ~/Sites/naseer-aslam
npx lighthouse http://localhost:3000 --only-categories=performance --output=json --output-path=./lh.json --chrome-flags="--headless --no-sandbox"
node lh-check.js
