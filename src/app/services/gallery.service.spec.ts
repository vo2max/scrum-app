import {TestBed, inject} from '@angular/core/testing';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {GalleryService} from './gallery.service';

describe('GalleryService', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule],
            providers: [GalleryService]
        });
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
    });
    afterEach(() => {
        // After every test, assert that there are no more pending requests.
        httpTestingController.verify();
    });

    it('should be created', inject([GalleryService], (service: GalleryService) => {
        expect(service).toBeTruthy();
    }));

    it('can test HttpClient.get', () => {
        const testData: any = {name: 'Test Data'};

        // Make an HTTP GET request
        httpClient.get<any>('/photos')
            .subscribe(data =>
                // When observable resolves, result should match test data
                expect(data).toEqual(testData)
            );

        // The following `expectOne()` will match the request's URL.
        // If no requests or multiple requests matched that URL
        // `expectOne()` would throw.
        const req = httpTestingController.expectOne('/photos');

        // Assert that the request is a GET.
        expect(req.request.method).toEqual('GET');

        // Respond with mock data, causing Observable to resolve.
        // Subscribe callback asserts that correct data was returned.
        req.flush(testData);

        // Finally, assert that there are no outstanding requests.
        httpTestingController.verify();
    });
});
