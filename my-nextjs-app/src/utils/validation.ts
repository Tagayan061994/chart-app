export const validateEmail = (email: string) => {
  const value = email.trim();
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const valid = re.test(value);
  return { valid, value };
};
