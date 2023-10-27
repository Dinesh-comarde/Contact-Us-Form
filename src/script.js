// Validation for contact us form
function regvalidate() {
  let nameInput = document.getElementById("nameInput").value;
  let emailInput = document.getElementById("emailInput").value;
  let phoneInput = document.getElementById("phoneInput").value;
  let nameRegex = /^[a-zA-Z\s]+$/;
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let phoneRegex = /^\d{10}$/;

  // Name validation
  if (nameInput == "") {
    document.getElementById("error").innerHTML = "*Name should not be empty";
    document.registerationform.nameInput.focus();
    return false;
  }

  if (!nameRegex.test(nameInput)) {
    document.getElementById("error").innerHTML =
      "*Name should contain only letters";
    document.registerationform.nameInput.focus();
    return false;
  }

  // Email validation
  if (emailInput == "") {
    document.getElementById("error").innerHTML = "*Email id required";
    document.registerationform.emailInput.focus();
    return false;
  }

  if (!emailRegex.test(emailInput)) {
    document.getElementById("error").innerHTML =
      "*Email id should be in proper format";
    document.registerationform.nameInput.focus();
    return false;
  }

  // Phone validation
  if (phoneInput == "") {
    document.getElementById("error").innerHTML =
      "*Phone number should not be empty";
    document.registerationform.phoneInput.focus();
    return false;
  }

  if (!phoneRegex.test(phoneInput)) {
    document.getElementById("error").innerHTML =
      "*Phone number should contain 10 digits";
    document.registerationform.phoneInput.focus();
    return false;
  }

  // Gender validation
  if (!document.querySelector('input[name="genderInput"]:checked')) {
    document.getElementById("error").innerHTML = "*Select the gender";
    return false;
  }

  // T&Cs validation
  if (document.getElementById("agree").checked == false) {
    document.getElementById("error").innerHTML = "*Agree to the T&Cs to submit";
    return false;
  }

  clearError();
  addData();
}

//Adding data to the table
let serialNumber = 1;
let data = [];

function addData() {
  let nameInput = document.getElementById("nameInput");
  let emailInput = document.getElementById("emailInput");
  let phoneInput = document.getElementById("phoneInput");
  let genderInput = document.querySelector('input[name="genderInput"]:checked');

  let name = nameInput ? nameInput.value : "";
  let email = emailInput ? emailInput.value : "";
  let phone = phoneInput ? phoneInput.value : "";
  let gender = genderInput ? genderInput.value : "";

  let newData = {
    name: name,
    email: email,
    phone: phone,
    gender: gender,
  };

  let existingEmail = data.find((d) => d.email === email);
  if (existingEmail) {
    document.getElementById("error").innerHTML = "*Email already exists";
    return;
  }

  let existingPhoneNumber = data.find((d) => d.phone === phone);
  if (existingPhoneNumber) {
    document.getElementById("error").innerHTML = "*Phone Number already exists";
    return;
  }

  data.push(newData);

  let table = document.getElementById("output-table");
  let newRow = table.insertRow(table.rows.length);

  newRow.insertCell(0).innerHTML = serialNumber;
  newRow.insertCell(1).innerHTML = newData.name;
  newRow.insertCell(2).innerHTML = newData.email;
  newRow.insertCell(3).innerHTML = newData.phone;
  newRow.insertCell(4).innerHTML = newData.gender;

  serialNumber++;

  clearInputs();
}

// Clearing the input fields
function clearInputs() {
  document.getElementById("nameInput").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("phoneInput").value = "";
  document.querySelector('input[name="genderInput"]:checked').checked = false;
  document.getElementById("agree").checked = false;
}

// Clearing the error message
function clearError() {
  document.getElementById("error").innerHTML = "";
}
