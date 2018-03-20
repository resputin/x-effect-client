export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
  value.trim() !== '' ? undefined : 'Cannot be empty';
export const isTrimmed = value =>
  value.trim() === value ? undefined : 'Cannot start or end with whitespace';
export const length = length => value => {
  if (length.min && value.length < length.min) {
    return `Must be at least ${length.min} characters long`;
  }
  if (length.max && value.length > length.max) {
    return `Must be at most ${length.max} characters long`;
  }
};
export const matches = field => (value, allValues) =>
  field in allValues && value.trim() === allValues[field].trim()
    ? undefined
    : 'Does not match';
export const isEmail = value => {
  if (!value.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )){
    return 'You must supply a valid email address'
  };
};
export const isPhoneNumber = value => {
  if (!value.match(/[0-9]{9}/)) {
    return 'Please enter a 9 digit phone number with no spaces';
  }
}