#! /bin/bash
yarn build
rm -rf color
rm color.zip
mv build color
zip -r color.zip color