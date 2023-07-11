document.addEventListener("DOMContentLoaded", function() {

  var tabLinks = document.querySelectorAll(".tab-link");

 
  var sections = document.querySelectorAll(".content-section");

  tabLinks.forEach(function(tabLink) {
    tabLinks.addEventListener("click", function(event) {
      event.preventDefault();

      
      tabLinks.forEach(function(link) {
        link.classList.remove("active");
      });

      
      tabLinks.classList.add("active");

      
      var target = tabLinks.getAttribute("href");

       
      sections.forEach(function(section) {
        section.classList.remove("active");
      });

      
      document.querySelector(tabLinks).classList.add("active");
    });
  });
});
