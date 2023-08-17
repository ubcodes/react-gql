import { gql, useQuery } from "@apollo/client"

const GET_CHARACTER = gql`
query GetCharcter($id: ID!) {
    character(id: $id ) {
      name
      id
      image
      episode {
        name
        episode
      }
    }
  }
` 

//useCharacter hook
const useCharacter = (id) => {
    const { data, error, loading } = useQuery(GET_CHARACTER, {
        variables : {
            id
        }
    } );

    return {
        data,
        
    }
}


