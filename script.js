const skills = [
  { n: "01", title: "HTML & CSS", text: "Building responsive layouts and polished interfaces." },
  { n: "02", title: "JavaScript", text: "Adding interaction, logic and dynamic experiences." },
  { n: "03", title: "Python", text: "Learning programming fundamentals and problem solving." },
  { n: "04", title: "Git & GitHub", text: "Version control and publishing projects online." },
  { n: "05", title: "Responsive Design", text: "Making websites work beautifully on phones and desktops." },
  { n: "06", title: "UI / UX", text: "Focusing on hierarchy, spacing, usability and visual quality." },
  { n: "07", title: "Problem Solving", text: "Breaking large problems into clear, manageable steps." },
  { n: "08", title: "Always Learning", text: "Growing the stack as new technologies become useful." }
];

const projects = [
  {
    title: "EduTrack",
    description: "A modern education platform interface for students and parents.",
    image: "",
    technologies: ["HTML", "CSS", "JavaScript", "UI/UX"],
    demo: "https://abdo124206-crypto.github.io/Abdulrahman04/",
    github: "https://github.com/abdo124206-crypto/Abdulrahman04"
  },
  {
    title: "Birthday Surprise",
    description: "An interactive Arabic birthday experience with animations and memories.",
    image: "images/photo2.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Animation"],
    demo: "https://abdo124206-crypto.github.io/Abdulrahman01/",
    github: "https://github.com/abdo124206-crypto/Abdulrahman01"
  }
];
const gallery = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg",
  "images/photo7.jpg",
  "images/photo8.jpg",
  "images/photo9.jpg"
];

document.getElementById("skills-grid").innerHTML = skills.map(s => `
  <article class="skill reveal">
    <span class="num">${s.n}</span>
    <h3>${s.title}</h3>
    <p>${s.text}</p>
  </article>
`).join("");

document.getElementById("projects-grid").innerHTML = projects.map(p => `
  <article class="project reveal">
    <div class="project-img">
      ${p.image ? `<img src="${p.image}" alt="${p.title}" onerror="this.style.display='none'">` : `<span style="color:#69737e">PROJECT PREVIEW</span>`}
    </div>
    <div class="project-body">
      <div class="project-top"><h3>${p.title}</h3><span class="num">↗</span></div>
      <p>${p.description}</p>
      <div class="tags">${p.technologies.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="project-links">
        <a href="${p.demo}" target="_blank" rel="noopener">LIVE DEMO ↗</a>
        <a href="${p.github}" target="_blank" rel="noopener">GITHUB ↗</a>
      </div>
    </div>
  </article>
`).join("");

document.getElementById("gallery-grid").innerHTML = gallery.map((src, i) => `
  <div class="gallery-item reveal">
    <img src="${src}" alt="Abdulrahman photo ${i + 1}" loading="lazy" onerror="this.parentElement.style.display='none'">
  </div>
`).join("");

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".navbar nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});
