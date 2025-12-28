let money = 0;
let kodateCount = 0;
let apartmentRoomCount = 0;
let apartmentCount = 0;
let mansionRoomCount = 0;
let mansionCount = 0;

const moneyDisplay = document.querySelector('#money');
const saveButton = document.querySelector('#save-btn');

saveButton.addEventListener('click', () => {
  const kodateRent = kodateCount * 30000
  const apaRoomRent = apartmentRoomCount * 50000
  const apaRent = apartmentCount * 300000
  const manRoomRent = mansionRoomCount * 100000
  const manRent = mansionCount * 1500000

  money += (100000 + kodateRent + apaRoomRent + apaRent + manRoomRent + manRent);

  moneyDisplay.textContent = money.toLocaleString();
});

const buyKodateBtn = document.querySelector('#buy-kodate');

buyKodateBtn.addEventListener('click', () => {
  if (money >= 2500000) {
    money -= 2500000;
    kodateCount += 1;
    moneyDisplay.textContent = money.toLocaleString();
    alert('地方戸建てを購入！');
  } else {
    alert('所持金が不足しています')
  }
});