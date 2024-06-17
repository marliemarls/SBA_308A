import { fetchData } from "./poke-api.js";

const pokeData = await fetchData();

export async function addingAudio() {
  const pokeArr = await Promise.all(
    pokeData.results.map(async (pokeObj) => {
      const response = await axios(pokeObj);
      const pokeId = response.data.id;
      const pokeName = response.data.name;
      // const pokeListDiv = document.querySelector(".pokeList")
      // const pokeInfo = document.getElementById(`${pokeName}`);
      // pokeListDiv.append(pokeInfo)
          // console.log(response.data.name)
      // return response.data;
    })
  );
//   console.log(pokeArr);
}
