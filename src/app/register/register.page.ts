import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController) {}

  async register() {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      console.log('Registered user:', userCredential.user);
      this.navCtrl.navigateRoot('/home');  // Redirigir al home después del registro
    } catch (error) {
      console.error('Error registering:', error);
      // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje al usuario
    }
  }

  goBack() {
    // Método para ir hacia atrás o al home, según necesites
    this.navCtrl.navigateRoot('/home');  // Ajusta la ruta según la configuración de tu aplicación
  }
}
