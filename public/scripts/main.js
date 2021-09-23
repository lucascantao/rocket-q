import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

//Pegar todos os botões com a classe check
const checkButtons = document.querySelectorAll(".actions a.check");
const deleteButtons = document.querySelectorAll(".actions a.delete");

checkButtons.forEach(button => {
    //adicionar listen
    button.addEventListener("click", handleClick);
})

deleteButtons.forEach(button => {
    button.addEventListener("click", e => handleClick(e, false));
})

function handleClick(e, check = true) {
    e.preventDefault();
    const text = check ? "Marcar como lida" : "Excluir";
    const slug = check ? "check" : "delete";

    const roomId = document.querySelector("#room-id").dataset.id;
    const questionId = e.target.dataset.id;

    const form = document.querySelector(".modal form");
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`);

    modalTitle.innerHTML = `${text} essa pergunta?`;
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red");
    modal.open();
}