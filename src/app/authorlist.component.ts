import {Component} from '@angular/core';
import {AuthorsService} from './authors.service';

@Component({
  selector: 'authors',
  // calling the method instead of the variable is called Interpolation
  // template: '<h2>{{getTitle()}}</h2>'
  // applied directives
  // changing from ' to ` to make it multiline and readable code
  // foreach loop in angular
  // * before ng whenever we plan to change the structure of DOM
  template: `
    <h2>{{getCount() +' '+ getAuthor()}}</h2>

    <ul>
      <li *ngFor="let author of authors">
        {{author}}
      </li>
    </ul>`
})
export class AuthorlistComponent {
  authors;
  countOfAuthors;
  title =  'List of Authors:';


  /*
     instead of creating an object of CourseService we pass it as dependency
      to constructor and let angular instatiate the object
      this way we have decoupled the logic from the component.
      Dependency Injection
    */
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
    this.countOfAuthors = service.getCount();
  }

  getAuthor() {
    return this.title;
  }

  getCount() {
    return this.countOfAuthors;
  }
}
