import { Component } from '@angular/core';

import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterFormControlName } from './models/register-form-control-name.enum';
import { UserService } from '../services/user.service';
import { Route } from '../../route.enum';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['../user.component.css']
})
export class RegisterComponent {

    readonly cancelButtonText: string = "Cancel";

    readonly submitButtonText: string = 'Register';

    readonly registerForm: FormGroup;

    readonly emailFormControl: FormControl;

    readonly nameFormControl: FormControl;

    readonly passwordFormControl: FormControl;

    constructor(formBuilder: FormBuilder,
        public readonly userService: UserService,
        private readonly router: Router) {
        this.registerForm = formBuilder.group({
            [RegisterFormControlName.Email]: [null, [Validators.required, Validators.minLength(8)]],
            [RegisterFormControlName.Password]: [null, [Validators.required, Validators.minLength(8)]],
            [RegisterFormControlName.Name]: [null, [Validators.required, Validators.minLength(8)]]
        });
        this.emailFormControl = this.registerForm.get(RegisterFormControlName.Email) as FormControl;
        this.nameFormControl = this.registerForm.get(RegisterFormControlName.Name) as FormControl;
        this.passwordFormControl = this.registerForm.get(RegisterFormControlName.Password) as FormControl;
    }

    onCancel(): void {
        this.router.navigate([Route.Home]);
    }

    onFormSubmit(): void {
        const name: string = this.nameFormControl.value.trim();
        const email: string = this.emailFormControl.value.trim();
        const password: string = this.passwordFormControl.value.trim();

        if (name === '' || email === '' || password === '') {
            alert('Please, fill in all fields');
            return;
        }

        //very basic regex for the email
        if (!email.match("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")) {
            alert('Invalid email');
            return;
        }

        if (password.length < 6) {
            alert('Weak password');
            return;
        }

        this.userService.register(name, email, password)
            .subscribe(
                result => {
                    if (result) {
                        this.userService.setSession(result);
                        this.router.navigate([Route.Workspaces]);
                    } else {
                        alert(result);
                    }
                },
                error => {
                    if (error.error.result !== undefined) {
                        alert(error.error.message);
                    } else {
                        alert(error.error.message);
                    }
                },
                () => { }
            );
    }
}
