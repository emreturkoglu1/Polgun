import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiJson } from '../../lib/api'
import { Button, Card, Field, GhostButton, Input } from '../../components/AdminUI'

export function AdminContactsPage() {
  const qc = useQueryClient()
  const listQ = useQuery({
    queryKey: ['admin', 'contacts'],
    queryFn: () => apiJson('/api/contacts/admin'),
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [editId, setEditId] = useState(null)

  const create = useMutation({
    mutationFn: () =>
      apiJson('/api/contacts/admin', {
        method: 'POST',
        body: JSON.stringify({ name, email }),
      }),
    onSuccess: async () => {
      setName('')
      setEmail('')
      await qc.invalidateQueries({ queryKey: ['admin', 'contacts'] })
    },
  })

  const update = useMutation({
    mutationFn: ({ id, name, email }) =>
      apiJson(`/api/contacts/admin/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, email }),
      }),
    onSuccess: async () => {
      setEditId(null)
      setName('')
      setEmail('')
      await qc.invalidateQueries({ queryKey: ['admin', 'contacts'] })
    },
  })

  const del = useMutation({
    mutationFn: (id) => apiJson(`/api/contacts/admin/${id}`, { method: 'DELETE' }),
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['admin', 'contacts'] })
    },
  })

  const err = (create.error ?? update.error)?.message
  const items = listQ.data ?? []

  return (
    <div className="grid gap-4">
      <Card title={editId ? `İletişim #${editId} Düzenle` : 'İletişim Oluştur'}>
        <form
          className="grid gap-3 md:grid-cols-3"
          onSubmit={(e) => {
            e.preventDefault()
            if (editId) update.mutate({ id: editId, name, email })
            else create.mutate()
          }}
        >
          <Field label="Ad">
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Field>
          <Field label="E-posta">
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Field>
          <div className="flex items-end gap-2">
            <Button type="submit" disabled={create.isPending || update.isPending}>
              {editId ? 'Kaydet' : 'Oluştur'}
            </Button>
            {editId ? (
              <GhostButton
                type="button"
                onClick={() => {
                  setEditId(null)
                  setName('')
                  setEmail('')
                }}
              >
                İptal
              </GhostButton>
            ) : null}
          </div>
        </form>
        {err ? <div className="mt-2 text-sm text-red-600">{err}</div> : null}
      </Card>

      <Card title="İletişimler">
        {listQ.isLoading ? <div className="text-sm text-slate-600">Yükleniyor…</div> : null}
        {listQ.error ? <div className="text-sm text-red-600">Yüklenemedi.</div> : null}
        <div className="grid gap-2">
          {items.map((c) => (
            <div key={c.id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <div className="min-w-0">
                <div className="text-sm font-semibold text-slate-900">{c.name}</div>
                <div className="text-xs text-slate-600">{c.email}</div>
              </div>
              <div className="flex items-center gap-2">
                <GhostButton
                  type="button"
                  onClick={() => {
                    setEditId(c.id)
                    setName(c.name)
                    setEmail(c.email)
                  }}
                >
                  Düzenle
                </GhostButton>
                <GhostButton type="button" onClick={() => del.mutate(c.id)} disabled={del.isPending}>
                  Sil
                </GhostButton>
              </div>
            </div>
          ))}
          {items.length === 0 ? <div className="text-sm text-slate-600">İletişim yok.</div> : null}
        </div>
      </Card>
    </div>
  )
}
