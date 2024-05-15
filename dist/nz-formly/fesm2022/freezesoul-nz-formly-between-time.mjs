import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i4 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i3 from '@freezesoul/nzx-antd/between-time';
import { NzxBetweenTimeModule } from '@freezesoul/nzx-antd/between-time';
import { CommonModule } from '@angular/common';

class FormlyFieldBetweenTimeComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: {
            nzxSize: 'default',
            nzxStartPlaceholder: '起始值',
            nzxEndPlaceholder: '结束值',
            nzxStartReName: 'start',
            nzxEndReName: 'end',
            nzxStartHourStep: 1,
            nzxStartMinuteStep: 1,
            nzxStartSecondStep: 1,
            nzxStartUse12Hours: false
        }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzxStartAddOn() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzxStartAddOn');
    }
    get nzxEndAddOn() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzxEndAddOn');
    }
    get nzxStartSuffixIcon() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzxStartSuffixIcon');
    }
    get nzxEndSuffixIcon() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzxEndSuffixIcon');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenTimeComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldBetweenTimeComponent, selector: "nz-formly-between-time", usesInheritance: true, ngImport: i0, template: `
    <nzx-between-time
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [startMinDateTime]="props.startMinDateTime"
      [startMaxDateTime]="props.startMaxDateTime"
      [endMaxDateTime]="props.endMaxDateTime"
      [endMinDateTime]="props.endMinDateTime"
      [nzFormat]="props.nzFormat"
      [nzxDisabled]="props.nzxDisabled"
      [nzxEndAutoFocus]="props.nzxEndAutoFocus"
      [nzxEndBackdrop]="props.nzxEndBackdrop"
      [nzxSize]="props.nzxSize"
      [nzxEndDisabled]="props.nzxEndDisabled"
      [nzxEndId]="props.nzxEndId"
      [nzxEndPlaceholder]="props.nzxEndPlaceholder"
      [nzxEndReName]="props.nzxEndReName"
      [nzxStartId]="props.nzxStartId"
      [nzxStartStatus]="props.nzxStartStatus"
      [nzxStartHourStep]="props.nzxStartHourStep"
      [nzxStartMinuteStep]="props.nzxStartMinuteStep"
      [nzxStartSecondStep]="props.nzxStartSecondStep"
      [nzxStartClearText]="props.nzxStartClearText"
      [nzxStartNowText]="props.nzxStartNowText"
      [nzxStartOkText]="props.nzxStartOkText"
      [nzxStartPopupClassName]="props.nzxStartPopupClassName"
      [nzxStartPlaceholder]="props.nzxStartPlaceholder"
      [nzxStartAddOn]="nzxStartAddOn"
      [nzxStartDefaultOpenValue]="props.nzxStartDefaultOpenValue"
      [nzxStartUse12Hours]="props.nzxStartUse12Hours"
      [nzxStartSuffixIcon]="nzxStartSuffixIcon"
      [nzxStartHideDisabledOptions]="props.nzxStartHideDisabledOptions"
      [nzxStartAllowEmpty]="props.nzxStartAllowEmpty"
      [nzxStartAutoFocus]="props.nzxStartAutoFocus"
      [nzxStartBackdrop]="props.nzxStartBackdrop"
      [nzxEndStatus]="props.nzxEndStatus"
      [nzxEndHourStep]="props.nzxEndHourStep"
      [nzxEndMinuteStep]="props.nzxEndMinuteStep"
      [nzxEndSecondStep]="props.nzxEndSecondStep"
      [nzxEndClearText]="props.nzxEndClearText"
      [nzxEndNowText]="props.nzxEndNowText"
      [nzxEndOkText]="props.nzxEndOkText"
      [nzxEndPopupClassName]="props.nzxEndPopupClassName"
      [nzxEndAddOn]="nzxEndAddOn"
      [nzxEndDefaultOpenValue]="props.nzxEndDefaultOpenValue"
      [nzxEndUse12Hours]="props.nzxEndUse12Hours"
      [nzxEndSuffixIcon]="nzxEndSuffixIcon"
      [nzxEndHideDisabledOptions]="props.nzxEndHideDisabledOptions"
      [nzxEndAllowEmpty]="props.nzxEndAllowEmpty"
      [nzxStartReName]="props.nzxStartReName"
      [nzxStartDisabled]="props.nzxStartDisabled"
      (nzxEndOpenChange)="props.nzxEndOpenChange?.($event, field, instance)"
      (nzxStartOpenChange)="props.nzxStartOpenChange?.($event, field, instance)"
      ngDefaultControl
    ></nzx-between-time>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.NzxBetweenTimeComponent, selector: "nzx-between-time", inputs: ["nzxStartReName", "nzxEndReName", "nzxStartId", "nzxStartStatus", "nzxStartHourStep", "nzxStartMinuteStep", "nzxStartSecondStep", "nzxStartClearText", "nzxStartNowText", "nzxStartOkText", "nzxStartPopupClassName", "nzxStartPlaceholder", "nzxStartAddOn", "nzxStartDefaultOpenValue", "nzFormat", "nzxStartUse12Hours", "nzxStartSuffixIcon", "nzxStartHideDisabledOptions", "nzxStartAllowEmpty", "nzxStartAutoFocus", "nzxStartBackdrop", "nzxEndId", "nzxEndStatus", "nzxEndHourStep", "nzxEndMinuteStep", "nzxEndSecondStep", "nzxEndClearText", "nzxEndNowText", "nzxEndOkText", "nzxEndPopupClassName", "nzxEndPlaceholder", "nzxEndAddOn", "nzxEndDefaultOpenValue", "nzxEndUse12Hours", "nzxEndSuffixIcon", "nzxEndHideDisabledOptions", "nzxEndAllowEmpty", "nzxEndAutoFocus", "nzxEndBackdrop", "startMinDateTime", "endMaxDateTime", "startMaxDateTime", "endMinDateTime"], outputs: ["nzxStartOpenChange", "nzxEndOpenChange"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenTimeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-between-time',
                    template: `
    <nzx-between-time
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [startMinDateTime]="props.startMinDateTime"
      [startMaxDateTime]="props.startMaxDateTime"
      [endMaxDateTime]="props.endMaxDateTime"
      [endMinDateTime]="props.endMinDateTime"
      [nzFormat]="props.nzFormat"
      [nzxDisabled]="props.nzxDisabled"
      [nzxEndAutoFocus]="props.nzxEndAutoFocus"
      [nzxEndBackdrop]="props.nzxEndBackdrop"
      [nzxSize]="props.nzxSize"
      [nzxEndDisabled]="props.nzxEndDisabled"
      [nzxEndId]="props.nzxEndId"
      [nzxEndPlaceholder]="props.nzxEndPlaceholder"
      [nzxEndReName]="props.nzxEndReName"
      [nzxStartId]="props.nzxStartId"
      [nzxStartStatus]="props.nzxStartStatus"
      [nzxStartHourStep]="props.nzxStartHourStep"
      [nzxStartMinuteStep]="props.nzxStartMinuteStep"
      [nzxStartSecondStep]="props.nzxStartSecondStep"
      [nzxStartClearText]="props.nzxStartClearText"
      [nzxStartNowText]="props.nzxStartNowText"
      [nzxStartOkText]="props.nzxStartOkText"
      [nzxStartPopupClassName]="props.nzxStartPopupClassName"
      [nzxStartPlaceholder]="props.nzxStartPlaceholder"
      [nzxStartAddOn]="nzxStartAddOn"
      [nzxStartDefaultOpenValue]="props.nzxStartDefaultOpenValue"
      [nzxStartUse12Hours]="props.nzxStartUse12Hours"
      [nzxStartSuffixIcon]="nzxStartSuffixIcon"
      [nzxStartHideDisabledOptions]="props.nzxStartHideDisabledOptions"
      [nzxStartAllowEmpty]="props.nzxStartAllowEmpty"
      [nzxStartAutoFocus]="props.nzxStartAutoFocus"
      [nzxStartBackdrop]="props.nzxStartBackdrop"
      [nzxEndStatus]="props.nzxEndStatus"
      [nzxEndHourStep]="props.nzxEndHourStep"
      [nzxEndMinuteStep]="props.nzxEndMinuteStep"
      [nzxEndSecondStep]="props.nzxEndSecondStep"
      [nzxEndClearText]="props.nzxEndClearText"
      [nzxEndNowText]="props.nzxEndNowText"
      [nzxEndOkText]="props.nzxEndOkText"
      [nzxEndPopupClassName]="props.nzxEndPopupClassName"
      [nzxEndAddOn]="nzxEndAddOn"
      [nzxEndDefaultOpenValue]="props.nzxEndDefaultOpenValue"
      [nzxEndUse12Hours]="props.nzxEndUse12Hours"
      [nzxEndSuffixIcon]="nzxEndSuffixIcon"
      [nzxEndHideDisabledOptions]="props.nzxEndHideDisabledOptions"
      [nzxEndAllowEmpty]="props.nzxEndAllowEmpty"
      [nzxStartReName]="props.nzxStartReName"
      [nzxStartDisabled]="props.nzxStartDisabled"
      (nzxEndOpenChange)="props.nzxEndOpenChange?.($event, field, instance)"
      (nzxStartOpenChange)="props.nzxStartOpenChange?.($event, field, instance)"
      ngDefaultControl
    ></nzx-between-time>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });

const COMPONENT = FormlyFieldBetweenTimeComponent;
class FormlyFieldBetweenTimeModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenTimeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenTimeModule, declarations: [FormlyFieldBetweenTimeComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzxBetweenTimeModule, i4.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenTimeModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzxBetweenTimeModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'between-time',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenTimeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzxBetweenTimeModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'between-time',
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

export { FormlyFieldBetweenTimeComponent, FormlyFieldBetweenTimeModule };
//# sourceMappingURL=freezesoul-nz-formly-between-time.mjs.map
