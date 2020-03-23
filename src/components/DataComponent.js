import React from 'react';

const DataComponent = (ComposedComponent)=>
  class DataComponent extends React.Component{
    constructor(props){
      super(props);
      this.state={
        data:[]
      }
    }
    componentDidMount(){
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((response)=> (response.json()))
        .then(data=> this.setState({
          data:data.message
        }))


    }

    render(){
      return <ComposedComponent {...this.state} {...this.props}/>
    }
  }

export default DataComponent
