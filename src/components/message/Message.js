const Message = ({ children, title, ...props }) => {
  const propStyles = Object.entries(props)
    .map(([key, value]) => {
      return messageClasses[key];
    })
    .join(" ");

  return (
    <div>
      <article className={`message ${propStyles} mb-6`}>
        <div class="message-header">
          <p>{title}</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">{children}</div>
      </article>
    </div>
  );
};

export default Message;

const messageClasses = {
  isInfo: "is-info",
  isBlack: "is-black",
  isCentered: "is-centered",
  isDanger: "is-danger",
};
