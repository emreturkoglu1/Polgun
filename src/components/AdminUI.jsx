export function Card({ title, children }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      {title ? <div className="mb-3 text-sm font-semibold text-slate-900">{title}</div> : null}
      {children}
    </div>
  )
}

export function Field({ label, children }) {
  return (
    <label className="block">
      <div className="mb-1 text-xs font-medium text-slate-700">{label}</div>
      {children}
    </label>
  )
}

export function Input(props) {
  return (
    <input
      {...props}
      className={[
        'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none',
        'focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400',
        props.className ?? '',
      ].join(' ')}
    />
  )
}

export function Textarea(props) {
  return (
    <textarea
      {...props}
      className={[
        'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none',
        'focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400',
        props.className ?? '',
      ].join(' ')}
    />
  )
}

export function Button(props) {
  return (
    <button
      {...props}
      className={[
        'inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        props.className ?? '',
      ].join(' ')}
    />
  )
}

export function GhostButton(props) {
  return (
    <button
      {...props}
      className={[
        'inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-900',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        props.className ?? '',
      ].join(' ')}
    />
  )
}
