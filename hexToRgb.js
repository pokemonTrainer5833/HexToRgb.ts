'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
// exports.__esModule = true;
var resultDiv = document.querySelector('.results');
var RgbMaker = /** @class */ (function () {
  function RgbMaker() {
    this.r = '';
    this.g = '';
    this.b = '';
  }
  return RgbMaker;
})();
var hexToRgb = function (hexString) {
  var str;
  if (hexString.split('').indexOf('#') !== -1) {
    str = hexString.substr(1);
  } else str = hexString;
  if (str.length < 2 || str.length > 6) return 'Invalid hex string';
  var rgb = new RgbMaker();
  var newStr = str.split('');
  if (newStr.length === 2) {
    rgb.r = parseInt(newStr[0].toString() + newStr[1].toString, 16).toString();
    var r = __assign({}, rgb).r;
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
  return (
    '{\n   r:' + rgb.r + ',\n   g:' + rgb.g + ',\n   b:' + rgb.b + '\n\n  }'
  );
};
document.querySelector('button').addEventListener('click', function (e) {
  var data = document.querySelector('input').value;
  var result = hexToRgb(data);
  resultDiv.textContent = result;
});
