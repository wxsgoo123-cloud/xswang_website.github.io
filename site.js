(() => {
  "use strict";
  const content = window.SITE_CONTENT;
  if (!content) return;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function safeUrl(value) {
    if (typeof value !== "string" || !value.trim()) return null;
    try {
      const url = new URL(value, document.baseURI);
      return ["https:", "http:", "mailto:"].includes(url.protocol) ? url.href : null;
    } catch {
      return null;
    }
  }

  function link(label, url, className) {
    const href = safeUrl(url);
    if (!href) return null;
    const node = element("a", className, label);
    node.href = href;
    return node;
  }

  const profileLinks = document.getElementById("profile-links");
  const links = [...content.links];
  if (content.cvUrl) links.push({ label: "CV (PDF)", url: content.cvUrl });
  for (const item of links) {
    const node = link(item.label, item.url);
    if (node) profileLinks.append(node);
  }

  if (content.portrait && safeUrl(content.portrait)) {
    const frame = document.getElementById("portrait-frame");
    const portrait = element("img", "portrait-image");
    portrait.alt = content.portraitAlt || "Profile portrait";
    portrait.width = 500;
    portrait.height = 600;
    // Preserve the clearly marked placeholder if the image cannot be loaded.
    portrait.addEventListener("load", () => frame.replaceChildren(portrait), { once: true });
    portrait.src = safeUrl(content.portrait);
  }

  const researchList = document.getElementById("research-list");
  content.interests.forEach((item, index) => {
    const article = element("article", "research-item");
    const number = element("span", "interest-number", String(index + 1).padStart(2, "0"));
    number.setAttribute("aria-hidden", "true");
    article.append(number, element("h3", "", item.title), element("p", "", item.text));
    researchList.append(article);
  });

  const paperList = document.getElementById("paper-list");
  content.papers.forEach((paper) => {
    const article = element("article", "paper");
    const meta = element("div", "paper-meta");
    meta.append(element("span", "paper-year", paper.year), element("span", "paper-status", paper.status));
    const body = element("div", "paper-body");
    body.append(element("h3", "paper-title", paper.title));
    const authors = element("p", "paper-authors");
    paper.authors.forEach((author, index) => {
      if (index) authors.append(document.createTextNode(", "));
      authors.append(author === "Xiaoshuang Wang" ? element("strong", "", author) : document.createTextNode(author));
    });
    body.append(authors, element("p", "paper-summary", paper.summary));
    if (paper.overview) {
      const details = element("details", "paper-details");
      details.append(element("summary", "", "Project overview"), element("p", "", paper.overview));
      body.append(details);
    }
    const paperLinks = element("div", "paper-links");
    (paper.links || []).forEach((item) => {
      const node = link(item.label, item.url, "text-link");
      if (node) paperLinks.append(node);
    });
    if (paperLinks.childElementCount) body.append(paperLinks);
    article.append(meta, body);
    paperList.append(article);
  });

  const educationList = document.getElementById("education-list");
  content.education.forEach((item) => {
    const row = element("article", "education-row");
    const detail = element("div");
    detail.append(element("h4", "", item.institution), element("p", "degree", item.degree));
    if (item.note) detail.append(element("p", "education-note", item.note));
    row.append(detail, element("p", "entry-date", item.date));
    educationList.append(row);
  });

  function renderEntries(id, entries) {
    const list = document.getElementById(id);
    entries.forEach((item) => {
      const article = element("article", "compact-entry");
      article.append(element("p", "entry-date", item.date), element("h4", "", item.title), element("p", "", item.text));
      list.append(article);
    });
  }
  renderEntries("experience-list", content.experience);
  renderEntries("teaching-list", content.teaching);
  renderEntries("awards-list", content.awards);

  const departmentLink = link("My ISyE profile ↗", content.departmentProfileUrl, "text-link");
  if (departmentLink) document.getElementById("department-profile-link").append(departmentLink);

  const menu = document.getElementById("main-nav");
  const toggle = document.querySelector(".menu-toggle");
  toggle.hidden = false;
  document.documentElement.classList.add("js-ready");
  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
  }
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(expanded));
    menu.classList.toggle("is-open", expanded);
  });
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      toggle.focus({ preventScroll: true });
    }
  });
  window.matchMedia("(min-width: 801px)").addEventListener("change", closeMenu);

  const navLinks = [...menu.querySelectorAll("a")];
  const sections = [...document.querySelectorAll("main > section[id]")];
  let scheduled = false;
  function updateNavigation() {
    let active = sections[0].id;
    const offset = window.innerWidth <= 800 ? 140 : 170;
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= offset) active = section.id;
    });
    if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 4) active = sections.at(-1).id;
    navLinks.forEach((item) => {
      if (item.hash === `#${active}`) item.setAttribute("aria-current", "location");
      else item.removeAttribute("aria-current");
    });
    scheduled = false;
  }
  window.addEventListener("scroll", () => {
    if (!scheduled) { scheduled = true; window.requestAnimationFrame(updateNavigation); }
  }, { passive: true });
  window.addEventListener("resize", updateNavigation);
  updateNavigation();
  document.getElementById("copyright-year").textContent = new Date().getFullYear();
})();
