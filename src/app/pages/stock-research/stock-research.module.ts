import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule } from 'src/app/shared/ng-material/ng-material.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { StockResearchRoutingModule } from './stock-research-routing.module';
import { ResearchComponent } from './research/research.component';

@NgModule({
  declarations: [
    ResearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgMaterialModule,
    SharedComponentsModule,
    StockResearchRoutingModule
  ]
})
export class StockResearchModule { }
