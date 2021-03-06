function componentPrepare() {
  $(".select.switch label").each(function(index) {
    var label = $(this);
    var id = label.attr("for");
    var select = label.find("select");
    var $body = $('body');
    var $bg = $('#bg');

    var MAX_NUM = 4;
    var selected = 0;
    var values = [];

    //read options
    select.find("option").each(function(index) {
      if (index < MAX_NUM) {
        values[index] = {
          value: $(this).val(),
          label: $(this).html()
        };
        if ($(this).is(":selected") || select.val() == $(this).val())
          selected = index;
      }
    });

    //setting sizes
    label.find(".switch-toggle").css("width", 7.5 + values.length * 15.5);

    //selecting default
    label.find(".switch-toggle").val(values[selected].value);
    label.find(".display").html(values[selected].label);
    label.addClass("selected-" + selected);
      $body.addClass("bg-" + selected);
    
    //change on click
    label.click(function(event) {
      selected = (selected + 1) % values.length;
      select.val(values[selected].value).change();
      event.preventDefault();
    });

    // select change event
    select.change(function(event) {
      var selected = 0;
      for (var i = 0; i < values.length; i++) {
        label.removeClass("selected-" + i);
        $body.removeClass("bg-" + i);
        if ($(this).val() == values[i].value)
          selected = i;
      }

      label.find(".display").html(values[selected].label);
      label.addClass("selected-" + selected);
      $body.addClass("bg-" + selected);
      event.preventDefault();
    });

  });
}

$(document).ready(function() {

  componentPrepare();

});
