import {GalleryService} from '../../services/gallery.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

    images: any;
    type: string = 'interior';

    constructor(private galleryService: GalleryService, private route: ActivatedRoute) {
        //this.route.params.subscribe(params => this.type = params.type);
    }

    ngOnInit() {
        this.loadAllImages();
    }

    private loadAllImages() {
        this.galleryService.getImages(this.type).subscribe(data => {
            this.images = data['results'];
        });
    }

}
