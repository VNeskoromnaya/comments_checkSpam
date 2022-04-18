const textArea = document.getElementById('comment');
const messagesList = document.getElementById('field');
const btn = document.getElementById('btn');

function sendComment() {
    let comment = textArea.value; // получаю содержимое 
    let newMessage = document.createElement('div');
    newMessage.className = 'completed';
    newMessage.innerHTML = comment.toLowerCase().replace(/Viagra/gi, '***').replace(/XXX/gi, '***');
    messagesList.appendChild(newMessage);
    textArea.value = ''; // очищение textArea
    textArea.focus();
};

btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    sendComment();
    
});
