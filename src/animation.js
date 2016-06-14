
import {inject} from 'aurelia-framework';
import {CssAnimator} from 'aurelia-animator-css';
//import {VelocityAnimator} from 'aurelia-animator-velocity';


@inject(Element, CssAnimator)
export class Animation {
    constructor(element, animator){
        this.element = element;
        console.log(element);
        this.animator = animator;
        //this.velocity = velocity;
        console.log(animator);
        this.numbers = []
      
    }
    
    attached(){
          console.log(this.blueSquare);    
          // console.log("attached");
          var here = this;
          setTimeout(function(){here.intro()},1000);
          //this.intro();

    }

    showMe(){
        this.numbers.push(Math.random());
    }
    
    removeAnimator(number) {
        var index = this.numbers.indexOf(number);
        this.numbers.splice(index, 1);
    }


    intro(){

        // this.velocity.runSequence([
        // { e: this.square, p: { translateX: 100 }, o: { duration: 500 } },
        // { e: this.square, p: { translateX: 200 }, o: { duration: 500 } },
        // { e: this.square, p: { translateY: 300 }, o: { duration: 500 } },
        // { e: this.square, p: { translateZ: 300 }, o: { duration: 500 } },
        // { e: this.square, p: { translateY: -300 }, o: { duration: 500 } },
        // { e: this.square, p: { translateY: -300 }, o: { duration: 500 } },
        // { e: this.square, p: { translateY: 300 }, o: { duration: 500 } },
        // { e: this.square, p: { translateX: -300 }, o: { duration: 500 } },
        // { e: this.square, p: { translateX: 300 }, o: { duration: 500 } }
        // ]);
    
        this.animator.addClass(this.blueSquare, 'animate-in').then((f)=>{
            console.log('a');
        });
    }
   
     activated() {
        console.log("activated");
    }
 
    created() {
        console.log("created");
        //console.log(this.myDiv);    
      
    }
 
    activate() {
        console.log("activate");
    }
 
    canActivate() {
        console.log("canActivate");
    }    
}