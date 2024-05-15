import { OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { ReplaySubject } from 'rxjs';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
export declare class FormlyFieldDropdownComponent extends FieldType implements OnInit {
    fieldTemplates: FormlyBoxTemplates;
    defaultOptions: {
        props: {
            _subject: ReplaySubject<NzDropdownMenuComponent>;
        };
    };
    instance: NzDropdownMenuComponent;
    constructor(fieldTemplates: FormlyBoxTemplates);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldDropdownComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldDropdownComponent, "nz-formly-dropdown", never, {}, {}, never, never, false, never>;
}
