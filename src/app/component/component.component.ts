import { Component } from '@angular/core';
//form validation
import { FormsModule,FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent {
  name = 'Angular';
  imgUrl = "https://angular.io/assets/images/logos/angular/angular.png";

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  onsubmit(){
    console.log(this.form.value);

    if (this.form.invalid){
      console.log("Form is invalid");
      alert("Form is invalid");
    }
    else{
      console.log(this.form.value);
      alert("Form is valid");
  }


}
}