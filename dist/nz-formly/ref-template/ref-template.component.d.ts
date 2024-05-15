import { FieldType } from '@ngx-formly/core';
import { FormlyBoxTemplates } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
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
export declare class FormlyFieldRefTemplateComponent extends FieldType {
    fieldTemplates: FormlyBoxTemplates;
    constructor(fieldTemplates: FormlyBoxTemplates);
    get ref(): import("@angular/core").TemplateRef<any> | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormlyFieldRefTemplateComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormlyFieldRefTemplateComponent, "nz-formly-ref-template", never, {}, {}, never, never, false, never>;
}
