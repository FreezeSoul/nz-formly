import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i4 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i3 from 'ng-zorro-antd/time-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { CommonModule } from '@angular/common';

class FormlyFieldTimePickerComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: {
            nzAllowEmpty: true,
            nzFormat: 'HH:mm:ss',
            nzHourStep: 1,
            nzMinuteStep: 1,
            nzSecondStep: 1,
            nzShowToday: true,
            nzShowNow: true,
            nzInputReadOnly: false
        }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzSuffixIcon() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzSuffixIcon');
    }
    get nzAddOn() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzAddOn');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTimePickerComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldTimePickerComponent, selector: "nz-formly-time-picker-component", usesInheritance: true, ngImport: i0, template: `
    <nz-time-picker
      #instance
      style="width: 100%"
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzId]="field.id || props.nzId"
      [nzAddOn]="nzAddOn"
      [nzSize]="props.nzSize"
      [nzBackdrop]="props.nzBackdrop"
      [nzAllowEmpty]="props.nzAllowEmpty"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzClearText]="props.nzClearText"
      [nzNowText]="props.nzNowText"
      [nzOkText]="props.nzOkText"
      [nzDefaultOpenValue]="props.nzDefaultOpenValue"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzDisabledHours]="props.nzDisabledHours"
      [nzDisabledMinutes]="props.nzDisabledMinutes"
      [nzDisabledSeconds]="props.nzDisabledSeconds"
      [nzFormat]="props.nzFormat"
      [nzHideDisabledOptions]="props.nzHideDisabledOptions"
      [nzHourStep]="props.nzHourStep"
      [nzMinuteStep]="props.nzMinuteStep"
      [nzSecondStep]="props.nzSecondStep"
      [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
      [nzPopupClassName]="props.nzPopupClassName"
      [nzUse12Hours]="props.nzUse12Hours"
      [nzStatus]="props.nzStatus"
      [nzSuffixIcon]="nzSuffixIcon"
      (nzOpenChange)=" props.nzOpenChange?.($event, field, instance)"
      ngDefaultControl
    ></nz-time-picker>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.NzTimePickerComponent, selector: "nz-time-picker", inputs: ["nzId", "nzSize", "nzStatus", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzClearText", "nzNowText", "nzOkText", "nzPopupClassName", "nzPlaceHolder", "nzAddOn", "nzDefaultOpenValue", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzFormat", "nzOpen", "nzUse12Hours", "nzSuffixIcon", "nzHideDisabledOptions", "nzAllowEmpty", "nzDisabled", "nzAutoFocus", "nzBackdrop", "nzBorderless", "nzInputReadOnly"], outputs: ["nzOpenChange"], exportAs: ["nzTimePicker"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTimePickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-time-picker-component',
                    template: `
    <nz-time-picker
      #instance
      style="width: 100%"
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzId]="field.id || props.nzId"
      [nzAddOn]="nzAddOn"
      [nzSize]="props.nzSize"
      [nzBackdrop]="props.nzBackdrop"
      [nzAllowEmpty]="props.nzAllowEmpty"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzClearText]="props.nzClearText"
      [nzNowText]="props.nzNowText"
      [nzOkText]="props.nzOkText"
      [nzDefaultOpenValue]="props.nzDefaultOpenValue"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzDisabledHours]="props.nzDisabledHours"
      [nzDisabledMinutes]="props.nzDisabledMinutes"
      [nzDisabledSeconds]="props.nzDisabledSeconds"
      [nzFormat]="props.nzFormat"
      [nzHideDisabledOptions]="props.nzHideDisabledOptions"
      [nzHourStep]="props.nzHourStep"
      [nzMinuteStep]="props.nzMinuteStep"
      [nzSecondStep]="props.nzSecondStep"
      [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
      [nzPopupClassName]="props.nzPopupClassName"
      [nzUse12Hours]="props.nzUse12Hours"
      [nzStatus]="props.nzStatus"
      [nzSuffixIcon]="nzSuffixIcon"
      (nzOpenChange)=" props.nzOpenChange?.($event, field, instance)"
      ngDefaultControl
    ></nz-time-picker>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });

const COMPONENT = FormlyFieldTimePickerComponent;
class FormlyNzTimePickerModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTimePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTimePickerModule, declarations: [FormlyFieldTimePickerComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzTimePickerModule, i4.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTimePickerModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzTimePickerModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'time-picker',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTimePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzTimePickerModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'time-picker',
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

export { FormlyFieldTimePickerComponent, FormlyNzTimePickerModule };
//# sourceMappingURL=freezesoul-nz-formly-time-picker.mjs.map
