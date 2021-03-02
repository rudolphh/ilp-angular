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
      dept: "ilp",
      city: "modesto",
      email: "rudyah@gmail.com"
    },
    {
      employeeId: 2,
      firstName: "Imogen",
      lastName: "Hernandez",
      dept: "baby",
      city: "modesto",
      email: "imogen@gmail.com"
    },
    {
      employeeId: 3,
      firstName: "Liliana",
      lastName: "Hernandez",
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
