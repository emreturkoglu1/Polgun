import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiJson } from '../../lib/api'
import { Button, Card, Field, GhostButton, Input, Textarea } from '../../components/AdminUI'

export function AdminFairsPage() {
  const qc = useQueryClient()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [start_date, setStartDate] = useState('')
  const [end_date, setEndDate] = useState('')
  const [website, setWebsite] = useState('')

  const listQ = useQuery({
    queryKey: ['admin', 'fairs'],
    queryFn: () => apiJson('/api/fairs/admin/all'),
  })

  const create = useMutation({
    mutationFn: () =>
      apiJson('/api/fairs/admin', {
        method: 'POST',
        body: JSON.stringify({ title, description, location, start_date, end_date, website }),
      }),
    onSuccess: async () => {
      setTitle('')
      setDescription('')
      setLocation('')
      setStartDate('')
      setEndDate('')
      setWebsite('')
      await qc.invalidateQueries({ queryKey: ['admin', 'fairs'] })
      await qc.invalidateQueries({ queryKey: ['fairs', 'visible'] })
    },
  })

  const del = useMutation({
    mutationFn: (id) => apiJson(`/api/fairs/admin/${id}`, { method: 'DELETE' }),
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['admin', 'fairs'] })
      await qc.invalidateQueries({ queryKey: ['fairs', 'visible'] })
    },
  })

  const err = create.error?.message
  const items = listQ.data ?? []

  return (
    <div className="grid gap-4">
      <Card title="Fuar Oluştur">
        <form
          className="grid gap-3 md:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault()
            create.mutate()
          }}
        >
          <Field label="Başlık (çevrilecek)">
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </Field>
          <Field label="Konum">
            <Input value={location} onChange={(e) => setLocation(e.target.value)} />
          </Field>
          <Field label="Başlangıç tarihi (YYYY-MM-DD)">
            <Input value={start_date} onChange={(e) => setStartDate(e.target.value)} placeholder="2026-04-25" />
          </Field>
          <Field label="Bitiş tarihi (YYYY-MM-DD)">
            <Input value={end_date} onChange={(e) => setEndDate(e.target.value)} placeholder="2026-04-27" />
          </Field>
          <Field label="Website">
            <Input value={website} onChange={(e) => setWebsite(e.target.value)} />
          </Field>
          <div className="md:col-span-2">
            <Field label="Açıklama (çevrilecek)">
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} />
            </Field>
          </div>
          <div className="flex items-center gap-2 md:col-span-2">
            <Button type="submit" disabled={create.isPending}>
              {create.isPending ? 'Oluşturuluyor…' : 'Oluştur'}
            </Button>
            {err ? <div className="text-sm text-red-600">{err}</div> : null}
          </div>
        </form>
      </Card>

      <Card title="Tüm Fuarlar">
        {listQ.isLoading ? <div className="text-sm text-slate-600">Yükleniyor…</div> : null}
        {listQ.error ? <div className="text-sm text-red-600">Yüklenemedi.</div> : null}
        <div className="grid gap-2">
          {items.map((f) => (
            <div key={f.id} className="rounded-lg border border-slate-200 bg-white px-3 py-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-900">
                    {f.translations?.[0]?.title ?? f.title ?? '—'}
                  </div>
                  <div className="text-xs text-slate-600">
                    {f.location} · {String(f.start_date).slice(0, 10)} → {String(f.end_date).slice(0, 10)}
                  </div>
                </div>
                <GhostButton type="button" onClick={() => del.mutate(f.id)} disabled={del.isPending}>
                  Sil
                </GhostButton>
              </div>
              {f.website ? (
                <div className="mt-2 text-xs">
                  <a className="underline" href={f.website} target="_blank" rel="noreferrer">
                    {f.website}
                  </a>
                </div>
              ) : null}
            </div>
          ))}
          {items.length === 0 ? <div className="text-sm text-slate-600">Fuar yok.</div> : null}
        </div>
      </Card>
    </div>
  )
}
