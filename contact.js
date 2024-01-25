window.onload = function(){
  let user = 'info';
  let domain = 'universaldigits';
  let element = 'com';

  let digit1 = "3";
  let digit2 = "4";
  let digit3 = "-1";
  let digit4 = "6";
  let digit5 = "7";
  let digit6 = "-2";
  let digit7 = "-1";
  let digit8 = "0";
  let digit9 = "1";
  let digit10 = "2";

  let numberArray = [digit1, digit2, digit3, digit4, digit5, digit6, digit7, digit8, digit9, digit10];

  let phoneNumber = "";

  // Then for each digit - we add two and concatenate to form original number
  for (let i = 0; i < numberArray.length; i++) {
    phoneNumber += (Number(numberArray[i]) + 2).toString();
  }


  let el = document.getElementById('heml')
  if(el) {
    el.innerHTML = '<a href="' + 'ma' + 'il' + 'to:' + user + '@' + domain + '.' + element + '">' + user + '@' + domain + '.' + element + '</a>';
  }

  let pel = document.getElementById('phone')
  if (pel) {
    pel.textContent = `${phoneNumber.substring(0, 3)}-${phoneNumber.substring(3, 6)}-${phoneNumber.substring(6, 10)}`;
  }

  const loginRef = [
    'h', 't', 't', 'p', 's', ':', '/',
    '/', 'p', 'o', 'r', 't', 'a', 'l',
    '.', 'u', 'n', 'i', 'v', 'e', 'r',
    's', 'a', 'l', 'd', 'i', 'g', 'i',
    't', 's', '.', 'c', 'o', 'm', ':',
    '7', '5', '8', '7', '/'
  ]
  let loginA = document.getElementById('a-login')
  if(loginA)
    loginA.href = loginRef.join('')
};
