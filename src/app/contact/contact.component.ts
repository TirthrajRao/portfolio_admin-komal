import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
allContactRequests:any = [];
  constructor(public _adminService: AdminService) { }

  ngOnInit() {
    this.getContactRequest()
  }

  /**
   * get contact request list
   */
  getContactRequest(){
    this._adminService.getContactRequest().subscribe((res: any) => {
      console.log('res of all contact req=========>',res)
      this.allContactRequests = res.data;
      console.log("=====All contact req======>",this.allContactRequests);
    }, err => {
      console.error(err);
    })
  }
}
