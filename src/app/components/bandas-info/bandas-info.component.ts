import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router'

@Component({
  selector: 'app-bandas-info',
  templateUrl: './bandas-info.component.html',
  styleUrls: ['./bandas-info.component.css']
})
export class BandasInfoComponent implements OnInit {

  public bandaId
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //let id=parseInt(this.route.snapshot.paramMap.get("id"))
    //this.bandaId=id;
    //observable para que cambien los datos
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id=parseInt(params.get("id"))
      this.bandaId=id;
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
