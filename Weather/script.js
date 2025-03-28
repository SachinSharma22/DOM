const APIKey = "fecacadb76f353bd387212d46829ca26";
async function fetchWeatherDetail() {
    let city = "goa";
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`);

    //convert data into JSON formate
    const data = await response.json();
    console.log("Weather data:-> " , data);

    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} C`;

    document.body.appendChild(newPara);
}

async function getCustomWeatherDetail() {
    let latitude = 15.6333;
    let longitude = 18.3333;
    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}&units=matric`);

    const data2 = await result.json();
    console.log("Weather Data:-> ", data2);
    console.log(data2);
    
}