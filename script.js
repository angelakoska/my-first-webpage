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

const topicInput = document.querySelector("#topic-input");
const topicPreview = document.querySelector("#topic-preview");

if (topicInput && topicPreview) {
  topicInput.addEventListener("input", () => {
    const topic = topicInput.value.trim();
    const hasTopic = topic.length > 0;

    topicPreview.textContent = hasTopic
      ? `I'm interested in learning about ${topic}.`
      : "Your topic preview will appear here.";

    topicPreview.classList.toggle("has-text", hasTopic);
  });
}
