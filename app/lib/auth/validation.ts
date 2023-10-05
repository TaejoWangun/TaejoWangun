export default function validate(string: string) {
  let result = false;

  const rgx = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/;

  if (rgx.test(string)) {
    result = true;
  } else {
    result = false;
  }

  return result;
}
