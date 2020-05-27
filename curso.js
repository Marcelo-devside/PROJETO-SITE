function fazerNome(num) {
     if (typeof num !== 'number' ){
    console.log('Não é um Número!');
    } else  if (num % 3 ===0 && num % 5 ===0 ){
    console.log('FizzBuzz');
    } else  if (num % 3 ===0 ){
        console.log('Fizz');
    } else  if (num % 5 ===0 ){
        console.log('Buzz');
    } else  if (!num % 3 ===0 && !num % 5 ===0){
        console.log('não é divisível por 3 nem por 5');
    }
    else 
    {console.log(num)};
};
fazerNome(19);
