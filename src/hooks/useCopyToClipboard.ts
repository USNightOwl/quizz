function copyToClipboard(text: string | number) {
  let input = document.createElement('input');
  input.setAttribute('value', text.toString());
  document.body.appendChild(input);
  input.select();
  let result = document.execCommand('copy');
  document.body.removeChild(input);
  return result;
}

export const useCopyToClipboard = () => {
  return (text: string | number) => {
    if (typeof text === "string" || typeof text == "number") {
      return copyToClipboard(text);
    }
    return false;
  }
}