import Icon1 from "../assets/Realestate.svg";
import Icon2 from "../assets/Media.svg";
import Icon3 from "../assets/Banking.svg";
import Icon4 from "../assets/Cooperate.svg";
import Icon5 from "../assets/Abritritation.svg";
import Icon6 from "../assets/Intellectual.svg";
import Icon7 from "../assets/Insolvancy.svg";
import Icon8 from "../assets/Commercial.svg";
import Icon9 from "../assets/Environment.svg";
import Icon11 from "../assets/EnvironmentalLaws.svg";
import Icon12 from "../assets/WhiteCollar.svg";

import founderImg from "../assets/Srishailam.png";

interface HomeSearchesType {
    id: number,
    service: string,
    queryName: string
}

interface HomeServiceType {
    id: number,
    service: string,
    icon: string
    queryName: string,
}

interface HomeFAQType {
    id: number,
    query: string,
    answer: string
}

// interface HomeTestimonialsType {
//     id: number,
//     image: string,
//     name: string,
//     role: string,
//     review: string,
//     quoteColor: string
// }

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
        queryName : '/consultation?service=Civil-Law'
    },
    {
        id : 2,
        service : 'Finances',
        queryName : '/consultation?service=Banking-Law'
    },
    {
        id : 3,
        service : 'Nature & Envrionment',
        queryName : '/consultation?service=Labour-Law'
    },
    {
        id : 4,
        service : 'Criminal Cases',
        queryName : '/consultation?service=Criminal-Law'
    },
    {
        id : 5,
        service : 'Real Estate',
        queryName : '/consultation?service=Real-Estate-Law'
    },
    {
        id : 6,
        service : 'Robbery',
        queryName : '/consultation?service=Criminal-Law'
    }
];

const homeServicesMenu: HomeServiceType[] = [
    {
        id : 1,
        service : 'Criminal Law',
        icon : Icon12,
        queryName : '/consultation?service=Criminal-Law',
    },
    {
        id : 2,
        service : 'Civil Law',
        icon : Icon4,
        queryName : '/consultation?service=Civil-Law',
    },
    {
        id : 3,
        service : 'Real Estate Law',
        icon : Icon1,
        queryName : '/consultation?service=Real-Estate-Law',
    },
    {
        id : 4,
        service : 'Labour Law',
        icon : Icon9,
        queryName : '/consultation?service=Labour-Law',
    },
    {
        id : 5,
        service : 'Banking Law',
        icon : Icon3,
        queryName : '/consultation?service=Banking-Law',
    },
    {
        id : 6,
        service : 'Arbitration Law',
        icon : Icon6,
        queryName : '/consultation?service=Arbitration-Law',
    },
    {
        id : 7,
        service : 'DRT & NCLT Law',
        icon : Icon7,
        queryName : '/consultation?service=DRT-NCLT-Law',
    },
    {
        id : 8,
        service : 'Immigration Law',
        icon : Icon5,
        queryName : '/consultation?service=Immigration-Law',
    },
    {
        id : 9,
        service : 'Media & Telecom Law',
        icon : Icon2,
        queryName : '/consultation?service=Media-Telcommunication-Law',
    },
    {
        id : 10,
        service : 'Consumer Law',
        icon : Icon8,
        queryName : '/consultation?service=Consumer-Law',
    },
    {
        id : 11,
        service : 'Family Law',
        icon : Icon11,
        queryName : '/consultation?service=Family-Law',
    },
    {
        id : 12,
        service : 'Bankrupcty Laws',
        icon : Icon3,
        queryName : '/consultation?service=Bankrupcty-Law',
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

// const homeTestimonials: HomeTestimonialsType[] = [
//     {
//         id : 1,
//         name : 'John Doe',
//         role : 'Designation',
//         image : Potrait,
//         review : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor.',
//         quoteColor : '#A7CA96'
//     },
//     {
//         id : 2,
//         name : 'John Doe',
//         role : 'Designation',
//         image : Potrait,
//         review : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor.',
//         quoteColor : '#D7ADDB'
//     },
//     {
//         id : 3,
//         name : 'John Doe',
//         role : 'Designation',
//         image : Potrait,
//         review : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor. ',
//         quoteColor : '#A7CA96'
//     },
//     {
//         id : 4,
//         name : 'John Doe',
//         role : 'Designation',
//         image : Potrait,
//         review : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor.',
//         quoteColor : '#D7ADDB'
//     },
//     {
//         id : 5,
//         name : 'John Doe',
//         role : 'Designation',
//         image : Potrait,
//         review : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor.',
//         quoteColor : '#A7CA96'
//     },
//     {
//         id : 6,
//         name : 'John Doe',
//         role : 'Designation',
//         image : Potrait,
//         review : 'Lorum Ipsum dolor sit amer Lorum Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor sit amer Lorem Ipsum dolor.',
//         quoteColor : '#D7ADDB'
//     },
    
// ]

const homeTeam: HomeTeamType[] = [
    {
        id : 1,
        name : 'Silveri Srishailam',
        image : founderImg,
        links : ['', '', 'indianlegalminds@gmail.com']
    }
]

const consultationServices: ConsultationServicesType[] = [
    {
        id : 1,
        service : 'Real Estate Law',
        information : 'At Legal Minds, we are experts in Indian land laws, offering seamless solutions throughout the real estate asset lifecycle. We provide counsel on title due diligence, transactions, construction contracts, and more, serving landowners, developers, and investors with a deep understanding of local regulatory issues.'
    },
    {
        id : 2,
        service : 'Media & Telecom Law',
        information : 'Our founder, Mr. Silveri Srishailam, is well-connected in the media world, making us your go-to advisors for regulatory, policy, and compliance matters. We handle everything from broadcasting contracts to telecom policy issues, representing clients before regulatory bodies and the Supreme Court.'
    },
    {
        id : 3,
        service : 'Banking Law',
        information : 'With diverse expertise and experience, our team offers innovative and compliant financing solutions. We understand the intricacies of Indian banking and financial regulations and can provide practical advice backed by a deep understanding of the sector.'
    },
    {
        id : 4,
        service : 'Arbitration Law',
        information : 'Our dispute resolution team handles litigation, arbitration, and pre-dispute advisory services. We represent clients across various forums, offering strategic guidance on arbitration, litigation, and international matters involving Indian laws.'
    },
    {
        id : 5,
        service : 'Criminal Law',
        information : 'Our team is well-versed in criminal investigations and proceedings related to white-collar crime. We offer expert guidance on anti-bribery laws, data privacy, and corporate compliance, both in the preventative and prosecution stages.'
    },
    
]

export { homeShowSeaches, homeServicesMenu, homeFAQ, homeTeam, consultationServices }