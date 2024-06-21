import { fetchData } from "./poke-api.js";
import { pokeProcess } from "./poke-img.js";

const pokeData = await fetchData();
const pokeProcessing = await pokeProcess();
const pokeTypArr = ["grass", "fire", "water", "psychic"];
const pokeList = document.querySelector(".pokeList");
let pokes = document.getElementsByClassName("fire");
const data = pokeData.results
// console.log(data)


//i dont even know honestly 
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

export async function categorizePoke() {

  pokeTypArr.forEach((el) => {

    const btn = document.querySelector(`.${el}`);
    // console.log(btn)
    btn.addEventListener("click", (e) => {
      let str = e.target.className;
      let newArr = str.split(" ");
      if(newArr[1] === el) {
        
      }
    });    
  });


  return "im done";
}