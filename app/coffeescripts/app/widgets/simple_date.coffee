$  = jQuery
$b = DOMBrew
#### a jQuery plugin to enhace simple_form's date selector
#
# And all that jazz. :-)
# TODO: Docs in progress.
#'
class SimpleDate
  @defaults = {}

  constructor: ($container, options) ->
    @options = $.extends @defaults, options
    @selects = [@yearSelect, @monthSelect, @daySelect] = $(this).find('select')
    @classes = ['year', 'month', 'day']
    @selects.each -> $(this).addClass classes.shift()

    @initializeDate()
    @selects.each -> $(this).change updateDate
    @selects.each -> $(this).trigger('change')

  # console.log "Loaded date: ", @date

  selectedDate: () -> @date

  initializeDate: () ->
    @selects.map =>
      @date = $(this).find('option[selected=selected]').map -> parseInt $(this).val()
      @date = new Date(@date[0], @date[1]-1, @date[2])
  # It's sort of convention to preffix jQuery variables with a $
  updateDate: (evt) ->
    $select = $(evt.srcElement)
    @date.setFullYear((+$select.val())) if $select.hasClass('year')
    @date.setMonth((+$select.val())-1) if $select.hasClass('month')
    @date.setDate((+$select.val())) if $select.hasClass('day')

    options = $(@daySelect).find('option')

    if parseInt(options.last().val()) != @date.lastDayInMonth()
      dayOpts =
        for day in [1..@date.lastDayInMonth()]
          attrs = {value: day}
          attrs.selected= 'selected' if @date.getDate() == day
          $b('option', attrs).append($b('text', day)).dom()
      $(@daySelect).find('option').remove()
      $(@daySelect).append(dayOpts)

    $select.one 'blur', (evt) ->
      console.log "Not yet implemented! :-)"

$.fn.simpleDate = (options) ->
  @each -> new SimpleDate($(@), options)

