// nav main
let hamburgerMain = document.querySelector('.hamburger.main');
let mobileNavMain = document.querySelector('.nav-menu-ul.main');

let barsMain = document.querySelectorAll('.hamburger.main span');

let isActiveMain = false;
hamburgerMain.addEventListener('click', function () {

    if (mobileNavMain.classList.contains('open')) {
        mobileNavMain.classList.remove('open')
        document.getElementsByTagName('body')[0].style = 'overflow-y: scroll';
    } else {
        mobileNavMain.classList.add('open')
        document.getElementsByTagName('body')[0].style = 'overflow-y: hidden';

    }
    if (!isActiveMain) {
        barsMain[0].style.transform = 'rotate(45deg)'
        barsMain[1].style.opacity = '0'
        barsMain[2].style.transform = 'rotate(-45deg)'
        isActiveMain = true;
    } else {
        barsMain[0].style.transform = 'rotate(0deg)'
        barsMain[1].style.opacity = '1'
        barsMain[2].style.transform = 'rotate(0deg)'
        isActiveMain = false;
    }

})
// nav-scroll
let position = document.getElementById("scrollNavbar");

function scrollFunction() {
    if (document.documentElement.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        position.classList.add("is-sticky");
    } else {
        position.classList.remove("is-sticky");

    }
};


//event handler for login section
let loginBtn = document.getElementById("login-btn").addEventListener("click", () => {
    let loginArea = document.querySelector(".login-area")
    loginArea.style.display = "none";
    // let transectionArea = document.querySelector("#transection-area");
    // transectionArea.style.display = "block";
    // let transectionWrapper = document.querySelector("#transection-wrapper");
    // transectionWrapper.style.display = "block";
    myFunction("transection-area");
    myFunction("transection-wrapper");
});

function myFunction(id) {
    let x = document.getElementById(id);
    x.style.display = "block";
}
//event handler for deposit/withdraw section
let depositBtn = document.getElementById("addDeposit").addEventListener("click", () => {
    // let depositAmount = document.getElementById("depositAmount").value;
    // let depositNumber = parseFloat(depositAmount);
    let depositNumber = getInoutNumber("depositAmount");

    updateSpanText("currentBalance", depositNumber);
    updateSpanText("currentDeposit", depositNumber);
    document.getElementById("depositAmount").value = "";

});
//withdraw handler
const withdrawBtn = document.getElementById("withdraw").addEventListener("click", () => {
    let withdrawNumber = getInoutNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);
    document.getElementById("withdrawAmount").value = "";
});

function getInoutNumber(id) {
    let Amount = document.getElementById(id).value;
    let amountNumber = parseFloat(Amount);
    return amountNumber;
}

function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}