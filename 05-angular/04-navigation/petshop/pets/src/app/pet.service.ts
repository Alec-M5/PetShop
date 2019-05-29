import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Pet } from './pet.model';
@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  getAllPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>('/api/pets');
  }
  createPet(pet) {
    return this.http.post('/api/pets/new', pet);
  }
  deletePet(id: string): Observable<Pet> {
    return this.http.delete<Pet>(`/api/pets/${id}/adopt`);
  }
  findONe(id: string): Observable<Pet> {
    return this.http.get<Pet>(`/api/pets/${id}`);
  }
  updatePet(pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(`/api/pets/${pet._id}/edit`, pet);
  }
}
