// ====== YOUR INFO ======
const YOUR = {
  email: "hoda.nasser2006@gmail.com",
  whatsapp: "201033777336",
  github: "https://github.com/hodanasser24",
  linkedin: "https://www.linkedin.com/in/hoda-nasser/"
};
// ========================

// shortcut function
const $ = (id) => document.getElementById(id);

// set footer year
const yearEl = $("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ===== SOCIAL LINKS =====
$("githubLink").href = YOUR.github;
$("linkedinLink").href = YOUR.linkedin;

// ===== EMAIL =====
const emailItem = $("emailItem");
emailItem.href = `mailto:${YOUR.email}`;
emailItem.querySelector("span").textContent = `Email: ${YOUR.email}`;

// ===== WHATSAPP =====
const wa = `https://wa.me/${YOUR.whatsapp}`;
$("whatsBtn").href = wa;
$("whatsItem").href = wa;

// ===== LINKEDIN =====
$("linkedItem").href = YOUR.linkedin;

// ===== MOBILE MENU =====
const menuBtn = $("menuBtn");
const menu = $("menu");

menuBtn?.addEventListener("click", () => {
  menu.classList.toggle("show");
});

document.querySelectorAll("#menu a").forEach((a) => {
  a.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

// ===== THEME TOGGLE =====
const themeBtn = $("themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
}

themeBtn.textContent =
  document.body.classList.contains("light") ? "☀️" : "🌙";

themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");

  localStorage.setItem("theme", isLight ? "light" : "dark");

  themeBtn.textContent = isLight ? "☀️" : "🌙";
});

// ===== CONTACT FORM (MAILTO) =====
const form = $("contactForm");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  const subject = encodeURIComponent(`Portfolio Inquiry — ${name}`);

  const body = encodeURIComponent(
`Name: ${name}
Email: ${email}

Message:
${message}`
  );

  window.location.href =
    `mailto:${YOUR.email}?subject=${subject}&body=${body}`;
});
