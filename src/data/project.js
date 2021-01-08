import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import music from '../assets/music-master.jpg';

const PROJECTS = [
    {
        id:1,
        title: 'Example React Application',
        description: 'A React App that I Built, involving JS and core web concepts',
        link: 'https://github.com/15Dkatz/example',
        image: project1
    },
    {
        id:2,
        title: 'My API',
        description: 'A Rest API that I built from scratch with GET and Post requests!',
        link: 'https://github.com/15Dkatz/example',
        image: project2
    },
    {
        id:3,
        title: 'Music Master Explorer',
        description: 'Search for Artist at the Spotify API',
        link: 'https://github.com/magabrielas/MusicExplorer',
        image: music
    },
];

export default PROJECTS;