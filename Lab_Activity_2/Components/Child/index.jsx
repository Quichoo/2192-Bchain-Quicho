import React from 'react'
import './styles.css'

//Function
// const Child = (message) => {

//   return (
//     <>
//       <p>{message.message}</p>
//     </>
//   )
// }

//Class
class Child extends React.Component {
    render() {
        return (
            <>
                <p>{this.props.message}</p>
            </>
        )
    }
}

export default Child
