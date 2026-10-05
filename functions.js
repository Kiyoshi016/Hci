var form = document.querySelector("form");
var metro = document.getElementById("metro");
var province = document.getElementById("province");

metro.addEventListener("change", function () {
  if (metro.checked) province.checked = false;
});
province.addEventListener("change", function () {
  if (province.checked) metro.checked = false;
});
document.getElementById("uid").addEventListener("input", function () {
  this.value = this.value.replace(/[^A-Za-z0-9_]/g, "");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var crn = document.getElementById("crn").value.trim();
  var email = document.getElementById("email").value.trim();
  var email2 = document.getElementById("email2").value.trim();
  var uid = document.getElementById("uid").value.trim();
  var uid2 = document.getElementById("uid2").value.trim();
  var last = document.getElementById("last").value.trim();
  var first = document.getElementById("first").value.trim();
  var dob = document.getElementById("dob").value;

  var digits = crn.replace(/-/g, "");
  if (!/^\d+$/.test(digits) || (digits.length !== 10 && digits.length !== 12)) {
    alert("CRN / SS Number must be 10 or 12 digits.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (email !== email2) {
    alert("Email addresses do not match.");
    return;
  }

  if (!/^[A-Za-z][A-Za-z0-9_]{7,19}$/.test(uid)) {
    alert(
      "User ID must be 8-20 characters, start with a letter, and use only letters, numbers, and underscore.",
    );
    return;
  }

  if (uid !== uid2) {
    alert("User IDs do not match.");
    return;
  }

  if (last === "" || first === "") {
    alert("Please enter your surname and given name.");
    return;
  }

  if (dob === "") {
    alert("Please select your date of birth.");
    return;
  }

  if (!metro.checked && !province.checked) {
    alert("Please select Metro Manila or Province.");
    return;
  }

  alert("Registration submitted successfully!");
  form.reset();
});

var darkToggle = document.getElementById("darkToggle");

function setDark(on) {
  document.body.classList.toggle("dark", on);
  darkToggle.textContent = on ? "Light mode" : "Dark mode";
  localStorage.setItem("dark", on ? "yes" : "no");
}

darkToggle.addEventListener("click", function () {
  setDark(!document.body.classList.contains("dark"));
});

setDark(localStorage.getItem("dark") === "yes");
