import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'reactiveform',
    templateUrl: './reactive.component.html'
})
export class ReactiveFormComponent implements OnInit {
    title = "Hello Reactive Form Component";
    registerForm: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder) {
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    get f() { return this.registerForm.controls; }
    onSubmit() {
        // stop here if form is invalid
        this.submitted = true;
        if (this.registerForm.invalid) {
            alert('Invalid');
        }
        else {
            alert('valid');
        }

    }
}