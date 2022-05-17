import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../../models/face-snap.model';
import { FaceSnapService } from '../../service/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent  implements OnInit {

  @Input() facesnap !: FaceSnap;
  
  constructor(private faceSnapService : FaceSnapService, private router : Router){}
  textSnap : string = "Oh Snap !";


  snap: number = 0;

  ngOnInit(){
  }
  OnViewShow(){
    this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`);
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
