import {appConfig} from '../app.config';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GalleryService {

    images: any[] = [];

    constructor(private http: HttpClient) {}

    getImages() {
        return this.http.get(appConfig.apiUrl + '/images.json');
    }
}
