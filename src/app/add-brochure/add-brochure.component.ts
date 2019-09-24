import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { AlertService } from '../alert.service';

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
  constructor(public _adminService: AdminService, public _alertService: AlertService) { }

  ngOnInit() {
  }

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
   * Add Brochure
   */
  addBrochure() {
    const data = new FormData();
    if (this.files.length > 0) {
      console.log("=========this.s", this.files)
      for (let i = 0; i <= this.files.length; i++) {
        data.append('uploadFile', this.files[i]);
      }
    }
    this._adminService.addBrochure(data).subscribe((res: any) => {
      console.log("res:=>", res);
      this.urls = [];
      this._alertService.successAlert(res.message);
    }, err => {
      console.log(err);
      this._alertService.failurAlert();
    })
  }
}
