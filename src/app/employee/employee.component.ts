import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  public empList : Employee[] = [
    {
      employeeId: 1,
      firstName: "Rudy",
      lastName: "Hernandez",
      birthDate: new Date(1982, 8, 27),
      salary: 70000.00,
      dept: "ilp",
      city: "modesto",
      email: "rudyah@gmail.com"
    },
    {
      employeeId: 2,
      firstName: "Imogen",
      lastName: "Hernandez",
      birthDate: new Date(2018, 7, 7),
      salary: 0,
      dept: "baby",
      city: "modesto",
      email: "imogen@gmail.com"
    },
    {
      employeeId: 3,
      firstName: "Liliana",
      lastName: "Hernandez",
      birthDate: new Date(2014, 6, 16),
      salary: 0,
      dept: "ilp",
      city: "newman",
      email: "lily@gmail.com"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
