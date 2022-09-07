import React, { useState } from "react";
import CardLaunchpad from "../Card";
import Input from "../Input";

const PokemonForm = () => {
  const [name, setName] = useState("");
  return (
    <>
      <Input onUpdate={setName} />
      <CardLaunchpad name={name} />
    </>
  );
};
export default PokemonForm;
