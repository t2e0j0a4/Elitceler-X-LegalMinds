import Icon1 from "../assets/Realestate.svg";
import Icon2 from "../assets/Media.svg";
import Icon3 from "../assets/Banking.svg";
import Icon4 from "../assets/Cooperate.svg";
import Icon5 from "../assets/Abritritation.svg";
import Icon6 from "../assets/Intellectual.svg";
import Icon7 from "../assets/Insolvancy.svg";
import Icon8 from "../assets/Commercial.svg";
import Icon9 from "../assets/Environment.svg";
// import Icon10 from "../assets/Privacy.svg";
import Icon11 from "../assets/EnvironmentalLaws.svg";
import Icon12 from "../assets/WhiteCollar.svg";

import Potrait from "../assets/Potrait.svg";

interface HomeSearchesType {
    id: number,
    service: string,
    // queryName: string
}

interface HomeServiceType {
    id: number,
    service: string,
    icon: string
    // queryName: string,
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
    role: string,
    review: string,
    quoteColor: string
}

interface ConsultationServicesType {
    id: number,
    service: string,
    information: string
}


interface HomeTeamType {
    id: number,
    image: string,
    name: string,
    links: string[]
}

const homeShowSeaches: HomeSearchesType[] = [
    {
        id : 1,
        service : 'Civil Cases',
        // queryName : '/consultation?service=Media-Telecommunication'
    },
    {
        id : 2,
        service : 'Finances',
        // queryName : '/consultation?service=Banks-And-Finances'
    },
    {
        id : 3,
        service : 'Nature & Envrionment',
        // queryName : '/consultation?service=Environment-And-Labour-Laws'
    },
    {
        id : 4,
        service : 'Criminal Cases',
        // queryName : '/consultation?service=White-Collar-Crimes'
    },
    {
        id : 5,
        service : 'Real Estate',
        // queryName : '/consultation?service=Real-Estate'
    },
    {
        id : 6,
        service : 'Robbery',
        // queryName : '/consultation?service=White-Collar-Crimes'
    }
];

const homeServicesMenu: HomeServiceType[] = [
    {
        id : 1,
        service : 'Criminal Law',
        icon : Icon12,
        // queryName : '/consultation?service=Real-Estate',
        // Icon12
    },
    {
        id : 2,
        service : 'Civil Law',
        icon : Icon4,
        // queryName : '/consultation?service=Media-Telecommunication',
        // Icon4
    },
    {
        id : 3,
        service : 'Real Estate Law',
        icon : Icon1,
        // queryName : '/consultation?service=Banks-And-Finances',
        // Icon1
    },
    {
        id : 4,
        service : 'Labour Law',
        icon : Icon9,
        // queryName : '/consultation?service=Cooperate-Law',
        // Icon9
    },
    {
        id : 5,
        service : 'Banking Law',
        icon : Icon3,
        // queryName : '/consultation?service=White-Collar-Crimes',
        // Icon3
    },
    {
        id : 6,
        service : 'Arbritration Law',
        icon : Icon6,
        // queryName : '/consultation?service=Arbritation-Law',
        // Icon6
    },
    {
        id : 7,
        service : 'DRT & NCLT Law',
        icon : Icon7,
        // queryName : '/consultation?service=Intellectual-And-Property-Laws',
        // Icon7
    },
    {
        id : 8,
        service : 'Immigration Law',
        icon : Icon5,
        // queryName : '/consultation?service=Insolvancy-Law',
        // Icon5
    },
    {
        id : 9,
        service : 'Media & Telecom Law',
        icon : Icon2,
        // queryName : '/consultation?service=Cooperate-And-Commercial-Law',
        // Icon2
    },
    {
        id : 10,
        service : 'Consumer Law',
        icon : Icon8,
        // queryName : '/consultation?service=Environment-And-Labour-Laws',
        // Icon8
    },
    {
        id : 11,
        service : 'Family Law',
        icon : Icon11,
        // queryName : '/consultation?service=Data-Privacy',
        // Icon11
    },
    {
        id : 12,
        service : 'Bankrupcty Laws',
        icon : Icon3,
        // queryName : '/consultation?service=Environmental-Laws',
        // Icon3
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
        role : 'Designation',
        image : Potrait,
        review : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor.',
        quoteColor : '#A7CA96'
    },
    {
        id : 2,
        name : 'John Doe',
        role : 'Designation',
        image : Potrait,
        review : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor.',
        quoteColor : '#D7ADDB'
    },
    {
        id : 3,
        name : 'John Doe',
        role : 'Designation',
        image : Potrait,
        review : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor. ',
        quoteColor : '#A7CA96'
    },
    {
        id : 4,
        name : 'John Doe',
        role : 'Designation',
        image : Potrait,
        review : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor.',
        quoteColor : '#D7ADDB'
    },
    {
        id : 5,
        name : 'John Doe',
        role : 'Designation',
        image : Potrait,
        review : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor.',
        quoteColor : '#A7CA96'
    },
    {
        id : 6,
        name : 'John Doe',
        role : 'Designation',
        image : Potrait,
        review : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor.',
        quoteColor : '#D7ADDB'
    },
    
]

