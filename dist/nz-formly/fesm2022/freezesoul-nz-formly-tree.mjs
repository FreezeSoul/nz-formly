import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i3 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from 'ng-zorro-antd/tree';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i5 from '@freezesoul/nzx-antd/pipe';
import { NzxPipeModule } from '@freezesoul/nzx-antd/pipe';

class FormlyFieldTreeComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: {
            nzShowExpand: true,
            nzData: [],
            nzSelectedKeys: [],
            nzCheckedKeys: [],
            nzExpandedKeys: [],
            nzVirtualItemSize: 28,
            nzVirtualMaxBufferPx: 500,
            nzVirtualMinBufferPx: 28
        }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzTreeTemplate() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzTreeTemplate');
    }
    get nzExpandedIcon() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzExpandedIcon');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTreeComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldTreeComponent, selector: "nz-formly-tree", usesInheritance: true, ngImport: i0, template: `
    <nz-tree
      #instance
      [formlyAttributes]="field"
      [nzData]="props.nzData | toAsync: $any(props) | async"
      [nzBlockNode]="props.nzBlockNode"
      [nzCheckable]="props.nzCheckable"
      [nzShowExpand]="props.nzShowExpand"
      [nzShowIcon]="props.nzShowIcon"
      [nzAsyncData]="props.nzAsyncData"
      [nzBeforeDrop]="props.nzBeforeDrop"
      [nzCheckedKeys]="props.nzCheckedKeys"
      [nzCheckStrictly]="props.nzCheckStrictly"
      [nzDraggable]="props.nzDraggable"
      [nzExpandAll]="props.nzExpandAll"
      [nzExpandedIcon]="nzExpandedIcon"
      [nzExpandedKeys]="props.nzExpandedKeys"
      [nzHideUnMatched]="props.nzHideUnMatched"
      [nzMultiple]="props.nzMultiple"
      [nzSearchFunc]="props.nzSearchFunc"
      [nzSearchValue]="props.nzSearchValue"
      [nzSelectedKeys]="props.nzSelectedKeys"
      [nzSelectMode]="props.nzSelectMode"
      [nzShowLine]="props.nzShowLine"
      [nzVirtualHeight]="props.nzVirtualHeight"
      [nzVirtualItemSize]="props.nzVirtualItemSize"
      [nzVirtualMaxBufferPx]="props.nzVirtualMaxBufferPx"
      [nzVirtualMinBufferPx]="props.nzVirtualMinBufferPx"
      [nzTreeTemplate]="nzTreeTemplate"
      (nzClick)="props.nzClick?.($event, field, instance)"
      (nzDblClick)="props.nzDblClick?.($event, field, instance)"
      (nzContextMenu)="props.nzContextMenu?.($event, field, instance)"
      (nzCheckBoxChange)="props.nzCheckBoxChange?.($event, field, instance)"
      (nzExpandChange)="props.nzExpandChange?.($event, field, instance)"
      (nzSearchValueChange)="props.nzSearchValueChange?.($event, field, instance)"
      (nzOnDragStart)="props.nzOnDragStart?.($event, field, instance)"
      (nzOnDragEnter)="props.nzOnDragEnter?.($event, field, instance)"
      (nzOnDragOver)="props.nzOnDragOver?.($event, field, instance)"
      (nzOnDragLeave)="props.nzOnDragLeave?.($event, field, instance)"
      (nzOnDrop)="props.nzOnDrop?.($event, field, instance)"
      (nzOnDragEnd)="props.nzOnDragEnd?.($event, field, instance)"
    ></nz-tree>
  `, isInline: true, dependencies: [{ kind: "component", type: i2.NzTreeComponent, selector: "nz-tree", inputs: ["nzShowIcon", "nzHideUnMatched", "nzBlockNode", "nzExpandAll", "nzSelectMode", "nzCheckStrictly", "nzShowExpand", "nzShowLine", "nzCheckable", "nzAsyncData", "nzDraggable", "nzMultiple", "nzExpandedIcon", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualHeight", "nzTreeTemplate", "nzBeforeDrop", "nzData", "nzExpandedKeys", "nzSelectedKeys", "nzCheckedKeys", "nzSearchValue", "nzSearchFunc"], outputs: ["nzExpandedKeysChange", "nzSelectedKeysChange", "nzCheckedKeysChange", "nzSearchValueChange", "nzClick", "nzDblClick", "nzContextMenu", "nzCheckBoxChange", "nzExpandChange", "nzOnDragStart", "nzOnDragEnter", "nzOnDragOver", "nzOnDragLeave", "nzOnDrop", "nzOnDragEnd"], exportAs: ["nzTree"] }, { kind: "directive", type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }, { kind: "pipe", type: i5.ToAsyncPipe, name: "toAsync" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTreeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-tree',
                    template: `
    <nz-tree
      #instance
      [formlyAttributes]="field"
      [nzData]="props.nzData | toAsync: $any(props) | async"
      [nzBlockNode]="props.nzBlockNode"
      [nzCheckable]="props.nzCheckable"
      [nzShowExpand]="props.nzShowExpand"
      [nzShowIcon]="props.nzShowIcon"
      [nzAsyncData]="props.nzAsyncData"
      [nzBeforeDrop]="props.nzBeforeDrop"
      [nzCheckedKeys]="props.nzCheckedKeys"
      [nzCheckStrictly]="props.nzCheckStrictly"
      [nzDraggable]="props.nzDraggable"
      [nzExpandAll]="props.nzExpandAll"
      [nzExpandedIcon]="nzExpandedIcon"
      [nzExpandedKeys]="props.nzExpandedKeys"
      [nzHideUnMatched]="props.nzHideUnMatched"
      [nzMultiple]="props.nzMultiple"
      [nzSearchFunc]="props.nzSearchFunc"
      [nzSearchValue]="props.nzSearchValue"
      [nzSelectedKeys]="props.nzSelectedKeys"
      [nzSelectMode]="props.nzSelectMode"
      [nzShowLine]="props.nzShowLine"
      [nzVirtualHeight]="props.nzVirtualHeight"
      [nzVirtualItemSize]="props.nzVirtualItemSize"
      [nzVirtualMaxBufferPx]="props.nzVirtualMaxBufferPx"
      [nzVirtualMinBufferPx]="props.nzVirtualMinBufferPx"
      [nzTreeTemplate]="nzTreeTemplate"
      (nzClick)="props.nzClick?.($event, field, instance)"
      (nzDblClick)="props.nzDblClick?.($event, field, instance)"
      (nzContextMenu)="props.nzContextMenu?.($event, field, instance)"
      (nzCheckBoxChange)="props.nzCheckBoxChange?.($event, field, instance)"
      (nzExpandChange)="props.nzExpandChange?.($event, field, instance)"
      (nzSearchValueChange)="props.nzSearchValueChange?.($event, field, instance)"
      (nzOnDragStart)="props.nzOnDragStart?.($event, field, instance)"
      (nzOnDragEnter)="props.nzOnDragEnter?.($event, field, instance)"
      (nzOnDragOver)="props.nzOnDragOver?.($event, field, instance)"
      (nzOnDragLeave)="props.nzOnDragLeave?.($event, field, instance)"
      (nzOnDrop)="props.nzOnDrop?.($event, field, instance)"
      (nzOnDragEnd)="props.nzOnDragEnd?.($event, field, instance)"
    ></nz-tree>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });

const COMPONENT = FormlyFieldTreeComponent;
class FormlyNzTreeModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTreeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTreeModule, declarations: [FormlyFieldTreeComponent], imports: [CommonModule,
            NzTreeModule,
            NzxPipeModule, i3.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTreeModule, imports: [CommonModule,
            NzTreeModule,
            NzxPipeModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'tree',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTreeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzTreeModule,
                        NzxPipeModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'tree',
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

export { FormlyFieldTreeComponent, FormlyNzTreeModule };
//# sourceMappingURL=freezesoul-nz-formly-tree.mjs.map
