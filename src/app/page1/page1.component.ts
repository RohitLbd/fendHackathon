import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
  constructor(private router:Router){}

  goToPage2(){
    this.router.navigate(['page2']);
  }
}
