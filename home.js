document.addEventListener("DOMContentLoaded", () => {
  // Animate stats
  const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  animateValue(document.getElementById("active-projects"), 0, 15, 1500);
  animateValue(document.getElementById("team-members"), 0, 50, 1500);

  const clientSatisfaction = document.getElementById("client-satisfaction");
  animateValue(clientSatisfaction, 0, 98, 1500);
  clientSatisfaction.innerHTML += "%";

  // Simple animation for service items
  const serviceItems = document.querySelectorAll(".service-item");

  serviceItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.5s ease, transform 0.5s ease";

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, 200 * (index + 1));
  });
});
