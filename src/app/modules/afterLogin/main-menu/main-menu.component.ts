import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicheaderService } from 'src/app/core/services/dynamicheader.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

  moduleArray: string[] = ['main-menu','dashboard'];

  constructor(private dynamicheader: DynamicheaderService, private router: Router) { }
  

  onModuleClick(modulename: string){
    console.log(modulename);

    this.router.navigate([`/${modulename}`]);
  }
}
