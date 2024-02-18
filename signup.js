const users = JSON.parse(localStorage.getItem("users")) || [];

document.querySelector("#form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  if (users.find((user) => user.email === email)) {
    alert("Tên đăng nhập đã tồn tại");
    return;
  }

  users.push({email, password});
  localStorage.setItem("users", JSON.stringify(users));
  alert("Đăng ký thành công");
  window.location.href = "login.html";
});