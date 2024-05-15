import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i4 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i3 from 'ng-zorro-antd/tree-select';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i6 from '@freezesoul/nzx-antd/pipe';
import { NzxPipeModule } from '@freezesoul/nzx-antd/pipe';

class FormlyFieldTreeSelectComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: {
            nzDisplayWith: (node) => node.title,
            options: [],
            nzVirtualItemSize: 28,
            nzVirtualMaxBufferPx: 500,
            nzVirtualMinBufferPx: 28,
            nzDropdownStyle: { 'max-height': '300px' },
            defaultValue: []
        }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzExpandedIcon() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzExpandedIcon');
    }
    get nzMaxTagPlaceholder() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzMaxTagPlaceholder');
    }
    get nzTreeTemplate() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzTreeTemplate');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTreeSelectComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldTreeSelectComponent, selector: "nz-formly-tree-select-component", usesInheritance: true, ngImport: i0, template: `
    <nz-tree-select
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzStatus]="props.nzStatus"
      [nzExpandedIcon]="nzExpandedIcon"
      [nzExpandedKeys]="props.nzExpandedKeys"
      [nzAllowClear]="props.nzAllowClear"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzShowIcon]="props.nzShowIcon"
      [nzNotFoundContent]="props.nzNotFoundContent"
      [nzDropdownStyle]="props.nzDropdownStyle"
      [nzMultiple]="props.nzMultiple"
      [nzHideUnMatched]="props.nzHideUnMatched"
      [nzDropdownClassName]="props.nzDropdownClassName"
      [nzSize]="props.nzSize"
      [nzCheckStrictly]="props.nzCheckStrictly"
      [nzDropdownMatchSelectWidth]="props.nzDropdownMatchSelectWidth !== false"
      [nzNodes]="$any(props.options | toAsync: $any(props) | async | defaultify: [])"
      [nzShowLine]="props.nzShowLine"
      [nzDefaultExpandAll]="props.nzDefaultExpandAll"
      [nzShowExpand]="props.nzShowExpand !== false"
      [nzAsyncData]="props.nzAsyncData"
      [nzShowSearch]="props.nzShowSearch"
      [nzCheckable]="props.nzCheckable"
      [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
      [nzDisplayWith]="props.nzDisplayWith"
      [nzMaxTagCount]="props.nzMaxTagCount"
      [nzMaxTagPlaceholder]="nzMaxTagPlaceholder"
      [nzTreeTemplate]="nzTreeTemplate"
      [nzVirtualHeight]="props.nzVirtualHeight"
      [nzVirtualItemSize]="props.nzVirtualItemSize"
      [nzVirtualMaxBufferPx]="props.nzVirtualMaxBufferPx"
      [nzVirtualMinBufferPx]="props.nzVirtualMinBufferPx"
      [nzBackdrop]="props.nzBackdrop"
      [nzId]="field.id || props.nzId"
      (nzExpandChange)="props.nzExpandChange?.($event, field, instance)"
      (nzOpenChange)="props.nzOpenChange?.($event, field, instance)"
      (nzTreeCheckBoxChange)="props.nzTreeCheckBoxChange?.($event, field, instance)"
      (nzRemoved)="props.nzRemoved?.($event, field, instance)"
      (nzCleared)="props.nzCleared?.(field, instance)"
      (nzTreeClick)="props.nzTreeClick?.($event, field, instance)"
      ngDefaultControl
    ></nz-tree-select>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.NzTreeSelectComponent, selector: "nz-tree-select", inputs: ["nzId", "nzAllowClear", "nzShowExpand", "nzShowLine", "nzDropdownMatchSelectWidth", "nzCheckable", "nzHideUnMatched", "nzShowIcon", "nzShowSearch", "nzDisabled", "nzAsyncData", "nzMultiple", "nzDefaultExpandAll", "nzCheckStrictly", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualHeight", "nzExpandedIcon", "nzNotFoundContent", "nzNodes", "nzOpen", "nzSize", "nzPlaceHolder", "nzDropdownStyle", "nzDropdownClassName", "nzBackdrop", "nzStatus", "nzPlacement", "nzExpandedKeys", "nzDisplayWith", "nzMaxTagCount", "nzMaxTagPlaceholder", "nzTreeTemplate"], outputs: ["nzOpenChange", "nzCleared", "nzRemoved", "nzExpandChange", "nzTreeClick", "nzTreeCheckBoxChange"], exportAs: ["nzTreeSelect"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { kind: "pipe", type: i5.AsyncPipe, name: "async" }, { kind: "pipe", type: i6.DefaultifyPipe, name: "defaultify" }, { kind: "pipe", type: i6.ToAsyncPipe, name: "toAsync" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTreeSelectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-tree-select-component',
                    template: `
    <nz-tree-select
      #instance
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzStatus]="props.nzStatus"
      [nzExpandedIcon]="nzExpandedIcon"
      [nzExpandedKeys]="props.nzExpandedKeys"
      [nzAllowClear]="props.nzAllowClear"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzShowIcon]="props.nzShowIcon"
      [nzNotFoundContent]="props.nzNotFoundContent"
      [nzDropdownStyle]="props.nzDropdownStyle"
      [nzMultiple]="props.nzMultiple"
      [nzHideUnMatched]="props.nzHideUnMatched"
      [nzDropdownClassName]="props.nzDropdownClassName"
      [nzSize]="props.nzSize"
      [nzCheckStrictly]="props.nzCheckStrictly"
      [nzDropdownMatchSelectWidth]="props.nzDropdownMatchSelectWidth !== false"
      [nzNodes]="$any(props.options | toAsync: $any(props) | async | defaultify: [])"
      [nzShowLine]="props.nzShowLine"
      [nzDefaultExpandAll]="props.nzDefaultExpandAll"
      [nzShowExpand]="props.nzShowExpand !== false"
      [nzAsyncData]="props.nzAsyncData"
      [nzShowSearch]="props.nzShowSearch"
      [nzCheckable]="props.nzCheckable"
      [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
      [nzDisplayWith]="props.nzDisplayWith"
      [nzMaxTagCount]="props.nzMaxTagCount"
      [nzMaxTagPlaceholder]="nzMaxTagPlaceholder"
      [nzTreeTemplate]="nzTreeTemplate"
      [nzVirtualHeight]="props.nzVirtualHeight"
      [nzVirtualItemSize]="props.nzVirtualItemSize"
      [nzVirtualMaxBufferPx]="props.nzVirtualMaxBufferPx"
      [nzVirtualMinBufferPx]="props.nzVirtualMinBufferPx"
      [nzBackdrop]="props.nzBackdrop"
      [nzId]="field.id || props.nzId"
      (nzExpandChange)="props.nzExpandChange?.($event, field, instance)"
      (nzOpenChange)="props.nzOpenChange?.($event, field, instance)"
      (nzTreeCheckBoxChange)="props.nzTreeCheckBoxChange?.($event, field, instance)"
      (nzRemoved)="props.nzRemoved?.($event, field, instance)"
      (nzCleared)="props.nzCleared?.(field, instance)"
      (nzTreeClick)="props.nzTreeClick?.($event, field, instance)"
      ngDefaultControl
    ></nz-tree-select>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });

const COMPONENT = FormlyFieldTreeSelectComponent;
class FormlyNzTreeSelectModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTreeSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTreeSelectModule, declarations: [FormlyFieldTreeSelectComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzTreeSelectModule,
            NzxPipeModule, i4.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTreeSelectModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzTreeSelectModule,
            NzxPipeModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'tree-select',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTreeSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzTreeSelectModule,
                        NzxPipeModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'tree-select',
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

export { FormlyFieldTreeSelectComponent, FormlyNzTreeSelectModule };
//# sourceMappingURL=freezesoul-nz-formly-tree-select.mjs.map
