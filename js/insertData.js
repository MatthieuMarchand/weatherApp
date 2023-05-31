sendCityName();

// const urlCityName = `https://api.meteo-concept.com/api/location/cities?token=${weatherApiKey}&search=${currentCity}`;

// test()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => console.error(error));

// function test() {
//     return fetch(urlCityName)
//         .then(response => response.json())
//         .then(data => {
//             console.log("avant le return", data);
//             return data;
//         })
//             .catch(error => {
//             console.error(error);
//             throw error;
//         });
// }

// fetch(`https://api.meteo-concept.com/api/location/cities?token=${weatherApiKey}&search=${currentCity}`)
//     .then(response => response.json())
//     .then(data => {
//         const dataSearchCity = data;
//         console.log(dataSearchCity);

//         const cityInsee = data.cities[0].insee;
//         return fetch(`https://api.meteo-concept.com/api/forecast/daily?token=${weatherApiKey}&insee=${cityInsee}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//         const dataDaily = data;
//         console.log(dataDaily);

//         const cityInsee = data.city.insee;
//         return fetch(`https://api.meteo-concept.com/api/forecast/daily/periods?token=${weatherApiKey}&insee=${cityInsee}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//         const dataDailyPeriods = data;
//         console.log(dataDailyPeriods);
//     })
//     .catch(error => console.error(error));

// secours
// function searchCity() {
//     fetch(`https://api.meteo-concept.com/api/location/cities?token=${weatherApiKey}&search=${currentCity}`)
//         .then(response => response.json())
//         .then(data => {
//             return data;
//         })
//         .catch(error => console.error(error));
// }
// function forecastDaily() {
//     fetch(`https://api.meteo-concept.com/api/forecast/daily?token=${weatherApiKey}&insee=${cityInsee}`)
//         .then(response => response.json())
//         .then(data => {
//             return data;
//         })
//         .catch(error => console.error(error));
// }
// function forecastDailyPeriods() {
//     fetch(`https://api.meteo-concept.com/api/forecast/daily/periods?token=${weatherApiKey}&insee=${cityInsee}`)
//         .then(response => response.json())
//         .then(data => {
//             return data;
//         })
//         .catch(error => console.error(error));
// }