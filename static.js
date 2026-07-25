/* Interactividad del sitio estático — sin frameworks */
document.addEventListener("DOMContentLoaded", function () {
  // Iconos (lucide reemplaza <i data-lucide> por SVG)
  if (window.lucide) lucide.createIcons();

  // ---- Menú móvil (hamburguesa) ----
  var burger = document.querySelector(".nav-burger");
  var menu = document.querySelector(".nav-menu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.style.display === "flex";
      menu.style.display = open ? "none" : "flex";
      burger.setAttribute("aria-expanded", String(!open));
    });
  }

  // ---- Acordeón de beneficios ----
  document.querySelectorAll(".syt-acc").forEach(function (acc) {
    acc.querySelectorAll(".syt-acc-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".syt-acc-item");
        acc.querySelectorAll(".syt-acc-item").forEach(function (it) { it.classList.remove("open"); });
        item.classList.add("open");
      });
    });
  });

  // ---- Carrusel de fotos ----
  document.querySelectorAll(".syt-slider").forEach(function (slider) {
    var slides = slider.querySelectorAll(".syt-slide");
    var prev = slider.querySelector(".syt-sl-prev");
    var next = slider.querySelector(".syt-sl-next");
    var mq = window.matchMedia("(max-width: 820px)");
    var i = 0;
    function per() { return mq.matches ? 1 : 2; }
    function render() {
      var p = per();
      slides.forEach(function (s, k) { s.style.display = k >= i && k < i + p ? "block" : "none"; });
      prev.disabled = i === 0;
      next.disabled = i + p >= slides.length;
    }
    prev.addEventListener("click", function () { i = Math.max(0, i - per()); render(); });
    next.addEventListener("click", function () { if (i + per() < slides.length) { i = i + per(); render(); } });
    if (mq.addEventListener) mq.addEventListener("change", function () { i = 0; render(); });
    render();
  });

  // ---- Formulario de contacto → WhatsApp ----
  var send = document.getElementById("syt-quote-send");
  if (send) {
    send.addEventListener("click", function () {
      var v = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ""; };
      var lineas = [
        "Hola, quiero agendar una consulta gratis.",
        "Nombre: " + v("syt-q-nombre"),
        "Teléfono: " + v("syt-q-tel"),
        v("syt-q-correo") && "Correo: " + v("syt-q-correo"),
        v("syt-q-msg") && "Necesito: " + v("syt-q-msg"),
      ].filter(Boolean);
      window.open("https://wa.me/526864657305?text=" + encodeURIComponent(lineas.join("\n")), "_blank");
    });
  }
});
