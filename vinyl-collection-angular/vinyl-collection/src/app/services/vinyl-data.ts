import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VinylAlbum, Genre } from '../models/vinyl.interface';

@Injectable({
  providedIn: 'root'
})
export class VinylDataService {

  private albums: VinylAlbum[] = [
    // Rap/Hip-Hop Albums
    {
      id: 'astroworld',
      title: 'Astroworld',
      artist: 'Travis Scott',
      genre: 'rap',
      year: 2018,
      image: 'assets/astroworld.jpg',
      description: 'Travis Scott\'s third studio album featuring hits like "Sicko Mode" and "Butterfly Effect".',
      trackList: [
        'Stargazing',
        'Carousel (feat. Frank Ocean)',
        'Sicko Mode',
        'R.I.P. Screw (feat. Swae Lee)',
        'Stop Trying to Be God',
        'No Bystanders',
        'Skeletons',
        'Wake Up',
        '5% Tint',
        'NC-17 (feat. 21 Savage)',
        'Astrothunder',
        'Yosemite (feat. Gunna & Nav)',
        'Can\'t Say',
        'Who? What!',
        'Butterfly Effect',
        'Houstonfornication',
        'Coffee Bean'
      ]
    },
    {
      id: 'gkmc',
      title: 'Good Kid, M.A.A.D City',
      artist: 'Kendrick Lamar',
      genre: 'rap',
      year: 2012,
      image: 'assets/GKMC.jpg',
      description: 'Kendrick Lamar\'s major-label debut studio album, widely considered a hip-hop classic.',
      trackList: [
        'Sherane a.k.a Master Splinter\'s Daughter',
        'Bitch, Don\'t Kill My Vibe',
        'Backseat Freestyle',
        'The Art of Peer Pressure',
        'Money Trees (feat. Jay Rock)',
        'Poetic Justice (feat. Drake)',
        'good kid',
        'm.A.A.d city (feat. MC Eiht)',
        'Swimming Pools (Drank)',
        'Sing About Me, I\'m Dying of Thirst',
        'Real (feat. Anna Wise)',
        'Compton (feat. Dr. Dre)'
      ]
    },
    {
      id: 'bt3',
      title: 'Bobby Tarantino III',
      artist: 'Logic',
      genre: 'rap',
      year: 2021,
      image: 'assets/BT3.jpg',
      description: 'The third installment in Logic\'s Bobby Tarantino mixtape series.',
      trackList: [
        'Intro',
        'My Way (feat. Silas)',
        'Call Me',
        'Get Up',
        'Vaccine (feat. Redman)',
        'See You Space Cowboy...',
        'Hate Me',
        'God Might Judge',
        'Theme for the People',
        'In My Lifetime',
        'Flawless',
        'Run It Back'
      ]
    },
    {
      id: 'college-dropout',
      title: 'The College Dropout',
      artist: 'Kanye West',
      genre: 'rap',
      year: 2004,
      image: 'assets/CollegeDropout.jpg',
      description: 'Kanye West\'s debut studio album that revolutionized hip-hop production.',
      trackList: [
        'We Don\'t Care',
        'Graduation Day',
        'All Falls Down (feat. Syleena Johnson)',
        'I\'ll Fly Away',
        'Spaceship (feat. GLC & Consequence)',
        'Jesus Walks',
        'Never Let Me Down (feat. Jay-Z & J. Ivy)',
        'Get Em High (feat. Talib Kweli & Common)',
        'Workout Plan',
        'The New Workout Plan',
        'Slow Jamz (feat. Twista & Jamie Foxx)',
        'Breathe In Breathe Out (feat. Ludacris)',
        'School Spirit Skit 1',
        'School Spirit',
        'School Spirit Skit 2',
        'Lil Jimmy Skit',
        'Two Words (feat. Mos Def, Freeway & The Harlem Boys Choir)',
        'Through the Wire',
        'Family Business',
        'Last Call'
      ]
    },
    {
      id: 'blue-slide-park',
      title: 'Blue Slide Park',
      artist: 'Mac Miller',
      genre: 'rap',
      year: 2011,
      image: 'assets/Blue.jpg',
      description: 'Mac Miller\'s debut studio album, debuting at number one on the US Billboard 200.',
      trackList: [
        'English Lane',
        'Blue Slide Park',
        'Party on Fifth Ave.',
        'PA Nights (feat. Chevy Woods)',
        'Frick Park Market (feat. Chevy Woods)',
        'Smile Back',
        'Under the Weather',
        'Of the Soul',
        'My Team (feat. Sir Michael Rocks)',
        'Up All Night',
        'Down the Rabbit Hole',
        'Loitering',
        'Hole in My Pocket',
        'Diamonds & Gold (feat. Pharrell Williams)',
        'Missed Calls',
        'Man in the Hat (feat. Bun B)'
      ]
    },
    {
      id: 'mr-morales',
      title: 'Mr. Morale & The Big Steppers',
      artist: 'Kendrick Lamar',
      genre: 'rap',
      year: 2022,
      image: 'assets/MrMorales.jpg',
      description: 'Kendrick Lamar\'s fifth studio album, his first since DAMN.',
      trackList: [
        'United in Grief',
        'N95',
        'Worldwide Steppers',
        'Die Hard (feat. Blxst & Amanda Reifer)',
        'Father Time (feat. Sampha)',
        'Rich (Interlude)',
        'Rich Spirit',
        'We Cry Together (feat. Taylour Paige)',
        'Purple Hearts (feat. Summer Walker & Ghostface Killah)',
        'Count Me Out',
        'Crown',
        'Silent Hill (feat. Kodak Black)',
        'Savior (Interlude)',
        'Savior (feat. Baby Keem & Sam Dew)',
        'Auntie Diaries',
        'Mr. Morale (feat. Tanna Leone)',
        'Mother I Sober (feat. Beth Gibbons)',
        'Mirror'
      ]
    },
    {
      id: 'flowerboy',
      title: 'Flower Boy',
      artist: 'Tyler, The Creator',
      genre: 'rap',
      year: 2017,
      image: 'assets/flowerboy.jpg',
      description: 'Tyler\'s fourth studio album marking a significant evolution in his sound.',
      trackList: [
        'Foreword (feat. Rex Orange County)',
        'Where This Flower Blooms (feat. Frank Ocean)',
        'Sometimes...',
        'See You Again (feat. Kali Uchis)',
        'Who Dat Boy (feat. A$AP Rocky)',
        'Pothole (feat. Jaden Smith)',
        'Garden Shed (feat. Estelle)',
        'Boredom (feat. Rex Orange County, Anna of the North & Corinne Bailey Rae)',
        'I Ain\'t Got Time!',
        '911 / Mr. Lonely (feat. Frank Ocean, Steve Lacy & Anna of the North)',
        'Droppin\' Seeds (feat. Lil Wayne)',
        'November (feat. Frank Ocean)',
        'Glitter'
      ]
    },
    {
      id: 'divine-feminine',
      title: 'The Divine Feminine',
      artist: 'Mac Miller',
      genre: 'rap',
      year: 2016,
      image: 'assets/divineFem.jpg',
      description: 'Mac Miller\'s fourth studio album exploring themes of love and relationships.'
    },
    {
      id: 'goblin',
      title: 'Goblin',
      artist: 'Tyler, The Creator',
      genre: 'rap',
      year: 2011,
      image: 'assets/goblin.jpg',
      description: 'Tyler\'s debut studio album that established his unique artistic voice.',
      trackList: [
        'Goblin',
        'Yonkers',
        'Radicals',
        'She (feat. Frank Ocean)',
        'Transylvania',
        'Nightmare',
        'Tron Cat',
        'Her',
        'Sandwitches (feat. Hodgy Beats)',
        'Fish',
        'Analog (feat. Hodgy Beats)',
        'Bitch Suck Dick',
        'Window (feat. Domo Genesis, Frank Ocean, Hodgy Beats & Mike G)',
        'AU79',
        'Golden'
      ]
    },
    {
      id: 'late-registration',
      title: 'Late Registration',
      artist: 'Kanye West',
      genre: 'rap',
      year: 2005,
      image: 'assets/lateReg.jpg',
      description: 'Kanye\'s second album featuring orchestral arrangements and conscious rap.',
      trackList: [
        'Wake Up Mr. West',
        'Heard \'Em Say (feat. Adam Levine)',
        'Touch the Sky (feat. Lupe Fiasco)',
        'Gold Digger (feat. Jamie Foxx)',
        'Skit #1',
        'Drive Slow (feat. Paul Wall & GLC)',
        'My Way Home (feat. Common)',
        'Crack Music (feat. The Game)',
        'Roses',
        'Bring Me Down (feat. Brandy)',
        'Addiction',
        'Skit #2',
        'Diamonds from Sierra Leone (Remix) (feat. Jay-Z)',
        'We Major (feat. Nas & Really Doe)',
        'Skit #3',
        'Hey Mama',
        'Celebration',
        'Skit #4',
        'Gone (feat. Consequence & Cam\'ron)',
        'Diamonds from Sierra Leone (Bonus Track)',
        'Late (Bonus Track)'
      ]
    },
    {
      id: 'igor',
      title: 'IGOR',
      artist: 'Tyler, The Creator',
      genre: 'rap',
      year: 2019,
      image: 'assets/igor.jpg',
      description: 'Tyler\'s critically acclaimed album exploring themes of love and heartbreak.',
      trackList: [
        'IGOR\'S THEME',
        'EARFQUAKE',
        'I THINK',
        'BOYFRIEND (feat. Charlie Wilson)',
        'RUNNING OUT OF TIME',
        'NEW MAGIC WAND',
        'A BOY IS A GUN*',
        'PUPPET',
        'WHAT\'S GOOD',
        'GONE, GONE / THANK YOU',
        'I DON\'T LOVE YOU ANYMORE',
        'ARE WE STILL FRIENDS?'
      ]
    },
    {
      id: 'macadelic',
      title: 'Macadelic',
      artist: 'Mac Miller',
      genre: 'rap',
      year: 2012,
      image: 'assets/macadellic.jpg',
      description: 'Mac Miller\'s psychedelic mixtape showcasing his versatility.'
    },
    {
      id: 'watching-movies',
      title: 'Watching Movies with the Sound Off',
      artist: 'Mac Miller',
      genre: 'rap',
      year: 2013,
      image: 'assets/watchingMovies.jpg',
      description: 'Introspective album from the late Pittsburgh rapper.',
      trackList: [
        'The Star Room',
        'Avian',
        'I\'m Not Real (feat. Earl Sweatshirt)',
        'S.D.S.',
        'Bird Call',
        'Matches (feat. Ab-Soul)',
        'I Am Who Am (Killin\' Time) (feat. Niki Randa)',
        'Objects in the Mirror',
        'Red Dot Music (feat. Action Bronson)',
        'Gees (feat. Schoolboy Q)',
        'Watching Movies',
        'Suplexes Inside of Complexes and Duplexes',
        'Remember',
        'Someone Like You',
        'Aquarium',
        'Youforia',
        'Goosebumpz',
        'O.K. (feat. Tyler, The Creator)',
        'Claymation (feat. Vinny Radio)'
      ]
    },

    // Rock Albums  
    {
      id: 'nevermind',
      title: 'Nevermind',
      artist: 'Nirvana',
      genre: 'rock',
      year: 1991,
      image: 'assets/rockImages/nevermind.jpg',
      description: 'Nirvana\'s breakthrough album that brought grunge to the mainstream.',
      trackList: [
        'Smells Like Teen Spirit',
        'In Bloom',
        'Come as You Are',
        'Breed',
        'Lithium',
        'Polly',
        'Territorial Pissings',
        'Drain You',
        'Lounge Act',
        'Stay Away',
        'On a Plain',
        'Something in the Way'
      ]
    },
    {
      id: 'american-idiot',
      title: 'American Idiot',
      artist: 'Green Day',
      genre: 'rock',
      year: 2004,
      image: 'assets/rockImages/americanidiot.jpg',
      description: 'Green Day\'s punk rock opera about American society.',
      trackList: [
        'American Idiot',
        'Jesus of Suburbia',
        'Holiday',
        'Boulevard of Broken Dreams',
        'Are We the Waiting',
        'St. Jimmy',
        'Give Me Novacaine',
        'She\'s a Rebel',
        'Extraordinary Girl',
        'Letterbomb',
        'Wake Me Up When September Ends',
        'Homecoming',
        'Whatsername'
      ]
    },
    {
      id: 'led-zeppelin-iv',
      title: 'Led Zeppelin IV',
      artist: 'Led Zeppelin',
      genre: 'rock',
      year: 1971,
      image: 'assets/rockImages/ledZep.jpeg',
      description: 'One of the greatest rock albums of all time featuring "Stairway to Heaven".',
      trackList: [
        'Black Dog',
        'Rock and Roll',
        'The Battle of Evermore',
        'Stairway to Heaven',
        'Misty Mountain Hop',
        'Four Sticks',
        'Going to California',
        'When the Levee Breaks'
      ]
    },
    {
      id: 'dark-side-moon',
      title: 'The Dark Side of the Moon',
      artist: 'Pink Floyd',
      genre: 'rock',
      year: 1973,
      image: 'assets/rockImages/pinkFloyd.jpeg',
      description: 'Pink Floyd\'s masterpiece exploring themes of conflict, greed, and mental illness.',
      trackList: [
        'Speak to Me',
        'Breathe (In the Air)',
        'On the Run',
        'Time',
        'The Great Gig in the Sky',
        'Money',
        'Us and Them',
        'Any Colour You Like',
        'Brain Damage',
        'Eclipse'
      ]
    },

    // Pop Albums
    {
      id: 'silk-sonic',
      title: 'An Evening with Silk Sonic',
      artist: 'Silk Sonic',
      genre: 'pop',
      year: 2021,
      image: 'assets/silkSonic.jpg',
      description: 'Bruno Mars and Anderson .Paak\'s smooth R&B collaboration.',
      trackList: [
        'Silk Sonic Intro',
        'Leave the Door Open',
        'Fly as Me',
        'After Last Night (feat. Thundercat & Bootsy Collins)',
        'Smokin Out the Window',
        'Put On a Smile',
        '777',
        'Skate',
        'Blast Off'
      ]
    },

    // Soundtracks
    {
      id: 'stranger-things',
      title: 'Stranger Things Soundtrack',
      artist: 'Various Artists',
      genre: 'soundtracks',
      year: 2016,
      image: 'assets/soundTrackImages/strangerThings.jpg',
      description: 'The atmospheric soundtrack from the hit Netflix series.'
    },
    {
      id: 'top-gun-maverick',
      title: 'Top Gun: Maverick Soundtrack',
      artist: 'Various Artists',
      genre: 'soundtracks',
      year: 2022,
      image: 'assets/soundTrackImages/topGun.jpg',
      description: 'High-energy soundtrack from the blockbuster sequel.'
    },
    {
      id: 'guardians-galaxy',
      title: 'Guardians of the Galaxy Soundtrack',
      artist: 'Various Artists',
      genre: 'soundtracks',
      year: 2014,
      image: 'assets/soundTrackImages/GG1.jpg',
      description: 'Awesome mix of classic hits from the Marvel movie.'
    },

    // More Rap/Hip-Hop Albums
    {
      id: 'call-me',
      title: 'Call Me If You Get Lost',
      artist: 'Tyler, The Creator',
      genre: 'rap',
      year: 2021,
      image: 'assets/callMe.jpg',
      description: 'Tyler\'s Grammy-winning album showcasing his growth as an artist.',
      trackList: [
        'Sir Baudelaire',
        'Corso',
        'Lumberjack',
        'Hot Wind Blows (feat. Lil Wayne)',
        'Massa (feat. DMX)',
        'Lemonhead (feat. 42 Dugg)',
        'Wusyaname (feat. Ty Dolla $ign & YoungBoy Never Broke Again)',
        'Manifesto (feat. Domo Genesis)',
        'Sweet / I Thought You Wanted to Dance (feat. Brent Faiyaz & Fana Hues)',
        'Momma Talk',
        'Rise! (feat. Daisy World)',
        'Blessed',
        'Juggernaut (feat. Lil Uzi Vert & Pharrell Williams)',
        'Wilshire',
        'Safari'
      ]
    },
    {
      id: 'divine-feminine',
      title: 'The Divine Feminine',
      artist: 'Mac Miller',
      genre: 'rap',
      year: 2016,
      image: 'assets/divineFem.jpg',
      description: 'Mac Miller\'s exploration of love and relationships through music.'
    },
    {
      id: 'forever-story',
      title: 'The Forever Story',
      artist: 'JID',
      genre: 'rap',
      year: 2022,
      image: 'assets/foreverStory.jpg',
      description: 'JID\'s critically acclaimed album showcasing lyrical prowess.'
    },
    {
      id: 'heroes-villains',
      title: 'Heroes & Villains',
      artist: 'Metro Boomin',
      genre: 'rap',
      year: 2022,
      image: 'assets/herosandVils.jpg',
      description: 'Metro Boomin\'s sophomore album featuring top hip-hop artists.'
    },
    {
      id: 'kids-see-ghosts',
      title: 'Kids See Ghosts',
      artist: 'Kids See Ghosts',
      genre: 'rap',
      year: 2018,
      image: 'assets/kids.jpg',
      description: 'Kanye West and Kid Cudi\'s collaborative masterpiece.',
      trackList: [
        'Feel the Love (feat. Pusha T)',
        'Fire',
        '4th Dimension (feat. Louis Prima)',
        'Freeee (Ghost Town Pt. 2)',
        'Reborn',
        'Kids See Ghosts (feat. Yasiin Bey)',
        'Cudi Montage'
      ]
    },
    {
      id: 'tecca',
      title: 'Virgo World',
      artist: 'Lil Tecca',
      genre: 'rap',
      year: 2020,
      image: 'assets/tecca.jpg',
      description: 'Young rapper\'s debut showcasing melodic trap style.'
    },
    {
      id: 'xxx',
      title: '17',
      artist: 'XXXTentacion',
      genre: 'rap',
      year: 2017,
      image: 'assets/xxx.jpg',
      description: 'Emotional and introspective album from the late artist.'
    },

    // More Rock Albums
    {
      id: 'queen-greatest-hits',
      title: 'Greatest Hits',
      artist: 'Queen',
      genre: 'rock',
      year: 1981,
      image: 'assets/rockImages/queen.jpg',
      description: 'Queen\'s essential collection of their biggest hits.',
      trackList: [
        'Bohemian Rhapsody',
        'Another One Bites the Dust',
        'Killer Queen',
        'Fat Bottomed Girls',
        'Bicycle Race',
        'You\'re My Best Friend',
        'Don\'t Stop Me Now',
        'Save Me',
        'Crazy Little Thing Called Love',
        'Somebody to Love',
        'Now I\'m Here',
        'Good Old-Fashioned Lover Boy',
        'Play the Game',
        'Flash',
        'Seven Seas of Rhye',
        'We Will Rock You',
        'We Are the Champions'
      ]
    },
    {
      id: 'u2-joshua-tree',
      title: 'The Joshua Tree',
      artist: 'U2',
      genre: 'rock',
      year: 1987,
      image: 'assets/rockImages/u2.jpeg',
      description: 'U2\'s landmark album that brought them worldwide fame.',
      trackList: [
        'Where the Streets Have No Name',
        'I Still Haven\'t Found What I\'m Looking For',
        'With or Without You',
        'Bullet the Blue Sky',
        'Running to Stand Still',
        'Red Hill Mining Town',
        'In God\'s Country',
        'Trip Through Your Wires',
        'One Tree Hill',
        'Exit',
        'Mothers of the Disappeared'
      ]
    },
    {
      id: 'zz-top-eliminator',
      title: 'Eliminator',
      artist: 'ZZ Top',
      genre: 'rock',
      year: 1983,
      image: 'assets/rockImages/eliminator.jpeg',
      description: 'ZZ Top\'s synth-rock masterpiece featuring "Sharp Dressed Man".',
      trackList: [
        'Gimme All Your Lovin\'',
        'Got Me Under Pressure',
        'Sharp Dressed Man',
        'I Need You Tonight',
        'I Got the Six',
        'Legs',
        'Thug',
        'TV Dinners',
        'Dirty Dog',
        'If I Could Only Flag Her Down',
        'Bad Girl'
      ]
    },
    {
      id: 'police-synchronicity',
      title: 'Synchronicity',
      artist: 'The Police',
      genre: 'rock',
      year: 1983,
      image: 'assets/rockImages/thePolice.jpeg',
      description: 'The Police\'s final studio album featuring "Every Breath You Take".',
      trackList: [
        'Synchronicity I',
        'Walking in Your Footsteps',
        'O My God',
        'Mother',
        'Miss Gradenko',
        'Synchronicity II',
        'Every Breath You Take',
        'King of Pain',
        'Wrapped Around Your Finger',
        'Tea in the Sahara'
      ]
    },
    {
      id: 'van-halen-5150',
      title: '5150',
      artist: 'Van Halen',
      genre: 'rock',
      year: 1986,
      image: 'assets/rockImages/5150.jpg',
      description: 'Van Halen\'s first album with Sammy Hagar as lead vocalist.'
    },
    {
      id: 'sammy-hagar-solo',
      title: 'Standing Hampton',
      artist: 'Sammy Hagar',
      genre: 'rock',
      year: 1981,
      image: 'assets/rockImages/hagar.jpg',
      description: 'Sammy Hagar\'s solo work before joining Van Halen.'
    },
    {
      id: 'cars-heartbeat-city',
      title: 'Heartbeat City',
      artist: 'The Cars',
      genre: 'rock',
      year: 1984,
      image: 'assets/rockImages/cars.jpg',
      description: 'The Cars\' new wave masterpiece with synth-pop elements.'
    },
    {
      id: 'zz-top-greatest',
      title: 'ZZ Top\'s First Album',
      artist: 'ZZ Top',
      genre: 'rock',
      year: 1971,
      image: 'assets/rockImages/zzTop.jpg',
      description: 'The Texas trio\'s blues rock debut album.'
    },

    // More Soundtracks
    {
      id: 'guardians-galaxy-2',
      title: 'Guardians of the Galaxy Vol. 2 Soundtrack',
      artist: 'Various Artists',
      genre: 'soundtracks',
      year: 2017,
      image: 'assets/soundTrackImages/GG2.webp',
      description: 'Awesome Mix Vol. 2 from the Marvel sequel.'
    },
    {
      id: 'guardians-galaxy-3',
      title: 'Guardians of the Galaxy Vol. 3 Soundtrack',
      artist: 'Various Artists',
      genre: 'soundtracks',
      year: 2023,
      image: 'assets/soundTrackImages/GG3.jpg',
      description: 'The final installment of the Guardians soundtrack trilogy.'
    },
    {
      id: 'wakanda-forever',
      title: 'Black Panther: Wakanda Forever Soundtrack',
      artist: 'Various Artists',
      genre: 'soundtracks',
      year: 2022,
      image: 'assets/soundTrackImages/wakanda.webp',
      description: 'Powerful soundtrack honoring Chadwick Boseman\'s legacy.'
    }
  ];

