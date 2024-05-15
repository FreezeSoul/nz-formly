import { OnDestroy, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { NzDropDownDirective } from 'ng-zorro-antd/dropdown';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
export declare class DropdownWrapperComponent extends FieldWrapper implements OnInit, OnDestroy {
    fieldTemplates: FormlyBoxTemplates;
    dropdownDirective: NzDropDownDirective;
    private subscription?;
    constructor(fieldTemplates: FormlyBoxTemplates);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownWrapperComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownWrapperComponent, "nz-formly-dropdown-wrapper", never, {}, {}, never, never, false, never>;
}
