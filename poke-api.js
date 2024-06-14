//this file is to import data from the pokemon api which i will sort thorugh in a separate file.
import axios from "axios"


export default async function fetchData(){
 try{
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
    console.log(response)

 if(response.status !== 200) {
    throw new Error;
 }
 return response.data
 } catch (err) {
    console.error("Error: " + err)
}
} 