import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i4 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i3 from 'ng-zorro-antd/rate';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { CommonModule } from '@angular/common';

class FormlyFieldRateComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: { nzCount: 5 }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzCharacter() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzCharacter');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldRateComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldRateComponent, selector: "nz-formly-rate-component", usesInheritance: true, ngImport: i0, template: `
    <nz-rate
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzAllowClear]="props.nzAllowClear !== false"
      [nzAllowHalf]="props.nzAllowHalf"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzCount]="props.nzCount"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzCharacter]="nzCharacter"
      [nzTooltips]="props.nzTooltips || []"
      (nzOnHoverChange)="props.onHoverChange?.($event, field, instance)"
      (nzOnBlur)="props.nzOnBlur?.($event, field, instance)"
      (nzOnFocus)="props.nzOnFocus?.($event, field, instance)"
      (nzOnKeyDown)="props.nzOnKeyDown?.($event, field, instance)"
      ngDefaultControl
    ></nz-rate>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.NzRateComponent, selector: "nz-rate", inputs: ["nzAllowClear", "nzAllowHalf", "nzDisabled", "nzAutoFocus", "nzCharacter", "nzCount", "nzTooltips"], outputs: ["nzOnBlur", "nzOnFocus", "nzOnHoverChange", "nzOnKeyDown"], exportAs: ["nzRate"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldRateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-rate-component',
                    template: `
    <nz-rate
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzAllowClear]="props.nzAllowClear !== false"
      [nzAllowHalf]="props.nzAllowHalf"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzCount]="props.nzCount"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzCharacter]="nzCharacter"
      [nzTooltips]="props.nzTooltips || []"
      (nzOnHoverChange)="props.onHoverChange?.($event, field, instance)"
      (nzOnBlur)="props.nzOnBlur?.($event, field, instance)"
      (nzOnFocus)="props.nzOnFocus?.($event, field, instance)"
      (nzOnKeyDown)="props.nzOnKeyDown?.($event, field, instance)"
      ngDefaultControl
    ></nz-rate>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });

const COMPONENT = FormlyFieldRateComponent;
class FormlyNzRateModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzRateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzRateModule, declarations: [FormlyFieldRateComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzRateModule, i4.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzRateModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzRateModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'rate',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzRateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzRateModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'rate',
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

export { FormlyFieldRateComponent, FormlyNzRateModule };
//# sourceMappingURL=freezesoul-nz-formly-rate.mjs.map
