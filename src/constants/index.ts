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

interface ConsultationServicesType {
    id: number,
    service: string,
    information: string
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
        queryName : '/consultation?service=Media-Telecommunication'
    },
    {
        id : 2,
        service : 'Finance',
        queryName : '/consultation?service=Banks-And-Finances'
    },
    {
        id : 3,
        service : 'Nature',
        queryName : '/consultation?service=Environment-And-Labour-Laws'
    },
    {
        id : 4,
        service : 'Criminal Cases',
        queryName : '/consultation?service=White-Collar-Crimes'
    },
    {
        id : 5,
        service : 'Real-estate',
        queryName : '/consultation?service=Real-Estate'
    },
    {
        id : 6,
        service : 'Robbery',
        queryName : '/consultation?service=White-Collar-Crimes'
    }
];

const homeServicesMenu: HomeServiceType[] = [
    {
        id : 1,
        service : 'Real Estate',
        queryName : '/consultation?service=Real-Estate',
        icon : Icon1
    },
    {
        id : 2,
        service : 'Media & Telecomm. Laws',
        queryName : '/consultation?service=Media-Telecommunication',
        icon : Icon2
    },
    {
        id : 3,
        service : 'Banking & Finance',
        queryName : '/consultation?service=Banks-And-Finances',
        icon : Icon3
    },
    {
        id : 4,
        service : 'Cooperate Law',
        queryName : '/consultation?service=Cooperate-Law',
        icon : Icon4
    },
    {
        id : 5,
        service : 'Arbritration Law',
        queryName : '/consultation?service=Arbritation-Law',
        icon : Icon5
    },
    {
        id : 6,
        service : 'Intellectual & Property Law',
        queryName : '/consultation?service=Intellectual-And-Property-Laws',
        icon : Icon6
    },
    {
        id : 7,
        service : 'Insolvancy Law',
        queryName : '/consultation?service=Insolvancy-Law',
        icon : Icon7
    },
    {
        id : 8,
        service : 'Cooperate & Commercial Law',
        queryName : '/consultation?service=Cooperate-And-Commercial-Law',
        icon : Icon8
    },
    {
        id : 9,
        service : 'Environment & Labour Laws',
        queryName : '/consultation?service=Environment-And-Labour-Laws',
        icon : Icon9
    },
    {
        id : 10,
        service : 'Privacy & Data Protection',
        queryName : '/consultation?service=Data-Privacy',
        icon : Icon10
    },
    {
        id : 11,
        service : 'Environmental Laws',
        queryName : '/consultation?service=Environmental-Laws',
        icon : Icon11
    },
    {
        id : 12,
        service : 'White Collar Crimes',
        queryName : '/consultation?service=White-Collar-Crimes',
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