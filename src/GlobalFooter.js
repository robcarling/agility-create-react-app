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
        referenceName: "globalfooter",
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

  renderFooter = () => {
    if (this.state.contentItem != null) {
      return <div dangerouslySetInnerHTML={{__html: this.state.contentItem.fields.footerText}}></div>
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
