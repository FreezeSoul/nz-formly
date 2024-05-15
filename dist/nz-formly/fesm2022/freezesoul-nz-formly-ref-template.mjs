import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Optional, NgModule } from '@angular/core';
import * as i1$1 from '@ngx-formly/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';
import * as i1 from '@freezesoul/nz-formly/common';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i2 from 'ng-zorro-antd/core/outlet';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import * as i3 from '@freezesoul/nzx-antd/pipe';
import { NzxPipeModule } from '@freezesoul/nzx-antd/pipe';
import { CommonModule } from '@angular/common';

/**
 * 引用模板，支持HTML,TemplateRef对象,或者NamedTemplate
 * @example
 *
 * 用法1: 使用NamedTemplate(推荐)
 *
 * html
 * ```html
 * <formly-form formly-box >
 *  <ng-template named="test"></ng-template>
 * </formly-form>
 * ```
 *
 * 配置
 * ```js
 * {
 *   type: 'ref-template',
 *   props: {
 *     refName: 'test'
 *   }
 * }
 * ```
 *
 * 用法2:TemplateRef对象
 * ```html
 * <ng-template #test2></ng-template>
 * ```
 *
 * 配置
 * @viewChild('test2') test2: TemplateRef<{}>;
 *
 * ```js
 * {
 *   type: 'ref-template',
 *   props: {
 *     ref: this.test2
 *   }
 * }
 * ```
 *
 * 用法3: 使用html
 *
 * 配置
 * ```js
 * {
 *   type: 'ref-template',
 *   props: {
 *     ref: '<div>test text</div>'
 *   }
 * }
 * ```
 */
class FormlyFieldRefTemplateComponent extends FieldType {
    fieldTemplates;
    constructor(fieldTemplates) {
        super();
        this.fieldTemplates = fieldTemplates;
    }
    get ref() {
        return resolveTplName(this.props, this.fieldTemplates, 'ref');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldRefTemplateComponent, deps: [{ token: i1.FormlyBoxTemplates, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldRefTemplateComponent, selector: "nz-formly-ref-template", usesInheritance: true, ngImport: i0, template: `
    <ng-container *nzStringTemplateOutlet="ref; context: { $implicit: field, props: props }">
      <div [innerHTML]="$any(ref) | trustHtml"></div>
    </ng-container>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "pipe", type: i3.TrustHtmlPipe, name: "trustHtml" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldRefTemplateComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-formly-ref-template',
                    template: `
    <ng-container *nzStringTemplateOutlet="ref; context: { $implicit: field, props: props }">
      <div [innerHTML]="$any(ref) | trustHtml"></div>
    </ng-container>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.FormlyBoxTemplates, decorators: [{
                    type: Optional
                }] }]; } });

const COMPONENT = FormlyFieldRefTemplateComponent;
class FormlyRefTemplateModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyRefTemplateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyRefTemplateModule, declarations: [FormlyFieldRefTemplateComponent], imports: [CommonModule,
            NzOutletModule, i1$1.FormlyModule, NzxPipeModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyRefTemplateModule, imports: [CommonModule,
            NzOutletModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'ref-template',
                        component: COMPONENT
                    }
                ]
            }),
            NzxPipeModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyRefTemplateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzOutletModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'ref-template',
                                    component: COMPONENT
                                }
                            ]
                        }),
                        NzxPipeModule
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormlyFieldRefTemplateComponent, FormlyRefTemplateModule };
//# sourceMappingURL=freezesoul-nz-formly-ref-template.mjs.map
