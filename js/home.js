window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeeDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
});
const getEmployeeDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    if (empPayrollList.length == 0) return;

    let innerHtml = `${headerHtml}`;

    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}   
            <tr>
                <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>
                    <div class='dept-label'>${getDepartment(empPayrollData._department)}</div>
                </td>
                <td>${empPayrollData._salary}</td>
                <td>${stringifyDate(empPayrollData._startDate)}</td>
                <td>
                    <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                    <img id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
                </td>
           </tr>        
         `;
        document.querySelector('#table-display').innerHTML = innerHtml;
    }
}
const getDepartment = (deptList) => {
    let deptHtml = '';
    for (let dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}
const stringifyDate = (date) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const newDate = !date ? "undefined" : new Date(date).toLocaleDateString('en-GB', options);
    return newDate;
}