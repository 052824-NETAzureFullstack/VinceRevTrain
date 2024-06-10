import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LyricistCompiledComponent } from "./lyricist-compiled/lyricist-compiled.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'lyricist-compiled/:id',
        component: LyricistCompiledComponent,
        title: 'Compiled Lyrics'
    }
];

export default routeConfig;