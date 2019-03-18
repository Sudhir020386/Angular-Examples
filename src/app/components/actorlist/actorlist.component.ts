import { ActorService } from './../../services/actor.service';
import { Actor } from './../../models/actor.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: ['./actorlist.component.css']
})
export class ActorlistComponent implements OnInit {

  actors: Actor[];
  listFlag: boolean;
  btnText: string;
  message: string;
  newName: string;
  newCity: string;
  selectedIndex: number;
  tmpActor: Actor;
  actorsCopy: Actor[];

  constructor(private actorService: ActorService) { }

  ngOnInit() {
    this.actors = this.actorService.actorList;
    this.listFlag = true;
    this.btnText = 'Hide List';
    this.message = '';
    this.newName = this.newCity = '';
    this.selectedIndex = -1;
    this.tmpActor = { name: '', city: '' };
    this.actorsCopy = this.actors.slice();
  }

  deleteActor(index: number) {
    this.actors.splice(index, 1);

  }

  toggleList() {
    this.listFlag = !this.listFlag;
    this.btnText = (this.listFlag) ? 'Hide List' : 'Show List';
  }

  addActor() {
    const newActor = {
      name: this.newName,
      city: this.newCity
    };
    this.actorService.addActor(newActor);
    this.newName = this.newCity = '';
  }

  editActor(index: number) {
    this.selectedIndex = index;

    //  Don't do this !! SHALLOW COPY !!
    this.tmpActor = this.actors[index];

    // DEEP COPY
    // Approach - 1(Not Recommended)
    // this.tmpActor = {
    //   name: this.actors[index].name,
    //   city: this.actors[index].city
    // };

    // Approach - 2 (Recommended)
    this.tmpActor = Object.assign({}, this.actors[index]);

  }

  saveActor(index: number) {
    this.selectedIndex = -1;
  }

  cancelEdit(index: number) {
    this.actorService.updateActor(index,this.tmpActor)
    this.selectedIndex = -1;
  }

  handleKey(index: number, event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.cancelEdit(index);
    }
  }

  sortList(property: string, direction: string) {
    this.actors.sort((prev, next) => {
      if (direction === 'ascending') {
        if (prev[property] < next[property]) { return -1; }
        if (prev[property] > next[property]) { return 1; }
        if (prev[property] === next[property]) { return 0; }
      }
      if (prev[property] > next[property]) { return -1; }
      if (prev[property] < next[property]) { return 1; }
      if (prev[property] === next[property]) { return 0; }
    })
  }

  resetList() {
    this.actors = this.actorsCopy.slice();
  }

}
