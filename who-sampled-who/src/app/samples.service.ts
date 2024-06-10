import { Injectable } from '@angular/core';
import { LyricistCompiled } from './lyricist-compiled';

@Injectable({
  providedIn: 'root'
})
export class SamplesService {
  // Creating service to get music lyrics from Genius API
  getSongLyrics(): LyricistCompiled[] {
    return this.LyricistCompiler;
  }
  constructor() { }
}
