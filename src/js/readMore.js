const serviseCardTxt = document.querySelectorAll(".card-text");
const ReadMore = document.querySelectorAll(".readMore");

ReadMore.forEach((button, index) => {
  let isOpen = false;

  button.addEventListener("click", () => {
    if (isOpen) {
      serviseCardTxt[index].style.height = "113px";
      button.textContent = "Read more";
    } else {
      serviseCardTxt[index].style.height = "auto";
      button.textContent = "Read less";
    }

    isOpen = !isOpen;
  })
});

