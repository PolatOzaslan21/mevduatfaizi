function calculateDeposit() {
  const principal = parseFloat(document.getElementById('principal').value);
  const annualRate = parseFloat(document.getElementById('rate').value) / 100;
  const days = parseInt(document.getElementById('days').value);
  const taxRate = parseFloat(document.getElementById('tax').value) / 100;
  const result = document.getElementById('result');
  if (!principal || !annualRate || principal <= 0 || annualRate <= 0) { result.classList.remove('show'); return; }
  const gross = principal * annualRate * (days / 365);
  const taxAmount = gross * taxRate;
  const net = gross - taxAmount;
  const total = principal + net;
  document.getElementById('result-gross').textContent = fmt(gross) + ' TL';
  document.getElementById('result-tax').textContent = fmt(taxAmount) + ' TL';
  document.getElementById('result-net').textContent = fmt(net) + ' TL';
  document.getElementById('result-total').textContent = fmt(total) + ' TL';
  result.classList.add('show');
}
function fmt(v) { return v.toLocaleString('tr-TR', {minimumFractionDigits:2, maximumFractionDigits:2}); }
document.addEventListener('keydown', e => { if (e.key === 'Enter') calculateDeposit(); });