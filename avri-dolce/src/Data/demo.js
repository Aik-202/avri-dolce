import { cap, delivery, fbRed, hours, igRed, locate, locationRed, p1, p2, p3, p4, p5, p6, p7, p8, tikRed, wardrobe, whatRed } from "."

export const homeNav = ['Home', 'About', 'Products', 'Contact']
export const products = [
    {
        id: 1,
        tag: 'Custom T-shirt',
        price: '£30',
        img: p1
    },
    {
        id: 2,
        tag: 'Custom Trousers',
        price: '£30',
        img: p2
    },
    {
        id: 3,
        tag: 'Custom Sweat-shirt',
        price: '£30',
        img: p3
    },
    {
        id: 4,
        tag: 'Custom Shorts',
        price: '£30',
        img: p4
    },
    {
        id: 5,
        tag: 'Custom Hoodies',
        price: '£30',
        img: p5
    },
    {
        id: 6,
        tag: 'Senator',
        price: '£30',
        img: p6
    },
    {
        id: 7,
        tag: 'Custom Cap',
        price: '£30',
        img: cap
    },
    {
        id: 8,
        tag: 'Full Gym Clothes',
        price: '£30',
        img: p8
    },
]
export const collection = [
    {
        id: 2,
        tag: 'Bottoms',
        price: '£30',
        img: p2
    },
    {
        id: 3,
        tag: 'Shirts',
        price: '£30',
        img: p3
    },
    {
        id: 5,
        tag: 'Hoodies',
        price: '£30',
        img: p5
    },
    {
        id: 6,
        tag: 'African',
        price: '£30',
        img: p6
    },
    {
        id: 7,
        tag: 'Head wear',
        price: '£30',
        img: p7
    },
    {
        id: 8,
        tag: 'Gym Clothes',
        price: '£30',
        img: p8
    },
]
export const faqData = [
    {
        id: 1,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. '
    },
    {
        id: 2,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. '
    },
    {
        id: 3,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. '
    },
    {
        id: 4,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. '
    },
    {
        id: 5,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. '
    }
]

export const footer = [
    {
        head: 'General',
        list: ['About Us', 'Contact Us']
    },
    {
        head: 'Products',
        list: ['Men Fashion', 'Women Fashion', '']
    },
    {
        head: 'Customer Service',
        list: ['FAQ', 'Help & Support', 'Review']
    },
    {
        head: 'Social Media',
        list: ['Instagram', 'TikTok', 'Facebook']
    },
]

export const know = [
    {
        head: 'Opening Days/Hours',
        img: hours,
        text: 'Everyday | 24hours'
    },
    {
        head: 'Our Products',
        img: wardrobe,
        text: 'Shirt | Hoodies | Tousers | African Dresses | Gym Clothes '
    },
    {
        head: 'Delivery',
        img: delivery,
        text: 'Via Musone, 20, 65129 Pescara PE, Italy | Home Delivery'
    },
]

export const ratings = [
    {
        name: 'Alessandro Ciancia',
        comment: 'Pretty',
        rating: 5.0,
        date: '26/03/2024'
    }, 
    {
        name: 'Douglas',
        comment: '💯',
        rating: 5.0,
        date: '26/03/2024'
    },
    {
        name: 'Happy Udor',
        comment: 'Beautiful',
        rating: 5.0,
        date: '26/03/2024'
    },
    {
        name: 'Precious Osunde',
        comment: 'Very nice wears 💯',
        rating: 5.0,
        date: '26/03/2024'
    },
    {
        name: 'Simona Di Fulvio',
        comment: 'Very good, very competent',
        rating: 5.0,
        date: '26/03/2024'
    },
    {
        name: 'Samson Francis',
        comment: 'Top',
        rating: 5.0,
        date: '28/03/2024'
    },
    {
        name: 'TREASURE OJEBOR',
        comment: 'King of fashion',
        rating: 5.0,
        date: '28/03/2024'
    },
]

export const contacts = [
    {
        name: 'Via Musone, 20, 65129 Pescara PE, Italy',
        link: 'https://www.google.com/maps/place/Avri+Dolce/@42.4427153,14.2104569,15z/data=!4m6!3m5!1s0x1331a7b49d59f0c3:0x2fd1f2cc67160ed!8m2!3d42.4427153!4d14.2104569!16s%2Fg%2F11vwkp99r6?entry=ttu',
        img: locationRed
    },
    {
        name: '+39 375 532 7166',
        link: 'https://w.app/AvriDolce',
        img: whatRed
    },
    {
        name: 'facebook.com/winnie.frankwinnie',
        link: 'https://www.facebook.com/winnie.frankwinnie',
        img: fbRed
    },
    {
        name: 'instagram.com/avridolce',
        link: 'https://www.instagram.com/avridolce',
        img: igRed
    },
    {
        name: 'tiktok.com/@fcavridolce',
        link: 'https://www.tiktok.com/@fcavridolce',
        img: tikRed
    },
]

export const categories = ['T-Shirts', 'Sweat-Shirts', 'Hoodies',  'Bottoms', 'Head wear', 'African', 'Gym Clothes' ]