const funFactButton = document.querySelector("#fun-fact-button");
const funFact = document.querySelector("#fun-fact");

if (funFactButton && funFact) {
  funFactButton.addEventListener("click", () => {
    const isHidden = funFact.hidden;
    funFact.hidden = !isHidden;
    funFactButton.setAttribute("aria-expanded", String(isHidden));
    funFactButton.textContent = isHidden ? "Hide the fun fact" : "Show a fun fact";
  });
}
