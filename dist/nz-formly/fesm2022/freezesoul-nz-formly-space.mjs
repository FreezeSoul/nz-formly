import * as i0 from '@angular/core';
import { Component, Optional, NgModule } from '@angular/core';
import * as i4 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from 'ng-zorro-antd/space';
import { NzSpaceModule } from 'ng-zorro-antd/space';

class FormlyFieldSpaceComponent extends FieldType {
    fieldTemplates;
    defaultOptions = {
        props: { nzSize: 'small', nzDirection: 'horizontal' }
    };
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get nzSplit() {
        return resolveTplName(this.props, this.fieldTemplates, 'nzSplit');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldSpaceComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldSpaceComponent, selector: "nz-formly-space", usesInheritance: true, ngImport: i0, template: `
    <nz-space
      [nzSize]="props.nzSize"
      [nzAlign]="props.nzAlign"
      [nzDirection]="props.nzDirection"
      [nzSplit]="nzSplit"
      [nzWrap]="props.nzWrap"
      [formlyAttributes]="field"
    >
      <ng-container *ngFor="let item of field.fieldGroup">
        <formly-field *nzSpaceItem [field]="item"></formly-field>
      </ng-container>
    </nz-space>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i3.NzSpaceComponent, selector: "nz-space, [nz-space]", inputs: ["nzDirection", "nzAlign", "nzSplit", "nzWrap", "nzSize"], exportAs: ["NzSpace"] }, { kind: "directive", type: i3.NzSpaceItemDirective, selector: "[nzSpaceItem]" }, { kind: "component", type: i4.FormlyField, selector: "formly-field", inputs: ["field"] }, { kind: "directive", type: i4.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldSpaceComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-space',
                    template: `
    <nz-space
      [nzSize]="props.nzSize"
      [nzAlign]="props.nzAlign"
      [nzDirection]="props.nzDirection"
      [nzSplit]="nzSplit"
      [nzWrap]="props.nzWrap"
      [formlyAttributes]="field"
    >
      <ng-container *ngFor="let item of field.fieldGroup">
        <formly-field *nzSpaceItem [field]="item"></formly-field>
      </ng-container>
    </nz-space>
  `
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });

const COMPONENT = FormlyFieldSpaceComponent;
class FormlyNzSpaceModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSpaceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSpaceModule, declarations: [FormlyFieldSpaceComponent], imports: [CommonModule,
            NzSpaceModule, i4.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSpaceModule, imports: [CommonModule,
            NzSpaceModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'space',
                        component: COMPONENT
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSpaceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzSpaceModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'space',
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

export { FormlyFieldSpaceComponent, FormlyNzSpaceModule };
//# sourceMappingURL=freezesoul-nz-formly-space.mjs.map
