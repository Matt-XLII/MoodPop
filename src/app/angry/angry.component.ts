import { Component, Inject, OnInit } from '@angular/core';
import { FakeAPI } from '../fake-api/fake-api';
import { ThemeService } from '../services/theme.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-angry',
  templateUrl: './angry.component.html',
  styleUrls: ['./angry.component.scss'],
})
export class AngryComponent implements OnInit {
  clicked: boolean = false;
  timed: boolean = false;
  checked: boolean = false;
  checkedTimed: boolean = false;
  ageConfirmed: boolean = false;
  insultList = new FakeAPI().insultList;

  quote: string = "";
  insult: string = "";
  theme!: string;
  imageSource!: string;
  oneTimeSelected: boolean = false;
  reset: boolean = false;

  constructor(private themeService: ThemeService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.theme = this.themeService.theme;
    if (this.theme === 'male-theme') {
      this.imageSource = "assets/CartoonVenere1.jpg";
    } else if (this.theme === 'female-theme') {
      this.imageSource = "assets/CartoonVenereF2.jpg";
    } else if (this.theme === 'vegan-theme') {
      this.imageSource = 'assets/VeganEnerveF3.jfif';
    } else {
      this.imageSource = "assets/CartoonVenereF2.jpg";
    }
  }

  isClicked() {
    if (!this.ageConfirmed) {
      this.openDialog();
      return;
    }

    if (this.checked === false) {
      if (this.timed === false && this.clicked === false) {
        this.clicked = !this.clicked;
        setTimeout(() => {
          this.timed = !this.timed;
          this.insult = this.randomInsult();
        }, 750);
      } else {
        if (this.timed === true && this.clicked === true && this.reset === false) {
          this.timed = !this.timed;
          this.clicked = !this.clicked;
          this.checked = true;
          setTimeout(() => {
            this.checkedTimed = !this.checkedTimed;
          }, 750);
        }
      }
    }
  }

  randomInsult() {
    let random = Math.floor(Math.random() * this.insultList.length);
    return this.insultList[random];
  }

  redirectToPage() {
    window.open('https://www.instagram.com/accounts/login/', '_blank');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      panelClass: 'custom-dialog-container',
      data: { component: this },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'major') {
        this.ageConfirmed = true;
        this.checked = false;
        this.isClicked();
      } else if (result === 'minor') {
        this.ageConfirmed = false;
        this.checked = true;
        this.insult = "Vous devez avoir plus de 18 ans pour accéder à ce contenu.";
      }
      this.oneTimeSelected = true;
    });
  }

  toggleClickState() {
    console.log('toggleClickState has been called');
    if (!this.oneTimeSelected) {
      this.openDialog();
    }
  }

  resetClick(): void {
    if (this.checked && this.timed) {
      this.resetCard();
    } else {
      this.isClicked();
    }
  }

  resetCard(): void {
    this.clicked = false;
    this.timed = false;
    this.checked = false;
    this.checkedTimed = false;
    this.insult = "";
  }
}

@Component({
  selector: 'dialog-content',
  template: `
    <mat-dialog-content>
  <h1 mat-dialog-title>Êtes-vous majeur(e) ?</h1>
  <div [ngStyle]="{'margin-right': '10px'}">
    <button mat-button (click)="confirmAge('major')">J'ai plus de 18 ans</button>
    <button mat-button (click)="dialogRef.close('minor')">J'ai moins de 18 ans</button>
  </div>
</mat-dialog-content>

  `,
})
export class DialogContentComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { component: AngryComponent }
  ) {}

  confirmAge(response: string) {
    if (response === 'major') {
      this.data.component.ageConfirmed = true;
      this.data.component.checked = false;
      this.data.component.isClicked();
      this.dialogRef.close(response);
    } else {
      this.dialogRef.close(response);
    }
  }
}
