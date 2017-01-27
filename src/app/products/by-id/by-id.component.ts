import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component( {
    selector: 'app-products-by-id',
    templateUrl: './by-id.component.html',
    styleUrls: ['./by-id.component.css']
})
export class ByIdComponent implements OnInit {

    id: string;

    constructor( public route: ActivatedRoute ) {
        route.params.subscribe( params => { this.id = params['id']; });
    }

    ngOnInit() {
    }

}
