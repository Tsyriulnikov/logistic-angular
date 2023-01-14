import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as L from 'leaflet'
import {PopupService} from "./popup.service";


@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  // capitals: string = '/assets/data/usa-capitals.geojson'
  capitals: string = 'https://raw.githubusercontent.com/do-community/angular-leaflet-example/master/src/assets/data/usa-capitals.geojson'

  constructor(
    private http: HttpClient,
    private popupService: PopupService) {
  }

  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {

        const marker = L.marker([lat, lon]);

        marker.bindPopup(this.popupService.makeCapitalPopup(c.properties))
        marker.addTo(map);
      }
    });
  }
}
