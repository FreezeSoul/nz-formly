import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { defaultPlaceholderExtensionOption, valueChangesExtensionOption } from '@freezesoul/nz-formly/extension';
import { NzxFormUtils } from '@freezesoul/nzx-antd/util';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
export class NzFormlyModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzFormlyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: NzFormlyModule, imports: [i1.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzFormlyModule, imports: [FormlyModule.forChild({
                validationMessages: [
                    { name: 'required', message: (error, field) => `${field.props?.label}不能为空` },
                    { name: 'minLength', message: (error, field) => `至少输入${field.props.minLength}个字符` },
                    { name: 'maxLength', message: (error, field) => `最多输入${field.props.maxLength}个字符` },
                    { name: 'max', message: (error, field) => `不能超过${field.props.max}` },
                    { name: 'min', message: (error, field) => `不能小于${field.props.min}` },
                    { name: 'pattern', message: (error, field) => `${field.props.label}格式不正确` },
                    { name: 'email', message: '邮箱格式不正确,例如:12345@qq.com' },
                    { name: 'mobile', message: '手机号格式不正确,例如:18812345678' },
                    { name: 'notBlank', message: '首尾不能包含空格' }
                ],
                validators: [
                    { name: 'email', validation: NzxFormUtils.email() },
                    { name: 'mobile', validation: NzxFormUtils.mobile() },
                    {
                        name: 'notBlank',
                        validation: control => {
                            if (!control.value) {
                                return null;
                            }
                            return /^[\s\uFEFF]+|[\s\uFEFF]+$/.test(control.value) ? { notBlank: {} } : null;
                        }
                    }
                ],
                extensions: [defaultPlaceholderExtensionOption, valueChangesExtensionOption]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzFormlyModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormlyModule.forChild({
                            validationMessages: [
                                { name: 'required', message: (error, field) => `${field.props?.label}不能为空` },
                                { name: 'minLength', message: (error, field) => `至少输入${field.props.minLength}个字符` },
                                { name: 'maxLength', message: (error, field) => `最多输入${field.props.maxLength}个字符` },
                                { name: 'max', message: (error, field) => `不能超过${field.props.max}` },
                                { name: 'min', message: (error, field) => `不能小于${field.props.min}` },
                                { name: 'pattern', message: (error, field) => `${field.props.label}格式不正确` },
                                { name: 'email', message: '邮箱格式不正确,例如:12345@qq.com' },
                                { name: 'mobile', message: '手机号格式不正确,例如:18812345678' },
                                { name: 'notBlank', message: '首尾不能包含空格' }
                            ],
                            validators: [
                                { name: 'email', validation: NzxFormUtils.email() },
                                { name: 'mobile', validation: NzxFormUtils.mobile() },
                                {
                                    name: 'notBlank',
                                    validation: control => {
                                        if (!control.value) {
                                            return null;
                                        }
                                        return /^[\s\uFEFF]+|[\s\uFEFF]+$/.test(control.value) ? { notBlank: {} } : null;
                                    }
                                }
                            ],
                            extensions: [defaultPlaceholderExtensionOption, valueChangesExtensionOption]
                        })
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybWx5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9uei1mb3JtbHkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2pILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBaUN6RCxNQUFNLE9BQU8sY0FBYzt3R0FBZCxjQUFjO3lHQUFkLGNBQWM7eUdBQWQsY0FBYyxZQTdCdkIsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsa0JBQWtCLEVBQUU7b0JBQ2xCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxNQUFNLEVBQUU7b0JBQzVFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEtBQUssQ0FBQyxLQUFNLENBQUMsU0FBUyxLQUFLLEVBQUU7b0JBQ3BGLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEtBQUssQ0FBQyxLQUFNLENBQUMsU0FBUyxLQUFLLEVBQUU7b0JBQ3BGLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEtBQUssQ0FBQyxLQUFNLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ3JFLEVBQUUsSUFBSSxF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QUFVLEVBQUU7NkJBQzFDOzRCQUNELFVBQVUsRUFBRTtnQ0FDVixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQ0FDbkQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0NBQ3JEO29DQUNFLElBQUksRUFBRSxVQUFVO29DQUNoQixVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQUU7d0NBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFOzRDQUNsQixPQUFPLElBQUksQ0FBQzt5Q0FDYjt3Q0FDRCxPQUFPLDJCQUEyQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0NBQ25GLENBQUM7aUNBQ0Y7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFLENBQUMsaUNBQWlDLEVBQUUsMkJBQTJCLENBQUM7eUJBQzdFLENBQUM7cUJBQ0g7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcbmltcG9ydCB7IGRlZmF1bHRQbGFjZWhvbGRlckV4dGVuc2lvbk9wdGlvbiwgdmFsdWVDaGFuZ2VzRXh0ZW5zaW9uT3B0aW9uIH0gZnJvbSAnQGZyZWV6ZXNvdWwvbnotZm9ybWx5L2V4dGVuc2lvbic7XHJcbmltcG9ydCB7IE56eEZvcm1VdGlscyB9IGZyb20gJ0BmcmVlemVzb3VsL256eC1hbnRkL3V0aWwnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBGb3JtbHlNb2R1bGUuZm9yQ2hpbGQoe1xyXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZXM6IFtcclxuICAgICAgICB7IG5hbWU6ICdyZXF1aXJlZCcsIG1lc3NhZ2U6IChlcnJvciwgZmllbGQpID0+IGAke2ZpZWxkLnByb3BzPy5sYWJlbH3kuI3og73kuLrnqbpgIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnbWluTGVuZ3RoJywgbWVzc2FnZTogKGVycm9yLCBmaWVsZCkgPT4gYOiHs+Wwkei+k+WFpSR7ZmllbGQucHJvcHMhLm1pbkxlbmd0aH3kuKrlrZfnrKZgIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnbWF4TGVuZ3RoJywgbWVzc2FnZTogKGVycm9yLCBmaWVsZCkgPT4gYOacgOWkmui+k+WFpSR7ZmllbGQucHJvcHMhLm1heExlbmd0aH3kuKrlrZfnrKZgIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnbWF4JywgbWVzc2FnZTogKGVycm9yLCBmaWVsZCkgPT4gYOS4jeiDvei2hei/hyR7ZmllbGQucHJvcHMhLm1heH1gIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnbWluJywgbWVzc2FnZTogKGVycm9yLCBmaWVsZCkgPT4gYOS4jeiDveWwj+S6jiR7ZmllbGQucHJvcHMhLm1pbn1gIH0sXHJcbiAgICAgICAgeyBuYW1lOiAncGF0dGVybicsIG1lc3NhZ2U6IChlcnJvciwgZmllbGQpID0+IGAke2ZpZWxkLnByb3BzIS5sYWJlbH3moLzlvI/kuI3mraPnoa5gIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnZW1haWwnLCBtZXNzYWdlOiAn6YKu566x5qC85byP5LiN5q2j56GuLOS+i+WmgjoxMjM0NUBxcS5jb20nIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnbW9iaWxlJywgbWVzc2FnZTogJ+aJi+acuuWPt+agvOW8j+S4jeato+ehrizkvovlpoI6MTg4MTIzNDU2NzgnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnbm90QmxhbmsnLCBtZXNzYWdlOiAn6aaW5bC+5LiN6IO95YyF5ZCr56m65qC8JyB9XHJcbiAgICAgIF0sXHJcbiAgICAgIHZhbGlkYXRvcnM6IFtcclxuICAgICAgICB7IG5hbWU6ICdlbWFpbCcsIHZhbGlkYXRpb246IE56eEZvcm1VdGlscy5lbWFpbCgpIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnbW9iaWxlJywgdmFsaWRhdGlvbjogTnp4Rm9ybVV0aWxzLm1vYmlsZSgpIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ25vdEJsYW5rJyxcclxuICAgICAgICAgIHZhbGlkYXRpb246IGNvbnRyb2wgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWNvbnRyb2wudmFsdWUpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gL15bXFxzXFx1RkVGRl0rfFtcXHNcXHVGRUZGXSskLy50ZXN0KGNvbnRyb2wudmFsdWUpID8geyBub3RCbGFuazoge30gfSA6IG51bGw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBleHRlbnNpb25zOiBbZGVmYXVsdFBsYWNlaG9sZGVyRXh0ZW5zaW9uT3B0aW9uLCB2YWx1ZUNoYW5nZXNFeHRlbnNpb25PcHRpb25dXHJcbiAgICB9KVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Rm9ybWx5TW9kdWxlIHt9XHJcbiJdfQ==