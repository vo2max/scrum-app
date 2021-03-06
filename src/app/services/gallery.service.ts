import {appConfig} from '../app.config';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GalleryService {

    isTest = false;
    images: any[] = [];

    constructor(private http: HttpClient) {}

    getImages(type) {
        if (this.isTest === true) {
            return this.http.get(appConfig.apiLocalUrl + '/images.json');
        } else {
            return this.http.get(appConfig.apiUrl + '/photos/' + type);
        }
    }
}
