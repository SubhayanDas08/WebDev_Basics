import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{
  newPost = 'NO CONTENT';                       //this is a property
  enteredValue = '';

  onAddPost(){                        //this is a method
    console.log(this.enteredValue);
    this.newPost = this.enteredValue;
  }
}
