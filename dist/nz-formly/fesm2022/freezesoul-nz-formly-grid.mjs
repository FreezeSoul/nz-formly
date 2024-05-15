import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import * as i3 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from 'ng-zorro-antd/grid';
import { NzGridModule } from 'ng-zorro-antd/grid';

class FormlyFieldGridComponent extends FieldType {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldGridComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldGridComponent, selector: "nz-formly-grid", usesInheritance: true, ngImport: i0, template: `
    <div
      nz-row
      [nzAlign]="props.nzAlign || formState.nzAlign"
      [nzGutter]="props.nzGutter || formState.nzGutter"
      [nzJustify]="props.nzJustify || formState.nzJustify"
      [formlyAttributes]="field"
    >
      <formly-field
        *ngFor="let item of field.fieldGroup"
        [field]="item"
        nz-col
        [nzSpan]="item.props?.colNzSpan || formState.colNzSpan"
        [nzFlex]="item.props?.colNzFlex || formState.colNzFlex"
        [nzLg]="item.props?.colNzLg || formState.colNzLg"
        [nzMd]="item.props?.colNzMd || formState.colNzMd"
        [nzOffset]="item.props?.colNzOffset || formState.colNzOffset"
        [nzOrder]="item.props?.colNzOrder || formState.colNzOrder"
        [nzPull]="item.props?.colNzPull || formState.colNzPull"
        [nzPush]="item.props?.colNzPush || formState.colNzPush"
        [nzSm]="item.props?.colNzSm || formState.colNzSm"
        [nzXl]="item.props?.colNzXl || formState.colNzXl"
        [nzXs]="item.props?.colNzXs || formState.colNzXs"
        [nzXXl]="item.props?.colNzXXl || formState.colNzXXl"
        [formlyAttributes]="{ props: { attributes: item.props?.colAttributes } }"
      ></formly-field>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i2.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "component", type: i3.FormlyField, selector: "formly-field", inputs: ["field"] }, { kind: "directive", type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldGridComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-grid',
                    template: `
    <div
      nz-row
      [nzAlign]="props.nzAlign || formState.nzAlign"
      [nzGutter]="props.nzGutter || formState.nzGutter"
      [nzJustify]="props.nzJustify || formState.nzJustify"
      [formlyAttributes]="field"
    >
      <formly-field
        *ngFor="let item of field.fieldGroup"
        [field]="item"
        nz-col
        [nzSpan]="item.props?.colNzSpan || formState.colNzSpan"
        [nzFlex]="item.props?.colNzFlex || formState.colNzFlex"
        [nzLg]="item.props?.colNzLg || formState.colNzLg"
        [nzMd]="item.props?.colNzMd || formState.colNzMd"
        [nzOffset]="item.props?.colNzOffset || formState.colNzOffset"
        [nzOrder]="item.props?.colNzOrder || formState.colNzOrder"
        [nzPull]="item.props?.colNzPull || formState.colNzPull"
        [nzPush]="item.props?.colNzPush || formState.colNzPush"
        [nzSm]="item.props?.colNzSm || formState.colNzSm"
        [nzXl]="item.props?.colNzXl || formState.colNzXl"
        [nzXs]="item.props?.colNzXs || formState.colNzXs"
        [nzXXl]="item.props?.colNzXXl || formState.colNzXXl"
        [formlyAttributes]="{ props: { attributes: item.props?.colAttributes } }"
      ></formly-field>
    </div>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }] });

const COMPONENT = FormlyFieldGridComponent;
class FormlyNzGridModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzGridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzGridModule, declarations: [FormlyFieldGridComponent], imports: [CommonModule,
            NzGridModule, i3.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzGridModule, imports: [CommonModule,
            NzGridModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'row',
                        component: COMPONENT
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzGridModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzGridModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'row',
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

export { FormlyFieldGridComponent, FormlyNzGridModule };
//# sourceMappingURL=freezesoul-nz-formly-grid.mjs.map
