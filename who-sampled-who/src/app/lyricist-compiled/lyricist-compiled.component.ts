import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyricistCompiled } from '../lyricist-compiled';

@Component({
  selector: 'app-lyricist-compiled',
  standalone: true,
  imports: [],
  template: `
   <section class="Lyrics">
      <!-- <h2 class="song">{{}}</h2> -->
      
   </section>
  `,
  styleUrl: './lyricist-compiled.component.css'
})
export class LyricistCompiledComponent {
  @Input() LyricistCompiled!: LyricistCompiled;
}
