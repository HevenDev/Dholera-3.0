document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const parentPopup = document.querySelector(".parentPopup");
  const closeBtn = document.querySelector(".closeBtn");
  const popButtons = document.querySelectorAll(".popButton");

  // Function to show the popup
  const showPopup = () => {
    popup.classList.add("popup-active");
    parentPopup.classList.add("parentPopup-active");
  };

  // Function to hide the popup
  const hidePopup = () => {
    popup.classList.remove("popup-active");
    parentPopup.classList.remove("parentPopup-active");
  };

  // Show popup after 5 seconds on page load
  setTimeout(showPopup, 5000);

  // Set interval to show popup every 1 minute
  setInterval(showPopup, 60000);

  // Add event listener to close button
  closeBtn.addEventListener("click", hidePopup);

  // Add event listeners to all buttons with class 'popButton'
  popButtons.forEach((btn) => {
    btn.addEventListener("click", showPopup);
  });
});