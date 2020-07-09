import "./styles.css";

let ids_string;
do {
  ids_string = prompt("Введите айди");
} while (ids_string == null);

let ids_numbers = [];
ids_numbers[0] = "";

for (let i = 0, Current_num = 0; i < ids_string.length; i -= -1) {
  if (ids_string[i] !== ",") {
    ids_numbers[Current_num] += ids_string[i];
  } else {
    Current_num++;
    ids_numbers[Current_num] = "";
  }
}
//alert(ids_numbers[3]);
//alert(ids_numbers.length);
let what = prompt("Письма - 1, Чат - 2, 3 - Профиль");

if (what == 1) {
  for (let i = 0; i < ids_numbers.length; i -= -1) {
    console.log(
      `https://login.romancecompass.com/letters/#write/${ids_numbers[i]}`
    );
    window.open(
      `https://login.romancecompass.com/letters/#write/${ids_numbers[i]}`
    );
  }
}

if (what == 2) {
  for (let i = 0; i < ids_numbers.length; i -= -1) {
    console.log(`https://login.romancecompass.com/chat/#${ids_numbers[i]}`);
    window.open(`https://login.romancecompass.com/chat/#${ids_numbers[i]}`);
  }
}

if (what == 3) {
  for (let i = 0; i < ids_numbers.length; i -= -1) {
    console.log(`https://login.romancecompass.com/man/${ids_numbers[i]}`);
    window.open(`https://login.romancecompass.com/man/${ids_numbers[i]}`);
  }
}
