import Icon1 from "../assets/Realestate.svg";
import Icon2 from "../assets/Media.svg";
import Icon3 from "../assets/Banking.svg";
import Icon4 from "../assets/Cooperate.svg";
import Icon5 from "../assets/Abritritation.svg";
import Icon6 from "../assets/Intellectual.svg";
import Icon7 from "../assets/Insolvancy.svg";
import Icon8 from "../assets/Commercial.svg";
import Icon9 from "../assets/Environment.svg";
import Icon10 from "../assets/Privacy.svg";
import Icon11 from "../assets/EnvironmentalLaws.svg";
import Icon12 from "../assets/WhiteCollar.svg";

import Potrait from "../assets/Potrait.svg";

interface HomeSearchesType {
    id: number,
    service: string,
    queryName: string
}

interface HomeServiceType {
    id: number,
    service: string,
    queryName: string,
    icon: string
}

interface HomeFAQType {
    id: number,
    query: string,
    answer: string
}

interface HomeTestimonialsType {
    id: number,
    image: string,
    name: string,
    review: string,
    quoteColor: string
}

interface HomeTeamType {
    id: number,
    image: string,
    name: string,
    role: string
}

const homeShowSeaches: HomeSearchesType[] = [
    {
        id : 1,
        service : 'Telecommunication',
        queryName : 'Media-Telecommunication'
    },
    {
        id : 2,
        service : 'Finance',
        queryName : 'Banks-And-Finances'
    },
    {
        id : 3,
        service : 'Nature',
        queryName : 'Environment-And-Labour-Laws'
    },
    {
        id : 4,
        service : 'Criminal Cases',
        queryName : 'White-Collar-Crimes'
    },
    {
        id : 5,
        service : 'Real-estate',
        queryName : 'Real-Estate'
    },
    {
        id : 6,
        service : 'Robbery',
        queryName : 'White-Collar-Crimes'
    }
];

const homeServicesMenu: HomeServiceType[] = [
    {
        id : 1,
        service : 'Real Estate',
        queryName : 'Real-Estate',
        icon : Icon1
    },
    {
        id : 2,
        service : 'Media & Telecomm. Laws',
        queryName : 'Media-Telecommunication',
        icon : Icon2
    },
    {
        id : 3,
        service : 'Banking & Finance',
        queryName : 'Banking-And-Finance',
        icon : Icon3
    },
    {
        id : 4,
        service : 'Cooperate Law',
        queryName : 'Cooperate-Law',
        icon : Icon4
    },
    {
        id : 5,
        service : 'Arbritration Law',
        queryName : 'Arbritation-Law',
        icon : Icon5
    },
    {
        id : 6,
        service : 'Intellectual & Property Law',
        queryName : 'Intellectual-And-Property-Laws',
        icon : Icon6
    },
    {
        id : 7,
        service : 'Insolvancy Law',
        queryName : 'Insolvancy-Law',
        icon : Icon7
    },
    {
        id : 8,
        service : 'Cooperate & Commercial Law',
        queryName : 'Cooperate-And-Commercial-Law',
        icon : Icon8
    },
    {
        id : 9,
        service : 'Environment & Labour Laws',
        queryName : 'Environment-And-Labour-Laws',
        icon : Icon9
    },
    {
        id : 10,
        service : 'Privacy & Data Protection',
        queryName : 'Data-Privacy',
        icon : Icon10
    },
    {
        id : 11,
        service : 'Environmental Laws',
        queryName : 'Environmental-Laws',
        icon : Icon11
    },
    {
        id : 12,
        service : 'White Collar Crimes',
        queryName : 'White-Collar-Crimes',
        icon : Icon12
    },
    
]

const homeFAQ: HomeFAQType[] = [
    {
        id : 1,
        query : 'Lorum Ipsum dolor sit amet ?',
        answer : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer' 
    },
    {
        id : 2,
        query : 'Lorum Ipsum dolor sit amet ?',
        answer : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer' 
    },
    {
        id : 3,
        query : 'Lorum Ipsum dolor sit amet ?',
        answer : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer' 
    },
]

const homeTestimonials: HomeTestimonialsType[] = [
    {
        id : 1,
        name : 'John Doe',
        image : Potrait,
        review : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor.',
        quoteColor : '#A7CA96'
    },
    {
        id : 2,
        name : 'John Doe',
        image : Potrait,
        review : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor.',
        quoteColor : '#D7ADDB'
    },
    {
        id : 3,
        name : 'John Doe',
        image : Potrait,
        review : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor. ',
        quoteColor : '#A7CA96'
    },
    {
        id : 4,
        name : 'John Doe',
        image : Potrait,
        review : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor.',
        quoteColor : '#D7ADDB'
    },
    {
        id : 5,
        name : 'John Doe',
        image : Potrait,
        review : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor.',
        quoteColor : '#A7CA96'
    },
    {
        id : 6,
        name : 'John Doe',
        image : Potrait,
        review : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor.',
        quoteColor : '#D7ADDB'
    },
    
]

const homeTeam: HomeTeamType[] = [
    {
        id : 1,
        name : 'John Doe',
        role : 'Founder',
        image : Potrait
    },
    {
        id : 2,
        name : 'John Doe',
        role : 'Senior Attorney',
        image : Potrait
    },
    {
        id : 3,
        name : 'John Doe',
        role : 'JUnior Attorney',
        image : Potrait
    },
    {
        id : 4,
        name : 'John Doe',
        role : 'Financial Attorney',
        image : Potrait
    },
    
]

export { homeShowSeaches, homeServicesMenu, homeFAQ, homeTestimonials, homeTeam }