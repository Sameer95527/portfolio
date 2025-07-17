// 🌙 Dark Mode Toggle
document.getElementById('darkToggle').onclick = function () {
  document.body.classList.toggle('dark-mode');
};

// 🌐 Language Toggle (English ⇄ Japanese)
function switchLang() {
  const en = document.querySelectorAll('.lang-en');
  const jp = document.querySelectorAll('.lang-jp');

  en.forEach(el => {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  });

  jp.forEach(el => {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  });
}

// ⌨️ Typing Animation
const text = "Hi, I'm Sameer";
let i = 0;
const speed = 100;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
