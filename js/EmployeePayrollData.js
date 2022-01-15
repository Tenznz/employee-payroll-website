class EmployeePayrollData {

    constructor() {

    }
    get id() { return this._id; }
    set id(id) { this._id = id; }

    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }

    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }
    get gender() { return this._gender; }
    set gender(gender) {
        this._gender = gender;
    }

    get department() { return this._department; }
    set department(department) {
        this._department = department;
    }

    get salary() { return this._salary; }
    set salary(salary) { this.salary = salary; }

    get note() { return this._note; }
    set note(note) { this._note = note; }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        let curDate = new Date();
        var diff = Math.abs(curDate.getTime() - startDate.getTime());
        if (startDate > curDate)
            throw "Start date is future date";
        else if (diff / (1000 * 60 * 60 * 24) > 30)
            throw "Start date is beyond 30 days";
        else
            this._startDate = startDate;
    }

    toString() {
        // const options = { year: "numeric", month: "long", day: "numeric" };
        // const empDate = !this._startDate ? "undefined":this._startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", gender=" + this.gender +
            ", profilePic=" + this.profilePic + ", department=" + this.department +
            ", salary=" + this.salary + ", startDate=" + (new Date(this.startDate).toDateString()) + ", note =" + this.note;
    }
}