const locations = [ 'La Fé' ]

const categories = ['Todas', 'Arepas', 'Arroz Chino','Asados', 'Comida Árabe', 'Comida Gourmet', 'Comida Mexicana', 'Comida Rápida','Comida Regional', 'Fritos', 'Hamburguesas', 'Pizzas', 'Pollo', 'Repostería y Heladería', 'Sándwiches', 'Sushi'] //15 (16-1)

const DATA = [
  {
    id: "1",
    name: "Benedetto Pizza",
    category: categories[11],
    images: "images/3.jpeg",
    contact: {
      instgram: "https://www.instagram.com/benedettopizza.col/",
      phoneNum: "https://linktr.ee/benedettopizza",
    },
    location: "Barrio 6 de Enero"
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
    location: "Cra 18 #5-12 barrio la fe"
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
    id: "6",
    name: "KFV",
    category: categories[7],
    images: "images/8.jfif",
    contact: {
      instgram: "https://www.instagram.com/kfvrestaurante/",
      phoneNum: "https://wa.link/47em9z",
    },
    location: "Crr17 #5 D63 Principal de la fé diagonal a la ceiba de la vega"
  },
  {
    id: "8",
    name: "La Mondiú Burger",
    category: categories[10],
    fest: true,
    images: "images/10.jpg",
    contact: {
      instgram: "https://www.instagram.com/lamondiu.burger/",
      phoneNum: "https://bio.site/lamondiu",
    },
    location: "Calle 25 # 30 -129"
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
    location: "Barrio Medellín (Primer piso de Full Liquors)📍Sede 1 y 2 en la Plaza Majagual"
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
    location: "DIAGONAL AL MONUMENTO LA IGUANA CALLE 25#27-151 PISO 1"
  },
  {
    id: "11",
    name: "Hunter & Butcher",
    category: categories[10],
    fest: true,
    images: "images/13.png",
    contact: {
      instgram: "https://www.instagram.com/hunterbutcher.co/",
      phoneNum: "https://linktr.ee/hunterbutcher",
    },
    location: "Transversal 28A # 28-112"
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
    location: "GastroLab, Cl. 32b #17-191, Sincelejo, Sucre"
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
    location: "Guacarí"
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
    location: "Sincelejo, Sucre / Zona rosa"
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
    location: "Estamos Ubicado Barrio Nuevo México Calle 30 N 12 42"
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
    location: "Av. Alfonso Lopez a 50m de Corposucre del Zumbado."
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
    location: "Calle 32 # 27-655 Av.Mariscal"
  },
  {
    id: "19",
    name: "La Casita Gastro Bar",
    category: categories[7],
    images: "images/21.jfif",
    contact: {
      instgram: "https://www.instagram.com/la_casita.gastrobar/",
      phoneNum: "https://linktr.ee/lacasitagastrobar",
    },
    location: "Cll 13 # 17-109 Alto Ford"
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
    location: "Calle de las Flores, C.C.Guacarí"
  },
  {
    id: "23",
    name: "Llanera La 31",
    category: categories[8],
    images: "images/25.jpg",
    contact: {
      instgram: "https://www.instagram.com/llanerala31/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573015120013&text=++",
    },
    location: "Calle 31 # de 14 -219 diagonal al pozo de majagual"
  },
  {
    id: "24",
    name: "Totuma y Cuchara e' Palo",
    category: categories[8],
    images: "images/26.jpg",
    contact: {
      instgram: "https://www.instagram.com/totumacucharaepalo/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573002231879&text=Buenas%2C%20Totuma%20y%20cuchara%20e%27%20palo.%0A%C2%BFQu%C3%A9%20men%C3%BA%20tiene%20para%20hoy%3F%20",
    },
    location: "Sincelejo, Sucre. Cra. 4 #29d-57 (Troncal vía a Tolú)"
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
    name: "La B Hamburgers",
    category: categories[10],
    images: "images/28.jpg",
    contact: {
      instgram: "https://www.instagram.com/labhamburgers/?hl=es",
      phoneNum: "https://linktr.ee/la.b.hamburgers.sincelejo",
    },
    location: "calle 25A # 36 A- 25"
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
    name: "Sierra Nevado",
    category: categories[13],
    images: "images/32.jpg",
    contact: {
      instgram: "https://www.instagram.com/sierra_nevado/?hl=es",
      phoneNum: "https://wa.me/message/Z7WH33UZEH35G1",
    },
    location: "Calle 17 # 24a-07 barrio La Palma - Frente al Round Point"
  },
  {
    id: "32",
    name: "Helados Campo",
    category: categories[13],
    images: "images/33.jpg",
    contact: {
      instgram: "https://www.instagram.com/campofinesticecream/?hl=es",
      phoneNum: "https://linktr.ee/Campofinesticecream",
    },
    location: "S/jo La Toscana"
  },
  {
    id: "33",
    name: "La Browniseria",
    category: categories[13],
    images: "images/35.jpg",
    contact: {
      instgram: "https://www.instagram.com/la_browniseria/?hl=es",
      phoneNum: "https://api.whatsapp.com/send/?phone=573012818655&text&type=phone_number&app_absent=0",
    },
    location: "P.C. Guacarí L. 2 - 325, Venecia. Calle 28 # 36A - 45"
  },
  {
    id: "34",
    name: "Winsy Repostería",
    category: categories[13],
    images: "images/34.jpg",
    contact: {
      instgram: "https://www.instagram.com/winsy_reposteria/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573123133640",
    },
    location: "Barrio la Palma. Cra 24i # 10 - 04"
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
    name: "Casa Bonita 1921",
    category: categories[5],
    images: "images/37.jpg",
    contact: {
      instgram: "https://www.instagram.com/casabonita1921/?hl=es",
      phoneNum: "https://wa.link/lhm40r",
    },
    location: "Cra 18 # 22-38, Cll. El Comercio."
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
    name: "El PALACIO DE LA SALCHIPAPA",
    category: categories[7],
    images: "images/38.jpg",
    contact: {
      instgram: "https://www.instagram.com/elpalaciofastfood/?hl=es",
      phoneNum: "https://wa.link/2r6bhe",
    },
    location: "Av. San Carlos"
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
    name: "La Cosa Nostra",
    category: categories[11],
    images: "images/41.jpg",
    contact: {
      instgram: "https://www.instagram.com/lacosanostra_sincelejo/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573178943575",
    },
    location: "Carrera 30 # 23 A 65 BARRIO LA TOSCANA"
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
    name: "DeliBroaster",
    category: categories[12],
    images: "images/43.jpg",
    contact: {
      instgram: "https://www.instagram.com/delibroastersincelejo/?hl=es",
      phoneNum: "https://linktr.ee/DeliBroaster",
    },
    location: "Avenida Las Peñitas"
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
    id: "44",
    name: "PizzaBrosa",
    category: categories[11],
    images: "images/24.jpg",
    contact: {
      instgram: "https://www.instagram.com/pizzabrosa_col/?hl=es",
      phoneNum: "https://linktr.ee/pizzabrosa",
    },
    location: "Barrio El Bosque"
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
    name: "Armonia Club",
    category: categories[5],
    images: "images/45.png",
    contact: {
      instgram: "https://www.instagram.com/armonia_club/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573026219022&text=Hola%20Armonia%20Club%20%F0%9F%92%AB%20Soy%20.......%20quiero%20hacer%20una%20reserva%20por%20favor",
    },
    location: "https://maps.app.goo.gl/g8Y8zhoh9rTseREg6"
  },
  {
    id: "47",
    name: "Bemba Burger",
    category: categories[7],
    images: "images/47.jpg",
    contact: {
      instgram: "https://www.instagram.com/bemba.burger/?hl=es",
      phoneNum: "https://linktr.ee/bembaburger",
    },
    location: "Cr 51B # 82 - 29"
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
    name: "Heladería Trozo De Cielo",
    category: categories[13],
    images: "images/49.jpg",
    contact: {
      instgram: "https://www.instagram.com/trozo_decielo/?hl=es",
      phoneNum: "https://api.whatsapp.com/send?phone=573215292843",
    },
    location: "Kr 10 cl 27d -14 Principal de villa Contri"
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
    location: "Parque Santander"
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
    name: "Claudio",
    category: categories[6],
    images: "images/54.png",
    contact: {
      instgram: "https://www.instagram.com/claudio_col/?hl=es",
      phoneNum: "https://linktr.ee/pardogastrobar",
    },
    location: "Sincelejo - La Toscana - Carrera 28A # 23B 13"
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
    location: "Calle 32 #27-285"
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
    location: "Av Alfonso López Bajando la bomba del Ara Antes del palo de caucho"
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
    location: "Centro comercial viva sincelejo"
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
    location: "Diagonal al monumento la iguana"
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
    location: "Av. La PEÑITAS Calle 22 Kr 25 - 67"
  },
  {
    id: "61",
    name: "Maroma",
    category: categories[5],
    images: "images/61.jpg",
    contact: {
      instgram: "https://www.instagram.com/maroma.foodrinks/?hl=es",
      phoneNum: "http://bit.ly/menumaroma",
    },
    location: "Transversal 28a #27a- 37 (canchas de Liverpool)"
  },
  {
    id: "62",
    name: "Foodies Chips",
    category: categories[9],
    images: "images/62.jpg",
    contact: {
      instgram: "https://www.instagram.com/foodieschips/?hl=es",
      phoneNum: "https://foodieschips.com",
    },
    location: "Cra. 33 #23-65, Florencia, Sincelejo, Sucre"
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
    location: "Av Ocala- al lado de Comaderas"
  },
  {
    id: "64",
    name: "Casa de Sándwiches",
    category: categories[14],
    fest: true,
    images: "images/64.jpg",
    contact: {
      instgram: "https://www.instagram.com/la_sandwicheria_handexpress/?hl=es",
      phoneNum: "https://linktr.ee/lasandwicheriahandexpress",
    },
    location: "Barrio La Palma"
  },
  {
    id: "65",
    name: "La Clasica by Cosanostra",
    category: categories[11],
    images: "images/65.jpg",
    contact: {
      instgram: "https://www.instagram.com/laclasica_by_cosanostra/?hl=es",
      phoneNum: "https://linktr.ee/Laclasicabycosanostra",
    },
    location: "Carrera 30 A65 La Toscana"
  },
  {
    id: "66",
    name: "PizzaBrosa Fast Food",
    category: categories[11],
    images: "images/66.jpg",
    contact: {
      instgram: "https://www.instagram.com/pizzabrosa_col/?hl=es",
      phoneNum: "https://linktr.ee/pizzabrosa",
    },
    location: "Barrio El Bosque"
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
    location: "Zona Rosa Sincelejo"
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
    location: "Carrera 14 #16-14 | Calle La pajuela"
  },
  {
    id: "69",
    name: "La Verbena Restobar",
    category: categories[8],
    images: "images/69.jpg",
    contact: {
      instgram: "https://www.instagram.com/laverbenarestobar/?hl=es",
      phoneNum: "https://linktr.ee/laverbenarestbar",
    },
    location: "Av Mariscal, Green Mall - LOC 01"
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
    location: "Cocina Oculta"
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
    location: "Calle Chapinero TV 28a # 28-222, B. El Socorro"
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
    location: "Cra 23 #20-60, Al frente del Hotel Santa Fe Plaza"
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
    location: "Cocina Oculta"
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
    location: "Calle 24 N036 - 05, BARRIO FLORENCIA"
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
    location: "Calle de las Flores, C.C. Guacarí"
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
    location: "Barrio La Terraza y Barrio La Palma"
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
    location: "Calle 24 N036 - 05, BARRIO FLORENCIA"
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
    location: "Carrera 30 A65 La Toscana"
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
    location: "Carrera 30 A65 La Toscana"
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
    location: "Carrera 14 #16-14 | Calle La pajuela"
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
    location: "Carrera 30 # 23 A 65 BARRIO LA TOSCANA"
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
    location: "Av. San Carlos, Frente al Parque Boscán"
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
    location: "Calle 24 N036 - 05, BARRIO FLORENCIA"
  },
  {
    id: "85",
    name: "La Sincelejana",
    category: categories[7],
    images: "images/83.jpg",
    contact: {
      instgram: "https://www.instagram.com/lasincelejana_/?hl=es",
      phoneNum: "https://linktr.ee/lasincelejana",
    },
    location: "Cra 23 #20-60, Al frente del Hotel Santa Fe Plaza"
  },
  {
    id: "86",
    name: "Nestoodies_🍔🌭🍕🥃",
    category: categories[7],
    images: "images/84.jpg",
    contact: {
      instgram: "https://www.instagram.com/nestoodies_/?hl=es",
      phoneNum: "https://bit.ly/WhatsAppNestoodies",
    },
    location: "Centro comercial viva sincelejo"
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
    location: "Diagonal al monumento la iguana"
  },
  {
    id: "88",
    name: "El Patio",
    category: categories[7],
    images: "images/86.jpg",
    contact: {
      instgram: "https://www.instagram.com/elpatio_sincelejo/?hl=es",
      phoneNum: "https://linktr.ee/elpatiosincelejo",
    },
    location: "Carrera 30 A65 La Toscana"
  },
  {
    id: "89",
    name: "Doggy Pizza",
    category: categories[11],
    images: "images/87.jpg",
    contact: {
      instgram: "https://www.instagram.com/doggypizza_sincelejo/?hl=es",
      phoneNum: "https://w.app/doggypizza",
    },
    location: "Barrio La Palma"
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
    location: "Carrera 14 #16-14 | Calle La pajuela"
  },
  {
    id: "91",
    name: "Adicto | Hamburguesas ADICTIVAS 🔥",
    category: categories[7],
    fest: true,
    images: "images/89.jpg",
    contact: {
      instgram: "https://www.instagram.com/adicto.burger/?hl=es",
      phoneNum: "https://linktr.ee/adictoburger",
    },
    // location: "Carrera 30 # 23 A 65 BARRIO LA TOSCANA"
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
    location: "Cl 21 #14-33, Sincelejo, Sucre"
  },
  {
    id: "93",
    name: "Impasto Panadería",
    category: categories[13],
    images: "images/91.jpg",
    contact: {
      instgram: "https://www.instagram.com/impastopanetteria/?hl=es",
      phoneNum: "https://linktr.ee/impastopanetteria",
    },
    location: "Calle 25 # 25B - 290 ( frente al monumento de la iguana )"
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
    location: "Cra 16 #30A-08 - Barrio Majagual"
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
    location: "Zona Rosa, al lado del Green Mall"
  },
  {
    id: "96",
    name: "Mitchels Fries and Burgers",
    category: categories[10],
    images: "images/94.jpg",
    contact: {
      instgram: "https://www.instagram.com/mitchelsfriesandburgers/?hl=es",
      phoneNum: "https://linktr.ee/Mitchelsfriesandburgers"
    },
    location: " Avenida Mariscal | Green Mall Local 04/ Sincelejo-Sucre"
  },
  {
    id: "97",
    name: "Tertulia Carreta y Paja",
    category: categories[7],
    images: "images/95.jpg",
    contact: {
      instgram: "https://www.instagram.com/tertuliacarretaypaja/?hl=es",
      phoneNum: "https://bit.ly/Pide_tu_cafecito",
    },
  },
  {
    id: "98",
    name: "KFC",
    category: categories[12],
    images: "images/96.jpg",
    contact: {
      instgram: "https://www.instagram.com/kfc.colombia/?hl=es",
      phoneNum: "https://linktr.ee/kfc.colombia",
    },
  },
  {
    id: "99",
    name: "Que Sabores",
    category: categories[7],
    images: "images/97.jpg",
    contact: {
      instgram: "https://www.instagram.com/que.sabores.sljo/?hl=es",
      phoneNum: "https://linktr.ee/Que.Sabores",
    },
  },
  {
    id: "100",
    name: "En!gma|Cocina oculta|Hamburguesas",
    category: categories[10],
    images: "images/98.jpg",
    contact: {
      instgram: "https://www.instagram.com/enigma_burger/?hl=es",
      phoneNum: "https://wa.me/c/573197286869",
    },
  },
  {
    id: "101",
    name: "KUSHI RESTAURANTE",
    category: categories[15],
    images: "images/99.jpg",
    contact: {
      instgram: "https://www.instagram.com/kushirestaurante/?hl=es",
      phoneNum: "https://linktr.ee/kushirestaurante",
    },
  },
  {
    id: "102",
    name: "Arabe Chadid 🇱🇧🇨🇴",
    category: categories[4],
    images: "images/100.jpg",
    contact: {
      instgram: "https://www.instagram.com/arabechadid/?hl=es",
      phoneNum: "https://linktr.ee/arabechadid",
    },
  },
  {
    id: "103",
    name: "Restaurante María Tomasa",
    category: categories[8],
    images: "images/101.jpg",
    contact: {
      instgram: "https://www.instagram.com/mariatomasaexpress/?hl=es",
      phoneNum: "https://linktr.ee/MariaTomasaExpress",
    },
  },
  {
    id: "104",
    name: "Frisby",
    category: categories[12],
    images: "images/102.jpg",
    contact: {
      instgram: "https://www.instagram.com/frisbylohace/?hl=es",
      phoneNum: "https://linktr.ee/frisbylohace",
    },
  },
  {
    id: "105",
    name: "SANTORINI",
    category: categories[10],
    images: "images/103.jpg",
    contact: {
      instgram: "https://www.instagram.com/santorini.col/?hl=es",
      phoneNum: "https://beacons.ai/santorini.col"
    },
    location: "Parque Comercial Guacarí"
  },
  {
    id: "106",
    name: "Restaurante Don Parrilla",
    category: categories[3],
    images: "images/104.jpg",
    contact: {
      instgram: "https://www.instagram.com/restaurantedonparrilla/?hl=es",
      phoneNum: "https://linktr.ee/donparrilla",
    },
  },
  {
    id: "107",
    name: "ARCANOS GOURMET",
    category: categories[5],
    images: "images/105.jpg",
    contact: {
      instgram: "https://www.instagram.com/arcanoscocinagourmet/?hl=es",
      phoneNum: "http://linktr.ee/arcanoscocinagourmet",
    },
  },
  {
    id: "108",
    name: "Italia Sincelejo | Hamburguesa",
    category: categories[10],
    images: "images/106.jpg",
    contact: {
      instgram: "https://www.instagram.com/italiasincelejo/?hl=es",
      phoneNum: "https://bit.ly/3MzNYM8",
    },
  },
  {
    id: "109",
    name: "DULCE MANJAR",
    category: categories[13],
    images: "images/107.jpg",
    contact: {
      instgram: "https://www.instagram.com/dulcemanjar27/?hl=es",
      phoneNum: "https://linktr.ee/dulcemanjar27",
    },
  },
  {
    id: "110",
    name: "MERAK REPOSTERIA 👩🏻‍🍳",
    category: categories[13],
    images: "images/108.jpg",
    contact: {
      instgram: "https://www.instagram.com/merakreposteriaa/?hl=es",
      phoneNum: "https://atom.bio/reposteriamerak",
    },
  },
  {
    id: "111",
    name: "ALOHA POKE",
    category: categories[15],
    images: "images/109.jpg",
    contact: {
      instgram: "https://www.instagram.com/alohapokecol/?hl=es",
      phoneNum: "https://linktr.ee/alohapokecol",
    },
  },
  {
    id: "112",
    name: "Pombo Parrilla",
    category: categories[8],
    images: "images/110.jpg",
    contact: {
      instgram: "https://www.instagram.com/pomboparrilla/?hl=es",
      phoneNum: "https://linktr.ee/pomboparrilla",
    },
  },
  {
    id: "113",
    name: "C I A O",
    category: categories[5],
    images: "images/111.jpg",
    contact: {
      instgram: "https://www.instagram.com/ciaotrattoria.co/?hl=es",
      phoneNum: "https://linktr.ee/ciaotratoria",
    },
  },
  {
    id: "114",
    name: "LA VECINDAD COMIDAS RAPIDAS 🍔",
    category: categories[7],
    images: "images/112.jpg",
    contact: {
      instgram: "https://www.instagram.com/lavecindadsincelejo/?hl=es",
      phoneNum: "https://wa.me/573235169398",
    },
  },
  {
    id: "115",
    name: "Sabaneritos",
    category: categories[7],
    images: "images/113.jpg",
    contact: {
      instgram: "https://www.instagram.com/sabaneritos_/?hl=es",
      phoneNum: "https://linktr.ee/sabaneritos_?utm_source=linktree_profile_share&ltsid=e88f402b-ac65-42d1-ade1-6ac120625bc2"
    },
  },
  {
    id: "116",
    name: "ANHELOSPIZZAS.4S",
    category: categories[11],
    images: "images/114.jpg",
    contact: {
      instgram: "https://www.instagram.com/anhelospizzas.4s/?hl=es",
      phoneNum: "https://wa.me/message/NIPSGHX3OMXYI1"
    },
  },
  {
    id: "117",
    name: "Gosal's Pizza",
    category: categories[11],
    images: "images/115.jpg",
    contact: {
      instgram: "https://www.instagram.com/gosalspizza/?hl=es",
      phoneNum: "https://go.wa.link/gosalspizza",
    },
  },
  {
    id: "118",
    name: "Chicharrones Martin Romero",
    category: categories[3],
    images: "images/116.jpg",
    contact: {
      instgram: "https://www.instagram.com/cocinaalbarril/?hl=es",
      phoneNum: "https://wa.me/message/TMSILVD24FHYN1",
    },
  },
  {
    id: "119",
    name: "Sugary Churros",
    category: categories[6],
    images: "images/117.jpg",
    contact: {
      instgram: "https://www.instagram.com/sugarychurros_/?hl=es",
      phoneNum: "https://linktr.ee/sugarychurros_",
    },
  },
  {
    id: "120",
    name: "Philadelphia",
    category: categories[7],
    images: "images/118.jpg",
    contact: {
      instgram: "https://www.instagram.com/philadelphiafastfood/?hl=es",
      phoneNum: "https://wa.me/c/573014294331",
    },
  },
  {
    id: "121",
    name: "Place Arepas Rellenas®️",
    category: categories[1],
    images: "images/119.jpg",
    contact: {
      instgram: "https://www.instagram.com/placearepas/?hl=es",
      phoneNum: "https://linktr.ee/placearepasrellenas2012",
    },
  },
  {
    id: "122",
    name: "Pepitos Xpress",
    category: categories[1],
    images: "images/120.jpg",
    contact: {
      instgram: "https://www.instagram.com/pepitos_xpress/?hl=es",
      phoneNum: "https://pepitos-xpress.cluvi.co/branch-without-service",
    },
  }, 
  {
    id: "123",
    name: "Típicas Empanadas",
    category: categories[9],
    images: "images/121.jpg",
    contact: {
      instgram: "https://www.instagram.com/tipicas_empanadas_oficial/?hl=es",
      phoneNum: "https://linktr.ee/tipicasempanadasoficial",
    },
  },
  {
    id: "124",
    name: "SINCELEJO BURGER COMPANY 🍔",
    category: categories[10],
    images: "images/122.jpg",
    contact: {
      instgram: "https://www.instagram.com/sjoburgerco/?hl=es",
      phoneNum: "https://wa.me/message/Z3BJMSDHE7ZFO1",
    },
  },
  {
    id: "126",
    name: "Burgery",
    category: categories[10],
    fest: true,
    images: "images/123.jpg",
    contact: {
      instgram: "https://www.instagram.com/burgery.col/?hl=es",
      phoneNum: "https://linktr.ee/burgery.col",
    },
  },
  {
    id: "127",
    name: "Full Foods Sincelejo",
    category: categories[10],
    fest: true,
    images: "images/124.png",
    contact: {
      instgram: "https://www.instagram.com/full_foods_sincelejo/?hl=es",
      phoneNum: "https://linktr.ee/Full_Foods",
    },
  },
  {
    id: "128",
    name: "Burgo | Comida Rápida.",
    category: categories[10],
    fest: true,
    images: "images/125.png",
    contact: {
      instgram: "https://www.instagram.com/burgo.col/?hl=es",
      phoneNum: "https://linktr.ee/burgo.col",
    },
  },
  {
    id: "129",
    name: "Delirio Restaurante",
    category: categories[4],
    fest: true,
    images: "images/126.jpg",
    contact: {
      instgram: "https://www.instagram.com/delirio.rest/?hl=es",
      phoneNum: "https://menupp.co/deliriorest",
    },
  },
  {
    id: "130",
    name: "Provenza | Cocina Fusión",
    category: categories[4],
    fest: true,
    images: "images/127.jpg",
    contact: {
      instgram: "https://www.instagram.com/provenza.rest/?hl=es",
      phoneNum: "https://menupp.co/provenza",
    },
  },
  {
    id: "131",
    name: "P!XEL Games + Food",
    category: categories[10],
    fest: true,
    images: "images/128.jpg",
    contact: {
      instgram: "https://www.instagram.com/pixelsincelejo/?hl=es",
      phoneNum: "https://linktr.ee/pixelsincelejo",
    },
  },
];

DATA.sort((a, b) => parseInt(a.id) - parseInt(b.id));

const sortedDataString = JSON.stringify(DATA);

// Paso 3: Guardar en LocalStorage
localStorage.setItem("sortedData", sortedDataString);

export default DATA;
