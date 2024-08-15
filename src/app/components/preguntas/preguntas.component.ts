import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-preguntas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './preguntas.component.html',
  styleUrl: './preguntas.component.css'
})
export class PreguntasComponent {
    navigateToLink():void {
        window.open("https://api.whatsapp.com/send/?phone=573114810880&text&type=phone_number&app_absent=0")
    }
}
