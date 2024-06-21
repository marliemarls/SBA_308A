import { fetchData } from "./poke-api.js";
const data = fetchData()

export async function pokeCry(){
    const pokeAudio = document.querySelector("p.psychic")
    console.log(pokeAudio)
    pokeAudio.addEventListener("click", (event) => {
        event.preventDefault()
        event ? console.log("yup") : console.log("nope")
    })
    // console.log(pokeAudio)
}

// pokeCry()