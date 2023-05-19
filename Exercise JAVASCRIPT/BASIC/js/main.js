// let user = "b";

// console.log(user ?? "abc"); // neu null undefined ra dữ liệu còn lai
// 1.
// function multiplication(a, b) {
//   return a * b;
// }

// // 2.

// function evenOdd(i) {
//   //   const result = !(i % 2) ? "số chẳn" : "số lẽ";
//   const result = i % 2 ? "Số lẽ " : "số chẵn";
//   return result;
// }

// //3.

// function printName(name) {
//   return `xin chào ${name}`;
// }

// //4.

// const printNameAge = (name, age) => `Xin chào ${name} ${age} tuổi `;

// console.log(multiplication(3, 4));
// console.log(evenOdd(5));
// console.log(printName("khuong"));
// console.log(printNameAge("khuong", 2));
// // switch case
// let x = parseFloat(prompt("Nhập điểm trung bình của bạn: "));
// if (x < 0 || x > 10) {
//   console.log("Điểm không hợp lệ");
// } else {
//   switch (true) {
//     case x < 5:
//       console.log("Không đạt");
//       break;
//     case x < 6.5:
//       console.log("Đạt");
//       break;
//     case x < 8:
//       console.log("Khá");
//       break;
//     case x <= 10:
//       console.log("Giỏi");
//       break;
//     default:
//       console.log("Điểm không hợp lệ");
//       break;
//   }
// }

// for i
// let i = parseInt(prompt("Nhập vào số nguyên dương i > 0 : "));
// function printNumbersUpTo(i) {
//   for (let j = 0; j <= i; j++) {
//     console.log(j);
//   }
// }
// printNumbersUpTo(i);

// tong cac so tu 1 den 100
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log("Tổng các số từ 1 đến 100 là: " + sum);

// in ra các số từ 0 đến 10

// bảng cửu chương 9
// let x = parseFloat(prompt("Nhập vào số n: "));
// function multiplicationTable(n) {
//   for (let i = 2; i <= n; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// multiplicationTable(x);

//

// a();

// setTimeout(() => {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }, 1000);

// const div1 = document.getElementById("introduce");
// const div2 = document.querySelector(".introduce");
// console.log(div1);
// console.log(div2);

// div1.style.color = "red";
// div2.style.color = "blue";

// div2.textContent = "Iam Khuong";

// document.getElementsByName("up");
// console.log(document.getElementsByName("up")[0]);

// for (let i = 0; i < document.getElementsByName("up").length; i++) {
//   console.log(document.getElementsByName("up")[i]);
// }

// const para = document.createElement("p");

// para.textContent = "Khuong";
// para.style.color = "red";

// document.body.appendChild(para);
// const div1 = document.querySelector(".myname");
// function a() {
//   div1.textContent = "Trong Khuong";
// }

// const students = [
//   "Vy",
//   "Khuong",
//   "Quynh Anh",
//   "Nhat Anh",
//   "Tien Anh",
//   "Duc Anh",
// ];
// console.log(`mang bang dau ${students}`);

// console.log(students.length);

// const vitriNhatAnh = (element) => element === "Nhat Anh";

// console.log(`Vi tri cua nhat anh la ${students.findIndex(vitriNhatAnh)}`);

// students.shift();

// console.log(`Array sau khi xoa phan tu dau ${students}`);

// console.log(students.join("-"));

// const arrNew = students.filter((e) => e !== "Quynh Anh");

// console.log(arrNew);

// const student2 = ["Sơn Anh", "Phước"];

// const arrNew2 = students.concat(student2);
// console.log(arrNew2);

// function randomInRange(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }
// console.log(randomInRange(4, 7));

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: {
//     white: "mau trang",
//     blue: "mau xanh",
//   },
// };

// console.log(Object.values(person));

// let originalString = "lop hoc web cua KITS";
// //do dai chuoi
// console.log(originalString.length);
// // lay chu web bang ham slice

// console.log(originalString.slice(8, 11)); // lay bat dau tu vi tri start den end -1

// console.log(originalString.replaceAll(" ", ","));

// const checkStringIsDev = (string) => {
//   const a = string.toLowerCase();
//   a.includes("dev")
//     ? console.log("chuỗi bạn nhập có chứa chữ DEV")
//     : console.log("chuỗi bạn nhập không có chữ DEV");
// };

// checkStringIsDev(" is me");

// ham kiem tra co phai so nguyen to hay khong
// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// // bài 2
// function calculateSum(n) {
//   if (n < 0) return 0;
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i / n;
//   }
//   return sum;
// }

// console.log(isPrime(4));

// console.log(calculateSum(3000));

// const inputEmail = document.querySelector(".input-email");
// const elmP = document.querySelector("p");
// inputEmail.style.marginBottom = "20px";

// function resultEmail() {
//   const result = isEmail(inputEmail.value);
//   const newP1 = document.createElement("p");
//   const newContent1 = document.createTextNode("Email Hợp lệ");

//   const newP2 = document.createElement("p");
//   const newContent2 = document.createTextNode("Email Không Hợp lệ");

//   newP1.appendChild(newContent1);
//   newP2.appendChild(newContent2);

//   result
//     ? (elmP.textContent = "Email Hợp lệ")
//     : (elmP.textContent = "Email Không Hợp lệ");
// }

// function isEmail(email) {
//   return email.indexOf("@gmail.com") >= 0;
// }

// const div1 = document.getElementById("div1");
// const div2 = document.getElementById("div2");

// div1.style.backgroundColor = "red";
// div1.style.width = "300px";
// div1.style.height = "300px";
// div1.style.marginBottom = "20px";

// div2.style.backgroundColor = "blue";
// div2.style.width = "300px";
// div2.style.height = "300px";
// div2.style.marginBottom = "20px";

// function handleShow() {
//   div1.style.display = "block";
//   div2.style.display = "block";
// }

// function handleHide() {
//   div1.style.display = "none";
//   div2.style.display = "none";
// }

// const input = [3, 5, 7, 9, 11];
// console.log(input.splice(1, 2));
