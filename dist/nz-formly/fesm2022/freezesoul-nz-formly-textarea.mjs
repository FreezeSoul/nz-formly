import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i4 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i3 from 'ng-zorro-antd/input';
import { NzInputModule } from 'ng-zorro-antd/input';

class FormlyFieldTextareaComponent extends FieldType {
    defaultOptions = {
        props: { nzComputeCharacterCount: (v) => v.length, nzAutosize: false, nzSize: 'default', rows: 2 }
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTextareaComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldTextareaComponent, selector: "nz-formly-textarea", usesInheritance: true, ngImport: i0, template: `
    <nz-textarea-count
      *ngIf="props.nzMaxCharacterCount != null; else templateRef"
      [nzMaxCharacterCount]="props.nzMaxCharacterCount"
      [nzComputeCharacterCount]="props.nzComputeCharacterCount"
    >
      <textarea
        nz-input
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [rows]="props.rows"
        [attr.placeholder]="props.placeholder"
        [nzAutosize]="props.nzAutosize"
        [nzBorderless]="props.nzBorderless"
        [nzSize]="props.nzSize"
        maxlength=""
      ></textarea>
    </nz-textarea-count>

    <ng-template #templateRef>
      <textarea
        nz-input
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [rows]="props.rows"
        [attr.placeholder]="props.placeholder || ''"
        [nzAutosize]="props.nzAutosize == null ? false : props.nzAutosize"
        [nzBorderless]="props.nzBorderless"
        [nzSize]="props.nzSize"
        maxlength=""
      ></textarea>
    </ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.NzTextareaCountComponent, selector: "nz-textarea-count", inputs: ["nzMaxCharacterCount", "nzComputeCharacterCount", "nzFormatter"] }, { kind: "directive", type: i3.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStepperless", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "directive", type: i3.NzAutosizeDirective, selector: "textarea[nzAutosize]", inputs: ["nzAutosize"], exportAs: ["nzAutosize"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTextareaComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-textarea',
                    template: `
    <nz-textarea-count
      *ngIf="props.nzMaxCharacterCount != null; else templateRef"
      [nzMaxCharacterCount]="props.nzMaxCharacterCount"
      [nzComputeCharacterCount]="props.nzComputeCharacterCount"
    >
      <textarea
        nz-input
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [rows]="props.rows"
        [attr.placeholder]="props.placeholder"
        [nzAutosize]="props.nzAutosize"
        [nzBorderless]="props.nzBorderless"
        [nzSize]="props.nzSize"
        maxlength=""
      ></textarea>
    </nz-textarea-count>

    <ng-template #templateRef>
      <textarea
        nz-input
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [rows]="props.rows"
        [attr.placeholder]="props.placeholder || ''"
        [nzAutosize]="props.nzAutosize == null ? false : props.nzAutosize"
        [nzBorderless]="props.nzBorderless"
        [nzSize]="props.nzSize"
        maxlength=""
      ></textarea>
    </ng-template>
  `
                }]
        }] });

const COMPONENT = FormlyFieldTextareaComponent;
class FormlyNzTextareaModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTextareaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTextareaModule, declarations: [FormlyFieldTextareaComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzInputModule, i4.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTextareaModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzInputModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'textarea',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTextareaModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzInputModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'textarea',
                                    component: COMPONENT,
                                    wrappers: ['field-wrapper']
                                }
                            ]
                        })
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldTextareaComponent, FormlyNzTextareaModule };
//# sourceMappingURL=freezesoul-nz-formly-textarea.mjs.map
