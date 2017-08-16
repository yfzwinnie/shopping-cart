$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='shipping']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
      address1: "required",
      city: "required",
      zip: "required",
      state: "required",
      phone: "required"
    },
    // Specify validation error messages
    messages: {
      name: "Please enter your name",
      address1: "Please enter your address",
      city: "Please enter your city",
      zip: "Please enter your zip code",
      state: "Please select your state",
      phone: "Please enter your phone number",
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});
