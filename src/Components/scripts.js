import React from 'react';
import ReactDOM from 'react-dom';

// $(function(){
//     $('.hamburger-menu').on('click',function (){
//         $('.toggle').toggleClass('open');
//     });
// })

class HamburgerNav1 extends React.Component {

    constructor(){
      super();

    this.state = {
        hideBtn: false,
    }
    
  }
  getInitialState() {
    return{
      hideBtn: false
    }
  }
  onClick() {
      this.setState({hideBtn: !this.state.hideBtn})
  }
  showXOnClick(){
    this.setState({showBtn: !this.state.ShowBtn})
  }
  hideHamburgler() {
    this.setState({
      buttonHidden: false
    })
  }
  
  render() {
    return(
      <div>
      <div>
        <input className="showHideBtn" type="submit" value="display-ham" onClick={() => this.onClick()} />
      </div>
      { this.state.hideBtn ? <HideHamOnClick /> : null}
      </div>
    );
  }}
 

// class Foo extends React.Component {

//     state = { showing: true };

//     render() {
//         const { showing } = this.state;
//         return (
//             <div>
//                 <button onClick={() => this.setState({ showing: !showing })}>toggle</button>
//                 <div style={{ display: (showing ? 'block' : 'none') }}>This is visible</div>
//             </div>  
//         )
//     }
// }

class HamburgerNav extends React.Component {
  
  state = {
    showing: true,
    display: 'display',
    none: 'none'
  }

render() {
  const{ showing } = this.state;
  return(
    <div>
      <div>
        <input className="showHideBtn" type="submit" value="display-ham" onClick={() => this.setState({ showing: !showing})}></input>
        <div className="headerNav">
          <div className="hamburger-menu">
          <i style={() => this.setState({ display: (showing ? this.display : this.none)})} className="fas fa-bars toggle"></i>
          <i className="fas fa-times toggle"></i>
          </div>
        </div>
      </div>
    </div>
  );
}}

  class HideHamOnClick extends React.Component {
    render(){
      return(
        <div className="headerNav">
          <div className="hamburger-menu">
          <i className="fas fa-bars toggle"></i>
          <i className="fas fa-times toggle"></i>
          </div>
        </div>
      )
    }
}

  export default HamburgerNav;

ReactDOM.render(<HamburgerNav />, document.getElementById('root'));

  // incrementByOne() {
  //   this.setState({
  //     number: this.state.number + 1
  //   });
  // }

  // incrementByFive = () => {
  //   this.setState({
  //     number: this.state.number + 5
  //   });
  // }

  // decrementByOne() {
  //   this.setState({
  //     number: this.state.number - 1
  //   });
  // } 

   // <div className="App">
        //   <div className="App-header">
        //     <img src="{logo}" alt="App-logo" alt="logo" className="App-logo"/>
        //     <h2>Welcome to ReacT</h2>
        //   </div>
        //   <p className="App-intro">
        //     <p>The Value: {this.state.number}</p>
        //     <button onClick={() => this.incrementByOne()}>Increment by 1</button>
        //     <button onClick={this.incrementByFive}>Increment by 5</button>
        //     <button onClick={this.decrementByOne}>Decrement by 1</button>
        //   </p>
        // </div>