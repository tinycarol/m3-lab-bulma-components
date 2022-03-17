import React from 'react'

export default function Message(props) {
  return (
    <div>
    <article className="message is-success ">
        <div className="message-header">
            <p>{props.title}</p>
            <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
            {props.text}
        </div>
    </article>
    </div>
  )
}
