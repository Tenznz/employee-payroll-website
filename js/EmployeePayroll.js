window.addEventListener('DOMContentLoaded', (event) => {
    salaryOutput();
    validateName();
    validateDate();

});

function validateName() {
    const name = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;;
            textError.textContent = "";
        } catch (e) {
            console.error(e)
            textError.textContent = e;
        }
    });
}

function checkDate() {
    console.log("checking Date");
    const dateError = document.querySelector('#startDate');
    try {
        let date = day.value + " " + month.value + " " + year.value;
        (new EmployeePayrollData()).startDate = new Date(Date.parse(date));
        dateError.innerHTML = "";
    } catch (e) {
        console.error(e);
        dateError.innerHTML = e;
    }
}

function validateDate() {
    console.log("validating Date");
    const day = document.querySelector('#day');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');
    day.addEventListener('input', checkDate);
    month.addEventListener('input', checkDate);
    year.addEventListener('input', checkDate);
}
const salaryOutput = () => {
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
    });
}