// Tab switching functionality
const homeTab = document.getElementById("homeTab");
const userTab = document.getElementById("userTab");
const homeContent = document.getElementById("home");
const userContent = document.getElementById("user");

homeTab.addEventListener("click", () => {
  homeTab.classList.add("active");
  userTab.classList.remove("active");
  homeContent.classList.add("active");
  userContent.classList.remove("active");
});

userTab.addEventListener("click", () => {
  userTab.classList.add("active");
  homeTab.classList.remove("active");
  userContent.classList.add("active");
  homeContent.classList.remove("active");
});

const loginForm = document.getElementById("loginForm");
const editPriceSection = document.querySelector(".edit-price");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;

  if (userId === "ramon" && password === "123") {
    alert("Logged in successfully");
    editPriceSection.style.display = "block";
  } else {
    alert("Log in Failed!!!");
  }
});

// Price editing and saving
const savePriceBtn = document.getElementById("savePriceBtn");
const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");

// Load saved prices from localStorage
window.addEventListener("load", () => {
  if (localStorage.getItem("price1"))
    price1.textContent = localStorage.getItem("price1") + " TK";
  if (localStorage.getItem("price2"))
    price2.textContent = localStorage.getItem("price2") + " TK";
  if (localStorage.getItem("price3"))
    price3.textContent = localStorage.getItem("price3") + " TK";
});

savePriceBtn.addEventListener("click", () => {
  const newPrice1 = document.getElementById("newPrice1").value;
  const newPrice2 = document.getElementById("newPrice2").value;
  const newPrice3 = document.getElementById("newPrice3").value;

  if (newPrice1) {
    localStorage.setItem("price1", newPrice1);
    price1.textContent = newPrice1 + " TK";
  }
  if (newPrice2) {
    localStorage.setItem("price2", newPrice2);
    price2.textContent = newPrice2 + " TK";
  }
  if (newPrice3) {
    localStorage.setItem("price3", newPrice3);
    price3.textContent = newPrice3 + " TK";
  }
  alert("Prices updated successfully");
});
