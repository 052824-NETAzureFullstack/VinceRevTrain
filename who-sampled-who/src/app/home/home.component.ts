import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section>
      <form class="big-search" text-center>
          <img src="./assets/whos_who_logo.jpg">
          <input type="text" placeholder="Look up by track name or lyrics">
          <button class="primary" type="button">Go</button>
      </form>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
