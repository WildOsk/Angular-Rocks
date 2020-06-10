import { Injectable } from '@angular/core';
import { Banda } from '../models/banda.model';
import { RouterModule, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class BandaServiceService {

  bandasCargadas: Array<Banda> = [{
    id:0,nombre:"The Rolling Stones",
    origen:"Inglaterra",
    historia:"The Rolling Stones [ðə ˈɹəʊlɪŋ stəʊnz] es una banda británica de rock originaria de Londres."+ 
      " La banda se formó en abril de 19622​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts e Ian Stewart."+
    ​ "Brian Jones fue despedido en junio de 1969, falleciendo tres semanas después, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975"+
      " y sería a su vez reemplazado por Ronnie Wood. Con el retiro de Bill Wyman en 1993 se incluyó al bajista Darryl Jones que, aunque toca con la banda desde la"+ 
    " grabación del álbum Voodoo Lounge en 1994, no es un miembro oficial.",
    miembros:"asda",
    actividad:"pru8eba",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/The_Rolling_Stones_Summerfest_in_Milwaukee_-_2015.jpg/250px-The_Rolling_Stones_Summerfest_in_Milwaukee_-_2015.jpg",
    video:"123"
  },{
    id:1,nombre:"Led Zeppelin",
    origen:"Londres, Reino Unido",
    historia:"Led Zeppelin fue un grupo británico de hard rock fundado en 1968 por el guitarrista Jimmy Page, quien había pertenecido a The Yardbirds. La banda estuvo integrada por John Paul Jones como bajista y teclista,"+ 
      " el vocalista Robert Plant y John Bonham a la batería (que había coincidido con Plant en The Band of Joy)."+
    ​ " Led Zeppelin presentó elementos de un amplio espectro de influencias, como el blues, el rock and roll, el soul, la música celta, la música india, el folk, y el country."+
      " Más de treinta años después de la disgregación de la banda en 1980, la música de Led Zeppelin continúa vendiéndose, disfruta de una amplia difusión radiofónica"+ 
    " y ha demostrado ser una de las bandas más influyentes en la música rock. Hasta la fecha, ha vendido más de 300 millones de álbumes en el mundo.",
    miembros:"Jimmy Page, Robert Plant, John Paul Jones, John Bonham (fallecido)",
    actividad:"1968-1980",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/LedZeppelinmontage.jpg/250px-LedZeppelinmontage.jpg",
    video:"xbhCPt6PZIU"
  },{
    id:2,nombre:"Queen",
    origen:"Londres, Reino Unido",
    historia:"Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon"+ 
      " Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997) los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún se considera activa."+
    ​ " El grupo gozó de un gran éxito en el Reino Unido con álbumes como Sheer Heart Attack (1974) y A Night at the Opera (1975). Este último llamó la atención internacionalmente,"+
      " en especial por el sencillo 'Bohemian Rhapsody', y colocó a Queen en un primer plano de la escena musical."+ 
    " Tuvieron una significativa repercusión en Estados Unidos a finales de los años 1970, ya con un numeroso repertorio de éxitos.",
    miembros:"Brian May, Roger Taylor",
    actividad:"1970-presente",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Queen_%E2%80%93_montagem_%E2%80%93_new.png/285px-Queen_%E2%80%93_montagem_%E2%80%93_new.png",
    video:"HgzGwKwLmgM"
  },
  {
    id:3,nombre:"Pink Floyd",
    origen:"Londres, Reino Unido",
    historia:`Pink Floyd fue una banda de rock británica, fundada en Londres en 1965. 
    Es considerada un icono cultural del siglo xx y una de las bandas más influyentes y aclamadas en la historia de la música, 
    que obtuvo gran popularidad gracias a su música psicodélica que evolucionó hacia el rock progresivo y rock sinfónico con el 
    paso del tiempo. Es conocida por sus canciones de alto contenido filosófico, la experimentación sónica, las innovadoras portadas 
    de sus discos y sus elaborados espectáculos en vivo. Sus ventas sobrepasan los 300 millones de álbumes vendidos en todo el mundo,4​5​ 
    97,5 millones de ellos solamente en los Estados Unidos.6 `,
    miembros:"David Gilmour, Nick Mason, Richard Wright (fallecido)",
    actividad:"1965-1995",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pink_Floyd%2C_1971.jpg/250px-Pink_Floyd%2C_1971.jpg",
    video:"IXdNnw99-Ic"
  },
  {
    id:3,nombre:"Deep Purple",
    origen:"Hertford, Inglaterra, Reino Unido",
    historia:`Deep Purple es una banda británica de hard rock formada en 1968 en Hertford, Reino Unido. 
      Está considerada como una de las pioneras de dicho subgénero, y los pioneros del heavy metal junto a Led Zeppelin y Black Sabbath.
     Su música ha incorporado elementos del rock progresivo, rock sinfónico, rock psicodélico, blues rock y de la música clásica y Britpop. 
     Deep Purple ha vendido más de 120 millones de discos en todo el mundo.​ `,
    miembros:"Ian Paice, Ian Gillan, Roger Glover, Steve Morse, Don Airey",
    actividad:"1968-1976"
    +"1984-actualmente",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Deep_Purple_at_Wacken_Open_Air_2013_27.jpg/250px-Deep_Purple_at_Wacken_Open_Air_2013_27.jpg",
    video:"OorZcOzNcgE"
  },
  {
    id:4,nombre:"AC/DC",
    origen:"Hertford, Inglaterra, Reino Unido",
    historia:`AC/DC es un grupo de hard rock australiano formado en 1973 en Sídney, Australia, por los hermanos escoceses Malcolm y Angus Young.3​4​

    Sus álbumes se han vendido en un total estimado de 200 millones de copias,​ 
    embarcándose en giras multitudinarias por todo el mundo, y sus éxitos han musicalizado varias producciones cinematográficas sobresalientes. 
    Son famosas sus actuaciones en vivo, resultando vibrantes y exultantes espectáculos de primer orden. Mucho de ello se debe al extravagante estilo de su 
    guitarrista principal y símbolo visual, Angus Young, quien asume el rol de agitador musical durante los conciertos, gracias a sus dinámicos y adrenalínicos 
    despliegues escénicos uniformado de colegial callejero. `,
    miembros:"Brian Johnson, Angus Young, Stevie Young, Phil Rudd",
    actividad:"1973-presente",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/ACDC_In_Tacoma_2009.jpg/250px-ACDC_In_Tacoma_2009.jpg",
    video:"pAgnJDJN4VA"
  },
  {
    id:5,nombre:"The Ramones",
    origen:"Queens, Nueva York, Estados Unidos",
    historia:`Ramones fue una banda de punk formada en Forest Hills, en el distrito de Queens (Nueva York, Estados Unidos) en 1974, y 
    disuelta veintidós años más tarde, en 1996.
    Pioneros y líderes del naciente punk, cimentaron las bases de este género musical con composiciones simples, minimalistas, repetitivas y 
    letras muy simples o incluso sin sentido, en clara oposición a la pomposidad y la fastuosidad de las bandas que triunfaban en el mercado de los años 1970 
    con sus largos solos de guitarra, las complejas canciones de rock progresivo y sus enigmáticas letras.5​ Su sonido se caracteriza por ser rápido y directo, 
    con influencias del rockabilly de los años 1950, el surf rock, The Beatles, The Who, The Velvet Underground, las bandas de chicas de los años 1960 
    como The Shangri-Las y el garage protopunk de MC5 y The Stooges.​  `,
    miembros:"Joey Ramone †,"+
    " Johnny Ramone †," +" Marky Ramone,"+ " Elvis Ramone,"+" C. J. Ramone,"+ " Dee Dee Ramone †,"+" Tommy Ramone †,"+" Richie Ramone",
    actividad:"1974-1996",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Ramones_1983_b.jpg/280px-Ramones_1983_b.jpg",
    video:"OfIfzVf8t6E"
  },
  {
    id:6,nombre:"Kiss",
    origen:"Nueva York, Estados Unidos",
    historia:`Kiss es una banda estadounidense de rock formada en Nueva York en enero de 1973 por el bajista Gene Simmons y el guitarrista Paul Stanley, 
    a los que más tarde se unirían el batería Peter Criss y el guitarrista Ace Frehley.2​ Conocidos por su maquillaje facial y sus extravagantes trajes, 
    el grupo se dio a conocer al público a mediados de los años 1970 gracias a sus actuaciones en directo, en las que incluían pirotecnia, llamaradas, cañones, 
    baterías elevadoras, guitarras con humo y sangre falsa. Si se tienen en cuenta los álbumes en solitario de 1978, Kiss ha conseguido treinta discos de oro de la RIAA 
    hacia 2015 y se la considera la banda estadounidense que ha recibido más de estas certificaciones.​ `,
    miembros:
    "Paul Stanley" +" Gene Simmons,"+ " Eric Singer,"+" Tommy Thayer,",
    actividad:"1973-presente",
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Kiss_Love_Gun_era.png/300px-Kiss_Love_Gun_era.png",
    video:"ZhIsAZO5gl0"
  },
  ];
  
 
 
  constructor(private route:Router) {
    this.bandas=[...this.bandasCargadas];
    
  }
  bandas: Array<Banda> = [];

  getBandas():Array<Banda>{
    return this.bandas;
  }
 

  addBanda(banda:Banda){
    this.bandas.push(banda);
  }

  deleteBanda(id:number){
    for(var i= 0; i< this.bandas.length;i++){
      if(this.bandas[i]["id"]==id){
        this.bandas.splice(i,1);

      }

    }
    
  }

}

