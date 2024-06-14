//this file is to import data from the pokemon api which i will sort thorugh in a separate file.

export async function fetchData() {
  try {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((response) => response.json())
      .then((data) => console.log(data));
  } catch (err) {
    console.error("Error: " + err);
  }
}
