import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent } from 'ng-zorro-antd/form';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { NzColDirective } from 'ng-zorro-antd/grid';
import { Validators as ngValidators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  standalone: true,
  selector: 'app-fridges',
  templateUrl: './fridges.component.html',
  styleUrls: ['./fridges.component.css'],
  imports: [
    NzFormControlComponent,
    NzFormItemComponent,
    NzFormDirective,
    NzFormLabelComponent,
    NzColDirective,
    ReactiveFormsModule,
    NzInputDirective,
    NzDatePickerComponent,
    NzButtonComponent,
    NzInputNumberComponent,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NzTableComponent
  ]
})
export class FridgesComponent implements OnInit {
  fridgeForm: FormGroup<{
    model: FormControl<string>;
    capacity: FormControl<number>;
    year: FormControl<number>;
    price: FormControl<number>;
  }>;

  items: any[] = [];

  constructor(
    private apiService: ApiService,
    private notification: NzNotificationService,
    private fb: NonNullableFormBuilder
  ) {
    const { required } = ngValidators;
    this.fridgeForm = this.fb.group({
      model: ['', [required]],
      capacity: [0, [required]],
      year: [0, [required]],
      price: [0, [required]]
    });
  }

  ngOnInit() {
    this.loadFridges();
  }

  loadFridges() {
    this.apiService.getAll().subscribe(data => {
      this.items = data;
    });
  }

  submitForm(): void {
    if (this.fridgeForm.valid) {
      this.apiService.create(this.fridgeForm.value).subscribe(() => {
        this.createNotification('success', `${this.fridgeForm.value.model}`, "Fridge has been created successfully!");
        this.fridgeForm.reset();
        this.loadFridges();
      });
    } else {
      Object.values(this.fridgeForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  createNotification(type: string, title: string, message: string): void {
    this.notification.create(
      type,
      title,
      message
    );
  }

  getFridge(id: number) {
    this.apiService.getById(id).subscribe((fridge) => {
      console.log(fridge);
    });
  }

  updateFridge(id: number, model: string) {
    this.apiService.update(id, { model }).subscribe(() => {
      console.log('Fridge updated successfully!');
      this.loadFridges();
    });
  }

  deleteFridge(id: number) {
    this.apiService.delete(id).subscribe(() => {
      console.log('Fridge deleted successfully!');
      this.loadFridges();
    });
  }
}
