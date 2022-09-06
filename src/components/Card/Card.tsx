import { CardQuery } from "../../generated/graphql";

const Card = ({ pokemon }: CardQuery) => {
  if (!pokemon) return null;

  return (
    <section>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image!} alt={pokemon.name!} />
    </section>
  );
};

export default Card;
