import React from 'react';
class Counter extends React.Component {
    state ={
        count:0,
    };
    constructor(props){
        super();
        this.state ={
        //console.log("Count");
        count: props.count,
    };
    console.log("1st");
    setInterval(() => console.log(1), 2000);
    }
    dec = () => {
    const currentCount = this.state.count;
    this.setState({
    //count:currentCount -1,
    count:currentCount - this.props.value,

    });
    };

    inc = () => {
        const currentCount = this.state.count;
    this.setState({
    //count:currentCount +1,
    count:currentCount +this.props.value,

    });
    };

componentDidMount = () => {
console.log("Mounted");
}

    render(){
        console.log("inside render");
        return(
        <>
         <p className='mt-3'>This is a Counter</p> 
         <div className="flex item-center justify-center gap-3 my-4">
         <button onClick={this.dec}> - </button>
         <p> {this.state.count}</p>
         <button onClick={this.inc}> + </button>
         </div>
        </>
);}
}

export default Counter;