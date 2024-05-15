import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormlyFieldModalComponent } from './modal.component';
import { FormlyModule } from '@ngx-formly/core';
import { NzxModalModule } from '@freezesoul/nzx-antd/modal';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = FormlyFieldModalComponent;
export class FormlyNzModalModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzModalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzModalModule, declarations: [FormlyFieldModalComponent], imports: [CommonModule,
            NzModalModule,
            NzxModalModule,
            NzOutletModule, i1.FormlyModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzModalModule, imports: [CommonModule,
            NzModalModule,
            NzxModalModule,
            NzOutletModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'modal',
                        component: COMPONENT
                    }
                ]
            })] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzModalModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        NzModalModule,
                        NzxModalModule,
                        NzOutletModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'modal',
                                    component: COMPONENT
                                }
                            ]
                        })
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL21vZGFsL21vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQUUzRCxNQUFNLFNBQVMsR0FBRyx5QkFBeUIsQ0FBQztBQW1CNUMsTUFBTSxPQUFPLG1CQUFtQjt3R0FBbkIsbUJBQW1CO3lHQUFuQixtQkFBbUIsaUJBbkJkLHlCQUF5QixhQUt2QyxZQUFZO1lBQ1osYUFBYTtZQUNiLGNBQWM7WUFDZCxjQUFjO3lHQVdMLG1CQUFtQixZQWQ1QixZQUFZO1lBQ1osYUFBYTtZQUNiLGNBQWM7WUFDZCxjQUFjO1lBQ2QsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLElBQUksRUFBRSxPQUFPO3dCQUNiLFNBQVMsRUFBRSxTQUFTO3FCQUNyQjtpQkFDRjthQUNGLENBQUM7OzRGQUdPLG1CQUFtQjtrQkFqQi9CLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUN6QixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUNwQixLQUFLLEVBQUU7Z0NBQ0w7b0NBQ0UsSUFBSSxFQUFFLE9BQU87b0NBQ2IsU0FBUyxFQUFFLFNBQVM7aUNBQ3JCOzZCQUNGO3lCQUNGLENBQUM7cUJBQ0g7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOek1vZGFsTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tb2RhbCc7XHJcbmltcG9ydCB7IEZvcm1seUZpZWxkTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xyXG5pbXBvcnQgeyBOenhNb2RhbE1vZHVsZSB9IGZyb20gJ0BmcmVlemVzb3VsL256eC1hbnRkL21vZGFsJztcclxuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcclxuXHJcbmNvbnN0IENPTVBPTkVOVCA9IEZvcm1seUZpZWxkTW9kYWxDb21wb25lbnQ7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0NPTVBPTkVOVF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTnpNb2RhbE1vZHVsZSxcclxuICAgIE56eE1vZGFsTW9kdWxlLFxyXG4gICAgTnpPdXRsZXRNb2R1bGUsXHJcbiAgICBGb3JtbHlNb2R1bGUuZm9yQ2hpbGQoe1xyXG4gICAgICB0eXBlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdtb2RhbCcsXHJcbiAgICAgICAgICBjb21wb25lbnQ6IENPTVBPTkVOVFxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSlcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlOek1vZGFsTW9kdWxlIHt9XHJcbiJdfQ==