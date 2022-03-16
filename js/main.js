let body = document.querySelector('body'),
    title = document.querySelector('.title'),
    title_content = document.querySelector('.title-content'),
    ul = document.querySelector('ul'),
    btn_reload = document.querySelector('.button');


function onLine() {
    body.classList.remove('bg-dark');
    body.classList.add('bg-success');
    title_content.innerHTML = 'online now';
    ul.classList.add('d-none');
    btn_reload.classList.add('d-none');
}

function offLine() {
    body.classList.add('bg-dark');
    title_content.innerHTML = "offline now";
    ul.classList.remove('d-none');
    btn_reload.classList.remove('d-none');
}

window.onload = function () {
    if (window.navigator.onLine) {
        onLine();
    } else {
        offLine();
    }
}

window.addEventListener('online',function(){
    onLine();
})

window.addEventListener('offline',function(){
    offLine();
})

btn_reload.addEventListener('click', function () {
    window.location.reload();
})
