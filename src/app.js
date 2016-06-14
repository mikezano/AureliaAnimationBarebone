export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { 
      	route: ['','welcome'],  
      	name: 'welcome',      
      	moduleId: 'welcome',      
      	nav: true, title:'Welcome' 
      },
      { 
      	route: 'animation',         
      	name: 'animation',        
      	moduleId: 'animation',        
      	nav: true, title:'Animation' 
      }
    ]);

    this.router = router;
  }
}