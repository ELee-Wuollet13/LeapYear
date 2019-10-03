var leapYear = function(n) {
if ((n % 4 === 0) && (n % 100 !== 0) || (n % 400 ===0)) {
  return true;
} else {
  return false;
}
};

$(document).ready(function() {
  $('#inputs form').submit(function(event) {
  var n = parseInt($('input#intake').val());
  var result = leapYear(n);
  console.log(result);
  event.preventDefault();

});
});
