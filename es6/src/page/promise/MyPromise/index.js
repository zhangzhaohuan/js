import React, { Component } from 'react';
import MyPromise from './core';

export default class MyPromiseDemo extends Component {



constructor(){
    super();
    const pro = new MyPromise(function(resolve,reject){});
    console.log(pro);
    
}

    render() {
        return (
            <div>
                MyPromiseDemo
            </div>
        )
    }
}
