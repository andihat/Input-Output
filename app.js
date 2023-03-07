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




const scrollBtn = document.getElementById("scrollBtn");
const scrollTrigger = 1000;
scrollBtn.style.display = "none";
bar.style.display = "none"

window.onscroll = function() {
  
  const y = window.scrollY;

  console.log(y)
  
  if (y > scrollTrigger) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }

  if (y > scrollTrigger) {
    bar.style.display = "block";
    bar.classList.add('show2');
  } else {
    bar.style.display = "none";
  }

  if (y > 1000 && y < 1700) {
    intro.style.display = "block";
    intro.classList.add('show3');
  } else if (y > 1800) {
    intro.classList.remove('show3')
    intro.classList.add('pH')
  }else {
    intro.classList.remove('pH')
  }

  if (y > 1800 && y < 4000) {
    input.style.display = "block";
    input.classList.add('show3');
  } else if (y > 4000) {
    input.classList.remove('show3')
    input.classList.add('pH')
  }else if (y < 1800) {
    input.classList.remove('show3')
    input.classList.remove('pH')
  }

 if (y > 4000 && y < 7816) {
    ilMouse.style.display = "block";
    ilMouse.classList.add('show3');
  } else if (y > 7816) {
    ilMouse.classList.remove('show3')
    ilMouse.classList.add('pH')
  }else if (y < 7816) {
    ilMouse.classList.remove('show3')
    ilMouse.classList.remove('show3')
  } 

  if (y > 7816 && y < 11356) {
    laTastiera.style.display = "block";
    laTastiera.classList.add('show3');
  } else if (y > 11356) {
    laTastiera.classList.remove('show3')
    laTastiera.classList.add('pH')
  }else if (y < 11356) {
    laTastiera.classList.remove('show3')
    laTastiera.classList.remove('show3')
  }

  if (y > 11356 && y < 12464) {
    output.style.display = "block";
    output.classList.add('show3');
  } else if (y > 12464) {
    output.classList.remove('show3')
    output.classList.add('pH')
  }else if (y < 12464) {
    output.classList.remove('show3')
    output.classList.remove('show3')
  }

  if (y > 12464 && y < 17392) {
    monitor.style.display = "block";
    monitor.classList.add('show3');
  } else if (y > 17392) {
    monitor.classList.remove('show3')
    monitor.classList.add('pH')
  }else if (y < 17392) {
    monitor.classList.remove('show3')
    monitor.classList.remove('show3')
  }

  if (y > 17392 && y < 19890) {
    gliAltoparlanti.style.display = "block";
    gliAltoparlanti.classList.add('show3');
  } else if (y > 19890) {
    gliAltoparlanti.classList.remove('show3')
    gliAltoparlanti.classList.add('pH')
  }else if (y < 19890) {
    gliAltoparlanti.classList.remove('show3')
    gliAltoparlanti.classList.remove('show3')
  }


};


function scrollByAmount() {
    const startY = window.pageYOffset;
    const endY = startY + 1200;
    const distance = endY - startY;
    const duration = 1000; 
  
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
  


