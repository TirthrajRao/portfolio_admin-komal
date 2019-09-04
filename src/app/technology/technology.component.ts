import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../alert.service';
declare var $: any;

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  allTechnology: any = [];
  addTechnologyForm: FormGroup;
  singleTechnology: any = [];
  constructor(public _adminService: AdminService, public _alertService: AlertService) {
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
      this._alertService.successAlert("Technology Added Successfully");
    }, err => {
      console.log(err);
      this._alertService.failurAlert();
    })
  }

  deleteTechnology(id) {
    console.log(id);
    this._adminService.deleteTechnology(id).subscribe((res: any) => {
      console.log(res);
      this.getAllTechnology();
      this._alertService.successAlert("Technology Deleted Successfully");
    }, err => {
      console.log(err);
      this._alertService.failurAlert();
    })
  }
  updateTechnology(data) {
    console.log(data);
    this._adminService.updateTechnology(data, this.singleTechnology._id).subscribe((res: any) => {
      console.log(res);
      $('#modaladdTechnologyForm').modal('hide');
      this.singleTechnology = [];
      this._alertService.successAlert("Technology updated Successfully");
    }, err => {
      console.log(err);
      this._alertService.failurAlert();
    })
  }

  getTechnologyById(technology) {
    console.log(technology);
    this.singleTechnology = technology;
  }

}
