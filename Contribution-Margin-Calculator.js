
function calculateContributionMargin() {
  const sales = parseFloat(document.getElementById("sales").value);
  const variableCosts = parseFloat(document.getElementById("variableCosts").value);
  const result = document.getElementById("contributionMarginResult");

  if (isNaN(sales) || isNaN(variableCosts)) {
    result.innerHTML = `<p class="text-red-600">Please enter valid numbers.</p>`;
    return;
  }

  const margin = sales - variableCosts;
  const marginPercent = ((margin / sales) * 100).toFixed(2);

  result.innerHTML = `
    <p>Contribution Margin = <strong>₹${margin.toFixed(2)}</strong></p>
    <p>Contribution Margin % = <strong>${marginPercent}%</strong></p>
  `;
}

