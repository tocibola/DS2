import { Injectable } from '@angular/core';

let config_key_name = "config";

@Injectable()
export class UserConfigProvider {

  private config = {
    logado: false,
    nome: "",
    matricula: "",
    password: "",
    curso: "",
  }

  constructor() {

  }

  //recuperar os dados do localstorage
  getConfigData(): any {
    return localStorage.getItem(config_key_name);
  }

  //salvar os dados no localstorage
  setConfigData(logado?: boolean, nome?: string, matricula?: string, password?: string, curso?: string) {
    let config = {
      logado: false,
      nome: "",
      matricula: "",
      password: "",
      curso: "",
    };

    if (logado) {
      config.logado = logado;
    }
    if (nome) {
      config.nome = nome;
    }

    if (matricula) {
      config.matricula = matricula;
    }

    if (password) {
      config.password = password;
    }

    if (curso) {
      config.curso = curso;
    }

    localStorage.setItem(config_key_name, JSON.stringify(config));
  }



}
