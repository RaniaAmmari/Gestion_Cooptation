import { Component, OnInit } from '@angular/core';
import { CooptationService } from 'src/app/core/services/cooptation.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {
cooptationHistory!:any;
 constructor(private router: Router, private route: ActivatedRoute, private cooptationService: CooptationService,  private location: Location  ) {}

  ngOnInit(): void {
    this.getCooptationHistory();
  }
 getCooptationHistory(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cooptationService.getCooptationHistory(id).subscribe(data=>{this.cooptationHistory=data}); 
    console.log(this.cooptationHistory);
  }
    goBack(): void {
      this.location.back();
  }
}
