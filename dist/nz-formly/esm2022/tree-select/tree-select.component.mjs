import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/tree-select";
import * as i4 from "@ngx-formly/core";
import * as i5 from "@angular/common";
import * as i6 from "@freezesoul/nzx-antd/pipe";
export class FormlyFieldTreeSelectComponent extends FieldType {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL3RyZWUtc2VsZWN0L3RyZWUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFN0MsT0FBTyxFQUFzQixjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7QUFvRGxGLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxTQUFTO0lBYTVCO0lBWnRCLGNBQWMsR0FBRztRQUN4QixLQUFLLEVBQUU7WUFDTCxhQUFhLEVBQUUsQ0FBQyxJQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSztZQUMvQyxPQUFPLEVBQUUsRUFBRTtZQUNYLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsb0JBQW9CLEVBQUUsR0FBRztZQUN6QixvQkFBb0IsRUFBRSxFQUFFO1lBQ3hCLGVBQWUsRUFBRSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUU7WUFDMUMsWUFBWSxFQUFFLEVBQUU7U0FDakI7S0FDRixDQUFDO0lBRUYsWUFBK0IsY0FBa0M7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFEcUIsbUJBQWMsR0FBZCxjQUFjLENBQW9CO0lBRWpFLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELElBQUksbUJBQW1CO1FBQ3JCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFDRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDM0UsQ0FBQzt3R0ExQlUsOEJBQThCOzRGQUE5Qiw4QkFBOEIsOEZBaEQvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkNUOzs0RkFHVSw4QkFBOEI7a0JBbEQxQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQ0FBaUM7b0JBQzNDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkNUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7MEJBY2MsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xyXG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90cmVlJztcclxuaW1wb3J0IHsgRm9ybWx5Qm94VGVtcGxhdGVzLCByZXNvbHZlVHBsTmFtZSB9IGZyb20gJ0BmcmVlemVzb3VsL256LWZvcm1seS9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1mb3JtbHktdHJlZS1zZWxlY3QtY29tcG9uZW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG56LXRyZWUtc2VsZWN0XHJcbiAgICAgICNpbnN0YW5jZVxyXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiJGFueShmb3JtQ29udHJvbClcIlxyXG4gICAgICBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiXHJcbiAgICAgIFtuelN0YXR1c109XCJwcm9wcy5uelN0YXR1c1wiXHJcbiAgICAgIFtuekV4cGFuZGVkSWNvbl09XCJuekV4cGFuZGVkSWNvblwiXHJcbiAgICAgIFtuekV4cGFuZGVkS2V5c109XCJwcm9wcy5uekV4cGFuZGVkS2V5c1wiXHJcbiAgICAgIFtuekFsbG93Q2xlYXJdPVwicHJvcHMubnpBbGxvd0NsZWFyXCJcclxuICAgICAgW256RGlzYWJsZWRdPVwicHJvcHMubnpEaXNhYmxlZCB8fCBwcm9wcy5kaXNhYmxlZCB8fCBmb3JtQ29udHJvbD8uZGlzYWJsZWRcIlxyXG4gICAgICBbbnpTaG93SWNvbl09XCJwcm9wcy5uelNob3dJY29uXCJcclxuICAgICAgW256Tm90Rm91bmRDb250ZW50XT1cInByb3BzLm56Tm90Rm91bmRDb250ZW50XCJcclxuICAgICAgW256RHJvcGRvd25TdHlsZV09XCJwcm9wcy5uekRyb3Bkb3duU3R5bGVcIlxyXG4gICAgICBbbnpNdWx0aXBsZV09XCJwcm9wcy5uek11bHRpcGxlXCJcclxuICAgICAgW256SGlkZVVuTWF0Y2hlZF09XCJwcm9wcy5uekhpZGVVbk1hdGNoZWRcIlxyXG4gICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJwcm9wcy5uekRyb3Bkb3duQ2xhc3NOYW1lXCJcclxuICAgICAgW256U2l6ZV09XCJwcm9wcy5uelNpemVcIlxyXG4gICAgICBbbnpDaGVja1N0cmljdGx5XT1cInByb3BzLm56Q2hlY2tTdHJpY3RseVwiXHJcbiAgICAgIFtuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aF09XCJwcm9wcy5uekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCAhPT0gZmFsc2VcIlxyXG4gICAgICBbbnpOb2Rlc109XCIkYW55KHByb3BzLm9wdGlvbnMgfCB0b0FzeW5jOiAkYW55KHByb3BzKSB8IGFzeW5jIHwgZGVmYXVsdGlmeTogW10pXCJcclxuICAgICAgW256U2hvd0xpbmVdPVwicHJvcHMubnpTaG93TGluZVwiXHJcbiAgICAgIFtuekRlZmF1bHRFeHBhbmRBbGxdPVwicHJvcHMubnpEZWZhdWx0RXhwYW5kQWxsXCJcclxuICAgICAgW256U2hvd0V4cGFuZF09XCJwcm9wcy5uelNob3dFeHBhbmQgIT09IGZhbHNlXCJcclxuICAgICAgW256QXN5bmNEYXRhXT1cInByb3BzLm56QXN5bmNEYXRhXCJcclxuICAgICAgW256U2hvd1NlYXJjaF09XCJwcm9wcy5uelNob3dTZWFyY2hcIlxyXG4gICAgICBbbnpDaGVja2FibGVdPVwicHJvcHMubnpDaGVja2FibGVcIlxyXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJwcm9wcy5uelBsYWNlSG9sZGVyIHx8IHByb3BzLnBsYWNlaG9sZGVyXCJcclxuICAgICAgW256RGlzcGxheVdpdGhdPVwicHJvcHMubnpEaXNwbGF5V2l0aFwiXHJcbiAgICAgIFtuek1heFRhZ0NvdW50XT1cInByb3BzLm56TWF4VGFnQ291bnRcIlxyXG4gICAgICBbbnpNYXhUYWdQbGFjZWhvbGRlcl09XCJuek1heFRhZ1BsYWNlaG9sZGVyXCJcclxuICAgICAgW256VHJlZVRlbXBsYXRlXT1cIm56VHJlZVRlbXBsYXRlXCJcclxuICAgICAgW256VmlydHVhbEhlaWdodF09XCJwcm9wcy5uelZpcnR1YWxIZWlnaHRcIlxyXG4gICAgICBbbnpWaXJ0dWFsSXRlbVNpemVdPVwicHJvcHMubnpWaXJ0dWFsSXRlbVNpemVcIlxyXG4gICAgICBbbnpWaXJ0dWFsTWF4QnVmZmVyUHhdPVwicHJvcHMubnpWaXJ0dWFsTWF4QnVmZmVyUHhcIlxyXG4gICAgICBbbnpWaXJ0dWFsTWluQnVmZmVyUHhdPVwicHJvcHMubnpWaXJ0dWFsTWluQnVmZmVyUHhcIlxyXG4gICAgICBbbnpCYWNrZHJvcF09XCJwcm9wcy5uekJhY2tkcm9wXCJcclxuICAgICAgW256SWRdPVwiZmllbGQuaWQgfHwgcHJvcHMubnpJZFwiXHJcbiAgICAgIChuekV4cGFuZENoYW5nZSk9XCJwcm9wcy5uekV4cGFuZENoYW5nZT8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgIChuek9wZW5DaGFuZ2UpPVwicHJvcHMubnpPcGVuQ2hhbmdlPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKG56VHJlZUNoZWNrQm94Q2hhbmdlKT1cInByb3BzLm56VHJlZUNoZWNrQm94Q2hhbmdlPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgKG56UmVtb3ZlZCk9XCJwcm9wcy5uelJlbW92ZWQ/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAobnpDbGVhcmVkKT1cInByb3BzLm56Q2xlYXJlZD8uKGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICAobnpUcmVlQ2xpY2spPVwicHJvcHMubnpUcmVlQ2xpY2s/LigkZXZlbnQsIGZpZWxkLCBpbnN0YW5jZSlcIlxyXG4gICAgICBuZ0RlZmF1bHRDb250cm9sXHJcbiAgICA+PC9uei10cmVlLXNlbGVjdD5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZFRyZWVTZWxlY3RDb21wb25lbnQgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbnpEaXNwbGF5V2l0aDogKG5vZGU6IE56VHJlZU5vZGUpID0+IG5vZGUudGl0bGUsXHJcbiAgICAgIG9wdGlvbnM6IFtdLFxyXG4gICAgICBuelZpcnR1YWxJdGVtU2l6ZTogMjgsXHJcbiAgICAgIG56VmlydHVhbE1heEJ1ZmZlclB4OiA1MDAsXHJcbiAgICAgIG56VmlydHVhbE1pbkJ1ZmZlclB4OiAyOCxcclxuICAgICAgbnpEcm9wZG93blN0eWxlOiB7ICdtYXgtaGVpZ2h0JzogJzMwMHB4JyB9LFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IFtdXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIGZpZWxkVGVtcGxhdGVzOiBGb3JtbHlCb3hUZW1wbGF0ZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpFeHBhbmRlZEljb24oKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256RXhwYW5kZWRJY29uJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpNYXhUYWdQbGFjZWhvbGRlcigpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpNYXhUYWdQbGFjZWhvbGRlcicpO1xyXG4gIH1cclxuICBnZXQgbnpUcmVlVGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256VHJlZVRlbXBsYXRlJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==