import { fetchData } from "./poke-api.js";

export async function pokeProcess() {
  const pokeData = await fetchData();

  const pokeArr = await Promise.all(
    pokeData.results.map(async (pokeObj) => {
      const response = await axios(pokeObj);
      return response.data;
    })
  );
  // console.log(pokeArr[0])

  pokeArr.forEach((pokemon) => {
    const i = pokemon.types.flatMap((obj) => obj.type.name).toString();
    const pokeName = pokemon.name;
    const upperCaseName = pokeName[0].toUpperCase() + pokeName.slice(1);
    const pokeDiv = document.querySelector(".pokeList");
    const pokeList = document.createElement("p");
    const pokeImg = document.createElement("img");

    pokeImg.src = pokemon.sprites.front_default;
    pokeList.classList.add(...i);
    pokeList.innerHTML = upperCaseName;
    pokeList.appendChild(pokeImg);
    pokeDiv.appendChild(pokeList);
  });
}
