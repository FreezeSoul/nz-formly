import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "ng-zorro-antd/tree";
import * as i3 from "@ngx-formly/core";
import * as i4 from "@angular/common";
import * as i5 from "@freezesoul/nzx-antd/pipe";
export class FormlyFieldTreeComponent extends FieldType {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvdHJlZS90cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUEyQyxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7OztBQWtEdkcsTUFBTSxPQUFPLHdCQUF5QixTQUFRLFNBQTJDO0lBY3hEO0lBYnRCLGNBQWMsR0FBRztRQUN4QixLQUFLLEVBQUU7WUFDTCxZQUFZLEVBQUUsSUFBSTtZQUNsQixNQUFNLEVBQUUsRUFBRTtZQUNWLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLGNBQWMsRUFBRSxFQUFFO1lBQ2xCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsb0JBQW9CLEVBQUUsR0FBRztZQUN6QixvQkFBb0IsRUFBRSxFQUFFO1NBQ3pCO0tBQ0YsQ0FBQztJQUVGLFlBQStCLGNBQWtDO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBRHFCLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtJQUVqRSxDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFDRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDM0UsQ0FBQzt3R0F2QlUsd0JBQXdCOzRGQUF4Qix3QkFBd0IsNkVBN0N6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMENUOzs0RkFHVSx3QkFBd0I7a0JBL0NwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMENUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7MEJBZWMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtbHlCb3hUZW1wbGF0ZXMsIE56Rm9ybWx5RmllbGRDb25maWcsIHJlc29sdmVUcGxOYW1lIH0gZnJvbSAnQGZyZWV6ZXNvdWwvbnotZm9ybWx5L2NvbW1vbic7XHJcbmltcG9ydCB7IFRyZWVPcHRpb25zIH0gZnJvbSAnLi9mb3JtbHkudHlwZSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybWx5LXRyZWUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bnotdHJlZVxyXG4gICAgICAjaW5zdGFuY2VcclxuICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICBbbnpEYXRhXT1cInByb3BzLm56RGF0YSB8IHRvQXN5bmM6ICRhbnkocHJvcHMpIHwgYXN5bmNcIlxyXG4gICAgICBbbnpCbG9ja05vZGVdPVwicHJvcHMubnpCbG9ja05vZGVcIlxyXG4gICAgICBbbnpDaGVja2FibGVdPVwicHJvcHMubnpDaGVja2FibGVcIlxyXG4gICAgICBbbnpTaG93RXhwYW5kXT1cInByb3BzLm56U2hvd0V4cGFuZFwiXHJcbiAgICAgIFtuelNob3dJY29uXT1cInByb3BzLm56U2hvd0ljb25cIlxyXG4gICAgICBbbnpBc3luY0RhdGFdPVwicHJvcHMubnpBc3luY0RhdGFcIlxyXG4gICAgICBbbnpCZWZvcmVEcm9wXT1cInByb3BzLm56QmVmb3JlRHJvcFwiXHJcbiAgICAgIFtuekNoZWNrZWRLZXlzXT1cInByb3BzLm56Q2hlY2tlZEtleXNcIlxyXG4gICAgICBbbnpDaGVja1N0cmljdGx5XT1cInByb3BzLm56Q2hlY2tTdHJpY3RseVwiXHJcbiAgICAgIFtuekRyYWdnYWJsZV09XCJwcm9wcy5uekRyYWdnYWJsZVwiXHJcbiAgICAgIFtuekV4cGFuZEFsbF09XCJwcm9wcy5uekV4cGFuZEFsbFwiXHJcbiAgICAgIFtuekV4cGFuZGVkSWNvbl09XCJuekV4cGFuZGVkSWNvblwiXHJcbiAgICAgIFtuekV4cGFuZGVkS2V5c109XCJwcm9wcy5uekV4cGFuZGVkS2V5c1wiXHJcbiAgICAgIFtuekhpZGVVbk1hdGNoZWRdPVwicHJvcHMubnpIaWRlVW5NYXRjaGVkXCJcclxuICAgICAgW256TXVsdGlwbGVdPVwicHJvcHMubnpNdWx0aXBsZVwiXHJcbiAgICAgIFtuelNlYXJjaEZ1bmNdPVwicHJvcHMubnpTZWFyY2hGdW5jXCJcclxuICAgICAgW256U2VhcmNoVmFsdWVdPVwicHJvcHMubnpTZWFyY2hWYWx1ZVwiXHJcbiAgICAgIFtuelNlbGVjdGVkS2V5c109XCJwcm9wcy5uelNlbGVjdGVkS2V5c1wiXHJcbiAgICAgIFtuelNlbGVjdE1vZGVdPVwicHJvcHMubnpTZWxlY3RNb2RlXCJcclxuICAgICAgW256U2hvd0xpbmVdPVwicHJvcHMubnpTaG93TGluZVwiXHJcbiAgICAgIFtuelZpcnR1YWxIZWlnaHRdPVwicHJvcHMubnpWaXJ0dWFsSGVpZ2h0XCJcclxuICAgICAgW256VmlydHVhbEl0ZW1TaXplXT1cInByb3BzLm56VmlydHVhbEl0ZW1TaXplXCJcclxuICAgICAgW256VmlydHVhbE1heEJ1ZmZlclB4XT1cInByb3BzLm56VmlydHVhbE1heEJ1ZmZlclB4XCJcclxuICAgICAgW256VmlydHVhbE1pbkJ1ZmZlclB4XT1cInByb3BzLm56VmlydHVhbE1pbkJ1ZmZlclB4XCJcclxuICAgICAgW256VHJlZVRlbXBsYXRlXT1cIm56VHJlZVRlbXBsYXRlXCJcclxuICAgICAgKG56Q2xpY2spPVwicHJvcHMubnpDbGljaz8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuekRibENsaWNrKT1cInByb3BzLm56RGJsQ2xpY2s/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAobnpDb250ZXh0TWVudSk9XCJwcm9wcy5uekNvbnRleHRNZW51Py4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKG56Q2hlY2tCb3hDaGFuZ2UpPVwicHJvcHMubnpDaGVja0JveENoYW5nZT8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuekV4cGFuZENoYW5nZSk9XCJwcm9wcy5uekV4cGFuZENoYW5nZT8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuelNlYXJjaFZhbHVlQ2hhbmdlKT1cInByb3BzLm56U2VhcmNoVmFsdWVDaGFuZ2U/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAobnpPbkRyYWdTdGFydCk9XCJwcm9wcy5uek9uRHJhZ1N0YXJ0Py4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKG56T25EcmFnRW50ZXIpPVwicHJvcHMubnpPbkRyYWdFbnRlcj8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuek9uRHJhZ092ZXIpPVwicHJvcHMubnpPbkRyYWdPdmVyPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKG56T25EcmFnTGVhdmUpPVwicHJvcHMubnpPbkRyYWdMZWF2ZT8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuek9uRHJvcCk9XCJwcm9wcy5uek9uRHJvcD8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuek9uRHJhZ0VuZCk9XCJwcm9wcy5uek9uRHJhZ0VuZD8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICA+PC9uei10cmVlPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkVHJlZUNvbXBvbmVudCBleHRlbmRzIEZpZWxkVHlwZTxOekZvcm1seUZpZWxkQ29uZmlnPFRyZWVPcHRpb25zPj4ge1xyXG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbnpTaG93RXhwYW5kOiB0cnVlLFxyXG4gICAgICBuekRhdGE6IFtdLFxyXG4gICAgICBuelNlbGVjdGVkS2V5czogW10sXHJcbiAgICAgIG56Q2hlY2tlZEtleXM6IFtdLFxyXG4gICAgICBuekV4cGFuZGVkS2V5czogW10sXHJcbiAgICAgIG56VmlydHVhbEl0ZW1TaXplOiAyOCxcclxuICAgICAgbnpWaXJ0dWFsTWF4QnVmZmVyUHg6IDUwMCxcclxuICAgICAgbnpWaXJ0dWFsTWluQnVmZmVyUHg6IDI4XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIGZpZWxkVGVtcGxhdGVzOiBGb3JtbHlCb3hUZW1wbGF0ZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpUcmVlVGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256VHJlZVRlbXBsYXRlJyk7XHJcbiAgfVxyXG4gIGdldCBuekV4cGFuZGVkSWNvbigpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpFeHBhbmRlZEljb24nKTtcclxuICB9XHJcbn1cclxuIl19