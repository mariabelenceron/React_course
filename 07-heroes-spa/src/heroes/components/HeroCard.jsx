import React from "react";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="row">
      <div className="card">
        <div className="row no-gutters">
          <img src="" alt="card-img" alt={superhero} />
        </div>
      </div>
    </div>
  );
};
