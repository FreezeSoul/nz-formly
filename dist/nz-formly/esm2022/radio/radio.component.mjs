import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "ng-zorro-antd/radio";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/core/transition-patch";
import * as i7 from "@ngx-formly/core";
import * as i8 from "ng-zorro-antd/core/outlet";
import * as i9 from "@freezesoul/nzx-antd/pipe";
export class FormlyFieldRadioComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: { nzSize: 'default', options: [] }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get labelTemplate() {
        return resolveTplName(this.props, this.fieldTemplates, 'labelTemplate');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldRadioComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldRadioComponent, selector: "nz-formly-radio-component", usesInheritance: true, ngImport: i0, template: `
    <nz-radio-group
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzName]="props.nzName"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzSize]="props.nzSize"
      [nzButtonStyle]="props.nzButtonStyle"
      ngDefaultControl
    >
      <ng-container *ngIf="props.type !== 'button'; else buttonTemplate">
        <ng-container *ngFor="let item of props.options | toAsync: $any(props) | async">
          <label
            *ngIf="item.hide !== false"
            nz-radio
            [formlyAttributes]="{ props: item }"
            [nzDisabled]="item.disabled"
            [nzValue]="item.value"
          >
            <i *ngIf="item.beforeIcon" nz-icon [nzType]="item.beforeIcon"></i>
            {{ item.label }}
            <i *ngIf="item.afterIcon" nz-icon [nzType]="item.afterIcon"></i>
          </label>
        </ng-container>
      </ng-container>

      <ng-template #buttonTemplate>
        <ng-container *ngFor="let item of props.options | toAsync: $any(props) | async | defaultify: []">
          <label
            *ngIf="item.hide !== false"
            nz-radio-button
            [formlyAttributes]="{ props: item }"
            [nzDisabled]="item.disabled"
            [nzValue]="item.value"
          >
            <i *ngIf="item.beforeIcon" nz-icon [nzType]="item.beforeIcon"></i>
            <ng-container *ngIf="labelTemplate; else strLabelTpl">
              <ng-container *nzStringTemplateOutlet="labelTemplate; context: { $implicit: item, field: field }">
                <span>{{ labelTemplate }}</span>
              </ng-container>
            </ng-container>

            <ng-template #strLabelTpl>
              <span>{{ item.label }}</span>
            </ng-template>
            <i *ngIf="item.afterIcon" nz-icon [nzType]="item.afterIcon"></i>
          </label>
        </ng-container>
      </ng-template>
    </nz-radio-group>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i4.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus"], exportAs: ["nzRadio"] }, { kind: "directive", type: i4.NzRadioButtonDirective, selector: "[nz-radio-button]" }, { kind: "component", type: i4.NzRadioGroupComponent, selector: "nz-radio-group", inputs: ["nzDisabled", "nzButtonStyle", "nzSize", "nzName"], exportAs: ["nzRadioGroup"] }, { kind: "directive", type: i5.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i6.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i7.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { kind: "directive", type: i8.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "pipe", type: i9.DefaultifyPipe, name: "defaultify" }, { kind: "pipe", type: i9.ToAsyncPipe, name: "toAsync" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldRadioComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-radio-component',
                    template: `
    <nz-radio-group
      [formControl]="$any(formControl)"
      [formlyAttributes]="field"
      [nzName]="props.nzName"
      [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
      [nzSize]="props.nzSize"
      [nzButtonStyle]="props.nzButtonStyle"
      ngDefaultControl
    >
      <ng-container *ngIf="props.type !== 'button'; else buttonTemplate">
        <ng-container *ngFor="let item of props.options | toAsync: $any(props) | async">
          <label
            *ngIf="item.hide !== false"
            nz-radio
            [formlyAttributes]="{ props: item }"
            [nzDisabled]="item.disabled"
            [nzValue]="item.value"
          >
            <i *ngIf="item.beforeIcon" nz-icon [nzType]="item.beforeIcon"></i>
            {{ item.label }}
            <i *ngIf="item.afterIcon" nz-icon [nzType]="item.afterIcon"></i>
          </label>
        </ng-container>
      </ng-container>

      <ng-template #buttonTemplate>
        <ng-container *ngFor="let item of props.options | toAsync: $any(props) | async | defaultify: []">
          <label
            *ngIf="item.hide !== false"
            nz-radio-button
            [formlyAttributes]="{ props: item }"
            [nzDisabled]="item.disabled"
            [nzValue]="item.value"
          >
            <i *ngIf="item.beforeIcon" nz-icon [nzType]="item.beforeIcon"></i>
            <ng-container *ngIf="labelTemplate; else strLabelTpl">
              <ng-container *nzStringTemplateOutlet="labelTemplate; context: { $implicit: item, field: field }">
                <span>{{ labelTemplate }}</span>
              </ng-container>
            </ng-container>

            <ng-template #strLabelTpl>
              <span>{{ item.label }}</span>
            </ng-template>
            <i *ngIf="item.afterIcon" nz-icon [nzType]="item.afterIcon"></i>
          </label>
        </ng-container>
      </ng-template>
    </nz-radio-group>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL3JhZGlvL3JhZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFzQixjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7Ozs7QUF5RGxGLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxTQUFTO0lBS3ZCO0lBSnRCLGNBQWMsR0FBRztRQUN4QixLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7S0FDMUMsQ0FBQztJQUVGLFlBQStCLGNBQWtDO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBRHFCLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtJQUVqRSxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7d0dBWFUseUJBQXlCOzRGQUF6Qix5QkFBeUIsd0ZBckQxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrRFQ7OzRGQUdVLHlCQUF5QjtrQkF2RHJDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtEVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OzBCQU1jLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWx5Qm94VGVtcGxhdGVzLCByZXNvbHZlVHBsTmFtZSB9IGZyb20gJ0BmcmVlemVzb3VsL256LWZvcm1seS9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1mb3JtbHktcmFkaW8tY29tcG9uZW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG56LXJhZGlvLWdyb3VwXHJcbiAgICAgIFtmb3JtQ29udHJvbF09XCIkYW55KGZvcm1Db250cm9sKVwiXHJcbiAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgW256TmFtZV09XCJwcm9wcy5uek5hbWVcIlxyXG4gICAgICBbbnpEaXNhYmxlZF09XCJwcm9wcy5uekRpc2FibGVkIHx8IHByb3BzLmRpc2FibGVkIHx8IGZvcm1Db250cm9sPy5kaXNhYmxlZFwiXHJcbiAgICAgIFtuelNpemVdPVwicHJvcHMubnpTaXplXCJcclxuICAgICAgW256QnV0dG9uU3R5bGVdPVwicHJvcHMubnpCdXR0b25TdHlsZVwiXHJcbiAgICAgIG5nRGVmYXVsdENvbnRyb2xcclxuICAgID5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInByb3BzLnR5cGUgIT09ICdidXR0b24nOyBlbHNlIGJ1dHRvblRlbXBsYXRlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBwcm9wcy5vcHRpb25zIHwgdG9Bc3luYzogJGFueShwcm9wcykgfCBhc3luY1wiPlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICpuZ0lmPVwiaXRlbS5oaWRlICE9PSBmYWxzZVwiXHJcbiAgICAgICAgICAgIG56LXJhZGlvXHJcbiAgICAgICAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cInsgcHJvcHM6IGl0ZW0gfVwiXHJcbiAgICAgICAgICAgIFtuekRpc2FibGVkXT1cIml0ZW0uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICBbbnpWYWx1ZV09XCJpdGVtLnZhbHVlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGkgKm5nSWY9XCJpdGVtLmJlZm9yZUljb25cIiBuei1pY29uIFtuelR5cGVdPVwiaXRlbS5iZWZvcmVJY29uXCI+PC9pPlxyXG4gICAgICAgICAgICB7eyBpdGVtLmxhYmVsIH19XHJcbiAgICAgICAgICAgIDxpICpuZ0lmPVwiaXRlbS5hZnRlckljb25cIiBuei1pY29uIFtuelR5cGVdPVwiaXRlbS5hZnRlckljb25cIj48L2k+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjYnV0dG9uVGVtcGxhdGU+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBwcm9wcy5vcHRpb25zIHwgdG9Bc3luYzogJGFueShwcm9wcykgfCBhc3luYyB8IGRlZmF1bHRpZnk6IFtdXCI+XHJcbiAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgKm5nSWY9XCJpdGVtLmhpZGUgIT09IGZhbHNlXCJcclxuICAgICAgICAgICAgbnotcmFkaW8tYnV0dG9uXHJcbiAgICAgICAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cInsgcHJvcHM6IGl0ZW0gfVwiXHJcbiAgICAgICAgICAgIFtuekRpc2FibGVkXT1cIml0ZW0uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICBbbnpWYWx1ZV09XCJpdGVtLnZhbHVlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGkgKm5nSWY9XCJpdGVtLmJlZm9yZUljb25cIiBuei1pY29uIFtuelR5cGVdPVwiaXRlbS5iZWZvcmVJY29uXCI+PC9pPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGFiZWxUZW1wbGF0ZTsgZWxzZSBzdHJMYWJlbFRwbFwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJsYWJlbFRlbXBsYXRlOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogaXRlbSwgZmllbGQ6IGZpZWxkIH1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IGxhYmVsVGVtcGxhdGUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNzdHJMYWJlbFRwbD5cclxuICAgICAgICAgICAgICA8c3Bhbj57eyBpdGVtLmxhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8aSAqbmdJZj1cIml0ZW0uYWZ0ZXJJY29uXCIgbnotaWNvbiBbbnpUeXBlXT1cIml0ZW0uYWZ0ZXJJY29uXCI+PC9pPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbnotcmFkaW8tZ3JvdXA+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWx5RmllbGRSYWRpb0NvbXBvbmVudCBleHRlbmRzIEZpZWxkVHlwZSB7XHJcbiAgb3ZlcnJpZGUgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBwcm9wczogeyBuelNpemU6ICdkZWZhdWx0Jywgb3B0aW9uczogW10gfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyBmaWVsZFRlbXBsYXRlczogRm9ybWx5Qm94VGVtcGxhdGVzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxhYmVsVGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ2xhYmVsVGVtcGxhdGUnKTtcclxuICB9XHJcbn1cclxuIl19