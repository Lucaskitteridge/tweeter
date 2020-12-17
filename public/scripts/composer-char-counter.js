$(document).ready(function() {
  $("textarea").keyup(function() {
    const $counter = $(this).parent().siblings(".lastline").children(".counter");
    $counter.text(140 - $(this).val().length);
    if ($counter.text() < 0) {
      $counter.css("color", "red");
    } else ($counter.css("color", "black"));
  });
});

