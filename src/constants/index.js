import jsIcon from '../assets/jsIcon.png'
import cppIcon from '../assets/cppIcon.png'
import htmlIcon from '../assets/htmlIcon.png'
import cssIcon from '../assets/cssIcon.png'
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project3 from '../assets/Project3.png'
import Project4 from '../assets/Project4.png'
import { delay } from 'framer-motion'


export const TechStakeData=[
    {
        ImageTitle: 'javascript',
        ImageSrc: jsIcon,
        delay:0.8
    },
    {
        ImageTitle: 'c++',
        ImageSrc: cppIcon,
        delay:0.9
    },
    {
        ImageTitle: 'html',
        ImageSrc: htmlIcon,
        delay:1
    },
    {
        ImageTitle: 'css',
        ImageSrc: cssIcon,
        delay:1.1
    }
]

export const TechStakeData2=[
    {
        ImageTitle: 'c++',
        ImageSrc: cppIcon,
        delay:1.2
    },
    {
        ImageTitle: 'html',
        ImageSrc: htmlIcon,
        delay:1.3
    },
    {
        ImageTitle: 'css',
        ImageSrc: cssIcon,
        delay:1.4
    }
]


export const navItems = ['About','Tools','Experience','Projects']

export const NAV_TITLE = '<MKR/>'

export const projectData = [
    {
      image: Project1,
      title: 'Sixth Sense',
      sentences: [
        'Conceptual mobile application to assist visually impaired users with real-time object recognition.',
        'Implemented ML-based object detection models using TensorFlow and PyTorch with audio feedback for surroundings.',
        'Handled GPS integration for turn-by-turn navigation and optimized response time for real-time usage.',
        'Tested accuracy, and accessibility features to ensure usability in real-world environments.'
      ],
      link: "https://blogging-frontend-navy.vercel.app/"
    },
    {
      image: Project2,
      title: 'PUBG Game-Prediction',
      sentences: [
        'Developed a machine learning model to predict PUBG player rank based on gameplay statistics.',
        'Implemented data preprocessing and feature extraction on match data like kills, damage, and survival time.',
        'Handled data visualization using Matplotlib and Seaborn to explore trends and correlations.',
        'Deployed an interactive web interface allowing users to input match stats and receive rank predictions.'
      ],
      link: "https://github.com/Mritunjay021/ML-learning/blob/main/PUBG_Game_Prediction.ipynb"
    },
    {
      image: Project3,
      title: 'Titanic Survival',
      sentences: [
        'Built a classification model to predict passenger survival from Titanic dataset using ML algorithms.',
        'Implemented data cleaning, feature engineering, and applied models like Logistic Regression and Decision Tree.',
        'Handled exploratory data analysis and visualized survival trends across gender, age, and class.',
        'Evaluated model performance using accuracy scores and confusion matrix for result validation.'
      ],
      link: "https://github.com/Mritunjay021/ML-learning/blob/main/Titanic_Survival_EDA.ipynb"
    },
    {
      image: Project4,
      title: 'Car Rental Website',
      sentences: [
        'Created a responsive car rental site using HTML, CSS, and Bootstrap.',
        'Added components like navbar, featured cars, and contact section.',
        'Utilized Bootstrap grid and cards for clean layout and spacing.',
        'Hosted the frontend project on GitHub Pages with custom styling.'
      ],
      link: "https://gaurav-singh20.github.io/Car-Rental-Website/"
    }
];
  