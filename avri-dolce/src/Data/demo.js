import { cap, delivery, fbRed, hours, igRed, locate, locationRed, ma1, ma10, ma11, ma12, ma13, ma14, ma15, ma16, ma17, ma18, ma19, ma2, ma20, ma21, ma22, ma3, ma4, ma5, 
    ma6, ma7, ma8, ma9, mb1, mb2, mb3, mb4, mc1, mc2, mc3, mc4, mc5, mg1, mg2, mg3, mg4, mg5, mg6, mg7, mg8, 
    mg9, mh1, mh2, mh3, mh4, ms1, ms2, ms3, ms4, mss1, mss2, mss3, mss4, mt1, mt2, mt3, mt4, mt5, 
    mt6, p1, p2, p3, p4, p5, p6, p7, p8, tikRed, wa1, wa2, wa3, wa4, wa5, wardrobe, wb1, wb2, wb3, wb4, wb5, wb6, wc1, wc2, wc3, wc4, wc5, wg1, wg2, wg3, wg4, wg5, wg6, wg7, wg8, wh1, wh2, wh3, wh4, wh5, whatRed, ws1, ws2, ws3, ws4, ws5, ws6, wss1, wss2, wss3, wss4, wss5, wt1, wt2, wt3, wt4, wt5 } from "."

