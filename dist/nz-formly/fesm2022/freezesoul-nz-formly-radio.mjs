import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i7 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as i4 from 'ng-zorro-antd/radio';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import * as i5 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as i6 from 'ng-zorro-antd/core/transition-patch';
import * as i8 from 'ng-zorro-antd/core/outlet';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import * as i9 from '@freezesoul/nzx-antd/pipe';
import { NzxPipeModule } from '@freezesoul/nzx-antd/pipe';
import { NzButtonModule } from 'ng-zorro-antd/button';

class FormlyFieldRadioComponent extends FieldType {
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

const COMPONENT = FormlyFieldRadioComponent;
class FormlyNzRadioModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzRadioModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzRadioModule, declarations: [FormlyFieldRadioComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzRadioModule,
            NzIconModule,
            NzButtonModule,
            NzxPipeModule, i7.FormlyModule, NzOutletModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzRadioModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzRadioModule,
            NzIconModule,
            NzButtonModule,
            NzxPipeModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'radio',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            }),
            NzOutletModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzRadioModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzRadioModule,
                        NzIconModule,
                        NzButtonModule,
                        NzxPipeModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'radio',
                                    component: COMPONENT,
                                    wrappers: ['field-wrapper']
                                }
                            ]
                        }),
                        NzOutletModule
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldRadioComponent, FormlyNzRadioModule };
//# sourceMappingURL=freezesoul-nz-formly-radio.mjs.map
