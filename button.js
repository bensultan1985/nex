import React from 'react';
import Text from 'react-native'


class Button extends React.Component {

    handleClick = (e) => {
      e.preventDefault();
      this.props.makeNew()

    }
        render() {
      return (
      <div className="button-css" onClick={this.handleClick}>
        <Text>click to add note</Text>
      </div>
    );
  }
}

export default Button;
