import { Component, OnInit } from '@angular/core';
import { Crud } from '../crud';
import { Iuser } from '../iuser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Reusable } from '../reusable/reusable';

@Component({
  selector: 'app-crud',
  imports: [CommonModule, Reusable],
  templateUrl: './crud.html',
  styleUrl: './crud.scss'
})
export class CRUD implements OnInit{

  parentProperty : string = "CRUD Operations : Angular 20"
  
  apiData : Iuser[] = [];

  constructor(private crud : Crud, private router : Router){}

  ngOnInit(): void {
      this.getAllData();
  }

  getAllData(){
    this.crud.getData().subscribe(res => {
      this.apiData = res;
    })
  }

  addNewUser() {
    this.router.navigateByUrl('add-user')
  }

  onUpdate(id : number) {
    this.router.navigate(['update-user', id])
  }

  onView(id : number) {
    this.router.navigate(['view-user', id])
  }

  onDelete(id : number) {
    this.crud.deleteData(id).subscribe(res => {
      alert('Record delete successfully !')
      this.getAllData()
    })
  }
}
