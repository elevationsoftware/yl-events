import { connect } from 'react-redux';
import React from 'react';

export const TaskList = ({tasks,name})=>(
    <div>
        <h2>
            {name}
        </h2>
        <div>
            {tasks.map(task=>(<div>{task.name}</div>))}
        </div>
    </div>
);

const mapStateToProps = (state, {name, id})=>{
    return {
        name,
        tasks: state.tasks.filter(task=>task.group === id),
        id
    };
};

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);