const swiperWrapper = document.querySelector(".swiper-wrapper");

function insertContent(dataCityDaily, dataCityPeriods, dataSearchCity) {
    console.log("dataSearchCity :", dataSearchCity);
    console.log("dataCityDaily :", dataCityDaily);
    console.log("dataCityPeriods :", dataCityPeriods);
    for (let i = 0; i < 14; i++) {
        const currentDate = getDateFor(i);
        swiperWrapper.innerHTML += `
        <div class="swiper-slide">
            <main id="mainLooking">
                <nav>
                    <p class="location"><span>${dataSearchCity.cities[0].name}</span>, France</p>
                    <p class="date">${currentDate.name} ${currentDate.number}</p>
                    <p class="description">${weatherValue(dataCityDaily.forecast[i].weather)}</p>
                </nav>
                <p id="numbersDegree">${dataCityDaily.forecast[i].tmax}°</p>

                <!-- quatre carré -->
                <div id="quarterOfDays">
                    <!-- <p class="am">AM</p> -->
                    <!-- <p class="pm">PM</p> -->
                    <div class="quarterOfDay">
                        <p><span>00H - 06H :</span> ${weatherValue(dataCityPeriods.forecast[i][0].weather)}</p>
                        <p class="numbersDegree">${dataCityPeriods.forecast[i][0].temp2m}°</p>
                        </div>
                        <div class="quarterOfDay">
                        <p><span>06H - 12H :</span> ${weatherValue(dataCityPeriods.forecast[i][1].weather)}</p>
                        <p class="numbersDegree">${dataCityPeriods.forecast[i][1].temp2m}°</p>
                        </div>
                        <div class="quarterOfDay">
                        <p><span>12H - 18H :</span> ${weatherValue(dataCityPeriods.forecast[i][2].weather)}</p>
                        <p class="numbersDegree">${dataCityPeriods.forecast[i][2].temp2m}°</p>
                        </div>
                        <div class="quarterOfDay">
                        <p><span>18H - 00H :</span> ${weatherValue(dataCityPeriods.forecast[i][3].weather)}</p>
                        <p class="numbersDegree">${dataCityPeriods.forecast[i][3].temp2m}°</p>
                    </div>
                </div>
            </main>
    </div>
    `}
    swiperInit();
}