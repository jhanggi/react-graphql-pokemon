import { useCardQuery } from "../../generated/graphql";
import Card from "./Card";

const CardLaunchpad = ({ name }: { name: string }) => {
  const { data, loading, error } = useCardQuery({
    variables: { name },
    skip: !name,
  });

  if (!name) return null;
  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        <>Error: {error}</>
      </p>
    );
  if (!data) throw new Error("Bad state");
  return data.pokemon ? <Card pokemon={data.pokemon} /> : <p>Not found</p>;
};

export default CardLaunchpad;
