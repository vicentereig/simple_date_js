# Simple Date JS
These are a few `jQuery` enhacements to [Plataformatec's](http://twitter.com/#!/plataformatec) [simple_form](https://github.com/plataformatec/simple_form) date select.

* This version just updates the current month's days, instead of showing unconditionally 31 days per month.

* Future version will implement a simple event model to be enable widget communication, e.g.: If you are rendering a calendar somewhere else in the document and want to reflect date select changes in there. The plugin will be implemented as a jQuery UI widget.

* Source code is implemented in `Coffeescript`. The directory structure follows Barista default conventions: all `*.coffee` scripts under `RAILS_ROOT/app/coffeescripts`

* It uses [DOMBrew](https://github.com/glebm/DOMBrew), a damned fast DOM builder by [Gleb Mazovetskiy](https://github.com/glebm).

## Getting the code
```javascript
$ git clone https://github.com/vicentereig/simple_date_js.git
```
## Building the code
If you want the generated Javascript to be minified donwload http://closure-compiler.googlecode.com/files/compiler-latest.zip

```bash
vicente@simba:~/Workspaces/simple_date_js $ sh build.sh
Building dombrew.js...
Building simple_date.js...
Building core-ext/date.js...
Building dombrew.min.js...
Building simple_date.min.js...
Building date.min.js...
Done:
5.1K  dombrew.js
2.4K  dombrew.min.js
2.5K  simple_date.js
1.5K  simple_date.min.js
193   date.js
171   date.min.js

```

## Usage
Let's say that your are rendering a @simple_form@ date input.

```haml
  -#...
  = form.input :check_in, :as => :date
  -#...
```
Then you can enable the jQuery plugin:

```coffeescript
jQuery ($) ->
  $('.input.date').simpleDate()
```

```javascript
jQuery( function ($) {
  $('.input.date').simpleDate()
});
```
