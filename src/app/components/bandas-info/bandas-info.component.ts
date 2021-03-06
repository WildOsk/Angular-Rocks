import { Component, OnInit, DoCheck } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router'
import {Banda} from '../../models/banda.model'
import {BandaServiceService} from '../../services/banda.service'

@Component({
  selector: 'app-bandas-info',
  templateUrl: './bandas-info.component.html',
  styleUrls: ['./bandas-info.component.css']
})
export class BandasInfoComponent implements OnInit, DoCheck {

  public bandaId
  public banda:Banda;
  public lastId:any;
  public bandas: Array<Banda>
  constructor(private route:ActivatedRoute,private router:Router,private bandaService:BandaServiceService) { }

  ngDoCheck(){
    this.lastId = this.bandas[this.bandas.length-1];
    console.log(this.lastId.id);

  }

  ngOnInit(): void {
    //let id=parseInt(this.route.snapshot.paramMap.get("id"))
    //this.bandaId=id;
    //observable para que cambien los datos
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id=parseInt(params.get("id"))
      this.bandaId=id;
      this.banda=this.bandaService.getBandaById(this.bandaId);
      this.bandas =this.bandaService.getBandas();
      this.lastId = this.bandas[this.bandas.length-1];
      console.log(this.lastId.id);
   
    });
  

  }
  goPrevious(){
    let previousId =this.bandaId -1;
    this.router.navigate(["/bandasInfo", previousId]);
  }
  goNext(){
    let nextId =this.bandaId +1;
    this.router.navigate(["/bandasInfo", nextId]);
  }

}
