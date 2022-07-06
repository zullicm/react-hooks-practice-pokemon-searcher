import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const {id, name, hp, sprites} = pokemon
  const [front, setFront] = useState(true)
  
  function spriteToggle(){
    setFront(!front)
  }

  return (
    <Card>
      <div>
        <div className="image">
          {front ? <img onClick={spriteToggle} src={sprites.front} alt={name} /> : <img onClick={spriteToggle} src={sprites.back} alt={name} />}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
