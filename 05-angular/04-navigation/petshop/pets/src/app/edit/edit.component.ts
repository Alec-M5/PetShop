import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pet } from '../pet.model';
import { PetService } from '../pet.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  oldPet: Pet;
  errors: string[] = [];
  constructor(private petService: PetService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.findOne();
  }
  findOne() {
    this.route.params.subscribe( data => {
      const observable = this.petService.findONe(data['id']);
      observable.subscribe(pet => {
        console.log('this is pet ', pet);
        this.oldPet = pet;
      });
    });
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    const observable = this.petService.updatePet(form.value);
    observable.subscribe(data => {
       console.log('what were getting from on update', data);
       this.router.navigateByUrl('pets');
      }, (error) => {
       console.log(error);
       this.errors = error.error;
      });
  }
}
