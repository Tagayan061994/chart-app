export const validateEmail = (email: string) => {
  const value = email.trim();
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const valid = re.test(value);
  return {valid, value};
};

export const validatePhoneNumber = (phone: string) => {
  let value = ('' + phone).replace(/[^\d+]/g, '');
  if (value.charAt(0) !== '+') {
    value = '';
  }
  let valid = value.length >= 12 && value.charAt(0) === '+';
  return {valid, value};
};
