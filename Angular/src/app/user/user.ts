import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-user',
  imports: [
    // RouterLink
  ],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  // topic : any;

  constructor(private router : Router) {
    // this.topic = "Angular learning"
    console.log("Constructor called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    // use for component's input property
      console.log("1. ngOnChanges called.");
  }

  ngOnInit(): void {
      //  use for API calls
      console.log("2. ngOnInit called.")
  }

  ngDoCheck(): void {
      // use for every change detection
      console.log("3. ngDoCheck called.")
  }

  ngAfterContentInit(): void {
      // use for ng content
      console.log("4. ngAfterContentInit called.")
  }

  ngAfterContentChecked(): void {
      // use for view changes
      console.log("5. ngAfterContentChecked called.")
  }

  ngAfterViewInit(): void {
      // use for viewChild
      console.log("6. ngAfterViewInit called.")
  }

  ngAfterViewChecked(): void {
      // use for view changes
      console.log("7. ngAfterViewChecked called.")
  }
  
  ngOnDestroy(): void {
      // use for component destroy
      console.log("8. ngOnDestroy called.")
  }
  

  loginData() {
    //  user verification login
    // this.router.navigateByUrl("/structural-directives")
    this.router.navigate(['/structural-directives'])
  }
}
