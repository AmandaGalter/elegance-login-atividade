document.addEventListener("scroll", function () {
  const icon = document.getElementById("whatsappIcon");
  const scrollPosition = window.scrollY + window.innerHeight - 80;
  icon.style.top = `${scrollPosition}px`;
});

