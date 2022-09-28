import './Message.css';

function Message ({ isInfo, title, children }) {
 
    return (
      <article className={`message ${isInfo} Message-container`}>
        <div className="message-header">
          <p>{title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">{children}</div>
      </article>
    );
}

export default Message;