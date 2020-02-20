import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReqresApiService } from './reqres-api.service';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class CoreServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreServicesModule,
      providers: [ReqresApiService]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreServicesModule) {
    if (parentModule) {
      throw new Error('CoreServicesModule is already loaded!');
    }
  }
}
