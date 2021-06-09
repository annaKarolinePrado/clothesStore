import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Pessoa } from './pessoa.model';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.page.html',
  styleUrls: ['./pessoa.page.scss'],
})
export class PessoaPage implements OnInit {

  pessoaId: number;
  pessoaForm: FormGroup;

  constructor(private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private pessoaService: PessoaService,
    private router: Router) {

      let pessoa = {
      id: null,
      nome: '',
      cpf: '',
      dt_nascimento: null,
      tipo: null,
      telefone: 48,
      email: 'zd@gmail.com'
    };
    this.inicializaFormulario(pessoa);

   }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      console.log("passou " + id)
      this.pessoaId = parseInt(id);
      this.pessoaService
        .getPessoa(this.pessoaId)
        .subscribe((pessoa) => {
          this.inicializaFormulario(pessoa);
        });
    }
  }

  inicializaFormulario(pessoa: Pessoa) {
    console.log(pessoa);
    this.pessoaForm = new FormGroup({
      nome: new FormControl(pessoa.nome, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ]),
      cpf: new FormControl(pessoa.cpf, Validators.required),
      dt_nascimento: new FormControl(pessoa.dt_nascimento, Validators.required),
      tipo: new FormControl(pessoa.tipo, Validators.required),
      telefone: new FormControl(pessoa.telefone, Validators.required),
      email: new FormControl(pessoa.email, Validators.required)
    })
  }

  salvar() {
    const pessoa: Pessoa = {...this.pessoaForm.value, id: this.pessoaId}
    this.pessoaService.salvar(pessoa).subscribe(
      () => this.router.navigate(['listagem-pessoa']),
      (erro) => {
        console.error(erro);
        this.toastController.create({
          message: `Não foi possível salvar o pessoa ${pessoa.nome}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
    );
  }
  get nome() {
    return this.pessoaForm.get('nome');
  }
  get cpf() {
    return this.pessoaForm.get('cpf');
  }
  get dt_nascimento() {
    return this.pessoaForm.get('dt_nascimento');
  }
  get tipo() {
    return this.pessoaForm.get('tipo');
  }
  get telefone() {
    return this.pessoaForm.get('telefone');
  }
  get email() {
    return this.pessoaForm.get('email');
  }
}
