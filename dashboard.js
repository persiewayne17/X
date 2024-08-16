const sidebar = document.getElementById("sidebar");
const mainContent = document.querySelector(".main-content");
const toggleBtn = document.getElementById("toggle-btn");
const menuItems = document.querySelectorAll(".menu-item");
const contentSection = document.getElementById("content-section");

function toggleSidebar() {
  sidebar.classList.toggle("active");
  toggleBtn.innerHTML = sidebar.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
}

toggleBtn.addEventListener("click", toggleSidebar);

document.addEventListener("click", (event) => {
  if (
    !sidebar.contains(event.target) &&
    !toggleBtn.contains(event.target) &&
    window.innerWidth <= 768
  ) {
    sidebar.classList.remove("active");
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const target = item.getAttribute("data-target");
    menuItems.forEach((menu) => menu.classList.remove("active"));
    item.classList.add("active");
    if (target === "charts") {
      loadContent("charts.html");
    } else {
      updateContent(target);
    }
    if (window.innerWidth <= 768) {
      sidebar.classList.remove("active");
      toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});

function updateContent(target) {
  let content = "";
  switch (target) {
    case "home":
      content = `<h2>Welcome to Control Panel</h2><p>Your collaborative coding journey starts here.</p>`;
      break;
    case "members":
      content = `<h2>Members</h2><p>View and manage your team members here.</p>`;
      break;
    case "settings":
      content = `<h2>Settings</h2><p>Customize your Control Panel experience.</p>`;
      break;
    case "exit":
      content = `<h2>Exit</h2><p>Thank you for using Control Panel. See you soon!</p>`;
      break;
    default:
      content = `<h2>Welcome to Control Panel</h2><p>Your collaborative coding journey starts here.</p>`;
  }
  contentSection.innerHTML = content;
}

function loadContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      contentSection.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error loading content:", error);
      contentSection.innerHTML =
        "<p>Error loading content. Please try again.</p>";
    });
}

// Adjust sidebar visibility on window resize
window.addEventListener("resize", adjustSidebar);

function adjustSidebar() {
  if (window.innerWidth > 768) {
    sidebar.classList.add("active");
    toggleBtn.style.display = "none";
  } else {
    sidebar.classList.remove("active");
    toggleBtn.style.display = "block";
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
  }
}

// Initial sidebar state and content
adjustSidebar();
updateContent("home");
