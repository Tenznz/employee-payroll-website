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
const save = () => {
    console.log("Saving")
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    } catch (e) {
        return;
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    employeePayrollData._profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData._gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData._department = getSelectedValues('[name=department]');
    employeePayrollData._salary = getInputValueById('#salary');
    employeePayrollData._note = getInputValueById('#notes');
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
    employeePayrollData._startDate = Date.parse(date);
    console.log(employeePayrollData._startDate);
    alert(employeePayrollData.toString());
    console.log(employeePayrollData.toString)
    return employeePayrollData;
}

function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList != undefined) {
        employeePayrollList.push(employeePayrollData);
    } else {
        employeePayrollList = [employeePayrollData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}


const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach(item => {
        if (item.checked) setItems.push(item.value);
    });
    return setItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementsById(id).value;
    return value;
}
const resetForm = () => {
    console.log("resetting...");
    setValue('#name', '');
    const nameError = document.querySelector(".text-error");
    nameError.textContent = '';
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary', '400000');
    const output = document.querySelector('.salary-output');
    output.textContent = '400000';
    setValue('#notes', '');
    setValue('#day', 'day');
    setValue('#month', 'month');
    setValue('#year', 'year');
    const dateError = document.querySelector('#startDate');
    dateError.textContent = ''

}
const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}
const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}
const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}