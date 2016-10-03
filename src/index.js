import React, { Component, PropTypes } from 'react';
import uuid from 'uuid';
import Fresh8 from 'fresh8';

class Fresh8Compontent extends Component {
  constructor (props) {
    super(props);
    this.state = { adClassName: 'f8' };
  }

  componentDidMount () {
    if (window.fresh8) {
      this.fresh8 = window.fresh8;
    } else {
      this.fresh8 = new Fresh8({
        instID: this.props.instID,
        shouldBreakOut: this.props.shouldBreakOut,
        inApp: this.props.shouldBreakOut,
        endpoint: this.props.endpoint
      });
    }

    this.setState({ 'adClassName': 'f8-' + uuid.v4() }, () => {
      this.fresh8.requestAd({
        slotID: this.props.slotID,
        appendPoint: '.' + this.state.adClassName,
        url: this.props.url,
        view: this.props.view,
        clickTrackingRedirect: this.props.clickTrackingRedirect,
        sport: this.props.sport,
        matchID: this.props.matchID,
        match: this.props.match,
        competitorIDs: this.props.competitorIDs,
        competitors: this.props.competitors,
        competitionIDs: this.props.competitionIDs,
        competitions: this.props.competitions
      });
    });
  }

  componentWillUnmount () {
    this.fresh8.remove();
  }

  render () {
    const { adClassName } = this.state;

    return (
      <div className={adClassName}></div>
    );
  }
}

Fresh8Compontent.propTypes = {
  instID: PropTypes.string.isRequired,
  shouldBreakOut: PropTypes.bool,
  inApp: PropTypes.bool,

  slotID: PropTypes.string.isRequired,
  url: PropTypes.string,
  view: PropTypes.string,
  clickTrackingRedirect: PropTypes.string,
  sport: PropTypes.string,
  matchID: PropTypes.string,
  match: PropTypes.string,
  competitorIDs: PropTypes.array,
  competitors: PropTypes.array,
  competitionIDs: PropTypes.array,
  competitions: PropTypes.array
};

export default Fresh8Compontent;
