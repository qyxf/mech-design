rm -rf docs
cd website-source
teadocs build
cp -r build ../docs
rm -rf build