const record = {
    "records": [
      {
        "fields": {
          "FirstName": "Himel Doe",
          "LastName": "john.doe@example.com",
          "Checkbox": ["option1", "option2"]
        }
      }
    ]
  };
  
function call(){
    fetch('https://api.airtable.com/v0/app21Ean77YTOrrH0/tblNwDaRIAWjFxvkT', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer pat4vOTGFUW4FyHJ6.df68631a1554bc3eda5a6d2b983c802c7e4e1ef63b58dbdbcceaa3bfeee68572`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(record)
      })
      .then(response => response.json())
      .then(data => console.log(data.records[0].fields))
      .catch(error => console.error('Error:', error))
}

call();

  
  