// Add Miss Cee's contact details here. Only filled entries appear on the page.
var CONTACT = {
  email: "stylesbyceestyles@gmail.com",
  phone: "09038896523",
  github: "https://github.com/Missceedigital",
  facebook: "https://www.facebook.com/share/1H2h7CbpEb/"
};

(function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile menu
  var btn = document.getElementById("menuBtn");
  var nav = document.getElementById("nav");
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });

  // Contact links (only those that are filled in)
  var list = document.getElementById("contactList");
  var items = [
    ["Email", CONTACT.email ? "mailto:" + CONTACT.email : "", "Email: " + CONTACT.email],
    ["Phone", CONTACT.phone ? "tel:" + CONTACT.phone : "", "Phone: " + CONTACT.phone],
    ["Facebook", CONTACT.facebook, "Facebook"],
    ["GitHub", CONTACT.github, "GitHub"]
  ];
  var added = 0;
  items.forEach(function (it) {
    if (!it[1]) return;
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = it[1];
    a.textContent = it[2];
    if (it[1].indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
    li.appendChild(a);
    list.appendChild(li);
    added++;
  });
  if (!added) {
    var li = document.createElement("li");
    li.className = "empty";
    li.textContent = "Contact links coming soon.";
    list.appendChild(li);
  }

  // Lightbox
  var box = document.getElementById("lightbox");
  var img = document.getElementById("lbImg");
  var cap = document.getElementById("lbCap");
  document.querySelectorAll(".thumb").forEach(function (t) {
    t.addEventListener("click", function () {
      img.src = t.dataset.full;
      img.alt = t.querySelector("img").alt;
      cap.textContent = t.dataset.cap;
      if (box.showModal) box.showModal();
    });
  });
  box.addEventListener("click", function (e) { if (e.target === box) box.close(); });
})();
