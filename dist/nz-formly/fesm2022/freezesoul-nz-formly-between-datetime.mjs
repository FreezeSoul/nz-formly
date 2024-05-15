import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import * as i3 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i2 from '@freezesoul/nzx-antd/between-datetime';
import { NzxBetweenDatetimeModule } from '@freezesoul/nzx-antd/between-datetime';
import { CommonModule } from '@angular/common';

class FormlyFieldBetweenDatetimeComponent extends FieldType {
    defaultOptions = {
        props: {
            nzxSize: 'default',
            nzMode: 'date',
            nzxStartPlaceholder: '起始值',
            nzxEndPlaceholder: '结束值',
            nzxStartReName: 'start',
            nzxEndReName: 'end',
            nzxStartShowNow: true,
            nzxEndShowNow: true,
            nzShowToday: true
        }
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenDatetimeComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldBetweenDatetimeComponent, selector: "nz-formly-between-datetime", usesInheritance: true, ngImport: i0, template: `
    <nzx-between-datetime
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [startMinDateTime]="props.startMinDateTime"
      [startMaxDateTime]="props.startMaxDateTime"
      [endMaxDateTime]="props.endMaxDateTime"
      [endMinDateTime]="props.endMinDateTime"
      [nzShowToday]="props.nzShowToday"
      [nzShowTime]="props.nzShowTime"
      [nzFormat]="props.nzFormat"
      [nzMode]="props.nzMode"
      [nzxDisabled]="props.nzxDisabled"
      [nzxEndAllowClear]="props.nzxEndAllowClear"
      [nzxEndAutoFocus]="props.nzxEndAutoFocus"
      [nzxEndBackdrop]="props.nzxEndBackdrop"
      [nzxEndDateRender]="props.nzxEndDateRender"
      [nzxSize]="props.nzxSize"
      [nzxEndDefaultPickerValue]="props.nzxEndDefaultPickerValue"
      [nzxEndDisabled]="props.nzxEndDisabled"
      [nzxEndDropdownClassName]="props.nzxEndDropdownClassName"
      [nzxEndId]="props.nzxEndId"
      [nzxEndInputReadOnly]="props.nzxEndInputReadOnly"
      [nzxEndPlaceholder]="props.nzxEndPlaceholder"
      [nzxEndPopupStyle]="props.nzxEndPopupStyle"
      [nzxEndReName]="props.nzxEndReName"
      [nzxEndRenderExtraFooter]="props.nzxEndRenderExtraFooter"
      [nzxEndShowNow]="props.nzxEndShowNow"
      [nzxEndShowTime]="props.nzxEndShowTime"
      [nzxEndShowToday]="props.nzxEndShowToday"
      [nzxEndSuffixIcon]="props.nzxEndSuffixIcon"
      [nzxStartAllowClear]="props.nzxStartAllowClear"
      [nzxStartAutoFocus]="props.nzxStartAutoFocus"
      [nzxStartBackdrop]="props.nzxStartBackdrop"
      [nzxStartDateRender]="props.nzxStartDateRender"
      [nzxStartDefaultPickerValue]="props.nzxStartDefaultPickerValue"
      [nzxStartDisabled]="props.nzxStartDisabled"
      [nzxStartDropdownClassName]="props.nzxStartDropdownClassName"
      [nzxStartId]="props.nzxStartId"
      [nzxStartInputReadOnly]="props.nzxStartInputReadOnly"
      [nzxStartPlaceholder]="props.nzxStartPlaceholder"
      [nzxStartPopupStyle]="props.nzxStartPopupStyle"
      [nzxStartReName]="props.nzxStartReName"
      [nzxStartRenderExtraFooter]="props.nzxStartRenderExtraFooter"
      [nzxStartShowNow]="props.nzxStartShowNow"
      [nzxStartShowTime]="props.nzxStartShowTime"
      [nzxStartShowToday]="props.nzxStartShowToday"
      [nzxStartSuffixIcon]="props.nzxStartSuffixIcon"
      (nzxEndOnCalendarChange)="props.nzxEndOnCalendarChange?.($event, field, instance)"
      (nzxEndOnOk)="props.nzxEndOnOk?.($event, field, instance)"
      (nzxEndOnOpenChange)="props.nzxEndOnOpenChange?.($event, field, instance)"
      (nzxEndOnPanelChange)="props.nzxEndOnPanelChange?.($event, field, instance)"
      (nzxStartOnCalendarChange)="props.nzxStartOnCalendarChange?.($event, field, instance)"
      (nzxStartOnOk)="props.nzxStartOnOk?.($event, field, instance)"
      (nzxStartOnOpenChange)="props.nzxStartOnOpenChange?.($event, field, instance)"
      (nzxStartOnPanelChange)="props.nzxStartOnPanelChange?.($event, field, instance)"
      ngDefaultControl
    ></nzx-between-datetime>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i2.NzxBetweenDatetimeComponent, selector: "nzx-between-datetime", inputs: ["nzMode", "nzxStartPlaceholder", "nzxEndPlaceholder", "nzxStartReName", "nzxEndReName", "nzxStartId", "nzxEndId", "nzxStartAllowClear", "nzAllowClear", "nzxEndAllowClear", "nzxStartAutoFocus", "nzxEndAutoFocus", "nzxStartBackdrop", "nzxEndBackdrop", "nzxStartDefaultPickerValue", "nzxEndDefaultPickerValue", "nzxStartShowNow", "nzxEndShowNow", "nzShowToday", "nzxStartShowToday", "nzxEndShowToday", "nzShowTime", "nzxStartShowTime", "nzxEndShowTime", "nzxStartDropdownClassName", "nzxEndDropdownClassName", "nzFormat", "nzxStartInputReadOnly", "nzxEndInputReadOnly", "nzLocale", "nzxStartPopupStyle", "nzxEndPopupStyle", "nzxStartRenderExtraFooter", "nzxEndRenderExtraFooter", "nzxStartSuffixIcon", "nzxEndSuffixIcon", "nzxStartDateRender", "nzxEndDateRender", "startMinDateTime", "endMaxDateTime", "startMaxDateTime", "endMinDateTime"], outputs: ["nzxStartOnOpenChange", "nzxEndOnOpenChange", "nzxStartOnOk", "nzxEndOnOk", "nzxStartOnCalendarChange", "nzxEndOnCalendarChange", "nzxStartOnPanelChange", "nzxEndOnPanelChange"], exportAs: ["nzxBetweenDatetime"] }, { kind: "directive", type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenDatetimeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-between-datetime',
                    template: `
    <nzx-between-datetime
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [startMinDateTime]="props.startMinDateTime"
      [startMaxDateTime]="props.startMaxDateTime"
      [endMaxDateTime]="props.endMaxDateTime"
      [endMinDateTime]="props.endMinDateTime"
      [nzShowToday]="props.nzShowToday"
      [nzShowTime]="props.nzShowTime"
      [nzFormat]="props.nzFormat"
      [nzMode]="props.nzMode"
      [nzxDisabled]="props.nzxDisabled"
      [nzxEndAllowClear]="props.nzxEndAllowClear"
      [nzxEndAutoFocus]="props.nzxEndAutoFocus"
      [nzxEndBackdrop]="props.nzxEndBackdrop"
      [nzxEndDateRender]="props.nzxEndDateRender"
      [nzxSize]="props.nzxSize"
      [nzxEndDefaultPickerValue]="props.nzxEndDefaultPickerValue"
      [nzxEndDisabled]="props.nzxEndDisabled"
      [nzxEndDropdownClassName]="props.nzxEndDropdownClassName"
      [nzxEndId]="props.nzxEndId"
      [nzxEndInputReadOnly]="props.nzxEndInputReadOnly"
      [nzxEndPlaceholder]="props.nzxEndPlaceholder"
      [nzxEndPopupStyle]="props.nzxEndPopupStyle"
      [nzxEndReName]="props.nzxEndReName"
      [nzxEndRenderExtraFooter]="props.nzxEndRenderExtraFooter"
      [nzxEndShowNow]="props.nzxEndShowNow"
      [nzxEndShowTime]="props.nzxEndShowTime"
      [nzxEndShowToday]="props.nzxEndShowToday"
      [nzxEndSuffixIcon]="props.nzxEndSuffixIcon"
      [nzxStartAllowClear]="props.nzxStartAllowClear"
      [nzxStartAutoFocus]="props.nzxStartAutoFocus"
      [nzxStartBackdrop]="props.nzxStartBackdrop"
      [nzxStartDateRender]="props.nzxStartDateRender"
      [nzxStartDefaultPickerValue]="props.nzxStartDefaultPickerValue"
      [nzxStartDisabled]="props.nzxStartDisabled"
      [nzxStartDropdownClassName]="props.nzxStartDropdownClassName"
      [nzxStartId]="props.nzxStartId"
      [nzxStartInputReadOnly]="props.nzxStartInputReadOnly"
      [nzxStartPlaceholder]="props.nzxStartPlaceholder"
      [nzxStartPopupStyle]="props.nzxStartPopupStyle"
      [nzxStartReName]="props.nzxStartReName"
      [nzxStartRenderExtraFooter]="props.nzxStartRenderExtraFooter"
      [nzxStartShowNow]="props.nzxStartShowNow"
      [nzxStartShowTime]="props.nzxStartShowTime"
      [nzxStartShowToday]="props.nzxStartShowToday"
      [nzxStartSuffixIcon]="props.nzxStartSuffixIcon"
      (nzxEndOnCalendarChange)="props.nzxEndOnCalendarChange?.($event, field, instance)"
      (nzxEndOnOk)="props.nzxEndOnOk?.($event, field, instance)"
      (nzxEndOnOpenChange)="props.nzxEndOnOpenChange?.($event, field, instance)"
      (nzxEndOnPanelChange)="props.nzxEndOnPanelChange?.($event, field, instance)"
      (nzxStartOnCalendarChange)="props.nzxStartOnCalendarChange?.($event, field, instance)"
      (nzxStartOnOk)="props.nzxStartOnOk?.($event, field, instance)"
      (nzxStartOnOpenChange)="props.nzxStartOnOpenChange?.($event, field, instance)"
      (nzxStartOnPanelChange)="props.nzxStartOnPanelChange?.($event, field, instance)"
      ngDefaultControl
    ></nzx-between-datetime>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }] });

const COMPONENT = FormlyFieldBetweenDatetimeComponent;
class FormlyFieldBetweenDatetimeModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenDatetimeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenDatetimeModule, declarations: [FormlyFieldBetweenDatetimeComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzxBetweenDatetimeModule, i3.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenDatetimeModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzxBetweenDatetimeModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'between-datetime',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenDatetimeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldBetweenDatetimeComponent],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzxBetweenDatetimeModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'between-datetime',
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

export { FormlyFieldBetweenDatetimeComponent, FormlyFieldBetweenDatetimeModule };
//# sourceMappingURL=freezesoul-nz-formly-between-datetime.mjs.map
