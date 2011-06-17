(function() {
  Date.prototype.lastDayInMonth || (Date.prototype.lastDayInMonth = function() {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
  });
}).call(this);
