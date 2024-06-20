import { fetchData } from "./poke-api.js";
import { pokeProcess } from "./poke-img.js";

const pokeData = await fetchData();
const pokeProcessing = await pokeProcess();
const pokeTypArr = ["grass", "fire", "water", "psychic"];
const pokeList = document.querySelector(".pokeList");
let pokes = document.getElementsByClassName("fire");


export async function categorizePoke() {
  pokeTypArr.forEach((el) => {
    const btn = document.querySelector(".btn", `${el}`);
    btn.addEventListener("click", (e) => {

      let str = e.target.className;
      let newArr = str.split(" ");
      console.log(newArr)
      const evEl = e
    });    
  });


  return "im done";
}