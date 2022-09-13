
const button = document.querySelector('button')

button.addEventListener('click', (event)=>{
    event.preventDefault();
    const email = document.querySelector('[type="email"]').value;
    const password = document.querySelector('[type="password"]').value;
    if (email === 'fanny@gmail.com' && password === 'hola') {
        const list = document.querySelector('#list');
        list.style.display = 'block';
    }else{

    }
})