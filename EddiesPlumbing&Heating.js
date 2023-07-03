// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    var slideIndex = 0;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var autoSlideInterval = 5000; // Interval between automatic slide transitions in milliseconds
  
    showSlides();
  
    // Function to show the slides
    function showSlides() {
      // Hide all slides and remove the "active" class from all dots
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
      }
  
      slideIndex++;
  
      // Wrap around to the first slide if at the end
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
  
      // Display the current slide and add the "active" class to the corresponding dot
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
  
      // Restart the automatic slideshow timer
      resetAutoSlide();
    }
  
    // Function to start the automatic slideshow
    function startAutoSlide() {
      stopAutoSlide(); // Clear any existing interval
      autoSlideIntervalId = setInterval(function() {
        showSlides();
      }, autoSlideInterval);
    }
  
    // Function to stop the automatic slideshow
    function stopAutoSlide() {
      if (autoSlideIntervalId) {
        clearInterval(autoSlideIntervalId);
        autoSlideIntervalId = null;
      }
    }
  
    // Function to reset the automatic slideshow interval
    function resetAutoSlide() {
      stopAutoSlide();
      startAutoSlide();
    }
  
    // Get the previous and next buttons
    var prevButton = document.querySelector(".prev");
    var nextButton = document.querySelector(".next");
  
    // Add click event listeners to the buttons
    prevButton.addEventListener("click", function() {
      slideIndex--;
      if (slideIndex < 1) {
        slideIndex = slides.length;
      }
      showSlides();
    });
  
    nextButton.addEventListener("click", function() {
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      showSlides();
    });
  
    // Get the form element
    var form = document.querySelector("form");
  
    // Add a submit event listener to the form
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Get the form input values
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var message = document.getElementById("message").value;
  
      // Perform any validation if needed
      if (!name || !email || !phone || !message) {
        // Display an error message if any field is empty
        alert("Please fill in all the fields");
        return;
      }
  
      // Display a success message
      var main = document.querySelector("main");
      var successMessage = document.createElement("p");
      successMessage.textContent = "Thank you for your request, " + name + "! We will get back to you soon.";
      main.appendChild(successMessage);
  
      // Clear the form inputs
      form.reset();
    });
  
    // Start the automatic slideshow
    startAutoSlide();
  });
  