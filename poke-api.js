//this file is to import data from the pokemon api which i will sort thorugh in a separate file.

export async function fetchData(){
 try{
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=149");

 if(response.status !== 200) {
    throw new Error;
 }
 return response.data
 } catch (err) {
    console.error("Error: " + err)
}
} 