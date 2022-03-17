function FromField({ label, type, placeholder }) {
  return (
    <div>
    <div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="e.g Alex Smith" />
  </div>
</div>
  <div className="field">
  <label className="label">Email</label>
  <div className="control">
    <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
  </div>
<div className="field">
  <label className="label">Password</label>
  <div className="control">
    <input className="input" type="password" placeholder="password between 4 or 8 chars" />
  </div>
  </div>
</div>
</div>

  )
}

export default FromField