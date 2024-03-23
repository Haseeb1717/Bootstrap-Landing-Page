AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll('#counter h1');
  const targets = [630, 600, 100, 1000];
  // Define an array to store interval IDs
  const intervals = [];

  // Loop through each counter element
  counters.forEach((counter, index) => {
    let count = 0;
    // Set up interval for each counter
    intervals[index] = setInterval(() => {
      // Check if count is less than or equal to the target value
      if (count <= targets[index]) {
        // Update the counter's text content with the current count
        counter.textContent = count;
        // Increment the count
        count++;
      } else {
        // If count exceeds the target value, clear the interval
        clearInterval(intervals[index]);
      }
    }, 10); // Interval time in milliseconds (adjust as needed)
  });
});
