import { fetchData } from "./poke-api.js";
import { pokeProcess } from "./poke-img.js";

const pokeData = await fetchData();
const pokeProcessing = await pokeProcess();
const pokeTypArr = ["grass", "fire", "water", "psychic"];
const pokeList = document.querySelector(".pokeList");
let pokes = document.getElementsByClassName("fire");

// function showAll () {
//   pokeList.innerHTML = '';
//   pokeTypArr.forEach((poke) => {
//       let pokes = document.getElementsByClassName(...poke)
//       let newPokeList = document.createElement("div")
//       newPokeList.innerHTML = `<b>${pokes}</b>`;
//       pokeList.append(newPokeList)
//   })
// }

// showAll()

export async function categorizePoke(type) {
// const pokeType = type
//   console.log(pokeTypArr)

  pokeTypArr.forEach((el) => {

    const btn = document.querySelector(`.${el}`);
    console.log(btn)
    btn.addEventListener("click", (e) => {
      let str = e.target.className;
      let newArr = str.split(" ");
      console.log(newArr)
      const evEl = e
    });    
  });


  return "im done";
}