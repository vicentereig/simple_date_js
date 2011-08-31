(function() {
  var $, $b, SimpleDate;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  $ = jQuery;
  $b = DOMBrew;
  SimpleDate = (function() {
    SimpleDate.defaults = {};
    function SimpleDate($container, options) {
      var _ref;
      this.options = $["extends"](this.defaults, options);
      this.selects = (_ref = $(this).find('select'), this.yearSelect = _ref[0], this.monthSelect = _ref[1], this.daySelect = _ref[2], _ref);
      this.classes = ['year', 'month', 'day'];
      this.selects.each(function() {
        return $(this).addClass(classes.shift());
      });
      this.initializeDate();
      this.selects.each(function() {
        return $(this).change(updateDate);
      });
      this.selects.each(function() {
        return $(this).trigger('change');
      });
    }
    SimpleDate.prototype.selectedDate = function() {
      return this.date;
    };
    SimpleDate.prototype.initializeDate = function() {
      return this.selects.map(__bind(function() {
        this.date = $(this).find('option[selected=selected]').map(function() {
          return parseInt($(this).val());
        });
        return this.date = new Date(this.date[0], this.date[1] - 1, this.date[2]);
      }, this));
    };
    SimpleDate.prototype.updateDate = function(evt) {
      var $select, attrs, day, dayOpts, options;
      $select = $(evt.srcElement);
      if ($select.hasClass('year')) {
        this.date.setFullYear(+$select.val());
      }
      if ($select.hasClass('month')) {
        this.date.setMonth((+$select.val()) - 1);
      }
      if ($select.hasClass('day')) {
        this.date.setDate(+$select.val());
      }
      options = $(this.daySelect).find('option');
      if (parseInt(options.last().val()) !== this.date.lastDayInMonth()) {
        dayOpts = (function() {
          var _ref, _results;
          _results = [];
          for (day = 1, _ref = this.date.lastDayInMonth(); 1 <= _ref ? day <= _ref : day >= _ref; 1 <= _ref ? day++ : day--) {
            attrs = {
              value: day
            };
            if (this.date.getDate() === day) {
              attrs.selected = 'selected';
            }
            _results.push($b('option', attrs).append($b('text', day)).dom());
          }
          return _results;
        }).call(this);
        $(this.daySelect).find('option').remove();
        $(this.daySelect).append(dayOpts);
      }
      return $select.one('blur', function(evt) {
        return console.log("Not yet implemented! :-)");
      });
    };
    return SimpleDate;
  })();
  $.fn.simpleDate = function(options) {
    return this.each(function() {
      return new SimpleDate($(this), options);
    });
  };
}).call(this);
