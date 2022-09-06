import { useCardQuery } from "../../generated/graphql";
import Card from "./Card";

const CardLaunchpad = ({ name }: { name: string }) => {
  const { data, loading } = useCardQuery({
    variables: { name },
  });

  return loading || !data?.pokemon ? (
    <>Loading...</>
  ) : (
    <Card pokemon={data.pokemon} />
  );
};

export default CardLaunchpad;
