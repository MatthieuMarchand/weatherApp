// const weatherApiKey = 'c6e3ec46ee4e0fcd09e9294be71fd74778354d8cac0257c0dc8525d943dfc117'; // token 1
const weatherApiKey = '5aaaade0c23bf25892a797a9093b8e34a4497e1abca5864714f449a3d9ed726c'; // token 2
const weekDays = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const sectionDayDivs = document.querySelector("#dayDivs"); // ? A changer
// const titleCityName = document.querySelector("#titleCityName");

function sendCityName() {
    const urlCityName = `https://api.meteo-concept.com/api/location/cities?token=${weatherApiKey}&search=${currentCity}`;
    fetch(urlCityName)
        .then(response => response.json())
        .then(data => {
            const cityInsee = data.cities[0].insee;
            const urlCityDaily = `https://api.meteo-concept.com/api/forecast/daily?token=${weatherApiKey}&insee=${cityInsee}`;
            return fetch(urlCityDaily);
        })
        .then(response => response.json())
        .then(data => {
            // console.log('daily:', data);

            const weatherNumber = data.forecast[0].weather;
            document.querySelector('.description').textContent = weatherValue(weatherNumber);

            const cityInsee = data.city.insee;
            const urlCityPeriods = `https://api.meteo-concept.com/api/forecast/daily/periods?token=${weatherApiKey}&insee=${cityInsee}`;
            return fetch(urlCityPeriods);
        })
        .then(response => response.json())
        .then(data => {
            console.log('periods:', data);

            document.querySelector('.location span').textContent = data.city.name;
            console.log(data.forecast[0][getCurrentTime()].temp2m);
            document.getElementById("numbersDegree").innerHTML = data.forecast[0][getCurrentTime()].temp2m + "°";
        })
        .catch(error => console.error(error));
}

function getCurrentTime() {
    const currentHour = new Date().getHours();
    if (currentHour >= 0 && currentHour < 6) {
        return 0;
    } else if (currentHour >= 6 && currentHour < 12) {
        return 1;
    } else if (currentHour >= 12 && currentHour < 18) {
        return 2;
    } else {
        return 3;
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



// const cityInsee = '75056';
// console.log(cityInsee);

// const today = new Date();
// const date = new Date(today); // "date": jour que je veux connaitre
// date.setDate(date.getDate() + 0); // "+1" pour définir un jour après

// const year = date.getFullYear();
// const month = String(date.getMonth() + 1).padStart(2, '0');
// const day = String(date.getDate()).padStart(2, '0');

// const fullDate = `${year}-${month}-${day}`;

// // const urlWithDate = `https://api.meteo-concept.com/api/forecast/city/day?token=${weatherApiKey}&insee=${cityInsee}&date=${fullDate}`;

// const urlCityInsee = `https://api.meteo-concept.com/api/forecast/daily?token=${weatherApiKey}&insee=${cityInsee}`;

// fetch(urlCityInsee)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         // const weather = data.forecast.weather;
//         // console.log(weather);
//     })
//     .catch(error => {
//         console.error(error);
//     });



// ancien code :
            // sectionDayDivs.innerHTML = ``;
            // titleCityName.innerHTML = `${data.city.name}`;
            // const forecastHtml = data.forecast.map((element) => {
            //     const day = new Date();
            //     day.setDate(day.getDate() + element[0].day);
            //     const weekDay = weekDays[day.getDay()];
            //     return (
            //         `<div class="dayDiv">
            //             <h3>${weekDay}</h3>
            //             <p>De 0h à 6h : ${element[0].temp2m}°C</p>
            //             <p>De 6h à 12h : ${element[1].temp2m}°C</p>
            //             <p>De 12h à 18h : ${element[2].temp2m}°C</p>
            //             <p>De 18h à 0h : ${element[3].temp2m}°C</p>
            //         </div>`
            //     );
            // }).join('');
            // sectionDayDivs.innerHTML += forecastHtml;