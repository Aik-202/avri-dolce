import { cap, delivery, fbRed, g1, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g2, g20, g21, g22, g23, g24, g25, g26, g27, g28, g29, g3, g30, g31, g32, g33, g34, g35, g36, g37, g38, g4, g40, g41, g42, g43, g44, g45, g46, g47, g5, g6, g7, g8, g9, hours, igRed, locate, locationRed, ma1, ma10, ma11, ma12, ma13, ma14, ma15, ma16, ma17, ma18, ma19, ma2, ma20, ma21, ma22, ma3, ma4, ma5, 
    ma6, ma7, ma8, ma9, mb1, mb2, mb3, mb4, mc1, mc2, mc3, mc4, mc5, mg1, mg2, mg3, mg4, mg5, mg6, mg7, mg8, 
    mg9, mh1, mh2, mh3, mh4, ms1, ms2, ms3, ms4, mss1, mss2, mss3, mss4, mt1, mt2, mt3, mt4, mt5, 
    mt6, o1, o11, o12, o13, o14, o15, o16, o17, o18, o19, o2, o20, o21, o22, o23, o24, o3, o4, o5, o6, o7, o8, o9, p1, p2, p3, p4, p5, p6, p7, p8, r1, r10, r11, r12, r13, r14, r15, r16, r2, r3, r4, r7, r8, r9, tikRed, vid1, vid2, vid3, wa1, wa2, wa3, wa4, wa5, wardrobe, wb1, wb2, wb3, wb4, wb5, wb6, wc1, wc2, wc3, wc4, wc5, wg1, wg2, wg3, wg4, wg5, wg6, wg7, wg8, wh1, wh2, wh3, wh4, wh5, whatRed, ws1, ws10, ws11, ws12, ws13, ws14, ws15, ws16, ws17, ws18, ws19, ws2, ws20, ws21, ws22, ws23, ws24, ws25, ws26, ws27, ws28, ws29, ws3, ws30, ws31, ws32, ws4, ws5, ws6, ws7, ws8, ws9, wss1, wss2, wss3, wss4, wss5, wt1, wt2, wt3, wt4, wt5 } from "."

export const homeNav = ['Home', 'About', 'Products', 'Contact', 'Gallery']

export const gallery = [g1, g21, g19, g20, g25, g26, g27, g28, g4, g22, g5, g6, g2, g7, g3, g29, g30, g40, g41, g8, g9, g10, g31, g11, g12, g32, g13, g14, g37, g38, g15, g33, g16, g17, g23, g24, g34, g35, g36, g42, g44, g45, g46, g47]

export const videos = [vid1, vid2, vid3]

