window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
           <tr>
                <td><img class="profile" alt="" src="../assets/profile-images/Ellipse -2.png"></td>
                <td>Tenzing Dhugkar</td>
                <td>Male</td>
                <td>
                    <div class='dept-label'>Engineer</div>
                    <div class='dept-label'>HR</div>
                </td>
                <td>450000</td>
                <td>1 Nov 2021</td>
                <td>
                    <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                    <img id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
                </td>
           </tr>        
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}