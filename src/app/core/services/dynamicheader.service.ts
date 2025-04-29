import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicheaderService {

  constructor() { }

  selectedModule: string = '';
  selectedModuleChanged = new EventEmitter<string>();


  setSelectedModule(modulename: string){
    console.log('Setting module: ', modulename);
    this.selectedModule = modulename;
    this.selectedModuleChanged.emit(this.selectedModule);
  }

  getSeletedModule(){
    return this.selectedModule;
  }

}
