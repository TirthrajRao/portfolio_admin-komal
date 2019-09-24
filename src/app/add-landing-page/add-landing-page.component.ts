import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-add-landing-page',
  templateUrl: './add-landing-page.component.html',
  styleUrls: ['./add-landing-page.component.css']
})
export class AddLandingPageComponent implements OnInit {
  files: any;
  imagePath;
  imgURL;
  urls = new Array<string>();
  constructor(public _adminService: AdminService, public _alertService: AlertService) { }

  ngOnInit() {
  }

  /**
   * Select Images
   * @param {object} event 
   */
  landingPageSelected(event) {
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
   * Add Landing page
   */
  addLandingPage() {
    const data = new FormData();
    if (this.files.length > 0) {
      console.log("=========this.s", this.files)
      for (let i = 0; i <= this.files.length; i++) {
        data.append('uploadFile', this.files[i]);
      }
    }
    this._adminService.addLandingPage(data).subscribe((res: any) => {
      console.log("res:=>", res);
      this.urls = [];
      this._alertService.successAlert(res.message);
    }, err => {
      console.log(err);
      this._alertService.failurAlert();
    })
  }
}
