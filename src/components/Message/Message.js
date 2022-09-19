import './Message.css';

function Message(props) {
    return (
        <article class={`message ${props.classy}`}>
            <div class="message-header">
                <p>{props.title}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {props.children}
            </div>
        </article>
    )
}

export default Message;