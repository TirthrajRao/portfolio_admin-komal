import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AlertService } from '../alert.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-add-brochure',
  templateUrl: './add-brochure.component.html',
  styleUrls: ['./add-brochure.component.css']
})
export class AddBrochureComponent implements OnInit {
  files: any;
  imagePath;
  imgURL;
  urls = new Array<string>();
  addBrochureForm: FormGroup;
  allTag:any = [];
  public items = [];

  constructor(public _adminService: AdminService, public _alertService: AlertService) {
    this.getAllTags();
    this.addBrochureForm = new FormGroup({
      hashtag: new FormControl('', [Validators.required])
    })
   }

  ngOnInit() {
  }

  /**
   * Select Images
   * @param {Object} event 
   */
  broucherSelected(event) {
    this.urls = [];
    this.files = event.target.files;
    if (this.files) {
      for (let file of this.files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }


  /**
   * Get All Tags
   */
  getAllTags() {
    this._adminService.getAllTag().subscribe((res: any) => {
      console.log(res);
      _.forEach(res.data, (tag => {
        this.allTag.push(tag.hashtag);
      }))
      console.log(this.allTag);
      this.items = this.allTag
    }, err => {
      console.log(err);
    })
  }


 /**
  * Add brochure
  * @param {object} form 
  */
  addBrochure(form) {
    console.log("detail=========>",form);
    const arr = [];
    _.forEach(form.hashtag, tag => {
      arr.push(tag.display);
    })
    console.log('arrr========>', arr);
    this.addBrochureForm.controls.hashtag.setValue(arr);
    console.log(this.addBrochureForm.value);
    const data = new FormData();
    _.forOwn(this.addBrochureForm.value, (value, key) => {
      data.append(key, value);
    });
    if (this.files.length > 0) {
      console.log("=========this.s", this.files)
      for (let i = 0; i <= this.files.length; i++) {
        data.append('uploadFile', this.files[i]);
      }
    }
    this._adminService.addBrochure(data).subscribe((res: any) => {
      console.log("res:=>", res);
      this.urls = [];
      this.addBrochureForm.reset();
      this._alertService.successAlert(res.message);
    }, err => {
      console.log(err);
      this._alertService.failurAlert();
    })
  }
}
