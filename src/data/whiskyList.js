const whiskyList = [
  {
    "name": "Macallan Sherry Cask Strength",
    "slug": "macallancaskstrength",
    "region": "Speyside",
    "peatScore": 59,
    "colorScore": 76,
    "price": 73,
    "rating": 91
  },
  {
    "name": "Aberlour A'bunadh",
    "slug": "aberlourabunadh",
    "region": "Speyside",
    "peatScore": 74,
    "colorScore": 70,
    "price": 74,
    "rating": 90
  },
  {
    "name": "Macallan 18 Sherry",
    "slug": "macallan18sherry",
    "region": "Speyside",
    "peatScore": 68,
    "colorScore": 60,
    "price": 172,
    "rating": 90
  },
  {
    "name": "Macallan 12 Sherry",
    "slug": "macallan12sherry",
    "region": "Speyside",
    "peatScore": 57,
    "colorScore": 56,
    "price": 53,
    "rating": 83
  },
  {
    "name": "Aberlour 12 Non Chill Filtered",
    "slug": "aberlour12ncf",
    "region": "Speyside",
    "peatScore": 47,
    "colorScore": 66,
    "price": 59,
    "rating": 90
  },
  {
    "name": "Glenfarclas 17",
    "slug": "glenfarclas17",
    "region": "Highland",
    "peatScore": 23,
    "colorScore": 64,
    "price": 100,
    "rating": 88
  },
  {
    "name": "Glendronach 12",
    "slug": "glendronach12",
    "region": "Highland",
    "peatScore": 38,
    "colorScore": 54,
    "price": 51,
    "rating": 83
  },
  {
    "name": "Glenfarclas 12",
    "slug": "glenfarclas12",
    "region": "Highland",
    "peatScore": 24,
    "colorScore": 46,
    "price": 49,
    "rating": 85
  },
  {
    "name": "Glenmorangie Quinta Ruban",
    "slug": "glenmorangiequinta",
    "region": "Highland",
    "peatScore": 10,
    "colorScore": 34,
    "price": 51,
    "rating": 85
  },
  {
    "name": "Auchentoshan Three Wood",
    "slug": "auchentoshan3wood",
    "region": "Lowland",
    "peatScore": 14,
    "colorScore": 24,
    "price": 72,
    "rating": 84
  },
  {
    "name": "Glenlivet 18",
    "slug": "glenlivet18",
    "region": "Speyside",
    "peatScore": 17,
    "colorScore": 12,
    "price": 88,
    "rating": 84
  },
  {
    "name": "Glengoyne 10",
    "slug": "glengoyne10",
    "region": "Highland",
    "peatScore": 31,
    "colorScore": 17,
    "price": 41,
    "rating": 71
  },
  {
    "name": "Balvenie 14 Caribbean Cask",
    "slug": "balveniecaribbean",
    "region": "Speyside",
    "peatScore": 29,
    "colorScore": 30,
    "price": 63,
    "rating": 85
  },
  {
    "name": "Glenmorangie Lasanta",
    "slug": "glenmorangielasanta",
    "region": "Highland",
    "peatScore": 49,
    "colorScore": 37,
    "price": 48,
    "rating": 78
  },
  {
    "name": "Aberlour 12 Double Cask Matured",
    "slug": "aberlour12dc",
    "region": "Speyside",
    "peatScore": 58,
    "colorScore": 43,
    "price": 43,
    "rating": 84
  },
  {
    "name": "Glenfiddich 15",
    "slug": "glenfiddich15",
    "region": "Speyside",
    "peatScore": 73,
    "colorScore": 37,
    "price": 60,
    "rating": 83
  },
  {
    "name": "Tomatin 12",
    "slug": "tomatin12",
    "region": "Highland",
    "peatScore": 66,
    "colorScore": 30,
    "price": 29,
    "rating": 76
  },
  {
    "name": "Pig's Nose",
    "slug": "pigsnose",
    "region": "Other",
    "peatScore": 74,
    "colorScore": 27,
    "price": 28,
    "rating": 77
  },
  {
    "name": "Glenlivet 16 Nadurra",
    "slug": "glenlivetnadurra",
    "region": "Speyside",
    "peatScore": 52,
    "colorScore": 20,
    "price": 69,
    "rating": 86
  },
  {
    "name": "Highland Park 15",
    "slug": "highlandpark15",
    "region": "Island",
    "peatScore": 9,
    "colorScore": 6,
    "price": 150,
    "rating": 87
  },
  {
    "name": "Oban 18",
    "slug": "oban18",
    "region": "Highland",
    "peatScore": 29,
    "colorScore": 8,
    "price": 85,
    "rating": 89
  },
  {
    "name": "Glenlivet 15 French Oak Reserve",
    "slug": "glenlivet15",
    "region": "Speyside",
    "peatScore": 52,
    "colorScore": 7,
    "price": 53,
    "rating": 81
  },
  {
    "name": "Glenfiddich 12",
    "slug": "glenfiddich12",
    "region": "Speyside",
    "peatScore": 59,
    "colorScore": -1,
    "price": 41,
    "rating": 78
  },
  {
    "name": "Springbank 10",
    "slug": "springbank10",
    "region": "Campbeltown",
    "peatScore": 4,
    "colorScore": -3,
    "price": 61,
    "rating": 86
  },
  {
    "name": "Oban 14",
    "slug": "oban14",
    "region": "Highland",
    "peatScore": 29,
    "colorScore": -6,
    "price": 72,
    "rating": 83
  },
  {
    "name": "Old Pulteney 12",
    "slug": "oldpulteney12",
    "region": "Highland",
    "peatScore": 49,
    "colorScore": -10,
    "price": 39,
    "rating": 83
  },
  {
    "name": "Glenlivet 12",
    "slug": "glenlivet12",
    "region": "Speyside",
    "peatScore": 62,
    "colorScore": -18,
    "price": 35,
    "rating": 77
  },
  {
    "name": "Glenmorangie Nectar D'Or",
    "slug": "glenmorangienectar",
    "region": "Highland",
    "peatScore": 35,
    "colorScore": -18,
    "price": 67,
    "rating": 83
  },
  {
    "name": "Deanston 12",
    "slug": "deanston12",
    "region": "Highland",
    "peatScore": 23,
    "colorScore": -22,
    "price": 53,
    "rating": 79
  },
  {
    "name": "Scapa 16",
    "slug": "scapa16",
    "region": "Island",
    "peatScore": 54,
    "colorScore": -27,
    "price": 72,
    "rating": 82
  },
  {
    "name": "Macallan 17 Fine Oak",
    "slug": "macallan17fo",
    "region": "Speyside",
    "peatScore": 21,
    "colorScore": -35,
    "price": 137,
    "rating": 91
  },
  {
    "name": "Macallan 10 Fine Oak",
    "slug": "macallan10fo",
    "region": "Speyside",
    "peatScore": 30,
    "colorScore": -48,
    "price": 45,
    "rating": 82
  },
  {
    "name": "Balvenie 12 Doublewood",
    "slug": "balvenie12dw",
    "region": "Speyside",
    "peatScore": 59,
    "colorScore": -43,
    "price": 51,
    "rating": 82
  },
  {
    "name": "Glenmorangie Original 10",
    "slug": "glenmorangie10o",
    "region": "Highland",
    "peatScore": 62,
    "colorScore": -58,
    "price": 49,
    "rating": 83
  },
  {
    "name": "Auchentoshan Classic",
    "slug": "auchentoshanclassic",
    "region": "Lowland",
    "peatScore": 66,
    "colorScore": -65,
    "price": 34,
    "rating": 77
  },
  {
    "name": "Glenkinchie 12",
    "slug": "glenkinchie12",
    "region": "Lowland",
    "peatScore": 59,
    "colorScore": -75,
    "price": 55,
    "rating": 80
  },
  {
    "name": "Dalwhinnie 15",
    "slug": "dalwhinnie15",
    "region": "Speyside",
    "peatScore": 47,
    "colorScore": -70,
    "price": 59,
    "rating": 83
  },
  {
    "name": "Tobermory 10",
    "slug": "tobermory10",
    "region": "Island",
    "peatScore": 14,
    "colorScore": -74,
    "price": 43,
    "rating": 81
  },
  {
    "name": "Bruichladdich Rocks",
    "slug": "bruichladdichrocks",
    "region": "Islay",
    "peatScore": -6,
    "colorScore": -58,
    "price": 45,
    "rating": 83
  },
  {
    "name": "Ledaig 10",
    "slug": "ledaig10",
    "region": "Island",
    "peatScore": -23,
    "colorScore": -72,
    "price": 48,
    "rating": 81
  },
  {
    "name": "Bruichladdich The Laddie Ten",
    "slug": "bruichladdichladdie",
    "region": "Islay",
    "peatScore": -2,
    "colorScore": -44,
    "price": 56,
    "rating": 87
  },
  {
    "name": "Glenfiddich 18",
    "slug": "glenfiddich18",
    "region": "Speyside",
    "peatScore": 1,
    "colorScore": -20,
    "price": 75,
    "rating": 85
  },
  {
    "name": "Cragganmore 12",
    "slug": "cragganmore12",
    "region": "Speyside",
    "peatScore": 5,
    "colorScore": -13,
    "price": 53,
    "rating": 80
  },
  {
    "name": "Highland Park 12",
    "slug": "highlandpark12",
    "region": "Island",
    "peatScore": -8,
    "colorScore": 0,
    "price": 48,
    "rating": 85
  },
  {
    "name": "Johnnie Walker Black Label",
    "slug": "johnniewalkerblack",
    "region": "Other",
    "peatScore": -20,
    "colorScore": -39,
    "price": 37,
    "rating": 78
  },
  {
    "name": "Bowmore 12",
    "slug": "bowmore12",
    "region": "Islay",
    "peatScore": -38,
    "colorScore": -52,
    "price": 46,
    "rating": 76
  },
  {
    "name": "Bruichladdich Port Charlotte",
    "slug": "bruichladdichpc",
    "region": "Islay",
    "peatScore": -58,
    "colorScore": -62,
    "price": 79,
    "rating": 87
  },
  {
    "name": "Bruichladdich Octomore",
    "slug": "bruichladdichoct",
    "region": "Islay",
    "peatScore": -81,
    "colorScore": -74,
    "price": 167,
    "rating": 92
  },
  {
    "name": "Kilchoman Peated",
    "slug": "kilchomanpeated",
    "region": "Islay",
    "peatScore": -71,
    "colorScore": -50,
    "price": 0,
    "rating": 0
  },
  {
    "name": "Ardbeg 10",
    "slug": "ardbeg10",
    "region": "Islay",
    "peatScore": -62,
    "colorScore": -43,
    "price": 57,
    "rating": 86
  },
  {
    "name": "Black Bottle",
    "slug": "blackbottle",
    "region": "Other",
    "peatScore": -40,
    "colorScore": -37,
    "price": 22,
    "rating": 77
  },
  {
    "name": "Caol Ila 12",
    "slug": "caolila12",
    "region": "Islay",
    "peatScore": -56,
    "colorScore": -31,
    "price": 60,
    "rating": 85
  },
  {
    "name": "Laphroaig 10 Cask Strength",
    "slug": "laphroaig10cs",
    "region": "Islay",
    "peatScore": -82,
    "colorScore": -37,
    "price": 60,
    "rating": 91
  },
  {
    "name": "Laphroaig 10",
    "slug": "laphroaig10",
    "region": "Islay",
    "peatScore": -69,
    "colorScore": -29,
    "price": 54,
    "rating": 87
  },
  {
    "name": "Smokehead",
    "slug": "smokehead",
    "region": "Islay",
    "peatScore": -38,
    "colorScore": -21,
    "price": 0,
    "rating": 71
  },
  {
    "name": "Ardmore Traditional Cask Peated",
    "slug": "ardmoretradpeated",
    "region": "Speyside",
    "peatScore": -32,
    "colorScore": -13,
    "price": 52,
    "rating": 79
  },
  {
    "name": "Laphroaig 18",
    "slug": "laphroaig18",
    "region": "Islay",
    "peatScore": -60,
    "colorScore": -17,
    "price": 90,
    "rating": 90
  },
  {
    "name": "Laphroaig Quarter Cask",
    "slug": "laphroaigqc",
    "region": "Islay",
    "peatScore": -76,
    "colorScore": -8,
    "price": 59,
    "rating": 90
  },
  {
    "name": "Talisker 10",
    "slug": "talisker10",
    "region": "Island",
    "peatScore": -51,
    "colorScore": -6,
    "price": 63,
    "rating": 87
  },
  {
    "name": "Balvenie 17 Peated Cask",
    "slug": "balveniepeated",
    "region": "Speyside",
    "peatScore": -38,
    "colorScore": 0,
    "price": 110,
    "rating": 90
  },
  {
    "name": "Benromach Peat Smoke",
    "slug": "benromachpeatsmoke",
    "region": "Speyside",
    "peatScore": -38,
    "colorScore": 7,
    "price": 60,
    "rating": 85
  },
  {
    "name": "Ardbeg Corryvreckan",
    "slug": "ardbegcorryvreckan",
    "region": "Islay",
    "peatScore": -64,
    "colorScore": 7,
    "price": 85,
    "rating": 91
  },
  {
    "name": "Lagavulin 12",
    "slug": "lagavulin12",
    "region": "Islay",
    "peatScore": -83,
    "colorScore": 24,
    "price": 99,
    "rating": 91
  },
  {
    "name": "Talisker Distiller's Edition",
    "slug": "taliskerDE",
    "region": "Island",
    "peatScore": -52,
    "colorScore": 18,
    "price": 86,
    "rating": 87
  },
  {
    "name": "Highland Park 18",
    "slug": "highlandpark18",
    "region": "Island",
    "peatScore": -15,
    "colorScore": 14,
    "price": 111,
    "rating": 88
  },
  {
    "name": "Bunnahabhain 12",
    "slug": "bunnahabhain12",
    "region": "Islay",
    "peatScore": -43,
    "colorScore": 25,
    "price": 55,
    "rating": 86
  },
  {
    "name": "Highland Park 25",
    "slug": "highlandpark25",
    "region": "Island",
    "peatScore": -11,
    "colorScore": 28,
    "price": 255,
    "rating": 91
  },
  {
    "name": "Lagavulin 16",
    "slug": "lagavulin16",
    "region": "Islay",
    "peatScore": -47,
    "colorScore": 33,
    "price": 82,
    "rating": 89
  },
  {
    "name": "Lagavulin Distiller's Edition",
    "slug": "lagavulinDE",
    "region": "Islay",
    "peatScore": -63,
    "colorScore": 35,
    "price": 0,
    "rating": 85
  },
  {
    "name": "Bunnahabhain 18",
    "slug": "bunnahabhain18",
    "region": "Islay",
    "peatScore": -50,
    "colorScore": 44,
    "price": 110,
    "rating": 90
  },
  {
    "name": "Laphroaig Triplewood",
    "slug": "laphroaigtriplewood",
    "region": "Islay",
    "peatScore": -58,
    "colorScore": 52,
    "price": 66,
    "rating": 86
  },
  {
    "name": "Ardbeg Uigeadail",
    "slug": "ardbeguigeadail",
    "region": "Islay",
    "peatScore": -79,
    "colorScore": 67,
    "price": 75,
    "rating": 92
  },
  {
    "name": "Bowmore 15 Darkest",
    "slug": "bowmoredarkest",
    "region": "Islay",
    "peatScore": -43,
    "colorScore": 63,
    "price": 78,
    "rating": 78
  },
  {
    "name": "Balvenie 15 Single Barrel",
    "slug": "balvenie15sc",
    "region": "Speyside",
    "peatScore": -12,
    "colorScore": 60,
    "price": 81,
    "rating": 88
  },
  {
    "name": "Balvenie 21 Portwood",
    "slug": "balvenie21pw",
    "region": "Speyside",
    "peatScore": 3,
    "colorScore": 48,
    "price": 170,
    "rating": 89
  },
  {
    "name": "Dalmore 12",
    "slug": "dalmore12",
    "region": "Highland",
    "peatScore": 0,
    "colorScore": 73,
    "price": 68,
    "rating": 81
  },
  {
    "name": "Jura Superstition",
    "slug": "jurasuperstition",
    "region": "Island",
    "peatScore": -14,
    "colorScore": 79,
    "price": 48,
    "rating": 79
  },
  {
    "name": "Chivas Regal 12",
    "slug": "chivasregal",
    "region": "Other",
    "peatScore": 0,
    "colorScore": -29,
    "price": 30,
    "rating": 70
  }
];

export { whiskyList };
