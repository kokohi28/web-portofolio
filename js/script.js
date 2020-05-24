window.addEventListener("load", function() {
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(function() {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);
});

// Aside navbar
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  let a = navList[i].querySelector("a");
  a.addEventListener("click", function() {
    // remove back-section
    for (let k = 0; k < totalSection; k++) {
      allSection[k].classList.remove("back-section");
    }

    for (let j = 0; j < totalNavList; j++) {
      // add back-section
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }

      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    showSection(this);

    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  let target = element.getAttribute("href").split('#')[1];
  document.querySelector("#" + target).classList.add("active");
}

// Menu toggler
const menuTogglerBtn = document.querySelector(".menu-toggler"),
      aside = document.querySelector(".aside");

menuTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  menuTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

// Email Me
document.querySelector(".email-me").addEventListener("click", function() {
  // let idx = this.getAttribute("data-section-index");
  // console.log(idx);
  funcEmailMe();
});

function funcEmailMe() {
  let mailAddr = 'himawan.koko@gmail.com';
  let mailSubject = 'Interested%20in%20your%20CV';
  let mailBody = 'Hi%20Koko…';
  let mailStr = `mailto:${mailAddr}?subject=${mailSubject}&body=${mailBody}`; 
  console.log(mailStr)
  window.open(mailStr);
}
