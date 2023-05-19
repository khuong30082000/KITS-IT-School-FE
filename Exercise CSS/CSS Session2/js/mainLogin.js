const password = document.getElementById("password");
const eyeicon = document.getElementById("eye-hide");
const login = document.getElementById("login");

const apiAuth = "https://dummyjson.com/auth/login";

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "images/eye-openn.svg";
  } else {
    password.type = "password";
    eyeicon.src = "images/eye-hide.svg";
  }
};

function handleLogin(e) {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  //   "kminchelle"
  //   ("0lelplR");
  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      // expiresInMins: 60, // optional
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.username === username) {
        const jwt = JSON.stringify(data.token);
        const dataJSON = JSON.stringify(data);
        localStorage.setItem("access_token", jwt);
        localStorage.setItem("user_login", dataJSON);
        window.location.assign("index.html");
      } else {
        console.log(data.message);
      }
    });
}

login.addEventListener("click", handleLogin);
