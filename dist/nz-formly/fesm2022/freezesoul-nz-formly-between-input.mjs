import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import * as i3 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i2 from '@freezesoul/nzx-antd/between-input';
import { NzxBetweenInputModule } from '@freezesoul/nzx-antd/between-input';
import { CommonModule } from '@angular/common';

class FormlyFieldBetweenInputComponent extends FieldType {
    defaultOptions = {
        props: {
            nzxSize: 'default',
            nzxType: 'input',
            nzxStartPlaceholder: '起始值',
            nzxEndPlaceholder: '结束值',
            nzxStartMax: Infinity,
            nzxEndMax: Infinity,
            nzxStartMin: -Infinity,
            nzxEndMin: -Infinity,
            nzxStarStep: 1,
            nzxEndStep: 1
        }
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenInputComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldBetweenInputComponent, selector: "nz-formly-select-component", usesInheritance: true, ngImport: i0, template: `
    <nzx-between-input
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxType]="props.nzxType"
      [nzxStartPlaceholder]="props.nzxStartPlaceholder"
      [nzxEndPlaceholder]="props.nzxEndPlaceholder"
      [nzxEndDisabled]="props.nzxEndDisabled"
      [nzxStartDisabled]="props.nzxStartDisabled"
      [nzxEndReName]="props.nzxEndReName"
      [nzxStartReName]="props.nzxStartReName"
      [nzxStarPrecision]="props.nzxStarPrecision"
      [nzxEndPrecision]="props.nzxEndPrecision"
      [nzxStarStep]="props.nzxStarStep"
      [nzxEndStep]="props.nzxEndStep"
      [nzxEndFormatter]="props.nzxEndFormatter"
      [nzxStartFormatter]="props.nzxStartFormatter"
      [nzxStarId]="props.nzxStarId"
      [nzxEndId]="props.nzxEndId"
      [nzxSize]="props.nzxSize"
      [nzxEndMax]="props.nzxEndMax"
      [nzxEndMin]="props.nzxEndMin"
      [nzxStartMax]="props.nzxStartMax"
      [nzxStartMin]="props.nzxStartMin"
      [nzxDisabled]="props.disabled || formControl?.disabled"
      ngDefaultControl
    ></nzx-between-input>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i2.NzxBetweenInputComponent, selector: "nzx-between-input", inputs: ["nzxType", "nzxStartPlaceholder", "nzxEndPlaceholder", "nzxStartMax", "nzxEndMax", "nzxStartMin", "nzxEndMin", "nzxStarPrecision", "nzxEndPrecision", "nzxStarStep", "nzxEndStep", "nzxStarId", "nzxEndId", "nzxStartReName", "nzxEndReName", "nzxStartFormatter", "nzxEndFormatter"] }, { kind: "directive", type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-select-component',
                    template: `
    <nzx-between-input
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzxType]="props.nzxType"
      [nzxStartPlaceholder]="props.nzxStartPlaceholder"
      [nzxEndPlaceholder]="props.nzxEndPlaceholder"
      [nzxEndDisabled]="props.nzxEndDisabled"
      [nzxStartDisabled]="props.nzxStartDisabled"
      [nzxEndReName]="props.nzxEndReName"
      [nzxStartReName]="props.nzxStartReName"
      [nzxStarPrecision]="props.nzxStarPrecision"
      [nzxEndPrecision]="props.nzxEndPrecision"
      [nzxStarStep]="props.nzxStarStep"
      [nzxEndStep]="props.nzxEndStep"
      [nzxEndFormatter]="props.nzxEndFormatter"
      [nzxStartFormatter]="props.nzxStartFormatter"
      [nzxStarId]="props.nzxStarId"
      [nzxEndId]="props.nzxEndId"
      [nzxSize]="props.nzxSize"
      [nzxEndMax]="props.nzxEndMax"
      [nzxEndMin]="props.nzxEndMin"
      [nzxStartMax]="props.nzxStartMax"
      [nzxStartMin]="props.nzxStartMin"
      [nzxDisabled]="props.disabled || formControl?.disabled"
      ngDefaultControl
    ></nzx-between-input>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }] });

const COMPONENT = FormlyFieldBetweenInputComponent;
class FormlyFieldBetweenInputModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenInputModule, declarations: [FormlyFieldBetweenInputComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzxBetweenInputModule, i3.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenInputModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzxBetweenInputModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'between-input',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldBetweenInputComponent],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzxBetweenInputModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'between-input',
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

export { FormlyFieldBetweenInputComponent, FormlyFieldBetweenInputModule };
//# sourceMappingURL=freezesoul-nz-formly-between-input.mjs.map
