const data = {
    username: ['andri', 'fahri', 'fitra'],
    password: [123456, 123458, 112233]
}
function Login(data) {
  let result = [];
  for (let i = 0; i < data.username.length; i++) {
      let id = data.username[i]
      for (let j = 0; j < data.password.length; j++) {
          let pass = data.password[j]
          }
          
      }
      
  }

  console.log(Login('andri',123456))
//   var done = 0;
//   var username = document.login.username.value;
//   username = username.toLowerCase();
//   var password = document.login.password.value;
//   password = password.toLowerCase();
//   if (username == "Andri" && password == "123456") {
//     alert("selamat Login berhasil ");
//   } else if (done == 0) {
//     console.log("Invalid login!");
//   }
// }
