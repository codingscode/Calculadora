
import React, {Component} from 'react'
import './Calculadora.css'

import Botao from '../componentes/Botao'
import Display from '../componentes/Display'


export default class Calculadora extends Component {
    constructor(props) {
        super(props)
        this.limparMemoria = this.limparMemoria.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.adicionarDigit = this.adicionarDigit.bind(this)
    }
    
    limparMemoria() {
      console.log('limpar')
    }
      
    setOperation(operation) {
      console.log(operation)
    }
      
    adicionarDigit(n) {
      console.log(n)
    }


    render() {
        
        return (
            <div className="calculadora">
              <Display value={100}/>
              <Botao label="AC" click={this.limparMemoria} triple/>
              <Botao label="/" click={this.setOperation} operation/>
              <Botao label="7" click={this.adicionarDigit}/>
              <Botao label="8" click={this.adicionarDigit}/>
              <Botao label="9" click={this.adicionarDigit}/>
              <Botao label="*" click={this.setOperation} operation/>
              <Botao label="4" click={this.adicionarDigit}/>
              <Botao label="5" click={this.adicionarDigit}/>
              <Botao label="6" click={this.adicionarDigit}/>
              <Botao label="-" click={this.setOperation} operation/>
              <Botao label="1" click={this.adicionarDigit}/>
              <Botao label="2" click={this.adicionarDigit}/>
              <Botao label="3" click={this.adicionarDigit}/>
              <Botao label="+" click={this.setOperation} operation/>
              <Botao label="0" click={this.adicionarDigit} double/>
              <Botao label="." click={this.adicionarDigit}/>
              <Botao label="=" click={this.setOperation} operation/>
            </div>
        )
    } 

}



