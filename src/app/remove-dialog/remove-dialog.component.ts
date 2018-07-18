import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from '@angular/forms';
@Component({
  selector: 'app-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.css']
})
export class RemoveDialogComponent implements OnInit {
  parentExchangeList:{}[];
  extForm:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log("dialog init ((((((( ");
    console.log(this.parentExchangeList);
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
      fromCurrency:['',Validators.required ],
      toCurrency:['',Validators.required ]
    });
  }
  onSubmit() {
 
    let extObj={from:String , to:String};
    extObj.from=this.extForm.value.fromCurrency;
    extObj.to=this.extForm.value.toCurrency;
    let index=this.parentExchangeList.indexOf(extObj);
    this.parentExchangeList.splice(index,1);
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
