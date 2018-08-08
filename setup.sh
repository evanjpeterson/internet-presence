#!/bin/sh

npm install

./node_modules/less/bin/lessc ./src/site.less ./src/site.css
