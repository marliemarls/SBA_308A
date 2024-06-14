import { fetchData } from "./poke-api.js";

export async function pokeProcess(){
    const pokeData = fetchData()
    const newData = pokeData.then(res => console.log(res))
    console.log(newData)

    // const pokeArr = await Promise.all(pokeData.results.map(async (pokeObj) => {
    //     const response = await pokeObj
    //     return response.data
    // }))
    
    // pokeArr.forEach(pokemon => {
    //     const i = pokemon.types.flatMap((obj)=> obj.type.name);
    //     const pokeDiv = document.getElementById("pokeList");
    //     const pokeList = document.createElement('p');
    //     const pokeImg = document.createElement("img");
    
    
    //     pokeImg.src = pokemon.sprites.front_default
    //     pokeList.classList.add(...i)
    //     pokeList.innerHTML = pokemon.name;
    //     pokeList.appendChild(pokeImg)
    //     pokeDiv.appendChild(pokeList)
    // });
}