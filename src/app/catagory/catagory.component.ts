import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AlertService} from '../alert.service';
declare var $:any;
@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent implements OnInit {

  allCategory: any = [];
  addCategoryForm: FormGroup;
  singleCategory:any = [];
  constructor(public _adminService: AdminService,public _alertService:AlertService) {
    this.addCategoryForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
    })

  }

  ngOnInit() {
    this.getAllCategory();
  }
  hideModal() {
    $('#modaladdTechnologyForm').modal('hide');
  }

  getAllCategory(){
    this._adminService.getAllCategory().subscribe((res: any) => {
      console.log('res of all Category=========>', res)
      this.allCategory = res.data;
      console.log("=====All Category======>", this.allCategory);
    }, err => {
      console.error(err);
    })
  }

  addCategory(data){
    console.log('data value================>', data);
    this._adminService.addCategory(data).subscribe((res: any) => {
      console.log("add technology=========>", res);
      $('#modaladdTechnologyForm').modal('hide');
      this.addCategoryForm.reset();
      this._alertService.successAlert("Category Added Successfully");
      this.getAllCategory();
    }, err => {
      console.log(err);
      this._alertService.failurAlert();
    })
  }

  deleteCategory(id){
    console.log('data value================>', id);
    this._adminService.deleteCategory(id).subscribe((res: any) => {
      console.log("add technology=========>", res);
      this._alertService.successAlert("Category Deleted Successfully");
      this.getAllCategory();
    }, err => {
      console.log(err);
      this._alertService.failurAlert();
    })
  }

  getCategoryById(category){
    console.log(category);
    this.singleCategory = category;
  }

  updateCategory(data){
    console.log(data);
    this._adminService.updateCategory(data,this.singleCategory._id).subscribe((res:any)=>{
      console.log(res);
      $('#modaladdTechnologyForm').modal('hide');
      this.singleCategory = [];
      this._alertService.successAlert("Category Updated Successfully");
    },err=>{
      console.log(err);
      this._alertService.failurAlert();
    })
  }

}
