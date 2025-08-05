
function calcPriceCost() {
  const mode = document.getElementById("calcMode").value;
  const val1 = parseFloat(document.getElementById("priceCostInput1").value);
  const percent = parseFloat(document.getElementById("percentValue").value);
  const result = document.getElementById("priceCostResult");

  if (isNaN(val1) || isNaN(percent) || percent < 0 || percent >= 100) {
    result.innerHTML = `<p class="text-red-600">Enter valid numeric values. % must be between 0 and 99.99</p>`;
    return;
  }

  let output = '';
  switch (mode) {
    case 'costFromPriceMarkup':
      const cost1 = val1 / (1 + percent / 100);
      output = `Cost = <strong>${cost1.toFixed(2)}</strong>`;
      break;
    case 'priceFromCostMarkup':
      const price1 = val1 * (1 + percent / 100);
      output = `Price = <strong>${price1.toFixed(2)}</strong>`;
      break;
    case 'costFromPriceMargin':
      const cost2 = val1 * (1 - percent / 100);
      output = `Cost = <strong>${cost2.toFixed(2)}</strong>`;
      break;
    case 'priceFromCostMargin':
      const price2 = val1 / (1 - percent / 100);
      output = `Price = <strong>${price2.toFixed(2)}</strong>`;
      break;
  }

  result.innerHTML = `<p>${output}</p>`;
}

