var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var hasEmptyField = false;

  for (var i = 0; i < form.elements.length; i++) {
    var field = form.elements[i];

    if (field.value.trim() === '') {
      field.setAttribute('required', 'required');
      hasEmptyField = true;
    } else {
      field.removeAttribute('required');
    }
  }

  if (hasEmptyField) {
    status.innerHTML = 'Oops! There was a problem submitting your form. Please fill in all required fields.';
    console.log("There are empty fields");
  }

  var data = new FormData(event.target);
  try {
    var response = await fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.innerHTML = "Thank you for your message! We will contact you soon.";
      form.reset();
    } else {
      var responseData = await response.json();
      if (responseData.hasOwnProperty('errors')) {
        status.innerHTML = responseData.errors.map(error => error.message).join(", ");
        console.log(responseData.errors);
      } else {
        status.innerHTML = "Oops! There was a problem submitting your form";
      }
    }
  } catch (error) {
    console.log(error);
    status.innerHTML = "Oops! There was a problem submitting your form";
  }
}

form.addEventListener("submit", handleSubmit);

document.addEventListener("DOMContentLoaded", function() {
  var textarea = document.getElementById("message");

  textarea.addEventListener("click", function() {
    this.setSelectionRange(0, 0);
  });
});
