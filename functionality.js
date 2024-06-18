import { fetchData } from "./poke-api.js";


const pokeData = await fetchData()
const pokeTypArr = ["grass", "fire", "water", "psychic"]

function showAll () {
    pokeList.innerHTML = '';
    pokeTypArr.forEach((poke) => {
        let pokes = document.getElementsByClassName(...poke)
        let newPokeList = document.createElement("div")
        newPokeList.innerHTML = `<b>${pokes}</b>`;
        pokeList.append(newPokeList)
    })
}
showAll()

function categorizePoke(){

}