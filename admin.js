document.getElementById('save-btn').addEventListener('click', () => {
  const title = document.getElementById('title-input').value;
  const day = document.getElementById('day-input').value;
  const date = document.getElementById('date-input').value;
  const event = document.getElementById('event-input').value;

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      if (title) data.title = title;
      if (day && date && event) {
        data.schedule.push({ day, date, event });
      }

      // Save the updated data
      console.log('Updated Data:', data);
    });
});
