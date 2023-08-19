function weatherValue(weatherNumber) {
  for (let i = 0; i < weatherIcons.length; i++) {
    if (weatherIcons[i].number === weatherNumber) {
      return (weatherIcons[i].roughValue);
    }
  }
}
function weatherSrc(weatherNumber) {
  for (let i = 0; i < weatherIcons.length; i++) {
    if (weatherIcons[i].number === weatherNumber) {
      return (weatherIcons[i].roughSrc);
    }
  }
}

let weatherIcons = [
  {
    number: 0,
    value:	"Soleil",
    roughValue: "Ensoleillé",
    roughSrc: "/images/icons/icon-1.svg",
    src: "/images/icons/icon-1.svg"
  },
  {
    number: 1,
    value:	"Peu nuageux",
    roughValue: "Ensoleillé",
    roughSrc: "/images/icons/icon-1.svg",
    src: "/images/icons/icon-3.svg"
  },
  {
    number: 2,
    value:	"Ciel voilé",
    roughValue: "Ciel voilé",
    roughSrc: "/images/icons/icon-1.svg",
    src: "/images/icons/icon-3.svg"
  },
  {
    number: 3,
    value:	"Nuageux",
    roughValue: "Nuageux",
    roughSrc: "/images/icons/icon-3.svg",
    src: "/images/icons/icon-2.svg"
  },
  {
    number: 4,
    value:	"Très nuageux",
    roughValue: "Nuageux",
    roughSrc: "/images/icons/icon-3.svg",
    src: "/images/icons/icon-2.svg"
  },
  {
    number: 5,
    value:	"Couvert",
    roughValue: "Nuageux",
    roughSrc: "/images/icons/icon-3.svg",
    src: "/images/icons/icon-2.svg"
  },
  {
    number: 6,
    value:	"Brouillard",
    roughValue: "Brouillard",
    roughSrc: "/images/icons/icon-5.svg",
    src: "/images/icons/icon-5.svg"
  },
  {
    number: 7,
    value:	"Brouillard givrant",
    roughValue: "Brouillard",
    roughSrc: "/images/icons/icon-5.svg",
    src: "/images/icons/icon-5.svg"
  },
  {
    number: 10,
    value:	"Pluie faible",
    roughValue: "Pluie faible",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 11,
    value:	"Pluie modérée",
    roughValue: "Pluie modérée",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 12,
    value:	"Pluie forte",
    roughValue: "Pluie forte",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 13,
    value:	"Pluie faible verglaçante",
    roughValue: "Pluie faible",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 14,
    value:	"Pluie modérée verglaçante",
    roughValue: "Pluie modérée",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 15,
    value:	"Pluie forte verglaçante",
    roughValue: "Pluie forte",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 16,
    value:	"Bruine",
    roughValue: "Pluie faible",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 20,
    value:	"Neige faible",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 21,
    value:	"Neige modérée",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 22,
    value:	"Neige forte",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 30,
    value:	"Pluie et neige mêlées faibles",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 31,
    value:	"Pluie et neige mêlées modérées",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 32,
    value:	"Pluie et neige mêlées fortes",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 40,
    value:	"Averses de pluie locales et faibles",
    roughValue: "Pluie faible",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 41,
    value:	"Averses de pluie locales",
    roughValue: "Pluie modérée",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 42,
    value:	"Averses locales et fortes",
    roughValue: "Pluie forte",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 43,
    value:	"Averses de pluie faibles",
    roughValue: "Pluie faible",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 44,
    value:	"Averses de pluie",
    roughValue: "Pluie modérée",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 45,
    value:	"Averses de pluie fortes",
    roughValue: "Pluie forte",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 46,
    value:	"Averses de pluie faibles et fréquentes",
    roughValue: "Pluie faible",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 47,
    value:	"Averses de pluie fréquentes",
    roughValue: "Pluie modérée",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 48,
    value:	"Averses de pluie fortes et fréquentes",
    roughValue: "Pluie forte",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 60,
    value:	"Averses de neige localisées et faibles",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 61,
    value:	"Averses de neige localisées",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 62,
    value:	"Averses de neige localisées et fortes",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 63,
    value:	"Averses de neige faibles",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 64,
    value:	"Averses de neige",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 65,
    value:	"Averses de neige fortes",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 66,
    value:	"Averses de neige faibles et fréquentes",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 67,
    value:	"Averses de neige fréquentes",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 68,
    value:	"Averses de neige fortes et fréquentes",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 70,
    value:	"Averses de pluie et neige mêlées localisées et faibles",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 71,
    value:	"Averses de pluie et neige mêlées localisées",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 72,
    value:	"Averses de pluie et neige mêlées localisées et fortes",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 73,
    value:	"Averses de pluie et neige mêlées faibles",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 74,
    value:	"Averses de pluie et neige mêlées",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 75,
    value:	"Averses de pluie et neige mêlées fortes",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 76,
    value:	"Averses de pluie et neige mêlées faibles et nombreuses",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 77,
    value:	"Averses de pluie et neige mêlées fréquentes",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 78,
    value:	"Averses de pluie et neige mêlées fortes et fréquentes",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 100,
    value:	"Orages faibles et locaux",
    roughValue: "Orages",
    roughSrc: "/images/icons/icon-4.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 101,
    value:	"Orages locaux",
    roughValue: "Orages",
    roughSrc: "/images/icons/icon-4.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 102,
    value:	"Orages fort et locaux",
    roughValue: "Orages",
    roughSrc: "/images/icons/icon-4.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 103,
    value:	"Orages faibles",
    roughValue: "Orages",
    roughSrc: "/images/icons/icon-4.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 104,
    value:	"Orages",
    roughValue: "Orages",
    roughSrc: "/images/icons/icon-4.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 105,
    value:	"Orages forts",
    roughValue: "Orages",
    roughSrc: "/images/icons/icon-4.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 106,
    value:	"Orages faibles et fréquents",
    roughValue: "Orages",
    roughSrc: "/images/icons/icon-4.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 107,
    value:	"Orages fréquents",
    roughValue: "Orages",
    roughSrc: "/images/icons/icon-4.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 108,
    value:	"Orages forts et fréquents",
    roughValue: "Orages",
    roughSrc: "/images/icons/icon-4.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 120,
    value:	"Orages faibles et locaux de neige ou grésil",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 121,
    value:	"Orages locaux de neige ou grésil",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 122,
    value:	"Orages locaux de neige ou grésil",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 123,
    value:	"Orages faibles de neige ou grésil",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 124,
    value:	"Orages de neige ou grésil",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 125,
    value:	"Orages de neige ou grésil",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 126,
    value:	"Orages faibles et fréquents de neige ou grésil",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 127,
    value:	"Orages fréquents de neige ou grésil",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 128,
    value:	"Orages fréquents de neige ou grésil",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 130,
    value:	"Orages faibles et locaux de pluie et neige mêlées ou grésil",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 131,
    value:	"Orages locaux de pluie et neige mêlées ou grésil",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 132,
    value:	"Orages fort et locaux de pluie et neige mêlées ou grésil",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 133,
    value:	"Orages faibles de pluie et neige mêlées ou grésil",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 134,
    value:	"Orages de pluie et neige mêlées ou grésil",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 135,
    value:	"Orages forts de pluie et neige mêlées ou grésil",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 136,
    value:	"Orages faibles et fréquents de pluie et neige mêlées ou grésil",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 137,
    value:	"Orages fréquents de pluie et neige mêlées ou grésil",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 138,
    value:	"Orages forts et fréquents de pluie et neige mêlées ou grésil",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 140,
    value:	"Pluies orageuses",
    roughValue: "Orages",
    roughSrc: "/images/icons/icon-4.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 141,
    value:	"Pluie et neige mêlées à caractère orageux",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 142,
    value:	"Neige à caractère orageux",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 210,
    value:	"Pluie faible intermittente",
    roughValue: "Pluie faible",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 211,
    value:	"Pluie modérée intermittente",
    roughValue: "Pluie modérée",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 212,
    value:	"Pluie forte intermittente",
    roughValue: "Pluie forte",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 220,
    value:	"Neige faible intermittente",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 221,
    value:	"Neige modérée intermittente",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 222,
    value:	"Neige forte intermittente",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 230,
    value:	"Pluie et neige mêlées",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 231,
    value:	"Pluie et neige mêlées",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 232,
    value:	"Pluie et neige mêlées",
    roughValue: "Neige",
    roughSrc: "/images/icons/icon-7.svg",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 235,
    value:	"Averses de grêle",
    roughValue: "Grêle",
    roughSrc: "/images/icons/icon-6.svg",
    src: "/images/icons/icon-6.svg"
  }
];