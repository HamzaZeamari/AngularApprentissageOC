import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from 'src/app/models/face-snap.model';
import { FaceSnapService } from 'src/app/service/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  
  facesnap !: FaceSnap;
  
  constructor(private faceSnapService : FaceSnapService,
    private route: ActivatedRoute){}
  textSnap : string = "Oh Snap !";


  snap: number = 0;

  ngOnInit(){
    const facesnapId = +this.route.snapshot.params['id'];
    this.facesnap = this.faceSnapService.getFaceSnapById(facesnapId);
  }
  OnAddSnap(){
    if(this.textSnap === "Oh Snap !"){
      this.textSnap = "Yessa !";
    }
    else{
      this.textSnap = "Phase 3 !";
    }
    this.faceSnapService.getFaceSnapById(this.facesnap.id);
  }
}
