
function calculateWorkingCapital() {
  const assets = parseFloat(document.getElementById("currentAssets").value);
  const liabilities = parseFloat(document.getElementById("currentLiabilities").value);
  const result = document.getElementById("workingCapitalResult");

  if (isNaN(assets) || isNaN(liabilities)) {
    result.innerHTML = `<p class="text-red-600">Please enter valid numbers.</p>`;
    return;
  }

  const workingCapital = assets - liabilities;
  result.innerHTML = `<p>Working Capital = <strong>₹${workingCapital.toFixed(2)}</strong></p>`;
}
