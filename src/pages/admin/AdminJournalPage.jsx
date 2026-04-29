import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiJson } from '../../lib/api'
import { Button, Card, Field, GhostButton, Input, Textarea } from '../../components/AdminUI'

export function AdminJournalPage() {
  const qc = useQueryClient()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState('')
  const [video_url, setVideoUrl] = useState('')

  const listQ = useQuery({
    queryKey: ['admin', 'journal'],
    queryFn: () => apiJson('/api/journal/admin/all'),
  })

  const create = useMutation({
    mutationFn: () =>
      apiJson('/api/journal/admin', {
        method: 'POST',
        body: JSON.stringify({ title, content, date, video_url }),
      }),
    onSuccess: async () => {
      setTitle('')
      setContent('')
      setDate('')
      setVideoUrl('')
      await qc.invalidateQueries({ queryKey: ['admin', 'journal'] })
      await qc.invalidateQueries({ queryKey: ['journal', 'visible'] })
    },
  })

  const del = useMutation({
    mutationFn: (id) => apiJson(`/api/journal/admin/${id}`, { method: 'DELETE' }),
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['admin', 'journal'] })
      await qc.invalidateQueries({ queryKey: ['journal', 'visible'] })
    },
  })

  const err = create.error?.message
  const items = listQ.data ?? []

  return (
    <div className="grid gap-4">
      <Card title="Dergi Girdisi Oluştur">
        <form
          className="grid gap-3"
          onSubmit={(e) => {
            e.preventDefault()
            create.mutate()
          }}
        >
          <div className="grid gap-3 md:grid-cols-2">
            <Field label="Başlık (çevrilecek)">
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </Field>
            <Field label="Tarih (YYYY-MM-DD, opsiyonel)">
              <Input value={date} onChange={(e) => setDate(e.target.value)} placeholder="2026-04-25" />
            </Field>
            <Field label="Video URL (opsiyonel)">
              <Input value={video_url} onChange={(e) => setVideoUrl(e.target.value)} />
            </Field>
          </div>
          <Field label="İçerik (çevrilecek)">
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} rows={6} />
          </Field>

          <div className="flex items-center gap-2">
            <Button type="submit" disabled={create.isPending}>
              {create.isPending ? 'Oluşturuluyor…' : 'Oluştur'}
            </Button>
            {err ? <div className="text-sm text-red-600">{err}</div> : null}
          </div>
        </form>
      </Card>

      <Card title="Tüm Dergi Girdileri">
        {listQ.isLoading ? <div className="text-sm text-slate-600">Yükleniyor…</div> : null}
        {listQ.error ? <div className="text-sm text-red-600">Yüklenemedi.</div> : null}
        <div className="grid gap-2">
          {items.map((j) => (
            <div key={j.id} className="rounded-lg border border-slate-200 bg-white px-3 py-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-900">{j.translations?.[0]?.title ?? j.title ?? '—'}</div>
                  <div className="text-xs text-slate-600">{String(j.date).slice(0, 10)}</div>
                </div>
                <GhostButton type="button" onClick={() => del.mutate(j.id)} disabled={del.isPending}>
                  Sil
                </GhostButton>
              </div>
              {j.video_url ? (
                <div className="mt-2 text-xs">
                  <a className="underline" href={j.video_url} target="_blank" rel="noreferrer">
                    {j.video_url}
                  </a>
                </div>
              ) : null}
            </div>
          ))}
          {items.length === 0 ? <div className="text-sm text-slate-600">Giriş yok.</div> : null}
        </div>
      </Card>
    </div>
  )
}
