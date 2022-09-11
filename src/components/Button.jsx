import React from 'react'

export default class Button extends React.Component {
  render() {
    return (
      <button
        type="button"
        className={`py-4 px-6 bg-blue-gradient rounded-[10px] font-poppins font-medium text-[18px] text-primary outline-none ${
          this.props.btnStyle
        }`}
      >
        {this.props.text}
      </button>
    )
  }
}
