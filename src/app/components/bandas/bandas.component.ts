import { Component, OnInit } from '@angular/core';
import {Banda} from '../../models/banda.model'
import { BandaServiceService } from '../../services/banda.service';

@Component({
  selector: 'app-bandas',
  templateUrl: './bandas.component.html',
  styleUrls: ['./bandas.component.css']
})
export class BandasComponent implements OnInit {

  bandas:Array<Banda>=[];

  constructor(private bandasService:BandaServiceService) { }

  ngOnInit(): void {
    this.bandas = this.bandasService.getBandas();
  }

}
