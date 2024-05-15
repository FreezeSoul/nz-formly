import { NgModule } from '@angular/core';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldCascaderComponent } from './cascader.component';
import { NzxPipeModule } from '@freezesoul/nzx-antd/pipe';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = FormlyFieldCascaderComponent;
export class FormlyNzCascaderModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCascaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCascaderModule, declarations: [FormlyFieldCascaderComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzCascaderModule,
            NzxPipeModule, i1.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCascaderModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzCascaderModule,
            NzxPipeModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'cascader',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzCascaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzCascaderModule,
                        NzxPipeModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'cascader',
                                    component: COMPONENT,
                                    wrappers: ['field-wrapper']
                                }
                            ]
                        })
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL2Nhc2NhZGVyL2Nhc2NhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFckQsTUFBTSxTQUFTLEdBQUcsNEJBQTRCLENBQUM7QUFvQi9DLE1BQU0sT0FBTyxzQkFBc0I7d0dBQXRCLHNCQUFzQjt5R0FBdEIsc0JBQXNCLGlCQXBCakIsNEJBQTRCLGFBSzFDLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLGFBQWE7eUdBWUosc0JBQXNCLFlBZi9CLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLFNBQVMsRUFBRSxTQUFTO3dCQUNwQixRQUFRLEVBQUUsQ0FBQyxlQUFlLENBQUM7cUJBQzVCO2lCQUNGO2FBQ0YsQ0FBQzs7NEZBR08sc0JBQXNCO2tCQWxCbEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ3pCLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLFlBQVksQ0FBQyxRQUFRLENBQUM7NEJBQ3BCLEtBQUssRUFBRTtnQ0FDTDtvQ0FDRSxJQUFJLEVBQUUsVUFBVTtvQ0FDaEIsU0FBUyxFQUFFLFNBQVM7b0NBQ3BCLFFBQVEsRUFBRSxDQUFDLGVBQWUsQ0FBQztpQ0FDNUI7NkJBQ0Y7eUJBQ0YsQ0FBQztxQkFDSDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56Q2FzY2FkZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Nhc2NhZGVyJztcclxuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1seUZpZWxkQ2FzY2FkZXJDb21wb25lbnQgfSBmcm9tICcuL2Nhc2NhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56eFBpcGVNb2R1bGUgfSBmcm9tICdAZnJlZXplc291bC9uengtYW50ZC9waXBlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmNvbnN0IENPTVBPTkVOVCA9IEZvcm1seUZpZWxkQ2FzY2FkZXJDb21wb25lbnQ7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0NPTVBPTkVOVF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIE56Q2FzY2FkZXJNb2R1bGUsXHJcbiAgICBOenhQaXBlTW9kdWxlLFxyXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcclxuICAgICAgdHlwZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnY2FzY2FkZXInLFxyXG4gICAgICAgICAgY29tcG9uZW50OiBDT01QT05FTlQsXHJcbiAgICAgICAgICB3cmFwcGVyczogWydmaWVsZC13cmFwcGVyJ11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWx5TnpDYXNjYWRlck1vZHVsZSB7fVxyXG4iXX0=