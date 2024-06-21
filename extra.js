import { fetchData } from "./poke-api.js";
const data = fetchData()


//wanted to make it so that the user could click the pictures and hear the pokemons cry, as well as get info about the pokemon, their type and their moves.
//doesnt work fr
export async function pokeCry(){
    const pokeAudio = document.querySelector("p.")
    console.log(pokeAudio)
    pokeAudio.addEventListener("click", (event) => {
        event.preventDefault()
        event ? console.log("yup") : console.log("nope")
    })
    // console.log(pokeAudio)
}

// pokeCry()