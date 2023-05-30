const weatherApiKey = 'c6e3ec46ee4e0fcd09e9294be71fd74778354d8cac0257c0dc8525d943dfc117';
const weekDays = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const sectionDayDivs = document.querySelector("#dayDivs"); // ? A changer
const titleCityName = document.querySelector("#titleCityName");
const cityInput = document.getElementById("city");

function sendCityName(event) {
    if (event.keyCode === 13) {
        const city = cityInput.value;
        const urlCityName = `https://api.meteo-concept.com/api/location/cities?token=${weatherApiKey}&search=${city}`;

        fetch(urlCityName)
            .then(response => response.json())
            .then(data => {
                const cityInsee = data.cities[0].insee;
                const urlCityInsee = `https://api.meteo-concept.com/api/forecast/daily/periods?token=${weatherApiKey}&insee=${cityInsee}`;
                return fetch(urlCityInsee);
            })
            .then(response => response.json())
            .then(data => {
                sectionDayDivs.innerHTML = ``;
                titleCityName.innerHTML = `${data.city.name}`;
                const forecastHtml = data.forecast.map((element) => {
                    const day = new Date();
                    day.setDate(day.getDate() + element[0].day);
                    const weekDay = weekDays[day.getDay()];
                    return (
                        `<div class="dayDiv">
                            <h3>${weekDay}</h3>
                            <p>De 0h à 6h : ${element[0].temp2m}°C</p>
                            <p>De 6h à 12h : ${element[1].temp2m}°C</p>
                            <p>De 12h à 18h : ${element[2].temp2m}°C</p>
                            <p>De 18h à 0h : ${element[3].temp2m}°C</p>
                        </div>`
                    );
                }).join('');
                sectionDayDivs.innerHTML += forecastHtml;
            })
            .catch(error => console.error(error));
    }
}

// ? signification des périodes
// ? period: 0 : prévisions pour la nuit, de minuit à 6 heures du matin.
// ? period: 1 : prévisions pour la matinée, de 6 heures à midi.
// ? period: 2 : prévisions pour l'après-midi, de midi à 18 heures.
// ? period: 3 : prévisions pour la soirée, de 18 heures à minuit.

// console.log(weatherMeaning[data.forecast[0][0].weather]);
// console.log(weatherMeaning[data.forecast[0][1].weather]);
// console.log(weatherMeaning[data.forecast[0][2].weather]);
// console.log(weatherMeaning[data.forecast[0][3].weather]);
// console.log('Prévision météo pour la ville de ' + cityName);
// console.log('cette nuit il a fait ' + data.forecast[0][0].temp2m + ' °C');
// console.log('ce matin il a fait ' + data.forecast[0][1].temp2m + ' °C');
// console.log('cette aprem il fera ' + data.forecast[0][2].temp2m + ' °C');
// console.log('ce soir il fera ' + data.forecast[0][3].temp2m + ' °C');