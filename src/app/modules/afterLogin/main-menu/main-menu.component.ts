import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicheaderService } from 'src/app/core/services/dynamicheader.service';



export const moduleArray = [
  {
    name: 'main-menu',
    submenu: [
      { name: 'profile' },
      { name: 'settings' },
    ]
  },
  {
    name: 'dashboard',
    submenu: [
      { name: 'dashboard-1' },
      { name: 'dashboard-2' },
    ]
  }
]
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

  // moduleArray: string[] = ['main-menu','dashboard'];

  moduleArray = moduleArray;



  constructor(private dynamicheader: DynamicheaderService, private router: Router) { }


  onModuleClick(modulename: string) {
    console.log(modulename);
    this.dynamicheader.setSelectedModule(modulename);
    console.log('Setting module: ', modulename, typeof(modulename));
    // const selectedModule = this.moduleArray.find((mod: any) => mod.name === modulename);
    // console.log("selectedmodule", selectedModule);
    this.router.navigate([modulename]);
  }
}
