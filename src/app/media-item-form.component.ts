import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent {

  onSubmit(mediaItemForm) {
    console.log(mediaItemForm);
  }
}
