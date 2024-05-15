import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { hasTplNameValue, resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/button";
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/core/wave";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/core/outlet";
import * as i8 from "@ngx-formly/core";
import * as i9 from "ng-zorro-antd/dropdown";
export class FormlyFieldButtonComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: { nzSize: 'default', type: 'button' }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get hasText() {
        return hasTplNameValue(this.props, 'text');
    }
    get text() {
        return resolveTplName(this.props, this.fieldTemplates, 'text');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldButtonComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldButtonComponent, selector: "nz-formly-button", usesInheritance: true, ngImport: i0, template: `
    <button
      nz-button
      [formlyAttributes]="field"
      [type]="props.type"
      [nzBlock]="props.nzBlock"
      [nzDanger]="props.nzDanger"
      [nzGhost]="props.nzGhost"
      [nzSize]="props.nzSize"
      [nzLoading]="props.nzLoading"
      [nzSearch]="props.nzSearch"
      [nzShape]="props.nzShape"
      [nzType]="props.nzType"
      [disabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzWaveExtraNode]="props.nzWaveExtraNode"
      nz-dropdown
    >
      <i *ngIf="props.beforeIcon" nz-icon [nzType]="props.beforeIcon"></i>
      <ng-container *ngIf="hasText">
        <ng-container *nzStringTemplateOutlet="text; context: { $implicit: field, options: props }">
          {{ text }}
        </ng-container>
      </ng-container>
      <i *ngIf="props.afterIcon" nz-icon [nzType]="props.afterIcon"></i>
    </button>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: i4.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i5.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { kind: "directive", type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i7.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i8.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { kind: "directive", type: i9.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "directive", type: i9.NzDropdownButtonDirective, selector: "[nz-button][nz-dropdown]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-button',
                    template: `
    <button
      nz-button
      [formlyAttributes]="field"
      [type]="props.type"
      [nzBlock]="props.nzBlock"
      [nzDanger]="props.nzDanger"
      [nzGhost]="props.nzGhost"
      [nzSize]="props.nzSize"
      [nzLoading]="props.nzLoading"
      [nzSearch]="props.nzSearch"
      [nzShape]="props.nzShape"
      [nzType]="props.nzType"
      [disabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzWaveExtraNode]="props.nzWaveExtraNode"
      nz-dropdown
    >
      <i *ngIf="props.beforeIcon" nz-icon [nzType]="props.beforeIcon"></i>
      <ng-container *ngIf="hasText">
        <ng-container *nzStringTemplateOutlet="text; context: { $implicit: field, options: props }">
          {{ text }}
        </ng-container>
      </ng-container>
      <i *ngIf="props.afterIcon" nz-icon [nzType]="props.afterIcon"></i>
    </button>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFzQixlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7O0FBZ0NuRyxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsU0FBUztJQUt4QjtJQUp0QixjQUFjLEdBQUc7UUFDeEIsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0tBQzdDLENBQUM7SUFFRixZQUErQixjQUFrQztRQUMvRCxLQUFLLEVBQUUsQ0FBQztRQURxQixtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7SUFFakUsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDO3dHQWZVLDBCQUEwQjs0RkFBMUIsMEJBQTBCLCtFQTVCM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5QlQ7OzRGQUdVLDBCQUEwQjtrQkE5QnRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7MEJBTWMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtbHlCb3hUZW1wbGF0ZXMsIGhhc1RwbE5hbWVWYWx1ZSwgcmVzb2x2ZVRwbE5hbWUgfSBmcm9tICdAZnJlZXplc291bC9uei1mb3JtbHkvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybWx5LWJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxidXR0b25cclxuICAgICAgbnotYnV0dG9uXHJcbiAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgW3R5cGVdPVwicHJvcHMudHlwZVwiXHJcbiAgICAgIFtuekJsb2NrXT1cInByb3BzLm56QmxvY2tcIlxyXG4gICAgICBbbnpEYW5nZXJdPVwicHJvcHMubnpEYW5nZXJcIlxyXG4gICAgICBbbnpHaG9zdF09XCJwcm9wcy5uekdob3N0XCJcclxuICAgICAgW256U2l6ZV09XCJwcm9wcy5uelNpemVcIlxyXG4gICAgICBbbnpMb2FkaW5nXT1cInByb3BzLm56TG9hZGluZ1wiXHJcbiAgICAgIFtuelNlYXJjaF09XCJwcm9wcy5uelNlYXJjaFwiXHJcbiAgICAgIFtuelNoYXBlXT1cInByb3BzLm56U2hhcGVcIlxyXG4gICAgICBbbnpUeXBlXT1cInByb3BzLm56VHlwZVwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJwcm9wcy5uekRpc2FibGVkIHx8IHByb3BzLmRpc2FibGVkIHx8IGZvcm1Db250cm9sPy5kaXNhYmxlZFwiXHJcbiAgICAgIFtueldhdmVFeHRyYU5vZGVdPVwicHJvcHMubnpXYXZlRXh0cmFOb2RlXCJcclxuICAgICAgbnotZHJvcGRvd25cclxuICAgID5cclxuICAgICAgPGkgKm5nSWY9XCJwcm9wcy5iZWZvcmVJY29uXCIgbnotaWNvbiBbbnpUeXBlXT1cInByb3BzLmJlZm9yZUljb25cIj48L2k+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNUZXh0XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRleHQ7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBmaWVsZCwgb3B0aW9uczogcHJvcHMgfVwiPlxyXG4gICAgICAgICAge3sgdGV4dCB9fVxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPGkgKm5nSWY9XCJwcm9wcy5hZnRlckljb25cIiBuei1pY29uIFtuelR5cGVdPVwicHJvcHMuYWZ0ZXJJY29uXCI+PC9pPlxyXG4gICAgPC9idXR0b24+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBGaWVsZFR5cGUge1xyXG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgcHJvcHM6IHsgbnpTaXplOiAnZGVmYXVsdCcsIHR5cGU6ICdidXR0b24nIH1cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwdWJsaWMgZmllbGRUZW1wbGF0ZXM6IEZvcm1seUJveFRlbXBsYXRlcykge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGdldCBoYXNUZXh0KCkge1xyXG4gICAgcmV0dXJuIGhhc1RwbE5hbWVWYWx1ZSh0aGlzLnByb3BzLCAndGV4dCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRleHQoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ3RleHQnKTtcclxuICB9XHJcbn1cclxuIl19