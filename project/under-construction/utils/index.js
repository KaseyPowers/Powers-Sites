
export getHeight = function(win, element) {
  var output = element.offsetHeight();
  output += parseFloat(win.getComputedStyle(element).getPropertyValue('margin-top'));
  output += parseFloat(win.getComputedStyle(element).getPropertyValue('margin-bottom'));
  return output;
};