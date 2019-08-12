import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { ConnectedEventMembers } from './EventMembers';

export const EventDetail = ({event,match})=>(
    <main>
        <EventDetailBanner {...event} />
        <hr className="mb-3" />
        <ConnectedEventMembers match={match} />
    </main>
);

const mapStateToProps = (state, ownProps)=>{
    let id = +ownProps.match.params.id;

    return {
        event: state.events.find(evt=>evt.id === id)
    };
};

export const ConnectedEventDetail = connect(mapStateToProps)(EventDetail);

const EventDetailBanner = ({name, start, end}) => (
    <div className="d-flex align-items-center mt-5 mb-3">
        <div>
            <h1 className="mb-0">{name}</h1>
            <h3 className="subheading mb-3">
                <span className="text-primary">
                    <Moment date={start} format="MMMM Do, YYYY" /> - <Moment date={end} format="MMMM Do, YYYY" />
                </span>
                <small className="pl-1">· <Moment fromNow>{start}</Moment></small>
            </h3>
        </div>
    </div>
);