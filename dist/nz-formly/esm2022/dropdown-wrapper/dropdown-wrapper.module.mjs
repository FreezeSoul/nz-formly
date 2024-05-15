import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { DropdownWrapperComponent } from './dropdown-wrapper.component';
import { FormlyModule } from '@ngx-formly/core';
import { dropdownExtension } from './dropdown.extension';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = DropdownWrapperComponent;
export class FormlyDropdownWrapperModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyDropdownWrapperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyDropdownWrapperModule, declarations: [DropdownWrapperComponent], imports: [CommonModule,
            NzDropDownModule, i1.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyDropdownWrapperModule, imports: [CommonModule,
            NzDropDownModule,
            FormlyModule.forChild({
                wrappers: [
                    {
                        name: 'dropdown-wrapper',
                        component: COMPONENT
                    }
                ],
                extensions: [{ name: 'dropdown', extension: { postPopulate: dropdownExtension } }]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyDropdownWrapperModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzDropDownModule,
                        FormlyModule.forChild({
                            wrappers: [
                                {
                                    name: 'dropdown-wrapper',
                                    component: COMPONENT
                                }
                            ],
                            extensions: [{ name: 'dropdown', extension: { postPopulate: dropdownExtension } }]
                        })
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24td3JhcHBlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvZHJvcGRvd24td3JhcHBlci9kcm9wZG93bi13cmFwcGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQUV6RCxNQUFNLFNBQVMsR0FBRyx3QkFBd0IsQ0FBQztBQWtCM0MsTUFBTSxPQUFPLDJCQUEyQjt3R0FBM0IsMkJBQTJCO3lHQUEzQiwyQkFBMkIsaUJBbEJ0Qix3QkFBd0IsYUFLdEMsWUFBWTtZQUNaLGdCQUFnQjt5R0FZUCwyQkFBMkIsWUFicEMsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsSUFBSSxFQUFFLGtCQUFrQjt3QkFDeEIsU0FBUyxFQUFFLFNBQVM7cUJBQ3JCO2lCQUNGO2dCQUNELFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxDQUFDO2FBQ25GLENBQUM7OzRGQUdPLDJCQUEyQjtrQkFoQnZDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUN6QixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFlBQVksQ0FBQyxRQUFRLENBQUM7NEJBQ3BCLFFBQVEsRUFBRTtnQ0FDUjtvQ0FDRSxJQUFJLEVBQUUsa0JBQWtCO29DQUN4QixTQUFTLEVBQUUsU0FBUztpQ0FDckI7NkJBQ0Y7NEJBQ0QsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxFQUFFLENBQUM7eUJBQ25GLENBQUM7cUJBQ0g7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOekRyb3BEb3duTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XHJcbmltcG9ydCB7IERyb3Bkb3duV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vZHJvcGRvd24td3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3JtbHlNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgZHJvcGRvd25FeHRlbnNpb24gfSBmcm9tICcuL2Ryb3Bkb3duLmV4dGVuc2lvbic7XHJcblxyXG5jb25zdCBDT01QT05FTlQgPSBEcm9wZG93bldyYXBwZXJDb21wb25lbnQ7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0NPTVBPTkVOVF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTnpEcm9wRG93bk1vZHVsZSxcclxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XHJcbiAgICAgIHdyYXBwZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ2Ryb3Bkb3duLXdyYXBwZXInLFxyXG4gICAgICAgICAgY29tcG9uZW50OiBDT01QT05FTlRcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGV4dGVuc2lvbnM6IFt7IG5hbWU6ICdkcm9wZG93bicsIGV4dGVuc2lvbjogeyBwb3N0UG9wdWxhdGU6IGRyb3Bkb3duRXh0ZW5zaW9uIH0gfV1cclxuICAgIH0pXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybWx5RHJvcGRvd25XcmFwcGVyTW9kdWxlIHt9XHJcbiJdfQ==