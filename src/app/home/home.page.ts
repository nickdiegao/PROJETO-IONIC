import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) {}
  
  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Nicholas Diego - 01436621',
      buttons: ['OK']
    });

    await alert.present();
  }
}
