import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
];

@NgModule({
  imports: materialComponents,
  exports: materialComponents,
})
export class NgMaterialModule { }
