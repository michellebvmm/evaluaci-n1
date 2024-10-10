import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.page.html',
  styleUrls: ['./add-activity.page.scss'],
})
export class AddActivityPage {
  activity = { description: '', amount: null };

  constructor(private router: Router) {}

  onSubmit() {
    // Aquí puedes añadir la lógica para guardar la actividad
    console.log('Actividad añadida:', this.activity);
    this.router.navigate(['/activity']); // Redirigir a la página de actividad
  }
}

