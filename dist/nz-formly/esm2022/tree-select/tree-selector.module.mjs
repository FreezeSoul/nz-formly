import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldTreeSelectComponent } from './tree-select.component';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzxPipeModule } from '@freezesoul/nzx-antd/pipe';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = FormlyFieldTreeSelectComponent;
export class FormlyNzTreeSelectModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTreeSelectModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTreeSelectModule, declarations: [FormlyFieldTreeSelectComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzTreeSelectModule,
            NzxPipeModule, i1.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTreeSelectModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzTreeSelectModule,
            NzxPipeModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'tree-select',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTreeSelectModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzTreeSelectModule,
                        NzxPipeModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'tree-select',
                                    component: COMPONENT,
                                    wrappers: ['field-wrapper']
                                }
                            ]
                        })
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1zZWxlY3Rvci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvdHJlZS1zZWxlY3QvdHJlZS1zZWxlY3Rvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRXJELE1BQU0sU0FBUyxHQUFHLDhCQUE4QixDQUFDO0FBb0JqRCxNQUFNLE9BQU8sd0JBQXdCO3dHQUF4Qix3QkFBd0I7eUdBQXhCLHdCQUF3QixpQkFwQm5CLDhCQUE4QixhQUs1QyxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixhQUFhO3lHQVlKLHdCQUF3QixZQWZqQyxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLElBQUksRUFBRSxhQUFhO3dCQUNuQixTQUFTLEVBQUUsU0FBUzt3QkFDcEIsUUFBUSxFQUFFLENBQUMsZUFBZSxDQUFDO3FCQUM1QjtpQkFDRjthQUNGLENBQUM7OzRGQUdPLHdCQUF3QjtrQkFsQnBDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUN6QixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQixLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsSUFBSSxFQUFFLGFBQWE7b0NBQ25CLFNBQVMsRUFBRSxTQUFTO29DQUNwQixRQUFRLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUNBQzVCOzZCQUNGO3lCQUNGLENBQUM7cUJBQ0g7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1seUZpZWxkVHJlZVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vdHJlZS1zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUcmVlU2VsZWN0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90cmVlLXNlbGVjdCc7XHJcbmltcG9ydCB7IE56eFBpcGVNb2R1bGUgfSBmcm9tICdAZnJlZXplc291bC9uengtYW50ZC9waXBlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmNvbnN0IENPTVBPTkVOVCA9IEZvcm1seUZpZWxkVHJlZVNlbGVjdENvbXBvbmVudDtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQ09NUE9ORU5UXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgTnpUcmVlU2VsZWN0TW9kdWxlLFxyXG4gICAgTnp4UGlwZU1vZHVsZSxcclxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XHJcbiAgICAgIHR5cGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ3RyZWUtc2VsZWN0JyxcclxuICAgICAgICAgIGNvbXBvbmVudDogQ09NUE9ORU5ULFxyXG4gICAgICAgICAgd3JhcHBlcnM6IFsnZmllbGQtd3JhcHBlciddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1seU56VHJlZVNlbGVjdE1vZHVsZSB7fVxyXG4iXX0=