import about from './about_en.js';
import antiquity from './antiquity_en.js';
import medieval from './medieval_en.js';
import otoman from './otoman_en.js';
import wwStory1 from './world-wars/story1_en.js';
import wwStory2 from './world-wars/story2_en.js';
import wwStory3 from './world-wars/story3_en.js';
import ahStory1 from './austro-habsburg/story1_en.js';
import ahStory2 from './austro-habsburg/story2_en.js';

export const EN_TRANSLATIONS = {
  about: {
    'text-1': about.text['text-1'],
    'text-2': about.text['text-2'],
    'text-3': about.text['text-3'],
    financed: 'This project was financed by',
    cjt: 'Timiş County Council'
  },
  errors: {
    error404: 'Oops! Looks like you\'re lost!'
  },
  homePage: {
    greeting: 'The stories of Timişoara',
  },
  languageSelect: {
    text: 'See the website in',
  },
  antiquity: {
    title: 'Antichitate',
    intro: antiquity.text.intro,
    'text-1': antiquity.text['text-1'],
    'text-2': antiquity.text['text-2'],
    'text-3': antiquity.text['text-3'],
    'text-4': antiquity.text['text-4'],
    'text-5': antiquity.text['text-5'],
    'text-6': antiquity.text['text-6'],
    'text-7': antiquity.text['text-7'],
    'text-8': antiquity.text['text-8'],
    'text-9': antiquity.text['text-9'],
    'text-10': antiquity.text['text-10'],
    'text-11': antiquity.text['text-11'],
    'text-12': antiquity.text['text-12'],
    'image-1': 'Celtic warriors',
    'image-2': 'Reconstruction of the Iron Age village Hodde made by archaeologists Steen and Lone Hvass, Credit to: https://www.dandebat.dk/',
    'image-3': '',
    'image-4': 'Agriculture in the Iron Age, illustration by Julian Cross',
    'image-5': 'Ancient pottery oven, also known as a kiln, Credit to: https://www.paintedpots.com.au/potted-history/',
    'image-6': 'Ancient blacksmith, Credit to: https://irishfolklore.wordpress.com/'
  },
  ah: {
    title: 'Habsburgic and Austro-Hungarian Period',
    stories: {
      story1: {
        title: 'The Habsburg dynasty and Timişoara',
        intro: ahStory1.text.intro,
        'text-1': ahStory1.text['text-1'],
        'text-2': ahStory1.text['text-2'],
        'text-3': ahStory1.text['text-3'],
        'text-4': ahStory1.text['text-4'],
        'text-5': ahStory1.text['text-5'],
        'text-6': ahStory1.text['text-6'],
        'text-7': ahStory1.text['text-7'],
        'image-1': 'Maria Theresia, Holy Roman empress between 1740-1780',
        'image-1-source': 'Credit to: https://www.wikiwand.com/en/Maria_Theresa',
        'image-2': 'Polish Hussars fighting Ottomans in the battle of Vienna 1683',
        'image-3': 'Timişoara\'s start-shaped bastion (recostruction)',
        'image-3-source': 'http://art-historia.blogspot.com/2010/11/timisoara-austriaca.html'
      },
      story2: {
        title: 'The Golden Age of Timişoara',
        intro: ahStory2.text.intro,
        'text-1': ahStory2.text['text-1'],
        'text-2': ahStory2.text['text-2'],
        'text-3': ahStory2.text['text-3'],
        'text-4': ahStory2.text['text-4'],
        'text-5': ahStory2.text['text-5'],
        'text-6': ahStory2.text['text-6'],
        'text-7': ahStory2.text['text-7'],
        'text-8': ahStory2.text['text-8'],
        'text-9': ahStory2.text['text-9'],
        'image-1': 'The siege of Timişoara, 1716',
        'image-1-source': 'Credit to: Muzeul Banatului Timişoara',
        'image-2': 'The ottoman pasha surrendering to Eugene of Savoy',
        'image-3': 'A tailor\'s workshop in the 18th century',
        'image-3-source': 'A Diderot Pictorial Encyclopedia of Trades and Industry, Vol. 1'
      }
    }
  },
  medieval: {
    title: 'Middle Ages',
    intro: medieval.text.intro,
    otto: 'Otto of Bavaria',
    robert: 'Charles I of Hungary',
    'text-1': medieval.text['text-1'],
    'text-2': medieval.text['text-2'],
    'text-3': medieval.text['text-3'],
    'text-4': medieval.text['text-4'],
    'text-5': medieval.text['text-5'],
    'text-6': medieval.text['text-6'],
    'text-7': medieval.text['text-7'],
    'text-8': medieval.text['text-8'],
    'text-9': medieval.text['text-9'],
    'text-10': medieval.text['text-10'],
    'text-11': medieval.text['text-11'],
    'text-12': medieval.text['text-12'],
  },
  menu: {
    home: 'Home',
    about: 'About',
    photos: 'Photo gallery',
    contact: 'Contact'
  },
  otoman: {
    title: 'The Ottoman rule',
    intro: otoman.text.intro,
    'text-1': otoman.text['text-1'],
    'text-2': otoman.text['text-2'],
    'text-3': otoman.text['text-3'],
    'text-4': otoman.text['text-4'],
    'text-5': otoman.text['text-5'],
    'text-6': otoman.text['text-6'],
    'text-7': otoman.text['text-7'],
    'text-8': otoman.text['text-8'],
    'text-9': otoman.text['text-9'],
    'text-10': otoman.text['text-10'],
    'text-11': otoman.text['text-11'],
    'text-12': otoman.text['text-12'],
    'text-13': otoman.text['text-13'],
    'text-14': otoman.text['text-14'],
    'text-15': otoman.text['text-15'],
    'text-16': otoman.text['text-16'],
    'text-17': otoman.text['text-17'],
    'text-18': otoman.text['text-18'],
    'text-19': otoman.text['text-19'],
    'text-20': otoman.text['text-20'],
    'text-21': otoman.text['text-21'],
    'text-22': otoman.text['text-22'],
    'text-23': otoman.text['text-23']
  },
  periods: {
    prehistoric: 'Prehistoric Period',
    medieval: 'Middle Ages',
    otoman: 'Ottoman Period',
    habsburgic: 'Habsburgic and Austro-Hungarian Period',
    wars: 'World Wars Period',
    modern: 'Modern Times'
  },
  worldWars: {
    title: 'World Wars Period',
    stories: {
      story1: {
        title: 'Timişoara în primul război mondial',
        intro: wwStory1.text.intro,
        'text-1': wwStory1.text['text-1'],
        'text-2': wwStory1.text['text-2'],
        'text-3': wwStory1.text['text-3'],
        'text-4': wwStory1.text['text-4'],
        'text-5': wwStory1.text['text-5'],
        'text-6': wwStory1.text['text-6'],
        'text-7': wwStory1.text['text-7'],
        'text-8': wwStory1.text['text-8'],
        'text-9': wwStory1.text['text-9'],
        'text-10': wwStory1.text['text-10'],
        'text-11': wwStory1.text['text-11'],
        'text-12': wwStory1.text['text-12'],
        'text-13': wwStory1.text['text-13'],
        'text-14': wwStory1.text['text-14'],
        'text-15': wwStory1.text['text-15'],
        'text-16': wwStory1.text['text-16'],
        'text-17': wwStory1.text['text-17'],
        'text-18': wwStory1.text['text-18'],
        'text-19': wwStory1.text['text-19'] 
      },
      story2: {
        title: 'Perioada interbelică',
        intro: wwStory2.text.intro,
        'text-1': wwStory2.text['text-1'],
        'text-2': wwStory2.text['text-2'],
        'text-3': wwStory2.text['text-3'],
        'text-4': wwStory2.text['text-4'],
        'text-5': wwStory2.text['text-5'],
        'text-6': wwStory2.text['text-6'],
        'text-7': wwStory2.text['text-7'],
        'text-8': wwStory2.text['text-8'],
        'text-9': wwStory2.text['text-9'],
        'text-10': wwStory2.text['text-10'],
        'text-11': wwStory2.text['text-11'],
        'text-12': wwStory2.text['text-12'],
        'text-13': wwStory2.text['text-13'],
        'text-14': wwStory2.text['text-14'],
        'text-15': wwStory2.text['text-15'],
        'text-16': wwStory2.text['text-16'],
        'text-17': wwStory2.text['text-17'],
        'text-18': wwStory2.text['text-18'],
        'text-19': wwStory2.text['text-19']
      },
      story3: {
        title: 'Timişoara în al doilea război mondial',
        intro: wwStory3.text.intro,
        'text-1': wwStory3.text['text-1'],
        'text-2': wwStory3.text['text-2'],
        'text-3': wwStory3.text['text-3'],
        'text-4': wwStory3.text['text-4'],
        'text-5': wwStory3.text['text-5'],
        'text-6': wwStory3.text['text-6'],
        'text-7': wwStory3.text['text-7'],
        'text-8': wwStory3.text['text-8'],
        'text-9': wwStory3.text['text-9'],
        'text-10': wwStory3.text['text-10'],
        'text-11': wwStory3.text['text-11'],
        'text-12': wwStory3.text['text-12'],
        'text-13': wwStory3.text['text-13'],
        'text-14': wwStory3.text['text-14'],
        'text-15': wwStory3.text['text-15'],
        'text-16': wwStory3.text['text-16'],
        'text-17': wwStory3.text['text-17'],
        'text-18': wwStory3.text['text-18'],
        'text-19': wwStory3.text['text-19']
      }
    }
  },
};