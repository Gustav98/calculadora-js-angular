import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  numeroAtual = '0';
  primeiroNumero = null;
  operador = null;
  aguardandoSegundoNumero = false;

  public getNumero(v: string){
    if(this.aguardandoSegundoNumero){
      this.numeroAtual = v;
      this.aguardandoSegundoNumero = false;
    } else {
      this.numeroAtual === '0' ? this.numeroAtual = v: this.numeroAtual += v;
    }
  }

  private fazCalculos(op, secondOp){
    switch (op) {
      case '+':
        return this.primeiroNumero += secondOp;
      case '-':
        return this.primeiroNumero -= secondOp;
      case '*':
        return this.primeiroNumero *= secondOp;
      case '/':
        return this.primeiroNumero /= secondOp;
      case '=':
        return secondOp;
    }
  }

  public getOperacao(op: string){
    if(this.primeiroNumero === null){
      this.primeiroNumero = Number(this.numeroAtual);
    }else if(this.operador){
      const resultado = this.fazCalculos(this.operador, Number(this.numeroAtual))
      this.numeroAtual = String(resultado);
      this.primeiroNumero = resultado;
    }
    this.operador = op;
    this.aguardandoSegundoNumero = true;
  }

  public limpar(){
    this.numeroAtual = '0';
    this.primeiroNumero = null;
    this.operador = null;
    this.aguardandoSegundoNumero = false;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