export const homeNav = ['Home', 'About', 'Products', 'Contact']
export const products = [
    {
        id: 1,
        tag: 'Custom T-shirt',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: '€30',
        img: mt2
    },
    {
        id: 2,
        tag: 'Custom Bottoms',
        price: '€30',
        des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
        img: p2
    },
    {
        id: 3,
        tag: 'Custom Sweat-shirt',
        price: '€30',
        des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
        img: p3
    },
    {
        id: 4,
        tag: 'Custom Shorts',
        price: '€30',
        des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
        img: p4
    },
    {
        id: 5,
        tag: 'Custom Hoodies',
        price: '€30',
        des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
        img: p5
    },
    {
        id: 6,
        tag: 'African',
        price: '€30',
        des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
        img: p6
    },
    {
        id: 7,
        tag: 'Custom Cap',
        price: '€30',
        des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
        img: cap
    },
    {
        id: 8,
        tag: 'Gym Clothes',
        price: '€30',
        des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
        img: p8
    },
]
export const collection = [
    {
        id: 1,
        tag: 'T-shirts',
        price: '€30',
        img: mt2
    },
    {
        id: 2,
        tag: 'Bottoms',
        price: '€30',
        img: p2
    },
    {
        id: 3,
        tag: 'Sweat-shirts',
        price: '€30',
        img: p3
    },
    {
        id: 4,
        tag: 'Head wear',
        price: '€30',
        img: p7
    },
    {
        id: 5,
        tag: 'Hoodies',
        price: '€30',
        img: p5
    },
    {
        id: 6,
        tag: 'African',
        price: '€30',
        img: p6
    },
    {
        id: 7,
        tag: 'Gym Clothes',
        price: '€30',
        img: p8
    },
    {
        id: 8,
        tag: 'Shorts',
        price: '€30',
        img: p4
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

export const categories = ['T-shirts', 'Sweat-shirts', 'Shorts', 'Hoodies',  'Bottoms', 'Head wear', 'African', 'Gym Clothes' ]

export const men = [
    {
        name: 'T-shirts',
        product: [
            {
                id: 1,
                tag: 'T-shirt (Sample 1)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: '€30',
                img: mt1
            },
            {
                id: 2,
                tag: 'T-shirt (Sample 2)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: '€30',
                img: mt2
            },
            {
                id: 3,
                tag: 'T-shirt (Sample 3)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: '€30',
                img: mt3
            },
            {
                id: 4,
                tag: 'T-shirt (Sample 4)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: '€30',
                img: mt4
            },
            {
                id: 5,
                tag: 'T-shirt (Sample 5)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: '€30',
                img: mt5
            },
            {
                id: 6,
                tag: 'T-shirt (Sample 6)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: '€30',
                img: mt6
            },
        ]
    },
    {
        name: 'Sweat-shirts',
        product: [
            {
                id: 1,
                tag: 'Sweat-shirt (Sample 1)',
                price: '€30',
                des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
                img: mss1
            },
            {
                id: 2,
                tag: 'Sweat-shirt (Sample 2)',
                price: '€30',
                des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
                img: mss2
            },
            {
                id: 3,
                tag: 'Sweat-shirt (Sample 3)',
                price: '€30',
                des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
                img: mss3
            },
            {
                id: 4,
                tag: 'Sweat-shirt (Sample 4)',
                price: '€30',
                des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
                img: mss4
            },
            {
                id: 5,
                tag: 'Sweat-shirt (Sample 5)',
                price: '€30',
                des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
                img: p3
            },
        ]
    },
    {
        name: 'Shorts',
        product: [
            {
                id: 1,
                tag: 'Shorts (Sample 1)',
                price: '€30',
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ms1
            },
            {
                id: 2,
                tag: 'Shorts (Sample 2)',
                price: '€30',
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ms2
            },
            {
                id: 3,
                tag: 'Shorts (Sample 3)',
                price: '€30',
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ms3
            },
            {
                id: 4,
                tag: 'Shorts (Sample 4)',
                price: '€30',
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ms4
            },
            {
                id: 5,
                tag: 'Shorts (Sample 5)',
                price: '€30',
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: p4
            },
        ]
    },
    {
        name: 'Hoodies',
        product: [
            {
                id: 1,
                tag: 'Hoodies (Sample 1)',
                price: '€30',
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                img: mh1
            },
            {
                id: 2,
                tag: 'Hoodies (Sample 2)',
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                price: '€30',
                img: mh2
            },
            {
                id: 3,
                tag: 'Hoodies (Sample 3)',
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                price: '€30',
                img: mh3
            },
            {
                id: 4,
                tag: 'Hoodies (Sample 4)',
                price: '€30',
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                img: mh4
            },
            {
                id: 5,
                tag: 'Hoodies (Sample 5)',
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                price: '€30',
                img: p5
            },
        ]
    },
    {
        name: 'Bottoms',
        product: [
            {
                id: 1,
                tag: 'Bottoms (Sample 1)',
                price: '€30',
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: mb1
            },
            {
                id: 2,
                tag: 'Bottoms (Sample 2)',
                price: '€30',
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: mb2
            },
            {
                id: 3,
                tag: 'Bottoms (Sample 3)',
                price: '€30',
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: mb3
            },
            {
                id: 4,
                tag: 'Bottoms (Sample 4)',
                price: '€30',
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: mb4
            },
            {
                id: 5,
                tag: 'Bottoms (Sample 5)',
                price: '€30',
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: p2
            },
        ]
    },
    {
        name: 'Head wear',
        product: [
            {
                id: 1,
                tag: 'Head wear (Sample 1)',
                price: '€30',
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: mc1
            },
            {
                id: 2,
                tag: 'Head wear (Sample 2)',
                price: '€30',
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: mc2
            },
            {
                id: 3,
                tag: 'Head wear (Sample 3)',
                price: '€30',
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: mc3
            },
            {
                id: 4,
                tag: 'Head wear (Sample 4)',
                price: '€30',
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: mc4
            },
            {
                id: 5,
                tag: 'Head wear (Sample 5)',
                price: '€30',
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: mc5
            },
            {
                id: 6,
                tag: 'Head wear (Sample 6)',
                price: '€30',
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: cap
            },
        ]
    },
    {
        name: 'African',
        product: [
            {
                id: 1,
                tag: 'African (Sample 1)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma1
            },
            {
                id: 2,
                tag: 'African (Sample 2)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma2
            },
            {
                id: 3,
                tag: 'African (Sample 3)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma3
            },
            {
                id: 4,
                tag: 'African (Sample 4)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma4
            },
            {
                id: 5,
                tag: 'African (Sample 5)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma5
            },
            {
                id: 6,
                tag: 'African (Sample 6)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma6
            },
            {
                id: 7,
                tag: 'African (Sample 7)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: p6
            },
            {
                id: 8,
                tag: 'African (Sample 8)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma7
            },
            {
                id: 9,
                tag: 'African (Sample 9)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma8
            },
            {
                id: 10,
                tag: 'African (Sample 10)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma9
            },
            {
                id: 11,
                tag: 'African (Sample 11)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma10
            },
            {
                id: 12,
                tag: 'African (Sample 12)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma11
            },
            {
                id: 13,
                tag: 'African (Sample 12)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma12
            },
            {
                id: 14,
                tag: 'African (Sample 14)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma13
            },
            {
                id: 15,
                tag: 'African (Sample 15)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma14
            },
            {
                id: 16,
                tag: 'African (Sample 16)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma15
            },
            {
                id: 17,
                tag: 'African (Sample 17)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma16
            },
            {
                id: 18,
                tag: 'African (Sample 18)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma17
            },
            {
                id: 19,
                tag: 'African (Sample 19)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma18
            },
            {
                id: 20,
                tag: 'African (Sample 20)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma19
            },
            {
                id: 21,
                tag: 'African (Sample 21)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma20
            },
            {
                id: 22,
                tag: 'African (Sample 22)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma21
            },
            {
                id: 23,
                tag: 'African (Sample 23)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma22
            },
        ]
    },
    {
        name: 'Gym Clothes',
        product: [
            {
                id: 1,
                tag: 'Gym Clothes (Sample 1)',
                price: '€30',
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: mg1
            },
            {
                id: 2,
                tag: 'Gym Clothes (Sample 2)',
                price: '€30',
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: mg2
            },
            {
                id: 3,
                tag: 'Gym Clothes (Sample 3)',
                price: '€30',
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: mg3
            },
            {
                id: 4,
                tag: 'Gym Clothes (Sample 4)',
                price: '€30',
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: mg4
            },
            {
                id: 5,
                tag: 'Gym Clothes (Sample 5)',
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                price: '€30',
                img: mg5
            },
            {
                id: 6,
                tag: 'Gym Clothes (Sample 6)',
                price: '€30',
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: mg6
            },
            {
                id: 7,
                tag: 'Gym Clothes (Sample 7)',
                price: '€30',
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: mg7
            },
            {
                id: 8,
                tag: 'Gym Clothes (Sample 8)',
                price: '€30',
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: mg8
            },
            {
                id: 9,
                tag: 'Gym Clothes (Sample 9)',
                price: '€30',
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: mg9
            },
        ]
    },
]

export const women = [
    {
        name: 'T-shirts',
        product: [
            {
                id: 1,
                tag: 'T-shirt (Sample 1)',
                price: '€30',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                img: wt1
            },
            {
                id: 2,
                tag: 'T-shirt (Sample 2)',
                price: '€30',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                img: wt2
            },
            {
                id: 3,
                tag: 'T-shirt (Sample 3)',
                price: '€30',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                img: wt3
            },
            {
                id: 4,
                tag: 'T-shirt (Sample 4)',
                price: '€30',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                img: wt4
            },
            {
                id: 5,
                tag: 'T-shirt (Sample 5)',
                price: '€30',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                img: wt5
            },
        ]
    },
    {
        name: 'Sweat-shirts',
        product: [
            {
                id: 1,
                tag: 'Sweat-shirt (Sample 1)',
                price: '€30',
                des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
                img: wss1
            },
            {
                id: 2,
                tag: 'Sweat-shirt (Sample 2)',
                price: '€30',
                des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
                img: wss2
            },
            {
                id: 3,
                tag: 'Sweat-shirt (Sample 3)',
                price: '€30',
                des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
                img: wss3
            },
            {
                id: 4,
                tag: 'Sweat-shirt (Sample 4)',
                price: '€30',
                des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
                img: wss4
            },
            {
                id: 5,
                tag: 'Sweat-shirt (Sample 5)',
                price: '€30',
                des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
                img: wss5
            },
        ]
    },
    {
        name: 'Shorts',
        product: [
            {
                id: 1,
                tag: 'Shorts (Sample 1)',
                price: '€30',
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws1
            },
            {
                id: 2,
                tag: 'Shorts (Sample 2)',
                price: '€30',
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws2
            },
            {
                id: 3,
                tag: 'Shorts (Sample 3)',
                price: '€30',
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws3
            },
            {
                id: 4,
                tag: 'Shorts (Sample 4)',
                price: '€30',
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws4
            },
            {
                id: 5,
                tag: 'Shorts (Sample 5)',
                price: '€30',
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws5
            },
            {
                id: 6,
                tag: 'Shorts (Sample 6)',
                price: '€30',
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws6
            },
        ]
    },
    {
        name: 'Hoodies',
        product: [
            {
                id: 1,
                tag: 'Hoodies (Sample 1)',
                price: '€30',
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                img: wh1
            },
            {
                id: 2,
                tag: 'Hoodies (Sample 2)',
                price: '€30',
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                img: wh2
            },
            {
                id: 3,
                tag: 'Hoodies (Sample 3)',
                price: '€30',
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                img: wh3
            },
            {
                id: 4,
                tag: 'Hoodies (Sample 4)',
                price: '€30',
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                img: wh4
            },
            {
                id: 5,
                tag: 'Hoodies (Sample 5)',
                price: '€30',
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                img: wh5
            },
        ]
    },
    {
        name: 'Bottoms',
        product: [
            {
                id: 1,
                tag: 'Bottoms (Sample 1)',
                price: '€30',
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: wb1
            },
            {
                id: 2,
                tag: 'Bottoms (Sample 2)',
                price: '€30',
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: wb2
            },
            {
                id: 3,
                tag: 'Bottoms (Sample 3)',
                price: '€30',
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: wb3
            },
            {
                id: 4,
                tag: 'Bottoms (Sample 4)',
                price: '€30',
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: wb4
            },
            {
                id: 5,
                tag: 'Bottoms (Sample 5)',
                price: '€30',
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: wb5
            },
            {
                id: 6,
                tag: 'Bottoms (Sample 5)',
                price: '€30',
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: wb6
            },
        ]
    },
    {
        name: 'Head wear',
        product: [
            {
                id: 1,
                tag: 'Head wear (Sample 1)',
                price: '€30',
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: wc1
            },
            {
                id: 2,
                tag: 'Head wear (Sample 2)',
                price: '€30',
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: wc2
            },
            {
                id: 3,
                tag: 'Head wear (Sample 3)',
                price: '€30',
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: wc3
            },
            {
                id: 4,
                tag: 'Head wear (Sample 4)',
                price: '€30',
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: wc4
            },
            {
                id: 5,
                tag: 'Head wear (Sample 5)',
                price: '€30',
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: wc5
            },
            {
                id: 6,
                tag: 'Head wear (Sample 6)',
                price: '€30',
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: cap
            },
        ]
    },
    {
        name: 'African',
        product: [
            {
                id: 1,
                tag: 'African (Sample 1)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: wa1
            },
            {
                id: 2,
                tag: 'African (Sample 2)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: wa2
            },
            {
                id: 3,
                tag: 'African (Sample 3)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: wa3
            },
            {
                id: 4,
                tag: 'African (Sample 4)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: wa4
            },
            {
                id: 5,
                tag: 'African (Sample 5)',
                price: '€30',
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: wa5
            },
        ]
    },
    {
        name: 'Gym Clothes',
        product: [
            {
                id: 1,
                tag: 'Gym Clothes (Sample 1)',
                price: '€30',
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: wg1
            },
            {
                id: 2,
                tag: 'Gym Clothes (Sample 2)',
                price: '€30',
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: wg2
            },
            {
                id: 3,
                tag: 'Gym Clothes (Sample 3)',
                price: '€30',
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: wg3
            },
            {
                id: 4,
                tag: 'Gym Clothes (Sample 4)',
                price: '€30',
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: wg4
            },
            {
                id: 5,
                tag: 'Gym Clothes (Sample 5)',
                price: '€30',
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: wg5
            },
            {
                id: 6,
                tag: 'Gym Clothes (Sample 6)',
                price: '€30',
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: wg6
            },
            {
                id: 7,
                tag: 'Gym Clothes (Sample 7)',
                price: '€30',
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: wg7
            },
            {
                id: 8,
                tag: 'Gym Clothes (Sample 8)',
                price: '€30',
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: wg8
            },
        ]
    },
]