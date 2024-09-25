import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // isLoginView:boolean = true;

  userLogin:any={
    userName:'',
    password:''
  }
  router = inject(Router);
  // onLogin(){
  //   const isLocaldata = localStorage.getItem("angular18Local");
  //   if(isLocaldata!= null){
  //     const localArray = JSON.parse(isLocaldata);
  //     localArray.push(this.userLogin);
  //     localStorage.setItem("angular18Local",JSON.stringify(localArray));
  //   }else{
  //     const localArray=[];
  //     localArray.push(this.userLogin);
  //     localStorage.setItem("angular18Local", JSON.stringify(localArray));
      

// }
// this.router.navigateByUrl('main');
//   }

onLogin() {
  const isLocaldata = localStorage.getItem('angular18Local');
  let localArray = [];

  if (isLocaldata != null) {
    localArray = JSON.parse(isLocaldata);
  }
  if(this.userLogin.userName != '' && this.userLogin != ''){

  localArray.push(this.userLogin);
  localStorage.setItem('angular18Local', JSON.stringify(localArray));

  localStorage.setItem('currentUser', JSON.stringify(this.userLogin));
  this.router.navigateByUrl('main');
  }
}
}

  // userRegisterObj:any={
  //   userName:'',
  //   password:'',
  //   emailId:''
  // }
  

  // onRegister(){
  //   const isLocaldata = localStorage.getItem("angular18Local");
  //   if(isLocaldata != null){
  //     const localArray = JSON.parse(isLocaldata);
  //     localArray.push(this.userRegisterObj);
  //     localStorage.setItem("angular18Local", JSON.stringify(localArray))
  //   }else{
  //     const localArray = [];
  //     localArray.push(this.userRegisterObj);
  //     localStorage.setItem("angular18Local", JSON.stringify(localArray))
  //   }
  //   alert("success");
  // }
  
  // onLogin(){
  //   const isLocaldata = localStorage.getItem("angular18Local");
  //   if(isLocaldata!=null){
  //     const users = JSON.parse(isLocaldata);

  //     const isUserFound = users.find((m:any) => m.userName ==this.userLogin.userName && m.password == this.userLogin.password);
  //     if(isUserFound != undefined){
  //       this.router.navigateByUrl('main');
  //     }else{
  //       alert("The Name or the Password is Wrong!");
  //     } 
  //   }
  // }


