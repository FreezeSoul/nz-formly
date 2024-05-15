import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldRepeatComponent } from './repeat.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = FormlyFieldRepeatComponent;
export class FormlyRepeatModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyRepeatModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyRepeatModule, declarations: [FormlyFieldRepeatComponent], imports: [CommonModule,
            NzButtonModule, i1.FormlyModule, NzIconModule,
            NzOutletModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyRepeatModule, imports: [CommonModule,
            NzButtonModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'repeat',
                        component: COMPONENT
                    }
                ]
            }),
            NzIconModule,
            NzOutletModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyRepeatModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzButtonModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'repeat',
                                    component: COMPONENT
                                }
                            ]
                        }),
                        NzIconModule,
                        NzOutletModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwZWF0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9yZXBlYXQvcmVwZWF0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQUUzRCxNQUFNLFNBQVMsR0FBRywwQkFBMEIsQ0FBQztBQW1CN0MsTUFBTSxPQUFPLGtCQUFrQjt3R0FBbEIsa0JBQWtCO3lHQUFsQixrQkFBa0IsaUJBbkJiLDBCQUEwQixhQUt4QyxZQUFZO1lBQ1osY0FBYyxtQkFTZCxZQUFZO1lBQ1osY0FBYzt5R0FHTCxrQkFBa0IsWUFkM0IsWUFBWTtZQUNaLGNBQWM7WUFDZCxZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsU0FBUyxFQUFFLFNBQVM7cUJBQ3JCO2lCQUNGO2FBQ0YsQ0FBQztZQUNGLFlBQVk7WUFDWixjQUFjOzs0RkFHTCxrQkFBa0I7a0JBakI5QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDekIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQixLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsSUFBSSxFQUFFLFFBQVE7b0NBQ2QsU0FBUyxFQUFFLFNBQVM7aUNBQ3JCOzZCQUNGO3lCQUNGLENBQUM7d0JBQ0YsWUFBWTt3QkFDWixjQUFjO3FCQUNmO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1seUZpZWxkUmVwZWF0Q29tcG9uZW50IH0gZnJvbSAnLi9yZXBlYXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpCdXR0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcbmltcG9ydCB7IE56T3V0bGV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XHJcblxyXG5jb25zdCBDT01QT05FTlQgPSBGb3JtbHlGaWVsZFJlcGVhdENvbXBvbmVudDtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQ09NUE9ORU5UXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBOekJ1dHRvbk1vZHVsZSxcclxuICAgIEZvcm1seU1vZHVsZS5mb3JDaGlsZCh7XHJcbiAgICAgIHR5cGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ3JlcGVhdCcsXHJcbiAgICAgICAgICBjb21wb25lbnQ6IENPTVBPTkVOVFxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSksXHJcbiAgICBOekljb25Nb2R1bGUsXHJcbiAgICBOek91dGxldE1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1seVJlcGVhdE1vZHVsZSB7fVxyXG4iXX0=