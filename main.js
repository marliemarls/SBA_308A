import { fetchData } from "./poke-api.js";
import { pokeProcess } from "./poke-img.js";
import { catergorizePoke } from "./functionality.js"
import { addingAudio } from "./extraStuff.js";

const fetchingData = fetchData()
const pokeProcessing = pokeProcess()
const pokesCategory = catergorizePoke()
const audioAdded = addingAudio()