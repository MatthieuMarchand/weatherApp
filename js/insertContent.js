const swiperWrapper = document.querySelector(".swiper-wrapper");

function insertContent(dataCityDaily, dataCityPeriods, dataSearchCity) {
    console.log("dataSearchCity :", dataSearchCity);
    console.log("dataCityDaily :", dataCityDaily);
    console.log("dataCityPeriods :", dataCityPeriods);
    for (let i = 0; i < 14; i++) {
        swiperWrapper.innerHTML += `
        <div class="swiper-slide">
        <nav>
            <p class="location"><span>${dataSearchCity.cities[0].name}</span>, France</p>
            <p class="description">${weatherValue(dataCityDaily.forecast[i].weather)}</p>
        </nav>
        <p id="numbersDegree">${dataCityDaily.forecast[i].tmax}°</p>

        <!-- quatre carré -->
        <div id="quarterOfDays">
            <p class="am">AM</p>
            <p class="pm">PM</p>
            <div class="quarterOfDay">
                <p>00H - 06H</p>
                <p class="description">${weatherValue(dataCityPeriods.forecast[i][0].weather)}</p>
                <div>
                    <img src="/images/icons/icon-10.svg" alt="probability of rain">
                    <p class="probaRain">${dataCityPeriods.forecast[i][0].probarain}%</p>
                </div>
                <div>
                    <img src="/images/icons/icon-9.svg" alt="Medium wind">
                    <p class="probaWind">${dataCityPeriods.forecast[i][0].wind10m} km/h</p>
                </div>
            </div>
            <div class="quarterOfDay">
                <p>12H - 18H</p>
                <p class="description">${weatherValue(dataCityPeriods.forecast[i][1].weather)}</p>
                <div>
                    <img src="/images/icons/icon-10.svg" alt="probability of rain">
                    <p class="probaRain">${dataCityPeriods.forecast[i][1].probarain}%</p>
                </div>
                <div>
                    <img src="/images/icons/icon-9.svg" alt="Medium wind">
                    <p class="probaWind">${dataCityPeriods.forecast[i][1].wind10m} km/h</p>
                </div>
            </div>
            <div class="quarterOfDay">
                <p>06H - 12H</p>
                <p class="description">${weatherValue(dataCityPeriods.forecast[i][2].weather)}</p>
                <div>
                    <img src="/images/icons/icon-10.svg" alt="probability of rain">
                    <p class="probaRain">${dataCityPeriods.forecast[i][2].probarain}%</p>
                </div>
                <div>
                    <img src="/images/icons/icon-9.svg" alt="Medium wind">
                    <p class="probaWind">${dataCityPeriods.forecast[i][2].wind10m} km/h</p>
                </div>
            </div>
            <div class="quarterOfDay">
                <p>18H - 06H</p>
                <p class="description">${weatherValue(dataCityPeriods.forecast[i][3].weather)}</p>
                <div>
                    <img src="/images/icons/icon-10.svg" alt="probability of rain">
                    <p class="probaRain">${dataCityPeriods.forecast[i][3].probarain}%</p>
                </div>
                <div>
                    <img src="/images/icons/icon-9.svg" alt="Medium wind">
                    <p class="probaWind">${dataCityPeriods.forecast[i][3].wind10m} km/h</p>
                </div>
            </div>
        </div>
    </div>
    `}
    swiperInit();
}