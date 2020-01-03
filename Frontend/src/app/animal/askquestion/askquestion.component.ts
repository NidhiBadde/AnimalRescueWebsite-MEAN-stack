import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from '../../http.service';
import { Question } from '../../../../../Backend/api/models/askQuestion';
@Component({
  selector: 'app-askquestion',
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.scss']
})
export class AskquestionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AskquestionComponent>,public dialog: MatDialog,private _http: HttpService) { }
  Question:string;
  ngOnInit() {
  }

  closeDialog(){                                                                                                                                    //to close dialog box
    this.dialogRef.close();
  }

  addQuestion(ques) {                                                                                                                                //to submit question in the database
    this._http.addQuestion(ques).subscribe(data => {
      //console.log('inside first ' + data);
    });
  }
}
