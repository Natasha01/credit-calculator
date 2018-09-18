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

    let i = interestRate / loanTerms / 100;
    x = (credit - downPayment) * i / (1 - Math.pow((1 + i), -loanTerms));
    // console.log(x);

    // let K = i * Math.pow(1 + i, loanTerms) / (Math.pow(1 + i, loanTerms) - 1);
    // let A = K * credit;
    // console.log(A);

    document.getElementById('result').innerHTML = x.toFixed(2);

    // // return x;
}