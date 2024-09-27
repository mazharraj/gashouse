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
const price4 = document.getElementById("price4");
const price5 = document.getElementById("price5");
const price6 = document.getElementById("price6");
const price7 = document.getElementById("price7");
const price8 = document.getElementById("price8");
const price9 = document.getElementById("price9");
const price10 = document.getElementById("price10");
const price11 = document.getElementById("price11");
const price12 = document.getElementById("price12");
const price13 = document.getElementById("price13");
const price14 = document.getElementById("price14");
const price15 = document.getElementById("price15");
const price16 = document.getElementById("price16");
const price17 = document.getElementById("price17");
const price18 = document.getElementById("price18");
const price19 = document.getElementById("price19");
const price20 = document.getElementById("price20");

// Load saved prices from localStorage
window.addEventListener("load", () => {
  if (localStorage.getItem("price1"))
    price1.textContent = localStorage.getItem("price1");
  if (localStorage.getItem("price2"))
    price2.textContent = localStorage.getItem("price2");
  if (localStorage.getItem("price3"))
    price3.textContent = localStorage.getItem("price3");
  if (localStorage.getItem("price4"))
    price4.textContent = localStorage.getItem("price4");
  if (localStorage.getItem("price5"))
    price5.textContent = localStorage.getItem("price5");
  if (localStorage.getItem("price6"))
    price6.textContent = localStorage.getItem("price6");
  if (localStorage.getItem("price7"))
    price7.textContent = localStorage.getItem("price7");
  if (localStorage.getItem("price8"))
    price8.textContent = localStorage.getItem("price8");
  if (localStorage.getItem("price9"))
    price9.textContent = localStorage.getItem("price9");
  if (localStorage.getItem("price10"))
    price10.textContent = localStorage.getItem("price10");
  if (localStorage.getItem("price11"))
    price11.textContent = localStorage.getItem("price11");
  if (localStorage.getItem("price12"))
    price12.textContent = localStorage.getItem("price12");
  if (localStorage.getItem("price13"))
    price13.textContent = localStorage.getItem("price13");
  if (localStorage.getItem("price14"))
    price14.textContent = localStorage.getItem("price14");
  if (localStorage.getItem("price15"))
    price15.textContent = localStorage.getItem("price15");
  if (localStorage.getItem("price16"))
    price16.textContent = localStorage.getItem("price16");
  if (localStorage.getItem("price17"))
    price17.textContent = localStorage.getItem("price17");
  if (localStorage.getItem("price18"))
    price18.textContent = localStorage.getItem("price18");
  if (localStorage.getItem("price19"))
    price19.textContent = localStorage.getItem("price19");
  if (localStorage.getItem("price20"))
    price20.textContent = localStorage.getItem("price20");
});

savePriceBtn.addEventListener("click", () => {
  const newPrice1 = document.getElementById("newPrice1").value;
  const newPrice2 = document.getElementById("newPrice2").value;
  const newPrice3 = document.getElementById("newPrice3").value;
  const newPrice4 = document.getElementById("newPrice4").value;
  const newPrice5 = document.getElementById("newPrice5").value;
  const newPrice6 = document.getElementById("newPrice6").value;
  const newPrice7 = document.getElementById("newPrice7").value;
  const newPrice8 = document.getElementById("newPrice8").value;
  const newPrice9 = document.getElementById("newPrice9").value;
  const newPrice10 = document.getElementById("newPrice10").value;
  const newPrice11 = document.getElementById("newPrice11").value;
  const newPrice12 = document.getElementById("newPrice12").value;
  const newPrice13 = document.getElementById("newPrice13").value;
  const newPrice14 = document.getElementById("newPrice14").value;
  const newPrice15 = document.getElementById("newPrice15").value;
  const newPrice16 = document.getElementById("newPrice16").value;
  const newPrice17 = document.getElementById("newPrice17").value;
  const newPrice18 = document.getElementById("newPrice18").value;
  const newPrice19 = document.getElementById("newPrice19").value;
  const newPrice20 = document.getElementById("newPrice20").value;

  if (newPrice1) {
    localStorage.setItem("price1", newPrice1);
    price1.textContent = newPrice1;
  }
  if (newPrice2) {
    localStorage.setItem("price2", newPrice2);
    price2.textContent = newPrice2;
  }
  if (newPrice3) {
    localStorage.setItem("price3", newPrice3);
    price3.textContent = newPrice3;
  }
  if (newPrice4) {
    localStorage.setItem("price4", newPrice4);
    price4.textContent = newPrice4;
  }
  if (newPrice5) {
    localStorage.setItem("price5", newPrice5);
    price5.textContent = newPrice5;
  }
  if (newPrice6) {
    localStorage.setItem("price6", newPrice6);
    price6.textContent = newPrice6;
  }
  if (newPrice7) {
    localStorage.setItem("price7", newPrice7);
    price7.textContent = newPrice7;
  }
  if (newPrice8) {
    localStorage.setItem("price8", newPrice8);
    price8.textContent = newPrice8;
  }
  if (newPrice9) {
    localStorage.setItem("price9", newPrice9);
    price9.textContent = newPrice9;
  }
  if (newPrice10) {
    localStorage.setItem("price10", newPrice10);
    price10.textContent = newPrice10;
  }
  if (newPrice11) {
    localStorage.setItem("price11", newPrice11);
    price11.textContent = newPrice11;
  }
  if (newPrice12) {
    localStorage.setItem("price12", newPrice12);
    price12.textContent = newPrice12;
  }
  if (newPrice13) {
    localStorage.setItem("price13", newPrice13);
    price13.textContent = newPrice13;
  }
  if (newPrice14) {
    localStorage.setItem("price14", newPrice14);
    price14.textContent = newPrice14;
  }
  if (newPrice15) {
    localStorage.setItem("price15", newPrice15);
    price15.textContent = newPrice15;
  }
  if (newPrice16) {
    localStorage.setItem("price16", newPrice16);
    price16.textContent = newPrice16;
  }
  if (newPrice17) {
    localStorage.setItem("price17", newPrice17);
    price17.textContent = newPrice17;
  }
  if (newPrice18) {
    localStorage.setItem("price18", newPrice18);
    price18.textContent = newPrice18;
  }
  if (newPrice19) {
    localStorage.setItem("price19", newPrice19);
    price19.textContent = newPrice19;
  }
  if (newPrice20) {
    localStorage.setItem("price20", newPrice20);
    price20.textContent = newPrice20;
  }
  alert("Prices updated successfully");
});
