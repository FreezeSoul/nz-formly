import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName, hasTplNameValue } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "ng-zorro-antd/input";
import * as i5 from "ng-zorro-antd/input-number";
import * as i6 from "ng-zorro-antd/core/outlet";
import * as i7 from "@ngx-formly/core";
import * as i8 from "ng-zorro-antd/auto-complete";
import * as i9 from "@freezesoul/nzx-antd/pipe";
export class FormlyFieldInputComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: {
            step: 1,
            enableHTML: false,
            nzDefaultActiveFirstOption: true,
            nzPrecisionMode: 'toFixed',
            filterFn: (item, query) => (query == null ? true : item.label.indexOf(query) > -1),
            compareWith: (o1, o2) => o1 === o2
        }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get hasAddon() {
        return (hasTplNameValue(this.props, 'nzAddOnAfter') ||
            hasTplNameValue(this.props, 'nzAddOnBefore') ||
            hasTplNameValue(this.props, 'nzPrefix') ||
            hasTplNameValue(this.props, 'nzSuffix') ||
            this.props.nzCompact === true ||
            this.props.nzSearch === true);
    }
    get nzAddOnAfter() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzAddOnAfter');
    }
    get nzAddOnBefore() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzAddOnBefore');
    }
    get nzPrefix() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzPrefix');
    }
    get nzSuffix() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzSuffix');
    }
    get content() {
        return resolveTplName(this.props, this.fieldTemplates, 'content');
    }
    get labelTemplate() {
        return resolveTplName(this.props, this.fieldTemplates, 'labelTemplate');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldInputComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldInputComponent, selector: "nz-formly-input", usesInheritance: true, ngImport: i0, template: `
    <nz-input-group
      *ngIf="hasAddon; else inputTemplate"
      [nzSize]="props.nzSize"
      [nzSearch]="props.nzSearch"
      [nzAddOnAfter]="nzAddOnAfter"
      [nzAddOnBefore]="nzAddOnBefore"
      [nzPrefix]="nzPrefix"
      [nzAddOnAfterIcon]="props.nzAddOnAfterIcon"
      [nzAddOnBeforeIcon]="props.nzAddOnBeforeIcon"
      [nzPrefixIcon]="props.nzPrefixIcon"
      [nzSuffix]="nzSuffix"
      [nzSuffixIcon]="props.nzSuffixIcon"
      [nzCompact]="props.nzCompact === true"
    >
      <ng-container *ngIf="props.showInput !== false">
        <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
      </ng-container>
      <ng-container *nzStringTemplateOutlet="content; context: { $implicit: field, options: props }">
        <div [innerHTML]="content"></div>
      </ng-container>
    </nz-input-group>

    <ng-template #inputTemplate>
      <ng-container *ngIf="props.type !== 'number'; else numberTmp">
        <input
          *ngIf="!props.nzAutocomplete; else autoCompleteTemplate"
          nz-input
          autocomplete="off"
          [formControl]="$any(formControl)"
          [type]="props.type || 'text'"
          [formlyAttributes]="field"
          [nzBorderless]="props.nzBorderless"
          [nzStatus]="props.nzStatus"
          [nzSize]="props.nzSize"
          [disabled]="props.nzDisabled || props.disabled || formControl?.disabled"
          maxlength=""
          ngDefaultControl
        />
      </ng-container>
    </ng-template>

    <ng-template #autoCompleteTemplate>
      <input
        nz-input
        autocomplete="off"
        [formControl]="$any(formControl)"
        [type]="props.type || 'text'"
        [formlyAttributes]="field"
        [nzSize]="props.nzSize"
        [nzAutocomplete]="auto"
        [nzBorderless]="props.nzBorderless"
        [nzStatus]="props.nzStatus"
        [disabled]="props.nzDisabled || props.disabled || formControl?.disabled"
        maxlength=""
        ngDefaultControl
      />
    </ng-template>

    <ng-template #numberTmp>
      <nz-input-number
        #instance
        style="width: 100%"
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [nzMin]="props.min"
        [nzMax]="props.max"
        [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
        [nzPrecision]="props.nzPrecision"
        [nzPrecisionMode]="props.nzPrecisionMode"
        [nzSize]="props.nzSize"
        [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
        [nzStep]="props.step"
        [nzStatus]="props.nzStatus"
        [nzReadOnly]="props.nzReadOnly || props.readOnly"
        (nzFocus)="props.nzFocus?.($event, field, instance)"
        (nzBlur)="props.nzBlur?.($event, field, instance)"
        ngDefaultControl
      ></nz-input-number>
    </ng-template>

    <nz-autocomplete
      #auto
      [nzBackfill]="props.nzBackfill"
      [nzDefaultActiveFirstOption]="props.nzDefaultActiveFirstOption"
      [nzWidth]="props.nzWidth"
      [nzOverlayClassName]="props.nzOverlayClassName"
      [nzOverlayStyle]="props.nzOverlayStyle"
      [compareWith]="props.compareWith"
    >
      <ng-container
        *ngFor="let item of props.options | toAsync: $any(props) | async | filter: props.filterFn:formControl?.value"
      >
        <nz-auto-option *ngIf="item.hide !== false" [nzValue]="item.value" [nzDisabled]="item.disabled">
          <ng-container *ngIf="labelTemplate; else strLabelTpl">
            <ng-container *nzStringTemplateOutlet="labelTemplate; context: { $implicit: item, field: field }">
              <span>{{ labelTemplate }}</span>
            </ng-container>
          </ng-container>

          <ng-template #strLabelTpl>
            <span>{{ item.label }}</span>
          </ng-template>
        </nz-auto-option>
      </ng-container>
    </nz-autocomplete>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i4.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStepperless", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "component", type: i4.NzInputGroupComponent, selector: "nz-input-group", inputs: ["nzAddOnBeforeIcon", "nzAddOnAfterIcon", "nzPrefixIcon", "nzSuffixIcon", "nzAddOnBefore", "nzAddOnAfter", "nzPrefix", "nzStatus", "nzSuffix", "nzSize", "nzSearch", "nzCompact"], exportAs: ["nzInputGroup"] }, { kind: "directive", type: i4.NzInputGroupWhitSuffixOrPrefixDirective, selector: "nz-input-group[nzSuffix], nz-input-group[nzPrefix]" }, { kind: "component", type: i5.NzInputNumberComponent, selector: "nz-input-number", inputs: ["nzSize", "nzMin", "nzMax", "nzParser", "nzPrecision", "nzPrecisionMode", "nzPlaceHolder", "nzStatus", "nzStep", "nzInputMode", "nzId", "nzDisabled", "nzReadOnly", "nzAutoFocus", "nzBorderless", "nzFormatter"], outputs: ["nzBlur", "nzFocus"], exportAs: ["nzInputNumber"] }, { kind: "directive", type: i6.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i7.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { kind: "component", type: i8.NzAutocompleteComponent, selector: "nz-autocomplete", inputs: ["nzWidth", "nzOverlayClassName", "nzOverlayStyle", "nzDefaultActiveFirstOption", "nzBackfill", "compareWith", "nzDataSource"], outputs: ["selectionChange"], exportAs: ["nzAutocomplete"] }, { kind: "component", type: i8.NzAutocompleteOptionComponent, selector: "nz-auto-option", inputs: ["nzValue", "nzLabel", "nzDisabled"], outputs: ["selectionChange", "mouseEntered"], exportAs: ["nzAutoOption"] }, { kind: "directive", type: i8.NzAutocompleteTriggerDirective, selector: "input[nzAutocomplete], textarea[nzAutocomplete]", inputs: ["nzAutocomplete"], exportAs: ["nzAutocompleteTrigger"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "pipe", type: i9.ToAsyncPipe, name: "toAsync" }, { kind: "pipe", type: i9.FilterPipe, name: "filter" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-input',
                    template: `
    <nz-input-group
      *ngIf="hasAddon; else inputTemplate"
      [nzSize]="props.nzSize"
      [nzSearch]="props.nzSearch"
      [nzAddOnAfter]="nzAddOnAfter"
      [nzAddOnBefore]="nzAddOnBefore"
      [nzPrefix]="nzPrefix"
      [nzAddOnAfterIcon]="props.nzAddOnAfterIcon"
      [nzAddOnBeforeIcon]="props.nzAddOnBeforeIcon"
      [nzPrefixIcon]="props.nzPrefixIcon"
      [nzSuffix]="nzSuffix"
      [nzSuffixIcon]="props.nzSuffixIcon"
      [nzCompact]="props.nzCompact === true"
    >
      <ng-container *ngIf="props.showInput !== false">
        <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
      </ng-container>
      <ng-container *nzStringTemplateOutlet="content; context: { $implicit: field, options: props }">
        <div [innerHTML]="content"></div>
      </ng-container>
    </nz-input-group>

    <ng-template #inputTemplate>
      <ng-container *ngIf="props.type !== 'number'; else numberTmp">
        <input
          *ngIf="!props.nzAutocomplete; else autoCompleteTemplate"
          nz-input
          autocomplete="off"
          [formControl]="$any(formControl)"
          [type]="props.type || 'text'"
          [formlyAttributes]="field"
          [nzBorderless]="props.nzBorderless"
          [nzStatus]="props.nzStatus"
          [nzSize]="props.nzSize"
          [disabled]="props.nzDisabled || props.disabled || formControl?.disabled"
          maxlength=""
          ngDefaultControl
        />
      </ng-container>
    </ng-template>

    <ng-template #autoCompleteTemplate>
      <input
        nz-input
        autocomplete="off"
        [formControl]="$any(formControl)"
        [type]="props.type || 'text'"
        [formlyAttributes]="field"
        [nzSize]="props.nzSize"
        [nzAutocomplete]="auto"
        [nzBorderless]="props.nzBorderless"
        [nzStatus]="props.nzStatus"
        [disabled]="props.nzDisabled || props.disabled || formControl?.disabled"
        maxlength=""
        ngDefaultControl
      />
    </ng-template>

    <ng-template #numberTmp>
      <nz-input-number
        #instance
        style="width: 100%"
        [formControl]="$any(formControl)"
        [formlyAttributes]="field"
        [nzMin]="props.min"
        [nzMax]="props.max"
        [nzDisabled]="props.nzDisabled || props.disabled || formControl?.disabled"
        [nzPrecision]="props.nzPrecision"
        [nzPrecisionMode]="props.nzPrecisionMode"
        [nzSize]="props.nzSize"
        [nzPlaceHolder]="props.nzPlaceHolder || props.placeholder"
        [nzStep]="props.step"
        [nzStatus]="props.nzStatus"
        [nzReadOnly]="props.nzReadOnly || props.readOnly"
        (nzFocus)="props.nzFocus?.($event, field, instance)"
        (nzBlur)="props.nzBlur?.($event, field, instance)"
        ngDefaultControl
      ></nz-input-number>
    </ng-template>

    <nz-autocomplete
      #auto
      [nzBackfill]="props.nzBackfill"
      [nzDefaultActiveFirstOption]="props.nzDefaultActiveFirstOption"
      [nzWidth]="props.nzWidth"
      [nzOverlayClassName]="props.nzOverlayClassName"
      [nzOverlayStyle]="props.nzOverlayStyle"
      [compareWith]="props.compareWith"
    >
      <ng-container
        *ngFor="let item of props.options | toAsync: $any(props) | async | filter: props.filterFn:formControl?.value"
      >
        <nz-auto-option *ngIf="item.hide !== false" [nzValue]="item.value" [nzDisabled]="item.disabled">
          <ng-container *ngIf="labelTemplate; else strLabelTpl">
            <ng-container *nzStringTemplateOutlet="labelTemplate; context: { $implicit: item, field: field }">
              <span>{{ labelTemplate }}</span>
            </ng-container>
          </ng-container>

          <ng-template #strLabelTpl>
            <span>{{ item.label }}</span>
          </ng-template>
        </nz-auto-option>
      </ng-container>
    </nz-autocomplete>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFzQixjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7O0FBa0huRyxNQUFNLE9BQU8seUJBQTBCLFNBQVEsU0FBUztJQVl2QjtJQVh0QixjQUFjLEdBQUc7UUFDeEIsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLENBQUM7WUFDUCxVQUFVLEVBQUUsS0FBSztZQUNqQiwwQkFBMEIsRUFBRSxJQUFJO1lBQ2hDLGVBQWUsRUFBRSxTQUFTO1lBQzFCLFFBQVEsRUFBRSxDQUFDLElBQWUsRUFBRSxLQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyRyxXQUFXLEVBQUUsQ0FBQyxFQUFhLEVBQUUsRUFBYSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRTtTQUN6RDtLQUNGLENBQUM7SUFFRixZQUErQixjQUFrQztRQUMvRCxLQUFLLEVBQUUsQ0FBQztRQURxQixtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7SUFFakUsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sQ0FDTCxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUM7WUFDM0MsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDO1lBQzVDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQztZQUN2QyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUM7WUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssSUFBSTtZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQzdCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUMxRSxDQUFDO3dHQWhEVSx5QkFBeUI7NEZBQXpCLHlCQUF5Qiw4RUE3RzFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEdUOzs0RkFHVSx5QkFBeUI7a0JBL0dyQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBHVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OzBCQWFjLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWx5Qm94VGVtcGxhdGVzLCByZXNvbHZlVHBsTmFtZSwgaGFzVHBsTmFtZVZhbHVlIH0gZnJvbSAnQGZyZWV6ZXNvdWwvbnotZm9ybWx5L2NvbW1vbic7XHJcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWZvcm1seS1pbnB1dCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuei1pbnB1dC1ncm91cFxyXG4gICAgICAqbmdJZj1cImhhc0FkZG9uOyBlbHNlIGlucHV0VGVtcGxhdGVcIlxyXG4gICAgICBbbnpTaXplXT1cInByb3BzLm56U2l6ZVwiXHJcbiAgICAgIFtuelNlYXJjaF09XCJwcm9wcy5uelNlYXJjaFwiXHJcbiAgICAgIFtuekFkZE9uQWZ0ZXJdPVwibnpBZGRPbkFmdGVyXCJcclxuICAgICAgW256QWRkT25CZWZvcmVdPVwibnpBZGRPbkJlZm9yZVwiXHJcbiAgICAgIFtuelByZWZpeF09XCJuelByZWZpeFwiXHJcbiAgICAgIFtuekFkZE9uQWZ0ZXJJY29uXT1cInByb3BzLm56QWRkT25BZnRlckljb25cIlxyXG4gICAgICBbbnpBZGRPbkJlZm9yZUljb25dPVwicHJvcHMubnpBZGRPbkJlZm9yZUljb25cIlxyXG4gICAgICBbbnpQcmVmaXhJY29uXT1cInByb3BzLm56UHJlZml4SWNvblwiXHJcbiAgICAgIFtuelN1ZmZpeF09XCJuelN1ZmZpeFwiXHJcbiAgICAgIFtuelN1ZmZpeEljb25dPVwicHJvcHMubnpTdWZmaXhJY29uXCJcclxuICAgICAgW256Q29tcGFjdF09XCJwcm9wcy5uekNvbXBhY3QgPT09IHRydWVcIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicHJvcHMuc2hvd0lucHV0ICE9PSBmYWxzZVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpbnB1dFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudDsgY29udGV4dDogeyAkaW1wbGljaXQ6IGZpZWxkLCBvcHRpb25zOiBwcm9wcyB9XCI+XHJcbiAgICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cImNvbnRlbnRcIj48L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L256LWlucHV0LWdyb3VwPlxyXG5cclxuICAgIDxuZy10ZW1wbGF0ZSAjaW5wdXRUZW1wbGF0ZT5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInByb3BzLnR5cGUgIT09ICdudW1iZXInOyBlbHNlIG51bWJlclRtcFwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgKm5nSWY9XCIhcHJvcHMubnpBdXRvY29tcGxldGU7IGVsc2UgYXV0b0NvbXBsZXRlVGVtcGxhdGVcIlxyXG4gICAgICAgICAgbnotaW5wdXRcclxuICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiJGFueShmb3JtQ29udHJvbClcIlxyXG4gICAgICAgICAgW3R5cGVdPVwicHJvcHMudHlwZSB8fCAndGV4dCdcIlxyXG4gICAgICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICAgICAgW256Qm9yZGVybGVzc109XCJwcm9wcy5uekJvcmRlcmxlc3NcIlxyXG4gICAgICAgICAgW256U3RhdHVzXT1cInByb3BzLm56U3RhdHVzXCJcclxuICAgICAgICAgIFtuelNpemVdPVwicHJvcHMubnpTaXplXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJwcm9wcy5uekRpc2FibGVkIHx8IHByb3BzLmRpc2FibGVkIHx8IGZvcm1Db250cm9sPy5kaXNhYmxlZFwiXHJcbiAgICAgICAgICBtYXhsZW5ndGg9XCJcIlxyXG4gICAgICAgICAgbmdEZWZhdWx0Q29udHJvbFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICA8bmctdGVtcGxhdGUgI2F1dG9Db21wbGV0ZVRlbXBsYXRlPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBuei1pbnB1dFxyXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cIiRhbnkoZm9ybUNvbnRyb2wpXCJcclxuICAgICAgICBbdHlwZV09XCJwcm9wcy50eXBlIHx8ICd0ZXh0J1wiXHJcbiAgICAgICAgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIlxyXG4gICAgICAgIFtuelNpemVdPVwicHJvcHMubnpTaXplXCJcclxuICAgICAgICBbbnpBdXRvY29tcGxldGVdPVwiYXV0b1wiXHJcbiAgICAgICAgW256Qm9yZGVybGVzc109XCJwcm9wcy5uekJvcmRlcmxlc3NcIlxyXG4gICAgICAgIFtuelN0YXR1c109XCJwcm9wcy5uelN0YXR1c1wiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cInByb3BzLm56RGlzYWJsZWQgfHwgcHJvcHMuZGlzYWJsZWQgfHwgZm9ybUNvbnRyb2w/LmRpc2FibGVkXCJcclxuICAgICAgICBtYXhsZW5ndGg9XCJcIlxyXG4gICAgICAgIG5nRGVmYXVsdENvbnRyb2xcclxuICAgICAgLz5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPG5nLXRlbXBsYXRlICNudW1iZXJUbXA+XHJcbiAgICAgIDxuei1pbnB1dC1udW1iZXJcclxuICAgICAgICAjaW5zdGFuY2VcclxuICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcclxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiJGFueShmb3JtQ29udHJvbClcIlxyXG4gICAgICAgIFtmb3JtbHlBdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgICBbbnpNaW5dPVwicHJvcHMubWluXCJcclxuICAgICAgICBbbnpNYXhdPVwicHJvcHMubWF4XCJcclxuICAgICAgICBbbnpEaXNhYmxlZF09XCJwcm9wcy5uekRpc2FibGVkIHx8IHByb3BzLmRpc2FibGVkIHx8IGZvcm1Db250cm9sPy5kaXNhYmxlZFwiXHJcbiAgICAgICAgW256UHJlY2lzaW9uXT1cInByb3BzLm56UHJlY2lzaW9uXCJcclxuICAgICAgICBbbnpQcmVjaXNpb25Nb2RlXT1cInByb3BzLm56UHJlY2lzaW9uTW9kZVwiXHJcbiAgICAgICAgW256U2l6ZV09XCJwcm9wcy5uelNpemVcIlxyXG4gICAgICAgIFtuelBsYWNlSG9sZGVyXT1cInByb3BzLm56UGxhY2VIb2xkZXIgfHwgcHJvcHMucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFtuelN0ZXBdPVwicHJvcHMuc3RlcFwiXHJcbiAgICAgICAgW256U3RhdHVzXT1cInByb3BzLm56U3RhdHVzXCJcclxuICAgICAgICBbbnpSZWFkT25seV09XCJwcm9wcy5uelJlYWRPbmx5IHx8IHByb3BzLnJlYWRPbmx5XCJcclxuICAgICAgICAobnpGb2N1cyk9XCJwcm9wcy5uekZvY3VzPy4oJGV2ZW50LCBmaWVsZCwgaW5zdGFuY2UpXCJcclxuICAgICAgICAobnpCbHVyKT1cInByb3BzLm56Qmx1cj8uKCRldmVudCwgZmllbGQsIGluc3RhbmNlKVwiXHJcbiAgICAgICAgbmdEZWZhdWx0Q29udHJvbFxyXG4gICAgICA+PC9uei1pbnB1dC1udW1iZXI+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgIDxuei1hdXRvY29tcGxldGVcclxuICAgICAgI2F1dG9cclxuICAgICAgW256QmFja2ZpbGxdPVwicHJvcHMubnpCYWNrZmlsbFwiXHJcbiAgICAgIFtuekRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbl09XCJwcm9wcy5uekRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvblwiXHJcbiAgICAgIFtueldpZHRoXT1cInByb3BzLm56V2lkdGhcIlxyXG4gICAgICBbbnpPdmVybGF5Q2xhc3NOYW1lXT1cInByb3BzLm56T3ZlcmxheUNsYXNzTmFtZVwiXHJcbiAgICAgIFtuek92ZXJsYXlTdHlsZV09XCJwcm9wcy5uek92ZXJsYXlTdHlsZVwiXHJcbiAgICAgIFtjb21wYXJlV2l0aF09XCJwcm9wcy5jb21wYXJlV2l0aFwiXHJcbiAgICA+XHJcbiAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBwcm9wcy5vcHRpb25zIHwgdG9Bc3luYzogJGFueShwcm9wcykgfCBhc3luYyB8IGZpbHRlcjogcHJvcHMuZmlsdGVyRm46Zm9ybUNvbnRyb2w/LnZhbHVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxuei1hdXRvLW9wdGlvbiAqbmdJZj1cIml0ZW0uaGlkZSAhPT0gZmFsc2VcIiBbbnpWYWx1ZV09XCJpdGVtLnZhbHVlXCIgW256RGlzYWJsZWRdPVwiaXRlbS5kaXNhYmxlZFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxhYmVsVGVtcGxhdGU7IGVsc2Ugc3RyTGFiZWxUcGxcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImxhYmVsVGVtcGxhdGU7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBpdGVtLCBmaWVsZDogZmllbGQgfVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt7IGxhYmVsVGVtcGxhdGUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNzdHJMYWJlbFRwbD5cclxuICAgICAgICAgICAgPHNwYW4+e3sgaXRlbS5sYWJlbCB9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9uei1hdXRvLW9wdGlvbj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L256LWF1dG9jb21wbGV0ZT5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZElucHV0Q29tcG9uZW50IGV4dGVuZHMgRmllbGRUeXBlIHtcclxuICBvdmVycmlkZSBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHN0ZXA6IDEsXHJcbiAgICAgIGVuYWJsZUhUTUw6IGZhbHNlLFxyXG4gICAgICBuekRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjogdHJ1ZSxcclxuICAgICAgbnpQcmVjaXNpb25Nb2RlOiAndG9GaXhlZCcsXHJcbiAgICAgIGZpbHRlckZuOiAoaXRlbTogTnpTYWZlQW55LCBxdWVyeTogc3RyaW5nKSA9PiAocXVlcnkgPT0gbnVsbCA/IHRydWUgOiBpdGVtLmxhYmVsLmluZGV4T2YocXVlcnkpID4gLTEpLFxyXG4gICAgICBjb21wYXJlV2l0aDogKG8xOiBOelNhZmVBbnksIG8yOiBOelNhZmVBbnkpID0+IG8xID09PSBvMlxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyBmaWVsZFRlbXBsYXRlczogRm9ybWx5Qm94VGVtcGxhdGVzKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc0FkZG9uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgaGFzVHBsTmFtZVZhbHVlKHRoaXMucHJvcHMsICduekFkZE9uQWZ0ZXInKSB8fFxyXG4gICAgICBoYXNUcGxOYW1lVmFsdWUodGhpcy5wcm9wcywgJ256QWRkT25CZWZvcmUnKSB8fFxyXG4gICAgICBoYXNUcGxOYW1lVmFsdWUodGhpcy5wcm9wcywgJ256UHJlZml4JykgfHxcclxuICAgICAgaGFzVHBsTmFtZVZhbHVlKHRoaXMucHJvcHMsICduelN1ZmZpeCcpIHx8XHJcbiAgICAgIHRoaXMucHJvcHMubnpDb21wYWN0ID09PSB0cnVlIHx8XHJcbiAgICAgIHRoaXMucHJvcHMubnpTZWFyY2ggPT09IHRydWVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpBZGRPbkFmdGVyKCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICduekFkZE9uQWZ0ZXInKTtcclxuICB9XHJcblxyXG4gIGdldCBuekFkZE9uQmVmb3JlKCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICduekFkZE9uQmVmb3JlJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpQcmVmaXgoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256UHJlZml4Jyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpTdWZmaXgoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ256U3VmZml4Jyk7XHJcbiAgfVxyXG4gIGdldCBjb250ZW50KCkge1xyXG4gICAgcmV0dXJuIHJlc29sdmVUcGxOYW1lKHRoaXMucHJvcHMsIHRoaXMuZmllbGRUZW1wbGF0ZXMsICdjb250ZW50Jyk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGFiZWxUZW1wbGF0ZSgpIHtcclxuICAgIHJldHVybiByZXNvbHZlVHBsTmFtZSh0aGlzLnByb3BzLCB0aGlzLmZpZWxkVGVtcGxhdGVzLCAnbGFiZWxUZW1wbGF0ZScpO1xyXG4gIH1cclxufVxyXG4iXX0=