// todo up arrow
let arrow = document.querySelector(".arrow");
arrow.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// done

// todo animation on scrolling
let progress = [];
let span = document.querySelectorAll(`.skills .skill h3 span`);
let sectionSkills = document.getElementById("our-skills").offsetTop;
for (let i = 0; i < span.length; i++) {
  progress.push(span[i].innerHTML);
}

// done

// todo counter stats
let sectionStats = document.getElementById("stats").offsetTop;
let statsSpan = document.querySelectorAll(".stats .box span");

let started = false;

function counter(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === goal) clearInterval(count);
  }, 1000 / goal);
}

// done
// todo Progress-height

let ProgressHeight = document.querySelector(".Progress-height");
console.log(ProgressHeight);
window.onscroll = function () {
  let hight = window.scrollY;
  // progress hight
  ProgressHeight.style.width = `${
    (hight / (document.documentElement.scrollHeight- document.documentElement.clientHeight)) * 100
  }%`;

  if (hight >= 600) {
    arrow.classList = "arrow show";
  } else {
    arrow.classList = "arrow";
  }
  if (hight >= sectionSkills) {
    let spanProgress = document.querySelectorAll(".skills .the-progress span ");
    for (let i = 0; i < spanProgress.length; i++) {
      spanProgress[i].style.width = progress[i];
    }
  }
  if (hight >= sectionStats) {
    if (!started) {
      statsSpan.forEach((span) => counter(span));
      started = true;
    }
  }
};
