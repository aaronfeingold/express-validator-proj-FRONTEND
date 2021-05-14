import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import CallAPI from './components/call_api.js'

class App extends Component {

	render(){
		return(
			<CallAPI />
			);
		}
};

export default hot(module)(App);
