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

const goalInput = document.querySelector("#goal-input");
const addGoalButton = document.querySelector("#add-goal-button");
const goalList = document.querySelector("#goal-list");
const goalMessage = document.querySelector("#goal-message");

if (goalInput && addGoalButton && goalList && goalMessage) {
  const addGoal = () => {
    const goalText = goalInput.value.trim();

    if (goalText.length === 0) {
      goalMessage.textContent = "Please enter a learning goal first.";
      goalInput.focus();
      return;
    }

    const goalItem = document.createElement("li");
    const goalLabel = document.createElement("span");
    const removeButton = document.createElement("button");

    goalLabel.textContent = goalText;
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-goal-button");
    removeButton.setAttribute("aria-label", `Remove goal: ${goalText}`);

    removeButton.addEventListener("click", () => {
      goalItem.remove();
      goalMessage.textContent = `Removed goal: ${goalText}`;
      goalInput.focus();
    });

    goalItem.appendChild(goalLabel);
    goalItem.appendChild(removeButton);
    goalList.appendChild(goalItem);

    goalMessage.textContent = `Added goal: ${goalText}`;
    goalInput.value = "";
    goalInput.focus();
  };

  addGoalButton.addEventListener("click", addGoal);

  goalInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addGoal();
    }
  });
}
