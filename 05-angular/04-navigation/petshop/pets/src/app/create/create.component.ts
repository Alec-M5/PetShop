import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Pet } from '../pet.model';
import { observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newPet: Pet = new Pet();
  errors: string[] = [];
  constructor(private petService: PetService, private route: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    const obvservable = this.petService.createPet(this.newPet);
    obvservable.subscribe(data => {
      console.log(`got some stuff`, data);
      this.newPet = new Pet();
      this.route.navigate(['/pets']);
    }, (error) => {
      console.log(error);
      this.errors = error.error;
    });
  }
}
