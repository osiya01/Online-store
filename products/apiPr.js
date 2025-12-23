import { initFilters } from '../products/filters.js'

export const api = 'https://www.course-api.com/javascript-store-products'

export async function getData() {
    try {
        const res = await axios.get(api)
        initFilters(res.data)
    } catch (err) {
        console.log(err)
    }
}
