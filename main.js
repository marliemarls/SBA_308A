import { fetchData } from "./poke-api.js";
import { pokeProcess } from "./poke-img.js";
import { addingAudio } from "./extraStuff.js";

const fetchingData = fetchData();
const pokeProcessing = pokeProcess();
const audioAdded = addingAudio();


const pokeTypArr = ["grass", "fire", "water", "psychic"];
const pokeList = document.querySelector(".pokeList");




const showBtn = document.querySelector(".showAllBtn");
showBtn.addEventListener("click", (e) => {
    // console.log(e)
    pokeList.innerHTML = '';
    pokeTypArr.forEach((pokeType) => {
        let pokes = document.getElementsByClassName(...pokeType)
        let newPokeList = document.createElement("div")
        newPokeList.innerHTML = `<b>${pokes}</b>`;
        console.log(newPokeList)
        pokeList.append(newPokeList)
    })
});


// const categoriesOfPoke = document.querySelector(".btn")
// categoriesOfPoke.addEventListener("click", (event) => {
//     event.preventDefault()
//     console.log(event)
// })


// function catergorizePoke(pokeType) {
//   pokeList.innerHTML = "";
//   let filtered = pokeTypArr.filter((poke) => {
//     poke === pokeType;
//   });
//   filtered.forEach((poke) => {
//     let newPokeList = document.createElement("div");
//     let pokes = document.getElementsByClassName(poke);
//     newPokeList.innerHTML = `<b>${pokes}</b>`;
//     pokeList.append(newPokeList);
//   });
// }

// catergorizePoke();
