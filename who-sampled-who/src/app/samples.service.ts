import { Injectable } from '@angular/core';
import { LyricistCompiled } from './lyricist-compiled';

@Injectable({
  providedIn: 'root'
})
export class SamplesService {
  // Creating service to get music lyrics from Genius API
lyricsList = [];

// filteredLyrics: LyricistCompiled[] = [];

  getSongLyrics(): LyricistCompiled[] {
    return this.lyricsList;
  }
  constructor() {
   }
}