  private genres: Genre[] = [
    {
      name: 'rap',
      displayName: 'Rap/Hip-Hop',
      description: 'Hip-hop and rap albums featuring conscious lyrics and innovative beats.'
    },
    {
      name: 'rock',
      displayName: 'Rock',
      description: 'Classic and alternative rock albums that defined generations.'
    },
    {
      name: 'soundtracks',
      displayName: 'Soundtracks',
      description: 'Movie and TV soundtracks that enhance storytelling through music.'
    },
    {
      name: 'pop',
      displayName: 'Pop',
      description: 'Popular music that resonates with mainstream audiences.'
    }
  ];

  constructor() { }

  getAllAlbums(): Observable<VinylAlbum[]> {
    return of(this.albums);
  }

  getAlbumsByGenre(genre: string): Observable<VinylAlbum[]> {
    const filteredAlbums = this.albums.filter(album => album.genre === genre);
    return of(filteredAlbums);
  }

  getAlbumById(id: string): Observable<VinylAlbum | undefined> {
    const album = this.albums.find(album => album.id === id);
    return of(album);
  }

  getAllGenres(): Observable<Genre[]> {
    return of(this.genres);
  }

  getGenre(name: string): Observable<Genre | undefined> {
    const genre = this.genres.find(g => g.name === name);
    return of(genre);
  }
}
