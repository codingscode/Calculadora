
import React, {Component} from 'react'
import './Calculadora.css'

import Botao from '../componentes/Botao'
import Display from '../componentes/Display'

const estadoInicial = {
  displayValue: '0',
  limparDisplay: false,
  operation: null,
  valores: [0,0],
  atual: 0
}


export default class Calculadora extends Component {

    state = {...estadoInicial}

    constructor(props) {
        super(props)
        this.limparMemoria = this.limparMemoria.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.adicionarDigit = this.adicionarDigit.bind(this)
    }
    
    limparMemoria() {
      this.setState({...estadoInicial})
    }
      
    setOperation(operation) {
      console.log(operation)
    }
      
    adicionarDigit(n) {
      if (n === '.' && this.state.displayValue.includes('.')) {
        return
      }
      
      const limparDisplay = this.state.displayValue === '0' || this.state.limparDisplay
      const valorAtual = limparDisplay ? '' : this.state.displayValue
      const displayValue = valorAtual + n
      this.setState({displayValue, limparDisplay: false})

      if (n !== '.') {
        const i = this.state.atual
        const novoValor = parseFloat(displayValue)
        const valores = [...this.state.valores]
        valores[i] = novoValor
        this.setState({valores})
        console.log(valores)
      }
      
    }


    render() {
        
        return (
            <div className="calculadora">
              <Display value={this.state.displayValue}/>
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



