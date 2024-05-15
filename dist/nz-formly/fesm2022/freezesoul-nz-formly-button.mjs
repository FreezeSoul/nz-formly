import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i8 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { hasTplNameValue, resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from 'ng-zorro-antd/button';
import { NzButtonModule } from 'ng-zorro-antd/button';
import * as i4 from 'ng-zorro-antd/core/transition-patch';
import * as i5 from 'ng-zorro-antd/core/wave';
import * as i6 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as i7 from 'ng-zorro-antd/core/outlet';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import * as i9 from 'ng-zorro-antd/dropdown';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

class FormlyFieldButtonComponent extends FieldType {
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

const COMPONENT = FormlyFieldButtonComponent;
class FormlyNzButtonModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzButtonModule, declarations: [FormlyFieldButtonComponent], imports: [CommonModule,
            NzButtonModule,
            NzIconModule,
            NzOutletModule, i8.FormlyModule, NzDropDownModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzButtonModule, imports: [CommonModule,
            NzButtonModule,
            NzIconModule,
            NzOutletModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'button',
                        component: COMPONENT
                    }
                ]
            }),
            NzDropDownModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzButtonModule,
                        NzIconModule,
                        NzOutletModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'button',
                                    component: COMPONENT
                                }
                            ]
                        }),
                        NzDropDownModule
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldButtonComponent, FormlyNzButtonModule };
//# sourceMappingURL=freezesoul-nz-formly-button.mjs.map
