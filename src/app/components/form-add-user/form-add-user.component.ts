import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.scss']
})
export class FormAddUserComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private service: UsersServiceService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      age: ["", [Validators.required, Validators.min(18)]],
      carreer: ["", [Validators.required, Validators.minLength(4)]],
      hobbie: ["", [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {

    this.service.addUser(this.form.value);
    console.log(this.form.value);
    alert('Usuario agregado correctamente');
  }

}
