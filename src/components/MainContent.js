import TravelCard from "./TravelCard";
import datas from "../datas/travelsData";
import React from "react";


export default function MainContent() {

    const travelCards = datas.map((data) => {
        return (
            <TravelCard 
                {...data}
            />
        );

    });

    console.log(travelCards);

    return (
        <div className="main-content">
            {travelCards}
        </div>
    );
}