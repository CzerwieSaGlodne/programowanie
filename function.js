//kopiowanie linijki alt shift strzalka w dol
//srodkowy przycisk mysz - pisanie w kilku linijkach
//dzialanie funkcji zawsze w klamrze!!!!!!!!!!!!!!!!

function sumtwonumbers(first, second) {
    console.log(first + second); //side effect - efekt uboczny
    //jezeli funkcje maja side effecty -> impure(nieczyste) function


}
function substract(first, second)  /*argumenty*/ {

    return first - second;
}

sumtwonumbers(10, 1);
// console.log(substract(10, 1));

let money = 100;
money = substract(money, 10);
console.log(money);
money = substract(money, 40);
console.log(money);
