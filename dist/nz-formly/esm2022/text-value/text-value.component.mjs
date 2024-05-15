import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzxUtils } from '@freezesoul/nzx-antd/util';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/form";
import * as i3 from "@ngx-formly/core";
import * as i4 from "@freezesoul/nzx-antd/pipe";
export class FormlyFieldTextValueComponent extends FieldType {
    result;
    subscription;
    defaultOptions = {
        props: {
            defaultText: '--'
        }
    };
    ngOnInit() {
        this.subscription = this.formControl.valueChanges.subscribe(value => {
            this.result = undefined;
        });
    }
    get textValue() {
        const value = this.formControl.value;
        const format = this.props.format || this.formState.format;
        if (typeof format !== 'function') {
            return of(value);
        }
        if (this.result) {
            return this.result;
        }
        const result = format(value, this.field);
        if (NzxUtils.isPromise(result) || NzxUtils.isObservable(result)) {
            this.result = result;
            return result;
        }
        return of(result);
    }
    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTextValueComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormlyFieldTextValueComponent, selector: "nz-formly-text-value", usesInheritance: true, ngImport: i0, template: `
    <nz-form-text class="wrap-text" [formlyAttributes]="field" [ngClass]="props.ngClass" [ngStyle]="props.ngStyle">
      {{ textValue | async | defaultify: props.defaultText }}
    </nz-form-text>
  `, isInline: true, styles: [".wrap-text{word-break:break-all}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.NzFormTextComponent, selector: "nz-form-text", exportAs: ["nzFormText"] }, { kind: "directive", type: i3.ɵFormlyAttributes, selector: "[formlyAttributes]", inputs: ["formlyAttributes", "id"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "pipe", type: i4.DefaultifyPipe, name: "defaultify" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldTextValueComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nz-formly-text-value', template: `
    <nz-form-text class="wrap-text" [formlyAttributes]="field" [ngClass]="props.ngClass" [ngStyle]="props.ngStyle">
      {{ textValue | async | defaultify: props.defaultText }}
    </nz-form-text>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".wrap-text{word-break:break-all}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12YWx1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JELE9BQU8sRUFBYyxFQUFFLEVBQWdCLE1BQU0sTUFBTSxDQUFDOzs7Ozs7QUFtQnBELE1BQU0sT0FBTyw2QkFBaUMsU0FBUSxTQUEwQjtJQUN0RSxNQUFNLENBQThCO0lBQ3BDLFlBQVksQ0FBZ0I7SUFFM0IsY0FBYyxHQUFHO1FBQ3hCLEtBQUssRUFBRTtZQUNMLFdBQVcsRUFBRSxJQUFJO1NBQ2xCO0tBQ0YsQ0FBQztJQUVGLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFZLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuRSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBWSxDQUFDLEtBQUssQ0FBQztRQUN0QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUUxRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsRUFBRTtZQUNoQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjtRQUNELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQy9ELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzt3R0FyQ1UsNkJBQTZCOzRGQUE3Qiw2QkFBNkIsbUZBZDlCOzs7O0dBSVQ7OzRGQVVVLDZCQUE2QjtrQkFoQnpDLFNBQVM7K0JBQ0Usc0JBQXNCLFlBQ3RCOzs7O0dBSVQsbUJBUWdCLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgTnp4VXRpbHMgfSBmcm9tICdAZnJlZXplc291bC9uengtYW50ZC91dGlsJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUZXh0RmllbGRDb25maWcgfSBmcm9tICcuL2Zvcm1seS50eXBlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotZm9ybWx5LXRleHQtdmFsdWUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bnotZm9ybS10ZXh0IGNsYXNzPVwid3JhcC10ZXh0XCIgW2Zvcm1seUF0dHJpYnV0ZXNdPVwiZmllbGRcIiBbbmdDbGFzc109XCJwcm9wcy5uZ0NsYXNzXCIgW25nU3R5bGVdPVwicHJvcHMubmdTdHlsZVwiPlxyXG4gICAgICB7eyB0ZXh0VmFsdWUgfCBhc3luYyB8IGRlZmF1bHRpZnk6IHByb3BzLmRlZmF1bHRUZXh0IH19XHJcbiAgICA8L256LWZvcm0tdGV4dD5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAud3JhcC10ZXh0IHtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZFRleHRWYWx1ZUNvbXBvbmVudDxUPiBleHRlbmRzIEZpZWxkVHlwZTxUZXh0RmllbGRDb25maWc+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgcmVzdWx0PzogT2JzZXJ2YWJsZTxUPiB8IFByb21pc2U8VD47XHJcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb247XHJcblxyXG4gIG92ZXJyaWRlIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGVmYXVsdFRleHQ6ICctLSdcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5mb3JtQ29udHJvbCEudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgIHRoaXMucmVzdWx0ID0gdW5kZWZpbmVkO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dFZhbHVlKCkge1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmZvcm1Db250cm9sIS52YWx1ZTtcclxuICAgIGNvbnN0IGZvcm1hdCA9IHRoaXMucHJvcHMuZm9ybWF0IHx8IHRoaXMuZm9ybVN0YXRlLmZvcm1hdDtcclxuXHJcbiAgICBpZiAodHlwZW9mIGZvcm1hdCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gb2YodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnJlc3VsdCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXQodmFsdWUsIHRoaXMuZmllbGQpO1xyXG4gICAgaWYgKE56eFV0aWxzLmlzUHJvbWlzZShyZXN1bHQpIHx8IE56eFV0aWxzLmlzT2JzZXJ2YWJsZShyZXN1bHQpKSB7XHJcbiAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9mKHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=