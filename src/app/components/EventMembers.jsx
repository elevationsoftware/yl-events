import React from 'react';
import { connect } from 'react-redux';
import { AddMemberModal } from './AddMemberModal';

let dragBoxStyle = {
    border: '4px dashed #000',
    borderRadius: '6px'
};

export const EventMembers = ({members}) => (

    <div>
        <form className="w-100 px-5 mb-4 position-relative d-flex flex-column align-items-center justify-content-center" style={dragBoxStyle} method="post" action="" encType="multipart/form-data">
            <i className="fas fa-upload display-1 pt-5"></i>
            <p className="subheading text-primary my-3 d-block w-100 text-center">Drag CSV files here to import</p>
            <button type="button" className="close position-absolute" style={{top:'2px',right:'5px'}} aria-label="Close">
                <i className="far fa-2x fa-window-close"></i>
            </button>
        </form>

        <h3 class="subheading text-primary">{members.length} member(s) currently whitelisted.</h3>

        <nav className="navbar navbar-light bg-light rounded-top px-2">
            <form className="form-inline my-2 my-lg-0">
                <div className="input-group">
                    <input className="form-control" type="search" placeholder="Filter" aria-label="Filter" />
                    <div className="input-group-append">
                        <div className="input-group-text" id="btnGroupAddon"><i className="fas fa-search"></i></div>
                    </div>
                </div>
            </form>

            <ul className="list-inline m-0">
                <li className="list-inline-item"><button className="btn btn-primary"><i className="fas fa-user-plus"></i> Add Member</button></li>
                <li className="list-inline-item"><button className="btn btn-secondary"><i className="fas fa-upload"></i> Import Members</button></li>
            </ul>
        </nav>

        <table className="table table-striped shadow rounded-bottom">
            <thead className="thead-dark">
                <tr>
                <th scope="col">ID</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {members.map(m => (
                    <tr key={m.customerId}>
                        <th scope="row">{m.customerId}</th>
                        <td>
                            <span className="d-none d-sm-block">{m.firstName}</span>
                            <span className="d-block d-sm-none">{m.firstName[0]}</span>
                        </td>
                        <td>{m.lastName}</td>
                        <td><a href={`mailto:${m.email}`}>{m.email}</a></td>
                    </tr>
                ))}
            </tbody>
        </table>

        <h4 className="my-5 text-center" hidden={members.length}>
            No members found for the current event.
        </h4>

        <nav>
            <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>

        <AddMemberModal />  
    </div>
);

const mapStateToProps = (state, ownProps)=>{
    
    let eventId = +ownProps.match.params.id;

    return {
        members: state.members.filter(m=>m.eventId === eventId)
    };
};

export const ConnectedEventMembers = connect(mapStateToProps)(EventMembers);