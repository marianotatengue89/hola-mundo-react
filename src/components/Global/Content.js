import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
	constructor(){
		super();

		this.state = {
			count: 0,
			num1: 0,
			num2: 0,
			result: 0
		}

		//aqui se declaran los metodos usando el bind
		this.hadleCountClick = this.hadleCountClick.bind(this);
		this.hadleInputChanged = this.hadleInputChanged.bind(this);
		this.hadleResultClick = this.hadleResultClick.bind(this);

	}

	//Metodo que controla si el componente
	//ya cargo
	componentDidMount(){
		this.setState({
			count: 1
		})
	}

	//Metodos para manejar los eventos
	
	hadleCountClick(e){
		console.log(e);
		if(e.target.id === 'sumar'){
			this.setState({
				count: this.state.count + 1
			});
		} else if(e.target.id === 'restar' && this.state.count > 0){
			this.setState({
				count: this.state.count - 1
			});
		}
		else{
			this.setState({
				count: 0
			});
		}
	}

	hadleResultClick(e){
		this.setState({
			result: this.state.num1 + this.state.num2	
		});		
	}


	hadleInputChanged(e){
		if(e.target.id ==='num1'){
			this.setState({
				num1: Number(e.target.value)	
			});
		}
		else{
			this.setState({
				num2: Number(e.target.value)
			});	
		}		
	}

  	render() {
  		console.log('Ejecuta Render');
	    return (
	      <div className="Content">
	          <h2>Counter: {this.state.count} </h2>

		      <p>
		      	<button id="sumar" onClick={this.hadleCountClick}> + </button>
		      	<button id="restar" onClick={this.hadleCountClick}> - </button>
		      	<button id="reset" onClick={this.hadleCountClick}> Reset </button>
		      </p>

		      <h2>Calculadora</h2>

		      <p>
		      	<input id="num1" type="number" value={this.state.num1} onChange={this.hadleInputChanged} />
		      	+
		      	<input id="num2" type="number" value={this.state.num2} onChange={this.hadleInputChanged} />
				
				<button id="result" onClick={this.hadleResultClick}> = </button>		      	

				{this.state.result}
		      </p>
  	      </div>

	    );
	}
}

export default Content;
