import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Job } from '../model/job';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }


  // add job
  addJob(job : Job) {
    job.id = this.afs.createId();
    return this.afs.collection('/Jobs').add(job);
  }

  // get all jobs
  getAllJobs() {
    return this.afs.collection('/Jobs').snapshotChanges();
  }

  // delete job
  deleteJob(job : Job) {
     this.afs.doc('/Jobs/'+job.id).delete();
  }

  // update job
  updateJob(job : Job) {
    this.deleteJob(job);
    this.addJob(job);
  }
    
}
