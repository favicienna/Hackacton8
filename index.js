let usernameDOM = document.getElementById("username")
let passwordDOM = document.getElementById("password")

let ditemukan = false
let akun = ["Andri", "Fahri", "talenta", "nanda"]
let sandi = ["123456", "111111", "456", "567"]


function login(){
    for(let i = 0; i < akun.length; i++){
        if(usernameDOM.value == akun[i] && passwordDOM.value == sandi[i]){
            ditemukan = true
        }
    }   if(!usernameDOM || !passwordDOM){
        alert("Username atau Password salah")
    }
       if(ditemukan == true){
           alert("berhasil")
           ditemukan = false
    }  else {
        alert("gagal")
    }  
}

// let home = document.querySelector('#home');
// let start = document.querySelector('landing.html');

// function changePage(origin, destination, num) {
//     // console.log(num, '<<isi num');
//     if (num) {
//         result += num;
//     }
//     document.querySelector(`#${origin}`).style.display = 'none';
//     if (destination === 'final' && (result < 1 || result > 100)) {
//         document.querySelector(`#failed`).style.display = 'flex';
//     } else {
//         document.querySelector(`#${destination}`).style.display = 'flex';
//     }
//     // home.style.display = 'none';
//     // start.style.display = 'flex';
//     document.querySelector('#result').textContent = result;
//     if (destination === 'home') {
//         result = 0;
//     }
// }