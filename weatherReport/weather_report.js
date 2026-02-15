function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(apiUrl)
    .then(response => {
      if (!response.ok) throw new Error('Ciudad no encontrada'); 
      return response.json();
    })
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      // Es una buena práctica usar textContent o limpiar antes de asignar HTML
      weatherInfo.innerHTML = `<h2>Clima en ${data.name}</h2>
                               <p>Temperatura: ${data.main.temp} °C</p>
                               <p>Clima: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>No se encontraron datos, intenta otra vez por fa</p>`;
      });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
