import React from "react";
import Card from "./Card";
import Delivery from "../images/delivery.png";
import Deals from "../images/deals.png";
import Contact from "../images/contact.png";

const ServiceCards = () => {
  const cardsData = [
    { id: 1, title: "We Deliver", image: Delivery },
    { id: 2, title: "Hot Deals", image: Deals },
    { id: 3, title: "24/7 Contacts", image: Contact },
  ];

  return (
    <div className="container mx-auto flex justify-center items-center h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cardsData.map((card) => (
          <Card key={card.id} title={card.title} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
