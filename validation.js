
const form = document.querySelector("form");

// Function to display error messages
const showError = (field, errorText) => {
  field.classList.add("error");
  const errorElement = document.createElement("small");
  errorElement.classList.add("error-text");
  errorElement.innerText = errorText;
  field.closest(".form-group").appendChild(errorElement);
};

// Function to handle form submission
const handleFormData = (e) => {
  e.preventDefault();

  const firstnameInput = document.getElementById("firstname");
  const lastnameInput = document.getElementById("lastname");
  const grandfathernameInput = document.getElementById("GrandFatherName");
  const fathernameInput = document.getElementById("FatherName");
  const mothernameInput = document.getElementById("MotherName");

  const provinceInput = document.getElementById("province");
  const municipalityInput = document.getElementById("municipality");
  const wardInput = document.getElementById("ward");
//   const dInput = document.getElementById("date");

  const emailInput = document.getElementById("email");
  const dateInput = document.getElementById("date");


 

  const mobileNumberInput = document.getElementById("mobileNumber");
  const telephoneNumberInput = document.getElementById("telephoneNumber");

  // Getting trimmed values from input fields
  const firstname = firstnameInput.value.trim();
  const lastname = lastnameInput.value.trim();
  const grandfathername = grandfathernameInput.value.trim();
  const fathername = fathernameInput.value.trim();
  const mothername = mothernameInput.value.trim();
  const municipality = municipalityInput.value.trim(); 
  const ward = wardInput.value.trim(); 
  const mobileNumber = mobileNumberInput.value.trim();
  const telephoneNumber = telephoneNumberInput.value.trim();


  const email = emailInput.value.trim();
  const date = dateInput.value;
  const province = provinceInput.value;

  // pattern for  validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const mobileNumberPattern = /^[9876]\d{9}$/;
  const telephoneNumberPattern = /^\d{2}-\d{7}$/;

  // Clearing previous error messages
  document
    .querySelectorAll(".form-group .error")
    .forEach((field) => field.classList.remove("error"));
  document
    .querySelectorAll(".error-text")
    .forEach((errorText) => errorText.remove());

  // validation checks
  if (firstname === "") {
    showError(firstnameInput, "Enter your full name");
  }
  if (lastname === "") {
    showError(lastnameInput, "Enter your last name");
  }
  if (grandfathername === "") {
    showError(grandfathernameInput, "Enter your last name");
  }
  if (fathername === "") {
    showError(fathernameInput, "Enter your last name");
  }
  if (mothername === "") {
    showError(mothernameInput, "Enter your last name");
  }
  if (province === "") {
    showError(provinceInput, "select province");
  }
  if (municipality === "") {
    showError(municipalityInput, "municipality required");
  }
  if (ward === "") {
    showError(wardInput, "ward no required");
  }
  if (!emailPattern.test(email)) {
    showError(emailInput, "Enter a valid email address");
  }

  if (date === "") {
    showError(dateInput, "Select your date of birth");
  }
  if (!mobileNumberPattern.test(mobileNumber)) {
    showError(mobileNumberInput, "Enter a valid Nepal mobile number");
  }
  if (!telephoneNumberPattern.test(telephoneNumber)) {
    showError(telephoneNumberInput, "Enter a valid Nepal telephone number");
  }
  // Checking for any remaining errors before form submission
  const errorInputs = document.querySelectorAll(".form-group .error");
  if (errorInputs.length > 0) return;

  // Submitting the form
  form.submit();
};

form.addEventListener("submit", handleFormData);

let currentTab = 1;
function showTabs(tabNumber) {
  const tab = document.querySelectorAll(".tab");
  tab.forEach((tab) => (tab.style.display = "none"));

  const currentTabElement = document.getElementById(`tab${tabNumber}`);
  if (currentTabElement) {
    currentTabElement.style.display = "block";
  }
}

function nextStep() {

  if (currentTab < 3) {
    currentTab++;
    showTabs(currentTab);
  }

}

function prevStep() {
  if (currentTab > 1) {
    currentTab--;
    showTabs(currentTab);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showTabs(currentTab);
});