// Функция возвращает случ. целое число из диапазона

const GetRandomNumber = (min, max) => {

    if (!IsRangeValid(min, max)) {
      console.log('Error. Range Invalid');
      return null
    }

    if (!IsPositive(min,max)) {
      console.log('Error. Range Not Positive');
      return null
    }

    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);

  };

  // Функция проверяет, что второе число в диапазоне больше первого

  let IsRangeValid = (min, max) => {
    return min < max;

  };

  //Функция проверяет, что числа в положит. диапазоне

  let IsPositive = (min, max) => {
    return (min >= 0 && max > 0);
  }


  export {GetRandomNumber};
