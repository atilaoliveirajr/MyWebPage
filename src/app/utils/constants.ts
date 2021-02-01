export const labelsArray = [
    {
        'icon': 'emoji_people',
        'title': 'Personal background',
        'description': `I was born in Brazil, but right now I live in Germany. Portuguese is my mother language, I also can speak English and I am learning German (I LOVE this language!). I am married since 2019 and I have no children.`
    },
    {
        'icon': 'engineering',
        'title': 'Professional background',
        'description': 'As an engineer in an industrial company, I created better production process, managed new product and cost reduction projects, leading a team of 4 members.',
    },
    {
        'icon': 'follow_the_signs',
        'title': 'Next steps in my carreer',
        'description': 'I decided to get into to the programming field, because I think it is super fun to create new stuffs, I appreciate writing algorithyms and I am passionate about technologies. In the future I want to be a full stack developer.'
    },
    {
        'icon': 'sports_esports',
        'title': 'Hobbies',
        'description': `During my free time I play games in the computer, strategy and RPGs are my favorite, I also work out to keep fit. Whenever it is possible, I enjoy traveling with my wife to learn another language and also take nice photos.`
    }
];

export const skillsArray = [
    {
        'name': 'JavaScript',
        'level': '90'
    },
    {
        'name': 'Angular',
        'level': '90'
    },
    {
        'name': 'SCSS/HTML',
        'level': '90'
    },
    {
        'name': 'Git',
        'level': '60'
    },
    {
        'name': 'Java',
        'level': '50'
    },
    {
        'name': 'Springboot',
        'level': '40'
    },
    {
        'name': 'Databank',
        'level': '40'
    },
    {
        'name': 'Scrum',
        'level': '60'
    }
];

export const portfolioArray = [{
    'title': 'Ring of Fire',
    'subtitle': 'Best game for your parties!',
    'backGroundImage': 'ringoffire',
    'playNow': true,
    'p': `This game was built with Angular 11 for study purposes only. The following resources were applied: structural directives, dependency injection, components and bidings.
    After start a new game, share the link with a friend for a multiplayer experience.`,
    'git': 'https://github.com/atilaoliveirajr/ringoffire',
    'href': 'https://ring-of-fire-57564.web.app/',
    'angular': true,
    'javaScript': false
},
{
    'title': 'My Website',
    'subtitle': 'A nice way to learn Angular.',
    'backGroundImage': 'myphoto',
    'playNow': false,
    'p': `This entire site was built with Angular Material.
    Such components as: Sidenav, Button, Tooltip, Card, Expansion Panel, Icon, Tab and Toolbar.`,
    'git': 'https://github.com/atilaoliveirajr/sidenavAngular',
    'href': './',
    'angular': true,
    'javaScript': false
},
{
    'title': 'El Pollo Loco',
    'subtitle': 'Have 10min fun with this game!',
    'backGroundImage': 'elpolloloco',
    'playNow': true,
    'p': `This game was built with Canvas.`,
    'git': 'https://github.com/atilaoliveirajr/elPolloLoco',
    'href': './pjs/elpolloloco',
    'angular': false,
    'javaScript': true
},
{
    'title': 'Flappy Vogel',
    'subtitle': 'Almost as good as the original!',
    'backGroundImage': 'flappyVogel',
    'playNow': true,
    'p': `This game was built with JS OOP based.`,
    'git': 'https://github.com/atilaoliveirajr/flappyVogel',
    'href': './pjs/flappyBird/flappy.html',
    'angular': false,
    'javaScript': true
}
];

export const navDataArray = [
    {
        'icon': 'home',
        'page': 'Home',
        'routerLink': "./",
        'class': ""
    },
    {
        'icon': 'web',
        'page': 'Portfolio',
        'routerLink': "./portfolio",
        'class': ""
    },
    {
        'icon': 'person_search',
        'page': 'About me',
        'routerLink': "./aboutme",
        'class': ""
    },
    {
        'icon': 'person_add',
        'page': 'Contact me',
        'routerLink': "./imprint",
        'class': ""
    },
    {
        'icon': 'picture_as_pdf',
        'page': 'Resume',
        'routerLink': ".",
        'class': "lastChild"
    }

];

export const navIconArray = [
    {
        'icon': 'home',
        'page': 'Home',
        'routerLink': "./",
        'toolTip': "Home",
    },
    {
        'icon': 'web',
        'page': 'Portfolio',
        'routerLink': "./portfolio",
        'toolTip': "Portfolio",
    },
    {
        'icon': 'person_add',
        'page': 'Contact me',
        'routerLink': "./imprint",
        'toolTip': "Contact me",
    }
];

export const photoPlusQuote = [
    {
        'quote': `"As a web developer I want to build applications that will make people's life easier"`,
    },
    {
        'quote': `"I run listening to audiobooks, so that I can keep both mind and body fit."`,
    }
];