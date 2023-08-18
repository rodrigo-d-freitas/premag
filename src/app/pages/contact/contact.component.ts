import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacts } from 'src/app/models/Contacts';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm! : FormGroup;
  contact! : Contacts;
  formResult : string = '';
  sendgridApiKey = environment.sendgridApiKey;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {

    this.contactForm = this.fb.group({
      premagFormNome: ['', Validators.required],
      premagFormEmail: ['', [Validators.required, Validators.email]],
      premagFormEndereco: [''],
      premagFormTelefone: [''],
      premagFormCelular: [''],
      premagFormAssunto: [''],
      premagFormMensagem: ['']
    });
  }

  adicionarContato() {
    if(this.contactForm.dirty && this.contactForm.valid) {
      this.contact = Object.assign({}, this.contact, this.contactForm.value);
      this.formResult = JSON.stringify(this.contactForm.value);

      const sendgridApiKey = environment.sendgridApiKey;
      const sendgridUrl = 'https://api.sendgrid.com/v3/mail/send';

      const data = {
        personalizations: [
          {
            to: [{ email: 'rodrigo.d.freitas@outlook.com' }]
          }
        ],
        from: { email: this.contact.email },
        subject: this.contact.assunto,
        content: [{ type: 'text/plain', value: this.contact.mensagem }]
      };

      this.http.post(sendgridUrl, data, {
        headers: {
          Authorization: `Bearer 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`
        }
      }).subscribe(
        (response) => {
          console.log('E-mail enviado com sucesso!', response);
        },
        (error) => {
          console.error('Erro ao enviar o e-mail:', error);
        }
      );
    }
  }
}
