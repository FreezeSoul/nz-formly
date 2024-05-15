import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i4 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from 'ng-zorro-antd/divider';
import { NzDividerModule } from 'ng-zorro-antd/divider';

class FormlyFieldDividerComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: { nzOrientation: 'center', nzType: 'horizontal' }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldDividerComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldDividerComponent, selector: "nz-formly-divider", usesInheritance: true, ngImport: i0, template: `
    <nz-divider
      [nzType]="props.nzType"
      [nzDashed]="props.nzDashed"
      [nzOrientation]="props.nzOrientation"
      [nzPlain]="props.nzPlain"
      [nzText]="nzText"
      [formlyAttributes]="field"
    ></nz-divider>
    <ng-template #nzText>
      {{ props.nzText }}
      <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
    </ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i3.NzDividerComponent, selector: "nz-divider", inputs: ["nzText", "nzType", "nzOrientation", "nzDashed", "nzPlain"], exportAs: ["nzDivider"] }, { kind: "component", type: i4.FormlyField, selector: "formly-field", inputs: ["field"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldDividerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-divider',
                    template: `
    <nz-divider
      [nzType]="props.nzType"
      [nzDashed]="props.nzDashed"
      [nzOrientation]="props.nzOrientation"
      [nzPlain]="props.nzPlain"
      [nzText]="nzText"
      [formlyAttributes]="field"
    ></nz-divider>
    <ng-template #nzText>
      {{ props.nzText }}
      <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
    </ng-template>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });

const COMPONENT = FormlyFieldDividerComponent;
class FormlyNzDividerModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzDividerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzDividerModule, declarations: [FormlyFieldDividerComponent], imports: [CommonModule,
            NzDividerModule, i4.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzDividerModule, imports: [CommonModule,
            NzDividerModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'divider',
                        component: COMPONENT
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzDividerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzDividerModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'divider',
                                    component: COMPONENT
                                }
                            ]
                        })
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldDividerComponent, FormlyNzDividerModule };
//# sourceMappingURL=freezesoul-nz-formly-divider.mjs.map
