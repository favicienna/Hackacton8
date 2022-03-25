function getData() {
  let username, password, confirmPassword;
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;
  confirmPassword = document.getElementById("confirmPassword").value

  if (password === confirmPassword) {
    // swal("Registration Success!", "You can login with your account now!", "success");
    alert('Registration Success!"')

    localStorage.setItem("username", username)
    localStorage.setItem("password", password)
    localStorage.setItem("confirmPassword", confirmPassword)
  } else {
    //   swal("Password does not match!", "Please input your password carefully!", "error");
    alert('Password does not match!')
  }
}

let getAll = localStorage;
const localUsername = getAll.username;
const localPassword = getAll.password;

console.log(getAll);

function check() {
  return true
}

document.getElementById("submit-btn").addEventListener('click', function (e) {
  let username = document.getElementById("username").value
  let password = document.getElementById("password").value

  if (localUsername === username && localPassword === password) {
    // swal("Match!!!", "You have logged in successfully!", "success");
    alert("Let's Goooooo!!!")
  } else {
    e.preventDefault()
  }
})