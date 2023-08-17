import React from 'react'
import { useQuery, gql } from "@apollo/client"
import "./CharacterList.css"
import { useCharacters } from '../hooks/useCharacters'


// THIS BELOW IS GOTTEN RID OF BECAUSE IT'S HAS BEEN TRANSFERRED TO THE HOOK FOLDER

/* const GET_CHARACTERS  = gql `
query {
    characters{
      results{
        id
        name
        image
        gender
      }
    }
  }
  
` */



export const CharactersList = () => {
   
  //THIS IS ALSO GOTTEN RID OF BECAUSE IT HAS BEEN TAKEN TO THE HOOKS FOLDER
    //here you specify the graphql query you want to create
   /*  const {error, data, loading } = useQuery(GET_CHARACTERS); 

    console.log({ error, loading, data });
 */

    const {error, loading, data} =   useCharacters(); //now we can reuse this hook anywhere we want  

    if(loading) return <div>spinner...</div>

    if(error) return <div>something went wrong</div>

    

   

  return (
    <div className='CharacterList'>
      {data.characters.results.map(character => {
        return <div>
          <img  src={character.image}/>
          <h2>{character.name}</h2>
        </div>
      })}
    </div>
  )
}
