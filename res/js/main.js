const Shrek = document.getElementById("Shrek");
const counter = document.getElementById("counter");
const autoclicker = document.getElementById("autoclicker");
const clickupgrade = document.getElementById("clickupgrade");

let Shreks = 0;
let autoclickerPrice = 100;
let autoclickerIncrease = 0;

let clickupgradePrice = 50;
let clickupgradeIncrease = 1;

// ()  => - arrow function
Shrek.onclick = () => {
    Shreks++;
    counter.innerHTML = Shreks;

}
autoclicker.onclick = () => {
    if( cookies >= autoclickerPrice) {
        cookies-= autoclickerPrice;
        counter.innerHTML = cookies;
        autoclickerPrice *= 2;
        autoclicker.innerHTML = `Buy autoclicker: ${autoclickerPrice}`; 
         if(autoclickerIncrease == 0) {
          setInterval(() => {
             cookies += autoclickerIncrease;
             counter.innerHTML = cookies;
          }, 1000);  
        }
        autoclickerIncrease++;
    }
}
clickupgrade.onclick = () => {
    if( Shrek >= clickupgradePrice) {
        Shrek-= clickupgradePrice;
        counter.innerHTML = Shreks;}
        clickupgradePrice *= 2;
        clickupgrade.innerHTML = `Buy clickupgrade: ${clickupgradePrice}`; 
        clickupgradeIncrease++;

} 
