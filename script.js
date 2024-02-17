const shareData = {
  title: "Пулатов Каримжан",
  text: "+996 502 28 88 82",
  url: "https://developer.mozilla.org",
};

const btn = document.querySelector("buttons2");
const resultPara = document.querySelector(".result");

btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = "MDN shared successfully";
  } catch (err) {
    resultPara.textContent = `Error: ${err}`;
  }
});


console.log("123")