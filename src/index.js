// modules
import slugify from 'slugify';

// constant
const slugifyConfig = {
  replacement: '-',
  remove: null,
  lower: true,
  remove: /[$*_+~.()'"!:@,]/g
};

window.onload = () => {
  const $input = document.querySelector("#input");
  const $button = document.querySelector("#generate");
  const $result = document.querySelector("#result");

  $button.onclick = () => {
    $result.innerHTML = "";
    $result.appendChild(document.createTextNode(`${slugify($input.value, slugifyConfig)}`));
  };
};
