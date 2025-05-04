// Simulated outcome table keyed by [stress][format][boundary]
const outcomes = {
  low: {
    workshop: {
      time:      { baseline: 50, post: 35 },
      communication: { baseline: 55, post: 40 },
      wellbeing:     { baseline: 52, post: 36 }
    },
    online: {
      time:      { baseline: 50, post: 30 },
      communication: { baseline: 55, post: 38 },
      wellbeing:     { baseline: 52, post: 34 }
    },
    peer: {
      time:      { baseline: 50, post: 32 },
      communication: { baseline: 55, post: 36 },
      wellbeing:     { baseline: 52, post: 33 }
    }
  },
  moderate: {
    workshop: {
      time:      { baseline: 60, post: 42 },
      communication: { baseline: 62, post: 45 },
      wellbeing:     { baseline: 58, post: 40 }
    },
    online: {
      time:      { baseline: 60, post: 40 },
      communication: { baseline: 62, post: 43 },
      wellbeing:     { baseline: 58, post: 38 }
    },
    peer: {
      time:      { baseline: 60, post: 44 },
      communication: { baseline: 62, post: 46 },
      wellbeing:     { baseline: 58, post: 41 }
    }
  },
  high: {
    workshop: {
      time:      { baseline: 70, post: 50 },
      communication: { baseline: 72, post: 52 },
      wellbeing:     { baseline: 68, post: 48 }
    },
    online: {
      time:      { baseline: 70, post: 48 },
      communication: { baseline: 72, post: 50 },
      wellbeing:     { baseline: 68, post: 46 }
    },
    peer: {
      time:      { baseline: 70, post: 49 },
      communication: { baseline: 72, post: 51 },
      wellbeing:     { baseline: 68, post: 47 }
    }
  }
};

// Helper to generate recommendation text
function generateText(stress, format, boundary) {
  if (stress === 'high' && format === 'workshop') {
    return `An interactive workshop focused on ${boundary} will give you hands‑on strategies and peer support—ideal if you’re feeling highly stressed.`;
  }
  if (stress === 'high' && format === 'online') {
    return `A self‑paced online course on ${boundary} lets you build skills on your own schedule, which can ease high stress without added time pressure.`;
  }
  if (stress === 'moderate' && format === 'peer') {
    return `A peer support group discussing ${boundary} provides accountability and shared learning, perfect for moderate stress levels.`;
  }
  // default blended suggestion
  return `Consider a blended approach: a short workshop on ${boundary} followed by online resources to reinforce what you’ve learned.`;
}

// Render Chart.js bar chart
let chartInstance;
function renderChart(baseline, post) {
  const ctx = document.getElementById('resultChart').getContext('2d');
  if (chartInstance) chartInstance.destroy();
  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Baseline Intention to Leave (%)', 'Post‑training Intention to Leave (%)'],
      datasets: [{
        label: 'Percentage',
        data: [baseline, post],
        backgroundColor: ['rgba(0,99,204,0.6)', 'rgba(60,179,113,0.6)'],
        borderColor: ['rgba(0,99,204,1)', 'rgba(60,179,113,1)'],
        borderWidth: 1
      }]
    },
    options: {
      scales: { y: { beginAtZero: true, max: 100 } },
      responsive: true,
      plugins: { legend: { display: false } }
    }
  });
}

// Form submission handler
document.getElementById('decisionForm').addEventListener('submit', e => {
  e.preventDefault();
  const s = document.getElementById('stress').value;
  const f = document.getElementById('format').value;
  const b = document.getElementById('boundary').value;

  // Text recommendation
  const text = generateText(s, f, b);
  const resultText = document.getElementById('resultText');
  resultText.textContent = text;
  resultText.classList.remove('hidden');

  // Lookup simulated numbers and plot
  const { baseline, post } = outcomes[s][f][b];
  document.getElementById('resultChart').classList.remove('hidden');
  renderChart(baseline, post);
});
