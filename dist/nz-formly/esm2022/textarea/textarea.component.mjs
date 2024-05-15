import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/input";
import * as i4 from "@ngx-formly/core";
export class FormlyFieldTextareaComponent extends FieldType {
    defaultOptions = {
        props: { nzComputeCharacterCount: (v) => v.length, nzAutosize: false, nzSize: 'default', rows: 2 }
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTextareaComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldTextareaComponent, selector: "nz-formly-textarea", usesInheritance: true, ngImport: i0, template: `
    <nz-textarea-count
      *ngIf="props.nzMaxCharacterCount != null; else templateRef"
      [nzMaxCharacterCount]="props.nzMaxCharacterCount"
      [nzComputeCharacterCount]="props.nzComputeCharacterCount"
    >
      <textarea
        nz-input
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [rows]="props.rows"
        [attr.placeholder]="props.placeholder"
        [nzAutosize]="props.nzAutosize"
        [nzBorderless]="props.nzBorderless"
        [nzSize]="props.nzSize"
        maxlength=""
      ></textarea>
    </nz-textarea-count>

    <ng-template #templateRef>
      <textarea
        nz-input
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [rows]="props.rows"
        [attr.placeholder]="props.placeholder || ''"
        [nzAutosize]="props.nzAutosize == null ? false : props.nzAutosize"
        [nzBorderless]="props.nzBorderless"
        [nzSize]="props.nzSize"
        maxlength=""
      ></textarea>
    </ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.NzTextareaCountComponent, selector: "nz-textarea-count", inputs: ["nzMaxCharacterCount", "nzComputeCharacterCount", "nzFormatter"] }, { kind: "directive", type: i3.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStepperless", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "directive", type: i3.NzAutosizeDirective, selector: "textarea[nzAutosize]", inputs: ["nzAutosize"], exportAs: ["nzAutosize"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTextareaComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-textarea',
                    template: `
    <nz-textarea-count
      *ngIf="props.nzMaxCharacterCount != null; else templateRef"
      [nzMaxCharacterCount]="props.nzMaxCharacterCount"
      [nzComputeCharacterCount]="props.nzComputeCharacterCount"
    >
      <textarea
        nz-input
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [rows]="props.rows"
        [attr.placeholder]="props.placeholder"
        [nzAutosize]="props.nzAutosize"
        [nzBorderless]="props.nzBorderless"
        [nzSize]="props.nzSize"
        maxlength=""
      ></textarea>
    </nz-textarea-count>

    <ng-template #templateRef>
      <textarea
        nz-input
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [rows]="props.rows"
        [attr.placeholder]="props.placeholder || ''"
        [nzAutosize]="props.nzAutosize == null ? false : props.nzAutosize"
        [nzBorderless]="props.nzBorderless"
        [nzSize]="props.nzSize"
        maxlength=""
      ></textarea>
    </ng-template>
  `
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7O0FBc0M3QyxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsU0FBUztJQUNoRCxjQUFjLEdBQUc7UUFDeEIsS0FBSyxFQUFFLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7S0FDM0csQ0FBQzt3R0FIUyw0QkFBNEI7NEZBQTVCLDRCQUE0QixpRkFsQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdDVDs7NEZBRVUsNEJBQTRCO2tCQXBDeEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0NUO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1mb3JtbHktdGV4dGFyZWEnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bnotdGV4dGFyZWEtY291bnRcclxuICAgICAgKm5nSWY9XCJwcm9wcy5uek1heENoYXJhY3RlckNvdW50ICE9IG51bGw7IGVsc2UgdGVtcGxhdGVSZWZcIlxyXG4gICAgICBbbnpNYXhDaGFyYWN0ZXJDb3VudF09XCJwcm9wcy5uek1heENoYXJhY3RlckNvdW50XCJcclxuICAgICAgW256Q29tcHV0ZUNoYXJhY3RlckNvdW50XT1cInByb3BzLm56Q29tcHV0ZUNoYXJhY3RlckNvdW50XCJcclxuICAgID5cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgbnotaW5wdXRcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiJGFueShmb3JtQ29udHJvbClcIlxyXG4gICAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgICBbcm93c109XCJwcm9wcy5yb3dzXCJcclxuICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwcm9wcy5wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW256QXV0b3NpemVdPVwicHJvcHMubnpBdXRvc2l6ZVwiXHJcbiAgICAgICAgW256Qm9yZGVybGVzc109XCJwcm9wcy5uekJvcmRlcmxlc3NcIlxyXG4gICAgICAgIFtuelNpemVdPVwicHJvcHMubnpTaXplXCJcclxuICAgICAgICBtYXhsZW5ndGg9XCJcIlxyXG4gICAgICA+PC90ZXh0YXJlYT5cclxuICAgIDwvbnotdGV4dGFyZWEtY291bnQ+XHJcblxyXG4gICAgPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZVJlZj5cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgbnotaW5wdXRcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiJGFueShmb3JtQ29udHJvbClcIlxyXG4gICAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgICBbcm93c109XCJwcm9wcy5yb3dzXCJcclxuICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJwcm9wcy5wbGFjZWhvbGRlciB8fCAnJ1wiXHJcbiAgICAgICAgW256QXV0b3NpemVdPVwicHJvcHMubnpBdXRvc2l6ZSA9PSBudWxsID8gZmFsc2UgOiBwcm9wcy5uekF1dG9zaXplXCJcclxuICAgICAgICBbbnpCb3JkZXJsZXNzXT1cInByb3BzLm56Qm9yZGVybGVzc1wiXHJcbiAgICAgICAgW256U2l6ZV09XCJwcm9wcy5uelNpemVcIlxyXG4gICAgICAgIG1heGxlbmd0aD1cIlwiXHJcbiAgICAgID48L3RleHRhcmVhPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZFRleHRhcmVhQ29tcG9uZW50IGV4dGVuZHMgRmllbGRUeXBlIHtcclxuICBvdmVycmlkZSBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIHByb3BzOiB7IG56Q29tcHV0ZUNoYXJhY3RlckNvdW50OiAodjogc3RyaW5nKSA9PiB2Lmxlbmd0aCwgbnpBdXRvc2l6ZTogZmFsc2UsIG56U2l6ZTogJ2RlZmF1bHQnLCByb3dzOiAyIH1cclxuICB9O1xyXG59XHJcbiJdfQ==