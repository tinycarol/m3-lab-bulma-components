const Message = ({ title, children }) => {
  return (
    <div>
      <article className="message is-primary mt-5">
        <div className="message-header">
          <p>{title}</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {children}
        </div>
      </article>
    </div>
  )
}

export default Message;


