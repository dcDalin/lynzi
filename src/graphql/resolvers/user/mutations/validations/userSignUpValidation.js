const userSignUpValidation = (username, phoneNumber, password, confirmPassword) => {
  const errors = {};

  // Username validations
  if (username.trim() === '') {
    errors.username = 'Username is required';
  } else if (username.trim().length < 3) {
    errors.username = 'Username must be at least 3 characters long';
  } else if (username.trim().length > 10) {
    errors.username = 'Username should be less than 10 character';
  } else {
    // Letters, numbers and underscore
    const regEx = /^[\w-_.]*$/;
    if (!username.trim().match(regEx)) {
      errors.username = 'Invalid username';
    }
  }

  // Phone number validations
  if (phoneNumber.trim() === '') {
    errors.phoneNumber = 'Phonenumber is required';
  } else {
    const regEx = /^07/;
    const numberRegEx = /^[0-9]*$/;
    if (!phoneNumber.match(numberRegEx)) {
      errors.phoneNumber = 'Only numbers allowed';
    } else if (!phoneNumber.match(regEx)) {
      errors.phoneNumber = 'Phone number must start with 07';
    }
  }
  if (phoneNumber.trim().length !== 10) {
    errors.phoneNumber = 'Phone number should have 10 digits';
  }

  // Password validations
  if (password.trim() === '') {
    errors.password = 'Password is required';
  }

  // Confirm password
  if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

export default userSignUpValidation;
