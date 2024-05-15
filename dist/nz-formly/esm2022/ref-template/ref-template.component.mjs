import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { resolveTplName } from '@freezesoul/nz-formly/common';
import * as i0 from "@angular/core";
import * as i1 from "@freezesoul/nz-formly/common";
import * as i2 from "ng-zorro-antd/core/outlet";
import * as i3 from "@freezesoul/nzx-antd/pipe";
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
export class FormlyFieldRefTemplateComponent extends FieldType {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmLXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9yZWYtdGVtcGxhdGUvcmVmLXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFzQixjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7QUFFbEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1ERztBQVVILE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxTQUFTO0lBQzdCO0lBQS9CLFlBQStCLGNBQWtDO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBRHFCLG1CQUFjLEdBQWQsY0FBYyxDQUFvQjtJQUVqRSxDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7d0dBUFUsK0JBQStCOzRGQUEvQiwrQkFBK0IscUZBUGhDOzs7O0dBSVQ7OzRGQUdVLCtCQUErQjtrQkFUM0MsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUU7Ozs7R0FJVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OzBCQUVjLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWx5Qm94VGVtcGxhdGVzLCByZXNvbHZlVHBsTmFtZSB9IGZyb20gJ0BmcmVlemVzb3VsL256LWZvcm1seS9jb21tb24nO1xyXG5cclxuLyoqXHJcbiAqIOW8leeUqOaooeadv++8jOaUr+aMgUhUTUwsVGVtcGxhdGVSZWblr7nosaEs5oiW6ICFTmFtZWRUZW1wbGF0ZVxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiDnlKjms5UxOiDkvb/nlKhOYW1lZFRlbXBsYXRlKOaOqOiNkClcclxuICpcclxuICogaHRtbFxyXG4gKiBgYGBodG1sXHJcbiAqIDxmb3JtbHktZm9ybSBmb3JtbHktYm94ID5cclxuICogIDxuZy10ZW1wbGF0ZSBuYW1lZD1cInRlc3RcIj48L25nLXRlbXBsYXRlPlxyXG4gKiA8L2Zvcm1seS1mb3JtPlxyXG4gKiBgYGBcclxuICpcclxuICog6YWN572uXHJcbiAqIGBgYGpzXHJcbiAqIHtcclxuICogICB0eXBlOiAncmVmLXRlbXBsYXRlJyxcclxuICogICBwcm9wczoge1xyXG4gKiAgICAgcmVmTmFtZTogJ3Rlc3QnXHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiDnlKjms5UyOlRlbXBsYXRlUmVm5a+56LGhXHJcbiAqIGBgYGh0bWxcclxuICogPG5nLXRlbXBsYXRlICN0ZXN0Mj48L25nLXRlbXBsYXRlPlxyXG4gKiBgYGBcclxuICpcclxuICog6YWN572uXHJcbiAqIEB2aWV3Q2hpbGQoJ3Rlc3QyJykgdGVzdDI6IFRlbXBsYXRlUmVmPHt9PjtcclxuICpcclxuICogYGBganNcclxuICoge1xyXG4gKiAgIHR5cGU6ICdyZWYtdGVtcGxhdGUnLFxyXG4gKiAgIHByb3BzOiB7XHJcbiAqICAgICByZWY6IHRoaXMudGVzdDJcclxuICogICB9XHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIOeUqOazlTM6IOS9v+eUqGh0bWxcclxuICpcclxuICog6YWN572uXHJcbiAqIGBgYGpzXHJcbiAqIHtcclxuICogICB0eXBlOiAncmVmLXRlbXBsYXRlJyxcclxuICogICBwcm9wczoge1xyXG4gKiAgICAgcmVmOiAnPGRpdj50ZXN0IHRleHQ8L2Rpdj4nXHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1mb3JtbHktcmVmLXRlbXBsYXRlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInJlZjsgY29udGV4dDogeyAkaW1wbGljaXQ6IGZpZWxkLCBwcm9wczogcHJvcHMgfVwiPlxyXG4gICAgICA8ZGl2IFtpbm5lckhUTUxdPVwiJGFueShyZWYpIHwgdHJ1c3RIdG1sXCI+PC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZFJlZlRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgRmllbGRUeXBlIHtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwdWJsaWMgZmllbGRUZW1wbGF0ZXM6IEZvcm1seUJveFRlbXBsYXRlcykge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGdldCByZWYoKSB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZVRwbE5hbWUodGhpcy5wcm9wcywgdGhpcy5maWVsZFRlbXBsYXRlcywgJ3JlZicpO1xyXG4gIH1cclxufVxyXG4iXX0=