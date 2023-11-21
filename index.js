let name = document.getElementById('name');
let age = document.getElementById('age');
let email = document.getElementById('email');
let btn = document.getElementById('btn');
let form = document.getElementById('form')
let table = document.getElementById('table');
let thead = document.getElementById('thead');
let tbody = document.getElementById('tbody');

function validate() {
    if (!name.value) {
        focus();
        name.style.outlineColor = 'red'
        return false;
    }
    if (!age.value) {
        age.style.outlineColor = 'red'
        focus();
        return false;
    }
    if (age.value > 150 || age.value < 1) {
        alert('yoshni togri kiriting');
        age.style.outlineColor = 'red'
        focus();
        age.value = '';
        return false
    }
    if (!email.value) {
        email.style.outlineColor = 'red'
        focus();
        return false;
    }
    return true;
}
function creatRow(user){
    let data = localStorage.getItem('form')?JSON.parse(localStorage.getItem('form')):[];
    let b = `
    <tr>
    <td>${data.length}</td>
    <td>${user.name}</td>
    <td>${user.age}</td>
    <td>${user.email}</td>
    <td>
        <span id="delet" class="action">Delet</span>
        <span id="edite" class="action">Edite</span>
    </td>
  </tr>
    `
    tbody.innerHTML +=b;
}

btn && btn.addEventListener('click', function () {
    if (validate()) {
        let data = localStorage.getItem('form') ? JSON.parse(localStorage.getItem('form')) : [];
        let user = {
            id: Date.now(),
            name: name.value,
            age: age.value,
            email: email.value
        }
        data.push(user);

        localStorage.setItem('form', JSON.stringify(data));
        form.reset();
        creatRow(user);


    }
})
document.addEventListener('DOMContentLoaded', function () {
    let data = localStorage.getItem('form') ? JSON.parse(localStorage.getItem('form')) : [];
   let fakedis = '';
    data.forEach((el, ind) => {
        let a = `
           <tr>
            <td>${ind+1}</td>
            <td>${el.name}</td>
            <td>${el.age}</td>
            <td>${el.email}</td>
            <td>
                <span id="delet" class="action">Delet</span>
                <span id="edite" class="action">Edite</span>
             </td>
          </tr>        
        `
        fakedis += a
    })
    tbody.innerHTML+=fakedis;
})
