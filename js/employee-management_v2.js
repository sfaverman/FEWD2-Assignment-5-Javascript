/*eslint-env browser*/
var btnDel = [], i;

for (i = 0; i < 5; i += 1) {
    btnDel[i] = "<button class='btnDel" + String(i) + "'>Delete</button>";
}

var employeeList = [];
employeeList[0] = ["Sally Smith", "Quality Assurance", 3423, btnDel[0]];
employeeList[1] = ["Mark Martin", "VP Sales", 3346, btnDel[1]];
employeeList[2] = ["John Johnson", "Marketing", 3232, btnDel[2]];
employeeList[3] = ["Sofia Faverman", "Web Developer", 3188, btnDel[3]];
employeeList[4] = ["Amanda Franklin", "UI/UX Designer", 3381, btnDel[4]];

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var showEmployees = function () {
    "use strict";
    var row, col, tableString = "";

    $("qtyEmployee").innerHTML = "Showing " + employeeList.length + " employees";

    for (row = 0; row < employeeList.length; row += 1) {
        tableString += "<tr>";
        for (col = 0; col < 4; col += 1) {
            tableString += "<td>" + employeeList[row][col] + "</td>";
        }
        tableString += "</tr>";
        console.log("tableString ="+tableString);
    }
    $("tblBody").innerHTML = tableString;
};

var addEmployee = function () {
    "use strict";
    var name, title, extension, employee = [];

    // GRAB VALUES OF TEXT BOXES
    name = $("name").value;
    title = $("title").value;
    extension = $("extension").value;

    // BASIC VALIDATION
    if (name === "") {
        $("Name").innerHTML = "This field is required!";
        return;
    } else {
        $("Name").innerHTML = "";
        employee.push(name);
    }

    if (title === "") {
        $("Title").innerHTML = "This field is required!";
        return;
    } else {
        $("Title").innerHTML = "";
        employee.push(title);
    }

    if (extension === "") {
        $("Extension").innerHTML = "This field is required!";
        return;
    } else if (isNaN(extension) || extension.length !== 4) {
        $("Extension").innerHTML = "Extension must be a 4-digit value!";
        return;
    } else {
        $("Extension").innerHTML = "";
        employee.push(extension);
        btnDel[employeeList.length] = "<button class='btnDel" + String(employeeList.length) + "'>Delete</button>";
        employee.push(btnDel[employeeList.length]);
    }

    if (employee.length > 0) {
        employeeList.push(employee);
    }

    showEmployees();

    $("regForm").reset();
};

var delEmployee = function (index) {
    "use strict";
    employeeList.splice(index, 1);
    window.console.log("Deleted " + index);
    showEmployees();
};

window.addEventListener("load", function () {
    "use strict";
    // SHOW ALL EMPLOYEES
    showEmployees();

    // ADD EVENT LISTENER TO ADD BUTTON
    $("add").addEventListener("click", addEmployee);

    // ADD EVENT HANDLER TO THE BODY OF THE TABLE FOR BUBBLING
    $("tblBody").addEventListener("click", function (e) {
        // IF USER CLICKS THE DELETE BUTTON
        if (e.target.textContent.match(/Delete/)) {
            var i, index, tblBody, btnElements;

            tblBody = $("tblBody");
            btnElements = tblBody.getElementsByTagName("button");
            for (i = 0; i < btnElements.length; i += 1) {
                if (e.target.className === btnElements[i].className) {
                    index = i;
                }
            }
            // DELETE THE EMPLOYEE FOR THE CLICKED ROW
            delEmployee(index);
        }
    });
});

