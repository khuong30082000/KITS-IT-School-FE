const settingTop = document.querySelector(".setting-top");
const sidebar = document.querySelector(".sidebar");
const setting = document.querySelector(".setting");
const content = document.querySelector(".content");
const myForm = document.querySelector("#myForm");
const btnCancel = document.querySelector(".btn-cancel");
const allLi = document.querySelectorAll(".setting-list-item");
const inputFistName = document.getElementById("fname");
const inputLastName = document.getElementById("lname");
const inputEmail = document.getElementById("email");
const inputAddress = document.getElementById("address");
const inputContactNumber = document.getElementById("contactnumber");
const selectForm = document.getElementById("selectForm");
const iconCheck = document.querySelector(".icon");
const allInput = document.querySelectorAll("input");

handleClickSetting = () => {
  setting.classList.add("hide-setting");
  content.classList.add("center-main");
};

handleClickSidebar = () => {
  setting.classList.toggle("hide-setting");
  content.classList.toggle("center-main");
};

handleClickCancel = (e) => {
  e.preventDefault();
  myForm.reset();
  [...allInput].forEach((item) => removeErrorSuccess(item));
  removeErrorSuccess(selectForm);
};

settingTop.addEventListener("click", handleClickSetting);
sidebar.addEventListener("click", handleClickSidebar);
btnCancel.addEventListener("click", handleClickCancel);

[...allLi].forEach((item) => item.addEventListener("click", handleTabClick));

function handleTabClick(e) {
  [...allLi].forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

const setSuccess = (element) => {
  element.classList.add("success");
  element.classList.remove("error");
};

const setError = (element) => {
  element.classList.add("error");
  element.classList.remove("success");
};

removeErrorSuccess = (element) => {
  element.classList.remove("success");
  element.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateForm = () => {
  const fNameValue = inputFistName.value.trim();
  const lNameValue = inputLastName.value.trim();
  const emailValue = inputEmail.value.trim();
  const addressValue = inputAddress.value.trim();
  const contactnumberValue = inputContactNumber.value.trim();
  const selectFormValue = selectForm.value;

  fNameValue === "" ? setError(inputFistName) : setSuccess(inputFistName);
  lNameValue === "" ? setError(inputLastName) : setSuccess(inputLastName);
  addressValue === "" ? setError(inputAddress) : setSuccess(inputAddress);
  contactnumberValue === ""
    ? setError(inputContactNumber)
    : setSuccess(inputContactNumber);
  selectFormValue === "" ? setError(selectForm) : setSuccess(selectForm);
  if (emailValue === "") {
    setError(inputEmail);
  } else if (!isValidEmail(emailValue)) {
    setError(inputEmail);
  } else {
    setSuccess(inputEmail);
  }
};

inputEmail.addEventListener("input", function (e) {
  if (!isValidEmail(e.target.value)) {
    setError(inputEmail);
  } else {
    setSuccess(inputEmail);
  }

  if (!e.target.value) {
    e.target.classList.remove("error");
  }
});

const obj = JSON.parse(localStorage.getItem("access_token")); //parse chuoi string thanh json
const data = JSON.parse(localStorage.getItem("user_login"));
const sidebarlogo = document.querySelector(".content-top-logo");
const contentTopName = document.querySelector(".content-top-name");
console.log(data);

if (data) {
  sidebarlogo.src = data.image;
  contentTopName.textContent = data.username;
}

if (!obj) {
  window.location.assign("login.html");
}
