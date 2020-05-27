function mostraRestos(valor ){
  if(valor % 2 == 0)
      do  { 
          console.log(valor % 2);
          valor = parseInt(valor / 2);
      }   while (valor >= 1);
       else
                  do  { 
                      num = console.log(valor % 2);
                  valor = parseInt(valor / 2 );
                      } while (valor > 0);

  
};
mostraRestos(21);