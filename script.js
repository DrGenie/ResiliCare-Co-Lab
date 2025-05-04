const simulatedResults = [
  { workshop: "Workshop 1", participants: 20, satisfaction: 4.6, leaveBaseline: 60, leavePost: 45 },
  { workshop: "Workshop 2", participants: 15, satisfaction: 4.2, leaveBaseline: 55, leavePost: 40 },
  { workshop: "Workshop 3", participants: 25, satisfaction: 4.8, leaveBaseline: 65, leavePost: 50 }
];

function renderResultsTable() {
  const container = document.getElementById('results');
  const table = document.createElement('table');
  let thead = '<thead><tr>' +
    '<th>Workshop</th><th>Participants</th><th>Avg. Satisfaction</th>' +
    '<th>Leave Intention (Baseline %)</th><th>Leave Intention (Post %)</th>' +
    '</tr></thead>';
  let tbody = '<tbody>' + simulatedResults.map(r =>
    `<tr>
      <td>${r.workshop}</td>
      <td>${r.participants}</td>
      <td>${r.satisfaction.toFixed(1)}</td>
      <td>${r.leaveBaseline}%</td>
      <td>${r.leavePost}%</td>
    </tr>`).join('') + '</tbody>';
  table.innerHTML = thead + tbody;
  container.appendChild(table);
}

document.addEventListener('DOMContentLoaded', renderResultsTable);