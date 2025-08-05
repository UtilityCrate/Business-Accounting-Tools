
function convertMarkupMargin() {
  const type = document.getElementById("calcType").value;
  const inputVal = parseFloat(document.getElementById("percentInput").value);
  const result = document.getElementById("markupMarginResult");

  if (isNaN(inputVal) || inputVal < 0 || inputVal >= 100) {
    result.innerHTML = `<p class="text-red-600">Please enter a valid percentage between 0 and 99.</p>`;
    return;
  }

  let output = '';
  if (type === "markupToMargin") {
    const margin = (inputVal / (100 + inputVal)) * 100;
    output = `Markup of ${inputVal}% = Margin of <strong>${margin.toFixed(2)}%</strong>`;
  } else {
    const markup = (inputVal / (100 - inputVal)) * 100;
    output = `Margin of ${inputVal}% = Markup of <strong>${markup.toFixed(2)}%</strong>`;
  }

  result.innerHTML = `<p>${output}</p>`;
}
