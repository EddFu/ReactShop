// // Tipos de componentes en React: stateful vs. stateless

// // import React, { useState } from 'react';
// import React from 'react';

// const Button = () => {
//     // const [name, setName] = useState('Hola Mundo');
//     return (
//         <div>
//             <h1>{name}</h1>
//         </div>
//     );
// }
// import React from 'react';


// import React, { Component } from 'react';


// class App extends Component {

//     constructor(){

//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>Hello World</h1>
//             </div>
//         );
//     }
// }

import React, { Component } from 'react';

function ComponentWrapper(WrapperComponent) {
    class Wrapper extends Component {
        render(){
            return <WrapperComponent {... this.props} />;
        }
    }

    return Wrapper;
}