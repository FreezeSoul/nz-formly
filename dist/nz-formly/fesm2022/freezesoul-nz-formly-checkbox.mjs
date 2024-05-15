import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i4 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i3 from '@freezesoul/nzx-antd/checkbox';
import { NzxCheckboxModule } from '@freezesoul/nzx-antd/checkbox';
import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i6 from '@freezesoul/nzx-antd/pipe';
import { NzxPipeModule } from '@freezesoul/nzx-antd/pipe';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

class FormlyFieldCheckboxComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: { options: [], nzxMultiple: true, nzxLayout: 'horizontal', nzxRequired: true }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get labelTemplate() {
        return resolveTplName(this.props, this.fieldTemplates, 'labelTemplate');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldCheckboxComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldCheckboxComponent, selector: "nz-formly-checkbox-component", usesInheritance: true, ngImport: i0, template: `
    <nzx-checkbox
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxDisabled]="props.disabled || formControl?.disabled"
      [nzxOptions]="props.options | toAsync: $any(props) | async"
      [nzxLabelTemplate]="labelTemplate"
      [nzxLayout]="props.nzxLayout"
      [nzxMultiple]="props.nzxMultiple"
      [nzxRequired]="props.nzxRequired"
      (nzxBlur)="props.blur && props.blur(field, $event)"
      (nzxFocus)="props.focus && props.focus(field, $event)"
      (nzxItemChange)="props.nzxItemChange && props.nzxItemChange($event, field, this)"
      ngDefaultControl
    ></nzx-checkbox>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.NzxCheckboxComponent, selector: "nzx-checkbox", inputs: ["nzxOptions", "nzxDisabled", "nzxLayout", "nzxMultiple", "nzxRequired", "nzxLabelTemplate"], outputs: ["nzxFocus", "nzxBlur", "nzxItemChange"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { kind: "pipe", type: i5.AsyncPipe, name: "async" }, { kind: "pipe", type: i6.ToAsyncPipe, name: "toAsync" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldCheckboxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-checkbox-component',
                    template: `
    <nzx-checkbox
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxDisabled]="props.disabled || formControl?.disabled"
      [nzxOptions]="props.options | toAsync: $any(props) | async"
      [nzxLabelTemplate]="labelTemplate"
      [nzxLayout]="props.nzxLayout"
      [nzxMultiple]="props.nzxMultiple"
      [nzxRequired]="props.nzxRequired"
      (nzxBlur)="props.blur && props.blur(field, $event)"
      (nzxFocus)="props.focus && props.focus(field, $event)"
      (nzxItemChange)="props.nzxItemChange && props.nzxItemChange($event, field, this)"
      ngDefaultControl
    ></nzx-checkbox>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });

const COMPONENT = FormlyFieldCheckboxComponent;
class FormlyNzCheckboxModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCheckboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCheckboxModule, declarations: [FormlyFieldCheckboxComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzCheckboxModule,
            NzxPipeModule,
            NzxCheckboxModule, i4.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCheckboxModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzCheckboxModule,
            NzxPipeModule,
            NzxCheckboxModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'checkbox',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCheckboxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzCheckboxModule,
                        NzxPipeModule,
                        NzxCheckboxModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'checkbox',
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

export { FormlyFieldCheckboxComponent, FormlyNzCheckboxModule };
//# sourceMappingURL=freezesoul-nz-formly-checkbox.mjs.map
