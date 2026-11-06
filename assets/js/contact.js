document.addEventListener("DOMContentLoaded", () => {
  // Get Form
  const form = document.getElementById("contact-form");

  // Get Form Fields
  const name = document.getElementById("contact-name");
  const email = document.getElementById("contact-email");
  const subject = document.getElementById("contact-subject");
  const message = document.getElementById("contact-message");

  const fields = [name, email, subject, message];

  // Validate Each Field
  function validateField(field) {
    const value = field.value.trim();
    let errorMessage = "";

    // Name Validation
    if (field === name) {
      if (value.length < 3) {
        errorMessage = "الاسم يجب أن يتكون من 3 أحرف على الأقل.";
      }
    }

    // Email Validation
    if (field === email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(value)) {
        errorMessage = "يرجى إدخال بريد إلكتروني صحيح.";
      }
    }

    // Subject Validation
    if (field === subject) {
      if (value === "") {
        errorMessage = "يرجى اختيار موضوع الرسالة.";
      }
    }

    // Message Validation
    if (field === message) {
      if (value.length < 10) {
        errorMessage = "الرسالة يجب ألا تقل عن 10 أحرف.";
      }
    }

    // Display Validation Message
    const errorElement = field.parentElement.querySelector(".contact-error");

    field.classList.toggle("invalid", errorMessage !== "");

    errorElement.classList.toggle("show", errorMessage !== "");

    errorElement.textContent = errorMessage;

    return errorMessage === "";
  }

  // Live Validation While Typing
  fields.forEach((field) => {
    const eventName = field === subject ? "change" : "input";

    field.addEventListener(eventName, () => {
      validateField(field);
    });
  });

  // Form Submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Validate All Fields
    let isValid = true;

    if (validateField(name) === false) {
      isValid = false;
    }

    if (validateField(email) === false) {
      isValid = false;
    }

    if (validateField(subject) === false) {
      isValid = false;
    }

    if (validateField(message) === false) {
      isValid = false;
    }

    // Stop If Form Is Invalid
    if (isValid === false) {
      return;
    }

    // Show Success Toast
    const toastElement = document.getElementById("success-toast");

    const successToast = bootstrap.Toast.getOrCreateInstance(toastElement);

    successToast.show();

    // Reset Form
    form.reset();

    // Remove Validation Styles
    fields.forEach((field) => {
      field.classList.remove("invalid");

      const errorElement = field.parentElement.querySelector(".contact-error");

      errorElement.classList.remove("show");
      errorElement.textContent = "";
    });
  });
});
