import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MessagePageModule } from '../pages/message/message.module';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contName="";
  contNumber="";
  contacts=[];
  constructor(public alertController: AlertController)  {}

  saveContact() {
    let contact = {
      name: this.contName,
      number: this.contNumber

    }
    this.contacts.push(contact);
    console.log(this.contacts);
    this.clearField();

  }
  clearField() {
    this.contName = "";
    this.contNumber = "";
  }
  

  async deleteConfirm(i) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to delete this contact?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.contacts.splice(i,1);
          }
        }
      ]
    });

    await alert.present();
  }


    

}
