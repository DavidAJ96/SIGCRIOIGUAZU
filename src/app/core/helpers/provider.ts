import { Component, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { GenericFormControl } from "../genericFormControl";



export class Provider {

    static getProviderOfCustomControl(component: any){
        return {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => component),
            multi: true
          }
    }
}
