fetch('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTY0MDYzMDA0MzM1MjZmNTUzYzUxMzQi_pc', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "FirstName": "Himel Last",
      "LastName": "john.doe@example.com",
      "Checkbox": ["option1", "option2", "option3"]
    })
  })
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));
  