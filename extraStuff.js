import { fetchData } from "./poke-api.js";

const pokeData = await fetchData();

export async function addingAudio() {
  const pokeArr = await Promise.all(
    pokeData.results.map(async (pokeObj) => {
      const response = await axios(pokeObj);
      const pokeId = response.data.id
      console.log(response.data)
      return response.data;
    })
  );
//   console.log(pokeArr);
}
