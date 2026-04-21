document.addEventListener("DOMContentLoaded", () => {
  /** @type {HTMLFormElement | null} */
  const form = document.querySelector("#paymentForm");

  /** @type {HTMLDivElement | null} */
  const warning = document.querySelector("#missingFieldsWarning");

  if (!form || !warning) return;

  const updateFormState = () => {
    const isFormValid = form.checkValidity();

    warning.classList.toggle("d-none", isFormValid);

    if (isFormValid) {
      form.classList.remove("was-validated");
    }
  };

  /** @param {SubmitEvent} event */
  const handleSubmit = (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add("was-validated");
      warning.classList.remove("d-none");
      return;
    }

    warning.classList.add("d-none");
    form.classList.remove("was-validated");
  };

  form.addEventListener("submit", handleSubmit);
  form.addEventListener("input", updateFormState);
  form.addEventListener("change", updateFormState);

  updateFormState();
});