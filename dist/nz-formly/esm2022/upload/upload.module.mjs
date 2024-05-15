import { NgModule } from '@angular/core';
import { FormlyFieldUploadComponent } from './upload.component';
import { FormlyModule } from '@ngx-formly/core';
import { NzxUploadModule } from '@freezesoul/nzx-antd/upload';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = FormlyFieldUploadComponent;
export class FormlyNzUploadModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzUploadModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzUploadModule, declarations: [FormlyFieldUploadComponent], imports: [CommonModule,
            NzxUploadModule, i1.FormlyModule, ReactiveFormsModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzUploadModule, imports: [CommonModule,
            NzxUploadModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'upload',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            }),
            ReactiveFormsModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzUploadModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzxUploadModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'upload',
                                    component: COMPONENT,
                                    wrappers: ['field-wrapper']
                                }
                            ]
                        }),
                        ReactiveFormsModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi91cGxvYWQvdXBsb2FkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFckQsTUFBTSxTQUFTLEdBQUcsMEJBQTBCLENBQUM7QUFtQjdDLE1BQU0sT0FBTyxvQkFBb0I7d0dBQXBCLG9CQUFvQjt5R0FBcEIsb0JBQW9CLGlCQW5CZiwwQkFBMEIsYUFLeEMsWUFBWTtZQUNaLGVBQWUsbUJBVWYsbUJBQW1CO3lHQUdWLG9CQUFvQixZQWQ3QixZQUFZO1lBQ1osZUFBZTtZQUNmLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxJQUFJLEVBQUUsUUFBUTt3QkFDZCxTQUFTLEVBQUUsU0FBUzt3QkFDcEIsUUFBUSxFQUFFLENBQUMsZUFBZSxDQUFDO3FCQUM1QjtpQkFDRjthQUNGLENBQUM7WUFDRixtQkFBbUI7OzRGQUdWLG9CQUFvQjtrQkFqQmhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUN6QixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLFlBQVksQ0FBQyxRQUFRLENBQUM7NEJBQ3BCLEtBQUssRUFBRTtnQ0FDTDtvQ0FDRSxJQUFJLEVBQUUsUUFBUTtvQ0FDZCxTQUFTLEVBQUUsU0FBUztvQ0FDcEIsUUFBUSxFQUFFLENBQUMsZUFBZSxDQUFDO2lDQUM1Qjs2QkFDRjt5QkFDRixDQUFDO3dCQUNGLG1CQUFtQjtxQkFDcEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtbHlGaWVsZFVwbG9hZENvbXBvbmVudCB9IGZyb20gJy4vdXBsb2FkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xyXG5pbXBvcnQgeyBOenhVcGxvYWRNb2R1bGUgfSBmcm9tICdAZnJlZXplc291bC9uengtYW50ZC91cGxvYWQnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UID0gRm9ybWx5RmllbGRVcGxvYWRDb21wb25lbnQ7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0NPTVBPTkVOVF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTnp4VXBsb2FkTW9kdWxlLFxyXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcclxuICAgICAgdHlwZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAndXBsb2FkJyxcclxuICAgICAgICAgIGNvbXBvbmVudDogQ09NUE9ORU5ULFxyXG4gICAgICAgICAgd3JhcHBlcnM6IFsnZmllbGQtd3JhcHBlciddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlOelVwbG9hZE1vZHVsZSB7fVxyXG4iXX0=