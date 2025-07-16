import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-structural-directive-ngfor-vs-for',
  imports: [CommonModule],
  templateUrl: './structural-directive-ngfor-vs-for.html',
  styleUrl: './structural-directive-ngfor-vs-for.scss'
})
export class StructuralDirectiveNgforVsFor {
  employees: any[] = [
    {
      empName: 'Jhone Doe',
      empNumber: 101,
      empEmail: 'jhon@gmail.com',
      empDept: 'IT'
    },
    {
      empName: 'Alice Smith',
      empNumber: 102,
      empEmail: 'alice.smith@gmail.com',
      empDept: 'HR'
    },
    {
      empName: 'Robert Johnson',
      empNumber: 103,
      empEmail: 'robert.j@company.com',
      empDept: 'Finance'
    }
  ];

  companyList : string[] = ["Ants Creations", "Atlato", "IFS", "99X", "WSO2", "Virtusa"];

  
}
