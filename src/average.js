/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const checkIsEmpty = (arr) => {
  let state = false;
  if (arr.length === 0) {
    state = true;
  }
  return state;
};

const checkIsNumber = (arr) => {
  let state = true;
  arr.forEach((value) => {
    if (typeof value !== 'number') {
      state = false;
    }
  });
  return state;
};

const checkArr = (arr) => {
  const isEmpty = checkIsEmpty(arr);
  const isNumber = checkIsNumber(arr);

  if (isNumber && !isEmpty) {
    return true;
  }
  return false;
};

const average = (arr) => {
  const checkedArr = checkArr(arr);
  let sumArr = 0;

  if (checkedArr) {
    arr.forEach((value) => {
      sumArr += value;
    });

    const roundSumArr = Math.round(sumArr / arr.length);
    return roundSumArr;
  }

  return undefined;
};

module.exports = average;
