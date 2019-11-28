export class Marker {
    public lat: number;
    public lng: number;
    public title: string;
    public desc: string;

    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
        this.title = 'No title';
        this.desc = 'No description';
    }
}