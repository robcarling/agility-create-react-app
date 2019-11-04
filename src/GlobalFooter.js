import React, { Component } from 'react';
import './GlobalFooter.css'

class GlobalFooter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contentItem: null
    }
  }

  async componentDidMount() {
    const api = this.props.agility.client;

    try {
      //get the global footer
      let contentItemList = await api.getContentList({
        referenceName: "GlobalFooter",
        languageCode: this.props.agility.config.languageCode
      });

      if (contentItemList && contentItemList.items) {
        let contentItem = contentItemList.items[0];

        this.setState({ contentItem: contentItem });
      }
    } catch (error) {
      if (console) console.error("Could not load global footer item.", error);
    }
  }

  setHTML = () => {
    return {__html: this.state.contentItem.fields.textblob};
  }

  renderFooter = () => {
    const setHTML = this.setHTML();
    if (this.state.contentItem != null) {
      return <div dangerouslySetInnerHTML={setHTML}></div>
      // return this.state.contentItem.fields.textblob
    }
  }

  render() {    
      return (
        <footer className="footer">
          <div className="container">
            {this.renderFooter()}
          </div>
        </footer>
      );
  }

}

export default GlobalFooter;
