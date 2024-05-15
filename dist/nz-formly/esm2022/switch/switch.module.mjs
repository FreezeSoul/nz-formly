import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldSwitchComponent } from './switch.component';
import { NzxSwitchModule } from '@freezesoul/nzx-antd/switch';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = FormlyFieldSwitchComponent;
export class FormlyNzSwitchModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSwitchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSwitchModule, declarations: [FormlyFieldSwitchComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzxSwitchModule, i1.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSwitchModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzxSwitchModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'switch',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzSwitchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzxSwitchModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'switch',
                                    component: COMPONENT,
                                    wrappers: ['field-wrapper']
                                }
                            ]
                        })
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9zd2l0Y2gvc3dpdGNoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFckQsTUFBTSxTQUFTLEdBQUcsMEJBQTBCLENBQUM7QUFtQjdDLE1BQU0sT0FBTyxvQkFBb0I7d0dBQXBCLG9CQUFvQjt5R0FBcEIsb0JBQW9CLGlCQW5CZiwwQkFBMEIsYUFLeEMsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixlQUFlO3lHQVlOLG9CQUFvQixZQWQ3QixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsU0FBUyxFQUFFLFNBQVM7d0JBQ3BCLFFBQVEsRUFBRSxDQUFDLGVBQWUsQ0FBQztxQkFDNUI7aUJBQ0Y7YUFDRixDQUFDOzs0RkFHTyxvQkFBb0I7a0JBakJoQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDekIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLFlBQVksQ0FBQyxRQUFRLENBQUM7NEJBQ3BCLEtBQUssRUFBRTtnQ0FDTDtvQ0FDRSxJQUFJLEVBQUUsUUFBUTtvQ0FDZCxTQUFTLEVBQUUsU0FBUztvQ0FDcEIsUUFBUSxFQUFFLENBQUMsZUFBZSxDQUFDO2lDQUM1Qjs2QkFDRjt5QkFDRixDQUFDO3FCQUNIO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1seUZpZWxkU3dpdGNoQ29tcG9uZW50IH0gZnJvbSAnLi9zd2l0Y2guY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnp4U3dpdGNoTW9kdWxlIH0gZnJvbSAnQGZyZWV6ZXNvdWwvbnp4LWFudGQvc3dpdGNoJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmNvbnN0IENPTVBPTkVOVCA9IEZvcm1seUZpZWxkU3dpdGNoQ29tcG9uZW50O1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtDT01QT05FTlRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBOenhTd2l0Y2hNb2R1bGUsXHJcbiAgICBGb3JtbHlNb2R1bGUuZm9yQ2hpbGQoe1xyXG4gICAgICB0eXBlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdzd2l0Y2gnLFxyXG4gICAgICAgICAgY29tcG9uZW50OiBDT01QT05FTlQsXHJcbiAgICAgICAgICB3cmFwcGVyczogWydmaWVsZC13cmFwcGVyJ11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWx5TnpTd2l0Y2hNb2R1bGUge31cclxuIl19