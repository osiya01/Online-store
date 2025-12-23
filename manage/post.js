import { postUser } from '../manage/apiMng.js'

let openModal = document.querySelector('.openModal')
let addModal = document.querySelector('.addModal')
let addForm = document.querySelector('.addForm')
let closeModal = document.querySelector('.closeModal')


closeModal.onclick =()=> addModal.close()
export default openModal.onclick = () => addModal.showModal()


addForm.onsubmit = async (e) =>{
    e.preventDefault()
    let formData = Object.fromEntries(new FormData(addForm))
    formData.status = formData.status === 'true'? true: false;
    postUser(formData)
    addModal.close()
    addForm.reset();
}