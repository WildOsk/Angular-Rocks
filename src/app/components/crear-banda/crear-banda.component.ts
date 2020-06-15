import { Component, OnInit } from '@angular/core';
import {Banda} from '../../models/banda.model'
import { BandaServiceService } from '../../services/banda.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-banda',
  templateUrl: './crear-banda.component.html',
  styleUrls: ['./crear-banda.component.css']
})
export class CrearBandaComponent implements OnInit {
  form:FormGroup;
  public bandas: Array<Banda>
  public lastId:any;
  constructor(private fb:FormBuilder,private bandaService:BandaServiceService,private router:Router) { }
  
  

  ngOnInit(): void {
    
    this.bandas =this.bandaService.getBandas();
    this.lastId = this.bandas[this.bandas.length-1];
    console.log(this.lastId.id);

    this.form = this.fb.group({
      nombre:[''],
      origen:[''],
      historia:[''],
      miembros:[''],
      actividad:[''],
      foto:[''],
      video:['',[Validators.required,Validators.minLength(11)]]

    })

  }

  save(){

    if(this.form.invalid){
      return Object.values(this.form.controls).forEach(ctrl => {
        ctrl.markAllAsTouched();
      });

    }

    let banda:Banda ={

      id: this.lastId.id+1,
      nombre:this.form.value.nombre,
      origen:this.form.value.origen,
      historia:this.form.value.historia,
      miembros:this.form.value.miembros,
      actividad:this.form.value.periodo,
      foto:this.form.value.foto,
      video:this.form.value.video
    }

    this.bandaService.addBanda(banda);

    this.form.reset();

    this.router.navigateByUrl('/bandas')

  }

}
