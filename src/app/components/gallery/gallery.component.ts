import {GalleryService} from '../../services/gallery.service';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

    images: any;

    constructor(private galleryService: GalleryService) {
    }

    ngOnInit() {
        this.loadAllImages();
    }

    private loadAllImages() {
        this.galleryService.getImages().subscribe(data => {
            this.images = data['results'];
        });
    }

}