const homeTeam: HomeTeamType[] = [
    {
        id : 1,
        name : 'John Doe',
        image : Potrait,
        links : ['', '', '']
    }
]

const consultationServices: ConsultationServicesType[] = [
    {
        id : 1,
        service : 'Real Estate',
        information : 'Real estate Veniam hic eveniet facilis modi! Cum, dolorem. Modi, aliquam reiciendis nisi vero perferendis voluptates illum, vel eaque aspernatur officia architecto dolorem? Porro perspiciatis exercitationem, hic dicta inventore sint.'
    },
    {
        id : 2,
        service : 'Media Telecommunication',
        information : 'Media Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic eveniet facilis modi! Cum, dolorem. Modi, aliquam reiciendis nisi vero perferendis voluptates illum, vel eaque aspernatur officia architecto dolorem? Porro perspiciatis exercitationem, hic dicta inventore sint.'
    },
    {
        id : 3,
        service : 'Banks And Finances',
        information : 'Banks Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic eveniet facilis modi! Cum, dolorem. Modi, aliquam reiciendis nisi vero perferendis voluptates illum, vel eaque aspernatur officia architecto dolorem? Porro perspiciatis exercitationem, hic dicta inventore sint.'
    },
    {
        id : 4,
        service : 'Cooperate Law',
        information : 'Cooperate Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic eveniet facilis modi! Cum, dolorem. Modi, aliquam reiciendis nisi vero perferendis voluptates illum, vel eaque aspernatur officia architecto dolorem? Porro perspiciatis exercitationem, hic dicta inventore sint.'
    },
    {
        id : 5,
        service : 'Arbritation Law',
        information : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic eveniet facilis modi! Cum, dolorem. Modi, aliquam reiciendis nisi vero perferendis voluptates illum, vel eaque aspernatur officia architecto dolorem? Porro perspiciatis exercitationem, hic dicta inventore sint.'
    },
    {
        id : 6,
        service : 'Intellectual And Property Laws',
        information : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic eveniet facilis modi! Cum, dolorem. Modi, aliquam reiciendis nisi vero perferendis voluptates illum, vel eaque aspernatur officia architecto dolorem? Porro perspiciatis exercitationem, hic dicta inventore sint.'
    },
    {
        id : 7,
        service : 'Insolvancy Law',
        information : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic eveniet facilis modi! Cum, dolorem. Modi, aliquam reiciendis nisi vero perferendis voluptates illum, vel eaque aspernatur officia architecto dolorem? Porro perspiciatis exercitationem, hic dicta inventore sint.'
    },
    {
        id : 8,
        service : 'Cooperate And Commercial-Law',
        information : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic eveniet facilis modi! Cum, dolorem. Modi, aliquam reiciendis nisi vero perferendis voluptates illum, vel eaque aspernatur officia architecto dolorem? Porro perspiciatis exercitationem, hic dicta inventore sint.'
    },
    {
        id : 9,
        service : 'Environment And Labour Laws',
        information : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic eveniet facilis modi! Cum, dolorem. Modi, aliquam reiciendis nisi vero perferendis voluptates illum, vel eaque aspernatur officia architecto dolorem? Porro perspiciatis exercitationem, hic dicta inventore sint.'
    },
    {
        id : 10,
        service : 'Data Privacy',
        information : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic eveniet facilis modi! Cum, dolorem. Modi, aliquam reiciendis nisi vero perferendis voluptates illum, vel eaque aspernatur officia architecto dolorem? Porro perspiciatis exercitationem, hic dicta inventore sint.'
    },
    {
        id : 11,
        service : 'Environmental Laws',
        information : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic eveniet facilis modi! Cum, dolorem. Modi, aliquam reiciendis nisi vero perferendis voluptates illum, vel eaque aspernatur officia architecto dolorem? Porro perspiciatis exercitationem, hic dicta inventore sint.'
    },
    {
        id : 12,
        service : 'White Collar Crimes',
        information : 'White collar Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic eveniet facilis modi! Cum, dolorem. Modi, aliquam reiciendis nisi vero perferendis voluptates illum, vel eaque aspernatur officia architecto dolorem? Porro perspiciatis exercitationem, hic dicta inventore sint.'
    },
]

export { homeShowSeaches, homeServicesMenu, homeFAQ, homeTestimonials, homeTeam, consultationServices }