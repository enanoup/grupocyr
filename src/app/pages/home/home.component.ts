import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MailService } from '../../services/mail.service';
import swal from 'sweetalert2';

const $ = (window as any)['jQuery'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  grupocyrForm: any;
  nombre: string;
  email: string;
  telefono: string;
  servicio = '';
  mensaje: string;

  constructor(private formBuilder: FormBuilder, private mail: MailService) {
    this.grupocyrForm = this.formBuilder.group({
      nombre: new FormControl(this.nombre, Validators.required),
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      telefono: new FormControl(this.telefono, Validators.required),
      servicio: new FormControl(this.servicio, Validators.required),
      mensaje: new FormControl(this.mensaje, Validators.required)
    });
  }

  formSubmit(contactData: any) {

    this.mail.sendGrupoCyrForm(contactData.nombre, contactData.email,
      contactData.telefono, contactData.servicio, contactData.mensaje)
      .subscribe(() => {
        swal.fire(`Gracias ${ contactData.nombre }`,
        'Tu solicitud ha sido recibida, en breve nos pondremos en contacto contigo',
        'success').finally(() => {
          this.grupocyrForm.reset();
          this.servicio = '';
          console.log('A wiwi');
        });
      });
  }

  ngOnInit(): void {

         // Este codigo es para animar los anchor links

         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth', block: 'start'
            });
          });
        });

  }

  sliderInit() {
    // revolution slider
  $('.fullwidthbanner').revolution({
    delay: 6000,
    startwidth: 1170,
    startheight: 580,
    onHoverStop: 'off',
    hideTimerBar: 'on',
      thumbWidth: 100,
      thumbHeight: 50,
      thumbAmount: 3,
      hideThumbs: 200,
      navigationType: 'bullet',
      navigationArrows: 'verticalcentered',
      navigationStyle: 'preview4',
      touchenabled: 'on',
      navOffsetHorizontal: 0,
      navOffsetVertical: 20,
      stopAtSlide: -1,
      stopAfterLoops: -1,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      hideSliderAtLimit: 0,
      hideThumbsOnMobile: 'on',
     hideNavDelayOnMobile: 1500,
     hideBulletsOnMobile: 'on',
     hideArrowsOnMobile: 'on',
     hideThumbsUnderResoluition: 0,
      fullWidth: 'on',
      shadow: 0
  });

  }


}
