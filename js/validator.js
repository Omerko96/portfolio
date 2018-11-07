// Validator
$(document).ready(function() {
  var validator = $('#contact_form').bootstrapValidator({
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      firstName: {
        message: 'Your first name is required'
      },
      lastName: {
        message: 'Your last name is required'
      },
      email: {
        message: 'Your email address is required',
        validators: {
          emailAddress: 'Please provide valid email address'
        }
      },
      message: {
        message: 'Your message is required'
      }
    }
  });
});