import { Component, inject } from '@angular/core';
import { LyricistCompiledComponent } from '../lyricist-compiled/lyricist-compiled.component';
import { LyricistCompiled } from '../lyricist-compiled';
import { SamplesService } from '../samples.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LyricistCompiledComponent],
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
  lyricsList: LyricistCompiled[] = [];
  sampleService: SamplesService = inject(SamplesService);
}
