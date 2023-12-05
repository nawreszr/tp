import { Component,OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/Face-Snaps-service';
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapService.faceSnaps;
    }
  constructor(private faceSnapService: FaceSnapsService) { }
  }
