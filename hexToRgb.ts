export {};
const resultDiv = document.querySelector('.results');
class RgbMaker {
  r: string;
  g: string;
  b: string;
  constructor() {
    this.r = '';
    this.g = '';
    this.b = '';
  }
}
const hexToRgb = (hexString: string) => {
  let str: string;
  if (hexString.split('').indexOf('#') !== -1) {
    str = hexString.substr(1);
  } else str = hexString;
  if (str.length < 2 || str.length > 6) return 'Invalid hex string';
  const rgb = new RgbMaker();
  const newStr: string[] = str.split('');
  if (newStr.length === 2) {
    rgb.r = parseInt(newStr[0].toString() + newStr[1].toString, 16).toString();
    const r: string = { ...rgb }.r;
    rgb.g = r;
    rgb.b = r;
  } else if (newStr.length === 3) {
    rgb.r = parseInt(
      newStr[0].toString() + newStr[0].toString(),
      16
    ).toString();
    rgb.g = parseInt(
      newStr[1].toString() + newStr[1].toString(),
      16
    ).toString();
    rgb.b = parseInt(
      newStr[2].toString() + newStr[2].toString(),
      16
    ).toString();
  } else if (newStr.length === 6) {
    rgb.r = parseInt(
      newStr[0].toString() + newStr[1].toString(),
      16
    ).toString();
    rgb.g = parseInt(
      newStr[2].toString() + newStr[3].toString(),
      16
    ).toString();
    rgb.b = parseInt(
      newStr[4].toString() + newStr[5].toString(),
      16
    ).toString();
  } else {
    return 'invalid hex number';
  }
  return `{
   r:${rgb.r},
   g:${rgb.g},
   b:${rgb.b}

  }`;
};

document.querySelector('button').addEventListener('click', (e) => {
  const data = document.querySelector('input').value;
  const result = hexToRgb(data);
  resultDiv.textContent = result;
});
