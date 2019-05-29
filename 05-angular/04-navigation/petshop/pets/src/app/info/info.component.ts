import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet.model';
import { PetService } from '../pet.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  pet: Pet;
  newPet: Pet = new Pet();

  constructor(private petService: PetService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() { this.findOne(); }

  findOne() {
    this.route.params.subscribe( data => {
      const observable = this.petService.findONe(data['id']);
      observable.subscribe(pet => {
        console.log('this is pet ', pet);
        this.pet = pet;
      });
    });
  }
  // onEdit() {
  //   this.route.params.subscribe( data => {
  //   this.router.navigate(['/pets/edit/' + data['id']]);
  //   });
  // }
}
