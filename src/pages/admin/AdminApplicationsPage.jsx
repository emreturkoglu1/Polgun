import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiJson } from '../../lib/api'
import { Button, Card, Field, GhostButton, Input } from '../../components/AdminUI'

export function AdminApplicationsPage() {
  const qc = useQueryClient()
  const listQ = useQuery({
    queryKey: ['admin', 'career', 'applications'],
    queryFn: () => apiJson('/api/career/admin/applications'),
  })

  const [forwardEmail, setForwardEmail] = useState('')

  const forward = useMutation({
    mutationFn: ({ id, email }) =>
      apiJson(`/api/career/admin/applications/${id}/forward`, {
        method: 'POST',
        body: JSON.stringify({ email }),
      }),
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['admin', 'career', 'applications'] })
    },
  })

  const err = forward.error?.message
  const items = listQ.data ?? []

  return (
    <div className="grid gap-4">
      <Card title="İletme Ayarları">
        <div className="grid gap-3 md:grid-cols-[1fr_auto]">
          <Field label="İletme e-postası (düğme için kullanılır)">
            <Input value={forwardEmail} onChange={(e) => setForwardEmail(e.target.value)} placeholder="hr@sirket.com" />
          </Field>
          <div className="flex items-end">
            <Button type="button" disabled>
              Hazır
            </Button>
          </div>
        </div>
        {err ? <div className="mt-2 text-sm text-red-600">{err}</div> : null}
      </Card>

      <Card title="İş Başvuruları">
        {listQ.isLoading ? <div className="text-sm text-slate-600">Yükleniyor…</div> : null}
        {listQ.error ? <div className="text-sm text-red-600">Yüklenemedi.</div> : null}
        <div className="grid gap-2">
          {items.map((a) => (
            <div key={a.id} className="rounded-lg border border-slate-200 bg-white px-3 py-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-900">
                    {a.name} · {a.email}
                  </div>
                  <div className="text-xs text-slate-600">
                    İş: {a.job?.title ?? a.job_id} · {a.phone}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <GhostButton
                    type="button"
                    disabled={!forwardEmail || forward.isPending}
                    onClick={() => forward.mutate({ id: a.id, email: forwardEmail })}
                  >
                    İlet
                  </GhostButton>
                </div>
              </div>

              <div className="mt-2 text-sm text-slate-700 whitespace-pre-wrap">{a.message}</div>
              <div className="mt-2 text-xs text-slate-600">
                CV yolu: <code>{a.cv_path}</code>
                {a.optional_file_path ? (
                  <>
                    {' '}
                    · opsiyonel: <code>{a.optional_file_path}</code>
                  </>
                ) : null}
              </div>
            </div>
          ))}
          {items.length === 0 ? <div className="text-sm text-slate-600">Başvuru yok.</div> : null}
        </div>
      </Card>
    </div>
  )
}
