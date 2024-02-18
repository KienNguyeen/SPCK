const users = JSON.parse(localStorage.getItem("users")) || [];

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    alert("Đăng nhập thành công");
    window.location.href = "index.html";
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng");
  }
});