import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i7 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { hasTplNameValue, resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i4 from 'ng-zorro-antd/input';
import { NzInputModule } from 'ng-zorro-antd/input';
import * as i5 from 'ng-zorro-antd/input-number';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import * as i6 from 'ng-zorro-antd/core/outlet';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import * as i8 from 'ng-zorro-antd/auto-complete';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import * as i9 from '@freezesoul/nzx-antd/pipe';
import { NzxPipeModule } from '@freezesoul/nzx-antd/pipe';

class FormlyFieldInputComponent extends FieldType {
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

const COMPONENT = FormlyFieldInputComponent;
class FormlyNzInputModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzInputModule, declarations: [FormlyFieldInputComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzInputModule,
            NzInputNumberModule,
            NzOutletModule,
            NzxPipeModule, i7.FormlyModule, NzAutocompleteModule,
            NzxPipeModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzInputModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzInputModule,
            NzInputNumberModule,
            NzOutletModule,
            NzxPipeModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'input',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    },
                    {
                        name: 'number',
                        extends: 'input',
                        defaultOptions: {
                            props: {
                                type: 'number'
                            }
                        }
                    },
                    {
                        name: 'autocomplete',
                        extends: 'input',
                        defaultOptions: {
                            props: {
                                nzAutocomplete: true
                            }
                        }
                    }
                ]
            }),
            NzAutocompleteModule,
            NzxPipeModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzInputModule,
                        NzInputNumberModule,
                        NzOutletModule,
                        NzxPipeModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'input',
                                    component: COMPONENT,
                                    wrappers: ['field-wrapper']
                                },
                                {
                                    name: 'number',
                                    extends: 'input',
                                    defaultOptions: {
                                        props: {
                                            type: 'number'
                                        }
                                    }
                                },
                                {
                                    name: 'autocomplete',
                                    extends: 'input',
                                    defaultOptions: {
                                        props: {
                                            nzAutocomplete: true
                                        }
                                    }
                                }
                            ]
                        }),
                        NzAutocompleteModule,
                        NzxPipeModule
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldInputComponent, FormlyNzInputModule };
//# sourceMappingURL=freezesoul-nz-formly-input.mjs.map
