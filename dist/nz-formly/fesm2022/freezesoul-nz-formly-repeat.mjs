import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i6 from '@ngx-formly/core';
import { FieldArrayType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from 'ng-zorro-antd/button';
import { NzButtonModule } from 'ng-zorro-antd/button';
import * as i4 from 'ng-zorro-antd/core/transition-patch';
import * as i5 from 'ng-zorro-antd/core/wave';
import * as i7 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as i8 from 'ng-zorro-antd/core/outlet';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

class FormlyFieldRepeatComponent extends FieldArrayType {
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

const COMPONENT = FormlyFieldRepeatComponent;
class FormlyRepeatModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyRepeatModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyRepeatModule, declarations: [FormlyFieldRepeatComponent], imports: [CommonModule,
            NzButtonModule, i6.FormlyModule, NzIconModule,
            NzOutletModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyRepeatModule, imports: [CommonModule,
            NzButtonModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'repeat',
                        component: COMPONENT
                    }
                ]
            }),
            NzIconModule,
            NzOutletModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyRepeatModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzButtonModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'repeat',
                                    component: COMPONENT
                                }
                            ]
                        }),
                        NzIconModule,
                        NzOutletModule
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldRepeatComponent, FormlyRepeatModule };
//# sourceMappingURL=freezesoul-nz-formly-repeat.mjs.map
