
console.log("Insira um número:");
let num1 = +prompt();
console.log(num1);

if (num1 % 2 === 0 && num1 % 3 === 0){
    
    console.log(num1 === 30? "Ufa acertei!" : "Não foi dessa vez!")             
    

        switch (num1){
        case 6:
           console.log("Esse é o número 6!")
           break
        case 12:       
           console.log("Esse é o número 12!")
           break
        case 18:       
           console.log("Esse é o número 18!")
           break
        case 24:       
           console.log("Esse é o número 24!")
           break 
        case 30:       
           console.log("Esse é o número 30!")
           break

        default:
            console.log("Não escolheu os números pedidos.")    
    
        }

} else {
    console.log("Esse número não é divisível nem por 2, nem por 3."); 
}


