import React, { Component } from 'react';
import './RichTextArea.css'



class RichTextArea extends Component {
    componentDidMount() {

    }
    setHTML = () => {
        return {__html: this.props.item.fields.textblob};
    }
    render() {    
        const setHTML = this.setHTML();
        return (
            <section className="container">
                <div className="rich-text">
                    <div dangerouslySetInnerHTML={setHTML}></div>
                </div>
            </section>
        );
    }
}

export default RichTextArea;
