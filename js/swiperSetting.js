const swiper = new Swiper('.swiper', {
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
})