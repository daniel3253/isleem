function doit() {
  var nav = document.getElementById("nav");
  nav.classList.add("slide1");
  document.body.style.overflow = "hidden"; 
}

document.getElementById("closeBtn").addEventListener("click", function() {
  document.getElementById("nav").classList.remove("slide1");
  document.body.style.overflow = "auto";
});

const header = document.getElementById('myHeader');
  const offsetTop = 50;

  window.addEventListener('scroll', () => {
    if (window.scrollY >= offsetTop) {
      header.classList.add('fixed-header');
    } else {
      header.classList.remove('fixed-header');
    }
  });