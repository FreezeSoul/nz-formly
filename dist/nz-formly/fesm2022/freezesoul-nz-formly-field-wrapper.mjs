import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i6 from '@ngx-formly/core';
import { FieldWrapper, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName, hasTplNameValue } from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from 'ng-zorro-antd/grid';
import * as i4 from 'ng-zorro-antd/form';
import { NzFormModule } from 'ng-zorro-antd/form';
import * as i5 from 'ng-zorro-antd/core/outlet';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { ReactiveFormsModule } from '@angular/forms';

class FieldWrapperComponent extends FieldWrapper {
    fieldTemplates;
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzTooltipTitle() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzTooltipTitle');
    }
    get nzExtra() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzExtra');
    }
    get hasLabel() {
        return hasTplNameValue(this.props, 'label');
    }
    get label() {
        return resolveTplName(this.props, this.fieldTemplates, 'label');
    }
    get nzSuccessTip() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzSuccessTip');
    }
    get nzValidatingTip() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzValidatingTip');
    }
    get nzWarningTip() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzWarningTip');
    }
    get hasError() {
        return (this.formControl?.dirty || this.formControl?.touched) && this.formControl.errors;
    }
    get validateStatus() {
        return this.hasError ? 'error' : this.props.nzValidateStatus;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FieldWrapperComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FieldWrapperComponent, selector: "formly-field-wrapper", usesInheritance: true, ngImport: i0, template: `
    <nz-form-item [class]="field.className">
      <ng-container *ngIf="hasLabel && props.hideLabel !== true">
        <nz-form-label
          *ngIf="hasLabel"
          [ngClass]="props.labelClass || formState.labelClass"
          [nzRequired]="props.required && props.hideRequiredMarker !== true"
          [nzFor]="id"
          [nzTooltipTitle]="nzTooltipTitle"
          [nzTooltipIcon]="props.nzTooltipIcon"
          [nzSpan]="props.labelNzSpan || formState.labelNzSpan"
          [nzNoColon]="props.nzNoColon || formState.nzNoColon"
          [nzFlex]="props.labelNzFlex || formState.labelNzFlex"
          [nzLg]="props.labelNzLg || formState.labelNzLg"
          [nzMd]="props.labelNzMd || formState.labelNzMd"
          [nzOffset]="props.labelNzOffset || formState.labelNzOffset"
          [nzOrder]="props.labelNzOrder || formState.labelNzOrder"
          [nzPull]="props.labelNzPull || formState.labelNzPull"
          [nzPush]="props.labelNzPush || formState.labelNzPush"
          [nzSm]="props.labelNzSm || formState.labelNzSm"
          [nzXl]="props.labelNzXl || formState.labelNzXl"
          [nzXs]="props.labelNzXs || formState.labelNzXs"
          [nzXXl]="props.labelNzXXl || formState.labelNzXXl"
        >
          <ng-container *nzStringTemplateOutlet="label; context: { $implicit: field, options: props }">
            <div [innerHTML]="label"></div>
          </ng-container>
        </nz-form-label>
      </ng-container>

      <nz-form-control
        [ngClass]="props.controlClass || formState.controlClass"
        [nzValidateStatus]="validateStatus"
        [nzErrorTip]="errorTip"
        [nzAutoTips]="props.nzAutoTips || formState.nzAutoTips"
        [nzHasFeedback]="props.nzHasFeedback || formState.nzHasFeedback"
        [nzSuccessTip]="nzSuccessTip || formState.nzSuccessTip"
        [nzValidatingTip]="nzValidatingTip || formState.nzValidatingTip"
        [nzWarningTip]="nzWarningTip || formState.nzWarningTip"
        [nzDisableAutoTips]="props.nzDisableAutoTips || formState.nzDisableAutoTips"
        [nzExtra]="props.description || nzExtra"
        [nzSpan]="props.controlNzSpan || formState.controlNzSpan"
        [nzFlex]="props.controlNzFlex || formState.controlNzFlex"
        [nzLg]="props.controlNzLg || formState.controlNzLg"
        [nzMd]="props.controlNzMd || formState.controlNzMd"
        [nzOffset]="props.controlNzOffset || formState.controlNzOffset"
        [nzOrder]="props.controlNzOrder || formState.controlNzOrder"
        [nzPull]="props.controlNzPull || formState.controlNzPull"
        [nzPush]="props.controlNzPush || formState.controlNzPush"
        [nzSm]="props.controlNzSm || formState.controlNzSm"
        [nzXl]="props.controlNzXl || formState.controlNzXl"
        [nzXs]="props.controlNzXs || formState.controlNzXs"
        [nzXXl]="props.controlNzXXl || formState.controlNzXXl"
      >
        <ng-container #fieldComponent></ng-container>
        <ng-template #errorTip>
          <formly-validation-message *ngIf="hasError" [field]="field"></formly-validation-message>
        </ng-template>
      </nz-form-control>
    </nz-form-item>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i3.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "component", type: i4.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { kind: "component", type: i4.NzFormLabelComponent, selector: "nz-form-label", inputs: ["nzFor", "nzRequired", "nzNoColon", "nzTooltipTitle", "nzTooltipIcon", "nzLabelAlign", "nzLabelWrap"], exportAs: ["nzFormLabel"] }, { kind: "component", type: i4.NzFormControlComponent, selector: "nz-form-control", inputs: ["nzSuccessTip", "nzWarningTip", "nzErrorTip", "nzValidatingTip", "nzExtra", "nzAutoTips", "nzDisableAutoTips", "nzHasFeedback", "nzValidateStatus"], exportAs: ["nzFormControl"] }, { kind: "directive", type: i5.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: i6.ɵFormlyValidationMessage, selector: "formly-validation-message", inputs: ["field"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FieldWrapperComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'formly-field-wrapper',
                    template: `
    <nz-form-item [class]="field.className">
      <ng-container *ngIf="hasLabel && props.hideLabel !== true">
        <nz-form-label
          *ngIf="hasLabel"
          [ngClass]="props.labelClass || formState.labelClass"
          [nzRequired]="props.required && props.hideRequiredMarker !== true"
          [nzFor]="id"
          [nzTooltipTitle]="nzTooltipTitle"
          [nzTooltipIcon]="props.nzTooltipIcon"
          [nzSpan]="props.labelNzSpan || formState.labelNzSpan"
          [nzNoColon]="props.nzNoColon || formState.nzNoColon"
          [nzFlex]="props.labelNzFlex || formState.labelNzFlex"
          [nzLg]="props.labelNzLg || formState.labelNzLg"
          [nzMd]="props.labelNzMd || formState.labelNzMd"
          [nzOffset]="props.labelNzOffset || formState.labelNzOffset"
          [nzOrder]="props.labelNzOrder || formState.labelNzOrder"
          [nzPull]="props.labelNzPull || formState.labelNzPull"
          [nzPush]="props.labelNzPush || formState.labelNzPush"
          [nzSm]="props.labelNzSm || formState.labelNzSm"
          [nzXl]="props.labelNzXl || formState.labelNzXl"
          [nzXs]="props.labelNzXs || formState.labelNzXs"
          [nzXXl]="props.labelNzXXl || formState.labelNzXXl"
        >
          <ng-container *nzStringTemplateOutlet="label; context: { $implicit: field, options: props }">
            <div [innerHTML]="label"></div>
          </ng-container>
        </nz-form-label>
      </ng-container>

      <nz-form-control
        [ngClass]="props.controlClass || formState.controlClass"
        [nzValidateStatus]="validateStatus"
        [nzErrorTip]="errorTip"
        [nzAutoTips]="props.nzAutoTips || formState.nzAutoTips"
        [nzHasFeedback]="props.nzHasFeedback || formState.nzHasFeedback"
        [nzSuccessTip]="nzSuccessTip || formState.nzSuccessTip"
        [nzValidatingTip]="nzValidatingTip || formState.nzValidatingTip"
        [nzWarningTip]="nzWarningTip || formState.nzWarningTip"
        [nzDisableAutoTips]="props.nzDisableAutoTips || formState.nzDisableAutoTips"
        [nzExtra]="props.description || nzExtra"
        [nzSpan]="props.controlNzSpan || formState.controlNzSpan"
        [nzFlex]="props.controlNzFlex || formState.controlNzFlex"
        [nzLg]="props.controlNzLg || formState.controlNzLg"
        [nzMd]="props.controlNzMd || formState.controlNzMd"
        [nzOffset]="props.controlNzOffset || formState.controlNzOffset"
        [nzOrder]="props.controlNzOrder || formState.controlNzOrder"
        [nzPull]="props.controlNzPull || formState.controlNzPull"
        [nzPush]="props.controlNzPush || formState.controlNzPush"
        [nzSm]="props.controlNzSm || formState.controlNzSm"
        [nzXl]="props.controlNzXl || formState.controlNzXl"
        [nzXs]="props.controlNzXs || formState.controlNzXs"
        [nzXXl]="props.controlNzXXl || formState.controlNzXXl"
      >
        <ng-container #fieldComponent></ng-container>
        <ng-template #errorTip>
          <formly-validation-message *ngIf="hasError" [field]="field"></formly-validation-message>
        </ng-template>
      </nz-form-control>
    </nz-form-item>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });

const COMPONENT = FieldWrapperComponent;
class FormlyNzFormFieldModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzFormFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzFormFieldModule, declarations: [FieldWrapperComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzFormModule,
            NzOutletModule, i6.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzFormFieldModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzFormModule,
            NzOutletModule,
            FormlyModule.forChild({
                wrappers: [
                    {
                        name: 'field-wrapper',
                        component: COMPONENT
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzFormFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzFormModule,
                        NzOutletModule,
                        FormlyModule.forChild({
                            wrappers: [
                                {
                                    name: 'field-wrapper',
                                    component: COMPONENT
                                }
                            ]
                        })
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FieldWrapperComponent, FormlyNzFormFieldModule };
//# sourceMappingURL=freezesoul-nz-formly-field-wrapper.mjs.map
