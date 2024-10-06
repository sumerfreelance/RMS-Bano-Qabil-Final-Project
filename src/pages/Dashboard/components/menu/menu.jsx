import React, { useState } from 'react';
import './menu.css';

const MenuComponent = () => {
    const [selectedMenu, setSelectedMenu] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const allMenus = [
        {
            id: 1,
            name: 'Biryani',
            description:
                'A fragrant rice dish cooked with tender meat, spices, and herbs.',
            price: 350,
            category: 'Desi',
            imageUrl:
                'https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg',
        },
        {
            id: 2,
            name: 'Chicken Karahi',
            description:
                'A rich and spicy chicken curry cooked in a wok with tomatoes and green chilies.',
            price: 450,
            category: 'Desi',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNll9h6OsTK4PIS0ZO-AFflO4MvVBV__WpsA&s',
        },
        {
            id: 3,
            name: 'Haleem',
            description:
                'A thick stew made with meat, lentils, and wheat, slow-cooked for hours.',
            price: 300,
            category: 'Desi',
            imageUrl:
                'https://www.thedeliciouscrescent.com/wp-content/uploads/2020/08/Haleem-6-500x500.jpg',
        },
        {
            id: 4,
            name: 'Seekh Kebab',
            description:
                'Minced meat skewers marinated with spices and grilled to perfection.',
            price: 200,
            category: 'Desi',
            imageUrl:
                'https://c.ndtvimg.com/2020-01/a39okhfk_620_625x300_21_January_20.jpg',
        },
        {
            id: 5,
            name: 'Nihari',
            description:
                'A slow-cooked beef stew flavored with spices and garnished with ginger and coriander.',
            price: 500,
            category: 'Desi',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYHCwnTVJ3GRACyQUVcbUq0efgOUtnhKhK_A&s',
        },
        {
            id: 6,
            name: 'Palak Paneer',
            description:
                'A vegetarian dish made with spinach and cubes of paneer cooked in a creamy sauce.',
            price: 350,
            category: 'Desi',
            imageUrl:
                'https://www.chefajaychopra.com/assets/img/recipe/1-1666433552palakpaneer1webp.webp',
        },
        {
            id: 7,
            name: 'Chapli Kebab',
            description:
                'A traditional Pashtun-style fried kebab made with minced meat and spices.',
            price: 250,
            category: 'Desi',
            imageUrl:
                'https://www.masala.tv/wp-content/uploads/2015/07/peshawari-chapli-kabab-recipe.jpeg',
        },
        {
            id: 8,
            name: 'Daal Makhni',
            description:
                'A creamy, slow-cooked lentil curry made with black lentils and butter.',
            price: 300,
            category: 'Desi',
            imageUrl:
                'https://www.funfoodfrolic.com/wp-content/uploads/2023/04/Dal-Makhani-Blog-500x500.jpg',
        },
        {
            id: 9,
            name: 'Tandoori Chicken',
            description:
                'Chicken marinated in yogurt and spices, roasted in a tandoor for a smoky flavor.',
            price: 400,
            category: 'Desi',
            imageUrl:
                'https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe-500x500.jpg',
        },
        {
            id: 10,
            name: 'Paya',
            description:
                'A traditional dish made with goat or beef trotters slow-cooked in a flavorful broth.',
            price: 550,
            category: 'Desi',
            imageUrl:
                'https://flavoredbyfatima.com/wp-content/uploads/2020/10/mutton-paya-mutton-trotters-500x500.jpeg',
        },
        {
            id: 11,
            name: 'Chicken Karahi',
            description:
                'A rich and spicy chicken curry cooked in a wok with tomatoes and green chilies.',
            price: 450,
            category: 'Karahi',
            imageUrl:
                'https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246080.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725840000&semt=ais_hybrid',
        },
        {
            id: 12,
            name: 'Mutton Karahi',
            description:
                'Tender mutton pieces cooked with a flavorful blend of spices, tomatoes, and green chilies.',
            price: 850,
            category: 'Karahi',
            imageUrl:
                'https://img.freepik.com/free-photo/meat-dish-with-vegetables_144627-18110.jpg',
        },
        {
            id: 13,
            name: 'Beef Karahi',
            description:
                'A delicious wok-cooked beef curry with ginger, garlic, and fresh green chilies.',
            price: 700,
            category: 'Karahi',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_uRo_JNZvOVzY6PDD-olJCWRsd77NiAyrA&s',
        },
        {
            id: 14,
            name: 'Butter Chicken Karahi',
            description:
                'Creamy and flavorful, butter chicken cooked in a wok with tomatoes and spices.',
            price: 500,
            category: 'Karahi',
            imageUrl:
                'https://img.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine_2829-4415.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724976000&semt=ais_hybrid',
        },
        {
            id: 15,
            name: 'Desi Murgh Karahi',
            description:
                'Traditional Desi chicken cooked with a rich tomato-based curry and aromatic spices.',
            price: 750,
            category: 'Karahi',
            imageUrl:
                'https://www.masala.tv/wp-content/uploads/2021/03/Murgh-Desi-Karahii.jpg',
        },
        {
            id: 16,
            name: 'White Chicken Karahi',
            description:
                'A creamy white chicken curry cooked with yogurt, green chilies, and aromatic herbs.',
            price: 550,
            category: 'Karahi',
            imageUrl:
                'https://i.ytimg.com/vi/muimtkU9pt8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBO1CfWFgMHZVWD5AmxwQeOxJandA',
        },
        {
            id: 17,
            name: 'Lahori Mutton Karahi',
            description:
                'Mutton cooked in traditional Lahori style with a blend of spices and green chilies.',
            price: 900,
            category: 'Karahi',
            imageUrl: 'https://i.ytimg.com/vi/9McTGCBz69I/maxresdefault.jpg',
        },
        {
            id: 18,
            name: 'Peshawari Karahi',
            description:
                'A signature Peshawari dish made with mutton and cooked with minimal spices for a rich, authentic flavor.',
            price: 950,
            category: 'Karahi',
            imageUrl:
                'https://img-global.cpcdn.com/recipes/9deceb5df6cd4d49/680x482cq70/peshawari-karahi-recipe-main-photo.jpg',
        },
        {
            id: 19,
            name: 'Degi Chicken Karahi',
            description:
                'A spicy chicken karahi prepared using traditional Degi spices and a slow-cooking method.',
            price: 600,
            category: 'Karahi',
            imageUrl:
                'https://i.pinimg.com/564x/d7/01/8a/d7018abea4bd2d066f277e32f676bf37.jpg',
        },
        {
            id: 20,
            name: 'Shrimp Karahi',
            description:
                'A flavorful seafood variation with shrimp cooked in spicy tomato and chili gravy.',
            price: 800,
            category: 'Karahi',
            imageUrl:
                'https://fatimacooks.net/wp-content/uploads/2020/02/IMG_1347-scaled.jpg',
        },
        {
            id: 21,
            name: 'Kachumber Salad',
            description:
                'A refreshing salad made with diced cucumbers, tomatoes, onions, and green chilies, topped with lemon juice and chaat masala.',
            price: 150,
            category: 'Salad',
            imageUrl:
                'https://cdn-food.tribune.com.pk/gallery/zWLmAzQtQJJ4LD1gvyLsdbp2w4CjMZNSH88ixsm9.jpeg',
        },
        {
            id: 22,
            name: 'Raita Salad',
            description:
                'A yogurt-based salad with chopped cucumbers, tomatoes, onions, and a sprinkle of cumin for added flavor.',
            price: 120,
            category: 'Salad',
            imageUrl:
                'https://www.allrecipes.com/thmb/7v55TRZ4ZpY9SPbha-MLce1Ub2o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/288199-138252ac581c4ec5ae3d93d47afdde8d.jpg',
        },
        {
            id: 23,
            name: 'Chickpea Salad',
            description:
                'A healthy and filling salad made with boiled chickpeas, tomatoes, onions, and coriander, drizzled with lemon and spices.',
            price: 180,
            category: 'Salad',
            imageUrl:
                'https://www.themediterraneandish.com/wp-content/uploads/2023/12/TMD-Chickpea-Salad-Leads-01-Angle-Horizontal.jpg',
        },
        {
            id: 24,
            name: 'Mixed Vegetable Salad',
            description:
                'A colorful mix of fresh vegetables including carrots, cucumbers, tomatoes, and lettuce, served with a tangy dressing.',
            price: 200,
            category: 'Salad',
            imageUrl:
                'https://www.acommunaltable.com/wp-content/uploads/2015/11/power-salad-horozontal.jpg',
        },
        {
            id: 25,
            name: 'Fruit Chaat',
            description:
                'A sweet and spicy fruit salad with seasonal fruits, tossed with chaat masala and lemon juice.',
            price: 250,
            category: 'Salad',
            imageUrl:
                'https://therecipespk.com/wp-content/uploads/2022/02/Creamy-Fruit-Chaat.jpg',
        },
        {
            id: 26,
            name: 'Lassi',
            description:
                'A traditional yogurt-based drink, available in sweet or salty varieties.',
            price: 120,
            category: 'Drinks',
            imageUrl:
                'https://static.toiimg.com/thumb/58360232.cms?imgsize=1259672&width=800&height=800',
        },
        {
            id: 27,
            name: 'Chaas',
            description:
                'A refreshing buttermilk drink flavored with spices and herbs, perfect for cooling down.',
            price: 100,
            category: 'Drinks',
            imageUrl:
                'https://c.ndtvimg.com/2021-04/31fea82g_chaas_625x300_27_April_21.jpg',
        },
        {
            id: 28,
            name: 'Mango Lassi',
            description:
                'A sweet and creamy yogurt drink blended with ripe mangoes, perfect for a tropical twist.',
            price: 150,
            category: 'Drinks',
            imageUrl:
                'https://www.cookwithmanali.com/wp-content/uploads/2017/05/Best-Mango-Mango-Lassi-Recipe.jpg',
        },
        {
            id: 29,
            name: 'Nimbu Pani',
            description:
                'A tangy and refreshing lemonade made with fresh lemon juice, water, and a touch of spices.',
            price: 130,
            category: 'Drinks',
            imageUrl:
                'https://www.cookwithmanali.com/wp-content/uploads/2022/06/Nimbu-Paani.jpg',
        },
        {
            id: 30,
            name: 'Mint Mojito',
            description:
                'A cool and invigorating drink made with mint leaves, lime, and soda water.',
            price: 160,
            category: 'Drinks',
            imageUrl:
                'https://cdn.loveandlemons.com/wp-content/uploads/2020/07/mojito.jpg',
        },
        {
            id: 31,
            name: 'Masala Chai',
            description:
                'A spiced tea brewed with a blend of aromatic spices, milk, and tea leaves.',
            price: 140,
            category: 'Drinks',
            imageUrl:
                'https://budleaf.com/wp-content/uploads/2023/04/How-to-make-masala-chai-1568x1039.jpeg',
        },
        {
            id: 32,
            name: 'Rose Milk',
            description:
                'A sweet and fragrant milk drink flavored with rose syrup, perfect for a unique treat.',
            price: 180,
            category: 'Drinks',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_rAnk-Ju1dZODfz3YJXMHzxyr3GA5RhTvw&s',
        },
        {
            id: 51,
            name: 'Burger',
            description:
                'A classic beef patty burger with lettuce, tomato, cheese, and pickles, served on a sesame seed bun.',
            price: 250,
            category: 'Fast Food',
            imageUrl:
                'https://campingfoodrecipes.com/wp-content/uploads/2023/05/simple-burger-recipe-no-breadcrumbs.jpg',
        },
        {
            id: 52,
            name: 'Cheeseburger',
            description:
                'A beef patty topped with melted cheese, lettuce, tomato, and pickles, served on a soft bun.',
            price: 270,
            category: 'Fast Food',
            imageUrl:
                'https://www.recipetineats.com/tachyon/2022/08/Stack-of-cheeseburgers.jpg',
        },
        {
            id: 53,
            name: 'Chicken Nuggets',
            description:
                'Breaded and fried chicken pieces served with a choice of dipping sauces.',
            price: 200,
            category: 'Fast Food',
            imageUrl:
                'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenNuggets.webp',
        },
        {
            id: 54,
            name: 'French Fries',
            description: 'Crispy golden fries served hot with a sprinkle of salt.',
            price: 150,
            category: 'Fast Food',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtQU2Pf3U32qKKJLQB0tY83xthaYEYTatRw&s',
        },
        {
            id: 55,
            name: 'Hot Dog',
            description:
                'A grilled sausage served in a bun with mustard and ketchup.',
            price: 180,
            category: 'Fast Food',
            imageUrl:
                'https://www.seriouseats.com/thmb/QJZXQHDXBfTiUSKstQ1uskJc31g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-best-grilled-hot-dogs-recipe-hero-02-9d245c0d43874a3da13a7228682b0dce.jpg',
        },
        {
            id: 56,
            name: 'Chicken Sandwich',
            description:
                'A breaded chicken fillet served with lettuce, tomato, and mayo on a bun.',
            price: 290,
            category: 'Fast Food',
            imageUrl:
                'https://i0.wp.com/www.shanazrafiq.com/wp-content/uploads/2020/12/6-Grilled-Chicken-Sandwich-6.jpg?fit=1110%2C832&ssl=1',
        },
        {
            id: 57,
            name: 'Pizza',
            description:
                'A classic pizza topped with cheese, tomato sauce, and a choice of toppings.',
            price: 350,
            category: 'Fast Food',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s',
        },
        {
            id: 58,
            name: 'Onion Rings',
            description:
                'Crispy, breaded onion rings served with a side of dipping sauce.',
            price: 160,
            category: 'Fast Food',
            imageUrl:
                'https://kristineskitchenblog.com/wp-content/uploads/2022/03/crispy-air-fryer-onion-rings-recipe-0775.jpg',
        },
        {
            id: 59,
            name: 'Shakes',
            description:
                'Creamy milkshakes available in various flavors like chocolate, vanilla, and strawberry.',
            price: 200,
            category: 'Fast Food',
            imageUrl:
                'https://static.vecteezy.com/system/resources/previews/034/039/975/non_2x/three-tasty-fresh-milk-shakes-with-berries-and-mint-on-black-table-generated-by-artificial-intelligence-free-photo.jpg',
        },
        {
            id: 60,
            name: 'Tenders',
            description:
                'Breaded and fried chicken tenders served with a choice of sauces.',
            price: 220,
            category: 'Fast Food',
            imageUrl:
                'https://www.barleyandsage.com/wp-content/uploads/2022/03/buttermilk-chicken-tenders-0228.jpg',
        },
        {
            id: 61,
            name: 'Ribeye Steak',
            description:
                'A well-marbled and flavorful cut of beef with a rich, juicy taste.',
            price: 750,
            category: 'Steak',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjQXzikTs9zWyuWZJSUqjOWP0Ld0kUZglFg&s',
        },
        {
            id: 62,
            name: 'Filet Mignon',
            description:
                'A tender and buttery cut of beef, known for its exceptional tenderness.',
            price: 950,
            category: 'Steak',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8q-HJSSIlG83pehkdtsg7XKFNKoPHXiMxA&s',
        },
        {
            id: 63,
            name: 'New York Strip',
            description:
                'A juicy and flavorful cut of beef with a good balance of tenderness and chewiness.',
            price: 800,
            category: 'Steak',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-r3ABRb8oitmrkM2ii1dQRteXj_Kddm5YkQ&s',
        },
        {
            id: 64,
            name: 'T-Bone Steak',
            description:
                'A large cut that includes a T-shaped bone with meat on both sides, offering a mix of tenderness and flavor.',
            price: 850,
            category: 'Steak',
            imageUrl:
                'https://www.vindulge.com/wp-content/uploads/2023/10/Grilled-T-Bone-Steak-FI-500x500.jpg',
        },
        {
            id: 65,
            name: 'Porterhouse Steak',
            description:
                'Similar to the T-bone but with a larger portion of tenderloin, offering a combination of tender and flavorful cuts.',
            price: 950,
            category: 'Steak',
            imageUrl:
                'https://www.allrecipes.com/thmb/U1ub7wui1oayjFZ3NsTX0jempKw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/16536-perfect-porterhouse-steak-DDMFS-4x3-3068-19296120c3d24724a68199f7726cc65a.jpg',
        },
        {
            id: 71,
            name: 'Chicken Tikka',
            description:
                'Marinated chicken pieces grilled to perfection with a blend of spices and yogurt.',
            price: 350,
            category: 'BBQ',
            imageUrl:
                'https://obanhotel.pk/wp-content/uploads/2024/04/bestchickentikkainlahore.jpg',
        },
        {
            id: 72,
            name: 'Malai Tikka',
            description:
                'Tender chicken pieces marinated in a creamy blend of yogurt, cream, and spices, then grilled.',
            price: 380,
            category: 'BBQ',
            imageUrl:
                'https://myborosil.com/cdn/shop/articles/Chicken-malai-tikka_1.jpg?v=1670840057',
        },
        {
            id: 73,
            name: 'Malai Boti',
            description:
                'Succulent chunks of chicken marinated in a rich, creamy sauce and grilled to a golden perfection.',
            price: 370,
            category: 'BBQ',
            imageUrl: 'https://hamariweb.com/recipes/images/recipeimages/10957.jpg',
        },
        {
            id: 74,
            name: 'Bihari Boti',
            description:
                'Spicy and tender beef cubes marinated with traditional Bihari spices and slow-cooked on the grill.',
            price: 400,
            category: 'BBQ',
            imageUrl:
                'https://www.magtheweekly.com/assets/uploads/updates/2020-07-23/9670_9864174_updates.jpg',
        },
        {
            id: 75,
            name: 'Dhaga Kabab',
            description:
                'Minced meat skewers seasoned with aromatic spices, wrapped with a thread-like layer, and grilled.',
            price: 420,
            category: 'BBQ',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZ1tOOmJnxtlXMOLioVWso3CueGZtEu-t9Q&s',
        },
        {
            id: 76,
            name: 'Chandan Kabab',
            description:
                'Aromatic beef kababs marinated with spices and sandalwood essence, grilled to a smoky finish.',
            price: 450,
            category: 'BBQ',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8zytwpbKnlkAe1bkUBnpm7Oxd3u4L20yKiA&s',
        },
        {
            id: 77,
            name: 'Seekh Kebabs',
            description:
                'Minced meat mixed with spices and herbs, shaped onto skewers, and grilled to a juicy perfection.',
            price: 380,
            category: 'BBQ',
            imageUrl:
                'https://www.allrecipes.com/thmb/nqBDLi0NrrYCm464cTH7jhxv9_I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8145753-5f66429f57af4a62aade3adf71dc28d3.jpg',
        },
        {
            id: 78,
            name: 'Tandoori Chicken',
            description:
                'Chicken pieces marinated in a spicy yogurt mixture and cooked in a tandoor for a smoky flavor.',
            price: 360,
            category: 'BBQ',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0dtuGiPhd3bowXxrbe9OyigH-M76VDV0nA&s',
        },
        {
            id: 79,
            name: 'Shami Kabab',
            description:
                'Spiced minced meat patties with a blend of lentils, herbs, and spices, shallow-fried to a crisp.',
            price: 340,
            category: 'BBQ',
            imageUrl:
                'https://img-global.cpcdn.com/recipes/a0a9b7cf9cfdeaa5/400x400cq70/photo.jpg',
        },
        {
            id: 80,
            name: 'Kofta Kebab',
            description:
                'Ground meat mixed with spices and herbs, shaped into balls or patties, and grilled to perfection.',
            price: 390,
            category: 'BBQ',
            imageUrl:
                'https://maureenabood.com/wp-content/uploads/2022/02/Kofta-bites-hztl-Maureen-Abood-jpg-webp.webp',
        },
        {
            id: 81,
            name: 'Gulab Jamun',
            description:
                'Deep-fried dough balls soaked in a sweet rosewater syrup, served warm.',
            price: 180,
            category: 'Dessert',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrUiq7t8sHE-VrHnewy73EaBTxjqDneef4Aw&s',
        },
        {
            id: 82,
            name: 'Rasgulla',
            description:
                'Soft, spongy cheese balls soaked in a light sugar syrup, perfect for a sweet treat.',
            price: 200,
            category: 'Dessert',
            imageUrl: 'https://kfoods.com/images1/newrecipeicon/rasgulla_5819.jpg',
        },
        {
            id: 83,
            name: 'Jalebi',
            description:
                'Crispy, spiraled pastries soaked in a saffron-infused sugar syrup, served warm.',
            price: 150,
            category: 'Dessert',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrON2qFBUb-7ad3yo-vW9GHoc0WKUmf28wWw&s',
        },
        {
            id: 84,
            name: 'Kheer',
            description:
                'A creamy rice pudding flavored with cardamom and garnished with nuts and raisins.',
            price: 170,
            category: 'Dessert',
            imageUrl:
                'https://shivanilovesfood.com/wp-content/uploads/2024/01/Creamy-Kheer-4.jpg',
        },
        {
            id: 85,
            name: 'Ras Malai',
            description:
                'Creamy, spongy cheese patties served in a sweet, flavored milk sauce with cardamom and saffron.',
            price: 220,
            category: 'Dessert',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRAo3kz8rMjy7saXJWEjopLUr3Arq6h1TMaQ&s',
        },
        {
            id: 86,
            name: 'Kulfi',
            description:
                'Traditional Indian ice cream made with milk and flavored with cardamom, saffron, and nuts.',
            price: 190,
            category: 'Dessert',
            imageUrl:
                'https://static.toiimg.com/thumb/84786580.cms?imgsize=157368&width=800&height=800',
        },
        {
            id: 87,
            name: 'Baklava',
            description:
                'Layered pastry filled with nuts and sweetened with honey or syrup.',
            price: 210,
            category: 'Dessert',
            imageUrl:
                'https://kfoods.com/images1/newrecipeicon/baklava-sweets_12382.jpg',
        },
        {
            id: 88,
            name: 'Carrot Halwa',
            description:
                'Sweet, spiced carrot pudding cooked with milk and ghee, garnished with nuts.',
            price: 200,
            category: 'Dessert',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8a3etmosJwcuzsZoR8LU2Oo_t1wupW_X4Gw&s',
        },
        {
            id: 89,
            name: 'Cheesecake',
            description:
                'Creamy, rich cheesecake with a graham cracker crust and a variety of toppings.',
            price: 250,
            category: 'Dessert',
            imageUrl:
                'https://www.allrecipes.com/thmb/M45_4DyClqVemGPcD0yZUbBHVH8=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/17410_BestNo-BakeCheesecake_4x3_CD_556161-4x3-74185af73481413986a2d5ff3eec071b.jpg',
        },
        {
            id: 90,
            name: 'Mango Sorbet',
            description:
                'A refreshing, fruity sorbet made with ripe mangoes, perfect for a light dessert.',
            price: 180,
            category: 'Dessert',
            imageUrl:
                'https://img.buzzfeed.com/video-api-prod/assets/64db5851b24c4f83a4e0ce4f91af4200/FB_2_.jpg',
        },
        {
            id: 91,
            name: 'Butter Chicken',
            description:
                'Tender chicken pieces cooked in a rich, creamy tomato-based sauce with butter and spices.',
            price: 350,
            category: 'Indian',
            imageUrl:
                'https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400',
        },
        {
            id: 92,
            name: 'Chicken Biryani',
            description:
                'A flavorful rice dish with spiced chicken, saffron, and a blend of aromatic spices.',
            price: 400,
            category: 'Indian',
            imageUrl:
                'https://www.awesomecuisine.com/wp-content/uploads/2007/10/Chicken-Biryani_resized-500x436.jpg',
        },
        {
            id: 93,
            name: 'Paneer Tikka',
            description:
                'Marinated cubes of paneer (Indian cottage cheese) grilled to perfection with spices.',
            price: 280,
            category: 'Indian',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2WY2YmIJtXrpmDToEHwJIOAcyBefjpFwXg&s',
        },
        {
            id: 94,
            name: 'Rogan Josh',
            description:
                'A traditional Kashmiri lamb curry cooked in a spicy and aromatic gravy.',
            price: 420,
            category: 'Indian',
            imageUrl:
                'https://static.toiimg.com/thumb/53192600.cms?imgsize=418831&width=800&height=800',
        },
        {
            id: 95,
            name: 'Chole Bhature',
            description:
                'Spicy chickpea curry served with deep-fried bread known as bhature.',
            price: 250,
            category: 'Indian',
            imageUrl:
                'https://en-media.thebetterindia.com/uploads/2022/08/294156779_1082267416022212_8006411537588067133_n-1_11zon-1660981126.jpg',
        },
        {
            id: 96,
            name: 'Dal Makhani',
            description:
                'A creamy and savory lentil dish cooked with butter and cream, seasoned with spices.',
            price: 300,
            category: 'Indian',
            imageUrl:
                'https://www.funfoodfrolic.com/wp-content/uploads/2023/04/Dal-Makhani-Blog-500x375.jpg',
        },
        {
            id: 97,
            name: 'Palak Paneer',
            description:
                'Cottage cheese cubes cooked in a spiced spinach gravy, a popular vegetarian dish.',
            price: 290,
            category: 'Indian',
            imageUrl:
                'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/palak-paneer-recipe.jpg',
        },
        {
            id: 98,
            name: 'Aloo Gobi',
            description:
                'A dry curry made with potatoes and cauliflower, seasoned with spices and herbs.',
            price: 230,
            category: 'Indian',
            imageUrl:
                'https://niksharmacooks.com/wp-content/uploads/2022/11/AlooGobiDSC_5234.jpg',
        },
        {
            id: 99,
            name: 'Samosa',
            description:
                'Crispy pastry filled with spiced potatoes, peas, and herbs, served with chutney.',
            price: 150,
            category: 'Indian',
            imageUrl:
                'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg',
        },
        {
            id: 100,
            name: 'Naan',
            description:
                'Soft and fluffy Indian bread, often served with curries and stews.',
            price: 70,
            category: 'Indian',
            imageUrl:
                'https://saltedmint.com/wp-content/uploads/2024/01/Naan-Bread-2.jpg',
        },
        {
            id: 121,
            name: 'Margherita Pizza',
            description:
                'Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.',
            price: 280,
            category: 'Pizza',
            imageUrl:
                'https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067',
        },
        {
            id: 122,
            name: 'Pepperoni Pizza',
            description:
                'A savory pizza topped with pepperoni slices, mozzarella cheese, and marinara sauce.',
            price: 300,
            category: 'Pizza',
            imageUrl:
                'https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg',
        },
        {
            id: 123,
            name: 'BBQ Chicken Pizza',
            description:
                'Grilled chicken pieces, BBQ sauce, red onions, and cilantro on a mozzarella base.',
            price: 320,
            category: 'Pizza',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBMwJ3-m-uBEYwW-anpN4lX8mZyGw26C4NAg&s',
        },
        {
            id: 124,
            name: 'Vegetarian Pizza',
            description:
                'Loaded with a variety of fresh vegetables including bell peppers, onions, mushrooms, and olives.',
            price: 290,
            category: 'Pizza',
            imageUrl:
                'https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg',
        },
        {
            id: 125,
            name: 'Hawaiian Pizza',
            description: 'Pizza topped with ham, pineapple, and mozzarella cheese.',
            price: 310,
            category: 'Pizza',
            imageUrl:
                'https://www.kingarthurbaking.com/sites/default/files/2020-03/hawaiian-pizza.jpg',
        },
        {
            id: 126,
            name: 'Four Cheese Pizza',
            description:
                'A rich blend of mozzarella, cheddar, parmesan, and blue cheese on a crisp crust.',
            price: 330,
            category: 'Pizza',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKe64dGQqXuzACczrUWWQDk1YIgCsFvjiMDg&s/images/four-cheese-pizza.jpg',
        },
        {
            id: 127,
            name: 'Meat Lovers Pizza',
            description:
                'A hearty pizza topped with a variety of meats including sausage, bacon, and pepperoni.',
            price: 340,
            category: 'Pizza',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhdgytl-kJhJeNpDtElgNjtxXBPCqF5APlQ&s',
        },
        {
            id: 128,
            name: 'Pesto Chicken Pizza',
            description:
                'Pizza topped with pesto sauce, grilled chicken, sun-dried tomatoes, and mozzarella cheese.',
            price: 310,
            category: 'Pizza',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqArRi5ATuRJH6LFSS4B_8IjKofB2xI27iRw&sg',
        },
        {
            id: 129,
            name: 'Buffalo Chicken Pizza',
            description:
                'Spicy buffalo chicken with ranch dressing, mozzarella cheese, and celery.',
            price: 320,
            category: 'Pizza',
            imageUrl:
                'https://www.thespruceeats.com/thmb/bFLeGj1LnKO9ow7XIcddeRovVQU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-buffalo-chicken-pizza-8580296-hero-01-45dad919df034cc3bf73d774250e44d2.jpg',
        },
        {
            id: 130,
            name: 'Seafood Pizza',
            description:
                'A delicious pizza topped with shrimp, calamari, and anchovies on a garlic cream base.',
            price: 350,
            category: 'Pizza',
            imageUrl:
                'https://mymoorishplate.com/wp-content/uploads/2020/07/Moroccan-Pizza-7-500x500.jpg',
        },
        {
            id: 131,
            name: 'Burger',
            description:
                'A classic beef patty burger with lettuce, tomato, cheese, and pickles, served on a sesame seed bun.',
            price: 250,
            category: 'Western',
            imageUrl:
                'https://campingfoodrecipes.com/wp-content/uploads/2023/05/simple-burger-recipe-no-breadcrumbs.jpg',
        },
        {
            id: 132,
            name: 'Cheeseburger',
            description:
                'A beef patty topped with melted cheese, lettuce, tomato, and pickles, served on a soft bun.',
            price: 270,
            category: 'Western',
            imageUrl:
                'https://www.recipetineats.com/tachyon/2022/08/Stack-of-cheeseburgers.jpg',
        },
        {
            id: 133,
            name: 'Chicken Nuggets',
            description:
                'Breaded and fried chicken pieces served with a choice of dipping sauces.',
            price: 200,
            category: 'Western',
            imageUrl:
                'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenNuggets.webp',
        },
        {
            id: 134,
            name: 'French Fries',
            description: 'Crispy golden fries served hot with a sprinkle of salt.',
            price: 150,
            category: 'Western',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtQU2Pf3U32qKKJLQB0tY83xthaYEYTatRw&s',
        },
        {
            id: 135,
            name: 'Hot Dog',
            description:
                'A grilled sausage served in a bun with mustard and ketchup.',
            price: 180,
            category: 'Western',
            imageUrl:
                'https://www.seriouseats.com/thmb/QJZXQHDXBfTiUSKstQ1uskJc31g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-best-grilled-hot-dogs-recipe-hero-02-9d245c0d43874a3da13a7228682b0dce.jpg',
        },
        {
            id: 136,
            name: 'Chicken Sandwich',
            description:
                'A breaded chicken fillet served with lettuce, tomato, and mayo on a bun.',
            price: 290,
            category: 'Western',
            imageUrl:
                'https://i0.wp.com/www.shanazrafiq.com/wp-content/uploads/2020/12/6-Grilled-Chicken-Sandwich-6.jpg?fit=1110%2C832&ssl=1',
        },
        {
            id: 137,
            name: 'Pizza',
            description:
                'A classic pizza topped with cheese, tomato sauce, and a choice of toppings.',
            price: 350,
            category: 'Western',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s',
        },
        {
            id: 138,
            name: 'Onion Rings',
            description:
                'Crispy, breaded onion rings served with a side of dipping sauce.',
            price: 160,
            category: 'Western',
            imageUrl:
                'https://kristineskitchenblog.com/wp-content/uploads/2022/03/crispy-air-fryer-onion-rings-recipe-0775.jpg',
        },
        {
            id: 139,
            name: 'Shakes',
            description:
                'Creamy milkshakes available in various flavors like chocolate, vanilla, and strawberry.',
            price: 200,
            category: 'Western',
            imageUrl:
                'https://static.vecteezy.com/system/resources/previews/034/039/975/non_2x/three-tasty-fresh-milk-shakes-with-berries-and-mint-on-black-table-generated-by-artificial-intelligence-free-photo.jpg',
        },
        {
            id: 140,
            name: 'Tenders',
            description:
                'Breaded and fried chicken tenders served with a choice of sauces.',
            price: 220,
            category: 'Western',
            imageUrl:
                'https://www.barleyandsage.com/wp-content/uploads/2022/03/buttermilk-chicken-tenders-0228.jpg',
        },
        {
            id: 141,
            name: 'Ribeye Steak',
            description:
                'A well-marbled and flavorful cut of beef with a rich, juicy taste.',
            price: 750,
            category: 'Western',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjQXzikTs9zWyuWZJSUqjOWP0Ld0kUZglFg&s',
        },
        {
            id: 142,
            name: 'Filet Mignon',
            description:
                'A tender and buttery cut of beef, known for its exceptional tenderness.',
            price: 950,
            category: 'Western',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8q-HJSSIlG83pehkdtsg7XKFNKoPHXiMxA&s',
        },
        {
            id: 143,
            name: 'New York Strip',
            description:
                'A juicy and flavorful cut of beef with a good balance of tenderness and chewiness.',
            price: 800,
            category: 'Western',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-r3ABRb8oitmrkM2ii1dQRteXj_Kddm5YkQ&s',
        },
        {
            id: 144,
            name: 'T-Bone Steak',
            description:
                'A large cut that includes a T-shaped bone with meat on both sides, offering a mix of tenderness and flavor.',
            price: 850,
            category: 'Western',
            imageUrl:
                'https://www.vindulge.com/wp-content/uploads/2023/10/Grilled-T-Bone-Steak-FI-500x500.jpg',
        },
        {
            id: 145,
            name: 'Porterhouse Steak',
            description:
                'Similar to the T-bone but with a larger portion of tenderloin, offering a combination of tender and flavorful cuts.',
            price: 950,
            category: 'Western',
            imageUrl:
                'https://www.allrecipes.com/thmb/U1ub7wui1oayjFZ3NsTX0jempKw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/16536-perfect-porterhouse-steak-DDMFS-4x3-3068-19296120c3d24724a68199f7726cc65a.jpg',
        },
    ];

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredMenu = allMenus
        .filter((item) => selectedMenu === 'All' || item.category === selectedMenu)
        .filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );
    const handleToggleClick = () => {
        setIsExpanded(!isExpanded);
    };
    // const filteredMenu =
    //   selectedMenu === 'All'
    //     ? allMenus
    //     : allMenus.filter((item) => item.category === selectedMenu);
    return (
        <div className="container">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search dishes..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                />
            </div>

            <div className="menu-buttons-container">
                <div
                    className={`menu-buttons ${isExpanded ? 'expanded' : 'collapsed'}`}
                >
                    <button
                        className={`menu-button ${selectedMenu === 'All' ? 'active' : ''}`}
                        onClick={() => handleMenuClick('All')}
                    >
                        All
                    </button>
                    <button
                        className={`menu-button ${selectedMenu === 'Desi' ? 'active' : ''}`}
                        onClick={() => handleMenuClick('Desi')}
                    >
                        Desi
                    </button>
                    <button
                        className={`menu-button ${selectedMenu === 'Karahi' ? 'active' : ''
                            }`}
                        onClick={() => handleMenuClick('Karahi')}
                    >
                        Karahi
                    </button>
                    <button
                        className={`menu-button ${selectedMenu === 'Salad' ? 'active' : ''
                            }`}
                        onClick={() => handleMenuClick('Salad')}
                    >
                        Salad
                    </button>
                    {/* Add more buttons here */}
                    {/* Only show the first 4 buttons initially */}
                    {isExpanded && (
                        <>
                            <button
                                className={`menu-button ${selectedMenu === 'Drinks' ? 'active' : ''
                                    }`}
                                onClick={() => handleMenuClick('Drinks')}
                            >
                                Drinks
                            </button>
                            <button
                                className={`menu-button ${selectedMenu === 'Fast Food' ? 'active' : ''
                                    }`}
                                onClick={() => handleMenuClick('Fast Food')}
                            >
                                Fast Food
                            </button>
                            <button
                                className={`menu-button ${selectedMenu === 'Steak' ? 'active' : ''
                                    }`}
                                onClick={() => handleMenuClick('Steak')}
                            >
                                Steak
                            </button>
                            <button
                                className={`menu-button ${selectedMenu === 'BBQ' ? 'active' : ''
                                    }`}
                                onClick={() => handleMenuClick('BBQ')}
                            >
                                BBQ
                            </button>
                            <button
                                className={`menu-button ${selectedMenu === 'Dessert' ? 'active' : ''
                                    }`}
                                onClick={() => handleMenuClick('Dessert')}
                            >
                                Dessert
                            </button>
                            <button
                                className={`menu-button ${selectedMenu === 'Indian' ? 'active' : ''
                                    }`}
                                onClick={() => handleMenuClick('Indian')}
                            >
                                Indian
                            </button>
                            <button
                                className={`menu-button ${selectedMenu === 'Western' ? 'active' : ''
                                    }`}
                                onClick={() => handleMenuClick('Western')}
                            >
                                Western
                            </button>
                            <button
                                className={`menu-button ${selectedMenu === 'Pizza' ? 'active' : ''
                                    }`}
                                onClick={() => handleMenuClick('Pizza')}
                            >
                                Pizza
                            </button>
                        </>
                    )}
                </div>
                <button className="toggle-button" onClick={handleToggleClick}>
                    <span>{isExpanded ? '▲' : '▼'}</span>
                </button>
            </div>

            <div className="menu-items">
                {filteredMenu.map((item) => (
                    <div key={item.id} className="menu-item">
                        <img src={item.imageUrl} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p
                            style={{ fontWeight: '600', fontSize: '20px', color: '#5E3FBE' }}
                        >
                            Price: ₹{item.price}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuComponent;
