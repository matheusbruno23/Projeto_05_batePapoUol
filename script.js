/*escolher o nome - aparecer o nome
escolher entre reservado/todos - aparecer reservado ou todos
escrever a mensagem - aparecer a mensagem na div meio 
 */
const messages = []
const messageDisplay = {userName:"", to: "", message: ""}
function createMessage(){
    const userInput = document.querySelector('.name').value;
}

function sendMessage(){
    const mid = document.querySelector('.midbox .message');
    const userInput = document.querySelector('.name').value;
    const message = document.querySelector('.txtinput').value;
    mid.innerHTML ="";
    mid.innerHTML = mid.innerHTML + `${userInput} disse para todos: ${message}`;
    for (let i = 0; i > messages.length ; i++){
    }
}


/*surgir/desurgir o menu*/
function showMenu(){
    const menu = document.querySelector('.menu');
    menu.classList.toggle("hidden");
}
function hideMenu(){
    const menu = document.querySelector('.menu');
    if (menu.classList.contains('hidden') == false){
    menu.classList.add('hidden');
    }else{
    }
}
/*tela de inicio + nome*/

function hideEnterScreen(){
    const menu = document.querySelector('.enterscreen');
    const userInput = document.querySelector('.name').value;
    const message = document.querySelector('.txtinput').value;
    const mid = document.querySelector('.midbox .message');
    if (menu.classList.contains('hidden') == false){
    menu.classList.add('hidden');

    }else{
    }
}
function select(typeSelected){
    const alreadySelected = document.querySelector('.check .selected');
    if(alreadySelected !== null){
        alreadySelected.classList.remove('selected');
    }
    typeSelected.classList.add('selected');
}
/*    mid.innerHTML ="";
    mid.innerHTML += `${userInput} entrou na sala!`;
    dentro do hide entrer screen
    */
