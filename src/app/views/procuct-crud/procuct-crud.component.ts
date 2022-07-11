import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procuct-crud',
  templateUrl: './procuct-crud.component.html',
  styleUrls: ['./procuct-crud.component.scss']
})
export class ProcuctCrudComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate():void{
    this.router.navigate(['/products/create']);
    
  }
}
