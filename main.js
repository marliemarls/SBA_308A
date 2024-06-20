import { fetchData } from "./poke-api.js";
import { categorizePoke} from "./functionality.js"
import { pokeCry } from "./extra.js"


const fetchingData = fetchData();
const data = await fetchData()
const pokeTypArr = ["grass", "fire", "water", "psychic"];
const categoriesOfPoke = await categorizePoke()
const pokeSounds = pokeCry()


