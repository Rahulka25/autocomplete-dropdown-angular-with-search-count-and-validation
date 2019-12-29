import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";

@Directive({
    selector: '[typeaheadRequired]',
    providers: [{provide: NG_VALIDATORS, useExisting: TypeaheadRequiredValidatorDirective, multi: true}]
  })
  export class TypeaheadRequiredValidatorDirective implements Validator {
    //@Input('appForbiddenName') forbiddenName: string;
  
    validate(control: AbstractControl): {[key: string]: any} | null {
    //   return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
    //                             : null;
    console.log(control.value);
    return control.value? null : {  
        typeaheadInputRequired: {  
         valid: false  
        }  
       };
    }
  }