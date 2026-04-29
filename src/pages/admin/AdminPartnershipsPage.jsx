import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiJson } from '../../lib/api'
import { Card, Field, GhostButton, Input } from '../../components/AdminUI'

export function AdminPartnershipsPage() {
  const qc = useQueryClient()
  const listQ = useQuery({
    queryKey: ['admin', 'partnerships'],
    queryFn: () => apiJson('/api/partnership/admin/list'),
  })

  const [forwardEmail, setForwardEmail] = useState('')

  const forward = useMutation({
    mutationFn: ({ id, email }) =>
      apiJson(`/api/partnership/admin/list/${id}/forward`, {
        method: 'POST',
        body: JSON.stringify({ email }),
      }),
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['admin', 'partnerships'] })
    },
  })

  const err = forward.error?.message
  const items = listQ.data ?? []

  return (
    <div className="grid gap-4">
      <Card title="İletme Ayarları">
        <div className="grid gap-3 md:grid-cols-2">
          <Field label="İletme e-postası">
            <Input value={forwardEmail} onChange={(e) => setForwardEmail(e.target.value)} placeholder="bizdev@sirket.com" />
          </Field>
        </div>
        {err ? <div className="mt-2 text-sm text-red-600">{err}</div> : null}
      </Card>

      <Card title="Ortaklık Başvuruları">
        {listQ.isLoading ? <div className="text-sm text-slate-600">Yükleniyor…</div> : null}
        {listQ.error ? <div className="text-sm text-red-600">Yüklenemedi.</div> : null}
        <div className="grid gap-2">
          {items.map((p) => (
            <div key={p.id} className="rounded-lg border border-slate-200 bg-white px-3 py-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-900">{p.company_name}</div>
                  <div className="text-xs text-slate-600">
                    {p.contact_name} · {p.email} · {p.phone} · {p.interest_area} · durum: {p.status}
                  </div>
                </div>
                <GhostButton
                  type="button"
                  disabled={!forwardEmail || forward.isPending}
                  onClick={() => forward.mutate({ id: p.id, email: forwardEmail })}
                >
                  İlet
                </GhostButton>
              </div>
              <div className="mt-2 text-sm text-slate-700 whitespace-pre-wrap">{p.message}</div>
            </div>
          ))}
          {items.length === 0 ? <div className="text-sm text-slate-600">Ortaklık yok.</div> : null}
        </div>
      </Card>
    </div>
  )
}
