const modal = document.getElementById('bots-modal');
const botsLink = document.getElementById('bots-link');
const closeBtn = document.querySelector('.close-btn');
const body = document.body;
let modalOpen = false;

botsLink.onclick = function(e) {
    e.preventDefault();
    modal.style.display = 'block';
    body.style.overflowY = 'hidden'; /* Disable scrolling on the body */
    modalOpen = true;
    history.pushState(null, '', window.location.pathname);
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
    body.style.overflowY = 'auto'; /* Enable scrolling on the body */
    modalOpen = false;
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        body.style.overflowY = 'auto'; /* Enable scrolling on the body */
        modalOpen = false;
    }
}

window.onpopstate = function(event) {
    if (modalOpen) {
        modal.style.display = 'none';
        body.style.overflowY = 'auto'; /* Enable scrolling on the body */
        modalOpen = false;
        history.pushState(null, '', window.location.pathname);
    }
};