//sorting an array of integers
const myArr = [20 , 10 ,100 , 2 , 34]

const sortingIntegersFunction = (arr) => {
    arr.sort((a , b) => {
        return a - b
    })
} 

sortingIntegersFunction(myArr)

////////////////////////////////////////////////////////////////////////////////

//comparing strings with toghater
const comparingStringsFunction = (string1 , string2) => {

    let result = string1.localeCompare(string2)

    if (result === 0 || result === 1){
        return true
    }else{
        return false
    }
}
comparingStringsFunction("mamad" , "m")

/////////////////////////////////////////////////////////////////////////////

const prime_factors = (num) => {
    const is_prime = (num) => {
      for (let i = 2; i <= Math.sqrt(num); i++)
      {
        if (num % i === 0) return false;
      }
      return true;
    }
    const result = [];
    for (let i = 2; i <= num; i++)
    {
      while (is_prime(i) && num % i === 0) 
      {
        if (!result.includes(i)) result.push(i);
        num /= i;
      }
    }
    return result;
  }
  console.log(prime_factors(72));
  console.log(prime_factors(101));
  console.log(prime_factors(103));
  console.log(prime_factors(104));
  console.log(prime_factors(105));

  

