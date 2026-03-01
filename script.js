// ====== YOUR INFO ======
const YOUR = {
  email: "yourmail@example.com", // غيري الإيميل هنا
  whatsapp: "201033777336", // رقمك بصيغة دولية بدون +
  github: "https://github.com/hodanasser24",
  linkedin: "https://www.linkedin.com/in/hoda-nasser/"
};
// ========================

const $ = (id) => document.getElementById(id);

const yearEl = $("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// set social links
$("githubLink").href = YOUR.github;
$("linkedinLink").href = YOUR.linkedin;

$("emailItem").href = `mailto:${YOUR.email}`;
$("emailItem").querySelector("span").textContent = YOUR.email;

const wa = `https://wa.me/${YOUR.whatsapp}`;
$("whatsBtn").href = wa;
$("whatsItem").href = wa;

$("linkedItem").href = YOUR.linkedin;

// mobile menu
const menuBtn = $("menuBtn");
const menu = $("menu");
menuBtn?.addEventListener("click", () => menu.classList.toggle("show"));

document.querySelectorAll("#menu a").forEach(a=>{
  a.addEventListener("click", ()=> menu.classList.remove("show"));
});

// theme toggle
const themeBtn = $("themeBtn");
const saved = localStorage.getItem("theme");
if (saved === "light") document.body.classList.add("light");
themeBtn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";

themeBtn?.addEventListener("click", ()=>{
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  themeBtn.textContent = isLight ? "☀️" : "🌙";
});

// contact form -> mailto
const form = $("contactForm");
form?.addEventListener("submit", (e)=>{
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");
  const email = data.get("email");
  const msg = data.get("message");

  const subject = encodeURIComponent(`Portfolio Inquiry — ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}\n`);

  window.location.href = `mailto:${YOUR.email}?subject=${subject}&body=${body}`;
});
