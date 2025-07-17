# Angular Cheat Sheet

## 🚀 Getting Started

### Installation & Setup

#### Prerequisites
Install Node.js and npm, then install TypeScript globally:
```bash
npm i -g typescript
```

#### Verify Installation
```bash
node -v
npm -v
tsc -v
```

#### Install Angular CLI
```bash
npm i -g @angular/cli
```

#### Verify Angular CLI
```bash
ng -v
```

### Project Management

#### Create New Project
```bash
ng new project-name
```

#### Run Development Server
```bash
ng serve
# or
ng s
```

#### Generate Component
```bash
ng generate component user
# or
ng g c user
```

#### Adding Bootstrap
```bash
npm i bootstrap
```

- goto angular.json
- add js and css to scripts and styles
```json
    "styles": ["node_modules/bootstrap/dist/css/bootstrap.min.css"],
    "scripts": ["node_modules/bootstrap/dist/js/bootstrap.min.js"],
```

---

## 🧩 Components

Angular offers two types of components with different dependency management approaches:

### Standalone Components
- **Independent**: Can be used anywhere in your application
- **Self-contained**: No need to declare in modules
- **Modern approach**: Recommended for new Angular applications

### Traditional Components
- **Module-dependent**: Must be declared in a module before use
- **Legacy approach**: Still widely used in existing applications
- **Requires NgModule**: Components must be added to module declarations

### Using Standalone Components

#### Step 1: Add Component Selector
Add the component selector to your HTML template:
```html
<!-- In app.component.html -->
<app-user></app-user>
```

#### Step 2: Import Component
Import the standalone component in your TypeScript file:
```typescript
// In app.component.ts
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent], // Add to imports array
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Component logic
}
```

---

## 🔄 Data Binding

Data binding enables communication between your component class and template.

### One-Way Data Binding
Data flows from component to template elements.

#### 1. Interpolation
Display component properties in the template:
```html
<p>{{ topic }}</p>
<h1>{{ title }}</h1>
<span>{{ user.name }}</span>
```

#### 2. Property Binding
Bind component properties to HTML element attributes:
```html
<img [src]="imageUrl" [alt]="imageAlt">
<button [disabled]="isDisabled">Click me</button>
<div [class]="dynamicClass"></div>
```

#### 3. Event Binding
Handle user interactions and DOM events:
```html
<button (click)="onClick()">Click me</button>
<input (change)="onInputChange($event)">
<form (submit)="onSubmit()">Submit</form>
```

### Two-Way Data Binding
Data flows in both directions between component and template.

#### NgModel Directive
Combines property and event binding for form controls:
```html
<input [(ngModel)]="username" placeholder="Enter username">
<textarea [(ngModel)]="description"></textarea>
```

#### Required Import
To use `[(ngModel)]`, import `FormsModule`:
```typescript
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  template: `<input [(ngModel)]="value">`
})
export class ExampleComponent {
  value = '';
}
```

---

## 📋 Directives

Directives are classes that add additional behavior to elements in your Angular applications. Use Angular's built-in directives to manage forms, lists, styles, and what users see.

### Types of Directives

#### 1. Component Directives
- **Most common type**: Used with a template
- **Example**: `@Component` decorator creates a component directive
- **Purpose**: Combines template, styles, and logic into reusable UI components

