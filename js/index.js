const formB1 = document.querySelector(".form__bai1");
const soB1 = document.querySelector("#input__bai1");
const valuesB1 = document.querySelector(".values__bai1");
const swapForm = document.querySelector(".form__swap");
const swapValues = document.querySelector(".swap__values");
const slot1 = document.querySelector(".slot1");
const slot2 = document.querySelector(".slot2");
let numbersPositive = 0;
let numbersNegative = 0;
let arr = [];
let html = "";
// Tổng các số dương trong mảng
totalPositive = () => {
  positiveArr = arr.filter((e) => {
    return e > 0;
  });
  let total = positiveArr.reduce((e, x) => e + x, 0);
  html = html + `<p>1. Tổng các số dương : ${total}</p>`;
  countPositive(positiveArr);
};
// Số các số dương trong mảng
countPositive = (positiveArr) => {
  html = html + `<p>2. Số số dương trong mảng : ${positiveArr.length}</p>`;
  numbersPositive = positiveArr.length;
};
// Tìm số bé nhất trong mảng
findMinNumber = () => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  html = html + `<p>3. Số nhỏ nhất trong mảng là : ${min}</p>`;
};
// Tìm số dương bé nhất trong mảng
findMinPositive = () => {
  let minPositive = arr[0] > 0 ? arr[0] : -1;
  arr.forEach((x) => {
    if (x < minPositive && x > 0) {
      minPositive = x;
    }
  });
  html =
    html +
    `<p>4. Số dương nhỏ nhất trong mảng là(Không có trả về -1) : ${minPositive}</p>`;
};
// Tìm số chẵn cuối cùng trong mảng
findLastEven = () => {
  let lastEven = -1;
  arr.forEach((e) => {
    if (e % 2 === 0) {
      lastEven = e;
    }
  });
  html =
    html +
    `<p>5. Số chẵn cuối cùng trong mảng(Không có trả về -1) : ${lastEven}`;
};
// Đổi chỗ 2 phàn tử trong mảng
swapItem = () => {
  slot1.setAttribute("max", arr.length - 1);
  slot2.setAttribute("max", arr.length - 1);

  swapForm.onsubmit = () => {
    console.log(slot1.value, slot2.value);
    let cloneArr = [...arr];
    let cloneValue = cloneArr[slot1.value * 1];
    cloneArr[slot1.value * 1] = cloneArr[slot2.value * 1];
    cloneArr[slot2.value * 1] = cloneValue;
    let cloneHtml = `Mảng mới là: ${cloneArr.join(",")}</p>`;
    swapValues.innerHTML = cloneHtml;
  };
};
// Sắp xếp mảng theo thứ tự tăng dần
sortItem = () => {
  let cloneArr = [...arr];
  cloneArr.sort((a, b) => a - b);
  html =
    html +
    `<p class="mtop">7. Sắp xếp mảng theo thứ tự tăng dần : ${cloneArr.join(
      ";"
    )}`;
};
// Hàm kiểm tra số xem có phải số nguyên tố
function isprime(n) {
  //flag = 0 => không phải số nguyên tố
  //flag = 1 => số nguyên tố

  let flag = 1;

  /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
  if (n < 2) return (flag = 0);
  else if (n % 2 == 0 && n != 2) {
    return (flag = 0);
  } else if (n % 3 == 0 && n != 3) {
    return (flag = 0);
  } else if (n % 5 == 0 && n != 5) {
    return (flag = 0);
  } else if (n % 7 == 0 && n != 7) {
    return (flag = 0);
  } else {
    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    let i = 2;
    while (i < n) {
      if (n % i == 0) {
        flag = 0;
        break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
      }
      i++;
    }
  }

  return flag;
}
// Tìm số nguyen tố đầu tiên của mảng
findFirstPrime = () => {
  let firstPrime = arr.find((a) => isprime(a) === 1);
  html =
    html +
    `<p>8. Số nguyên tố đầu tiên trong mảng là(Không có trả về -1) : ${
      firstPrime || -1
    }`;
};
// Số các số nguyên trong mảng
countInteger = () => {
  let count = 0;
  arr.forEach((x) => {
    if (x % 1 === 0) {
      count = count + 1;
    }
  });
  html = html + `<p>9. Số số nguyên trong mảng là ${count}`;
};
// Đếm số các số âm trong mảng
countNegative = () => {
  let count = 0;
  arr.forEach((x) => {
    if (x < 0) {
      count = count + 1;
    }
  });
  numbersNegative = count;
};
// So sánh số số âm và số số dương
compareNumbers = () => {
  if (numbersNegative > numbersPositive) {
    html = html + `<p>10. Số âm trong mảng nhiều hơn số dương}`;
  }
  if (numbersNegative < numbersPositive) {
    html = html + `<p>10. Số dương trong mảng nhiều hơn số âm}`;
  }
  if (numbersNegative === numbersPositive) {
    html = html + `<p>10. Số âm trong mảng bằng với số dương}`;
  }
};
formB1.onsubmit = () => {
  if (isNaN(soB1.value * 1)) {
    soB1.classList.add("is-invalid");
    formB1.classList.remove("was-validated");
  } else {
    soB1.classList.remove("is-invalid");
    swapForm.removeAttribute("hidden");
    arr.push(soB1.value * 1);
    html = `<p>Mảng ban đầu ${arr}</p>`;
    totalPositive();
    findMinNumber();
    findMinPositive();
    findLastEven();
    swapItem(arr);
    sortItem();
    findFirstPrime();
    countInteger();
    countNegative();
    compareNumbers();
    soB1.value = "";
    soB1.focus();
  }
  valuesB1.innerHTML = html;
};
