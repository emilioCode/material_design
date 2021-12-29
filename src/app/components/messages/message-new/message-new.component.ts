import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.scss']
})
export class MessageNewComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  priorities: string[] = ['High', 'Medium', 'Low'];
  departments: any[] = [
    {
      id: 1,
      name: 'Complaints'
    },
    {
      id: 2,
      name: 'Loyalty'
    },
    {
      id: 3,
      name: 'Promotions'
    }
  ];

  constructor(private formBuilder: FormBuilder) { 
    this.firstFormGroup = this.formBuilder.group({
      emailCtrl: [ '',Validators.required ],
      priorityCtrl: [ '', Validators.required ],
      departmentCtrl: [ '', Validators.required ]
    });
    this.secondFormGroup = this.formBuilder.group({
      messageCtrl: [ '',Validators.required ]
    });
  }

  ngOnInit(): void {
  }

  getName(value: any){
    return value? value["name"]: undefined;
  }
}
