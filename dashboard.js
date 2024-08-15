const sidebar = document.getElementById("sidebar");
const mainContent = document.querySelector(".main-content");
const toggleBtn = document.getElementById("toggle-btn");
const closeBtn = document.getElementById("close-btn");
const menuItems = document.querySelectorAll(".menu-item");
const contentSection = document.getElementById("content-section");
const themeToggle = document.getElementById("theme-toggle");

function toggleSidebar() {
  sidebar.classList.toggle("active");
  mainContent.classList.toggle("sidebar-active");
  toggleBtn.classList.toggle("active");
}

toggleBtn.addEventListener("click", toggleSidebar);

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  mainContent.classList.remove("sidebar-active");
  toggleBtn.classList.remove("active");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const target = item.getAttribute("data-target");
    menuItems.forEach((menu) => menu.classList.remove("active"));
    item.classList.add("active");
    updateContent(target);

    if (window.innerWidth <= 768) {
      sidebar.classList.remove("active");
      mainContent.classList.remove("sidebar-active");
      toggleBtn.classList.remove("active");
    }
  });
});

function updateContent(target) {
  let content = "";
  switch (target) {
    case "home":
      content = `<h2>Welcome to Git Plus</h2><p>Your collaborative coding journey starts here.</p>`;
      break;
    case "members":
      content = `<h2>Members</h2><p>View and manage your team members here.</p>`;
      break;
    case "charts":
      content = `<h2>Charts</h2><p>Visualize your project progress and statistics.</p>`;
      break;
    case "settings":
      content = `<h2>Settings</h2><p>Customize your Git Plus experience.</p>`;
      break;
    case "exit":
      content = `<h2>Exit</h2><p>Thank you for using Git Plus. See you soon!</p>`;
      break;
    default:
      content = `<h2>Welcome to Git Plus</h2><p>Your collaborative coding journey starts here.</p>`;
  }
  contentSection.innerHTML = content;
}

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

// Initialize with home content
updateContent("home");
