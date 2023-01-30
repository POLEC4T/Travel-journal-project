export default function TravelCard(props) {
    
    return (
        <div className="travel-card">
            <img src={props.imageUrl} alt="travel destination" />
            <div className="travel-card-content">
                <div className="google-map-container"> 
                    <p className="country">{props.location}</p>
                    <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h2 className="title">{props.title}</h2>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    );

    

}

// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas"