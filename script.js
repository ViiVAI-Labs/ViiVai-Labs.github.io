const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const visitorCount = document.querySelector("[data-visitor-count]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open");
  });
}

async function updateVisitorCount() {
  if (!visitorCount) {
    return;
  }

  const namespace = "viivai-labs";
  const key = "site-visits";
  const sessionKey = "viivai-visit-counted";
  const endpoint = sessionStorage.getItem(sessionKey)
    ? `https://api.countapi.xyz/get/${namespace}/${key}`
    : `https://api.countapi.xyz/hit/${namespace}/${key}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    if (typeof data.value === "number") {
      visitorCount.textContent = data.value.toLocaleString();
      sessionStorage.setItem(sessionKey, "true");
    } else {
      visitorCount.textContent = "Live";
    }
  } catch (error) {
    visitorCount.textContent = "Live";
  }
}

updateVisitorCount();

const successMessage = document.querySelector("[data-contact-success]");

if (successMessage) {
  const params = new URLSearchParams(window.location.search);

  if (params.get("submitted") === "1") {
    successMessage.hidden = false;
  }
}
