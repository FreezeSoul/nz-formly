import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldRadioComponent } from './radio.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzxPipeModule } from '@freezesoul/nzx-antd/pipe';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-formly/core";
const COMPONENT = FormlyFieldRadioComponent;
export class FormlyNzRadioModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzRadioModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzRadioModule, declarations: [FormlyFieldRadioComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NzRadioModule,
            NzIconModule,
            NzButtonModule,
            NzxPipeModule, i1.FormlyModule, NzOutletModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzRadioModule, imports: [CommonModule,
            ReactiveFormsModule,
            NzRadioModule,
            NzIconModule,
            NzButtonModule,
            NzxPipeModule,
            FormlyModule.forChild({
                types: [
                    {
                        name: 'radio',
                        component: COMPONENT,
                        wrappers: ['field-wrapper']
                    }
                ]
            }),
            NzOutletModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormlyNzRadioModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [COMPONENT],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NzRadioModule,
                        NzIconModule,
                        NzButtonModule,
                        NzxPipeModule,
                        FormlyModule.forChild({
                            types: [
                                {
                                    name: 'radio',
                                    component: COMPONENT,
                                    wrappers: ['field-wrapper']
                                }
                            ]
                        }),
                        NzOutletModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGliL3JhZGlvL3JhZGlvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRXJELE1BQU0sU0FBUyxHQUFHLHlCQUF5QixDQUFDO0FBdUI1QyxNQUFNLE9BQU8sbUJBQW1CO3dHQUFuQixtQkFBbUI7eUdBQW5CLG1CQUFtQixpQkF2QmQseUJBQXlCLGFBS3ZDLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLFlBQVk7WUFDWixjQUFjO1lBQ2QsYUFBYSxtQkFVYixjQUFjO3lHQUdMLG1CQUFtQixZQWxCNUIsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsWUFBWTtZQUNaLGNBQWM7WUFDZCxhQUFhO1lBQ2IsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsS0FBSyxFQUFFO29CQUNMO3dCQUNFLElBQUksRUFBRSxPQUFPO3dCQUNiLFNBQVMsRUFBRSxTQUFTO3dCQUNwQixRQUFRLEVBQUUsQ0FBQyxlQUFlLENBQUM7cUJBQzVCO2lCQUNGO2FBQ0YsQ0FBQztZQUNGLGNBQWM7OzRGQUdMLG1CQUFtQjtrQkFyQi9CLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUN6QixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsWUFBWSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEIsS0FBSyxFQUFFO2dDQUNMO29DQUNFLElBQUksRUFBRSxPQUFPO29DQUNiLFNBQVMsRUFBRSxTQUFTO29DQUNwQixRQUFRLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUNBQzVCOzZCQUNGO3lCQUNGLENBQUM7d0JBQ0YsY0FBYztxQkFDZjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtbHlGaWVsZFJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9yYWRpby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelJhZGlvTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9yYWRpbyc7XHJcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcbmltcG9ydCB7IE56QnV0dG9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9idXR0b24nO1xyXG5pbXBvcnQgeyBOenhQaXBlTW9kdWxlIH0gZnJvbSAnQGZyZWV6ZXNvdWwvbnp4LWFudGQvcGlwZSc7XHJcbmltcG9ydCB7IE56T3V0bGV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5jb25zdCBDT01QT05FTlQgPSBGb3JtbHlGaWVsZFJhZGlvQ29tcG9uZW50O1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtDT01QT05FTlRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBOelJhZGlvTW9kdWxlLFxyXG4gICAgTnpJY29uTW9kdWxlLFxyXG4gICAgTnpCdXR0b25Nb2R1bGUsXHJcbiAgICBOenhQaXBlTW9kdWxlLFxyXG4gICAgRm9ybWx5TW9kdWxlLmZvckNoaWxkKHtcclxuICAgICAgdHlwZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAncmFkaW8nLFxyXG4gICAgICAgICAgY29tcG9uZW50OiBDT01QT05FTlQsXHJcbiAgICAgICAgICB3cmFwcGVyczogWydmaWVsZC13cmFwcGVyJ11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pLFxyXG4gICAgTnpPdXRsZXRNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtbHlOelJhZGlvTW9kdWxlIHt9XHJcbiJdfQ==