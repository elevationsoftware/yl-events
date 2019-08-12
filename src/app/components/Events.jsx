import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';

export const Events = ({events}) => (
    <section>
        <h2 class="mt-5 mb-2">Upcoming Events <i class="fa-fw fa-xs fas fa-reply fa-flip-horizontal"></i></h2>
        <ol class="list-unstyled">
        {events.filter(evt => !evt.start.startsWith('2019')).map((evt) => (
            <li class="d-flex align-items-center justify-content-between mb-3" key={evt.id}>
                <div class="w-75">
                    <h3 class="mb-0">{evt.name}</h3>
                    <h4 class="subheading mb-3">
                        <span class="text-primary">
                            <Moment date={evt.start} format="MMMM Do, YYYY" /> - <Moment date={evt.end} format="MMMM Do, YYYY" />
                        </span>
                        <small class="pl-1">· <Moment fromNow>{evt.start}</Moment></small>
                    </h4>
                    <p>{evt.description}</p>
                </div>
                <aside class="ml-auto">
                    <NavLink role="button" className={'btn-lg btn-primary shadow'} to={`/events/${evt.id}`}><i class="far fa-edit"></i><span class="pl-2 d-none d-sm-inline">Edit</span></NavLink>
                </aside>
            </li>
        ))}
        </ol>
        
        <hr class="m-0"></hr>

        <h2 class="mt-5 mb-2">Past Events <i class="fa-fw fa-xs fas fa-reply"></i></h2>
        <ol class="list-unstyled">
        {events.filter(evt => evt.start.startsWith('2019')).map((evt) => (
            <li class="d-flex align-items-center justify-content-between mb-3" key={evt.id}>
                <div class="w-75">
                    <h3 class="mb-0">{evt.name}</h3>
                    <h4 class="subheading mb-3">
                        <span class="text-primary">
                            <Moment date={evt.start} format="MMMM Do, YYYY" /> - <Moment date={evt.end} format="MMMM Do, YYYY" />
                        </span>
                        <small class="pl-1">· <Moment fromNow>{evt.start}</Moment></small>
                    </h4>
                    <p>{evt.description}</p>
                </div>
                <aside class="ml-auto">
                    <NavLink role="button" className={'btn-lg btn-primary shadow'} to={`/events/${evt.id}`}><i class="far fa-file-archive"></i><span class="pl-2 d-none d-sm-inline">Archive</span></NavLink>
                </aside>
            </li>
        ))}
        </ol>

    </section>
);

function mapStateToProps(state){
    return {
        events: state.events
    };  
}

export const ConnectedEvents = connect(mapStateToProps)(Events);