/*eslint-env browser*/
var empMgmt = {
    empList: [],
    btnIdList: [],
    rowBtnSync: [],
    showEmployees: function() {
        "use strict";
        if (this.empList.length === 0) {
           console.log('No employees to show')
        } else {
            console.log('List of employees: ');
            console.log('Number of employees:', this.empList.length);
            var empNumber = document.getElementById("idShowing");
            empNumber.innerHTML = 'Showing ' + this.empList.length + ' employees';
            var table = document.getElementById("empTableBody");
            for (var i = 0; i < this.empList.length; i++) {
                var row = table.insertRow(i);
                for (var j = 0; j < 3; j++) {
                     console.log((this.empList[i])[j]);
                      var cell = row.insertCell(j);
                      cell.innerHTML = (this.empList[i])[j];
                    } // end for var j
                 // add DELETE buttons to ech employee
                 var delBtnCell = row.insertCell(3);
                 delBtnCell.innerHTML = '<button id="idDelete'+i+'Btn">Delete</button>';
                 this.btnIdList[i] = 'idDelete' + i + 'Btn';
                 //console.log("Added btnIdList " + i + " " + this.btnIdList[i]);
                 this.rowBtnSync[i] = i;
                 var btnN = document.getElementById(this.btnIdList[i]);
                 btnN.addEventListener('click',this.delEmployees,true);

             } // end for var i
             console.log(this.rowBtnSync,this.btnIdList);
           } // end else

    }, // end showEmployees

    addEmployees: function(empN, empT, empExt) {
        "use strict";
        //console.log('add employee ' + empN);
        this.empList.push([
            empN, empT, empExt
        ]);
    }, // end

    addNewEmployees: function(empN, empT, empExt) {
        "use strict";
        console.log('add employee ' + empN);

        this.empList.push([
            empN, empT, empExt
        ]);
        var table = document.getElementById("empTableBody");
        var rowNumber = this.btnIdList.length;
        var row = table.insertRow(rowNumber);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var delBtnCell = row.insertCell(3);
        cell1.innerHTML = empN;
        cell2.innerHTML = empT;
        cell3.innerHTML = empExt;
        var lastBtnId = this.btnIdList[this.btnIdList.length - 1];
        var newBtnNumb = parseInt(lastBtnId.substr(8,1)) + 1;

        delBtnCell.innerHTML = '<button id="idDelete'+newBtnNumb+'Btn">Delete</button>';
        var newDelBtnId = 'idDelete' + newBtnNumb + 'Btn';
        this.btnIdList.push(newDelBtnId);
        this.rowBtnSync.push(this.rowBtnSync.length); //add next number to sync row
        console.log(this.btnIdList,this.rowBtnSync);

        var delBtnNewEmp = document.getElementById(newDelBtnId);
        delBtnNewEmp.addEventListener('click',this.delEmployees,true);

        var empNumber = document.getElementById("idShowing");
        empNumber.innerHTML = 'Showing ' + this.rowBtnSync.length + ' employees';
    },

    delEmployees: function(ev) {
        console.log(empMgmt.rowBtnSync,empMgmt.btnIdList);
        //console.log(ev.target.id);
        var buttonId = ev.target.id;
        var empRowNumb = buttonId.substr(8,1);
        var table = document.getElementById("empTableBody");
        var j, rowN;
        for (var j=0; j < empMgmt.btnIdList.length; j++) {
            if (empMgmt.btnIdList[j] === buttonId) {
                rowN = empMgmt.rowBtnSync[j];
                var row = table.deleteRow(rowN);
                empMgmt.rowBtnSync.pop(); //remove last element from array
                empMgmt.btnIdList.splice(j,1); // remove btnId element from array
                var empNumber = document.getElementById("idShowing");
                empNumber.innerHTML = 'Showing ' + empMgmt.rowBtnSync.length + ' employees';
                return j;
                } // end if
        } // end for

    } // end delEmployees()
}; // end object

    idAddButton.addEventListener("click", function () {
         "use strict";
    console.log('Add button clicked');
    var idName = document.getElementById("idName").value;
    var idTitle = document.getElementById("idTitle").value;
    var idExtention = document.getElementById("idExtension").value;
    empMgmt.addNewEmployees(idName,idTitle,idExtention);
    document.getElementById("idName").value = ' ';
    document.getElementById("idTitle").value = ' ';
    document.getElementById("idExtension").value = ' ';
    });

empMgmt.addEmployees('Zak','Director','X1212');
empMgmt.addEmployees('John','Architect','X5547');
empMgmt.addEmployees('Maria','Programmer','X3347');
empMgmt.addEmployees('Sofia','Teacher','X5588');
empMgmt.addEmployees('Bella','Administrator','X1234');

empMgmt.showEmployees();

console.log ("empMgmt.btnIdList.length = ",empMgmt.btnIdList.length);

