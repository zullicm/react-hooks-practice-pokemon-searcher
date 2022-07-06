import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {

  function handleSubmit(e){
    e.preventDefault()
    const newPokemonObj = {
      "name": e.target.name.value,
      "hp": e.target.hp.value,
      "sprites": {
        "front": e.target.frontUrl.value,
        "back": e.target.backUrl.value
      }
    }
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemonObj)
    })
     .then(res => res.json())
     .then(data => addPokemon(data))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
