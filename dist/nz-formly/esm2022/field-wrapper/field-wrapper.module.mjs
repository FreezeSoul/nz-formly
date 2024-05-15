import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FieldWrapperComponent } from './field-wrapper.component';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = FieldWrapperComponent;
export class FormlyNzFormFieldModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzFormFieldModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzFormFieldModule, declarations: [FieldWrapperComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzFormModule,
            NzOutletModule, i1.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzFormFieldModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzFormModule,
            NzOutletModule,
            FormlyModule.forChild({
                wrappers: [
                    {
                        name: 'field-wrapper',
                        component: COMPONENT
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzFormFieldModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzFormModule,
                        NzOutletModule,
                        FormlyModule.forChild({
                            wrappers: [
                                {
                                    name: 'field-wrapper',
                                    component: COMPONENT
                                }
                            ]
                        })
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtd3JhcHBlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvZmllbGQtd3JhcHBlci9maWVsZC13cmFwcGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRTNELE1BQU0sU0FBUyxHQUFHLHFCQUFxQixDQUFDO0FBa0J4QyxNQUFNLE9BQU8sdUJBQXVCO3dHQUF2Qix1QkFBdUI7eUdBQXZCLHVCQUF1QixpQkFsQmxCLHFCQUFxQixhQUluQyxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFlBQVk7WUFDWixjQUFjO3lHQVdMLHVCQUF1QixZQWRoQyxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFlBQVk7WUFDWixjQUFjO1lBQ2QsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsUUFBUSxFQUFFO29CQUNSO3dCQUNFLElBQUksRUFBRSxlQUFlO3dCQUNyQixTQUFTLEVBQUUsU0FBUztxQkFDckI7aUJBQ0Y7YUFDRixDQUFDOzs0RkFHTyx1QkFBdUI7a0JBakJuQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDekIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIsUUFBUSxFQUFFO2dDQUNSO29DQUNFLElBQUksRUFBRSxlQUFlO29DQUNyQixTQUFTLEVBQUUsU0FBUztpQ0FDckI7NkJBQ0Y7eUJBQ0YsQ0FBQztxQkFDSDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOekZvcm1Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Zvcm0nO1xyXG5pbXBvcnQgeyBGaWVsZFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkLXdyYXBwZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcclxuXHJcbmNvbnN0IENPTVBPTkVOVCA9IEZpZWxkV3JhcHBlckNvbXBvbmVudDtcclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtDT01QT05FTlRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBOekZvcm1Nb2R1bGUsXHJcbiAgICBOek91dGxldE1vZHVsZSxcclxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XHJcbiAgICAgIHdyYXBwZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ2ZpZWxkLXdyYXBwZXInLFxyXG4gICAgICAgICAgY29tcG9uZW50OiBDT01QT05FTlRcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWx5TnpGb3JtRmllbGRNb2R1bGUge31cclxuIl19