#### 2. Structural Directives
- **Change appearance/behavior**: Modify the appearance and behavior of an element, component, or another directive
- **Prefixed with `*`**: Use asterisk syntax in templates
- **Common examples**:

  - **ngIf**: Conditionally shows or hides elements based on boolean condition

    ```html
      <div *ngIf="isLoggedIn">Welcome back!</div>
      <p *ngIf="user.age > 18; else underage">You are an adult</p>
      <ng-template #underage>You are underage</ng-template>
    ```
  - **@if(){}**: Conditionally shows or hides elements based on boolean condition

    ```html
      @if(user.age > 18) {
          <p>You are an adult</p>
      } @else {
          <p>You are underage</p>
      }
    ```

  - **ngFor**: Repeat a node for each item in a list
  
    ```html
      <li *ngFor="let user of users">
        {{ user.name }}
      </li>
    ```

  - **@for(){}**: Repeat a node for each item in a list
  
    ```html
      @for (user of users; track user;) {
        <li>{{ user.name }}</li>
      }
      @empty{
        no users found
      }
    ```
    We can declare and use sppecial variables in a for block  - ($first, $last, $odd, $even, $count, $index)

    ```html
      @for(el of list; track el; let f=$first, l=$last, e=$even, o=$odd, c=$count, i=$index) {
        <!-- use any logics based on those variables using @if / @else -->
      }
    ```
  - **ngSwitch**: Adds or removes DOM elements based on the value of a switch expression
    ```html
      <div [ngSwitch]="userRole">
        <p *ngSwitchCase="'admin'">Admin Dashboard</p>
        <p *ngSwitchCase="'user'">User Profile</p>
        <p *ngSwitchDefault>Guest View</p>
      </div>
    ```

  - **@switch() {}**: Adds or removes DOM elements based on the value of a switch expression
    ```html
      <div>
        @switch(userRole) {
        @case('admin'){
          <p>Admin Dashboard</p>
        }
        @case('user'){
          <p>User Profile</p>
        }
        @default(){
          <p>Guest View</p>
        }
      } 
      </div>
    ```



#### 3. Attribute Directives
- **Change DOM layout**: Change the DOM layout by adding and removing DOM elements
- **Common examples**:
    - **[ngClass]**: Adds or removes a set of CSS classes
        ```html
        <h3 [ngClass]="isTextGreen? 'text-success' : 'text-danger'">Example</h3>
        ```
    - **[ngStyle]**: Adds or removes a set of HTML styles
        ```html
        <h3 [ngStyle]="{'color': styleColor, 'font-weight' : 'lighter' }">Example</h3>
        ```  
---

## 📡 Signals
- **Signal**: Wrapper around a value that notifies interested consumers when that value changes
- Reading signals value → calling its getter function (allows Angular to track signal usage)

### 1. Writable Signals
```typescript
counter = signal(0)
console.log(counter())
counter.set(3)
counter.update(value => value + 1)
```

### 2. Computed Signals
```typescript
counter: WritableSignal<number> = signal(0)
doubleCounter: Signal<number> = computed(() => counter() * 2)
```

### Why Signals?
- **Angular 18** introduced zoneless change detection - no longer need zone.js
- **Behavior Subject vs Signal**:
  ```typescript
  // RxJS
  counter = new BehaviorSubject(0);
  double = counter.pipe(map(count => count * 2));
  
  // Signals
  counter = signal(0)
  double = computed(() => counter() * 2);
  ```

---

## 🔄 Effects
- **Effect**: Operation that runs whenever one or more signal values change
```typescript
counter = signal(0)
effect(() => console.log('counter is: ' + this.counter()))
```

### Example Component
```typescript
@Component({
  selector: 'app-signals',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Signals {
  counter = signal(0);

  constructor() {
    effect(() => console.log('counter value: ' + this.counter()))
  }

  incrementCounter() {
    this.counter.update(value => value + 1)
  }

  decrementCounter() {
    this.counter.update(value => value - 1)
  }
}
```

---

## 💡 Quick Reference

### Common CLI Commands
```bash
ng new <project-name>          # Create new project
ng serve                       # Start dev server
ng build                       # Build project
ng test                        # Run tests
ng generate component <name>   # Generate component
ng generate service <name>     # Generate service
ng generate module <name>      # Generate module
```

### Component Syntax Examples
```typescript
// Standalone Component
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `<h1>{{ title }}</h1>`
})
export class ExampleComponent {
  title = 'Hello Angular';
}
```

### Data Binding Syntax
```html
<!-- Interpolation -->
{{ expression }}

<!-- Property Binding -->
<element [property]="value">

<!-- Event Binding -->
<element (event)="handler()">

<!-- Two-way Binding -->
<input [(ngModel)]="property">
```