import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/button";
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/core/wave";
import * as i6 from "@ngx-formly/core";
import * as i7 from "ng-zorro-antd/icon";
import * as i8 from "ng-zorro-antd/core/outlet";
export class FormlyFieldRepeatComponent extends FieldArrayType {
    fieldTemplates;
    defaultOptions = {
        props: { showAdd: true, addButton: '添加', maxHeight: '300px' }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get addButton() {
        return resolveTplName(this.props, this.fieldTemplates, 'addButton');
    }
    get removeButton() {
        return resolveTplName(this.props, this.fieldTemplates, 'removeButton');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldRepeatComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldRepeatComponent, selector: "nz-formly-repeat", usesInheritance: true, ngImport: i0, template: `
    <div class="repeat-view" [formlyAttributes]="field" [style.max-height]="props.maxHeight">
      <div *ngFor="let f of field.fieldGroup; let i = index" class="repeat-row">
        <formly-field class="repeat-col" [field]="f"></formly-field>

        <ng-container *nzStringTemplateOutlet="removeButton; context: { $implicit: this, field: f }">
          <button class="repeat-close" type="button" (click)="remove(i)">×</button>
        </ng-container>
      </div>
    </div>

    <div *ngIf="props.showAdd">
      <ng-container *nzStringTemplateOutlet="addButton; context: { $implicit: this, field: field }">
        <button nz-button nzType="primary" type="button" (click)="add()">
          <i nz-icon nzType="plus"></i>
          {{ props.addButton }}
        </button>
      </ng-container>
    </div>
  `, isInline: true, styles: [".repeat-view{overflow:auto}.repeat-row{display:flex;align-items:baseline}.repeat-col{flex:1 0 0}.repeat-close{background-color:transparent;font-size:24px;border:0;opacity:.2;line-height:1;padding:0;color:#000;text-shadow:0 1px 0 #fff;cursor:pointer;margin-left:10px;position:relative;top:2px}.repeat-close:hover{opacity:1;color:#ff4d4f}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: i4.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i5.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { kind: "component", type: i6.FormlyField, selector: "formly-field", inputs: ["field"] }, { kind: "directive", type: i6.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { kind: "directive", type: i7.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i8.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldRepeatComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nz-formly-repeat', template: `
    <div class="repeat-view" [formlyAttributes]="field" [style.max-height]="props.maxHeight">
      <div *ngFor="let f of field.fieldGroup; let i = index" class="repeat-row">
        <formly-field class="repeat-col" [field]="f"></formly-field>

        <ng-container *nzStringTemplateOutlet="removeButton; context: { $implicit: this, field: f }">
          <button class="repeat-close" type="button" (click)="remove(i)">×</button>
        </ng-container>
      </div>
    </div>

    <div *ngIf="props.showAdd">
      <ng-container *nzStringTemplateOutlet="addButton; context: { $implicit: this, field: field }">
        <button nz-button nzType="primary" type="button" (click)="add()">
          <i nz-icon nzType="plus"></i>
          {{ props.addButton }}
        </button>
      </ng-container>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".repeat-view{overflow:auto}.repeat-row{display:flex;align-items:baseline}.repeat-col{flex:1 0 0}.repeat-close{background-color:transparent;font-size:24px;border:0;opacity:.2;line-height:1;padding:0;color:#000;text-shadow:0 1px 0 #fff;cursor:pointer;margin-left:10px;position:relative;top:2px}.repeat-close:hover{opacity:1;color:#ff4d4f}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwZWF0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9yZXBlYXQvcmVwZWF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFzQixjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7OztBQTZEbEYsTUFBTSxPQUFPLDBCQUEyQixTQUFRLGNBQWM7SUFLN0I7SUFKdEIsY0FBYyxHQUFHO1FBQ3hCLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0tBQzlELENBQUM7SUFFRixZQUErQixjQUFrQztRQUMvRCxLQUFLLEVBQUUsQ0FBQztRQURxQixtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7SUFFakUsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7d0dBZlUsMEJBQTBCOzRGQUExQiwwQkFBMEIsK0VBekQzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CVDs7NEZBc0NVLDBCQUEwQjtrQkEzRHRDLFNBQVM7K0JBQ0Usa0JBQWtCLFlBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJULG1CQW9DZ0IsdUJBQXVCLENBQUMsTUFBTTs7MEJBT2xDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZEFycmF5VHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtbHlCb3hUZW1wbGF0ZXMsIHJlc29sdmVUcGxOYW1lIH0gZnJvbSAnQGZyZWV6ZXNvdWwvbnotZm9ybWx5L2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWZvcm1seS1yZXBlYXQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicmVwZWF0LXZpZXdcIiBbZm9ybWx5QXR0cmlidXRlc109XCJmaWVsZFwiIFtzdHlsZS5tYXgtaGVpZ2h0XT1cInByb3BzLm1heEhlaWdodFwiPlxyXG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBmIG9mIGZpZWxkLmZpZWxkR3JvdXA7IGxldCBpID0gaW5kZXhcIiBjbGFzcz1cInJlcGVhdC1yb3dcIj5cclxuICAgICAgICA8Zm9ybWx5LWZpZWxkIGNsYXNzPVwicmVwZWF0LWNvbFwiIFtmaWVsZF09XCJmXCI+PC9mb3JtbHktZmllbGQ+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJyZW1vdmVCdXR0b247IGNvbnRleHQ6IHsgJGltcGxpY2l0OiB0aGlzLCBmaWVsZDogZiB9XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVwZWF0LWNsb3NlXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJyZW1vdmUoaSlcIj7DlzwvYnV0dG9uPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgKm5nSWY9XCJwcm9wcy5zaG93QWRkXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJhZGRCdXR0b247IGNvbnRleHQ6IHsgJGltcGxpY2l0OiB0aGlzLCBmaWVsZDogZmllbGQgfVwiPlxyXG4gICAgICAgIDxidXR0b24gbnotYnV0dG9uIG56VHlwZT1cInByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImFkZCgpXCI+XHJcbiAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cInBsdXNcIj48L2k+XHJcbiAgICAgICAgICB7eyBwcm9wcy5hZGRCdXR0b24gfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAucmVwZWF0LXZpZXcge1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIC5yZXBlYXQtcm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlcGVhdC1jb2wge1xyXG4gICAgICAgIGZsZXg6IDEgMCAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVwZWF0LWNsb3NlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmY7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlcGVhdC1jbG9zZTpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBjb2xvcjogI2ZmNGQ0ZjtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkUmVwZWF0Q29tcG9uZW50IGV4dGVuZHMgRmllbGRBcnJheVR5cGUge1xyXG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgcHJvcHM6IHsgc2hvd0FkZDogdHJ1ZSwgYWRkQnV0dG9uOiAn5re75YqgJywgbWF4SGVpZ2h0OiAnMzAwcHgnIH1cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwdWJsaWMgZmllbGRUZW1wbGF0ZXM6IEZvcm1seUJveFRlbXBsYXRlcykge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGdldCBhZGRCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ2FkZEJ1dHRvbicpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlbW92ZUJ1dHRvbigpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAncmVtb3ZlQnV0dG9uJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==