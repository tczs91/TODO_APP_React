import React from 'react';

export class AddTodo extends React.Component {
  render() {
    return (
    	<form>
        <input type="text" placeholder="Todo Content" value={this.props.newTodo} />
        <button >Add</button>
        <p>
          <input type="checkbox" checked={this.props.unfinishedOnly} />
          {' '}
          Only show unfinished Todo
        </p>
      </form>
    );
  }
}