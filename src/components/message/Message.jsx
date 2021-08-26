import React from "react";

export default class Message extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <article className="message is-info">
        <div className="message-header">
          <p>{title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">{children}</div>
      </article>
    );
  }
}
