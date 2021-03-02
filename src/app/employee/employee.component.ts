import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  public employee : Employee = {
    employeeId: 1,
    firstName: "Rudy",
    lastName: "Hernandez",
    dept: "ilp",
    city: "modesto",
    email: "rudyah@gmail.com"
  };

  public emp : Employee = {}

  editMode : boolean = false;

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  EditEmp(): void {
    this.emp.employeeId = this.employee.employeeId;
    this.emp.firstName = this.employee.firstName;
    this.emp.lastName = this.employee.lastName;
    this.emp.dept = this.employee.dept;
    this.emp.city = this.employee.city;
    this.emp.email = this.employee.email;
  }

  UpdateEmp(): void {
    this.employee.employeeId = this.emp.employeeId;
    this.employee.firstName = this.emp.firstName;
    this.employee.lastName = this.emp.lastName;
    this.employee.dept = this.emp.dept;
    this.employee.city = this.emp.city;
    this.employee.email = this.emp.email;
  }

}
