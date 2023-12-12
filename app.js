const music = new Audio('');

const songs = [
    {
        id: '1',
        songName: `Blinding Lights <br>
        <div class="subtitle">The Weeknd</div>`,
        poster: "/covers/all covers/1.jpg"
    },
    {
        id: '2',
        songName: `Be Alright <br>
        <div class="subtitle">Dean Lewis</div>`,
        poster: "/covers/all covers/2.jpg"
    },
    {
        id: '3',
        songName: `Attention <br>
        <div class="subtitle">Charlie Puth</div>`,
        poster: "/covers/all covers/3.jpg"
    },
    {
        id: '4',
        songName: `Bad Liar <br>
        <div class="subtitle">Imagine Dragons</div>`,
        poster: "/covers/all covers/4.jpg"
    },
    {
        id: '5',
        songName: `Bones <br>
        <div class="subtitle">Imagine Dragons</div>`,
        poster: "/covers/all covers/5.jpg"
    },
    {
        id: '6',
        songName: `Before You Go <br>
        <div class="subtitle">Lewis Capaldi</div>`,
        poster: "/covers/all covers/6.jpg"
    },
    {
        id: '7',
        songName: `One Call Away <br>
        <div class="subtitle">Charlie Puth</div>`,
        poster: "/covers/all covers/7.jpg"
    },
    {
        id: '8',
        songName: `Die For You (with Ariana Grande) - Remix <br>
        <div class="subtitle">The Weeknd; Ariana Grande</div>`,
        poster: "/covers/all covers/8.jpg"
    },
    {
        id: '9',
        songName: `Alone, Pt. II <br>
        <div class="subtitle">Alan Walker, Ava Max</div>`,
        poster: "/covers/all covers/9.jpg"
    },
    {
        id: '10',
        songName: `Let Me Down Slowly <br>
        <div class="subtitle">Alec Benjamin</div>`,
        poster: "/covers/all covers/10.jpg"
    },
    {
        id: '11',
        songName: `It's You <br>
        <div class="subtitle">Ali Gatie</div>`,
        poster: "/covers/all covers/11.jpg"
    },
    {
        id: '12',
        songName: `2002 <br>
        <div class="subtitle">Anne-Marie</div>`,
        poster: "/covers/all covers/12.jpg"
    },
    {
        id: '13',
        songName: `Eastside (with Halsey & Khalid) <br>
        <div class="subtitle">benny blanco; Halsey; Khalid</div>`,
        poster: "/covers/all covers/13.jpg"
    },
    {
        id: '14',
        songName: `Falling   <br>
        <div class="subtitle">Trevor Daniel</div>`,
        poster: "/covers/all covers/14.jpg"
    },
    {
        id: '15',
        songName: `lovely (with Khalid)  <br>
        <div class="subtitle">Billie Eilish; Khalid</div>`,
        poster: "/covers/all covers/15.jpg"
    },
    {
        id: '16',
        songName: `The Middle <br>
        <div class="subtitle">Zedd; Maren Morris; Grey</div>`,
        poster: "/covers/all covers/16.jpg"
    },
    {
        id: '17',
        songName: `Glad You Exist <br>
        <div class="subtitle">Dan + Shay</div>`,
        poster: "/covers/all covers/17.jpg"
    },
    {
        id: '18',
        songName: `I'm Good (Blue) <br>
        <div class="subtitle">David Guetta; Bebe Rexha</div>`,
        poster: "/covers/all covers/18.jpg"
    },
    {
        id: '19',
        songName: `Levitating (feat. DaBaby) <br>
        <div class="subtitle">Dua Lipa; DaBaby</div>`,
        poster: "/covers/all covers/19.jpg"
    },
    {
        id: '20',
        songName: `Arcade <br>
        <div class="subtitle">Duncan Laurence</div>`,
        poster: "/covers/all covers/20.jpg"
    },
    {
        id: '21',
        songName: `Bad Habits <br>
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "/covers/all covers/21.jpg"
    },
    {
        id: '22',
        songName: `MIDDLE OF THE NIGHT <br>
        <div class="subtitle">Elley Duhé</div>`,
        poster: "/covers/all covers/22.jpg"
    },
    {
        id: '23',
        songName: `Hate Me (with Juice WRLD) <br>
        <div class="subtitle">Ellie Goulding; Juice WRLD</div>`,
        poster: "/covers/all covers/23.jpg"
    },
    {
        id: '24',
        songName: `Heat Waves <br>
        <div class="subtitle">Glass Animals</div>`,
        poster: "/covers/all covers/24.jpg"
    },
    {
        id: '25',
        songName: `Let Me Go (with Alesso, Florida Georgia Line & watt) <br>
        <div class="subtitle">Hailee Steinfeld; Alesso; Florida Georgia Line; WATT</div>`,
        poster: "/covers/all covers/25.jpg"
    },
    {
        id: '26',
        songName: `Without Me <br>
        <div class="subtitle">Halsey</div>`,
        poster: "/covers/all covers/26.jpg"
    },
    {
        id: '27',
        songName: `Sharks <br>
        <div class="subtitle">Imagine Dragons</div>`,
        poster: "/covers/all covers/27.jpg"
    },
    {
        id: '28',
        songName: `Shivers <br>
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "/covers/all covers/28.jpg"
    },
    {
        id: '29',
        songName: `Enemy (with JID) - from the series Arcane League of Legends <br>
        <div class="subtitle">Imagine Dragons; JID; Arcane; League of Legends</div>`,
        poster: "/covers/all covers/29.jpg"
    },
    {
        id: '30',
        songName: `Rewrite The Stars (with James Arthur & Anne-Marie) <br>
        <div class="subtitle">James Arthur; Anne-Marie</div>`,
        poster: "/covers/all covers/30.jpg"
    },
    {
        id: '31',
        songName: `Take You Dancing <br>
        <div class="subtitle">Jason Derulo</div>`,
        poster: "/covers/all covers/31.jpg"
    },
    {
        id: '32',
        songName: `Infinity <br>
        <div class="subtitle">Jaymes Young</div>`,
        poster: "/covers/all covers/32.jpg"
    },
    {
        id: '33',
        songName: `comethru <br>
        <div class="subtitle">Jeremy Zucker</div>`,
        poster: "/covers/all covers/33.jpg"
    },
    {
        id: '34',
        songName: `Starboy <br>
        <div class="subtitle">The Weeknd; Draft Punk</div>`,
        poster: "/covers/all covers/34.jpg"
    },
    {
        id: '35',
        songName: `Anyone <br>
        <div class="subtitle">Justin Bieber</div>`,
        poster: "/covers/all covers/35.jpg"
    },
    {
        id: '36',
        songName: `Ghost <br>
        <div class="subtitle">Justin Bieber</div>`,
        poster: "/covers/all covers/36.jpg"
    },
    {
        id: '37',
        songName: `Intentions <br>
        <div class="subtitle">Justin Bieber; Quavo</div>`,
        poster: "/covers/all covers/37.jpg"
    },
    {
        id: '38',
        songName: `golden hour <br>
        <div class="subtitle">JVKE</div>`,
        poster: "/covers/all covers/38.jpg"
    },
    {
        id: '39',
        songName: `Aurora <br>
        <div class="subtitle">K-391; RØRY</div>`,
        poster: "/covers/all covers/39.jpg"
    },
    {
        id: '40',
        songName: `Lose Somebody <br>
        <div class="subtitle">Kygo; OneRepublic</div>`,
        poster: "/covers/all covers/40.jpg"
    },
    {
        id: '41',
        songName: `STAR WALKIN' (League of Legends Worlds Anthem) <br>
        <div class="subtitle">Lil Nas X</div>`,
        poster: "/covers/all covers/41.jpg"
    },
    {
        id: '42',
        songName: `Beautiful Mistakes (feat. Megan Thee Stallion) <br>
        <div class="subtitle">Maroon 5; Megan Thee Stallion</div>`,
        poster: "/covers/all covers/42.jpg"
    },
    {
        id: '43',
        songName: `Sugar <br>
        <div class="subtitle">Maroon 5</div>`,
        poster: "/covers/all covers/43.jpg"
    },
    {
        id: '44',
        songName: `FRIENDS <br>
        <div class="subtitle">Marshmello; Anne-Marie</div>`,
        poster: "/covers/all covers/44.jpg"
    },
    {
        id: '45',
        songName: `Happier <br>
        <div class="subtitle">Marshmello; Bastille</div>`,
        poster: "/covers/all covers/45.jpg"
    },
    {
        id: '46',
        songName: `Numb <br>
        <div class="subtitle">Marshmello; Khalid</div>`,
        poster: "/covers/all covers/46.jpg"
    },
    {
        id: '47',
        songName: `Silence <br>
        <div class="subtitle">Marshmello; Khalid</div>`,
        poster: "/covers/all covers/47.jpg"
    },
    {
        id: '48',
        songName: `Dusk Till Dawn (feat. Sia) - Radio Edit <br>
        <div class="subtitle">ZAYN; Sia</div>`,
        poster: "/covers/all covers/48.jpg"
    },
    {
        id: '49',
        songName: `Night Changes <br>
        <div class="subtitle">One Direction</div>`,
        poster: "/covers/all covers/49.jpg"
    },
    {
        id: '50',
        songName: `Perfect <br>
        <div class="subtitle">One Direction</div>`,
        poster: "/covers/all covers/50.jpg"
    },
    {
        id: '51',
        songName: `Story of My Life <br>
        <div class="subtitle">One Direction</div>`,
        poster: "/covers/all covers/51.jpg"
    },
    {
        id: '52',
        songName: `At My Worst <br>
        <div class="subtitle">Pink Sweat$</div>`,
        poster: "/covers/all covers/52.jpg"
    },
    {
        id: '53',
        songName: `I Like You (A Happier Song) (with Doja Cat) <br>
        <div class="subtitle">Post Malone; Doja Cat</div>`,
        poster: "/covers/all covers/53.jpg"
    },
    {
        id: '54',
        songName: `One Right Now (with The Weeknd) <br>
        <div class="subtitle">Post Malone; The Weeknd</div>`,
        poster: "/covers/all covers/54.jpg"
    },
    {
        id: '55',
        songName: `SNAP <br>
        <div class="subtitle">Rose Linn</div>`,
        poster: "/covers/all covers/55.jpg"
    },
    {
        id: '56',
        songName: `you broke me first <br>
        <div class="subtitle">Tate McRae</div>`,
        poster: "/covers/all covers/56.jpg"
    },
    {
        id: '57',
        songName: `WITHOUT YOU <br>
        <div class="subtitle">The Kid LAROI</div>`,
        poster: "/covers/all covers/57.jpg"
    },
    {
        id: '58',
        songName: `Sunroof <br>
        <div class="subtitle">Nicky Youre; dazy</div>`,
        poster: "/covers/all covers/58.jpg"
    },
    {
        id: '59',
        songName: `Call You Mine <br>
        <div class="subtitle">The Chainsmokers; Bebe Rexha</div>`,
        poster: "/covers/all covers/59.jpg"
    },
    {
        id: '60',
        songName: `STAY (with Justin Bieber) <br>
        <div class="subtitle">The Kid LAROI; Justin Bieber</div>`,
        poster: "/covers/all covers/60.jpg"
    },
    // {
    //     id: '61',
    //     songName: `9:45 <br>
    //     <div class="subtitle">Prabh Singh, Jay Trak, Rooh Sandhu</div>`,
    //     poster: "/covers/all covers/61.jpg"
    // },
    // {
    //     id: '62',
    //     songName: `12 Bande <br>
    //     <div class="subtitle">Varinder Brar</div>`,
    //     poster: "/covers/all covers/62.jpg"
    // },
    // {
    //     id: '63',
    //     songName: `52 Bars <br>
    //     <div class="subtitle">Karan Aujla; Ikky</div>`,
    //     poster: "/covers/all covers/63.jpg"
    // },
    // {
    //     id: '64',
    //     songName: `295 <br>
    //     <div class="subtitle">Sidhu Moose Wala</div>`,
    //     poster: "/covers/all covers/64.jpg"
    // },
    // {
    //     id: '65',
    //     songName: `Aam Jahe Munde <br>
    //     <div class="subtitle">Parmish Verma; PARDHAAN</div>`,
    //     poster: "/covers/all covers/65.jpg"
    // },
    // {
    //     id: '66',
    //     songName: `Admirin' You (feat. Preston Pablo) <br>
    //     <div class="subtitle">Karan Aujla; Ikky; Preston Pablo</div>`,
    //     poster: "/covers/all covers/66.jpg"
    // },
    // {
    //     id: '67',
    //     songName: `Afterhours <br>
    //     <div class="subtitle">Bir; Dhanju; thiarajxtt</div>`,
    //     poster: "/covers/all covers/67.jpg"
    // },
    // {
    //     id: '68',
    //     songName: `Arjan Vailly (From "ANIMAL") <br>
    //     <div class="subtitle">Manan Bhardwaj; Bhupinder Babbal</div>`,
    //     poster: "/covers/all covers/68.jpg"
    // },
    // {
    //     id: '69',
    //     songName: `Attraction <br>
    //     <div class="subtitle">Sukha; Prodgk</div>`,
    //     poster: "/covers/all covers/69.jpg"
    // },
    // {
    //     id: '70',
    //     songName: `Ayee <br>
    //     <div class="subtitle">Harnoor; Jass Dhillon; Ilam</div>`,
    //     poster: "/covers/all covers/70.jpg"
    // },
    // {
    //     id: '71',
    //     songName: `Back of Car <br>
    //     <div class="subtitle">Prem Dhillon; San-B</div>`,
    //     poster: "/covers/all covers/71.jpg"
    // },
    // {
    //     id: '72',
    //     songName: `Baller <br>
    //     <div class="subtitle">Subh; Ikky</div>`,
    //     poster: "/covers/all covers/72.jpg"
    // },
    // {
    //     id: '73',
    //     songName: `Bewafa <br>
    //     <div class="subtitle">Imran Khan</div>`,
    //     poster: "/covers/all covers/73.jpg"
    // },
    // {
    //     id: '74',
    //     songName: `California Love <br>
    //     <div class="subtitle">Cheema Y; Gur Sidhu</div>`,
    //     poster: "/covers/all covers/74.jpg"
    // },
    // {
    //     id: '75',
    //     songName: `Case <br>
    //     <div class="subtitle">Diljit Dosanjh; Intense</div>`,
    //     poster: "/covers/all covers/75.jpg"
    // },
    // {
    //     id: '76',
    //     songName: `Chandigarh Ka Chokra <br>
    //     <div class="subtitle">Sunanda Sharma</div>`,
    //     poster: "/covers/all covers/76.jpg"
    // },
    // {
    //     id: '77',
    //     songName: `Check It Out <br>
    //     <div class="subtitle">Parmish Verma; Paradox</div>`,
    //     poster: "/covers/all covers/77.jpg"
    // },
    // {
    //     id: '78',
    //     songName: `Cheques <br>
    //     <div class="subtitle">Subh</div>`,
    //     poster: "/covers/all covers/78.jpg"
    // },
    // {
    //     id: '79',
    //     songName: `Chorni <br>
    //     <div class="subtitle">DIVINE; Sidhu Moose Wala</div>`,
    //     poster: "/covers/all covers/79.jpg"
    // },
    // {
    //     id: '80',
    //     songName: `Daku <br>
    //     <div class="subtitle">Chani Nattan; Inderpal Moga</div>`,
    //     poster: "/covers/all covers/80.jpg"
    // },
    // {
    //     id: '81',
    //     songName: `Dekhya Kite <br>
    //     <div class="subtitle">Davy; Gur Sidhu; Simar Kaur</div>`,
    //     poster: "/covers/all covers/81.jpg"
    // },
    // {
    //     id: '82',
    //     songName: `Dil Nu <br>
    //     <div class="subtitle">AP Dhillon; Shinda Kahlon</div>`,
    //     poster: "/covers/all covers/82.jpg"
    // },
    // {
    //     id: '83',
    //     songName: `Dilawara <br>
    //     <div class="subtitle">The PropheC; Ezu</div>`,
    //     poster: "/covers/all covers/83.jpg"
    // },
    // {
    //     id: '84',
    //     songName: `Dior <br>
    //     <div class="subtitle">Subh</div>`,
    //     poster: "/covers/all covers/84.jpg"
    // },
    // {
    //     id: '85',
    //     songName: `Distance Love <br>
    //     <div class="subtitle">Zehr Vibe</div>`,
    //     poster: "/covers/all covers/85.jpg"
    // },
    // {
    //     id: '86',
    //     songName: `Do You Know <br>
    //     <div class="subtitle">Diljit Dosanjh</div>`,
    //     poster: "/covers/all covers/86.jpg"
    // },
    // {
    //     id: '87',
    //     songName: `Elevated <br>
    //     <div class="subtitle">Subh</div>`,
    //     poster: "/covers/all covers/87.jpg"
    // },
    // {
    //     id: '88',
    //     songName: `Everybody Hurts <br>
    //     <div class="subtitle">Sidhu Moose Wala</div>`,
    //     poster: "/covers/all covers/88.jpg"
    // },
    // {
    //     id: '89',
    //     songName: `Excuses <br>
    //     <div class="subtitle">AP Dhillon; Gurinder Gill; Intense</div>`,
    //     poster: "/covers/all covers/89.jpg"
    // },
    // {
    //     id: '90',
    //     songName: `Gall Khaas <br>
    //     <div class="subtitle">Zehr Vibe</div>`,
    //     poster: "/covers/all covers/90.jpg"
    // },
    // {
    //     id: '91',
    //     songName: `Gangsta <br>
    //     <div class="subtitle">Karan Aujla; YG</div>`,
    //     poster: "/covers/all covers/91.jpg"
    // },
    // {
    //     id: '92',
    //     songName: `GODSPEED <br>
    //     <div class="subtitle">Tyson Sidhu</div>`,
    //     poster: "/covers/all covers/92.jpg"
    // },
    // {
    //     id: '93',
    //     songName: `Hass Hass <br>
    //     <div class="subtitle">Diljit Dosanjh; Sia; Greg Kurstin</div>`,
    //     poster: "/covers/all covers/93.jpg"
    // },
    // {
    //     id: '94',
    //     songName: `Her <br>
    //     <div class="subtitle">Subh</div>`,
    //     poster: "/covers/all covers/94.jpg"
    // },
    // {
    //     id: '95',
    //     songName: `Hussan Illahi <br>
    //     <div class="subtitle">Wazir Patar</div>`,
    //     poster: "/covers/all covers/95.jpg"
    // },
    // {
    //     id: '96',
    //     songName: `Ice <br>
    //     <div class="subtitle">Subh</div>`,
    //     poster: "/covers/all covers/96.jpg"
    // },
    // {
    //     id: '97',
    //     songName: `Ilzaam <br>
    //     <div class="subtitle">Arjan Dhillon; Mxrci</div>`,
    //     poster: "/covers/all covers/97.jpg"
    // },
    // {
    //     id: '98',
    //     songName: `Insane <br>
    //     <div class="subtitle">AP Dhillon; Shinda Kahlon; Gurinder Gill; Gminxr</div>`,
    //     poster: "/covers/all covers/98.jpg"
    // },
    // {
    //     id: '99',
    //     songName: `Jatt Vailly <br>
    //     <div class="subtitle">Diljit Dosanjh; thiarajxtt</div>`,
    //     poster: "/covers/all covers/99.jpg"
    // },
    // {
    //     id: '100',
    //     songName: `Jawani <br>
    //     <div class="subtitle">Arjan Dhillon</div>`,
    //     poster: "/covers/all covers/100.jpg"
    // },
    // {
    //     id: '101',
    //     songName: `JOURNEY <br>
    //     <div class="subtitle">Amrit Maan; Mxrci</div>`,
    //     poster: "/covers/all covers/101.jpg"
    // },
    // {
    //     id: '102',
    //     songName: `Kamlee <br>
    //     <div class="subtitle">SARRB; Starboy X</div>`,
    //     poster: "/covers/all covers/102.jpg"
    // },
    // {
    //     id: '103',
    //     songName: `Khadaak <br>
    //     <div class="subtitle">Shooter Kahlon; Shevy; Micheal</div>`,
    //     poster: "/covers/all covers/103.jpg"
    // },
    // {
    //     id: '104',
    //     songName: `Kina Chir <br>
    //     <div class="subtitle">The PropheC</div>`,
    //     poster: "/covers/all covers/104.jpg"
    // },
    // {
    //     id: '105',
    //     songName: `KNOWN FACE <br>
    //     <div class="subtitle">Amrit Maan; Deep Jandu</div>`,
    //     poster: "/covers/all covers/105.jpg"
    // },
    // {
    //     id: '106',
    //     songName: `Koka <br>
    //     <div class="subtitle">Mankirt Aulakh; Simar Kaur</div>`,
    //     poster: "/covers/all covers/106.jpg"
    // },
    // {
    //     id: '107',
    //     songName: `Lalkara <br>
    //     <div class="subtitle">Diljit Dosanjh; Intense; Sultaan</div>`,
    //     poster: "/covers/all covers/107.jpg"
    // },
    // {
    //     id: '108',
    //     songName: `Lemonade <br>
    //     <div class="subtitle">Diljit Dosanjh</div>`,
    //     poster: "/covers/all covers/108.jpg"
    // },
    // {
    //     id: '109',
    //     songName: `Love Sick <br>
    //     <div class="subtitle">Sidhu Moose Wala; AR Paisley</div>`,
    //     poster: "/covers/all covers/109.jpg"
    // },
    // {
    //     id: '110',
    //     songName: `Lover <br>
    //     <div class="subtitle">Diljit Dosanjh</div>`,
    //     poster: "/covers/all covers/110.jpg"
    // },
    // {
    //     id: '111',
    //     songName: `Mexico <br>
    //     <div class="subtitle">Hunar Sidhu; Raees</div>`,
    //     poster: "/covers/all covers/111.jpg"
    // },
    // {
    //     id: '112',
    //     songName: `Mi Amor <br>
    //     <div class="subtitle">Sharn; 40k; The Paul</div>`,
    //     poster: "/covers/all covers/112.jpg"
    // },
    // {
    //     id: '113',
    //     songName: `Mood Swings <br>
    //     <div class="subtitle">Tegi Pannu; Manni Sandhu</div>`,
    //     poster: "/covers/all covers/113.jpg"
    // },
    // {
    //     id: '114',
    //     songName: `Moon Rise <br>
    //     <div class="subtitle">Guru Randhawa; Sanjoy</div>`,
    //     poster: "/covers/all covers/114.jpg"
    // },
    // {
    //     id: '115',
    //     songName: `My Prime <br>
    //     <div class="subtitle">Navaan Sandhu; bebhumika</div>`,
    //     poster: "/covers/all covers/115.jpg"
    // },
    // {
    //     id: '116',
    //     songName: `Nimm Thalle <br>
    //     <div class="subtitle">Jordan Sandhu; Desi Crew</div>`,
    //     poster: "/covers/all covers/116.jpg"
    // },
    // {
    //     id: '117',
    //     songName: `No Love <br>
    //     <div class="subtitle">Subh</div>`,
    //     poster: "/covers/all covers/117.jpg"
    // },
    // {
    //     id: '118',
    //     songName: `Note <br>
    //     <div class="subtitle">Dilpreet Dhillon</div>`,
    //     poster: "/covers/all covers/118.jpg"
    // },
    // {
    //     id: '119',
    //     songName: `Obsessed <br>
    //     <div class="subtitle">Riar Saab; Abhijay Sharma</div>`,
    //     poster: "/covers/all covers/119.jpg"
    // },
    // {
    //     id: '120',
    //     songName: `On Top <br>
    //     <div class="subtitle">Karan Aujla</div>`,
    //     poster: "/covers/all covers/120.jpg"
    // },
    // {
    //     id: '121',
    //     songName: `One Love <br>
    //     <div class="subtitle">Subh</div>`,
    //     poster: "/covers/all covers/121.jpg"
    // },
    // {
    //     id: '122',
    //     songName: `One Question <br>
    //     <div class="subtitle">Tegi Pannu; Manni Shandu</div>`,
    //     poster: "/covers/all covers/122.jpg"
    // },
    // {
    //     id: '123',
    //     songName: `P.O.V (Point of View) <br>
    //     <div class="subtitle">Karan Aujla; Yeah Proof</div>`,
    //     poster: "/covers/all covers/123.jpg"
    // },
    // {
    //     id: '124',
    //     songName: `Pagol <br>
    //     <div class="subtitle">Deep Jandu; Bohemia</div>`,
    //     poster: "/covers/all covers/124.jpg"
    // },
    // {
    //     id: '125',
    //     songName: `Parshawan <br>
    //     <div class="subtitle">Harnoor</div>`,
    //     poster: "/covers/all covers/125.jpg"
    // },
    // {
    //     id: '126',
    //     songName: `Peaches <br>
    //     <div class="subtitle">Diljit Dosanjh</div>`,
    //     poster: "/covers/all covers/126.jpg"
    // },
    // {
    //     id: '127',
    //     songName: `Players <br>
    //     <div class="subtitle">Badshah; Karan Aujla; Devika Badyal</div>`,
    //     poster: "/covers/all covers/127.jpg"
    // },
    // {
    //     id: '128',
    //     songName: `Rank 1 <br>
    //     <div class="subtitle">Jordan Sandhu; Desi Crew</div>`,
    //     poster: "/covers/all covers/128.jpg"
    // },
    // {
    //     id: '129',
    //     songName: `Rubicon Drill <br>
    //     <div class="subtitle">Laddi Chahal; Parmish Verma; Gurlez Akhtar</div>`,
    //     poster: "/covers/all covers/129.jpg"
    // },
    // {
    //     id: '130',
    //     songName: `Rubicon <br>
    //     <div class="subtitle">Prem Dhillon; Rass</div>`,
    //     poster: "/covers/all covers/130.jpg"
    // },
    // {
    //     id: '131',
    //     songName: `Salute <br>
    //     <div class="subtitle">Arjan Dhillon</div>`,
    //     poster: "/covers/all covers/131.jpg"
    // },
    // {
    //     id: '132',
    //     songName: `Schedule <br>
    //     <div class="subtitle">Tegi Pannu; Manni Sandhu</div>`,
    //     poster: "/covers/all covers/132.jpg"
    // },
    // {
    //     id: '133',
    //     songName: `Shape <br>
    //     <div class="subtitle">Kaka</div>`,
    //     poster: "/covers/all covers/133.jpg"
    // },
    // {
    //     id: '134',
    //     songName: `Sheesha <br>
    //     <div class="subtitle">Karan Aujla</div>`,
    //     poster: "/covers/all covers/134.jpg"
    // },
    // {
    //     id: '135',
    //     songName: `Showstopper <br>
    //     <div class="subtitle">JERRY</div>`,
    //     poster: "/covers/all covers/135.jpg"
    // },
    // {
    //     id: '136',
    //     songName: `Sit Down <br>
    //     <div class="subtitle">Prem Dhillon; Snappy</div>`,
    //     poster: "/covers/all covers/136.jpg"
    // },
    // {
    //     id: '137',
    //     songName: `Sleepless <br>
    //     <div class="subtitle">Karan Aujla; Ikky</div>`,
    //     poster: "/covers/all covers/137.jpg"
    // },
    // {
    //     id: '138',
    //     songName: `Softly <br>
    //     <div class="subtitle">Karan Aujla; Ikky</div>`,
    //     poster: "/covers/all covers/138.jpg"
    // },
    // {
    //     id: '139',
    //     songName: `SPAIN <br>
    //     <div class="subtitle">Jassa Dhillon; thiarajxtt</div>`,
    //     poster: "/covers/all covers/139.jpg"
    // },
    // {
    //     id: '140',
    //     songName: `Still Rollin <br>
    //     <div class="subtitle">Subh</div>`,
    //     poster: "/covers/all covers/140.jpg"
    // },
    // {
    //     id: '141',
    //     songName: `Summer High <br>
    //     <div class="subtitle">AP Dhillon</div>`,
    //     poster: "/covers/all covers/141.jpg"
    // },
    // {
    //     id: '142',
    //     songName: `Sunday <br>
    //     <div class="subtitle">Dilpreet Dhillon; Gurlez Akhtar</div>`,
    //     poster: "/covers/all covers/142.jpg"
    // },
    // {
    //     id: '143',
    //     songName: `SWITCHIN' LANES <br>
    //     <div class="subtitle">Tegi Pannu; Sukha; Manni Sandhu</div>`,
    //     poster: "/covers/all covers/143.jpg"
    // },
    // {
    //     id: '144',
    //     songName: `Take It Easy <br>
    //     <div class="subtitle">Karan Aujla; Ikky</div>`,
    //     poster: "/covers/all covers/144.jpg"
    // },
    // {
    //     id: '145',
    //     songName: `Tareefan <br>
    //     <div class="subtitle">Jordan Sandhu; Mehar Vaani</div>`,
    //     poster: "/covers/all covers/145.jpg"
    // },
    // {
    //     id: '146',
    //     songName: `Taur <br>
    //     <div class="subtitle">Lopon Sidhu</div>`,
    //     poster: "/covers/all covers/146.jpg"
    // },
    // {
    //     id: '147',
    //     songName: `Thaa <br>
    //     <div class="subtitle">Varinder Brar; Rav Dhaliwal; Ultra Beats</div>`,
    //     poster: "/covers/all covers/147.jpg"
    // },
    // {
    //     id: '148',
    //     songName: `The Last Ride <br>
    //     <div class="subtitle">Sidhu Moose Wala; Wazir Patar</div>`,
    //     poster: "/covers/all covers/148.jpg"
    // },
    // {
    //     id: '149',
    //     songName: `These Days (feat. Bohemia) <br>
    //     <div class="subtitle">Sidhu Moose Wala; Bohemia</div>`,
    //     poster: "/covers/all covers/149.jpg"
    // },
    // {
    //     id: '150',
    //     songName: `Todh <br>
    //     <div class="subtitle">Prince Narula; Munawar Faruqui; Rony Ajnali</div>`,
    //     poster: "/covers/all covers/150.jpg"
    // },
    // {
    //     id: '151',
    //     songName: `Top Flame <br>
    //     <div class="subtitle">JERRY</div>`,
    //     poster: "/covers/all covers/151.jpg"
    // },
    // {
    //     id: '152',
    //     songName: `Top Notch Gabru <br>
    //     <div class="subtitle">Vicky</div>`,
    //     poster: "/covers/all covers/152.jpg"
    // },
    // {
    //     id: '153',
    //     songName: `True Stories <br>
    //     <div class="subtitle">AP Dhillon; Shinda Kahlon</div>`,
    //     poster: "/covers/all covers/153.jpg"
    // },
    // {
    //     id: '154',
    //     songName: `Try Me <br>
    //     <div class="subtitle">Karan Aujla; Ikky</div>`,
    //     poster: "/covers/all covers/154.jpg"
    // },
    // {
    //     id: '155',
    //     songName: `Watch Out <br>
    //     <div class="subtitle">Sidhu Moose Wala; Sikander Kahlon; Mxrci</div>`,
    //     poster: "/covers/all covers/155.jpg"
    // },
    // {
    //     id: '156',
    //     songName: `We Rollin <br>
    //     <div class="subtitle">Subh</div>`,
    //     poster: "/covers/all covers/156.jpg"
    // },
    // {
    //     id: '157',
    //     songName: `White Brown Black <br>
    //     <div class="subtitle">Avvy Sra; Karan Aujla; Jaani</div>`,
    //     poster: "/covers/all covers/157.jpg"
    // },
    // {
    //     id: '158',
    //     songName: `With You <br>
    //     <div class="subtitle">AP Dhillon</div>`,
    //     poster: "/covers/all covers/158.jpg"
    // },
    // {
    //     id: '159',
    //     songName: `Yeah Naah <br>
    //     <div class="subtitle">Karan Aujla; Ikky</div>`,
    //     poster: "/covers/all covers/159.jpg"
    // },
    // {
    //     id: '160',
    //     songName: `Ykwim <br>
    //     <div class="subtitle">Karan Aujla; KR$NA; Mehar Vaani</div>`,
    //     poster: "/covers/all covers/160.jpg"
    // },
]

