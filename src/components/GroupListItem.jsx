import React from 'react';
// import { browserHistory } from 'react-router';

class GroupListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
    this.handleMessageClick = this.handleMessageClick.bind(this);
    this.state = {
      showDetails: false,
    };
    this.details = (<span><p><strong>Location:</strong> {props.item.loc}</p>
      <p><strong>Availability:</strong> {props.item.avail}</p>
      <p><strong>Details:</strong> {props.item.details}</p></span>)
  }
  handleDetailsClick() {
    this.state.showDetails ? this.state.showDetails = false : this.state.showDetails = true;
    this.forceUpdate();
  }

  handleMessageClick() {
    console.warn('handleMessageClick works');
  }

  render() {
    return (
      <tr>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.genre}</td>
        <td onClick={this.handleDetailsClick}>
          {this.state.showDetails ? this.details : 'Click for More Details'}
        </td>
        <td onClick={this.handleMessageClick}>
          <img alt="Message" src="http://www.rcuniverse.com/images/email-icon.jpg" />
        </td>
      </tr>
    );
  }
}

export default GroupListItem;
