import { Actor } from './../models/actor.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ActorService {

  actorList: Actor[];

  constructor() {
    this.actorList = [
      { name: 'Sudhir Kumar', city: 'Delhi' },
      { name: 'Manish Kumar', city: 'Pune' },
      { name: 'Sujeet Kumar', city: 'AurangaBad' },
      { name: 'Aman Kumar', city: 'GhaziaBad' },
      { name: 'Rahul Kumar', city: 'Dehradun' }
    ];
  }

  getActorList() {
    return this.actorList;
  }

  addActor(actor: Actor) {
    this.actorList.push(actor);
  }

  deleteActor(index: number) {
    this.actorList.splice(index, 1);
  }

  updateActor(index: number, actor: Actor) {
    this.actorList.splice(index, 1, actor);
  }


}
