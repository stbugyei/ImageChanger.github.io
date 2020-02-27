import React, { Component } from 'react'
import Beach from "./images/beach.jpg";
import Boston from "./images/boston.jpg";
import Nature from "./images/nature.jpg";
import Nature1 from "./images/nature1.jpg";
import Turkey from "./images/turkey.jpg";
import Ecosystem from "./images/ecosystem..jpg";


class ChangeImage extends Component {

    constructor() {
        super()
        this.ClickNext = this.ClickNext.bind(this)
        this.state = {
            index: 0,
            ImgList: [Beach, Boston, Nature, Nature1, Turkey, Ecosystem]
        }
    }


    ClickNext = () => {
        if (this.state.index + 1 === this.state.ImgList.length) {
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    render() {
        return (
            <div>
                <div className='ChangeImage'>
                    <img src={this.state.ImgList[this.state.index]} alt=' ' />
                </div>
                <button className = 'btn'onClick={this.ClickNext}>NEXT</button>
            </div>
        )
    }
}
export default ChangeImage

