import { NgModule } from '@angular/core';
import { FormlyFieldBetweenDatetimeComponent } from './between-datetime.component';
import { FormlyModule } from '@ngx-formly/core';
import { NzxBetweenDatetimeModule } from '@freezesoul/nzx-antd/between-datetime';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = FormlyFieldBetweenDatetimeComponent;
export class FormlyFieldBetweenDatetimeModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenDatetimeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenDatetimeModule, declarations: [FormlyFieldBetweenDatetimeComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzxBetweenDatetimeModule, i1.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenDatetimeModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzxBetweenDatetimeModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'between-datetime',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenDatetimeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldBetweenDatetimeComponent],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzxBetweenDatetimeModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'between-datetime',
                                    component: COMPONENT,
                                    wrappers: ['field-wrapper']
                                }
                            ]
                        })
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV0d2Vlbi1kYXRldGltZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvYmV0d2Vlbi1kYXRldGltZS9iZXR3ZWVuLWRhdGV0aW1lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUVyRCxNQUFNLFNBQVMsR0FBRyxtQ0FBbUMsQ0FBQztBQWtCdEQsTUFBTSxPQUFPLGdDQUFnQzt3R0FBaEMsZ0NBQWdDO3lHQUFoQyxnQ0FBZ0MsaUJBaEI1QixtQ0FBbUMsYUFFaEQsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQix3QkFBd0I7eUdBWWYsZ0NBQWdDLFlBZHpDLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsd0JBQXdCO1lBQ3hCLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxJQUFJLEVBQUUsa0JBQWtCO3dCQUN4QixTQUFTLEVBQUUsU0FBUzt3QkFDcEIsUUFBUSxFQUFFLENBQUMsZUFBZSxDQUFDO3FCQUM1QjtpQkFDRjthQUNGLENBQUM7OzRGQUdPLGdDQUFnQztrQkFqQjVDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsbUNBQW1DLENBQUM7b0JBQ25ELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3dCQUN4QixZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQixLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsSUFBSSxFQUFFLGtCQUFrQjtvQ0FDeEIsU0FBUyxFQUFFLFNBQVM7b0NBQ3BCLFFBQVEsRUFBRSxDQUFDLGVBQWUsQ0FBQztpQ0FDNUI7NkJBQ0Y7eUJBQ0YsQ0FBQztxQkFDSDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1seUZpZWxkQmV0d2VlbkRhdGV0aW1lQ29tcG9uZW50IH0gZnJvbSAnLi9iZXR3ZWVuLWRhdGV0aW1lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xyXG5pbXBvcnQgeyBOenhCZXR3ZWVuRGF0ZXRpbWVNb2R1bGUgfSBmcm9tICdAZnJlZXplc291bC9uengtYW50ZC9iZXR3ZWVuLWRhdGV0aW1lJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmNvbnN0IENPTVBPTkVOVCA9IEZvcm1seUZpZWxkQmV0d2VlbkRhdGV0aW1lQ29tcG9uZW50O1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0Zvcm1seUZpZWxkQmV0d2VlbkRhdGV0aW1lQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgTnp4QmV0d2VlbkRhdGV0aW1lTW9kdWxlLFxyXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcclxuICAgICAgdHlwZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnYmV0d2Vlbi1kYXRldGltZScsXHJcbiAgICAgICAgICBjb21wb25lbnQ6IENPTVBPTkVOVCxcclxuICAgICAgICAgIHdyYXBwZXJzOiBbJ2ZpZWxkLXdyYXBwZXInXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSlcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlGaWVsZEJldHdlZW5EYXRldGltZU1vZHVsZSB7fVxyXG4iXX0=