document.getElementById('decisionForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const stress = document.getElementById('stress').value;
  const format = document.getElementById('format').value;
  const boundary = document.getElementById('boundary').value;

  let recommendation = '';

  if (stress === 'high' && format === 'workshop') {
    recommendation = 'An interactive workshop focusing on ' + boundary + ' would be ideal to manage high stress and build peer support.';
  } else if (stress === 'high' && format === 'online') {
    recommendation = 'A self‑paced online module on ' + boundary + ' allows flexibility while addressing your high stress.';
  } else if (stress === 'moderate' && format === 'peer') {
    recommendation = 'Joining a peer support group that discusses ' + boundary + ' can help maintain your resilience.';
  } else {
    recommendation = 'Consider a blended approach: a short workshop on ' + boundary + ' followed by online resources to reinforce learning.';
  }

  const resultDiv = document.getElementById('result');
  resultDiv.textContent = recommendation;
  resultDiv.classList.remove('hidden');
});
