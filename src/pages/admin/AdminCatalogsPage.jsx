import { useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiFetch, apiJson } from '../../lib/api'
import { Button, Card, Field, GhostButton, Input } from '../../components/AdminUI'

export function AdminCatalogsPage() {
  const qc = useQueryClient()
  const [title, setTitle] = useState('')
  const [file, setFile] = useState(null)

  const listQ = useQuery({
    queryKey: ['admin', 'catalogs'],
    queryFn: () => apiJson('/api/catalog/admin/list'),
  })

  const upload = useMutation({
    mutationFn: async () => {
      if (!title) throw new Error('Başlık gerekli.')
      if (!file) throw new Error('Dosya gerekli.')
      const fd = new FormData()
      fd.set('title', title)
      fd.set('file', file)

      const res = await apiFetch('/api/catalog/admin/upload', { method: 'POST', body: fd })
      if (!res.ok) {
        let msg = res.statusText
        try {
          const data = await res.json()
          msg = typeof data?.error === 'string' ? data.error : msg
        } catch {}
        throw new Error(msg)
      }
      return res.json()
    },
    onSuccess: async () => {
      setTitle('')
      setFile(null)
      await qc.invalidateQueries({ queryKey: ['admin', 'catalogs'] })
    },
  })

  const toggleVisibility = useMutation({
    mutationFn: ({ id, visible }) =>
      apiJson(`/api/catalog/admin/visibility/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ visible }),
      }),
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['admin', 'catalogs'] })
      await qc.invalidateQueries({ queryKey: ['catalogs', 'visible'] })
    },
  })

  const del = useMutation({
    mutationFn: (id) => apiJson(`/api/catalog/admin/${id}`, { method: 'DELETE' }),
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['admin', 'catalogs'] })
      await qc.invalidateQueries({ queryKey: ['catalogs', 'visible'] })
    },
  })

  const items = listQ.data ?? []
  const err = upload.error?.message ?? upload.error?.toString?.()

  const visibleCount = useMemo(() => items.filter((x) => x.is_visible).length, [items])

  return (
    <div className="grid gap-4">
      <Card title={`Katalog Yükle (görünür: ${visibleCount}/${items.length})`}>
        <form
          className="grid gap-3 md:grid-cols-3"
          onSubmit={(e) => {
            e.preventDefault()
            upload.mutate()
          }}
        >
          <Field label="Başlık">
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </Field>
          <Field label="Dosya">
            <Input type="file" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
          </Field>
          <div className="flex items-end gap-2">
            <Button type="submit" disabled={upload.isPending}>
              {upload.isPending ? 'Yükleniyor…' : 'Yükle'}
            </Button>
            {err ? <div className="text-sm text-red-600">{err}</div> : null}
          </div>
        </form>
      </Card>

      <Card title="Tüm Kataloglar">
        {listQ.isLoading ? <div className="text-sm text-slate-600">Yükleniyor…</div> : null}
        {listQ.error ? <div className="text-sm text-red-600">Yüklenemedi.</div> : null}
        <div className="grid gap-2">
          {items.map((c) => (
            <div key={c.id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <div className="min-w-0">
                <div className="truncate text-sm font-medium text-slate-900">{c.title}</div>
                <div className="text-xs text-slate-600">{c.is_visible ? 'Görünür' : 'Gizli'}</div>
              </div>
              <div className="flex items-center gap-2">
                <GhostButton
                  type="button"
                  onClick={() => toggleVisibility.mutate({ id: c.id, visible: !c.is_visible })}
                  disabled={toggleVisibility.isPending}
                >
                  {c.is_visible ? 'Gizle' : 'Göster'}
                </GhostButton>
                <GhostButton type="button" onClick={() => del.mutate(c.id)} disabled={del.isPending}>
                  Sil
                </GhostButton>
              </div>
            </div>
          ))}
          {items.length === 0 ? <div className="text-sm text-slate-600">Katalog yok.</div> : null}
        </div>
      </Card>
    </div>
  )
}
