import editUserAPI from '../manage/apiMng.js'

let editModal = document.querySelector('.editModal')
let editForm = document.querySelector('.editForm')
let closeEdit = document.querySelector('.closeEdit')
let currentId = null

export function editUser(elem) {
    currentId = elem.id
    editForm.image.value = elem.fields.image
    editForm.name.value =elem.fields.name
    editForm.price.value = elem.fields.price
    editModal.showModal()
}
closeEdit.onclick = () => editModal.close()
editForm.onsubmit = async (e) => {
    e.preventDefault()
    let formData = Object.fromEntries(new FormData(editForm))
    await editUserAPI(currentId, formData)
    editModal.close()
    editForm.reset()
}