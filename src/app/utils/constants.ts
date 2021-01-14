export const labelsArray = [
    {
        'icon': 'engineering',
        'title': 'My experience so far.',
        'description': 'As an engineer in an industrial company, I created better production process, managed new product and cost reduction projects, leading a team of 4 members.',
    },
    {
        'icon': 'important_devices',
        'title': 'A technology enthusiast.',
        'description': 'Being curious has always been a trait of my personality and a requirement for my job, and so I figured out that the most fascinating technologies are only possible due to programming.'
    },
    {
        'icon': 'airplanemode_active',
        'title': 'Resetting my carrier.',
        'description': 'Moving to Germany gave me the opportunity to start over my career, so I decided to do something that I really enjoy. A programmer.'
    },
    {
        'icon': 'favorite',
        'title': 'My dream.',
        'description': `Overcome the cultural's and languages's obstacle is not easy, but Steve Jobs already gave me an very good advice. "You are already naked, there is no reason not to follow your heart". That is what I will do.`
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
        'level': '50'
    }
    ,
    {
        'name': 'MySQL',
        'level': '40'
    }
];

export const portfolioArray = [{
    'title': 'Ring of Fire',
    'subtitle': 'Best game for your parties!',
    'backGroundImage': 'ringoffire',
    'playNow': true,
    'p': `This game was built with Angular 11 for study purposes only. The following resources were applied: structural directives, dependency injection, components and bidings.`,
    'git': 'https://github.com/atilaoliveirajr/ringoffire',
    'href': './portfolio/ringoffire',
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
    'href': '',
    'angular': true,
    'javaScript': false
},
{
    'title': 'El Pollo Loco',
    'subtitle': 'Have 10min fun with this game!',
    'backGroundImage': 'elpolloloco',
    'playNow': true,
    'p': `This game was built with Canvas.
    Github: XXXXX`,
    'git': '',
    'href': './portfolio/elpolloloco',
    'angular': false,
    'javaScript': true
},
{
    'title': 'Flappy Vogel',
    'subtitle': 'Almost as good as the original!',
    'backGroundImage': 'flappyVogel',
    'playNow': true,
    'p': `This game was built with JS OOP based.
    Github: XXXXX`,
    'git': '',
    'href': './portfolio/flappyvogel',
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