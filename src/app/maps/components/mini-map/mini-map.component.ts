import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent {

  @ViewChild('map') 
  public divMap?: ElementRef;

  @Input() lngLat?: [number, number];

  ngAfterViewInit(): void {

    if(!this.divMap?.nativeElement) throw "Map Div not found";

    if(!this.lngLat) throw "LangLat can't be null";

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 13, // starting zoom
      interactive: false,
    });

    new Marker()
    .setLngLat(this.lngLat)
    .addTo(map)
    
  }

}
