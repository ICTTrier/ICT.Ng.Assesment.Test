import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from '@angular/forms';
@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
  parentExchangeList:{}[];
  extForm:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
    
    this.createForm();
    this.extForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }
  formErrors = {'fromCurrency': '','toCurrency': ''};

  validationMessages = {
     'fromCurrency': {
      'required':      'From_Currency is required.',
      'minlength':     'It must be at least 2 characters long.'
    },
      'toCurrency': {
      'required':      'To_Currency is required.',
      'minlength':     'It must be at least 2 characters long.'
    }
};
createForm()
  {
    
    this.extForm=this.fb.group({
      fromCurrency:['',Validators.required,Validators],
      toCurrency:['',Validators.required ]
    });
  }
  onSubmit() {
 alert("here");
 
    let extObj={from:String , to:String};
    extObj.from=this.extForm.value.fromCurrency;
    extObj.to=this.extForm.value.toCurrency;
    this.parentExchangeList.push(extObj);   // add data in App rate List
    console.log(this.parentExchangeList);
    let extFormValues = this.extForm.value;
    this.extForm.reset({
      fromCurrency: '',
      toCurrency: ''
    });
   
  }
  onValueChanged(data?: any) {
    if (!this.extForm) { return; }
    const form = this.extForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
       
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

}
