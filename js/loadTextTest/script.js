$(document).ready(function() {
 $("#readFile").click(function() {
    $.get('GH1.txt', function(data) {
      $("#container").html(data);
    }, 'text');
 });
});
