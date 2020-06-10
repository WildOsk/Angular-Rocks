import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Banda} from '../../models/banda.model'
import { BandaServiceService } from '../../services/banda.service';

@Component({
  selector: 'app-bandas',
  templateUrl: './bandas.component.html',
  styleUrls: ['./bandas.component.css']
})
export class BandasComponent implements OnInit {

  bandas:Array<Banda>=[];

  constructor(private bandasService:BandaServiceService, private router:Router) { }

  ngOnInit(): void {
    this.bandas = this.bandasService.getBandas();
  }

  deleteBanda(id:number){
    console.log(id);
    this.bandasService.deleteBanda(id);
  }

}
