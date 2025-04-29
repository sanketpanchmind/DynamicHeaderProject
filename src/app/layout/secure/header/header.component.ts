import { Component } from '@angular/core';
import { DynamicheaderService } from 'src/app/core/services/dynamicheader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeModule: any = '';


  constructor(private dynamicheader: DynamicheaderService){

  }
  ngOnInit(){
    console.log('Header ngOnInit');
    this.activeModule = this.dynamicheader.getSeletedModule();
    
    this.dynamicheader.selectedModuleChanged.subscribe((res: any) =>{
      console.log("Inside subscribe", res);
        this.activeModule = res;
        console.log("In Header Componet -- ",this.activeModule);
      }
    );  
  }
}
