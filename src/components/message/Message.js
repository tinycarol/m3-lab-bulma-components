const Message = ({ title, children }) => {
  return (
    <div className="columns">
      <div className="column is-half is-offset-one-quarter">
        <article className="message is-primary">
          <div className="message-header">
            <p>{title}</p>
            <button className="delete" aria-label="delete"></button>
          </div>
          <div className="message-body">
            {children}
          </div>
        </article>
      </div>
    </div>
  )
}

export default Message;


