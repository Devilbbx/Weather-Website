const options = {method: 'GET',
    headers: {accept: 'application/json'}};
    
    fetch('https://api.tomorrow.io/v4/weather/forecast?location=newyork&apikey=XXX', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));