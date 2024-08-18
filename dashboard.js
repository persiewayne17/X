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

// Handle exit button click
const exitBtn = document.querySelector(".menu-item[data-target='exit']");
exitBtn.addEventListener("click", () => {
  // Redirect to the login page
  window.location.href = "index.html";
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
      content = `<h2>Home</h2><p>Welcome Home</p>`;
      break;
    case "settings":
      content = `<h2>Settings</h2><p>Customize your experience.</p>`;
      break;
    default:
      content = `<h2>Welcome to GIT PLUS</h2>`;
  }
  contentSection.innerHTML = content;
}

// Function to load external HTML content (e.g., charts, members)
function loadContent(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text();
    })
    .then((html) => {
      contentSection.innerHTML = html;

      // Dynamically load the corresponding JavaScript file after content is loaded
      let script;
      if (url === "members.html") {
        script = "members.js";
      } else if (url === "charts.html") {
        script = "charts.js";
      }

      if (script) {
        loadScript(script);
      }
    })
    .catch((error) => {
      console.error("Error loading content:", error);
      contentSection.innerHTML =
        "<p>Error loading content. Please try again.</p>";
    });
}

// Function to dynamically load a script with error handling
function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log(src + " loaded successfully.");
  };
  script.onerror = function () {
    console.error("Failed to load script " + src);
    contentSection.innerHTML +=
      "<p>Failed to load the script. Please try again later.</p>";
  };
  document.body.appendChild(script);
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
