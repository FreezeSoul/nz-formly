import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormlyModule } from '@ngx-formly/core';
import { ModalWrapperComponent } from './modal-wrapper.component';
import { NzxModalModule } from '@freezesoul/nzx-antd/modal';
import { NzModalModule } from 'ng-zorro-antd/modal';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = ModalWrapperComponent;
export class FormlyNzModalWrapperModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzModalWrapperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzModalWrapperModule, declarations: [ModalWrapperComponent], imports: [CommonModule,
            NzCardModule,
            NzxModalModule,
            NzModalModule, i1.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzModalWrapperModule, imports: [CommonModule,
            NzCardModule,
            NzxModalModule,
            NzModalModule,
            FormlyModule.forChild({
                wrappers: [
                    {
                        name: 'modal-wrapper',
                        component: COMPONENT
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzModalWrapperModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzCardModule,
                        NzxModalModule,
                        NzModalModule,
                        FormlyModule.forChild({
                            wrappers: [
                                {
                                    name: 'modal-wrapper',
                                    component: COMPONENT
                                }
                            ]
                        })
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtd3JhcHBlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvbW9kYWwtd3JhcHBlci9tb2RhbC13cmFwcGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUVwRCxNQUFNLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQztBQW1CeEMsTUFBTSxPQUFPLDBCQUEwQjt3R0FBMUIsMEJBQTBCO3lHQUExQiwwQkFBMEIsaUJBbkJyQixxQkFBcUIsYUFLbkMsWUFBWTtZQUNaLFlBQVk7WUFDWixjQUFjO1lBQ2QsYUFBYTt5R0FXSiwwQkFBMEIsWUFkbkMsWUFBWTtZQUNaLFlBQVk7WUFDWixjQUFjO1lBQ2QsYUFBYTtZQUNiLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQ3BCLFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxJQUFJLEVBQUUsZUFBZTt3QkFDckIsU0FBUyxFQUFFLFNBQVM7cUJBQ3JCO2lCQUNGO2FBQ0YsQ0FBQzs7NEZBR08sMEJBQTBCO2tCQWpCdEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ3pCLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxhQUFhO3dCQUNiLFlBQVksQ0FBQyxRQUFRLENBQUM7NEJBQ3BCLFFBQVEsRUFBRTtnQ0FDUjtvQ0FDRSxJQUFJLEVBQUUsZUFBZTtvQ0FDckIsU0FBUyxFQUFFLFNBQVM7aUNBQ3JCOzZCQUNGO3lCQUNGLENBQUM7cUJBQ0g7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOekNhcmRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NhcmQnO1xyXG5pbXBvcnQgeyBGb3JtbHlNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56eE1vZGFsTW9kdWxlIH0gZnJvbSAnQGZyZWV6ZXNvdWwvbnp4LWFudGQvbW9kYWwnO1xyXG5pbXBvcnQgeyBOek1vZGFsTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tb2RhbCc7XHJcblxyXG5jb25zdCBDT01QT05FTlQgPSBNb2RhbFdyYXBwZXJDb21wb25lbnQ7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0NPTVBPTkVOVF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTnpDYXJkTW9kdWxlLFxyXG4gICAgTnp4TW9kYWxNb2R1bGUsXHJcbiAgICBOek1vZGFsTW9kdWxlLFxyXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcclxuICAgICAgd3JhcHBlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnbW9kYWwtd3JhcHBlcicsXHJcbiAgICAgICAgICBjb21wb25lbnQ6IENPTVBPTkVOVFxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSlcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlOek1vZGFsV3JhcHBlck1vZHVsZSB7fVxyXG4iXX0=