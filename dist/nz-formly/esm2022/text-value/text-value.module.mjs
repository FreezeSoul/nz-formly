import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldTextValueComponent } from './text-value.component';
import { FormlyModule } from '@ngx-formly/core';
import { NzxPipeModule } from '@freezesoul/nzx-antd/pipe';
import { NzFormModule } from 'ng-zorro-antd/form';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = FormlyFieldTextValueComponent;
export class FormlyNzTextValueModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTextValueModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTextValueModule, declarations: [FormlyFieldTextValueComponent], imports: [CommonModule,
            NzxPipeModule,
            NzFormModule, i1.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTextValueModule, imports: [CommonModule,
            NzxPipeModule,
            NzFormModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'text',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTextValueModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzxPipeModule,
                        NzFormModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'text',
                                    component: COMPONENT,
                                    wrappers: ['field-wrapper']
                                }
                            ]
                        })
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12YWx1ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvdGV4dC12YWx1ZS90ZXh0LXZhbHVlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBRWxELE1BQU0sU0FBUyxHQUFHLDZCQUE2QixDQUFDO0FBbUJoRCxNQUFNLE9BQU8sdUJBQXVCO3dHQUF2Qix1QkFBdUI7eUdBQXZCLHVCQUF1QixpQkFuQmxCLDZCQUE2QixhQUszQyxZQUFZO1lBQ1osYUFBYTtZQUNiLFlBQVk7eUdBWUgsdUJBQXVCLFlBZGhDLFlBQVk7WUFDWixhQUFhO1lBQ2IsWUFBWTtZQUNaLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLEtBQUssRUFBRTtvQkFDTDt3QkFDRSxJQUFJLEVBQUUsTUFBTTt3QkFDWixTQUFTLEVBQUUsU0FBUzt3QkFDcEIsUUFBUSxFQUFFLENBQUMsZUFBZSxDQUFDO3FCQUM1QjtpQkFDRjthQUNGLENBQUM7OzRGQUdPLHVCQUF1QjtrQkFqQm5DLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUN6QixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLFlBQVk7d0JBQ1osWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIsS0FBSyxFQUFFO2dDQUNMO29DQUNFLElBQUksRUFBRSxNQUFNO29DQUNaLFNBQVMsRUFBRSxTQUFTO29DQUNwQixRQUFRLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUNBQzVCOzZCQUNGO3lCQUNGLENBQUM7cUJBQ0g7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3JtbHlGaWVsZFRleHRWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vdGV4dC12YWx1ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3JtbHlNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgTnp4UGlwZU1vZHVsZSB9IGZyb20gJ0BmcmVlemVzb3VsL256eC1hbnRkL3BpcGUnO1xyXG5pbXBvcnQgeyBOekZvcm1Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Zvcm0nO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UID0gRm9ybWx5RmllbGRUZXh0VmFsdWVDb21wb25lbnQ7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0NPTVBPTkVOVF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTnp4UGlwZU1vZHVsZSxcclxuICAgIE56Rm9ybU1vZHVsZSxcclxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XHJcbiAgICAgIHR5cGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ3RleHQnLFxyXG4gICAgICAgICAgY29tcG9uZW50OiBDT01QT05FTlQsXHJcbiAgICAgICAgICB3cmFwcGVyczogWydmaWVsZC13cmFwcGVyJ11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWx5TnpUZXh0VmFsdWVNb2R1bGUge31cclxuIl19