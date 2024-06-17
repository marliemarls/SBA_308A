import { fetchData } from "./poke-api.js";

export async function pokeProcess() {
  const pokeData = await fetchData();

  const pokeArr = await Promise.all(
    pokeData.results.map(async (pokeObj) => {
      const response = await axios(pokeObj);
      return response.data;
    })
  );

  pokeArr.forEach((pokemon) => {
    const i = pokemon.types.flatMap((obj) => obj.type.name);
    const pokeName = pokemon.name;
    const pokeID = pokemon.id
    const upperCaseName = pokeName[0].toUpperCase() + pokeName.slice(1);
    const pokeDiv = document.querySelector(".pokeList");
    const pokeList = document.createElement("p");
    const pokeInfo = document.createElement("p");
    const pokeImg = document.createElement("img");
    const audioEl = document.createElement("audio")
    const audioStr = pokeID + ".ogg"
    audioEl.src = `./audio/${audioStr}`;
    audioEl.type = "audio"

    pokeImg.src = pokemon.sprites.front_default;
    pokeList.classList.add(...i);
    pokeList.id = (pokeID)
    pokeInfo.innerHTML = upperCaseName;
    pokeList.append(pokeImg, pokeInfo, audioEl);
    pokeDiv.appendChild(pokeList);
  });
}
