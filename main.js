/* ======================================================
   main.js  –  portfolio logic + animations
   ====================================================== */

/* ---- tiny DOM helpers -------------------------------- */
const $  = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* ======================================================
   PROJECT RENDERING
   ====================================================== */
function renderProjects(list) {
  const grid = $("#projectGrid");
  grid.innerHTML = "";

  list.forEach((p) => {
    grid.insertAdjacentHTML(
      "beforeend",
      `<article class="card reveal" data-type="${p.type}">
         <img src="${p.image}" alt="${p.title}">
         <div class="card-body">
           <h3>${p.title}</h3>
           <p>${p.description}</p>
           <div class="tags">
             ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
           </div>
           <div class="card-links">
             ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">GitHub ↗</a>` : ""}
           </div>
         </div>
       </article>`
    );
  });
}

/* ======================================================
   FILTER CHIPS (event-delegation, case-insensitive)
   ====================================================== */
function setupFilterButtons() {
  const bar = $(".filter");
  if (!bar) return;

  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    /* active style */
    $$(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    /* filter logic */
    const key = btn.dataset.filter.toLowerCase();
    const subset =
      key === "all"
        ? projects
        : projects.filter((p) => p.type.toLowerCase() === key);

    renderProjects(subset);
    initReveal();   // re-attach reveal to new nodes
  });
}

/* ======================================================
   SCROLL-REVEAL (IntersectionObserver)
   ====================================================== */
function initReveal() {
  const revealEls = $$(".reveal");
  if (!revealEls.length) return;

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("animate-fadeUp");
          en.target.classList.remove("reveal");
          obs.unobserve(en.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => io.observe(el));
}

/* ======================================================
   THEME TOGGLE
   ====================================================== */
const themeToggle = $("#themeToggle");

function applySavedTheme() {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.dataset.theme = "dark";
    if (themeToggle) themeToggle.textContent = "☀️";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const root  = document.documentElement;
    const dark  = root.dataset.theme === "dark";
    root.dataset.theme = dark ? "" : "dark";
    localStorage.setItem("theme", dark ? "" : "dark");
    themeToggle.textContent = dark ? "🌙" : "☀️";
  });
}

/* ======================================================
   CONTACT FORM  (EmailJS)   – optional
   ====================================================== */
const contactForm = $("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = $("#formStatus");
    status.textContent = "Sending…";

    /* replace with your own keys */
    emailjs.init("YOUR_USER_ID");
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: contactForm.name.value,
        reply_to:  contactForm.email.value,
        message:   contactForm.message.value,
      })
      .then(() => {
        status.textContent = "Message sent! 🎉";
        contactForm.reset();
      })
      .catch((err) => {
        console.error(err);
        status.textContent = "Error — try again later.";
      });
  });
}

/* ======================================================
   MISC
   ====================================================== */
$("#year").textContent = new Date().getFullYear();

/* ======================================================
   INITIALISE PAGE
   ====================================================== */
applySavedTheme();
renderProjects(projects);
setupFilterButtons();
initReveal();        // run once for initial cards
