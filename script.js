// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

//Write a function to get the employee data from the user
//Write a function to create and return an array employee objects
const collectEmployees = function () {
  let employeesArray = new Array();
  let continueAddingEmployee = true;
  //While loop to continue adding employees
  while (continueAddingEmployee) {
    //Declaring employee data as an object
    let employee = {};
    const promptValue1 = window.prompt("Enter first name:");
    if (promptValue1 === null) {
      return employeesArray;
    }
    const promptValue2 = window.prompt("Enter last name:");
    if (promptValue2 === null) {
      return employeesArray;
    }
    const promptValue3 = Number(window.prompt("Enter Salary:"));
    if (promptValue3 === null) {
      return employeesArray;
    }
    //assign the user inputs to the employee object
    employee.firstName = promptValue1;
    employee.lastName = promptValue2;
    //change the default value string to a number
    employee.salary = Number(promptValue3);

    //push the employee data into the array
    employeesArray.push(employee);
    //to console log the user input as object
    
    continueAddingEmployee = window.confirm("Continue adding employees?");
  }
  //sorting employees alphabetically by last name
  employeesArray.sort(employeesArray.lastName);
  console.log({ employeesArray });
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  //define total number of employees from employee array generated
  //declare total salary
  let totalSalary = 0.0;
  //for loop to get total salary
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary = totalSalary + employeesArray[i].salary;
  }
  //calculate average salary
  let averageSalary = totalSalary / employeesArray.length;
  //console log total number of employees and average salary
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary}`);
}
  // Select a random employee
  const getRandomEmployee = function (employeesArray) {
    // TODO: Select and display a random employee
    const index = Math.floor(Math.random() * employeesArray.length);
    let selectedEmployee = employeesArray[index];
    console.log("The random employee selected is", {selectedEmployee});
  }

  /*
    ====================
    STARTER CODE
    Do not modify any of the code below this line:
  */

  // Display employee data in an HTML table
  const displayEmployees = function (employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');

    // Clear the employee table
    employeeTable.innerHTML = '';

    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
      const currentEmployee = employeesArray[i];

      const newTableRow = document.createElement("tr");

      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = currentEmployee.firstName;
      newTableRow.append(firstNameCell);

      const lastNameCell = document.createElement("td");
      lastNameCell.textContent = currentEmployee.lastName;
      newTableRow.append(lastNameCell);

      const salaryCell = document.createElement("td");
      // Format the salary as currency
      salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });

      newTableRow.append(salaryCell);

      employeeTable.append(newTableRow);
    }
  }

  const trackEmployeeData = function () {
    const employees = collectEmployees();

    console.table(employees);

    displayAverageSalary(employees);

    console.log('==============================');

    getRandomEmployee(employees);

    employees.sort(function (a, b) {
      if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 1;
      }
    });

    displayEmployees(employees);
  }

  // Add event listener to 'Add Employees' button
  addEmployeesBtn.addEventListener('click', trackEmployeeData);