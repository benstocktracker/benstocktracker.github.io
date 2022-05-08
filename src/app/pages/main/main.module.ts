import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialModule } from 'src/app/shared/ng-material/ng-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing-module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MainRoutingModule,
    NgMaterialModule,
  ]
})
export class MainModule { }
