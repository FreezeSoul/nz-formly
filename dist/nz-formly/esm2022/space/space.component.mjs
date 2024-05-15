import { Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/space";
import * as i4 from "@ngx-formly/core";
export class FormlyFieldSpaceComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: { nzSize: 'small', nzDirection: 'horizontal' }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzSplit() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzSplit');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldSpaceComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldSpaceComponent, selector: "nz-formly-space", usesInheritance: true, ngImport: i0, template: `
    <nz-space
      [nzSize]="props.nzSize"
      [nzAlign]="props.nzAlign"
      [nzDirection]="props.nzDirection"
      [nzSplit]="nzSplit"
      [nzWrap]="props.nzWrap"
      [formlyAttributes]="field"
    >
      <ng-container *ngFor="let item of field.fieldGroup">
        <formly-field *nzSpaceItem [field]="item"></formly-field>
      </ng-container>
    </nz-space>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i3.NzSpaceComponent, selector: "nz-space, [nz-space]", inputs: ["nzDirection", "nzAlign", "nzSplit", "nzWrap", "nzSize"], exportAs: ["NzSpace"] }, { kind: "directive", type: i3.NzSpaceItemDirective, selector: "[nzSpaceItem]" }, { kind: "component", type: i4.FormlyField, selector: "formly-field", inputs: ["field"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldSpaceComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-space',
                    template: `
    <nz-space
      [nzSize]="props.nzSize"
      [nzAlign]="props.nzAlign"
      [nzDirection]="props.nzDirection"
      [nzSplit]="nzSplit"
      [nzWrap]="props.nzWrap"
      [formlyAttributes]="field"
    >
      <ng-container *ngFor="let item of field.fieldGroup">
        <formly-field *nzSpaceItem [field]="item"></formly-field>
      </ng-container>
    </nz-space>
  `
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL3NwYWNlL3NwYWNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFzQixjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7O0FBbUJsRixNQUFNLE9BQU8seUJBQTBCLFNBQVEsU0FBUztJQUl2QjtJQUh0QixjQUFjLEdBQUc7UUFDeEIsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFO0tBQ3RELENBQUM7SUFDRixZQUErQixjQUFrQztRQUMvRCxLQUFLLEVBQUUsQ0FBQztRQURxQixtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7SUFFakUsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNwRSxDQUFDO3dHQVZVLHlCQUF5Qjs0RkFBekIseUJBQXlCLDhFQWYxQjs7Ozs7Ozs7Ozs7OztHQWFUOzs0RkFFVSx5QkFBeUI7a0JBakJyQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztHQWFUO2lCQUNGOzswQkFLYyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWx5Qm94VGVtcGxhdGVzLCByZXNvbHZlVHBsTmFtZSB9IGZyb20gJ0BmcmVlemVzb3VsL256LWZvcm1seS9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1mb3JtbHktc3BhY2UnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bnotc3BhY2VcclxuICAgICAgW256U2l6ZV09XCJwcm9wcy5uelNpemVcIlxyXG4gICAgICBbbnpBbGlnbl09XCJwcm9wcy5uekFsaWduXCJcclxuICAgICAgW256RGlyZWN0aW9uXT1cInByb3BzLm56RGlyZWN0aW9uXCJcclxuICAgICAgW256U3BsaXRdPVwibnpTcGxpdFwiXHJcbiAgICAgIFtueldyYXBdPVwicHJvcHMubnpXcmFwXCJcclxuICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpZWxkLmZpZWxkR3JvdXBcIj5cclxuICAgICAgICA8Zm9ybWx5LWZpZWxkICpuelNwYWNlSXRlbSBbZmllbGRdPVwiaXRlbVwiPjwvZm9ybWx5LWZpZWxkPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbnotc3BhY2U+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRTcGFjZUNvbXBvbmVudCBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgb3ZlcnJpZGUgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBwcm9wczogeyBuelNpemU6ICdzbWFsbCcsIG56RGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcgfVxyXG4gIH07XHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIGZpZWxkVGVtcGxhdGVzOiBGb3JtbHlCb3hUZW1wbGF0ZXMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTcGxpdCgpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbnpTcGxpdCcpO1xyXG4gIH1cclxufVxyXG4iXX0=