import {get} from '../manage/manage.js'
export let api = 'https://www.course-api.com/javascript-store-products'

export async function getData() { 
    try { 
        const { data } = await axios.get(api); 
        get(data); 
    } catch (error) { 
        console.log(error); 
    } 
}

export async function postUser(data){
        try {
        await axios.post(api, data)
        getData()
    } catch (error) {
        console.error(error);        
    }
}

export async function deleteUser(id) {
    try {
        await axios.delete(`${api}/${id}`)
        getData()
    } catch (error) {
        console.error(error);
    }
    
}

export default async function editUserAPI(id, data) {
    try {
        await axios.put(`${api}/${id}`, data)
        getData()
    } catch (error) {
        console.error(error)
    }
}
