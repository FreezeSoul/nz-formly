import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldBetweenInputComponent } from './between-input.component';
import { NzxBetweenInputModule } from '@freezesoul/nzx-antd/between-input';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = FormlyFieldBetweenInputComponent;
export class FormlyFieldBetweenInputModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenInputModule, declarations: [FormlyFieldBetweenInputComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzxBetweenInputModule, i1.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenInputModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzxBetweenInputModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'between-input',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyFieldBetweenInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormlyFieldBetweenInputComponent],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzxBetweenInputModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'between-input',
                                    component: COMPONENT,
                                    wrappers: ['field-wrapper']
                                }
                            ]
                        })
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV0d2Vlbi1pbnB1dC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvYmV0d2Vlbi1pbnB1dC9iZXR3ZWVuLWlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUNyRCxNQUFNLFNBQVMsR0FBRyxnQ0FBZ0MsQ0FBQztBQW1CbkQsTUFBTSxPQUFPLDZCQUE2Qjt3R0FBN0IsNkJBQTZCO3lHQUE3Qiw2QkFBNkIsaUJBaEJ6QixnQ0FBZ0MsYUFFN0MsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixxQkFBcUI7eUdBWVosNkJBQTZCLFlBZHRDLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIscUJBQXFCO1lBQ3JCLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxJQUFJLEVBQUUsZUFBZTt3QkFDckIsU0FBUyxFQUFFLFNBQVM7d0JBQ3BCLFFBQVEsRUFBRSxDQUFDLGVBQWUsQ0FBQztxQkFDNUI7aUJBQ0Y7YUFDRixDQUFDOzs0RkFHTyw2QkFBNkI7a0JBakJ6QyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGdDQUFnQyxDQUFDO29CQUNoRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIsS0FBSyxFQUFFO2dDQUNMO29DQUNFLElBQUksRUFBRSxlQUFlO29DQUNyQixTQUFTLEVBQUUsU0FBUztvQ0FDcEIsUUFBUSxFQUFFLENBQUMsZUFBZSxDQUFDO2lDQUM1Qjs2QkFDRjt5QkFDRixDQUFDO3FCQUNIO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1seUZpZWxkQmV0d2VlbklucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9iZXR3ZWVuLWlucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56eEJldHdlZW5JbnB1dE1vZHVsZSB9IGZyb20gJ0BmcmVlemVzb3VsL256eC1hbnRkL2JldHdlZW4taW5wdXQnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5jb25zdCBDT01QT05FTlQgPSBGb3JtbHlGaWVsZEJldHdlZW5JbnB1dENvbXBvbmVudDtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbRm9ybWx5RmllbGRCZXR3ZWVuSW5wdXRDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBOenhCZXR3ZWVuSW5wdXRNb2R1bGUsXHJcbiAgICBGb3JtbHlNb2R1bGUuZm9yQ2hpbGQoe1xyXG4gICAgICB0eXBlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdiZXR3ZWVuLWlucHV0JyxcclxuICAgICAgICAgIGNvbXBvbmVudDogQ09NUE9ORU5ULFxyXG4gICAgICAgICAgd3JhcHBlcnM6IFsnZmllbGQtd3JhcHBlciddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1seUZpZWxkQmV0d2VlbklucHV0TW9kdWxlIHt9XHJcbiJdfQ==