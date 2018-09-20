function calculate() {
    let x; //аннуитетный платеж
    let credit,  //сумма кредита
        downPayment,  //сумма первоначального взноса
        interestRate,  //процентная ставка   
        loanTerms;  //срок кредитования

    let el = document.forms.calculator.elements;

    credit = el.credit.value;
    downPayment = el.downPayment.value;
    interestRate = el.interestRate.value;
    loanTerms = el.loanTerms.value;

    let elResult = document.querySelector('.result');
    if (isNaN(credit) | isNaN(downPayment) | isNaN(interestRate) | isNaN(loanTerms) | (credit == 0) | (loanTerms == 0)) {
        elResult.classList.add('warning');
        elResult.innerHTML = 'Проверьте правильность введённых данных.';
    } else {
        elResult.classList.remove('warning');
        x = (credit - downPayment) * (1 + interestRate / 100 * loanTerms / 12) / loanTerms;
        // let i = interestRate / loanTerms / 100;
        // x = (credit - downPayment) * i / (1 - Math.pow((1 + i), -loanTerms));
        elResult.innerHTML = x.toFixed(2) + 'руб.';
    }
}