import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i5 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from 'ng-zorro-antd/tag';
import { NzTagModule } from 'ng-zorro-antd/tag';
import * as i4 from 'ng-zorro-antd/core/outlet';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

class FormlyFieldTagComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: { nzMode: 'default' }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzxContent() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzxContent');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTagComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldTagComponent, selector: "nz-formly-tag", usesInheritance: true, ngImport: i0, template: `
    <nz-tag
      #instance
      [nzColor]="props.nzColor"
      [nzChecked]="props.nzChecked"
      [nzMode]="props.nzMode"
      (nzOnClose)="props.nzOnClose?.($event, field, instance)"
      (nzCheckedChange)="props.nzCheckedChange?.($event, field, instance)"
      [formlyAttributes]="field"
    >
      <ng-container *nzStringTemplateOutlet="nzxContent; context: { $implicit: field, props: props }">
        {{ nzxContent }}
      </ng-container>

      <ng-container *ngFor="let item of field.fieldGroup">
        <formly-field [field]="item"></formly-field>
      </ng-container>
    </nz-tag>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i3.NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "directive", type: i4.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: i5.FormlyField, selector: "formly-field", inputs: ["field"] }, { kind: "directive", type: i5.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTagComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-tag',
                    template: `
    <nz-tag
      #instance
      [nzColor]="props.nzColor"
      [nzChecked]="props.nzChecked"
      [nzMode]="props.nzMode"
      (nzOnClose)="props.nzOnClose?.($event, field, instance)"
      (nzCheckedChange)="props.nzCheckedChange?.($event, field, instance)"
      [formlyAttributes]="field"
    >
      <ng-container *nzStringTemplateOutlet="nzxContent; context: { $implicit: field, props: props }">
        {{ nzxContent }}
      </ng-container>

      <ng-container *ngFor="let item of field.fieldGroup">
        <formly-field [field]="item"></formly-field>
      </ng-container>
    </nz-tag>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });

const COMPONENT = FormlyFieldTagComponent;
class FormlyNzTagModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTagModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTagModule, declarations: [FormlyFieldTagComponent], imports: [CommonModule,
            NzTagModule,
            NzOutletModule, i5.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTagModule, imports: [CommonModule,
            NzTagModule,
            NzOutletModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'tag',
                        component: COMPONENT
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTagModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzTagModule,
                        NzOutletModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'tag',
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

export { FormlyFieldTagComponent, FormlyNzTagModule };
//# sourceMappingURL=freezesoul-nz-formly-tag.mjs.map
