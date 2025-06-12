"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c; // Вычисляем дискриминант

  if (discriminant < 0) {
    // Корней нет
    return arr;
  } else if (discriminant === 0) {
    // Один корень
    const root = -b / (2 * a);
    arr.push(root);
  } else {
    // Два корня
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    typeof percent !== "number" ||
    typeof contribution !== "number" ||
    typeof amount !== "number" ||
    typeof countMonths !== "number"
  ) {
    return false; // или можно выбросить ошибку
  }

  // Преобразование годовой ставки в месячную (в долях)
  const monthlyPercent = percent / 100 / 12;

  // Тело кредита (сумма, которую нужно вернуть банку)
  const loanBody = amount - contribution;

  // Расчёт аннуитетного платежа
  const monthlyPayment =
    loanBody *
    (monthlyPercent +
      monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));

  // Общая сумма выплаты
  const totalAmount = monthlyPayment * countMonths;

  // Округление до 2-х знаков
  return +totalAmount.toFixed(2);
}
  