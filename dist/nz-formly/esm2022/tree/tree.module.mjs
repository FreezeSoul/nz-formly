import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldTreeComponent } from './tree.component';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzxPipeModule } from '@freezesoul/nzx-antd/pipe';
import { FormlyModule } from '@ngx-formly/core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = FormlyFieldTreeComponent;
export class FormlyNzTreeModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTreeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTreeModule, declarations: [FormlyFieldTreeComponent], imports: [CommonModule,
            NzTreeModule,
            NzxPipeModule, i1.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTreeModule, imports: [CommonModule,
            NzTreeModule,
            NzxPipeModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'tree',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTreeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzTreeModule,
                        NzxPipeModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'tree',
                                    component: COMPONENT,
                                    wrappers: ['field-wrapper']
                                }
                            ]
                        })
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvdHJlZS90cmVlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBRWhELE1BQU0sU0FBUyxHQUFHLHdCQUF3QixDQUFDO0FBbUIzQyxNQUFNLE9BQU8sa0JBQWtCO3dHQUFsQixrQkFBa0I7eUdBQWxCLGtCQUFrQixpQkFuQmIsd0JBQXdCLGFBS3RDLFlBQVk7WUFDWixZQUFZO1lBQ1osYUFBYTt5R0FZSixrQkFBa0IsWUFkM0IsWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2IsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLElBQUksRUFBRSxNQUFNO3dCQUNaLFNBQVMsRUFBRSxTQUFTO3dCQUNwQixRQUFRLEVBQUUsQ0FBQyxlQUFlLENBQUM7cUJBQzVCO2lCQUNGO2FBQ0YsQ0FBQzs7NEZBR08sa0JBQWtCO2tCQWpCOUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ3pCLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQixLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsSUFBSSxFQUFFLE1BQU07b0NBQ1osU0FBUyxFQUFFLFNBQVM7b0NBQ3BCLFFBQVEsRUFBRSxDQUFDLGVBQWUsQ0FBQztpQ0FDNUI7NkJBQ0Y7eUJBQ0YsQ0FBQztxQkFDSDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1seUZpZWxkVHJlZUNvbXBvbmVudCB9IGZyb20gJy4vdHJlZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelRyZWVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RyZWUnO1xyXG5pbXBvcnQgeyBOenhQaXBlTW9kdWxlIH0gZnJvbSAnQGZyZWV6ZXNvdWwvbnp4LWFudGQvcGlwZSc7XHJcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UID0gRm9ybWx5RmllbGRUcmVlQ29tcG9uZW50O1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtDT01QT05FTlRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE56VHJlZU1vZHVsZSxcclxuICAgIE56eFBpcGVNb2R1bGUsXHJcbiAgICBGb3JtbHlNb2R1bGUuZm9yQ2hpbGQoe1xyXG4gICAgICB0eXBlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICd0cmVlJyxcclxuICAgICAgICAgIGNvbXBvbmVudDogQ09NUE9ORU5ULFxyXG4gICAgICAgICAgd3JhcHBlcnM6IFsnZmllbGQtd3JhcHBlciddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1seU56VHJlZU1vZHVsZSB7fVxyXG4iXX0=