
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-burger',
  templateUrl: './menu-burger.component.html',
  styleUrls: ['./menu-burger.component.scss']
})
export class MenuBurgerComponent {

  constructor(private router: Router) { }
  
  @Output() MenuClosed = new EventEmitter<boolean>();

showBurger = false;

toBored(){
  this.router.navigateByUrl('/bored');
  this.MenuClosed.emit(this.showBurger);
}
toHappy(){
  this.router.navigateByUrl('/happy');
  this.MenuClosed.emit(this.showBurger);
}
toUnmotivated(){
  this.router.navigateByUrl('/unmotivated');
  this.MenuClosed.emit(this.showBurger);
}
toAngry(){
  this.router.navigateByUrl('/angry');
  this.MenuClosed.emit(this.showBurger);
}

rachidJoke(){ 
  return alert("T'as changé😧");
}

richardJoke(){
  return alert("Euh.....Sinon je fais un git clone?😒");

}

}



