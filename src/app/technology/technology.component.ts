import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  allTechnology: any = [];
  addTechnologyForm: FormGroup;
  singleTechnology:any = [];
  constructor(public _adminService: AdminService) {
    this.addTechnologyForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      desc: new FormControl('')
    })

  }

  ngOnInit() {
    this.getAllTechnology();
  }

  hideModal() {
    $('#modaladdTechnologyForm').modal('hide');
  }

  getAllTechnology() {
    this._adminService.getAllTechnology().subscribe((res: any) => {
      console.log('res of all Technology=========>', res)
      this.allTechnology = res.data;
      console.log("=====All Technology======>", this.allTechnology);
    }, err => {
      console.error(err);
    })
  }

  addTechnology(data) {
    console.log('data value================>', data);
    this._adminService.addTechnology(data).subscribe((res: any) => {
      console.log("add technology=========>", res);
      $('#modaladdTechnologyForm').modal('hide');
      this.addTechnologyForm.reset();
      this.getAllTechnology();
    }, err => {
      console.log(err)
    })
  }

  deleteTechnology(id) {
    console.log(id);
    this._adminService.deleteTechnology(id).subscribe((res: any) => {
      console.log(res);
      this.getAllTechnology();
    }, err => {
      console.log(err)
    })
  }
  updateTechnology(data) {
    console.log(data);
    this._adminService.updateTechnology(data,this.singleTechnology._id).subscribe((res:any)=>{
      console.log(res);
      $('#modaladdTechnologyForm').modal('hide');
      this.singleTechnology = []
    },err=>{
      console.log(err);
    })
  }

  getTechnologyById(technology){
    console.log(technology);
    this.singleTechnology = technology;
  }

}
