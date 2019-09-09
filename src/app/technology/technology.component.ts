import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../alert.service';
declare var $: any;
import * as _ from 'lodash';
import { config } from '../config';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  allTechnology: any = [];
  addTechnologyForm: FormGroup;
  singleTechnology: any = [];
  file: any = [];
  path = config.baseMediaUrl;

  constructor(public _adminService: AdminService, public _alertService: AlertService) {
    this.addTechnologyForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      desc: new FormControl(''),
      logo: new FormControl('')
    })

  }

  ngOnInit() {
    this.getAllTechnology();
  }

  hideModal() {
    $('#modaladdTechnologyForm').modal('hide');
  }

  /**
   * get technologies list
   */
  getAllTechnology() {
    this._adminService.getAllTechnology().subscribe((res: any) => {
      console.log('res of all Technology=========>', res)
      this.allTechnology = res.data;
      console.log("=====All Technology======>", this.allTechnology);
    }, err => {
      console.error(err);
    })
  }

  /**
   * Add Technology logo
   * @param value 
   */
  addIcon(value) {
    console.log('value==========>', value)
    this.addTechnologyForm.value['logo'] = value;
    console.log(this.addTechnologyForm.value['logo']);
    if(this.file.length){
      this.addTechnologyForm.value['logo'] = '';
    }
    // this.url = this.baseUrl+this.addForm.value['avatar'];
    $('#basicExampleModal').modal('hide');
  }

  logoSelected(event) {
    this.file = event.target.files;
    console.log(this.file);
    this.addTechnologyForm.value['logo'] = '';
    $('#basicExampleModal').modal('hide');

  }

  /**
   * Add technology
   * @param {object} data 
   */
  addTechnology(detail) {
    console.log('data value================>', detail, this.addTechnologyForm.value);
    const data = new FormData();
    _.forOwn(this.addTechnologyForm.value, (value, key) => {
      data.append(key, value);
    });
    console.log("form data==========>", this.addTechnologyForm.value)
    if (this.file.length > 0) {
      console.log("=========this.s", this.file)
      for (let i = 0; i <= this.file.length; i++) {
        data.append('uploadFile', this.file[i]);
      }
    }
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

  /**
   * Delete technology by id
   * @param {String} id 
   */
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

  /**
   * Update technology
   * @param {object} data 
   */
  updateTechnology(detail) {
    console.log(detail);
    const data = new FormData();
    _.forOwn(this.addTechnologyForm.value, (value, key) => {
      data.append(key, value);
    });
    console.log("form data==========>", this.addTechnologyForm.value)
    if (this.file.length > 0) {
      console.log("=========this.s", this.file)
      for (let i = 0; i <= this.file.length; i++) {
        data.append('uploadFile', this.file[i]);
      }
    }
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

  /**
   * get single technology by id
   * @param  {object} technology 
   */
  getTechnologyById(technology) {
    console.log(technology);
    this.singleTechnology = technology;
  }

}
