import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialComponents = [
  MatButtonModule, 
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatSlideToggleModule,
  MatCardModule,
  MatSnackBarModule,
  MatChipsModule,
  MatPaginatorModule,
  MatSliderModule,
  MatTableModule,
  MatTabsModule,
  MatSortModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatDividerModule,
  MatAutocompleteModule,
  DragDropModule,
  MatButtonToggleModule
];

@NgModule({
  imports: materialComponents,
  exports: materialComponents,
})
export class NgMaterialModule { }
