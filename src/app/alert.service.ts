import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  successAlert(title){
    Swal.fire({
      type: 'success',
      title: title,
      showConfirmButton: false,
      timer: 1500
    });
  }

  failurAlert(){
    Swal.fire('Oops...', 'Something went wrong!', 'error');
  }

  deleteAlert(title){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your ' +title+ 'has been deleted.',
          'success'
        )
      }
    })
  }
}
