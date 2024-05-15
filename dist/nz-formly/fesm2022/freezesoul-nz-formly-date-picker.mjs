import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i4 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i3 from 'ng-zorro-antd/date-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule } from '@angular/common';

class FormlyFieldDatePickerComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: {
            nzAllowClear: true,
            nzDisabled: false,
            nzPopupStyle: {},
            nzShowToday: true,
            nzShowNow: true,
            nzInputReadOnly: false,
            nzSuffixIcon: 'calendar'
        }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzRenderExtraFooter() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzRenderExtraFooter');
    }
    get nzDateRender() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzDateRender');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldDatePickerComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldDatePickerComponent, selector: "nz-formly-date-picker-component", usesInheritance: true, ngImport: i0, template: `
    <nz-date-picker
      #instance
      style="width: 100%"
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzMode]="props.nzMode"
      [nzAllowClear]="props.nzAllowClear"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzBackdrop]="props.nzBackdrop"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzDisabledDate]="props.nzDisabledDate"
      [nzPopupStyle]="props.nzPopupStyle"
      [nzDropdownClassName]="props.nzDropdownClassName"
      [nzSize]="props.nzSize"
      [nzFormat]="props.nzFormat"
      [nzInputReadOnly]="props.nzInputReadOnly"
      [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
      [nzBorderless]="props.nzBorderless"
      [nzSuffixIcon]="props.nzSuffixIcon"
      [nzRenderExtraFooter]="nzRenderExtraFooter"
      [nzInline]="props.nzInline"
      (nzOnOpenChange)="props.nzOnOpenChange?.($event, field, instance)"
      [nzDateRender]="nzDateRender"
      [nzDisabledTime]="props.nzDisabledTime"
      [nzShowTime]="props.nzShowTime"
      [nzShowToday]="props.nzShowToday"
      [nzShowNow]="props.nzShowNow"
      (nzOnOk)=" props.nzOnOk?.($event, field, instance)"
      ngDefaultControl
    ></nz-date-picker>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.NzDatePickerComponent, selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker", inputs: ["nzAllowClear", "nzAutoFocus", "nzDisabled", "nzBorderless", "nzInputReadOnly", "nzInline", "nzOpen", "nzDisabledDate", "nzLocale", "nzPlaceHolder", "nzPopupStyle", "nzDropdownClassName", "nzSize", "nzStatus", "nzFormat", "nzDateRender", "nzDisabledTime", "nzRenderExtraFooter", "nzShowToday", "nzMode", "nzShowNow", "nzRanges", "nzDefaultPickerValue", "nzSeparator", "nzSuffixIcon", "nzBackdrop", "nzId", "nzPlacement", "nzShowWeekNumber", "nzShowTime"], outputs: ["nzOnPanelChange", "nzOnCalendarChange", "nzOnOk", "nzOnOpenChange"], exportAs: ["nzDatePicker"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldDatePickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-date-picker-component',
                    template: `
    <nz-date-picker
      #instance
      style="width: 100%"
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzMode]="props.nzMode"
      [nzAllowClear]="props.nzAllowClear"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzBackdrop]="props.nzBackdrop"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzDisabledDate]="props.nzDisabledDate"
      [nzPopupStyle]="props.nzPopupStyle"
      [nzDropdownClassName]="props.nzDropdownClassName"
      [nzSize]="props.nzSize"
      [nzFormat]="props.nzFormat"
      [nzInputReadOnly]="props.nzInputReadOnly"
      [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
      [nzBorderless]="props.nzBorderless"
      [nzSuffixIcon]="props.nzSuffixIcon"
      [nzRenderExtraFooter]="nzRenderExtraFooter"
      [nzInline]="props.nzInline"
      (nzOnOpenChange)="props.nzOnOpenChange?.($event, field, instance)"
      [nzDateRender]="nzDateRender"
      [nzDisabledTime]="props.nzDisabledTime"
      [nzShowTime]="props.nzShowTime"
      [nzShowToday]="props.nzShowToday"
      [nzShowNow]="props.nzShowNow"
      (nzOnOk)=" props.nzOnOk?.($event, field, instance)"
      ngDefaultControl
    ></nz-date-picker>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });

const COMPONENT = FormlyFieldDatePickerComponent;
class FormlyNzDatePickerModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzDatePickerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzDatePickerModule, declarations: [FormlyFieldDatePickerComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzDatePickerModule, i4.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzDatePickerModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzDatePickerModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'date-picker',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzDatePickerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzDatePickerModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'date-picker',
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

export { FormlyFieldDatePickerComponent, FormlyNzDatePickerModule };
//# sourceMappingURL=freezesoul-nz-formly-date-picker.mjs.map
