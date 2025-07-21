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
import { UserComponent } from './user/user.component'

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
<img [src]="imageUrl" [alt]="imageAlt" />
<button [disabled]="isDisabled">Click me</button>
<div [class]="dynamicClass"></div>
```

#### 3. Event Binding

Handle user interactions and DOM events:

```html
<button (click)="onClick()">Click me</button>
<input (change)="onInputChange($event)" />
<form (submit)="onSubmit()">Submit</form>
```

### Two-Way Data Binding

Data flows in both directions between component and template.

#### NgModel Directive

Combines property and event binding for form controls:

```html
<input [(ngModel)]="username" placeholder="Enter username" />
<textarea [(ngModel)]="description"></textarea>
```

#### Required Import

To use `[(ngModel)]`, import `FormsModule`:

```typescript
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  template: `<input [(ngModel)]="value" />`
})
export class ExampleComponent {
  value = ''
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
    <li *ngFor="let user of users">{{ user.name }}</li>
    ```

  - **@for(){}**: Repeat a node for each item in a list

    ```html
    @for (user of users; track user;) {
    <li>{{ user.name }}</li>
    } @empty{ no users found }
    ```

    We can declare and use sppecial variables in a for block - ($first, $last, $odd, $even, $count, $index)

    ```html
    @for(el of list; track el; let f=$first, l=$last, e=$even, o=$odd, c=$count,
    i=$index) {
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
      @switch(userRole) { @case('admin'){
      <p>Admin Dashboard</p>
      } @case('user'){
      <p>User Profile</p>
      } @default(){
      <p>Guest View</p>
      } }
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
    <h3 [ngStyle]="{'color': styleColor, 'font-weight' : 'lighter' }">
      Example
    </h3>
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
  counter = new BehaviorSubject(0)
  double = counter.pipe(map(count => count * 2))

  // Signals
  counter = signal(0)
  double = computed(() => counter() * 2)
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
  counter = signal(0)

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

## 🔗 Linked Signals

- **Angular 19**: Evolution of signals with linkedSignal() in developer preview
- **Timeline**:
  - Angular 16 → signal() in developer preview
  - Angular 17 → signal() becomes stable
  - Angular 18 → zoneless change detection with signals
  - Angular 19 → linkedSignal() in developer preview

### Implementation Variants:

1. **Shorthand syntax** - simplified for creating linked signals
2. **Source and computation** - define source signal and computation function

```typescript
quantitySignal = signal(1)
price = 10

// Shorthand
total = linkedSignal(() => {
  return this.quantitySignal() * this.price
})

// Source and computation
total = linkedSignal({
  source: this.quantitySignal,
  computation: () => this.quantitySignal() * this.price
})
```

---

## 🛣️ Routing

### Navigation Links

```html
<li class="nav-item">
  <a class="nav-link" routerLinkActive="active" routerLink="user">User</a>
</li>
```

### Route Configuration

```typescript
const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'path', component: ComponentName },
  { path: '**', component: PageNotFound } // Wildcard route for 404
]
```

### Key Concepts:

- **routerLink**: Navigate to specific route
- **routerLinkActive**: Add CSS class when route is active
- **redirectTo**: Redirect empty path to default route
- **pathMatch: 'full'**: Exact path matching for redirects
- **Wildcard route (`**`)\*\*: Catch-all for unmatched routes (must be last)

---

## Navigation 🧭

### Programmatic Navigation

```typescript
// Method 1: navigateByUrl
this.router.navigateByUrl('/structural-directives')

// Method 2: navigate (preferred)
this.router.navigate(['/structural-directives'])
```

### Key Differences:

- **navigateByUrl**: Navigate using URL string
- **navigate**: Navigate using array of route segments (preferred)

---

## 🔄 Lifecycle Hooks

- **Lifecycle hooks**: Series of methods that Angular calls at different stages of a component's life cycle
- Allow developers to execute specific code at specific points (initialization, updates, destruction)

### Hook Order & Usage:

1. **ngOnChanges()** → Called when an input property changes (triggers with @Input decorator)
2. **ngOnInit()** → Called once after component is initialized (API calls)
3. **ngDoCheck()** → Called every time change detection runs (button click/any event)
4. **ngAfterContentInit()** → When content is projected through ng-content element
5. **ngAfterContentChecked()** → Called after component's content has been checked
6. **ngAfterViewInit()** → Called after component's view has been initialized (ViewChild)
7. **ngAfterViewChecked()** → Called after component's view has been checked
8. **ngOnDestroy()** → Called before component is destroyed (cleanup)

---

## 🔧 Pipes

- **Pipes**: Functions that transform and format data in Angular templates
- Take data as input, perform operations, and return transformed data

### When to use Pipes:

- Format data for display
- Convert data types
- Perform calculations or aggregations
- Filter or sort data

### Built-in Pipes:

- **LowerCasePipe** – Converts text to lowercase
  ```typescript
  {
    {
      'Hello world' | lowercase
    }
  } // hello world
  ```
- **UpperCasePipe** – Converts text to uppercase
  ```typescript
  {
    {
      'Hello world' | uppercase
    }
  } // HELLO WORLD
  ```
- **TitleCasePipe** – Capitalizes the first letter of each word
  ```typescript
  {
    {
      'Hello world' | titlecase
    }
  } // Hello World
  ```
- **DatePipe** – Formats dates according to specified formats

  - (date, short, shortDate, shortTime, medium, mediumDate, mediumTime)
    ```typescript
    {
      {
        'Hello world' | date
      }
    }
    ```

- **JsonPipe** – Converts objects/data to JSON string
  ```typescript
  {
    {
      personData | json
    }
  }
  /* { 
    "name": "Nirmal", 
    "age": 30, 
    "city": "gampaha" 
  } */
  ```
- **DecimalPipe** – Formats numbers with decimal precision
  ```typescript
  {{ 3.141592653 | number:'1.4'}} //  3.1416
  {{ 3.141592653 | number:'2.5'}} // 03.14159
  {{ 3.14 | number:'2.5'}}        // 03.14000
  ```
- **PercentPipe** – Displays numbers as percentages
  ```typescript
  {
    {
      0.25 | percent
    }
  } // 25%
  ```
- **CurrencyPipe** – Formats numbers as currency values
  ```typescript
    {{ 123.20 | currency }} // $123.20
    {{ 123.20 | currency : 'EUR'}} // €123.20
  ```
- **SlicePipe** – Extracts a portion of an array/string
  ```typescript
    {{[1,2,3,4,5,6] | slice : 1:4 }}   // 2,3,4
    {{[1,2,3,4,5,6] | slice : 3 }}     // 4,5,6,
    {{[1,2,3,4,5,6] | slice : 1: -1 }} // 2,3,4,5
  ```
- **AsyncPipe** – Automatically subscribes to Observable or Promise and returns latest value
  ```typescript
    @for(item of items | async; track item){
      <li>{{ item }}</li>
    }
    // * Apple
    // * Banana
    // * Mango
  ```

### Custom Pipes:

**Creating a pipe class** → `ng g p <pipe_name>`

1. Implement the interface (transform)
2. Add the transform method to the pipe class
3. Add transformation logic in the transform method
4. Declare the pipe (import where needed)
5. Use the custom pipe (just like built-in pipes)

**Types:**

- **Pure pipes** – Only executed when input value changes
- **Impure pipes** – Executed on every change detection cycle, regardless of whether the imput value has changed

### Pure Pipes:

**Usage:**

```html
<h6>Mobile number {{ mobileNumber | custom }}</h6>
```

**Examples:**

```typescript
// Custom date pipe
@Pipe({ name: 'customDate' })
export class CustomDatePipe implements PipeTransform {
  private DatePipe = new DatePipe('en-US')
  transform(value: any, ...args: any[]): any {
    return this.DatePipe.transform(value, 'dd-MM-yy')
  }
}
```

### Impure Pipes:

- set `pure : false` in @Pipe

---

## 📝 Angular Forms 

Angular Forms is a module that provides a way to handle user input and validate form data. They offer a robust and scalable way to manage forms in Angular applications.

### When to use Angular Forms:

- Complex Form Validations
- Large-Scale Applications
- Dynamic Form Generation
- Two-Way Data Binding

### Types of Angular Forms:

- **Template-Driven Forms**: Created using HTML templates, suitable for simple forms
- **Reactive Forms**: Created programmatically using FormControl and FormGroup classes, suitable for complex forms

### Steps Creating a Template-Driven Form:

1. **FormsModule**: Import FormsModule
2. **HTML Form**: Build HTML template
3. **ngForm**: Converts to Template-driven form
4. **FormControl**: Basic building block of Angular Forms
5. **Submit the Form**: Use ngSubmit to submit form data

### Template Reference Variables:

```html
<form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
  <input
    #fname="ngModel"
    name="firstName"
    [(ngModel)]="userObject.firstName"
    required
  />
</form>
```

### Form State Properties:

- **value**: Current form/field value `<pre>value : {{ userForm.value | json }}</pre>`
- **valid/invalid**: Validation state

```
  <pre>valid : {{ userForm.valid }}</pre>
  <pre>invalid : {{ userForm.invalid }}</pre>
```

- **touched/untouched**: User interaction state

```
  <pre>touched : {{ userForm.touched }}</pre>
  <pre>untouched : {{ userForm.untouched }}</pre>
```

- **dirty/pristine**: Modification state
- **submitted**: Form submission state `<pre>submitted: {{ userForm.submitted }}</pre>`

### Validation Attributes:

- **required**: Ensures the form control has a value
- **minlength**: Ensures minimum length requirement
- **maxlength**: Ensures maximum length limit
- **pattern**: Ensures value matches specified pattern
- **email**: Ensures valid email address format

### Error Handling:

```html
@if(fname?.dirty || fname?.touched){ @if(fname?.errors?.['required']) {
<small class="text-danger">First Name is Required</small>
} @if(fname?.errors?.['minlength']) {
<small class="text-danger">Must be at least 5 characters</small>
} }
```

### Form Methods:

- **setValue()**: Sets all form control values

```typescript
  setValues (userForm: NgForm) {
      let obj = {
        firstName: 'Nirmal-setValues',
        lastName: 'Perera-setValues',
      }
      userForm.setValue(obj)
    }
```

- **patchValue()**: Updates specific form control values

```typescript
  patchValues (userForm: NgForm) {
      let obj = {
        firstName: 'Nirmal-setValues',
      }
      userForm.patchValue(obj)
    }
```

- **reset()**: Resets form to initial state

```typescript
  resetValues (userForm: NgForm) {
      // userForm.reset();
      userForm.resetForm();
  }
```

### Steps to Create a Reactive Form

1. **Import ReactiveFormsModule**
2. **Create a form instance** using FormGroup
3. **Create a form template** and map form instance to `[formGroup]`
4. **Add form controls** to your template fields using `formControlName`
5. **Handle form submission** with `(ngSubmit)` event

### Building Blocks of Reactive Forms

**FormControl:** Represents a single form input element (e.g., textbox, checkbox).

**FormGroup:** A collection of FormControl instances, allowing validation and tracking of multiple form fields together.

**FormArray:** Manages an array of FormControl or FormGroup, useful for dynamic forms like adding multiple phone numbers or addresses.

### Key Form Methods

**setValue()** - Sets values for ALL form controls (must provide complete object)

```typescript
this.reactiveForm.setValue({
  /* all fields required */
})
```

**patchValue()** - Updates specific form controls only

```typescript
this.reactiveForm.patchValue({ firstname: 'John' }) // partial update
```

**reset()** - Resets form to initial state

```typescript
this.reactiveForm.reset() // entire form
this.reactiveForm.controls['fieldName'].reset() // specific control
```

### Important Directives

- `[formGroup]` - Binds FormGroup to form element
- `formControlName` - Links input to FormControl
- `formGroupName` - References nested FormGroup
- `(ngSubmit)` - Handles form submission

### Form State Properties

- `valid`/`invalid` - Validation status
- `touched`/`untouched` - User interaction status
- `dirty`/`pristine` - Value change status
- `value` - Current form values object

### Form Creation Methods

#### Traditional Approach

```typescript
reactiveForm = new FormGroup({
  fieldName: new FormControl('initialValue'),
  nestedGroup: new FormGroup({
    nestedField: new FormControl()
  })
})
```

#### FormBuiulder Approacch
form builder is service that makes it easier to create instances of form group, form control and form array.

- inject the form builder service in to the component constructor
- use form builder to generate our components
- define the stucture of the form array

```typescript
constructor(private fb: FormBuilder) {
  this.reactiveForm = this.fb.group({
    fieldName: ['initialValue', [Validators.required]]
  });
}
```

#### Template pattern

```html
<form [formGroup]="reactiveForm" (ngSubmit)="onSubmit()">
  <input formControlName="fieldName" />
  <div formGroupName="nestedGroup">
    <input formControlName="nestedField" />
  </div>
</form>
```

### Validation

#### Built-in Validators

- **`Validators.required`** - Field is required
- **`Validators.minLength(n)`** - Minimum character length
- **`Validators.maxLength(n)`** - Maximum character length
- **`Validators.pattern('regex')`** - Pattern matching
- **`Validators.email`** - Email format validation

#### Validation Setup

```typescript
fieldName: ['', [Validators.required, Validators.minLength(5)]]
```

#### Template Validation Display

```typescript
@if(form.controls['field'].dirty || form.controls['field'].touched) {
  @if(form.controls['field'].errors?.['required']) {
    <small class="text-danger">Field is required</small>
  }
}
```

### Working with FormArray

#### Setup in Component:

```typescript
skills: this.fb.array([]) // Empty array initially

get skills(): FormArray {
  return this.reactiveForm.get('skills') as FormArray;
}

addSkill() {
  this.skills.push(this.fb.group({ skill: '' }));
}

deleteSkill(index: number) {
  this.skills.removeAt(index);
}
```

#### Template Usage:

```html
<div formArrayName="skills">
  <div *ngFor="let skill of skills.controls; let i = index">
    <div [formGroupName]="i">
      <input formControlName="skill" />
      <button (click)="deleteSkill(i)">Delete</button>
    </div>
  </div>
</div>
```

#### Template Pattern:

```html
<form [formGroup]="reactiveForm" (ngSubmit)="onSubmit()">
  <input formControlName="fieldName" />
  <div formGroupName="nestedGroup">
    <input formControlName="nestedField" />
  </div>
</form>
```

---

## 🔧 Services and Dependency Injection

### Service
A service is a self-contained, reusable piece of code that performs a specific task, making it easily shareable across multiple components within your application.

### When to Use Services?

**Share data between components**
- Create a service that contains the user information
- Inject that service into the required components

**Share business logic across multiple components**
- If you want to check some kind of eligibility, create a service that contains the logic
- Inject it to the required components, avoiding code duplication

**Interact with a database or external data source**
- API service sends an HTTP GET request to the database and receives the data as observables
- Components subscribe to access the data

### Purpose of Using Services
- **Code Organization:** Keeps code clean and maintainable
- **Reuse:** Enables code reuse across multiple components
- **Dependency Injection:** Simplifies dependency management and testing

### How Does Dependency Injection Work?
1. Provider Registration
2. Injector Creation
3. Component Requests Service
4. Injector Resolves Dependency
5. Injector Creates Service Instance
6. Injector Provides Service Instance
7. Component Uses Service

### Service Structure

```typescript
@Injectable({
  providedIn: 'root'
})
export class SharedData {
  API_URL = "https://jsonplaceholder.typicode.com/users";
  
  userData = {
    id: 1,
    name: 'Nirmal',
    username: 'nirmal123', 
    email: 'nirmal@gmail.com',
    subscription: 'basic'
  };

  constructor(private _http: HttpClient) {}

  getUserData() {
    return this._http.get(this.API_URL);
  }

  isEligibleForSubscription() {
    return this.userData.subscription == 'basic' && 
           this.userData.email.endsWith('@gmail.com');
  }
}
```

### Component Implementation
```typescript
constructor(private _sharedData: SharedData) {
  this.dummyData = this._sharedData.userData;
  this.isEligible = this._sharedData.isEligibleForSubscription();
}

getData() {
  this._sharedData.getUserData().subscribe(res => {
    this.apiData = res;
  });
}
```

### Key Concepts
- Services are **singletons** by default
- Use `@Injectable()` decorator for service classes
- Inject services via constructor with **private** keyword
- Use **underscore prefix** (`_serviceName`) naming convention
- Services can subscribe to **observables** for async data

---

## 📝 CRUD Operations

### Setup
Installing JSON Server:
```bash
npm i -g json-server@0
```

Create `db.json` at root:
```json
{
  "Users": [
    {
      "id": 1,
      "name": "John Doe",
      "username": "johndoe",
      "email": "john@example.com"
    }
  ]
}
```

Run JSON Server:
```bash
json-server --watch db.json
```

The server will run on `http://localhost:3000` by default.

### Service Implementation

The CRUD operations are handled by the `Crud` service (`crud.ts`):

```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class Crud {
  base_url: string = "http://localhost:3000/Users";

  constructor(private http: HttpClient) {}

  // READ - Get all users
  getData() {
    return this.http.get<Iuser[]>(this.base_url);
  }

  // READ - Get user by ID
  getDataById(id: number) {
    return this.http.get<Iuser>(`${this.base_url}/${id}`);
  }

  // CREATE - Add new user
  postData(data: Iuser) {
    return this.http.post(this.base_url, data);
  }

  // UPDATE - Update existing user
  putDataById(id: number, data: Iuser) {
    return this.http.put(`${this.base_url}/${id}`, data);
  }

  // DELETE - Remove user
  deleteData(id: number) {
    return this.http.delete(`${this.base_url}/${id}`);
  }
}
```

### User Interface

The `Iuser` interface defines the data structure:

```typescript
export interface Iuser {
  id?: number;
  name: string;
  username: string;
  email: string;
}
```

### Main CRUD Component

#### HTML Template (`crud.html`)
```html
<div class="container">
  <h2 class="text-center m-4">Angular Crud operations with json server</h2>
  
  <table class="table table-success table-stripped">
    <thead>
      <tr>
        <th class="col-2">Id</th>
        <th class="col-2">Name</th>
        <th class="col-2">Username</th>
        <th class="col-3">Email</th>
        <th class="col-1">Update</th>
        <th class="col-1">View</th>
        <th class="col-1">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let data of apiData">
        <td>{{ data.id }}</td>
        <td>{{ data.name }}</td>
        <td>{{ data.username }}</td>
        <td>{{ data.email }}</td>
        <td>
          <button class="btn btn-warning btn-sm m-1" (click)="onUpdate(data.id)">
            Update
          </button>
        </td>
        <td>
          <button class="btn btn-info btn-sm m-1" (click)="onView(data.id)">
            View
          </button>
        </td>
        <td>
          <button class="btn btn-danger btn-sm m-1" (click)="onDelete(data.id)">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  
  <button class="btn btn-info m-2" (click)="addNewUser()">Add New User</button>
</div>
```

#### Component Logic (`crud.ts`)
```typescript
import { Component, OnInit } from '@angular/core';
import { Crud } from '../crud';
import { Iuser } from '../iuser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.html',
  styleUrl: './crud.scss'
})
export class CRUD implements OnInit {
  apiData: Iuser[] = [];

  constructor(private crud: Crud, private router: Router) {}

  ngOnInit(): void {
    this.getAllData();
  }

  // Load all users
  getAllData() {
    this.crud.getData().subscribe(res => {
      this.apiData = res;
    });
  }

  // Navigate to add user form
  addNewUser() {
    this.router.navigateByUrl('add-user');
  }

  // Navigate to update user form
  onUpdate(id: number) {
    this.router.navigate(['update-user', id]);
  }

  // Navigate to view user details
  onView(id: number) {
    this.router.navigate(['view-user', id]);
  }

  // Delete user with confirmation
  onDelete(id: number) {
    this.crud.deleteData(id).subscribe(res => {
      alert('Record deleted successfully!');
      this.getAllData();
    });
  }
}
```

### CREATE Operation (Add User)

#### HTML Template (`add-user.html`)
```html
<div class="container">
  <form class="w-75 p-5 mt-5 mx-auto bg-info" [formGroup]="addUserForm" (ngSubmit)="onSubmit()">
    <h2 class="text-center m-4">Add User</h2>

    <div class="form-group m-3">
      <label class="form-label">Name:</label>
      <input type="text" class="form-control" placeholder="Enter the name." formControlName="name">
    </div>

    <div class="form-group m-3">
      <label class="form-label">Username:</label>
      <input type="text" class="form-control" placeholder="Enter the username." formControlName="username">
    </div>

    <div class="form-group m-3">
      <label class="form-label">Email:</label>
      <input type="email" class="form-control" placeholder="Enter the email." formControlName="email">
    </div>

    <div class="text-center m-3">
      <button class="btn btn-success btn-lg m-1" type="submit">Add</button>
      <button class="btn btn-danger btn-lg m-1" type="button" (click)="onCancel()">Cancel</button>
    </div>
  </form>
</div>
```

#### Component Logic (`add-user.ts`)
```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Crud } from '../crud';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss'
})
export class AddUser {
  addUserForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private crud: Crud
  ) {
    this.addUserForm = this.fb.group({
      name: [''],
      username: [''],
      email: ['']
    });
  }

  onSubmit() {
    this.crud.postData(this.addUserForm.value).subscribe(res => {
      this.router.navigateByUrl('crud');
    });
  }

  onCancel() {
    this.router.navigateByUrl('crud');
  }
}
```


### READ Operation (View User)

#### HTML Template (`view-user.html`)
```html
<div class="container">
  <div class="w-75 p-5 mt-5 mx-auto bg-info">
    <h2 class="text-center m-4">View User</h2>
    
    <div class="form-group m-3">
      <label class="form-label">Name:</label>
      <strong>{{ userData?.name }}</strong>
    </div>
    
    <div class="form-group m-3">
      <label class="form-label">Username:</label>
      <strong>{{ userData?.username }}</strong>
    </div>
    
    <div class="form-group m-3">
      <label class="form-label">Email:</label>
      <strong>{{ userData?.email }}</strong>
    </div>
    
    <div class="text-center m-3">
      <button class="btn btn-danger btn-lg" (click)="onClose()">Close</button>
    </div>
  </div>
</div>
```

#### Component Logic (`view-user.ts`)
```typescript
import { Component, OnInit } from '@angular/core';
import { Crud } from '../crud';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  imports: [],
  templateUrl: './view-user.html',
  styleUrl: './view-user.scss'
})
export class ViewUser implements OnInit {
  userId!: { uid: number };
  userData: any;

  constructor(
    private crud: Crud,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = {
      uid: this.activeRoute.snapshot.params['id']
    };

    console.log(this.userId.uid);

    this.crud.getDataById(this.userId.uid).subscribe(res => {
      this.userData = res;
    });
  }

  onClose() {
    this.router.navigateByUrl('crud');
  }
}
```

### UPDATE Operation (Edit User)

#### HTML Template (`update-user.html`)
```html
<div class="container">
  <form class="w-75 p-5 mt-5 mx-auto bg-info" [formGroup]="updateUserForm" (ngSubmit)="onSubmit()">
    <h2 class="text-center m-4">Update User</h2>

    <div class="form-group m-3">
      <label class="form-label">Name:</label>
      <input type="text" class="form-control" placeholder="Enter the name." formControlName="name">
    </div>

    <div class="form-group m-3">
      <label class="form-label">Username:</label>
      <input type="text" class="form-control" placeholder="Enter the username." formControlName="username">
    </div>

    <div class="form-group m-3">
      <label class="form-label">Email:</label>
      <input type="email" class="form-control" placeholder="Enter the email." formControlName="email">
    </div>

    <div class="text-center m-3">
      <button class="btn btn-success btn-lg m-1" type="submit">Update</button>
      <button class="btn btn-danger btn-lg m-1" type="button" (click)="onCancel()">Cancel</button>
    </div>
  </form>
</div>
```

#### Component Logic (`update-user.ts`)
```typescript
import { Component, OnInit } from '@angular/core';
import { Crud } from '../crud';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  imports: [ReactiveFormsModule],
  templateUrl: './update-user.html',
  styleUrl: './update-user.scss'
})
export class UpdateUser implements OnInit {
  updateUserForm: FormGroup;
  userData: any;
  userId!: { uid: number };

  constructor(
    private crud: Crud,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.updateUserForm = this.fb.group({
      id: [''],
      name: [''],
      username: [''],
      email: ['']
    });
  }

  ngOnInit(): void {
    this.userId = {
      uid: this.activeRoute.snapshot.params['id']
    };

    console.log(this.userId.uid);

    // Fetch existing user data and populate form
    this.crud.getDataById(this.userId.uid).subscribe(res => {
      this.userData = res;

      this.updateUserForm.setValue({
        id: this.userData.id,
        name: this.userData.name,
        username: this.userData.username,
        email: this.userData.email
      });
    });
  }

  onSubmit() {
    this.crud.putDataById(this.userId.uid, this.updateUserForm.value).subscribe(res => {
      this.router.navigateByUrl('crud');
    });
  }

  onCancel() {
    this.router.navigateByUrl('crud');
  }
}
```

### DELETE Operation

The DELETE operation is implemented directly in the main CRUD component:

```typescript
onDelete(id: number) {
  this.crud.deleteData(id).subscribe(res => {
    alert('Record deleted successfully!');
    this.getAllData();
  });
}
```

#### Suggested Improvements:
```typescript
onDelete(id: number) {
  if (confirm('Are you sure you want to delete this user?')) {
    this.crud.deleteData(id).subscribe({
      next: (res) => {
        alert('Record deleted successfully!');
        this.getAllData();
      },
      error: (err) => {
        alert('Error deleting record!');
        console.error(err);
      }
    });
  }
}
```

### Routing Configuration

Make sure your `app.routes.ts` includes these routes:

```typescript
import { Routes } from '@angular/router';
import { CRUD } from './crud/crud.component';
import { AddUser } from './add-user/add-user.component';
import { ViewUser } from './view-user/view-user.component';
import { UpdateUser } from './update-user/update-user.component';

export const routes: Routes = [
  { path: '', redirectTo: '/crud', pathMatch: 'full' },
  { path: 'crud', component: CRUD },
  { path: 'add-user', component: AddUser },
  { path: 'view-user/:id', component: ViewUser },
  { path: 'update-user/:id', component: UpdateUser }
];
```

### Dependencies

Ensure these modules are imported in your `app.module.ts` or component imports:

```typescript
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
```

---

## resource() and rxResource()

resource -> works with promises
rx resource -> works with observables

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
  title = 'Hello Angular'
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
    <input [(ngModel)]="property" /></element
></element>
```
