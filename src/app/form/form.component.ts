import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData: any = {};

  submitForm() {
    // Handle form submission here, e.g., send data to a server or perform other actions.
    console.log('Form submitted with data:', this.formData);
  }
  

}
