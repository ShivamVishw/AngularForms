import { Component } from '@angular/core';
import { FormControl ,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-rfs',
  templateUrl: './rfs.component.html',
  styleUrls: ['./rfs.component.css']
})
export class RfsComponent {

  EmployeeName = new FormControl('');

  updateEmployeeName(){
    this.EmployeeName.setValue('John');
  }


  //Normal form group
  // employeeForm =new FormGroup({
  //   Name: new FormControl(''),
  //   Designation: new FormControl(''),
  //   Country: new FormControl(''),
  //   Address: new FormControl(''),
  // });

  //Nested form group
  employeeForm =new FormGroup({
    Name: new FormControl(''),
    Designation: new FormControl(''),
    Location: new FormGroup({
      Country: new FormControl(''),
      Address: new FormControl(''),
    })
    
  });

  onSubmit(){
    console.log(this.employeeForm.value);
  }
}
