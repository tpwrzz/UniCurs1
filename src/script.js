let wave1 = document.getElementById('Wave1');
let wave2 = document.getElementById('Wave2');
let wave3 = document.getElementById('Wave3');
let wave4 = document.getElementById('Wave4');
let wave5 = document.getElementById('Wave5');
let wave6 = document.getElementById('Wave6');
let wave7 = document.getElementById('Wave7');
let wave8 = document.getElementById('Wave8');
let wave9 = document.getElementById('Wave9');
let initialBannerPosition = 0;
let initialFontSize = 5;
let isMinimized = false;
var headerText = document.getElementById('stickyTitle');
var bannerText = document.getElementById('title');
var header = document.querySelector('header');
var banner = document.querySelector('#banner');

let locale = 'ro';

let translations = {};

window.addEventListener('DOMContentLoaded', function () {
  setLocale(locale);
  var bannerText = document.getElementById('title');
  var bannerRect = bannerText.getBoundingClientRect();
  initialBannerPosition = bannerRect.top + window.scrollY;
});

window.addEventListener('scroll', () => {
  let { scrollY } = window;
  wave1.style.top = 0.01 * scrollY + 'px';
  wave2.style.top = 0.2 * scrollY + 'px';
  wave3.style.top = 0.3 * scrollY + 'px';
  wave4.style.top = 0.4 * scrollY + 'px';
  wave5.style.top = 0.5 * scrollY + 'px';
  wave6.style.top = 0.6 * scrollY + 'px';
  wave7.style.top = 0.7 * scrollY + 'px';
  wave8.style.top = 0.8 * scrollY + 'px';
  wave9.style.top = 0.9 * scrollY + 'px';

  var bannerInitialTop = initialBannerPosition + window.scrollY;
  var maxMoveDown = Math.max(0, bannerInitialTop);
  bannerText.style.top = Math.min(maxMoveDown, window.innerHeight) + 'px';
  var scaleFactor = Math.max(1 - scrollY / window.innerHeight, 0);
  var fontSize = initialFontSize * scaleFactor;
  bannerText.style.fontSize = fontSize + 'rem';
  var bannerBottom = banner.getBoundingClientRect().bottom;
  var headerHeight = header.offsetHeight;

  if (bannerBottom <= headerHeight) {
    header.style.backgroundColor = '#48CAE4';
    headerText.style.opacity = '1';
  } else {
    header.style.backgroundColor = 'transparent';
    headerText.style.opacity = '0';
  }
});

const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};
const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}
window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

function toggleCollapsible(toggler) {
  var coll = toggler.parentElement;
  coll.classList.toggle("open");
  if (coll.classList.contains("open")) {
    coll.style.maxHeight = coll.scrollHeight + "px";
  } else {
    coll.style.maxHeight = null;
  }
}

document.getElementById("localisation-switcher").addEventListener("change", () => {
  locale = document.getElementById("localisation-switcher").value;
  setLocale(locale);
});

const setLocale = (newLocale) => {
  fetchTranslations(newLocale).then(result=>{translations=result;translatePage();});
}

const fetchTranslations = async (newLocale) => {
  const response = await fetch(`src/lang/${newLocale}.json`);
  return response.json();
};

const translatePage = () => {
  document.querySelectorAll('[localisation-key]').forEach((element) => {
    let key = element.getAttribute('localisation-key');
    let translation = translations[key];
    element.innerHTML = translation;
  });
};

document.getElementById("nav-mini").addEventListener("click",()=>{
  document.getElementById('nav').classList.toggle('active');
});
