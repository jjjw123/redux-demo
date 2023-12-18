import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../../store/action';

class TodoList extends React.Component {
  handleAddTodo = () => {
    const { dispatch } = this.props;
    const text = prompt('请输入Todo项的内容:');
    if (text) {
      dispatch(addTodo(text));
    }
  };

  handleDeleteTodo = (id) => {
    const { dispatch } = this.props;
    dispatch(deleteTodo(id));
  };

  handleToggleTodo = (id) => {
    const { dispatch } = this.props;
    dispatch(toggleTodo(id));
  };

  render() {
    const { todos } = this.props;
    return (
      <div>
        <h2>Todo List</h2>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => this.handleToggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button onClick={() => this.handleDeleteTodo(todo.id)}>删除</button>
            </li>
          ))}
        </ul>
        <button onClick={this.handleAddTodo}>添加Todo</button>
      </div>
    );
  }
}

// 定义mapStateToProps函数，用于将Redux store中的状态映射到组件的props
const mapStateToProps = (state) => {
  return {
    todos: state, // 这里将整个state作为todos传递给组件
  };
};

// 使用connect函数连接组件和Redux store，并导出连接后的组件
export default connect(mapStateToProps)(TodoList);
