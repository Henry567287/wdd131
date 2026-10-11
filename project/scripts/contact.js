const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

function showMessage(message, isSuccess) {
  if (!formMessage) return;
  formMessage.textContent = message;
  formMessage.classList.toggle("message-success", isSuccess);
  formMessage.classList.toggle("message-error", !isSuccess);
  formMessage.setAttribute("role", "status");
}

function handleFormSubmit(event) {
  event.preventDefault();
  if (!contactForm || !formMessage) return;

  const formData = new FormData(contactForm);
  const suggestion = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    destination: String(formData.get("destination") || "").trim(),
    category: String(formData.get("category") || ""),
    message: String(formData.get("message") || "").trim(),
    dateSubmitted: new Date().toISOString()
  };

  if (!suggestion.name || !suggestion.email || !suggestion.destination || !suggestion.category || !suggestion.message) {
    showMessage("Please complete every required field.", false);
    return;
  }

  saveSuggestion(suggestion);
}

function saveSuggestion(suggestion) {
  try {
    const storedValue = localStorage.getItem("ugandaSuggestions");
    const savedSuggestions = storedValue ? JSON.parse(storedValue) : [];

    if (!Array.isArray(savedSuggestions)) {
      throw new Error("Saved suggestions are not in the expected format.");
    }

    savedSuggestions.push(suggestion);
    localStorage.setItem("ugandaSuggestions", JSON.stringify(savedSuggestions));
    showMessage(`Thank you, ${suggestion.name}! Your suggestion for ${suggestion.destination} has been saved in this browser.`, true);
    contactForm.reset();
  } catch (error) {
    showMessage("Your suggestion could not be saved. Please check your browser storage settings and try again.", false);
  }
}

if (contactForm) {
  contactForm.addEventListener("submit", handleFormSubmit);
}
