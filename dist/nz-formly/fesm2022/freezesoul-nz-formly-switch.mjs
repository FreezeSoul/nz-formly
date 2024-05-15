import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import * as i3 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i2 from '@freezesoul/nzx-antd/switch';
import { NzxSwitchModule } from '@freezesoul/nzx-antd/switch';
import { CommonModule } from '@angular/common';

class FormlyFieldSwitchComponent extends FieldType {
    defaultOptions = {
        props: { nzxCheckedValue: true, nzxUnCheckedValue: false }
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldSwitchComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldSwitchComponent, selector: "nz-formly-switch-component", usesInheritance: true, ngImport: i0, template: `
    <nzx-switch
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxCheckedValue]="props.nzxCheckedValue"
      [nzxUnCheckedValue]="props.nzxUnCheckedValue"
      [nzCheckedChildren]="props.nzCheckedChildren"
      [nzUnCheckedChildren]="props.nzUnCheckedChildren"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzSize]="props.nzSize"
      [nzLoading]="props.nzLoading"
      [nzControl]="props.nzControl"
      ngDefaultControl
    ></nzx-switch>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i2.NzxSwitchComponent, selector: "nzx-switch", inputs: ["nzxCheckedValue", "nzxUnCheckedValue", "nzDisabled", "nzLoading", "nzControl", "nzCheckedChildren", "nzUnCheckedChildren", "nzSize"] }, { kind: "directive", type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldSwitchComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-switch-component',
                    template: `
    <nzx-switch
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxCheckedValue]="props.nzxCheckedValue"
      [nzxUnCheckedValue]="props.nzxUnCheckedValue"
      [nzCheckedChildren]="props.nzCheckedChildren"
      [nzUnCheckedChildren]="props.nzUnCheckedChildren"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzSize]="props.nzSize"
      [nzLoading]="props.nzLoading"
      [nzControl]="props.nzControl"
      ngDefaultControl
    ></nzx-switch>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }] });

const COMPONENT = FormlyFieldSwitchComponent;
class FormlyNzSwitchModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSwitchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSwitchModule, declarations: [FormlyFieldSwitchComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzxSwitchModule, i3.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSwitchModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzxSwitchModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'switch',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSwitchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzxSwitchModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'switch',
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

export { FormlyFieldSwitchComponent, FormlyNzSwitchModule };
//# sourceMappingURL=freezesoul-nz-formly-switch.mjs.map
