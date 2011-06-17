# Build script taken from https://github.com/glebm/DOMBrew
# Build dependencies:
# * sh
# * compiler.jar - Google closure js minifier
# get it at http://closure-compiler.googlecode.com/files/compiler-latest.zip
# * CoffeeScript

echo "Building dombrew.js..."
coffee -p app/coffeescripts/app/vendor/dombrew.coffee > dombrew.js

echo "Building simple_date.js..."
coffee -p app/coffeescripts/app/widgets/simple_date.coffee > simple_date.js

echo "Building core-ext/date.js..."
coffee -p app/coffeescripts/core-ext/date.coffee > date.js

echo "Building dombrew.min.js..."
java -jar compiler.jar --js dombrew.js > dombrew.min.js

echo "Building simple_date.min.js..."
java -jar compiler.jar --js simple_date.js > simple_date.min.js

echo "Building date.min.js..."
java -jar compiler.jar --js date.js > date.min.js

echo "Done:"
du -bh dombrew.js dombrew.min.js simple_date.js simple_date.min.js date.js date.min.js