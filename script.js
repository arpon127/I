fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('title').textContent = data.title;
    document.getElementById('subtitle').textContent = data.subtitle;

    const table = document.getElementById('schedule-table');
    data.schedule.forEach(item => {
      const row = `<tr>
        <td>${item.day}</td>
        <td>${item.date}</td>
        <td>${item.event}</td>
      </tr>`;
      table.innerHTML += row;
    });
  });
