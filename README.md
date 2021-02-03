# GO Arena Web Projesi

Bu Proje [Create React App](https://github.com/facebook/create-react-app) temel alarak, özelleştirilebilir ve genişletilebilir konfigurasyon ayalarını yapılandırılabilir şekilde planlanmıştır.

## Kullanılabilir komutlar

### `yarn` veya `npm install`

Projenin bağımlı kütüphanelerini indirin.

### `yarn start` veya `npm start`

Uygulama geliştirme modunda aşağıdaki adreste çalışır.\
[http://localhost:1515](http://localhost:1515) tıklayarak görebilirisiniz.

### `yarn build` veya `npm run build`

Uygulamnın canlı halini `build` klasörünün altına çıkartır.\
Otomatik optimizasyon ve sıkıştırma yaparak temiz , kullanıma hazır uygulamayı verir.

Daha fazla detay için [deployment](https://facebook.github.io/create-react-app/docs/deployment) ziyaret edebilirsiniz.

## Docker

### `Dockerfile` ile çalışma

Sunucuda [Docker](https://www.docker.com/) kullanımına hazır, konfigüre edilebilir `Dockerfile` dosyası

## API

### Uygulamanın beslendiği API projecsini [buradan](https://github.com/mtekbilisim/goArenaPoc-backend) görebilirsini.
`.env` dosyları içinde `REACT_APP_API_BASE_URL` ile bağlanır. Geliştirici modunda `(.env.dev)` API url servisi `package.json` içinde `proxy` alanından beslenir.
Uygulamanın canlı versiyonu için `.env.production` dosyasındaki `REACT_APP_API_BASE_URL` değişkenindeki adresi kullanır.

## Kullanılmış Kütüphaneler

- [Create React App](https://create-react-app.dev)
- [Ant Design](https://ant.design)
- [easy-peasy](https://easy-peasy.now.sh)
- [react-hook-form](https://react-hook-form.com)
- [Yup](https://github.com/jquense/yup) (Nesne tabanlı validasyon kütüphanesi)
- [customize-cra](https://github.com/arackaf/customize-cra)
- [react-app-rewired](https://github.com/timarney/react-app-rewired)
