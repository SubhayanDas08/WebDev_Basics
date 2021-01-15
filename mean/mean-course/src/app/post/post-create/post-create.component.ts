import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})

export class PostCreateComponent{
  newPost = 'NO CONTENT';                       //this is a property

  onAddPost(postInput : HTMLTextAreaElement){                        //this is a method
    console.log(postInput.value);
    this.newPost=postInput.value;
  }
}
