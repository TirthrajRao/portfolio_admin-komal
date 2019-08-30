import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(public _adminService: AdminService) {
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
      this.getAllCategory();
    }, err => {
      console.log(err)
    })
  }

  deleteCategory(id){
    console.log('data value================>', id);
    this._adminService.deleteCategory(id).subscribe((res: any) => {
      console.log("add technology=========>", res);
      this.getAllCategory();
    }, err => {
      console.log(err)
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
      this.singleCategory = []
    },err=>{
      console.log(err);
    })
  }

}
