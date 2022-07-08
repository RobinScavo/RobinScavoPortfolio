export const projectData = {
    bpm: {
        title: 'Billings Property Management',
        description: 'My objective with this project was to take an existing website and duplicate it without looking at the codebase. Originally built with only HTML, CSS, and JS, I then refactored to incorporate EJS templating and built a backend with Express and Mongo. I improved on the design (IMO) by adding smooth-scrolling dropdown menus and custom forms. ',
        link: '/billings-property-management',
        url: 'https://billings-property-management.herokuapp.com/',
        githubUrl: 'https://github.com/RobinScavo/Property-Management',
        alt: 'billings property management photo',
        tech: ['EJS', 'CSS', 'JS', 'Node.JS', 'MongoDB', 'Mongoose', 'Express', 'Google Maps API']
    },

    oe: {
        title: 'Open Book',
        description: 'Open Book was inspired by the challenges faced by teachers during the Covid lockdown. Existing apps used by them for sharing resources were highly monetized (for example, on Boom Cards teachers were charged for the priviledge of publishing a resource which other teachers could then pay to use). I decided if anyone deserved a free-to-use open source application it was them. Open Book allows for the creation of resources which can published and used by others for free. Right now its limited to flash card decks on my favorite subject (web development) but it could be expanded to any subject with images, audio recordings, drag-and-drop etc.',
        link: '/open-book',
        url: '',
        githubUrl: 'https://github.com/RobinScavo/OpenBook',
        alt: 'open book photo',
        tech: ['React', 'React Router', 'React Testing Library', 'Redux', 'Redux Toolkit', 'MongoDB', 'Mongoose', 'Express', 'Node.js', 'JSON Web Tokens', 'Enzyme', 'SASS']
    },

    cc: {
        title: 'Color Crusher',
        description: "Color Crusher was my final project for App Academy and my objective was to build something that nobody had seen before. Users can convert color values from RGB to HSL or HEX and vice-versa. I then wrote algorithms to create a random RGB color value, convert it to HSL and then find its complement, split-complement and analogous friends. The balls are assigned these colors and a loop can be run.... creating a never ending display of random colors that match. I also wrote a custom hook that will delay the rendering of each ball which creates an interesting effect. In addition to the color conversions I also made a game where you can guess the RGB color values, score points and possibly join the leader board. The GitHub Read-Me is also worth a look as I used SVG to create something original.",
        link: '/color-crusher',
        url: 'https://colorcrusher.herokuapp.com//',
        githubUrl: 'https://github.com/RobinScavo/color--crusher',
        alt: 'color crusher photo',
        tech: ['React', 'React Context API', 'CSS', 'JS', 'SVG', 'Firebase']
    },

    port: {
        title: 'Portfolio Site',
        description: 'Simple single page application created with the create-react-app template. Different image sizes are rendered based on screen width using the srcSet attribute. Design credit to the talented Matthias Kretchmann.',
        link: '/portfolio',
        url: '',
        githubUrl: 'https://github.com/RobinScavo/robins-portfolio',
        alt: 'portfolio photo',
        tech: ['React', 'React Router', 'SASS', 'Netlify']
    }
}

// signature
const style = "font-size: 14px;" +
  "background: #67b26f;" +
  "background: -webkit-linear-gradient(to right,  rgb(87, 189, 227), rgba(42, 81, 109));" +
  "background: linear-gradient(to right,  rgb(87, 189, 227), rgba(42, 81, 109));" +
  "color: white;" +
  "text-align: center;" +
  "padding: 10px 15px;" +
  "width: 100%;" +
  "border-radius: 20px;";

const text = "%cEternity is in love with the creations of time.";

console.log(text, style);
