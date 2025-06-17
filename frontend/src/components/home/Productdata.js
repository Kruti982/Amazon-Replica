import React from "react";
import Slide from "./Slide";

const Productdata = ({ title }) => {
  const products = [
    {
      id: "product1",
      url: "https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
      title: {
        shortTitle: "Home & Kitchen",
        longTitle: "Pigeon FAVOURITE Electric Kettle (1.5 L, Silver, Black)",
      },
      price: {
        mrp: 1195,
        cost: 625,
        discount: "47%",
      },
      discount: "Extra 10% Off",
      tagline: "Deal of the day",
    },
    {
      id: "product2",
      url: "https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
      title: {
        shortTitle: "Sandwich Makers",
        longTitle: "Flipkart SmartBuy Sandwich 01 Grill (Black)",
      },
      price: {
        mrp: 1499,
        cost: 899,
        discount: "40%",
      },
      discount: "From 99+5% Off",
      tagline: "Pestige, Nova & more",
    },
    {
      id: "product3",
      url: "https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70",
      title: {
        shortTitle: "Fitness Gear",
        longTitle: "AJRO DEAL Resistance Tube (Multicolor)",
      },
      price: {
        mrp: 499,
        cost: 166,
        discount: "66%",
      },
      discount: "Upto 70% Off",
      tagline: "Deal of the Day",
    },
    {
      id: "product4",
      url: "https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
      title: {
        shortTitle: "Smart Watches",
        longTitle: "Molife Sense 500 Smartwatch (Black Strap, Freesize)",
      },
      price: {
        mrp: 6999,
        cost: 4049,
        discount: "42%",
      },
      discount: "Grab Now",
      tagline: "Best Seller",
    },
    {
      id: "product5",
      url: "https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70",
      title: {
        shortTitle: "Trimmers, Dryers & more",
        longTitle: "Nova Professional NHP 8220 Hair Dryer (1800 W, Multicolor)",
      },
      price: {
        mrp: 1899,
        cost: 1124,
        discount: "40%",
      },
      discount: "From ₹499",
      tagline: "Kubra, Nova & more",
    },
  ];

  return (
    <div style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", width: "100%" }}>
      <Slide title={title} products={products} />
    </div>
  );
};

export default Productdata;
