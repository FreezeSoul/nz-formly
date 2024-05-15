import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import * as i3 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i2 from 'ng-zorro-antd/slider';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { CommonModule } from '@angular/common';

class FormlyFieldSliderComponent extends FieldType {
    defaultOptions = {
        props: {
            nzMax: 100,
            nzMin: 0,
            nzStep: 1,
            nzIncluded: true,
            nzTooltipVisible: 'default',
            nzTooltipPlacement: 'top'
        }
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldSliderComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldSliderComponent, selector: "nz-formly-slider-component", usesInheritance: true, ngImport: i0, template: `
    <nz-slider
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzRange]="props.nzRange"
      [nzDefaultValue]="props.nzDefaultValue"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzDots]="props.nzDots"
      [nzIncluded]="props.nzIncluded"
      [nzMarks]="props.nzMarks"
      [nzMax]="props.nzMax"
      [nzMin]="props.nzMin"
      [nzStep]="props.nzStep"
      [nzTipFormatter]="props.nzTipFormatter"
      [nzVertical]="props.nzVertical"
      [nzReverse]="props.nzReverse"
      [nzTooltipPlacement]="$any(props.nzTooltipPlacement)"
      [nzTooltipVisible]="props.nzTooltipVisible"
      (nzOnAfterChange)="props.nzOnAfterChange?.($event, field, instance)"
      ngDefaultControl
    ></nz-slider>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i2.NzSliderComponent, selector: "nz-slider", inputs: ["nzDisabled", "nzDots", "nzIncluded", "nzRange", "nzVertical", "nzReverse", "nzDefaultValue", "nzMarks", "nzMax", "nzMin", "nzStep", "nzTooltipVisible", "nzTooltipPlacement", "nzTipFormatter"], outputs: ["nzOnAfterChange"], exportAs: ["nzSlider"] }, { kind: "directive", type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldSliderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-slider-component',
                    template: `
    <nz-slider
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzRange]="props.nzRange"
      [nzDefaultValue]="props.nzDefaultValue"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzDots]="props.nzDots"
      [nzIncluded]="props.nzIncluded"
      [nzMarks]="props.nzMarks"
      [nzMax]="props.nzMax"
      [nzMin]="props.nzMin"
      [nzStep]="props.nzStep"
      [nzTipFormatter]="props.nzTipFormatter"
      [nzVertical]="props.nzVertical"
      [nzReverse]="props.nzReverse"
      [nzTooltipPlacement]="$any(props.nzTooltipPlacement)"
      [nzTooltipVisible]="props.nzTooltipVisible"
      (nzOnAfterChange)="props.nzOnAfterChange?.($event, field, instance)"
      ngDefaultControl
    ></nz-slider>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }] });

const COMPONENT = FormlyFieldSliderComponent;
class FormlyNzSliderModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSliderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSliderModule, declarations: [FormlyFieldSliderComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzSliderModule, i3.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSliderModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzSliderModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'slider',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSliderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzSliderModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'slider',
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

export { FormlyFieldSliderComponent, FormlyNzSliderModule };
//# sourceMappingURL=freezesoul-nz-formly-slider.mjs.map
