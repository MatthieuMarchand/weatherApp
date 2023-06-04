// const weatherApiKey = 'c6e3ec46ee4e0fcd09e9294be71fd74778354d8cac0257c0dc8525d943dfc117'; // token 1
const weatherApiKey = '5aaaade0c23bf25892a797a9093b8e34a4497e1abca5864714f449a3d9ed726c'; // token 2
// const weatherApiKey = '0b1174d763d0a5e1a4b3bc54f881035222eaba7869180cc0fe7a58c15fd51da1'; // token 3

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