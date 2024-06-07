import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `

    <ul>
      <li><a href="">Recents</a></li>
      <li><a href="">Latest Hits</a></li>
      <li><a href="">Greatest Hits</a></li>
    </ul>

    <section class="musica-works" text-center>
    <img src="./assets/whos_who_logo.jpg" alt="record_scratch" height="300" width="300">
    </section>

    <section>
      <form class="big-search" text-center>
          <input type="text" placeholder="Look up by track name or lyrics">
          <button class="primary" type="button">Go</button>
      </form>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
