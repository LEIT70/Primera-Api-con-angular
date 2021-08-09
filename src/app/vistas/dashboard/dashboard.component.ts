import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllPatients(1).subscribe(data =>{
      console.log(data)
    })
      
    
  }

}
