// const weatherApiKey = 'c6e3ec46ee4e0fcd09e9294be71fd74778354d8cac0257c0dc8525d943dfc117'; // token 1
// const weatherApiKey = '5aaaade0c23bf25892a797a9093b8e34a4497e1abca5864714f449a3d9ed726c'; // token 2
const weatherApiKey = '0b1174d763d0a5e1a4b3bc54f881035222eaba7869180cc0fe7a58c15fd51da1'; // token 3
const weekDays = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];

// function sendCityName() {
//     const urlCityName = `https://api.meteo-concept.com/api/location/cities?token=${weatherApiKey}&search=${currentCity}`;
//     fetch(urlCityName)
//         .then(response => response.json())
//         .then(data => {
//             const cityInsee = data.cities[0].insee;
//             const urlCityDaily = `https://api.meteo-concept.com/api/forecast/daily?token=${weatherApiKey}&insee=${cityInsee}`;
//             return fetch(urlCityDaily);
//         })
//         .then(response => response.json())
//         .then(data => {
//             // console.log('daily:', data);

//             // insert
//             document.querySelector('.description').textContent = weatherValue(data.forecast[0].weather);

//             const cityInsee = data.city.insee;
//             const urlCityPeriods = `https://api.meteo-concept.com/api/forecast/daily/periods?token=${weatherApiKey}&insee=${cityInsee}`;
//             return fetch(urlCityPeriods);
//         })
//         .then(response => response.json())
//         .then(data => {
//             // console.log('periods:', data);

//             //insert
//             document.querySelector('.location span').textContent = data.city.name;
//             document.getElementById("numbersDegree").innerHTML = data.forecast[0][getCurrentTime()].temp2m + "°";
//             const divs = document.getElementById('quarterOfDays').getElementsByClassName('quarterOfDay');
//             for (let i = 0; i < 4; i++) {
//                 divs[i].querySelector(".description").innerHTML = weatherValue(data.forecast[0][i].weather);
//                 divs[i].querySelector(".probaWind").innerHTML = data.forecast[0][i].wind10m + " km/h";
//                 divs[i].querySelector(".probaRain").innerHTML = data.forecast[0][i].probarain + "%";
//             }
//         })
//         .catch(error => console.error(error));
// }

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

let dataCityDaily;
let dataCityPeriods;
let dataSearchCity;

const urlSearchCity = `https://api.meteo-concept.com/api/location/cities?token=${weatherApiKey}&search=${currentCity}`;
fetch(urlSearchCity)
    .then(response => response.json())
    .then(data => {
        dataSearchCity = data;

        let cityInsee = dataSearchCity.cities[0].insee;

        const urlCityDaily = `https://api.meteo-concept.com/api/forecast/daily?token=${weatherApiKey}&insee=${cityInsee}`;
        const urlCityPeriods = `https://api.meteo-concept.com/api/forecast/daily/periods?token=${weatherApiKey}&insee=${cityInsee}`;

        // Créer un tableau de promesses pour les deux appels fetch
        const promises = [
            fetch(urlCityDaily).then(response => response.json()),
            fetch(urlCityPeriods).then(response => response.json())
        ];

        // Attendre que les deux promesses soient résolues
        return Promise.all(promises);
    })
    .then(([cityDailyData, cityPeriodsData]) => {
        // Récupérer les données des deux promesses dans des variables distinctes
        dataCityDaily = cityDailyData;
        dataCityPeriods = cityPeriodsData;

        // Appeler votre fonction avec les données en tant que paramètres
        insertContent(dataCityDaily, dataCityPeriods, dataSearchCity);
    })
    .catch(error => console.error(error));