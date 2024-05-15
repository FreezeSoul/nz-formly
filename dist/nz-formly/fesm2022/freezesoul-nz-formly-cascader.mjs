import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i4 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i3 from 'ng-zorro-antd/cascader';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i6 from '@freezesoul/nzx-antd/pipe';
import { NzxPipeModule } from '@freezesoul/nzx-antd/pipe';

class FormlyFieldCascaderComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: {
            nzPlaceHolder: '请选择',
            nzExpandTrigger: 'click',
            nzTriggerAction: 'click',
            nzAllowClear: true,
            nzLabelProperty: 'label',
            nzValueProperty: 'value',
            nzShowArrow: true,
            nzShowInput: true,
            nzSize: 'default'
        }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzNotFoundContent() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzNotFoundContent');
    }
    get nzExpandIcon() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzExpandIcon');
    }
    get nzLabelRender() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzLabelRender');
    }
    get nzOptionRender() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzOptionRender');
    }
    get nzSuffixIcon() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzSuffixIcon');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldCascaderComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldCascaderComponent, selector: "nz-formly-cascader-component", usesInheritance: true, ngImport: i0, template: `
    <nz-cascader
      #nzCascader
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzOptions]="props.options | toAsync: $any(props) | async"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzAllowClear]="props.nzAllowClear"
      [nzBackdrop]="props.nzBackdrop"
      [nzChangeOn]="props.nzChangeOn"
      [nzExpandIcon]="nzExpandIcon"
      [nzLabelRender]="nzLabelRender"
      [nzLoadData]="props.nzLoadData"
      [nzMouseEnterDelay]="props.nzMouseEnterDelay"
      [nzMouseLeaveDelay]="props.nzMouseLeaveDelay"
      [nzNotFoundContent]="nzNotFoundContent"
      [nzOptionRender]="nzOptionRender"
      [nzShowArrow]="props.nzShowArrow"
      [nzShowInput]="props.nzShowInput"
      [nzSuffixIcon]="nzSuffixIcon"
      [nzTriggerAction]="props.nzTriggerAction"
      [nzChangeOnSelect]="props.nzChangeOnSelect"
      [nzColumnClassName]="props.nzColumnClassName"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzExpandTrigger]="props.nzExpandTrigger"
      [nzMenuClassName]="props.nzMenuClassName"
      [nzMenuStyle]="props.nzMenuStyle"
      [nzLabelProperty]="props.nzLabelProperty || 'label'"
      [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
      [nzShowSearch]="props.nzShowSearch"
      [nzSize]="props.nzSize"
      [nzValueProperty]="props.nzValueProperty || 'value'"
      (nzClear)="props.nzClear?.(field, nzCascader)"
      (nzSelect)="props.nzSelect?.($event, field, nzCascader)"
      (nzSelectionChange)="props.nzSelectionChange?.($event, field, nzCascader)"
      (nzVisibleChange)="props.nzVisibleChange?.($event, field, nzCascader)"
      ngDefaultControl
    ></nz-cascader>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.NzCascaderComponent, selector: "nz-cascader, [nz-cascader]", inputs: ["nzOptionRender", "nzShowInput", "nzShowArrow", "nzAllowClear", "nzAutoFocus", "nzChangeOnSelect", "nzDisabled", "nzColumnClassName", "nzExpandTrigger", "nzValueProperty", "nzLabelRender", "nzLabelProperty", "nzNotFoundContent", "nzSize", "nzBackdrop", "nzShowSearch", "nzPlaceHolder", "nzMenuClassName", "nzMenuStyle", "nzMouseEnterDelay", "nzMouseLeaveDelay", "nzStatus", "nzTriggerAction", "nzChangeOn", "nzLoadData", "nzSuffixIcon", "nzExpandIcon", "nzOptions"], outputs: ["nzVisibleChange", "nzSelectionChange", "nzSelect", "nzClear"], exportAs: ["nzCascader"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { kind: "pipe", type: i5.AsyncPipe, name: "async" }, { kind: "pipe", type: i6.ToAsyncPipe, name: "toAsync" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldCascaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-cascader-component',
                    template: `
    <nz-cascader
      #nzCascader
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzOptions]="props.options | toAsync: $any(props) | async"
      [nzAutoFocus]="props.nzAutoFocus"
      [nzAllowClear]="props.nzAllowClear"
      [nzBackdrop]="props.nzBackdrop"
      [nzChangeOn]="props.nzChangeOn"
      [nzExpandIcon]="nzExpandIcon"
      [nzLabelRender]="nzLabelRender"
      [nzLoadData]="props.nzLoadData"
      [nzMouseEnterDelay]="props.nzMouseEnterDelay"
      [nzMouseLeaveDelay]="props.nzMouseLeaveDelay"
      [nzNotFoundContent]="nzNotFoundContent"
      [nzOptionRender]="nzOptionRender"
      [nzShowArrow]="props.nzShowArrow"
      [nzShowInput]="props.nzShowInput"
      [nzSuffixIcon]="nzSuffixIcon"
      [nzTriggerAction]="props.nzTriggerAction"
      [nzChangeOnSelect]="props.nzChangeOnSelect"
      [nzColumnClassName]="props.nzColumnClassName"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzExpandTrigger]="props.nzExpandTrigger"
      [nzMenuClassName]="props.nzMenuClassName"
      [nzMenuStyle]="props.nzMenuStyle"
      [nzLabelProperty]="props.nzLabelProperty || 'label'"
      [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
      [nzShowSearch]="props.nzShowSearch"
      [nzSize]="props.nzSize"
      [nzValueProperty]="props.nzValueProperty || 'value'"
      (nzClear)="props.nzClear?.(field, nzCascader)"
      (nzSelect)="props.nzSelect?.($event, field, nzCascader)"
      (nzSelectionChange)="props.nzSelectionChange?.($event, field, nzCascader)"
      (nzVisibleChange)="props.nzVisibleChange?.($event, field, nzCascader)"
      ngDefaultControl
    ></nz-cascader>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });

const COMPONENT = FormlyFieldCascaderComponent;
class FormlyNzCascaderModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCascaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCascaderModule, declarations: [FormlyFieldCascaderComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzCascaderModule,
            NzxPipeModule, i4.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCascaderModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzCascaderModule,
            NzxPipeModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'cascader',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCascaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzCascaderModule,
                        NzxPipeModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'cascader',
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

export { FormlyFieldCascaderComponent, FormlyNzCascaderModule };
//# sourceMappingURL=freezesoul-nz-formly-cascader.mjs.map
