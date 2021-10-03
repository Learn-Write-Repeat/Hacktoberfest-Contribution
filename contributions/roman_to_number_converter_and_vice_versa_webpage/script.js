const textarea = document.getElementById('textarea');
const button = document.getElementById('button');
const form = document.querySelector('form');
const outputHeading = document.getElementById('output-heading');
const outputParagraph = document.getElementById('output-paragraph');

form.oninput = function () {
  const input = textarea.value;
  if (isNaN(input)) {
    outputParagraph.innerHTML = numerize(input);
  }
  else {
    const output = romanize(input);
    outputParagraph.innerHTML = output;
  }
  if(textarea.value === "") {
    outputHeading.innerHTML = "";
  }
};

function romanize(num) {
  var lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }, roman = '', i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  outputHeading.innerHTML = "Roman Numeral";
  return roman;
}

function numerize(s) {
  const map = { 'I': 1, 'i': 1, 'V': 5, 'v': 5, 'X': 10, 'x': 10, 'L': 50, 'l': 50, 'C': 100, 'c': 100, 'D': 500, 'd': 500, 'M': 1000, 'm': 1000 };
  let result = [...s].reduce((r, c, i, s) => map[s[i + 1]] > map[c] ? r - map[c] : r + map[c], 0);
  if (isNaN(result)) {
    outputHeading.innerHTML = "Error";
    return "Not a valid roman numeral";
  }
  else {
    outputHeading.innerHTML = "Numerical Value";
    return result;
  }
};