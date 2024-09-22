window.onload = function () {
  window.scrollTo(0, 0);
};

function switchTab(tabId) {
  const tabButton = document.querySelector(`#${tabId}-tab`);
  if (tabButton) {
    tabButton.click(); // Simulate a click on the corresponding tab button
  }
}
const counters = document.querySelectorAll(".count");
const speed = 200; // Adjust this value to control speed of increment

counters.forEach((counter) => {
  const target = +counter.getAttribute("data-target");
  let count = 0; // Start from 0 for counting

  const updateCount = () => {
    if (counter.innerText.includes("/")) {
      // For customer satisfaction rate, keep it fixed
      counter.innerText = `9.8 / ${target}`;
    } else {
      const increment = target / speed;

      if (count < target) {
        count = Math.min(count + increment, target); // Ensure count does not exceed target
        counter.innerText = Math.ceil(count).toLocaleString(); // Format as a whole number
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target.toLocaleString(); // Ensure final display
      }
    }
  };

  // Generate a random value for the first two counters
  if (!counter.innerText.includes("/")) {
    const randomValue = Math.floor(Math.random() * (target + 1)); // Generate random value up to target
    counter.innerText = randomValue; // Set initial random value
    count = randomValue; // Start counting from the random value
  }

  updateCount();
});

