import { Component, OnInit } from '@angular/core';
import { Job } from '../../model/job';
import { AuthService } from '../../shared/auth.service';
import { DataService } from '../../shared/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  jobsList: Job[] = [];
  jobObj: Job = {
    id: '',
    job_title: '',
    job_type: '',
    company_name: '',
    email: '',
    mobile: ''
  };
  id: string = '';
  job_title: string = '';
  job_type: string = '';
  company_name: string = '';
  email: string = '';
  mobile: string = '';

  constructor(private auth: AuthService, private data: DataService) { }

  ngOnInit(): void {
    this.getAllJobs();
  }

  getAllJobs() {

    this.data.getAllJobs().subscribe(res => {

      this.jobsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching job data');
    })

  }

  resetForm() {
    this.id = '';
    this.job_title = '';
    this.job_type = '';
    this.company_name = '';
    this.email = '';
    this.mobile = '';
  }

  addJob() {
    if (this.job_title == '' || this.job_type == '' || this.company_name == '' || this.mobile == '' || this.email == '') {
      alert('Fill all input fields');
      return;
    }

    this.jobObj.id = '';
    this.jobObj.email = this.email;
    this.jobObj.job_title = this.job_title;
    this.jobObj.job_type = this.job_type;
    this.jobObj.company_name = this.company_name;
    this.jobObj.mobile = this.mobile;

    this.data.addJob(this.jobObj);
    this.resetForm();

  }

  updateJob() {

  }

  deleteJob(job: Job) {
    if (window.confirm('Are you sure you want to delete ' + job.job_title + ' ' + job.job_type + ' ?')) {
      this.data.deleteJob(job);
    }
  }

}