Array.from(document.getElementsByClassName("songItem")).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h4')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    } else {
        music.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songPlay')).forEach((element) => {
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
    })
}


let index = 0;
let poster_masterPlay = document.getElementById('poster_masterPlay');
let masterTitle = document.getElementById('masterTitle');

Array.from(document.getElementsByClassName('songPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        music.src = `/songs/all songs/${index}.mp3`;
        poster_masterPlay.src = `/covers/all covers/${index}.jpg`;
        music.play();
        let songName = songs.filter((ele) => {
            return ele.id == index;
        })

        songName.forEach(ele => {
            let { songName } = ele;
            masterTitle.innerHTML = songName;
        })
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        // music.addEventListener('ended', () => {
        //     masterPlay.classList.remove('fa-pause');
        //     masterPlay.classList.add('fa-play');
        // })

    })
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let myProgressBar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = myProgressBar;
    let Seekbar = seek.value;
    bar2.style.width = `${Seekbar}%`;
    dot.style.left = `${Seekbar}%`;
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})

// music.addEventListener('ended', () => {
//     masterPlay.classList.remove('fa-pause');
//     masterPlay.classList.add('fa-play');
// })
music.addEventListener('ended', () => {
    masterPlay.classList.add('fa-pause');
    index++;
    music.src = `/songs/all songs/${index}.mp3`;
    poster_masterPlay.src = `/covers/all covers/${index}.jpg`;
    music.play();
    let songName = songs.filter((ele) => {
        return ele.id == index;
    })

    songName.forEach(ele => {
        let { songName } = ele;
        masterTitle.innerHTML = songName;
    })
    makeAllPlays();
    document.getElementsByClassName('songPlay')[index-1].classList.remove('fa-play');
    document.getElementsByClassName('songPlay')[index-1].classList.add('fa-pause');
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName("vol_bar")[0];

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-xmark');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('fa-volume-xmark');
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-low');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.remove('fa-volume-xmark');
        vol_icon.classList.add('fa-volume-high');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `/songs/all songs/${index}.mp3`;
    poster_masterPlay.src = `/covers/all covers/${index}.jpg`;
    music.play();
    let songName = songs.filter((ele) => {
        return ele.id == index;
    })

    songName.forEach(ele => {
        let { songName } = ele;
        masterTitle.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('fa-play');
    document.getElementById(`${index}`).classList.add('fa-pause');

})
next.addEventListener('click', () => {
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `/songs/all songs/${index}.mp3`;
    poster_masterPlay.src = `/covers/all covers/${index}.jpg`;
    music.play();
    let songName = songs.filter((ele) => {
        return ele.id == index;
    })

    songName.forEach(ele => {
        let { songName } = ele;
        masterTitle.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('fa-play');
    document.getElementById(`${index}`).classList.add('fa-pause');

})

