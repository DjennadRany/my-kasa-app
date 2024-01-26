<<<<<<< HEAD
// AccommodationDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import accommodationsData from "../data/accommodation.json";
import Carousel from "../components/Carousel";
import StarRating from "../components/StarRating";
import Accordion from "../components/Accordion";
import "../styles/tamplets/AccommodationDetails.scss";

function AccommodationDetails() {
  const { id } = useParams();
  const selectedAccommodation = accommodationsData.find(
    (accommodation) => accommodation.id === id
  );

  if (!selectedAccommodation) {
    return (
      <div>
        <h2>Accommodation Details Page</h2>
        <p>Accommodation not found.</p>
      </div>
    );
  }

  const {
    pictures,
    title,
    location,
    tags,
    host,
    description,
    equipments,
    rating,
  } = selectedAccommodation;
  const parsedRating = parseInt(rating);
  return (
    <div className="contenaire">
      <Carousel images={pictures} />
      <div className="souContAB">
        <div className="souContA">
          <h2>{title}</h2>
          <p>{location}</p>
          <div className="tags-container">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="description">
            <h3>Description</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="souContB">
          <div className="host-info">
            <h2>{host.name}</h2>
            <div className="host-picture">
              <img src={host.picture} alt={host.name}></img>
            </div>
          </div>
          <div className="stars">
            <StarRating ratingValue={parsedRating} />
          </div>
        </div>
        <div className="description">
  <Accordion title="Description" items={[description]} ></Accordion>
</div>
<div className="equipement">
  <Accordion title="Equipement" items={equipments} />
</div>

       
      </div>
      <div></div>
    </div>
  );
}

export default AccommodationDetails;
=======
// AccommodationDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import accommodationsData from "../data/accommodation.json";
import Carousel from "../components/Carousel";
import StarRating from "../components/StarRating";
import Accordion from "../components/Accordion";
import "../styles/tamplets/AccommodationDetails.scss";

function AccommodationDetails() {
  const { id } = useParams();
  const selectedAccommodation = accommodationsData.find(
    (accommodation) => accommodation.id === id
  );

  if (!selectedAccommodation) {
    return (
      <div>
        <h2>Accommodation Details Page</h2>
        <p>Accommodation not found.</p>
      </div>
    );
  }

  const {
    pictures,
    title,
    location,
    tags,
    host,
    description,
    equipments,
    rating,
  } = selectedAccommodation;
  const parsedRating = parseInt(rating);
  return (
    <div className="contenaire">
      <Carousel images={pictures} />
      <div className="souContAB">
        <div className="souContA">
          <h2>{title}</h2>
          <p>{location}</p>
          <div className="tags-container">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="description">
            <h3>Description</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="souContB">
          <div className="host-info">
            <h2>{host.name}</h2>
            <div className="host-picture">
              <img src={host.picture} alt={host.name}></img>
            </div>
          </div>
          <div className="stars">
            <StarRating ratingValue={parsedRating} />
          </div>
        </div>
        <div className="description">
  <Accordion title="Description" items={[description]} />
</div>
<div className="equipement">
  <Accordion title="Equipement" items={equipments} />
</div>

       
      </div>
      <div></div>
    </div>
  );
}

export default AccommodationDetails;
>>>>>>> cd2e37f32070815140cf13fd8cae1edc3234e864