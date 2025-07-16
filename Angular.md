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