export const products = [
    {
        id: 26,
        tag: 'Custom T-shirt (Sample 7)',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: 30,
        img: o21
    },
    {
        id: 27,
        tag: 'Custom T-shirt (Sample 8)',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: 30,
        img: o22
    },
    {
        id: 28,
        tag: 'Custom T-shirt (Sample 9)',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: 30,
        img: o23
    },
    {
        id: 1,
        tag: 'Custom T-shirt (Sample 6)',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: 30,
        img: o20
    },
    {
        id: 2,
        tag: 'Custom T-shirt (Sample 1)',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: 30,
        img: o11,
        related: [g1, g13, g15],
        video: [vid1]
    },
    {
        id: 3,
        tag: 'Custom T-shirt (Sample 2)',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: 30,
        img: o12,
        related: [g23, g30, g31, g42, g47 ],
        video: [vid1]
    },
    {
        id: 4,
        tag: 'Custom T-shirt (Sample 3)',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: 30,
        img: o14,
        related: [g2, g20, g35, g36, g38],
        video: [vid1]
    },
    {
        id: 5,
        tag: 'Custom T-shirt (Sample 4)',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: 30,
        img: o16,
        related: [g16, g17],
        video: [vid1]
    },
    {
        id: 6,
        tag: 'Custom T-shirt (Sample 5)',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: 30,
        img: o18,
        video: [vid1]
    },
    {
        id: 7,
        tag: 'Custom Bottoms (Sample 1)',
        price: 30,
        des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
        img: o1,
        video: [vid2]
    },
    {
        id: 8,
        tag: 'Custom Bottoms (Sample 2)',
        price: 30,
        des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
        img: o3,
        related: [g23, g42, g47, g43, g31],
        video: [vid2]
    },
    {
        id: 9,
        tag: 'Custom Bottoms (Sample 3)',
        price: 30,
        des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
        img: o13,
        related: [g2, g35, g36, g37, g20],
        video: [vid2]
    },
    {
        id: 10,
        tag: 'Custom Bottoms (Sample 4)',
        price: 30,
        des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
        img: o6,
        related: [g16, g17, g22],
        video: [vid2]
    },
    {
        id: 11,
        tag: 'Custom Bottoms (Sample 5)',
        price: 30,
        des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
        img: o15,
        video: [vid2]
    },
    {
        id: 12,
        tag: 'Custom Bottoms (Sample 6)',
        price: 30,
        des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
        img: o17,
        video: [vid2]
    },
    {
        id: 13,
        tag: 'Custom T-shirts + Bottom (Sample 1)',
        price: 60,
        des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
        img: o2,
        video: [vid1]
    },
    {
        id: 14,
        tag: 'Custom T-shirts + Bottom (Sample 2)',
        price: 60,
        des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
        img: o4,
        related: [g2, g35, g36, g37, g38],
        video: [vid1]
    },
    {
        id: 15,
        tag: 'Custom T-shirts + Bottom (Sample 3)',
        price: 60,
        des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
        img: o5,
        video: [vid1]
    },
    {
        id: 16,
        tag: 'Custom T-shirts + Bottom (Sample 4)',
        price: 60,
        des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
        img: o7,
        related: [g23, g42, g47, g43, g31],
        video: [vid1]
    },
    {
        id: 17,
        tag: 'Custom T-shirts + Bottom (Sample 5)',
        price: 60,
        des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
        img: o9,
        video: [vid1]
    },
    {
        id: 18,
        tag: 'Custom T-shirts + Bottom (Sample 6)',
        price: 60,
        des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
        img: o19,
        related: [g23, g42, g47, g43, g31],
        video: [vid1]
    },
    {
        id: 19,
        tag: 'Two Custom Bottoms (Sample 1)',
        price: 60,
        des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Why get one? Get two in different colors of your choice.",
        img: o8,
        related: [g2, g42, g47, g43, g36],
        video: [vid2]
    },
    {
        id: 20,
        tag: 'Custom Sweat-shirt',
        price: 30,
        des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
        img: p3
    },
    {
        id: 21,
        tag: 'Custom Shorts',
        price: 30,
        des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
        img: p4
    },
    {
        id: 22,
        tag: 'Custom Hoodies',
        price: 30,
        des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
        img: p5
    },
    {
        id: 23,
        tag: 'African',
        price: 100,
        des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
        img: ma4
    },
    {
        id: 24,
        tag: 'Custom Cap',
        price: 18,
        des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
        img: cap
    },
    {
        id: 25,
        tag: 'Gym Clothes',
        price: 30,
        des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
        img: mg7
    },

]
export const womenProducts = [
    {
        id: 34,
        tag: 'Combo Top + Shorts (Sample 1)',
        price: 30,
        des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
        img: o24,
    },
    {
        id: 1,
        tag: 'Custom Shorts (Sample 1)',
        price: 25,
        des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
        img: ws1
    },
    {
        id: 2,
        tag: 'Custom Shorts (Sample 5)',
        price: 25,
        des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
        img: ws5
    },
    {
        id: 31,
        tag: 'Custom Shorts (Sample 16)',
        price: 30,
        des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
        img: ws18,
        related: [r10],
    },
    {
        id: 3,
        tag: 'Custom Shorts (Sample 7)',
        price: 30,
        des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
        img: ws9,
        related: [r7],
    },
    {
        id: 32,
        tag: 'Custom Shorts (Sample 31)',
        price: 30,
        des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
        img: ws32,
        related: [r3],
    },
    {
        id: 33,
        tag: 'Custom Shorts (Sample 18)',
        price: 30,
        des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
        img: ws20
    },
    {
        id: 4,
        tag: 'Custom Shorts (Sample 8)',
        price: 30,
        des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
        img: ws10
    },
    {
        id: 5,
        tag: 'Custom Shorts (Sample 10)',
        price: 25,
        des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
        img: ws12
    },
    {
        id: 6,
        tag: 'Custom Shorts (Sample 19)',
        price: 30,
        des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
        img: ws21
    },
    {
        id: 7,
        tag: 'Custom Shorts (Sample 20)',
        price: 30,
        des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
        img: ws2,
        related: [r16],
    },
    {
        id: 35,
        tag: 'Custom T-shirt (Sample 7)',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: 30,
        img: o21
    },
    {
        id: 36,
        tag: 'Custom T-shirt (Sample 8)',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: 30,
        img: o22
    },
    {
        id: 37,
        tag: 'Custom T-shirt (Sample 9)',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: 30,
        img: o23
    },
    {
        id: 38,
        tag: 'Custom T-shirt (Sample 6)',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: 30,
        img: o20
    },
    {
        id: 8,
        tag: 'Custom T-shirt (Sample 1)',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: 30,
        img: o11,
        related: [g1, g13, g15],
        video: [vid1]
    },
    {
        id: 9,
        tag: 'Custom T-shirt (Sample 2)',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: 30,
        img: o12,
        related: [g23, g30, g31, g42, g47 ],
        video: [vid1]
    },
    {
        id: 10,
        tag: 'Custom T-shirt (Sample 3)',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: 30,
        img: o14,
        related: [g2, g20, g35, g36, g38],
        video: [vid1]
    },
    {
        id: 11,
        tag: 'Custom T-shirt (Sample 4)',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: 30,
        img: o16,
        related: [g16, g17],
        video: [vid1]
    },
    {
        id: 12,
        tag: 'Custom T-shirt (Sample 5)',
        des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
        price: 30,
        img: o18,
        video: [vid1]
    },
    {
        id: 13,
        tag: 'Custom Bottoms (Sample 1)',
        price: 30,
        des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
        img: o1,
        video: [vid2]
    },
    {
        id: 14,
        tag: 'Custom Bottoms (Sample 2)',
        price: 30,
        des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
        img: o3,
        related: [g23, g42, g47, g43, g31],
        video: [vid2]
    },
    {
        id: 15,
        tag: 'Custom Bottoms (Sample 3)',
        price: 30,
        des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
        img: o13,
        related: [g2, g35, g36, g37, g20],
        video: [vid2]
    },
    {
        id: 16,
        tag: 'Custom Bottoms (Sample 4)',
        price: 30,
        des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
        img: o6,
        related: [g16, g17, g22],
        video: [vid2]
    },
    {
        id: 17,
        tag: 'Custom Bottoms (Sample 5)',
        price: 30,
        des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
        img: o15,
        video: [vid2]
    },
    {
        id: 18,
        tag: 'Custom Bottoms (Sample 6)',
        price: 30,
        des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
        img: o17,
        video: [vid2]
    },
    {
        id: 19,
        tag: 'Custom T-shirts + Bottom (Sample 1)',
        price: 60,
        des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
        img: o2,
        video: [vid1]
    },
    {
        id: 20,
        tag: 'Custom T-shirts + Bottom (Sample 2)',
        price: 60,
        des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
        img: o4,
        related: [g2, g35, g36, g37, g38],
        video: [vid1]
    },
    {
        id: 21,
        tag: 'Custom T-shirts + Bottom (Sample 3)',
        price: 60,
        des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
        img: o5,
        video: [vid1]
    },
    {
        id: 22,
        tag: 'Custom T-shirts + Bottom (Sample 4)',
        price: 60,
        des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
        img: o7,
        related: [g23, g42, g47, g43, g31],
        video: [vid1]
    },
    {
        id: 23,
        tag: 'Custom T-shirts + Bottom (Sample 5)',
        price: 60,
        des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
        img: o9,
        video: [vid1]
    },
    {
        id: 24,
        tag: 'Custom T-shirts + Bottom (Sample 6)',
        price: 60,
        des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
        img: o19,
        related: [g23, g42, g47, g43, g31],
        video: [vid1]
    },
    {
        id: 25,
        tag: 'Two Custom Bottoms (Sample 1)',
        price: 60,
        des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Why get one? Get two in different colors of your choice.",
        img: o8,
        related: [g2, g42, g47, g43, g36],
        video: [vid2]
    },
    {
        id: 26,
        tag: 'Custom Cap',
        price: 18,
        des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
        img: wc4
    },
    {
        id: 27,
        tag: 'Custom Cap',
        price: 18,
        des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
        img: wc2
    },
    {
        id: 28,
        tag: 'Custom Hoodies',
        price: 30,
        des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
        img: wh2
    },
    {
        id: 29,
        tag: 'African',
        price: 100,
        des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
        img: wa2
    },
    {
        id: 30,
        tag: 'Custom Cap',
        price: 18,
        des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
        img: wc5
    },

]
export const collection = [
    {
        id: 1,
        tag: 'T-shirts',
        price: 30,
        img: mt2
    },
    {
        id: 2,
        tag: 'Bottoms',
        price: 30,
        img: p2
    },
    {
        id: 3,
        tag: 'Sweat-shirts',
        price: 30,
        img: p3
    },
    {
        id: 4,
        tag: 'Head wear',
        price: 30,
        img: p7
    },
    {
        id: 5,
        tag: 'Hoodies',
        price: 30,
        img: p5
    },
    {
        id: 6,
        tag: 'African',
        price: 30,
        img: p6
    },
    {
        id: 7,
        tag: 'Gym Clothes',
        price: 30,
        img: p8
    },
    {
        id: 8,
        tag: 'Shorts',
        price: 30,
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

export const categories = ['Combos', 'T-shirts', 'Sweat-shirts', 'Shorts', 'Hoodies',  'Bottoms', 'Head wear', 'African', 'Gym Clothes' ]

export const men = [
    {
        name: 'Combos',
        product: [
            {
                id: 1,
                tag: 'Custom T-shirts + Bottom (Sample 1)',
                price: 60,
                des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
                img: o2,
                video: [vid1]
            },
            {
                id: 2,
                tag: 'Custom T-shirts + Bottom (Sample 2)',
                price: 60,
                des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
                img: o4,
                related: [g2, g35, g36, g37, g38],
                video: [vid1]
            },
            {
                id: 3,
                tag: 'Custom T-shirts + Bottom (Sample 3)',
                price: 60,
                des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
                img: o5,
                video: [vid1]
            }, 
            {
                id: 4,
                tag: 'Custom T-shirts + Bottom (Sample 4)',
                price: 60,
                des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
                img: o7,
                video: [vid1]
            },
            {
                id: 5,
                tag: 'Two Custom Bottoms (Sample 5)',
                price: 60,
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Why get one? Get two in different colors of your choice.",
                img: o8,
                related: [g2, g42, g47, g43, g36],
                video: [vid2]
            },
            {
                id: 6,
                tag: 'Custom T-shirts + Bottom (Sample 6)',
                price: 60,
                des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
                img: o9,
                video: [vid1]
            },
            {
                id: 7,
                tag: 'Custom T-shirts + Bottom (Sample 7)',
                price: 60,
                des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
                img: o19,
                related: [g23, g42, g47, g43, g31],
                video: [vid1]
            },
        ]
    },
    {
        name: 'T-shirts',
        product: [
            {
                id: 7,
                tag: 'T-shirt (Sample 7)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: 30,
                img: o21
            },
            {
                id: 8,
                tag: 'T-shirt (Sample 8)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: 30,
                img: o22
            },
            {
                id: 9,
                tag: 'T-shirt (Sample 9)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: 30,
                img: o23
            },
            {
                id: 6,
                tag: 'T-shirt (Sample 6)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: 30,
                img: o20
            },
            {
                id: 1,
                tag: 'T-shirt (Sample 1)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: 30,
                img: o12,
                related: [g23, g30, g31, g42, g47 ],
                video: [vid1]           
            },
            {
                id: 2,
                tag: 'T-shirt (Sample 2)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: 30,
                img: o14,
                related: [g2, g20, g35, g36, g38],
                video: [vid1]
            },
            {
                id: 3,
                tag: 'T-shirt (Sample 3)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: 30,
                img: o11,
                related: [g1, g13, g15],
                video: [vid1]
            },
            {
                id: 4,
                tag: 'T-shirt (Sample 4)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: 30,
                img: o16,
                related: [g16, g17],
                video: [vid1]
            },
            {
                id: 5,
                tag: 'T-shirt (Sample 5)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: 30,
                img: o18,
                video: [vid1]
            },
        ]
    },
    {
        name: 'Sweat-shirts',
        product: [
            {
                id: 1,
                tag: 'Sweat-shirt (Sample 1)',
                price: 30,
                des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
                img: mss1
            },
            {
                id: 2,
                tag: 'Sweat-shirt (Sample 2)',
                price: 30,
                des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
                img: mss2
            },
            {
                id: 3,
                tag: 'Sweat-shirt (Sample 3)',
                price: 30,
                des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
                img: mss3
            },
            {
                id: 4,
                tag: 'Sweat-shirt (Sample 4)',
                price: 30,
                des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
                img: mss4
            },
            {
                id: 5,
                tag: 'Sweat-shirt (Sample 5)',
                price: 30,
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
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ms1
            },
            {
                id: 2,
                tag: 'Shorts (Sample 2)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ms2
            },
            {
                id: 3,
                tag: 'Shorts (Sample 3)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ms3
            },
            {
                id: 4,
                tag: 'Shorts (Sample 4)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ms4
            },
            {
                id: 5,
                tag: 'Shorts (Sample 5)',
                price: 30,
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
                price: 30,
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                img: mh1
            },
            {
                id: 2,
                tag: 'Hoodies (Sample 2)',
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                price: 30,
                img: mh2
            },
            {
                id: 3,
                tag: 'Hoodies (Sample 3)',
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                price: 30,
                img: mh3
            },
            {
                id: 4,
                tag: 'Hoodies (Sample 4)',
                price: 30,
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                img: mh4
            },
            {
                id: 5,
                tag: 'Hoodies (Sample 5)',
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                price: 30,
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
                price: 30,
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: o1,
                video: [vid2]
            },
            {
                id: 2,
                tag: 'Bottoms (Sample 2)',
                price: 30,
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: o3,
                related: [g23, g42, g47, g43, g31],
                video: [vid2]
            },
            {
                id: 3,
                tag: 'Bottoms (Sample 3)',
                price: 30,
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: o6,
                related: [g16, g17, g22],
                video: [vid2]
            },
            {
                id: 4,
                tag: 'Bottoms (Sample 4)',
                price: 30,
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: o13,
                related: [g2, g35, g36, g37, g20],
                video: [vid2]
            },
            {
                id: 5,
                tag: 'Bottoms (Sample 5)',
                price: 30,
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: o15,
                video: [vid2]
            },
            {
                id: 6,
                tag: 'Bottoms (Sample 6)',
                price: 30,
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: o17,
                video: [vid2]
            },
        ]
    },
    {
        name: 'Head wear',
        product: [
            {
                id: 1,
                tag: 'Head wear (Sample 1)',
                price: 18,
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: mc1
            },
            {
                id: 2,
                tag: 'Head wear (Sample 2)',
                price: 18,
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: mc2
            },
            {
                id: 3,
                tag: 'Head wear (Sample 3)',
                price: 18,
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: mc3
            },
            {
                id: 4,
                tag: 'Head wear (Sample 4)',
                price: 18,
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: mc4
            },
            {
                id: 5,
                tag: 'Head wear (Sample 5)',
                price: 18,
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: mc5
            },
            {
                id: 6,
                tag: 'Head wear (Sample 6)',
                price: 18,
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
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma1
            },
            {
                id: 2,
                tag: 'African (Sample 2)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma2
            },
            {
                id: 3,
                tag: 'African (Sample 3)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma3
            },
            {
                id: 4,
                tag: 'African (Sample 4)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma4
            },
            {
                id: 5,
                tag: 'African (Sample 5)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma5
            },
            {
                id: 6,
                tag: 'African (Sample 6)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma6
            },
            {
                id: 7,
                tag: 'African (Sample 7)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: p6
            },
            {
                id: 8,
                tag: 'African (Sample 8)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma7
            },
            {
                id: 9,
                tag: 'African (Sample 9)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma8
            },
            {
                id: 10,
                tag: 'African (Sample 10)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma9
            },
            {
                id: 11,
                tag: 'African (Sample 11)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma10
            },
            {
                id: 12,
                tag: 'African (Sample 12)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma11
            },
            {
                id: 13,
                tag: 'African (Sample 12)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma12
            },
            {
                id: 14,
                tag: 'African (Sample 14)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma13
            },
            {
                id: 15,
                tag: 'African (Sample 15)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma14
            },
            {
                id: 16,
                tag: 'African (Sample 16)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma15
            },
            {
                id: 17,
                tag: 'African (Sample 17)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma16
            },
            {
                id: 18,
                tag: 'African (Sample 18)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma17
            },
            {
                id: 19,
                tag: 'African (Sample 19)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma18
            },
            {
                id: 20,
                tag: 'African (Sample 20)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma19
            },
            {
                id: 21,
                tag: 'African (Sample 21)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma20
            },
            {
                id: 22,
                tag: 'African (Sample 22)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: ma21
            },
            {
                id: 23,
                tag: 'African (Sample 23)',
                price: 100,
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
                price: 30,
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: mg1
            },
            {
                id: 2,
                tag: 'Gym Clothes (Sample 2)',
                price: 30,
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: mg2
            },
            {
                id: 3,
                tag: 'Gym Clothes (Sample 3)',
                price: 30,
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: mg3
            },
            {
                id: 4,
                tag: 'Gym Clothes (Sample 4)',
                price: 30,
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: mg4
            },
            {
                id: 5,
                tag: 'Gym Clothes (Sample 5)',
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                price: 30,
                img: mg5
            },
            {
                id: 6,
                tag: 'Gym Clothes (Sample 6)',
                price: 30,
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: mg6
            },
            {
                id: 7,
                tag: 'Gym Clothes (Sample 7)',
                price: 30,
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: mg7
            },
            {
                id: 8,
                tag: 'Gym Clothes (Sample 8)',
                price: 30,
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: mg8
            },
            {
                id: 9,
                tag: 'Gym Clothes (Sample 9)',
                price: 30,
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: mg9
            },
        ]
    },
]

export const women = [
    {
        name: 'Combos',
        product: [
            {
                id: 8,
                tag: 'Combo Top + Shorts (Sample 1)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: o24,
            },
            {
                id: 1,
                tag: 'Custom T-shirts + Bottom (Sample 1)',
                price: 60,
                des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
                img: o2,
                video: [vid1]
            },
            {
                id: 2,
                tag: 'Custom T-shirts + Bottom (Sample 2)',
                price: 60,
                des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
                img: o4,
                related: [g2, g35, g36, g37, g38],
                video: [vid1]
            },
            {
                id: 3,
                tag: 'Custom T-shirts + Bottom (Sample 3)',
                price: 60,
                des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
                img: o5,
                video: [vid1]
            }, 
            {
                id: 4,
                tag: 'Custom T-shirts + Bottom (Sample 4)',
                price: 60,
                des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
                img: o7,
                video: [vid1]
            },
            {
                id: 5,
                tag: 'Two Custom Bottoms (Sample 5)',
                price: 60,
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Why get one? Get two in different colors of your choice.",
                img: o8,
                related: [g2, g42, g47, g43, g36],
                video: [vid2]
            },
            {
                id: 6,
                tag: 'Custom T-shirts + Bottom (Sample 6)',
                price: 60,
                des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
                img: o9,
                video: [vid1]
            },
            {
                id: 7,
                tag: 'Custom T-shirts + Bottom (Sample 7)',
                price: 60,
                des: "Discover the perfect pairing of Avri Dolce bottoms and T-shirt, where craftsmanship meets style in a harmonious fusion. At Avri Dolce, we pride ourselves not only on our exceptional sewing skills but also on our ability to create stunning combinations that elevate your wardrobe to new heights.",
                img: o19,
                related: [g23, g42, g47, g43, g31],
                video: [vid1]
            },
        ]
    },
    {
        name: 'T-shirts',
        product: [
            {
                id: 7,
                tag: 'T-shirt (Sample 7)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: 30,
                img: o21
            },
            {
                id: 8,
                tag: 'T-shirt (Sample 8)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: 30,
                img: o22
            },
            {
                id: 9,
                tag: 'T-shirt (Sample 9)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: 30,
                img: o23
            },
            {
                id: 6,
                tag: 'T-shirt (Sample 6)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: 30,
                img: o20
            },
            {
                id: 1,
                tag: 'T-shirt (Sample 1)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: 30,
                img: o12,
                related: [g23, g30, g31, g42, g47 ],
                video: [vid1]           
            },
            {
                id: 2,
                tag: 'T-shirt (Sample 2)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: 30,
                img: o14,
                related: [g2, g20, g35, g36, g38],
                video: [vid1]
            },
            {
                id: 3,
                tag: 'T-shirt (Sample 3)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: 30,
                img: o11,
                related: [g1, g13, g15],
                video: [vid1]
            },
            {
                id: 4,
                tag: 'T-shirt (Sample 4)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: 30,
                img: o16,
                related: [g16, g17],
                video: [vid1]
            },
            {
                id: 5,
                tag: 'T-shirt (Sample 5)',
                des: "Elevate your wardrobe with the Avri Dolce Signature T-shirt, where comfort meets style seamlessly. Crafted from the finest cotton, this classic piece boasts a timeless design suitable for any occasion. With its flattering fit and meticulous attention to detail, our Signature T-shirt embodies sophistication and versatility, ensuring you look and feel your best wherever you go.",
                price: 30,
                img: o18,
                video: [vid1]
            },
        ]
    },
    {
        name: 'Sweat-shirts',
        product: [
            {
                id: 1,
                tag: 'Sweat-shirt (Sample 1)',
                price: 30,
                des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
                img: wss1
            },
            {
                id: 2,
                tag: 'Sweat-shirt (Sample 2)',
                price: 30,
                des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
                img: wss2
            },
            {
                id: 3,
                tag: 'Sweat-shirt (Sample 3)',
                price: 30,
                des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
                img: wss3
            },
            {
                id: 4,
                tag: 'Sweat-shirt (Sample 4)',
                price: 30,
                des: "Elevate your wardrobe with the Avri Dolce Signature  Sweat shirt, meticulously crafted to blend style and comfort seamlessly.With its flattering fit and exquisite attention to detail, our Signature sweat shirt embodies sophistication and versatility. Whether paired with casual denim or dressed up with tailored trousers, this wardrobe essential effortlessly exudes confidence and refinement.",
                img: wss4
            },
            {
                id: 5,
                tag: 'Sweat-shirt (Sample 5)',
                price: 30,
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
                price: 25,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws1
            },
            {
                id: 2,
                tag: 'Shorts (Sample 2)',
                price: 25,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws7
            },
            {
                id: 3,
                tag: 'Shorts (Sample 3)',
                price: 25,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws3
            },
            {
                id: 4,
                tag: 'Shorts (Sample 4)',
                price: 25,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws4
            },
            {
                id: 5,
                tag: 'Shorts (Sample 5)',
                price: 25,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws5
            },
            {
                id: 6,
                tag: 'Shorts (Sample 6)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws6
            },
            {
                id: 9,
                tag: 'Shorts (Sample 7)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws9,
                related: [r7],
            },
            {
                id: 10,
                tag: 'Shorts (Sample 8)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws10
            },
            {
                id: 11,
                tag: 'Shorts (Sample 9)',
                price: 25,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws11
            },
            {
                id: 12,
                tag: 'Shorts (Sample 10)',
                price: 25,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws12
            },
            {
                id: 13,
                tag: 'Shorts (Sample 11)',
                price: 25,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws13
            },
            {
                id: 14,
                tag: 'Shorts (Sample 12)',
                price: 25,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws14
            },
            {
                id: 15,
                tag: 'Shorts (Sample 13)',
                price: 25,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws15
            },
            {
                id: 16,
                tag: 'Shorts (Sample 14)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws16
            },
            {
                id: 17,
                tag: 'Shorts (Sample 15)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws17
            },
            {
                id: 18,
                tag: 'Shorts (Sample 16)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws18,
                related: [r10],
            },
            {
                id: 19,
                tag: 'Shorts (Sample 17)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws19
            },
            {
                id: 20,
                tag: 'Shorts (Sample 18)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws20
            },
            {
                id: 21,
                tag: 'Shorts (Sample 19)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws21
            },
            {
                id: 22,
                tag: 'Shorts (Sample 20)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws2,
                related: [r16],
            },
            {
                id: 23,
                tag: 'Shorts (Sample 21)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws22,
                related: [r1],
            },
            {
                id: 24,
                tag: 'Shorts (Sample 22)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws23,
                related: [r2],
            },
            {
                id: 25,
                tag: 'Shorts (Sample 23)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws24,
                related: [r14],
            },
            {
                id: 26,
                tag: 'Shorts (Sample 24)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws25,
                related: [r4],
            },
            {
                id: 27,
                tag: 'Shorts (Sample 25)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws26,
                related: [r9],
            },
            {
                id: 28,
                tag: 'Shorts (Sample 26)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws27,
                related: [r15],
            },
            {
                id: 29,
                tag: 'Shorts (Sample 27)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws28,
                related: [r13],
            },
            {
                id: 30,
                tag: 'Shorts (Sample 28)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws29,
                related: [r12],
            },
            {
                id: 31,
                tag: 'Shorts (Sample 29)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws30,
                related: [r11],
            },
            {
                id: 32,
                tag: 'Shorts (Sample 30)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws31,
                related: [r8],
            },
            {
                id: 33,
                tag: 'Shorts (Sample 31)',
                price: 30,
                des: "Experience ultimate comfort and style with Avri Dolce Essential Shorts, perfect for warm-weather adventures. Made from premium materials, these shorts feature a relaxed fit and versatile design, ideal for casual outings or lounging at home. With attention to detail and quality craftsmanship, our Essential Shorts offer effortless coolness and comfort for every occasion.",
                img: ws32,
                related: [r3],
            },
        ]
    },
    {
        name: 'Hoodies',
        product: [
            {
                id: 1,
                tag: 'Hoodies (Sample 1)',
                price: 30,
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                img: wh1
            },
            {
                id: 2,
                tag: 'Hoodies (Sample 2)',
                price: 30,
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                img: wh2
            },
            {
                id: 3,
                tag: 'Hoodies (Sample 3)',
                price: 30,
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                img: wh3
            },
            {
                id: 4,
                tag: 'Hoodies (Sample 4)',
                price: 30,
                des: "Introducing the Avri Dolce Urban Hoodie, where warmth meets style in perfect harmony. Crafted with the finest materials, this hoodie offers supreme comfort without compromising on fashion-forward design. From its cozy fleece lining to its modern silhouette, every detail is thoughtfully considered to elevate your casual ensemble. Whether you're lounging at home or hitting the streets, the Urban Hoodie is your go-to choice for effortless coolness and unparalleled comfort.",
                img: wh4
            },
            {
                id: 5,
                tag: 'Hoodies (Sample 5)',
                price: 30,
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
                price: 30,
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: o1,
                video: [vid2]
            },
            {
                id: 2,
                tag: 'Bottoms (Sample 2)',
                price: 30,
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: o3,
                related: [g23, g42, g47, g43, g31],
                video: [vid2]
            },
            {
                id: 3,
                tag: 'Bottoms (Sample 3)',
                price: 30,
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: o6,
                related: [g16, g17, g22],
                video: [vid2]
            },
            {
                id: 4,
                tag: 'Bottoms (Sample 4)',
                price: 30,
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: o13,
                related: [g2, g35, g36, g37, g20],
                video: [vid2]
            },
            {
                id: 5,
                tag: 'Bottoms (Sample 5)',
                price: 30,
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: o15,
                video: [vid2]
            },
            {
                id: 6,
                tag: 'Bottoms (Sample 6)',
                price: 30,
                des: "Elevate your wardrobe with Avri Dolce Tailored Trousers, designed for the modern gentleman. Expertly crafted from luxurious fabrics, our trousers boast impeccable tailoring and a refined silhouette, ensuring a flattering fit and unmatched comfort. From formal occasions to everyday wear, our tailored trousers exude sophistication and timeless elegance.",
                img: o17,
                video: [vid2]
            },
        ]
    },
    {
        name: 'Head wear',
        product: [
            {
                id: 1,
                tag: 'Head wear (Sample 1)',
                price: 18,
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: wc1
            },
            {
                id: 2,
                tag: 'Head wear (Sample 2)',
                price: 18,
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: wc2
            },
            {
                id: 3,
                tag: 'Head wear (Sample 3)',
                price: 18,
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: wc3
            },
            {
                id: 4,
                tag: 'Head wear (Sample 4)',
                price: 18,
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: wc4
            },
            {
                id: 5,
                tag: 'Head wear (Sample 5)',
                price: 18,
                des: "Complete your look with the Avri Dolce Classic Cap, the epitome of casual sophistication. Crafted from premium materials, this timeless accessory features a classic silhouette and adjustable strap for a comfortable fit. Whether you're running errands or exploring the city, our Classic Cap adds a touch of effortless style to any ensemble.",
                img: wc5
            },
            {
                id: 6,
                tag: 'Head wear (Sample 6)',
                price: 18,
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
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: wa1
            },
            {
                id: 2,
                tag: 'African (Sample 2)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: wa2
            },
            {
                id: 3,
                tag: 'African (Sample 3)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: wa3
            },
            {
                id: 4,
                tag: 'African (Sample 4)',
                price: 100,
                des: "Embrace the rich heritage and vibrant culture with Avri Dolce African Dresses. Each garment is a celebration of tradition and modernity, meticulously crafted with bold prints, intricate patterns, and exquisite detailing. From flowing silhouettes to tailored cuts, our African dresses exude elegance and grace, allowing you to make a statement with every step.",
                img: wa4
            },
            {
                id: 5,
                tag: 'African (Sample 5)',
                price: 100,
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
                price: 30,
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: wg1
            },
            {
                id: 2,
                tag: 'Gym Clothes (Sample 2)',
                price: 30,
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: wg2
            },
            {
                id: 3,
                tag: 'Gym Clothes (Sample 3)',
                price: 30,
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: wg3
            },
            {
                id: 4,
                tag: 'Gym Clothes (Sample 4)',
                price: 30,
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: wg4
            },
            {
                id: 5,
                tag: 'Gym Clothes (Sample 5)',
                price: 30,
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: wg5
            },
            {
                id: 6,
                tag: 'Gym Clothes (Sample 6)',
                price: 30,
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: wg6
            },
            {
                id: 7,
                tag: 'Gym Clothes (Sample 7)',
                price: 30,
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: wg7
            },
            {
                id: 8,
                tag: 'Gym Clothes (Sample 8)',
                price: 30,
                des: "Introducing Avri Dolce Performance Gym Clothes, designed to inspire and support your active lifestyle. Engineered with cutting-edge fabrics, our gym attire offers optimal breathability, flexibility, and moisture-wicking properties to keep you cool and comfortable during your workouts. From sleek leggings to performance tops, each piece is crafted with precision and style, empowering you to reach your fitness goals with confidence and flair.",
                img: wg8
            },
        ]
    },
]