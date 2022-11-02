import React, { Component } from 'react';

class Event extends Component {
  state = {
    detailsVisible: false,
  };

  handleDetailsToggled = () => {
    if (!this.state.detailsVisible) {
      this.setState({
        detailsVisible: true,
      });
    } else {
      this.setState({
        detailsVisible: false,
      });
    }
  };

  render() {
    const { event } = this.props;
    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <p className="information">
          {event.start.dateTime} {event.start.timeZone} {event.location}
        </p>
        {this.state.detailsVisible ? (
          <>
            <div className="details">
              <h3 className="details-title">About event:</h3>
              <a href={event.htmlLink} className="details-link">
                See details on Google Calendar
              </a>
              <p className="details-description">{event.description}</p>
            </div>
            <button
              className="hide-details details-btn"
              onClick={this.handleDetailsToggled}
            >
              hide details
            </button>
          </>
        ) : (
          <button className="show-details details-btn" onClick={this.handleDetailsToggled}>
            show details
          </button>
        )}
      </div>
    );
  }
}

export default Event;