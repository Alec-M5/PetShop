import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pet } from '../pet.model';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets: Pet[];
  selectedPet: Pet;
  constructor(private petService: PetService, private router: Router) { }

  ngOnInit() {
    this.getAllPetsFromService();
  }
  getAllPetsFromService() {
    const observable: Observable<Pet[]> = this.petService.getAllPets();
    observable.subscribe(data => {
      console.log(data);
      this.pets = data;
    });
  }
  onDelete(id: string): void {
    console.log('our id is ', id);
    this.petService.deletePet(id).subscribe(data => {
      console.log('deleting: ', data);
      // this.pets = this.pets.filter( petFromArray => petFromArray._id !== data);
      this.getAllPetsFromService();
    });
  }
  //not needed
  // viewPet(id: string){
  //   console.log('our id: ', id);
  //   this.router.navigate(['/pets/',id]);
  // }
}
