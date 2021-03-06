import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {GalleryService} from './services/gallery.service';
import {InfoFormComponent} from './components/info-form/info-form.component';
import {RouterModule, Routes} from '@angular/router';
import {GalleryComponent} from './components/gallery/gallery.component';
import { ExteriorGalleryComponent } from './components/exterior-gallery/exterior-gallery.component';

const appRoutes: Routes = [
    {path: 'info', component: InfoFormComponent},
    {path: 'gallery/interior', component: GalleryComponent},
    {path: 'gallery/exterior', component: ExteriorGalleryComponent},
    {path: '', redirectTo: '/gallery/exterior', pathMatch: 'full'},
];

@NgModule({
    declarations: [
        AppComponent,
        InfoFormComponent,
        GalleryComponent,
        ExteriorGalleryComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes,
            //{enableTracing: true} // <-- debugging purposes only
        )
    ],
    providers: [GalleryService],
    bootstrap: [AppComponent]
})
export class AppModule {}
