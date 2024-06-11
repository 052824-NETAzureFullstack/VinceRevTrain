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
          <input type="text" placeholder="Look up by track name or lyrics" #filter>
          <button class="primary" type="button" (click)="filterResults(filter.value)">Go</button>
          <!-- NEEDS ATTENTION <app-lyricist-compiled *ngFor="let lyricist-compiled of filteredLyrics" [lyricist-compiled]="lyricist-compiled"></app-lyricist-compiled> -->
      </form>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  filterResults(text: string) {
    if (!text) {
      this.filteredLyrics = this.lyricsList;
      return;
    }

    this.filteredLyrics = this.lyricsList.filter(LyricistCompiled => LyricistCompiled?.lyrics.toLowerCase().includes(text.toLowerCase()));
  }
  lyricsList: LyricistCompiled[] = [];
  sampleService: SamplesService = inject(SamplesService);
  filteredLyrics: LyricistCompiled[] = [];

constructor() {
  this.lyricsList = this.sampleService.getSongLyrics();
  this.filteredLyrics = this.lyricsList;
}
}
