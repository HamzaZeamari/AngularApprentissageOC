import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})

export class FaceSnapService {

  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      auteur: 'Mon meilleur ami depuis tout petit !',
      image: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      datePub: new Date(),
      location: 'Paris'
    },
    {
      id: 2,
      title: 'Three Rock Mountain',
      auteur: 'Un endroit magnifique pour les randonnées.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      datePub: new Date(),
      location: 'la montagne'
    },
    {
      id: 3,
      title: 'Un bon repas',
      auteur: 'Mmmh que c\'est bon !',
      image: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      datePub: new Date(),

    }
  ];

  getAllFaceSnaps() : FaceSnap[]{
    return this.faceSnaps;
  }

  getFaceSnapById(id : number) : FaceSnap{
    const face = this.faceSnaps.find((snap) => snap.id === id);
    if(face){
      return face;
    }else{
      throw new Error("FaceSnap manquant");
    }
  }
}
