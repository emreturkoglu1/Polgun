import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiJson } from '../../lib/api'
import { Button, Card, Field, Input, Textarea } from '../../components/AdminUI'

export function AdminCareersPage() {
  const qc = useQueryClient()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [type, setType] = useState('')
  const [is_active, setIsActive] = useState(true)

  const jobsQ = useQuery({
    queryKey: ['career', 'jobs'],
    queryFn: () => apiJson('/api/career/jobs'),
  })

  const create = useMutation({
    mutationFn: () =>
      apiJson('/api/career/admin/jobs', {
        method: 'POST',
        body: JSON.stringify({ title, description, location, type, is_active }),
      }),
    onSuccess: async () => {
      setTitle('')
      setDescription('')
      setLocation('')
      setType('')
      setIsActive(true)
      await qc.invalidateQueries({ queryKey: ['career', 'jobs'] })
    },
  })

  const err = create.error?.message
  const jobs = jobsQ.data ?? []

  return (
    <div className="grid gap-4">
      <Card title="İş İlanı Oluştur">
        <form
          className="grid gap-3"
          onSubmit={(e) => {
            e.preventDefault()
            create.mutate()
          }}
        >
          <div className="grid gap-3 md:grid-cols-2">
            <Field label="Başlık">
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </Field>
            <Field label="Konum">
              <Input value={location} onChange={(e) => setLocation(e.target.value)} />
            </Field>
            <Field label="Tür">
              <Input value={type} onChange={(e) => setType(e.target.value)} placeholder="Tam zamanlı / Stajyer" />
            </Field>
            <Field label="Aktif (true/false)">
              <Input value={String(is_active)} onChange={(e) => setIsActive(e.target.value === 'true')} />
            </Field>
          </div>
          <Field label="Açıklama">
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={6} />
          </Field>

          <div className="flex items-center gap-2">
            <Button type="submit" disabled={create.isPending}>
              {create.isPending ? 'Oluşturuluyor…' : 'Oluştur'}
            </Button>
            {err ? <div className="text-sm text-red-600">{err}</div> : null}
          </div>
        </form>
      </Card>

      <Card title="İş İlanları">
        {jobsQ.isLoading ? <div className="text-sm text-slate-600">Yükleniyor…</div> : null}
        {jobsQ.error ? <div className="text-sm text-red-600">Yüklenemedi.</div> : null}
        <div className="grid gap-2">
          {jobs.map((j) => (
            <div key={j.id} className="rounded-lg border border-slate-200 bg-white px-3 py-2">
              <div className="text-sm font-semibold text-slate-900">{j.title}</div>
              <div className="text-xs text-slate-600">
                {j.location} · {j.type} · {j.is_active ? 'Aktif' : 'İnaktif'}
              </div>
              <div className="mt-2 text-sm text-slate-700 whitespace-pre-wrap">{j.description}</div>
            </div>
          ))}
          {jobs.length === 0 ? <div className="text-sm text-slate-600">İş ilanı yok.</div> : null}
        </div>
      </Card>
    </div>
  )
}
