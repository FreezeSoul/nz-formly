import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldEchartsComponent } from './echarts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormlyModule } from '@ngx-formly/core';
import { NzxPipeModule } from '@freezesoul/nzx-antd/pipe';
import * as i0 from "@angular/core";
import * as i1 from "ngx-echarts";
import * as i2 from "@ngx-formly/core";
const COMPONENT = FormlyFieldEchartsComponent;
export class FormlyEchartsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyEchartsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyEchartsModule, declarations: [FormlyFieldEchartsComponent], imports: [CommonModule, i1.NgxEchartsModule, i2.FormlyModule, NzxPipeModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyEchartsModule, imports: [CommonModule,
            NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
            FormlyModule.forChild({
                types: [
                    {
                        name: 'echarts',
                        component: COMPONENT
                    }
                ]
            }),
            NzxPipeModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyEchartsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'echarts',
                                    component: COMPONENT
                                }
                            ]
                        }),
                        NzxPipeModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNoYXJ0cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvZWNoYXJ0cy9lY2hhcnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUMxRCxNQUFNLFNBQVMsR0FBRywyQkFBMkIsQ0FBQztBQWlCOUMsTUFBTSxPQUFPLG1CQUFtQjt3R0FBbkIsbUJBQW1CO3lHQUFuQixtQkFBbUIsaUJBakJkLDJCQUEyQixhQUl6QyxZQUFZLHdDQVVaLGFBQWE7eUdBR0osbUJBQW1CLFlBYjVCLFlBQVk7WUFDWixnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDOUQsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLElBQUksRUFBRSxTQUFTO3dCQUNmLFNBQVMsRUFBRSxTQUFTO3FCQUNyQjtpQkFDRjthQUNGLENBQUM7WUFDRixhQUFhOzs0RkFHSixtQkFBbUI7a0JBaEIvQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDekIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO3dCQUM5RCxZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQixLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsSUFBSSxFQUFFLFNBQVM7b0NBQ2YsU0FBUyxFQUFFLFNBQVM7aUNBQ3JCOzZCQUNGO3lCQUNGLENBQUM7d0JBQ0YsYUFBYTtxQkFDZDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1seUZpZWxkRWNoYXJ0c0NvbXBvbmVudCB9IGZyb20gJy4vZWNoYXJ0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hFY2hhcnRzTW9kdWxlIH0gZnJvbSAnbmd4LWVjaGFydHMnO1xyXG5pbXBvcnQgeyBGb3JtbHlNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgTnp4UGlwZU1vZHVsZSB9IGZyb20gJ0BmcmVlemVzb3VsL256eC1hbnRkL3BpcGUnO1xyXG5jb25zdCBDT01QT05FTlQgPSBGb3JtbHlGaWVsZEVjaGFydHNDb21wb25lbnQ7XHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQ09NUE9ORU5UXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBOZ3hFY2hhcnRzTW9kdWxlLmZvclJvb3QoeyBlY2hhcnRzOiAoKSA9PiBpbXBvcnQoJ2VjaGFydHMnKSB9KSxcclxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XHJcbiAgICAgIHR5cGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ2VjaGFydHMnLFxyXG4gICAgICAgICAgY29tcG9uZW50OiBDT01QT05FTlRcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pLFxyXG4gICAgTnp4UGlwZU1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1seUVjaGFydHNNb2R1bGUge31cclxuIl19