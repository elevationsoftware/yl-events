import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

export const AddMemberModal = () => (
    <div>
        
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h3 className="text-primary m-0">Add DAH Member</h3>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form className="form-inline my-2 justify-content-center">
                    <div className="input-group">
                        <input className="form-control" type="search" placeholder="Search By Customer ID" aria-label="Filter" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" ><i className="fas fa-search"></i> Search</button>
                        </div>
                    </div>

                    <h4 className="my-3 d-block w-100 text-center">Search for members by customer ID.</h4>

                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary disabled"><i className="fas fa-user-plus"></i> Add Member</Button>
            </Modal.Footer>
        </Modal.Dialog>

        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h3 className="text-primary m-0">Add DAH Member</h3>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form className="form-inline my-2 justify-content-center">
                    <div className="input-group">
                        <input className="form-control" type="search" value="1326792" placeholder="Search By Customer ID" aria-label="Filter" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" ><i className="fas fa-search"></i> Search</button>
                        </div>
                    </div>

                    <h4 className="my-3 w-100 text-center">Customer 1326792 Found.</h4>

                    <div className="row w-100">
                        <label className="col-4 text-dark text-uppercase font-weight-bold d-inline-block text-right">Customer:</label>
                        <span className="col-8"><i class="far fa-fw fa-id-badge"></i> 1326792</span>
                    </div>
                    <div className="row w-100">
                        <label className="col-4 text-dark text-uppercase font-weight-bold d-inline-block text-right">Name:</label>
                        <span className="col-8"><i class="far fa-fw fa-user"></i> Steven Tate</span>
                    </div>
                    <div className="row w-100">
                        <label className="col-4 text-dark text-uppercase font-weight-bold d-inline-block text-right">Email:</label>
                        <span className="col-8"><i class="far fa-fw fa-envelope-open"></i> <a href="mailto:v-state@youngliving.com">v-state@youngliving.com</a></span>
                    </div>
                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary"><i className="fas fa-user-plus"></i> Add Member</Button>
            </Modal.Footer>
        </Modal.Dialog>
    </div>
);