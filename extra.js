import { fetchData } from "./poke-api.js";

export async function pokeCry(){
    const pokeAudio = document.querySelector("Mewto")
    pokeAudio.addEventListener("click", (event) => {
        event.preventDefault()
        event ? console.log("yup") : console.log("nope")
    })
    console.log(pokeAudio)
}

// pokeCry()