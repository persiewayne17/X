// Get references to necessary elements
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggle-btn");
const menuItems = document.querySelectorAll(".menu-item");
const contentSection = document.getElementById("content-section");

// Function to toggle sidebar visibility
function toggleSidebar() {
  sidebar.classList.toggle("active"); // Toggle the 'active' class on the sidebar
}

// Event listener for the custom toggle button
toggleBtn.addEventListener("click", toggleSidebar);

// Close the sidebar if clicked outside of it on smaller screens
document.addEventListener("click", (event) => {
  if (
    !sidebar.contains(event.target) && // If click is outside the sidebar
    !toggleBtn.contains(event.target) && // If click is outside the toggle button
    window.innerWidth <= 768 // Only apply on screens smaller than 768px
  ) {
    sidebar.classList.remove("active"); // Hide the sidebar
  }
});

// Function to handle menu item clicks and load content
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const target = item.getAttribute("data-target");
    menuItems.forEach((menu) => menu.classList.remove("active")); // Remove 'active' class from all menu items
    item.classList.add("active"); // Add 'active' class to the clicked item
    if (target === "charts") {
      loadContent("charts.html"); // Load charts.html content
    } else if (target === "members") {
      loadContent("members.html"); // Load members.html content
    } else {
      updateContent(target); // Load other sections
    }
    if (window.innerWidth <= 768) {
      sidebar.classList.remove("active"); // Hide the sidebar on small screens after menu item click
    }
  });
});

// Function to update the content section with static content
function updateContent(target) {
  let content = "";
  switch (target) {
    case "home":
      content = `<h2>Home</h2><p>Your collaborative coding journey starts here.</p>`;
      break;
    case "members":
      content = `<h2>Members</h2><p>View and manage your team members here.</p>`;
      break;
    case "settings":
      content = `<h2>Settings</h2><p>Customize your Dashboard experience.</p>`;
      break;
    case "exit":
      content = `<h2>Exit</h2><p>Thank you for using the Dashboard. See you soon!</p>`;
      break;
    default:
      content = `<h2>Welcome to the Dashboard</h2><p>Your collaborative coding journey starts here.</p>`;
  }
  contentSection.innerHTML = content;
}

// Function to load external HTML content (e.g., charts, members)
function loadContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      contentSection.innerHTML = html;

      // Dynamically load the corresponding JavaScript file after content is loaded
      if (url === "members.html") {
        const script = document.createElement("script");
        script.src = "members.js";
        document.body.appendChild(script);
      } else if (url === "charts.html") {
        const script = document.createElement("script");
        script.src = "charts.js";
        document.body.appendChild(script);
      }
    })
    .catch((error) => {
      console.error("Error loading content:", error);
      contentSection.innerHTML =
        "<p>Error loading content. Please try again.</p>";
    });
}

// Adjust the sidebar visibility based on screen size
window.addEventListener("resize", adjustSidebar);

function adjustSidebar() {
  if (window.innerWidth > 768) {
    sidebar.classList.remove("active"); // Show sidebar by default on larger screens
  } else {
    sidebar.classList.remove("active"); // Hide sidebar on smaller screens by default
    toggleBtn.style.display = "block"; // Ensure toggle button is visible on smaller screens
  }
}

// Initial setup: adjust sidebar visibility and load default content
adjustSidebar();
updateContent("home"); // Load the home content by default
