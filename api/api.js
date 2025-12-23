import {get} from '../home/home.js'
export let api = 'https://www.course-api.com/javascript-store-products'

export async function getData() { 
    try { 
        const { data } = await axios.get(api); 
        get(data); 
    } catch (error) { 
        console.log(error); 
    } 
}