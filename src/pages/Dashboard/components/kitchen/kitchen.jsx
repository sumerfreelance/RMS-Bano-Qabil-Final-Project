import React from 'react';
import './kitchen.css';
// import { Link } from 'react-router-dom';

const Kitchen = () => {
    const KitchenData = [
        {
            id: 1,
            name: 'Desi',
            description:
                'Authentic flavors, traditional spices, and aromatic dishes straight from the heart of Desi cuisine. Experience a taste of home!',
            image:
                'https://www.shutterstock.com/image-photo/desi-cuisine-260nw-2434293289.jpg',
        },
        {
            id: 2,
            name: 'Drinks Bar',
            description:
                'Refreshing cocktails, mocktails, and exotic beverages crafted to perfection. Sip, relax, and elevate your bar experience!',
            image:
                'https://c8.alamy.com/comp/E1AMAM/close-up-view-of-colorful-cocktails-on-at-apas-bar-counter-madrid-E1AMAM.jpg',
        },
        {
            id: 3,
            name: 'Salad',
            description:
                'Fresh, crisp greens, vibrant veggies, and flavorful dressings combine to create a healthy and delicious salad experience.',
            image:
                'https://media.istockphoto.com/id/530957855/photo/italian-food-collage.jpg?s=612x612&w=0&k=20&c=-c6jflrL5rHz0ZbSY_EMVSXZgDgfkhKZn1naGYLfzBU=',
        },
        {
            id: 4,
            name: 'FastFood',
            description:
                'Satisfy your cravings with mouth-watering burgers, crispy fries, and classic fast food favorites, served fresh and fast.',
            image:
                'https://static.vecteezy.com/system/resources/thumbnails/021/939/720/small/fast-food-set-hamburger-cheeseburger-cola-french-fries-burger-and-hamburger-ai-photo.jpg',
        },
        {
            id: 5,
            name: 'BBQ',
            description:
                'Smoky, tender meats grilled to perfection, bursting with rich flavors and spices. A true BBQ feast for meat lovers!',
            image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt9BaTBiN0AS03cO6Enmf5iIuK8VC8XcdMUQ&s',
        },
        {
            id: 6,
            name: 'Pizza',
            description:
                'Deliciously cheesy, hot, and fresh pizzas with your favorite toppings. A slice of heaven in every bite!',
            image:
                'https://images.stockcake.com/public/c/1/d/c1d3de7a-1b60-4a6d-a9d9-797698558535_large/busy-pizza-kitchen-stockcake.jpg',
        },
        {
            id: 7,
            name: 'Indian',
            description:
                'Traditional Indian dishes packed with rich spices and bold flavors. A culinary journey through India’s vibrant cuisine.',
            image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlvb6iKAXy88xuP_KpklnEI-YavqwERw6liQ&s',
        },
        {
            id: 8,
            name: 'Western',
            description:
                'Classic Western dishes featuring hearty portions, bold flavors, and modern twists on your favorite comfort foods.',
            image:
                'https://www.shutterstock.com/image-photo/cuisine-different-countries-western-eastern-260nw-384573535.jpg',
        },
        {
            id: 9,
            name: 'Dessert',
            description:
                'Sweet treats and indulgent desserts to satisfy your cravings. The perfect ending to any meal.',
            image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_dunBRlhYJbX3CoBtiDeIkHpHSMR_J6wmQ&s',
        },
    ];

    return (
        <div className="container">
            <div className="menu-items">
                {KitchenData.map((item) => (
                    <div key={item.id} className="menu-item">
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <button className="menu-button">Menu</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Kitchen;
