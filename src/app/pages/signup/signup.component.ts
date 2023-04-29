import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/service/userservice';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private userservice:UserServiceService,private snackbar: MatSnackBar){}

  public user={
    name:'',
    email:'',
    password:'',
    about:''
  }

   formSubmit()
   {
    console.log(this.user);
    if(this.user.name == '' || this.user.name== null ||
    this.user.email == '' || this.user.email== null ||
    this.user.password == '' || this.user.password == null ||
    this.user.about == '' || this.user.about == null)
    {
      Swal.fire(
        'Please fill the required field',
        
      )
      return;
    }

    // addUser calling -- userservice
    this.userservice.addUser(this.user).subscribe(
      (data:any)=>{
         console.log(data);
         // Success
         //alert('success');
         Swal.fire('Success','User is registered and user id is '+data.id ,'success');
      },
      (error)=>{
        // error
        console.log(error);
        //alert('Something Went Wrong');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    )

   }

   btnClickInReset()
   {
      console.log("btn click on the reset button");
      
      this.snackbar.open("you want to reset ?" , "Yes");

   }
}
