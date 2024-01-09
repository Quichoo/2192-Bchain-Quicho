
import React from 'react'
import Child from '../Child'
//Functional
// const Parent = (message) => {
//     var message = "Hellow Motha Fatha";

//     return (
//         <>
//             <Child message={message}/>
//         </>
//     )
// }
//Class
class Parent extends React.Component {
    render(){
        const message = "Gelllow" 
        return (
            <>
                <Child message={message}/>
            </>
        )
    }
}

export default Parent
