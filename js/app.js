const form = document.querySelector('#input-form');
const out = document.querySelector('.output');

//GET Method

const get = document.querySelector('#btn-get').addEventListener('click', (e) => {
    //GET users 
    const http = new TMhttp;
    form.innerHTML = '';
    http.get('https://jsonplaceholder.typicode.com/users')
        .then(data => {
            let outText = '';
            out.innerHTML = data.forEach(item => {
                outText+= `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.username}</td>
                <td>${item.email}</td>
                </tr>
            `
            });
            out.innerHTML = outText;
        })
        .catch(err => console.log(err));
    e.preventDefault();
});

//POST Method
const post = document.querySelector('#btn-post').addEventListener('click', (e) => {
    const http = new TMhttp;
    form.innerHTML =`
        <div class="row">
        <div class="six columns">
            <label for="name">Name</label>
            <input type="text" id="name" class="u-full-width">
        </div>
        <div class="six columns">
            <label for="username">Username</label>
            <input type="text" id="username" class="u-full-width">
        </div>
        <div class="u-full-width ">
            <label for="name">Email</label>
            <input type="email" id="email" class="u-full-width">                 
        </div>
        <input type="submit" value="Submit" class="button-primary">
        </div>
    ` 
    form.addEventListener('submit',(e) => {
        const data = {
            name: document.querySelector('#name').value,
            username: document.querySelector('#username').value,
            email: document.querySelector('#email').value,
        };
        http.post('https://jsonplaceholder.typicode.com/users',data)
        .then(data => {
            let outText = '';
            outText+= `
                <tr>
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.username}</td>
                <td>${data.email}</td>
                </tr>
            `;
            out.innerHTML = outText;
        })
        .catch(err => console.log(err));
        e.preventDefault();
    })
    e.preventDefault();
});


//PUT Method
const put = document.querySelector('#btn-put').addEventListener('click', (e) => {
    const http = new TMhttp;
    
    form.innerHTML =`
        <div class="row">
        <div class="six columns">
            <label for="name">Name</label>
            <input type="text" id="name" class="u-full-width">
        </div>
        <div class="six columns">
            <label for="username">Username</label>
            <input type="text" id="username" class="u-full-width">
        </div>
        <div class="u-full-width ">
            <label for="name">Email</label>
            <input type="email" id="email" class="u-full-width">                 
        </div>
        <div class="u-full-width">
            <label for="id">ID</label>
            <input type="number" id="id" class="u-full-width">                 
        </div>
        <input type="submit" value="Submit" class="button-primary">
        </div>
    ` 
    form.addEventListener('submit',(e) => {
        const data = {
            name: document.querySelector('#name').value,
            username: document.querySelector('#username').value,
            email: document.querySelector('#email').value,
        };

        http.put(`https://jsonplaceholder.typicode.com/users/${document.querySelector('#id').value}`,data)
        .then(data => {
            let outText = '';
            outText+= `
                <tr>
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.username}</td>
                <td>${data.email}</td>
                </tr>
            `;
            out.innerHTML = outText;
        })
        .catch(err => console.log(err));
        e.preventDefault();
    })
    e.preventDefault();
});

//DELETE Method

document.querySelector('#btn-delete').addEventListener('click', (e) => {
    form.innerHTML =`
        <div class="row">
        <div class="u-full-width del-input">
            <label for="id" class="two columns">ID :</label>
            <input type="number" id="id" class="four columns">                 
        </div>
        <input type="submit" value="Submit" class="button-primary">
        </div>
    ` 
    const http = new TMhttp;
    form.addEventListener('submit', (e) => {
        http.delete(`https://jsonplaceholder.typicode.com/users/${document.querySelector('#id').value}`)
        .then(data => {
            out.innerHTML =`
                <h3 class="del-text">${data}</h3>
            `
        })
        .catch(err => console.log(err));
        e.preventDefault();
    })
    e.preventDefault();
});

