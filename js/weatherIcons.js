
function weatherValue(weatherNumber) {
  for (let i = 0; i < weatherIcons.length; i++) {
    if (weatherIcons[i].number === weatherNumber) {
      return (weatherIcons[i].value);
    }
  }
}
function weatherSrc(weatherNumber) {
  for (let i = 0; i < weatherIcons.length; i++) {
    if (weatherIcons[i].number === weatherNumber) {
      return (weatherIcons[i].src);
    }
  }
}

let weatherIcons = [
  {
    number: 0,
    value:	"Soleil",
    src: "/images/icons/icon-1.svg"
  },
  {
    number: 1,
    value:	"Peu nuageux",
    src: "/images/icons/icon-3.svg"
  },
  {
    number: 2,
    value:	"Ciel voilé",
    src: "/images/icons/icon-3.svg"
  },
  {
    number: 3,
    value:	"Nuageux",
    src: "/images/icons/icon-2.svg"
  },
  {
    number: 4,
    value:	"Très nuageux",
    src: "/images/icons/icon-2.svg"
  },
  {
    number: 5,
    value:	"Couvert",
    src: "/images/icons/icon-2.svg"
  },
  {
    number: 6,
    value:	"Brouillard",
    src: "/images/icons/icon-5.svg"
  },
  {
    number: 7,
    value:	"Brouillard givrant",
    src: "/images/icons/icon-5.svg"
  },
  {
    number: 10,
    value:	"Pluie faible",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 11,
    value:	"Pluie modérée",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 12,
    value:	"Pluie forte",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 13,
    value:	"Pluie faible verglaçante",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 14,
    value:	"Pluie modérée verglaçante",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 15,
    value:	"Pluie forte verglaçante",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 16,
    value:	"Bruine",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 20,
    value:	"Neige faible",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 21,
    value:	"Neige modérée",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 22,
    value:	"Neige forte",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 30,
    value:	"Pluie et neige mêlées faibles",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 31,
    value:	"Pluie et neige mêlées modérées",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 32,
    value:	"Pluie et neige mêlées fortes",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 40,
    value:	"Averses de pluie locales et faibles",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 41,
    value:	"Averses de pluie locales",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 42,
    value:	"Averses locales et fortes",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 43,
    value:	"Averses de pluie faibles",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 44,
    value:	"Averses de pluie",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 45,
    value:	"Averses de pluie fortes",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 46,
    value:	"Averses de pluie faibles et fréquentes",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 47,
    value:	"Averses de pluie fréquentes",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 48,
    value:	"Averses de pluie fortes et fréquentes",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 60,
    value:	"Averses de neige localisées et faibles",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 61,
    value:	"Averses de neige localisées",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 62,
    value:	"Averses de neige localisées et fortes",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 63,
    value:	"Averses de neige faibles",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 64,
    value:	"Averses de neige",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 65,
    value:	"Averses de neige fortes",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 66,
    value:	"Averses de neige faibles et fréquentes",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 67,
    value:	"Averses de neige fréquentes",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 68,
    value:	"Averses de neige fortes et fréquentes",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 70,
    value:	"Averses de pluie et neige mêlées localisées et faibles",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 71,
    value:	"Averses de pluie et neige mêlées localisées",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 72,
    value:	"Averses de pluie et neige mêlées localisées et fortes",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 73,
    value:	"Averses de pluie et neige mêlées faibles",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 74,
    value:	"Averses de pluie et neige mêlées",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 75,
    value:	"Averses de pluie et neige mêlées fortes",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 76,
    value:	"Averses de pluie et neige mêlées faibles et nombreuses",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 77,
    value:	"Averses de pluie et neige mêlées fréquentes",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 78,
    value:	"Averses de pluie et neige mêlées fortes et fréquentes",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 100,
    value:	"Orages faibles et locaux",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 101,
    value:	"Orages locaux",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 102,
    value:	"Orages fort et locaux",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 103,
    value:	"Orages faibles",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 104,
    value:	"Orages",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 105,
    value:	"Orages forts",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 106,
    value:	"Orages faibles et fréquents",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 107,
    value:	"Orages fréquents",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 108,
    value:	"Orages forts et fréquents",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 120,
    value:	"Orages faibles et locaux de neige ou grésil",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 121,
    value:	"Orages locaux de neige ou grésil",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 122,
    value:	"Orages locaux de neige ou grésil",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 123,
    value:	"Orages faibles de neige ou grésil",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 124,
    value:	"Orages de neige ou grésil",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 125,
    value:	"Orages de neige ou grésil",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 126,
    value:	"Orages faibles et fréquents de neige ou grésil",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 127,
    value:	"Orages fréquents de neige ou grésil",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 128,
    value:	"Orages fréquents de neige ou grésil",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 130,
    value:	"Orages faibles et locaux de pluie et neige mêlées ou grésil",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 131,
    value:	"Orages locaux de pluie et neige mêlées ou grésil",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 132,
    value:	"Orages fort et locaux de pluie et neige mêlées ou grésil",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 133,
    value:	"Orages faibles de pluie et neige mêlées ou grésil",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 134,
    value:	"Orages de pluie et neige mêlées ou grésil",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 135,
    value:	"Orages forts de pluie et neige mêlées ou grésil",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 136,
    value:	"Orages faibles et fréquents de pluie et neige mêlées ou grésil",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 137,
    value:	"Orages fréquents de pluie et neige mêlées ou grésil",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 138,
    value:	"Orages forts et fréquents de pluie et neige mêlées ou grésil",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 140,
    value:	"Pluies orageuses",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 141,
    value:	"Pluie et neige mêlées à caractère orageux",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 142,
    value:	"Neige à caractère orageux",
    src: "/images/icons/icon-4.svg"
  },
  {
    number: 210,
    value:	"Pluie faible intermittente",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 211,
    value:	"Pluie modérée intermittente",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 212,
    value:	"Pluie forte intermittente",
    src: "/images/icons/icon-6.svg"
  },
  {
    number: 220,
    value:	"Neige faible intermittente",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 221,
    value:	"Neige modérée intermittente",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 222,
    value:	"Neige forte intermittente",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 230,
    value:	"Pluie et neige mêlées",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 231,
    value:	"Pluie et neige mêlées",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 232,
    value:	"Pluie et neige mêlées",
    src: "/images/icons/icon-7.svg"
  },
  {
    number: 235,
    value:	"Averses de grêle",
    src: "/images/icons/icon-6.svg"
  }
];