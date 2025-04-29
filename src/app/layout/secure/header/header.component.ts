import { Component } from '@angular/core';
import { DynamicheaderService } from 'src/app/core/services/dynamicheader.service';
import { moduleArray } from 'src/app/modules/afterLogin/main-menu/main-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeModule: any = '';
  activeSubMenu: any[] =[];
  selectedModule: any = '';

  constructor(private dynamicheader: DynamicheaderService){

  }
  ngOnInit(){
    console.log('Header ngOnInit');
    this.activeModule = this.dynamicheader.getSeletedModule();
    
    this.dynamicheader.selectedModuleChanged.subscribe((res: any) =>{
      console.log("Inside subscribe", res);
        this.activeModule = res;
        const module = this.dynamicheader.getSeletedModule();
        console.log("Module print in header comp --", module);
        
        console.log(moduleArray);
        this.selectedModule = moduleArray.find((mod: any) => mod.name === module);

        console.log("selected modules  -- ",this.selectedModule.submenu);
      }
    );  
  }
}
