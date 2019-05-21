import React, { Component } from 'react';
import Calender from './Calender'
import '../css/Form.css'

export default class Form extends Component {

  render() {
    return (
      <div className="form">
        <form name="todoform" onSubmit={this.props.onSubmit}>
          <Calender name="calender" />
          <input name="title" type="text" placeholder="タイトル ※必須" defaultValue="todoTitle" /><br/>
          <textarea name="desc" placeholder="説明を入力" defaultValue="todoContents"></textarea><br/>
          <button type="submit">todoを作成</button>
        </form>
      </div>
    );
  }
}
