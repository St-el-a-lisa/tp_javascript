const counterDisplay = document.querySelector("h3");
let counter = 0;

const shibaMaker = () => {
  const shiba = document.createElement("span");
  shiba.classList.add("shiba");
  document.body.appendChild(shiba);

  //   const size = Math.random() * 200 + 100 + "px";

  //   shiba.style.height = size;
  //   shiba.style.width = size;

  shiba.style.top = Math.random() * 100 + 50 + "%";
  shiba.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  shiba.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  shiba.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    shiba.remove();
  });
  setTimeout(() => {
    shiba.remove();
  }, 8000);
};

setInterval(shibaMaker, 800);
