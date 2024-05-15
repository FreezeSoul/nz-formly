import { AfterViewInit, OnDestroy, QueryList } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzDropDownDirective } from 'ng-zorro-antd/dropdown';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class FormlyFieldButtonGroupComponent extends FieldType implements OnDestroy, AfterViewInit {
    dropdownDirectives: QueryList<NzDropDownDirective>;
    destroy$: Subject<void>;
    defaultOptions: {
        props: {
            nzSize: string;
            buttons: never[];
        };
    };
    constructor();
    ngAfterViewInit(): void;
    dropdownChange(): void;
    subjectDestroy(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldButtonGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldButtonGroupComponent, "nz-formly-button-group", never, {}, {}, never, never, false, never>;
}
