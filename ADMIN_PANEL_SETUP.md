# Polgun CMS Admin Panel Kurulumu

## Yapılan Değişiklikler

Admin panel tamamen Polgün klasöründe kurulmuş ve Render.com backend'i ile entegre edilmiştir.

### Yeni Dosyalar

#### UI Bileşenleri
- **`src/components/AdminUI.jsx`** - Admin sayfaları için ortak UI bileşenleri
  - `Card` - Kartlar için container
  - `Field` - Form alanları için label
  - `Input` - Metin giriş alanı
  - `Textarea` - Çok satırlı metin alanı
  - `Button` - Birincil düğme
  - `GhostButton` - İkincil düğme

#### Admin Sayfaları (`src/pages/admin/`)
1. **`AdminLayout.jsx`** - Admin panel ana layout
   - Sol sidebar navigasyon
   - Oturum kapatma düğmesi
   - Tüm admin modüllerine erişim

2. **`AdminCatalogsPage.jsx`** - Katalog yönetimi
   - PDF/dosya yükleme
   - Görünürlük kontrolü
   - Silme işlemi

3. **`AdminCareersPage.jsx`** - İş ilanları yönetimi
   - İş ilanı oluşturma
   - İlan bilgilerini görüntüleme
   - Durum yönetimi

4. **`AdminFairsPage.jsx`** - Fuarlar yönetimi
   - Fuar oluşturma
   - Tarih ve konum bilgileri
   - Website linki

5. **`AdminJournalPage.jsx`** - Dergi/Blog yazıları
   - Yazı oluşturma
   - Video URL desteği
   - Tarih yönetimi

6. **`AdminApplicationsPage.jsx`** - İş başvuruları
   - Başvuru listesi
   - HR e-postasına iletme
   - CV bilgileri

7. **`AdminPartnershipsPage.jsx`** - Ortaklık başvuruları
   - Ortaklık talepleri
   - İletme sistemi
   - Durum takibi

8. **`AdminContactsPage.jsx`** - İletişim bilgileri
   - İletişim ekle/düzenle/sil
   - CRUD işlemleri

#### Güncellenen Dosyalar
- **`src/AdminGateway.jsx`** - Tamamen yeniden yazıldı
  - React Router entegrasyonu
  - TanStack Query entegrasyonu
  - Login ve admin panel rotaları

### Teknik Özellikler

- **Rotalar**: React Router DOM ile tam route desteği
- **State Yönetimi**: TanStack Query (React Query) ile veri fetching
- **API**: `https://polgunadmin.onrender.com` backend'i kullanılıyor
- **Stil**: Tailwind CSS ile responsive design
- **Dil**: Tüm UI metinleri Türkçe

### Kullanım

1. `/login` sayfasına giderek admin hesabı ile giriş yapın
2. Giriş başarılı olursa `/admin` sayfasına yönlendirilirsiniz
3. Sol sidebar'dan farklı modüllere geçiş yapabilirsiniz

### API Endpoints

Admin panel aşağıdaki API endpoints'i kullanır:

```
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/session
GET    /api/catalog/admin/list
POST   /api/catalog/admin/upload
PATCH  /api/catalog/admin/visibility/:id
DELETE /api/catalog/admin/:id
GET    /api/career/jobs
POST   /api/career/admin/jobs
GET    /api/career/admin/applications
POST   /api/career/admin/applications/:id/forward
GET    /api/fairs/admin/all
POST   /api/fairs/admin
DELETE /api/fairs/admin/:id
GET    /api/journal/admin/all
POST   /api/journal/admin
DELETE /api/journal/admin/:id
GET    /api/partnership/admin/list
POST   /api/partnership/admin/list/:id/forward
GET    /api/contacts/admin
POST   /api/contacts/admin
PUT    /api/contacts/admin/:id
DELETE /api/contacts/admin/:id
```

### Ortam Değişkenleri

Backend URL `.env` dosyasında yapılandırılabilir:
```
VITE_API_BASE=https://polgunadmin.onrender.com
```

Varsayılan olarak render.com URL'i kullanılır.
