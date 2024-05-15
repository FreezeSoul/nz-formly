import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormlyFieldTabsComponent } from './tabs.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = FormlyFieldTabsComponent;
export class FormlyNzTabsModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTabsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTabsModule, declarations: [FormlyFieldTabsComponent], imports: [CommonModule,
            NzTabsModule, i1.FormlyModule, NzButtonModule,
            NzOutletModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTabsModule, imports: [CommonModule,
            NzTabsModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'tabs',
                        component: COMPONENT
                    }
                ]
            }),
            NzButtonModule,
            NzOutletModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzTabsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzTabsModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'tabs',
                                    component: COMPONENT
                                }
                            ]
                        }),
                        NzButtonModule,
                        NzOutletModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvdGFicy90YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQUUzRCxNQUFNLFNBQVMsR0FBRyx3QkFBd0IsQ0FBQztBQW1CM0MsTUFBTSxPQUFPLGtCQUFrQjt3R0FBbEIsa0JBQWtCO3lHQUFsQixrQkFBa0IsaUJBbkJiLHdCQUF3QixhQUt0QyxZQUFZO1lBQ1osWUFBWSxtQkFTWixjQUFjO1lBQ2QsY0FBYzt5R0FHTCxrQkFBa0IsWUFkM0IsWUFBWTtZQUNaLFlBQVk7WUFDWixZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixLQUFLLEVBQUU7b0JBQ0w7d0JBQ0UsSUFBSSxFQUFFLE1BQU07d0JBQ1osU0FBUyxFQUFFLFNBQVM7cUJBQ3JCO2lCQUNGO2FBQ0YsQ0FBQztZQUNGLGNBQWM7WUFDZCxjQUFjOzs0RkFHTCxrQkFBa0I7a0JBakI5QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQztvQkFDekIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQixLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsSUFBSSxFQUFFLE1BQU07b0NBQ1osU0FBUyxFQUFFLFNBQVM7aUNBQ3JCOzZCQUNGO3lCQUNGLENBQUM7d0JBQ0YsY0FBYzt3QkFDZCxjQUFjO3FCQUNmO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybWx5TW9kdWxlIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XHJcbmltcG9ydCB7IE56QnV0dG9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9idXR0b24nO1xyXG5pbXBvcnQgeyBGb3JtbHlGaWVsZFRhYnNDb21wb25lbnQgfSBmcm9tICcuL3RhYnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpUYWJzTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJzJztcclxuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcclxuXHJcbmNvbnN0IENPTVBPTkVOVCA9IEZvcm1seUZpZWxkVGFic0NvbXBvbmVudDtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQ09NUE9ORU5UXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBOelRhYnNNb2R1bGUsXHJcbiAgICBGb3JtbHlNb2R1bGUuZm9yQ2hpbGQoe1xyXG4gICAgICB0eXBlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICd0YWJzJyxcclxuICAgICAgICAgIGNvbXBvbmVudDogQ09NUE9ORU5UXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KSxcclxuICAgIE56QnV0dG9uTW9kdWxlLFxyXG4gICAgTnpPdXRsZXRNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlOelRhYnNNb2R1bGUge31cclxuIl19