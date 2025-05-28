function checkPassword() {
  const password = document.getElementById("password").value;
  if (password === "EID_MUBARAK") {
    document.querySelector(".eid-btn").innerHTML = "✓ Access Granted!";
    setTimeout(() => {
      window.location.href = "main.html";
    }, 1000);
  } else {
    alert("Galat code! Motku, shayad Bauku Ne Alag Code diya hoga?");
    document.getElementById("password").value = "";
  }
}
