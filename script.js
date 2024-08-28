
document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const interest = parseFloat(document.getElementById('interest').value);
    const years = parseInt(document.getElementById('years').value);

    if (isNaN(amount) || isNaN(interest) || isNaN(years) || amount <= 0 || interest <= 0 || years <= 0) {
        alert('Por favor, introduce valores válidos');
        return;
    }

    const monthlyInterestRate = (interest / 100) / 12;
    const numberOfPayments = years * 12;
    let monthlyPayment = 0;

    if (monthlyInterestRate !== 0) {
        const x = Math.pow(1 + monthlyInterestRate, numberOfPayments);
        monthlyPayment = (amount * x * monthlyInterestRate) / (x - 1);
    } else {
        monthlyPayment = amount / numberOfPayments;
    }

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - amount;

    document.getElementById('monthly-payment').innerText = `Pago mensual: €${monthlyPayment.toFixed(2)}`;
    document.getElementById('total-payment').innerText = `Pago total: €${totalPayment.toFixed(2)}`;
    document.getElementById('total-interest').innerText = `Interés total: €${totalInterest.toFixed(2)}`;
});
