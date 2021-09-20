import React, { Component } from 'react'
import Text from 'react-native'


export class DelButton extends Component {
    constructor(props) {
        super(props)
    }

    handleDel = (e) => {
        e.preventDefault()
        this.props.delNote(this.props.note)
      }

    render() {
        return (
            <div className="delbutton" onClick={this.handleDel}>
                <Text>delete note</Text>
            </div>
        )
    }
}

export default DelButton;