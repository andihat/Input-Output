document.addEventListener("DOMContentLoaded", function() {
    const blob = document.getElementById("blob");

    document.body.onpointermove = event => {
        const { clientX, clientY } = event;

        blob.animate({
            left: `${clientX + window.scrollX}px`,
            top: `${clientY + window.scrollY}px`
            
            
        } , {duration: 3000, fill: "forwards"})  ;
    }


    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          entry.target.classList.add('show');
          console.log(true);
        }else {
          entry.target.classList.remove('show');
        }
      })
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});



// Get a reference to the button element
const scrollBtn = document.getElementById("scrollBtn");

// Set the y-coordinate of the scroll trigger
const scrollTrigger = 1000;
scrollBtn.style.display = "none";
// Add a scroll event listener to the window object
window.onscroll = function() {
  // Get the current y-coordinate of the scroll position
  const y = window.scrollY;

  // If the y-coordinate is greater than the scroll trigger, show the button
  if (y > scrollTrigger) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Add the scrollByAmount function to the button's onclick event
function scrollByAmount() {
    const startY = window.pageYOffset;
    const endY = startY + 1200;
    const distance = endY - startY;
    const duration = 1000; // in milliseconds
  
    let startTime = null;
  
    function animation(currentTime) {
      if (!startTime) {
        startTime = currentTime;
      }
  
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * ease);
  
      if (progress < 1) {
        window.requestAnimationFrame(animation);
      }
    }
  
    window.requestAnimationFrame(animation);
  }
  
  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }
  


