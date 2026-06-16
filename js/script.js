// Intersection Observer
const elements = document.querySelectorAll(".mujuryoku");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
elements.forEach(el => observer.observe(el));



// アイス選択
const maxSelect = 5;
const images = document.querySelectorAll('.ice');
const countText = document.getElementById('count');

images.forEach(img => {
  img.addEventListener('click', () => {
    const selected = document.querySelectorAll('.selected').length;

    if (img.classList.contains('selected')) {
      img.classList.remove('selected');
    } else {
      if (selected >= maxSelect) {
        alert("選べるのは最大5つまでです");
        return;
      }
      img.classList.add('selected');
    }

    const newCount = document.querySelectorAll('.selected').length;
    countText.textContent = `選択数: ${newCount} / ${maxSelect}`;
  });
});



// 宇宙飛行士のコメントここから
document.addEventListener("DOMContentLoaded", () => {
  const come1 = document.getElementById("come1");
  const come2 = document.getElementById("come2");

  come1.addEventListener("click", () => {

    // スマホ
    if (window.innerWidth <= 768) {
      return;
    }

    const isHidden = getComputedStyle(come2).display === "none";
    come2.style.display = isHidden ? "block" : "none";
  });
});
// document.addEventListener("DOMContentLoaded", () => {
//   const come1 = document.getElementById("come1");
//   const come2 = document.getElementById("come2");

//   come1.addEventListener("click", () => {
//     const isHidden = getComputedStyle(come2).display === "none";

//     come2.style.display = isHidden ? "block" : "none";
//   });
// });
