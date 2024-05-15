import { OnDestroy, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { TextFieldConfig } from './formly.type';
import * as i0 from "@angular/core";
export declare class FormlyFieldTextValueComponent<T> extends FieldType<TextFieldConfig> implements OnInit, OnDestroy {
    private result?;
    private subscription?;
    defaultOptions: {
        props: {
            defaultText: string;
        };
    };
    ngOnInit(): void;
    get textValue(): Observable<any> | Promise<any>;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldTextValueComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldTextValueComponent<any>, "nz-formly-text-value", never, {}, {}, never, never, false, never>;
}
