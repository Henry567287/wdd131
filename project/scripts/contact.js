const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

function handleFormSubmit(event) {
    event.preventDefault();

    if (!contactForm || !formMessage) {
        return;
    }

    const formData = new FormData(contactForm);

    const suggestion = {
        name: formData.get("name").trim(),
        email: formData.get("email").trim(),
        destination: formData.get("destination").trim(),
        category: formData.get("category"),
        message: formData.get("message").trim(),
        dateSubmitted: new Date().toISOString()
    };

    // Check that all required fields contain values
    if (
        !suggestion.name ||
        !suggestion.email ||
        !suggestion.destination ||
        !suggestion.category ||
        !suggestion.message
    ) {
        showMessage(
            "Please complete all required fields.",
            false
        );
        return;
    }

    saveSuggestion(suggestion);
}

function saveSuggestion(suggestion) {
    try {
        const savedSuggestions = JSON.parse(
            localStorage.getItem("ugandaSuggestions")
        ) || [];

        // Add the new suggestion to the array
        savedSuggestions.push(suggestion);

        localStorage.setItem(
            "ugandaSuggestions",
            JSON.stringify(savedSuggestions)
        );

        showMessage(
            `Thank you, ${suggestion.name}! Your suggestion for ${suggestion.destination} has been saved in this browser.`,
            true
        );

        // Clear the form after successful saving
        contactForm.reset();

    } catch (error) {
        showMessage(
            "Sorry, your suggestion could not be saved. Please check your browser storage settings.",
            false
        );
    }
}

function showMessage(message, success) {
    if (!formMessage) {
        return;
    }

    formMessage.textContent = message;

    formMessage.style.color = success
        ? "#174a2a"
        : "#b00020";

    formMessage.setAttribute("role", "status");
}

if (contactForm) {
    contactForm.addEventListener(
        "submit",
        handleFormSubmit
    );
}
