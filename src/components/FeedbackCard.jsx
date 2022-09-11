import React from 'react'
import { quotes } from '../assets'

export default class FeedbackCard extends React.Component {
  render() {
    return (
      <div
        className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px]
    md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
      >
        <img
          src={quotes}
          alt="quotes"
          className="w-[42px] h-[27px] object-contain"
        />
        <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
          {this.props.content}
        </p>

        <div className="flex flex-row">
          <img
            src={this.props.img}
            alt={this.props.name}
            className="w-[48px] h-[48px] rounded-full"
          />
          <div className="flex flex-col ml-4">
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{this.props.name}</h4>
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{this.props.title}</p>
          </div>
        </div>
      </div>
    )
  }
}
