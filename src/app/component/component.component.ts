import { Component } from '@angular/core';
//form validation
import { FormsModule,FormGroup,FormControl, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { AppServicesService } from '../services/app-services.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent {
  name = 'Angular';
  imgUrl = "https://angular.io/assets/images/logos/angular/angular.png";
  products: any;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });


constructor(private myservice: AppServicesService) { }


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
async ngOnInit() {
  console.log("ngOnInit");
  const products = await firstValueFrom(this.myservice.getData('products'));
  this.products = products;
  console.log(products);

}
}