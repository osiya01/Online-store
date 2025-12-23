import { deleteUser } from "../manage/apiMng.js";
let delModal = document.querySelector(".delModal");
let okBtn = document.querySelector(".okBtn");
let cancelBtn = document.querySelector(".cancelBtn");
let currentId = null;

export function openDeleteModal(id) {
    currentId = id;
    delModal.showModal();
}


okBtn.onclick = async () => {
    await deleteUser(currentId);
    delModal.close();
};


cancelBtn.onclick = () => {
    delModal.close();
};
