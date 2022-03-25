function getData() {
  let username, password, confirmPassword;
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;
  confirmPassword = document.getElementById("confirmPassword").value

  if (password === confirmPassword) {
    swal("Registration Success!", "You can login with your account now!", "success");

    localStorage.setItem("username", username)
    localStorage.setItem("password", password)
    localStorage.setItem("confirmPassword", confirmPassword)
  } else {
    swal("Password does not match!", "Please input your password carefully!", "error");
  }
}

let getAll = localStorage;
const localUsername = getAll.usename;
const localPassword = getAll.password;

console.log(getAll);

function check(form) {
  /*function to check userid & password*/
  /*the following code checkes whether the entered userid and password are matching*/
  if (localUsername === form.userid.value && localPassword === form.userpsw.value) {
    window.location.replace(landing.html);/*opens the target page while Id & password matches*/
  } else {
    swal("Wrong Username/Password", "Please input your Username/Password carefully!", "error");
  }
}

function greeting() {
  let name = getAll.getItem('username')

  greetUser.textContent = "Hello," + name +
    " . You can choose and watch your video now!";
}