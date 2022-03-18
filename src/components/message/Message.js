import './Message.css';

const Message = () => {
  return (
    <div className="MessageBox">
      <article className="message is-info">
        <div className="message-header">
          <p>Info</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>
        </div>
      </article>
    </div>
  );
};
export default Message;
