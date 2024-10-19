import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
  
  constructor(private router:Router){}

  goToPage1(){
    this.router.navigate(['page1']);
  }
}
