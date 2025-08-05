
function calculateROI() {
  const gain = parseFloat(document.getElementById("gainFromInvestment").value);
  const cost = parseFloat(document.getElementById("costOfInvestment").value);
  const result = document.getElementById("roiResult");

  if (isNaN(gain) || isNaN(cost) || cost === 0) {
    result.innerHTML = `<p class="text-red-600">Please enter valid gain and investment values. Investment cannot be zero.</p>`;
    return;
  }

  const roi = ((gain - cost) / cost) * 100;
  result.innerHTML = `<p>Return on Investment (ROI) = <strong>${roi.toFixed(2)}%</strong></p>`;
}
