#!/bin/sh

npm install
cp node_modules/normalize.css/normalize.css site/public/css
cp node_modules/fullpage.js/dist/fullpage.min.css* site/public/css
cp node_modules/fullpage.js/dist/fullpage.min.js* site/public/js
