import {GalleryService} from './services/gallery.service';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    title = 'scrum-app';
    images: any;

    constructor(private galleryService: GalleryService) {
    }

    ngOnInit() {
        this.loadAllImages();
    }

    private loadAllImages() {
        this.galleryService.getImages().subscribe(data => {
            this.images = data;
        });
    }
}
