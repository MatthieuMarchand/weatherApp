function getDateFor(nombreJours) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + nombreJours);

    const numberDate = currentDate.getDate();
    const namedates = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const nameDate = namedates[currentDate.getDay()];

    return {
        number: numberDate,
        name: nameDate
    };
}