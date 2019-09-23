const userLoginValidation = (phoneNumber, password) => {
  const errors = {};

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
  if (password === '') {
    errors.password = 'Password is required';
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

export default userLoginValidation;
