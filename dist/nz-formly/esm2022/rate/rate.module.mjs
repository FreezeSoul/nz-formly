import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldRateComponent } from './rate.component';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = FormlyFieldRateComponent;
export class FormlyNzRateModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzRateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzRateModule, declarations: [FormlyFieldRateComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzRateModule, i1.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzRateModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzRateModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'rate',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzRateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzRateModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'rate',
                                    component: COMPONENT,
                                    wrappers: ['field-wrapper']
                                }
                            ]
                        })
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvcmF0ZS9yYXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFckQsTUFBTSxTQUFTLEdBQUcsd0JBQXdCLENBQUM7QUFtQjNDLE1BQU0sT0FBTyxrQkFBa0I7d0dBQWxCLGtCQUFrQjt5R0FBbEIsa0JBQWtCLGlCQW5CYix3QkFBd0IsYUFLdEMsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixZQUFZO3lHQVlILGtCQUFrQixZQWQzQixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFlBQVk7WUFDWixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLE1BQU07d0JBQ1osU0FBUyxFQUFFLFNBQVM7d0JBQ3BCLFFBQVEsRUFBRSxDQUFDLGVBQWUsQ0FBQztxQkFDNUI7aUJBQ0Y7YUFDRixDQUFDOzs0RkFHTyxrQkFBa0I7a0JBakI5QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDekIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLFlBQVksQ0FBQyxRQUFRLENBQUM7NEJBQ3BCLEtBQUssRUFBRTtnQ0FDTDtvQ0FDRSxJQUFJLEVBQUUsTUFBTTtvQ0FDWixTQUFTLEVBQUUsU0FBUztvQ0FDcEIsUUFBUSxFQUFFLENBQUMsZUFBZSxDQUFDO2lDQUM1Qjs2QkFDRjt5QkFDRixDQUFDO3FCQUNIO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1seUZpZWxkUmF0ZUNvbXBvbmVudCB9IGZyb20gJy4vcmF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelJhdGVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3JhdGUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UID0gRm9ybWx5RmllbGRSYXRlQ29tcG9uZW50O1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtDT01QT05FTlRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBOelJhdGVNb2R1bGUsXHJcbiAgICBGb3JtbHlNb2R1bGUuZm9yQ2hpbGQoe1xyXG4gICAgICB0eXBlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdyYXRlJyxcclxuICAgICAgICAgIGNvbXBvbmVudDogQ09NUE9ORU5ULFxyXG4gICAgICAgICAgd3JhcHBlcnM6IFsnZmllbGQtd3JhcHBlciddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1seU56UmF0ZU1vZHVsZSB7fVxyXG4iXX0=