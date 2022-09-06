import { gql } from "@apollo/client";

export const CardQueryDocument = gql`
  query Card($name: String!) {
    pokemon(name: $name) {
      id
      name
      image
    }
  }
`;
