import { Injectable } from '@angular/core';
import { LyricistCompiled } from './lyricist-compiled';

@Injectable({
  providedIn: 'root'
})
export class SamplesService {
  // Creating service to get music lyrics from Genius API
  url = 'https://genius-song-lyrics1.p.rapidapi.com/song/recommendations/?id=2396871'
  lyricsList = [];


// filteredLyrics: LyricistCompiled[] = [];

  async getSongLyrics(): Promise<LyricistCompiled[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
    // return this.lyricsList;
  }
  constructor() {
   }
}
