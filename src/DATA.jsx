const locations = [ 'La Fé' ]

const categories = ['Todas', 'Arepas', 'Arroz Chino','Asados', 'Comida Árabe', 'Comida Gourmet', 'Comida Mexicana', 'Comida Rápida','Comida Regional', 'Fritos', 'Hamburguesas', 'Pizzas', 'Pollo', 'Repostería y Heladería', 'Sándwiches', 'Sushi']

const DATA = [
  {
    id: "23",
    name: "Llanera La 31",
    category: categories[8],
    images: "images/25.jpg",
    contact: {
      instgram: "https://www.instagram.com/llanerala31/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573015120013&text=++",
    },
  },
  {
    id: "24",
    name: `Totuma y Cuchara e' Palo`,
    category: categories[8],
    images: "images/26.jpg",
    contact: {
      instgram: "https://www.instagram.com/totumacucharaepalo/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573002231879&text=Buenas%2C%20Totuma%20y%20cuchara%20e%27%20palo.%0A%C2%BFQu%C3%A9%20men%C3%BA%20tiene%20para%20hoy%3F%20",
    },
  },
  {
    id: "26",
    name: `Scooby Pizzas`,
    category: categories[11],
    images: "images/27.jpg",
    contact: {
      instgram: "https://www.instagram.com/scoobypizzas/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573014137770",
    },
  },
  {
    id: "27",
    name: `WOK Sabanero`,
    category: categories[8],
    images: "images/29.jpg",
    contact: {
      instgram: "https://www.instagram.com/wok_sabanero/?hl=es",
      phoneNum: "https://linktr.ee/woksabanero",
    },
  },
  {
    id: "28",
    name: `La B Hamburgers`,
    category: categories[10],
    images: "images/28.jpg",
    contact: {
      instgram: "https://www.instagram.com/labhamburgers/?hl=es",
      phoneNum: "https://linktr.ee/la.b.hamburgers.sincelejo",
    },
  },
  {
    id: "30",
    name: `Curramba Fast Food`,
    category: categories[7],
    images: "images/31.jpg",
    contact: {
      instgram: "https://www.instagram.com/curramba_fastfood/?hl=es",
      phoneNum: "http://wa.me/573016158966/",
    },
  },
  {
    id: "31",
    name: `Sierra Nevado`,
    category: categories[13],
    images: "images/32.jpg",
    contact: {
      instgram: "https://www.instagram.com/sierra_nevado/?hl=es",
      phoneNum: "https://wa.me/message/Z7WH33UZEH35G1",
    },
  },
  {
    id: "32",
    name: `Helados Campo`,
    category: categories[13],
    images: "images/33.jpg",
    contact: {
      instgram: "https://www.instagram.com/campofinesticecream/?hl=es",
      phoneNum: "https://linktr.ee/Campofinesticecream",
    },
  },
  {
    id: "33",
    name: `La Browniseria`,
    category: categories[13],
    images: "images/35.jpg",
    contact: {
      instgram: "https://www.instagram.com/la_browniseria/?hl=es",
      phoneNum: "https://api.whatsapp.com/send/?phone=573012818655&text&type=phone_number&app_absent=0",
    },
  },
  {
    id: "34",
    name: `Winsy Repostería`,
    category: categories[13],
    images: "images/34.jpg",
    contact: {
      instgram: "https://www.instagram.com/winsy_reposteria/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573123133640",
    },
  },
  {
    id: "35",
    name: `Basan Al Disco`,
    category: categories[5],
    images: "images/36.jpg",
    contact: {
      instgram: "https://www.instagram.com/basan_aldisco/?hl=es",
      phoneNum: "https://linktr.ee/basanaldisco",
    },
  },
  {
    id: "36",
    name: `Casa Bonita 1921`,
    category: categories[5],
    images: "images/37.jpg",
    contact: {
      instgram: "https://www.instagram.com/casabonita1921/?hl=es",
      phoneNum: "https://wa.link/lhm40r",
    },
  },
  {
    id: "37",
    name: `La Baguette Gourmet`,
    category: categories[14],
    images: "images/39.jpg",
    contact: {
      instgram: "https://www.instagram.com/la_baguette_gourmet/?hl=es",
      phoneNum: "https://walink.co/8dbcf3",
    },
  },
  {
    id: "38",
    name: `El PALACIO DE LA SALCHIPAPA`,
    category: categories[7],
    images: "images/38.jpg",
    contact: {
      instgram: "https://www.instagram.com/elpalaciofastfood/?hl=es",
      phoneNum: "https://wa.link/2r6bhe",
    },
  },
  {
    id: "39",
    name: `Gordo Lindo Restaurante`,
    category: categories[7],
    images: "images/40.jpg",
    contact: {
      instgram: "https://www.instagram.com/gordolindorestaurante/?hl=es",
      phoneNum: "https://wa.link/h419jq",
    },
  },
  {
    id: "40",
    name: `La Cosa Nostra`,
    category: categories[11],
    images: "images/41.jpg",
    contact: {
      instgram: "https://www.instagram.com/lacosanostra_sincelejo/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573178943575",
    },
  },
  {
    id: "41",
    name: `𝗔𝗦𝗔𝗗𝗢𝗦 𝗣𝗢𝗠𝗕𝗢`,
    category: categories[12],
    images: "images/42.jpg",
    contact: {
      instgram: "https://www.instagram.com/pollospombo/?hl=es",
      phoneNum: "https://wa.me/message/PU3LJWZLC3EVN1",
    },
  },
  {
    id: "42",
    name: `Deli Broaster`,
    category: categories[12],
    images: "images/43.jpg",
    contact: {
      instgram: "https://www.instagram.com/delibroastersincelejo/?hl=es",
      phoneNum: "https://linktr.ee/DeliBroaster",
    },
  },
  {
    id: "43",
    name: `Diverso`,
    category: categories[5],
    images: "images/44.jpg",
    contact: {
      instgram: "https://www.instagram.com/restaurantediverso/?hl=es",
      phoneNum: "https://linktr.ee/DiversoGastroBar",
    },
  },
  {
    id: "1",
    name: "Benedetto Pizza",
    category: categories[11],
    images: "images/3.jpeg",
    contact: {
      instgram: "https://www.instagram.com/benedettopizza.col/",
      phoneNum: "https://linktr.ee/benedettopizza",
    },
    location: "B. 6 de Enero"
  },
  {
    id: "17",
    name: "ROUKA GASTROBAR",
    category: categories[10],
    images: "images/19.jpg",
    contact: {
      instgram: "https://www.instagram.com/rouka_gastrobar/",
      phoneNum: "https://wa.me//+573205576898",
    },
  },
  {
    id: "8",
    name: "La Mondiu Burger",
    category: categories[10],
    images: "images/10.jpg",
    contact: {
      instgram: "https://www.instagram.com/lamondiu.burger/",
      phoneNum: "https://bio.site/lamondiu",
    },
    location: "Calle 25 # 30 -129"

  },
  {
    id: "10",
    name: "Pepitos",
    category: categories[7],
    images: "images/12.png",
    contact: {
      instgram: "https://www.instagram.com/pepitos_xpress/",
      phoneNum: "https://pepitos-xpress.cluvi.co/branch-without-service",
    },
  },
  {
    id: "7",
    name: "Place Arepas",
    category: categories[1],
    images: "images/9.jpg",
    contact: {
      instgram: "https://www.instagram.com/placearepas/",
      phoneNum: "https://wa.link/voi51s",
    },
  },
  {
    id: "16",
    name: "Hot Dog la Bendición",
    category: categories[7],
    images: "images/18.jpg",
    contact: {
      instgram: "https://www.instagram.com/hot_dog_la_bendicion/",
      phoneNum: "https://wa.link/u3z0ff",
    },
  },
  {
    id: "9",
    name: "Mr. Burger",
    category: categories[10],
    images: "images/11.enc",
    contact: {
      instgram: "https://www.instagram.com/mrburgersjo/",
      phoneNum: "https://linktr.ee/mrburgersjo",
    },
  },
  {
    id: "5",
    name: "Taco y Chela",
    category: categories[6],
    fest: true,
    images: "images/5.jpeg",
    contact: {
      instgram: "https://www.instagram.com/tacoychela.co/",
      phoneNum: "https://linkbe.me/tacoychela.co",
    },
    location: "Cra 24 #18 -81 (B. 7 de agosto)"

  },
  {
    id: "11",
    name: "Hunter & Butcher",
    category: categories[10],
    images: "images/13.png",
    contact: {
      instgram: "https://www.instagram.com/hunterbutcher.co/",
      phoneNum: "https://linktr.ee/hunterbutcher",
    },
  },
  {
    id: "12",
    name: "Pizza House Col",
    category: categories[11],
    images: "images/14.png",
    contact: {
      instgram: "https://www.instagram.com/pizzahousecol/",
      phoneNum: "https://beacons.ai/pizzahousecol/",
    },
  },
  {
    id: "13",
    name: "Gastro Lab",
    category: categories[7],
    images: "images/15.jfif",
    contact: {
      instgram: "https://www.instagram.com/gastroolab/",
      phoneNum: "https://linktr.ee/gastroolab",
    },
  },
  {
    id: "14",
    name: "Beer Station",
    category: categories[7],
    images: "images/16.png",
    contact: {
      instgram: "https://www.instagram.com/beerstationguacari/",
      phoneNum: "https://wa.link/inq8a1",
    },
  },
  {
    id: "15",
    name: "Grato by Bennedetto",
    category: categories[5],
    images: "images/17.jfif",
    contact: {
      instgram: "https://www.instagram.com/grato.bybenedetto/",
      phoneNum: "https://linktr.ee/grato.bybenedetto",
    },
  },
  {
    id: "6",
    name: "KFV",
    category: categories[7],
    images: "images/8.jfif",
    contact: {
      instgram: "https://www.instagram.com/kfvrestaurante/",
      phoneNum: "https://wa.link/47em9z",
    },
    location: "Crr17 #5 D63 Principal de la Fé Diagonal a la Ceiba de la Vega"
  },
  {
    id: "2",
    name: "Pac Burger",
    category: categories[7],
    images: "images/2.jpeg",
    contact: {
      instgram: "https://www.instagram.com/pacburguer.fv/",
      phoneNum: "https://wa.link/xkc8vk",
    },
    location: "Calle 25# 12 -106 La Bucaramanga, Plaza Express Diagonal a la Bomba Primax"
  },
  {
    id: "3",
    name: "Ricuras La Fé",
    category: categories[7],
    images: "images/1.jpeg",
    contact: {
      instgram: "https://www.instagram.com/ricuraslafe/",
      phoneNum: "https://wa.link/4xaebs",
    },
    location: "Cra 18 #5-12 Barrio La Fé"

  },
  {
    id: "18",
    name: "Janne & Nasser",
    category: categories[4],
    images: "images/20.png",
    contact: {
      instgram: "https://www.instagram.com/janne.nasser/",
      phoneNum: "https://linktr.ee/jannenasser",
    },
  },
  {
    id: "19",
    name: "La Casita Gastrobar",
    category: categories[7],
    images: "images/21.jfif",
    contact: {
      instgram: "https://www.instagram.com/la_casita.gastrobar/",
      phoneNum: "https://linktr.ee/lacasitagastrobar",
    },
  },
  {
    id: "20",
    name: "Seiko Sushi",
    category: categories[15],
    images: "images/22.png",
    contact: {
      instgram: "https://www.instagram.com/seikosushi/",
      phoneNum: "https://wa.link/0qg9kt",
    },
  },
  {
    id: "21",
    name: "Teriyaki Fusion Gong",
    category: categories[15],
    images: "images/23.png",
    contact: {
      instgram: "https://www.instagram.com/teriyaki_fusion_gong/",
      phoneNum: "https://linktr.ee/teriyaki_fusion_gong",
    },
  },
  {
    id: "22",
    name: "Buona Pizza",
    category: categories[11],
    images: "images/24.jpg",
    contact: {
      instgram: "https://www.instagram.com/buonapizzasincelejo/",
      phoneNum: "https://bit.ly/DomiciliosBuonapizza",
    },
  },
  {
    id: "44",
    name: "PizzaBrosa",
    category: categories[11],
    images: "images/24.jpg",
    contact: {
      instgram: "https://www.instagram.com/pizzabrosa_col/?hl=es",
      phoneNum: "https://linktr.ee/pizzabrosa",
    },
  },
  {
    id: "45",
    name: "Jalapeño Taqueria Chingona",
    category: categories[6],
    images: "images/46.jpg",
    contact: {
      instgram: "https://www.instagram.com/jalapeno_taqueriachingona/?hl=es",
      phoneNum: "https://wa.link/lmsxz8",
    },
  },
  {
    id: "46",
    name: "Restaurante Armonia Club",
    category: categories[5],
    images: "images/45.png",
    contact: {
      instgram: "https://www.instagram.com/armonia_club/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573026219022&text=Hola%20Armonia%20Club%20%F0%9F%92%AB%20Soy%20.......%20quiero%20hacer%20una%20reserva%20por%20favor",
    },
  },
  {
    id: "47",
    name: "Bemba Resto Bar",
    category: categories[7],
    images: "images/47.jpg",
    contact: {
      instgram: "https://www.instagram.com/bemba.burger/?hl=es",
      phoneNum: "https://linktr.ee/bembaburger",
    },
  },
  {
    id: "48",
    name: "La Montañita",
    category: categories[7],
    images: "images/48.jpg",
    contact: {
      instgram: "https://www.instagram.com/lamontanita.co/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573017894838&text=Buenas...",
    },
  },
  {
    id: "49",
    name: "Heladería Trozo De Cielo - Helados Florentino",
    category: categories[13],
    images: "images/49.jpg",
    contact: {
      instgram: "https://www.instagram.com/trozo_decielo/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573215292843",
    },
  },
  {
    id: "50",
    name: "Melos Fast Food",
    category: categories[7],
    images: "images/50.jpg",
    contact: {
      instgram: "https://www.instagram.com/melosfastfood/?hl=es",
      phoneNum: "https://linktr.ee/melosfas",
    },
  },
  {
    id: "51",
    name: "Maná Arroz Del Cielo",
    category: categories[2],
    images: "images/51.jpg",
    contact: {
      instgram: "https://www.instagram.com/mana.arrozdelcielo_sincelejo/?hl=es",
      phoneNum: "https://wa.me/message/RROE23U64S43F1",
    },
  },
  {
    id: "52",
    name: "Dori Esquites",
    category: categories[6],
    images: "images/52.jpg",
    contact: {
      instgram: "https://www.instagram.com/doriesquites_sljo/?hl=es",
      phoneNum: "https://wa.link/9d4r4t",
    },
  },
  {
    id: "53",
    name: "Montuno Gelato Caribe",
    category: categories[13],
    images: "images/53.png",
    contact: {
      instgram: "https://www.instagram.com/montuno.gelato/?hl=es",
      phoneNum: "https://bento.me/montunogelato",
    },
  },
  {
    id: "54",
    name: "Claudio 🌮",
    category: categories[6],
    images: "images/54.png",
    contact: {
      instgram: "https://www.instagram.com/claudio_col/?hl=es",
      phoneNum: "https://linktr.ee/pardogastrobar",
    },
  },
  {
    id: "55",
    name: "Siracha",
    category: categories[5],
    images: "images/55.png",
    contact: {
      instgram: "https://www.instagram.com/siracha_restaurante/?hl=es",
      phoneNum: "https://linktr.ee/Siracha",
    },
  },
  {
    id: "56",
    name: "•COMPADRES•",
    category: categories[7],
    images: "images/56.jpg",
    contact: {
      instgram: "https://www.instagram.com/compadres.oficial/?hl=es",
      phoneNum: "https://linktr.ee/compadressjo",
    },
  },
  {
    id: "57",
    name: "Barril Brothers",
    category: categories[3],
    images: "images/57.webp",
    contact: {
      instgram: "https://www.instagram.com/barrilbrothers/?hl=es",
      phoneNum: "https://linktr.ee/barrilbrothersjo",
    },
  },
  {
    id: "58",
    name: "Poteito",
    category: categories[7],
    fest: true,
    images: "images/58.jpg",
    contact: {
      instgram: "https://www.instagram.com/poteito.sincelejo/?hl=es",
      phoneNum: "https://wa.me/message/MXKPJ2JKAKBNH1",
    },
  },
  {
    id: "59",
    name: "Mi Sabor Express",
    category: categories[7],
    images: "images/59.jpg",
    contact: {
      instgram: "https://www.instagram.com/mi_saborexpress/?hl=es",
      phoneNum: "https://linktr.ee/MI_SABOREXPRES",
    },
  },
  {
    id: "60",
    name: "La Fabryka",
    category: categories[7],
    images: "images/60.png",
    contact: {
      instgram: "https://www.instagram.com/lafabryka_sincelejo/?hl=es",
      phoneNum: "https://linkr.bio/LaFabryka",
    },
  },
  {
    id: "61",
    name: "Maroma food & drinks",
    category: categories[5],
    images: "images/61.jpg",
    contact: {
      instgram: "https://www.instagram.com/maroma.foodrinks/?hl=es",
      phoneNum: "http://bit.ly/menumaroma",
    },
  },
  {
    id: "62",
    name: "FoodiesChips",
    category: categories[9],
    images: "images/62.jpg",
    contact: {
      instgram: "https://www.instagram.com/foodieschips/?hl=es",
      phoneNum: "https://foodieschips.com",
    },
  },
  {
    id: "63",
    name: "Pega'o",
    category: categories[10],
    images: "images/63.jpg",
    contact: {
      instgram: "https://www.instagram.com/_pegao/?hl=es",
      phoneNum: "https://wa.me/573128100130?text=Buenas",
    },
  },
  {
    id: "64",
    name: "Casa de Sándwiches",
    category: categories[14],
    images: "images/64.jpg",
    contact: {
      instgram: "https://www.instagram.com/la_sandwicheria_handexpress/?hl=es",
      phoneNum: "https://linktr.ee/lasandwicheriahandexpress",
    },
  },
  {
    id: "65",
    name: "La Clasica by Cosanostra",
    category: categories[14],
    images: "images/65.jpg",
    contact: {
      instgram: "https://www.instagram.com/laclasica_by_cosanostra/?hl=es",
      phoneNum: "https://linktr.ee/Laclasicabycosanostra",
    },
  },
  {
    id: "66",
    name: "PIZZABROSA FAST FOOD",
    category: categories[11],
    images: "images/66.jpg",
    contact: {
      instgram: "https://www.instagram.com/pizzabrosa_col/?hl=es",
      phoneNum: "https://linktr.ee/pizzabrosa",
    },
  },
  {
    id: "67",
    name: "El Huerto Pub",
    category: categories[10],
    images: "images/67.jpg",
    contact: {
      instgram: "https://www.instagram.com/elhuertopub/?hl=es",
      phoneNum: "https://linktr.ee/elhuertopub",
    },
  },
  {
    id: "68",
    name: "HAUS",
    category: categories[10],
    images: "images/68.jpg",
    contact: {
      instgram: "https://www.instagram.com/haus.gastrobar/?hl=es",
      phoneNum: "https://linktr.ee/hausgastrobar_",
    },
  },
  {
    id: "69",
    name: "La Verbena Restobar",
    category: categories[8],
    fest: true,
    images: "images/69.jpg",
    contact: {
      instgram: "https://www.instagram.com/laverbenarestobar/?hl=es",
      phoneNum: "https://linktr.ee/laverbenarestbar",
    },
  },
  {
    id: "70",
    name: "Brunette cookies",
    category: categories[13],
    images: "images/70.jpg",
    contact: {
      instgram: "https://www.instagram.com/brunettcookies/?hl=es",
      phoneNum: "http://bento.me/brunettecookies",
    },
  },
  {
    id: "71",
    name: "Dimaria Bakery",
    category: categories[13],
    images: "images/71.jpg",
    contact: {
      instgram: "https://www.instagram.com/bakerydimaria/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573002546707",
    },
  },
  {
    id: "72",
    name: "La Terracita RestoBar",
    category: categories[7],
    images: "images/72.jpg",
    contact: {
      instgram: "https://www.instagram.com/barlaterracita/?hl=es",
      phoneNum: "https://wa.link/fiygqi",
    },
  },
  {
    id: "73",
    name: "Frappé Sabanero",
    category: categories[13],
    images: "images/73.jpg",
    contact: {
      instgram: "https://www.instagram.com/frappesabanero/?hl=es",
      phoneNum: "https://wa.link/euz0zk",
    },
  },
  {
    id: "74",
    name: "Restaurante Góndola",
    category: categories[5],
    images: "images/74.jpg",
    contact: {
      instgram: "https://www.instagram.com/gondolarestobar/?hl=es",
      phoneNum: "https://drive.google.com/file/d/1ydRMRZcIejzlNN9UbTn54QrmQfL2Dvgi/view?usp=sharing",
    },
  },
  {
    id: "75",
    name: "Chino Chen",
    category: categories[2],
    images: "images/57.jpg",
    contact: {
      instgram: "https://www.instagram.com/chinochenexito/?hl=es",
      phoneNum: "https://www.whatsapp.com/catalog/573164070706/?app_absent=0",
    },
  },
  {
    id: "76",
    name: "WIPY | AREPAS RELLENAS 🫓",
    category: categories[1],
    images: "images/75.jpg",
    contact: {
      instgram: "https://www.instagram.com/wipyarepas/?hl=es",
      phoneNum: "https://wa.link/kph4pf",
    },
  },
  {
    id: "78",
    name: "PUGLIA L' AUTORE DIO",
    category: categories[5],
    images: "images/76.jpg",
    contact: {
      instgram: "https://www.instagram.com/pugliaristorante/?hl=es",
      phoneNum: "https://wa.link/ackv02",
    },
  },
  {
    id: "79",
    name: "Magros Carnes,Quesos& Vinos",
    category: categories[5],
    images: "images/77.jpg",
    contact: {
      instgram: "https://www.instagram.com/magrosboutiquedecarnes/?hl=es",
      phoneNum: "https://wa.me/573108625540",
    },
  },
  {
    id: "80",
    name: "Dediyoyos",
    category: categories[9],
    images: "images/78.jpg",
    contact: {
      instgram: "https://www.instagram.com/dediyoyos.oficial/?hl=es",
      phoneNum: "https://wa.link/4rmofr",
    },
  },
  {
    id: "81",
    name: "FUFOS | Restaurante | Bar | Cocina",
    category: categories[5],
    images: "images/79.jpg",
    contact: {
      instgram: "https://www.instagram.com/fufosrestbar/?hl=es",
      phoneNum: "https://linktr.ee/fufosrest",
    },
  },
  {
    id: "82",
    name: "ACC’ Fast Food®️",
    category: categories[7],
    images: "images/80.jpg",
    contact: {
      instgram: "https://www.instagram.com/accfastfood/?hl=es",
      phoneNum: "https://linktr.ee/accfastfood",
    },
  },
  {
    id: "83",
    name: "Café Boscán",
    category: categories[5],
    images: "images/81.jpg",
    contact: {
      instgram: "https://www.instagram.com/cafeboscan/?hl=es",
      phoneNum: "https://linktr.ee/libreriacafeboscan",
    },
  },
  {
    id: "84",
    name: "Buendía Café del Caribe",
    category: categories[5],
    images: "images/82.jpg",
    contact: {
      instgram: "https://www.instagram.com/buendiacafedelcaribe/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573052626335",
    },
  },
  {
    id: "85",
    name: "La Sincelejana",
    category: categories[7],
    fest: true,
    images: "images/83.jpg",
    contact: {
      instgram: "https://www.instagram.com/lasincelejana_/?hl=es",
      phoneNum: "https://linktr.ee/lasincelejana",
    },
  },
  {
    id: "86",
    name: "Nestoodies_🍔🌭🍕🥃",
    category: categories[7],
    fest: true,
    images: "images/84.jpg",
    contact: {
      instgram: "https://www.instagram.com/nestoodies_/?hl=es",
      phoneNum: "https://bit.ly/WhatsAppNestoodies",
    },
  },
  {
    id: "87",
    name: "burgerbirra.co",
    category: categories[7],
    fest: true,
    images: "images/85.jpg",
    contact: {
      instgram: "https://www.instagram.com/burgerbirra.co/?hl=es",
      phoneNum: "https://linktr.ee/burgerbirra.co",
    },
  },
  {
    id: "88",
    name: "El Patio",
    category: categories[7],
    fest: true,
    images: "images/86.jpg",
    contact: {
      instgram: "https://www.instagram.com/elpatio_sincelejo/?hl=es",
      phoneNum: "https://linktr.ee/elpatiosincelejo",
    },
  },
  {
    id: "89",
    name: "Doggy Pizza",
    category: categories[7],
    fest: true,
    images: "images/87.jpg",
    contact: {
      instgram: "https://www.instagram.com/doggypizza_sincelejo/?hl=es",
      phoneNum: "https://w.app/doggypizza",
    },
  },
  {
    id: "90",
    name: "A L M A S    R E B E L D E S",
    category: categories[7],
    fest: true,
    images: "images/88.jpg",
    contact: {
      instgram: "https://www.instagram.com/pardocasual/?hl=es",
      phoneNum: "https://linktr.ee/pardogastrobar",
    },
  },
  {
    id: "91",
    name: "  Adicto | Hamburguesas ADICTIVAS 🔥",
    category: categories[7],
    fest: true,
    images: "images/89.jpg",
    contact: {
      instgram: "https://www.instagram.com/adicto.burger/?hl=es",
      phoneNum: "https://linktr.ee/adictoburger",
    },
  },
  {
    id: "92",
    name: "LLANERA LA 21",
    category: categories[8],
    images: "images/90.jpg",
    contact: {
      instgram: "https://www.instagram.com/llanerala21sincelejo/?hl=es",
      phoneNum: "https://wa.link/6kdo92",
    },
  },
  {
    id: "93",
    name: "Impasto Panadería",
    category: categories[13],
    images: "images/91.jpg",
    contact: {
      instgram: "https://www.instagram.com/impastopanetteria/?hl=es",
      phoneNum: "https://linktr.ee/impastopanetteria"
    },
  },
  {
    id: "94",
    name: "𝐑𝐈𝐂𝐔𝐑𝐀𝐒 𝐏𝐈𝐙𝐙𝐀® 🍕",
    category: categories[11],
    images: "images/92.jpg",
    contact: {
      instgram: "https://www.instagram.com/ricuraspizza/?hl=es",
      phoneNum: "https://linktr.ee/ricuraspizza"
    },
  },
  {
    id: "95",
    name: "Litania | restaurante",
    category: categories[5],
    images: "images/93.jpg",
    contact: {
      instgram: "https://www.instagram.com/litaniarestaurante/?hl=es",
      phoneNum: "https://litania.cluvi.co/"
    },
  },
  {
    id: "96",
    name: "Mitchels Fries and Burgers",
    category: categories[11],
    images: "images/94.jpg",
    contact: {
      instgram: "https://www.instagram.com/mitchelsfriesandburgers/?hl=es",
      phoneNum: "https://linktr.ee/Mitchelsfriesandburgers"
    },
  },
  
];

DATA.sort((a, b) => parseInt(a.id) - parseInt(b.id));

const sortedDataString = JSON.stringify(DATA);

// Paso 3: Guardar en LocalStorage
localStorage.setItem("sortedData", sortedDataString);

export default DATA;
