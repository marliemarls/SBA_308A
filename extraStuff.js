import { fetchData } from "./poke-api.js";

const pokeData = await fetchData();

export async function addingAudio() {
  const pokeArr = await Promise.all(
    pokeData.results.map(async (pokeObj) => {
      const response = await axios(pokeObj);
      console.log(response.data.cries.legacy)
      return response.data;
    })
  );
  console.log(pokeArr);
}
