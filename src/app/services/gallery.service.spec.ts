import {TestBed, inject} from '@angular/core/testing';
import {HttpClientModule} from "@angular/common/http";

import {GalleryService} from './gallery.service';

describe('GalleryService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [GalleryService]
        });
    });

    it('should be created', inject([GalleryService], (service: GalleryService) => {
        expect(service).toBeTruthy();
    }));
});
