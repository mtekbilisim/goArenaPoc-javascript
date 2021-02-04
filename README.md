<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/mtekbilisim">
    <img src="https://www.cioupdate.com.tr/wp-content/uploads/2020/06/poc.jpg" alt="Logo">
  </a>

<h3 align="center">Turkcell GoArena POC</h3>

  <p align="center">
    Go Arena Web Admin Panel - Single Page Application
    <br />
    <a href="http://www.mtekbilisim.com"><strong>MTek Bilişim A.Ş. »</strong></a>
    <br />
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>İçerik</summary>
  <ol>
    <li>
      <a href="#proje-hakkında">Proje hakkında</a>
      <ul>
        <li><a href="#mimari-hakkında">Mimari hakkında</a></li>
      </ul>
    </li>
    <li>
      <a href="#başlangıç">Başlangıç</a>
      <ul>
        <li><a href="#kurulum">Kurulum</a></li>
      </ul>
    </li>
    <li><a href="#katılım">Katılım</a></li>
    <li><a href="#lisans">Lisans</a></li>
    <li><a href="#iletğşim">İletişim</a></li>
  </ol>
</details>


## [Proje Hakkında](#proje-hakkında)

Bu proejci Go Areana Mobil uygulamalarda kullanıcıların paylaşımlarını yetkili bir kullanıcı ile görerek paylaşılan gönderileri onaylama veya paylaşılan gönderileri kaldırılabilmesi hedeflenmişir.

### [Mimari Hakkında](#mimari-hakkında)

[Create React App](https://github.com/facebook/create-react-app) temel alarak, özelleştirilebilir ve genişletilebilir konfigurasyon ayalarını yapılandırılabilir şekilde planlanmıştır.

### Kullanılmış başlıca kütüphane ve Teknolojiler

- [Create React App](https://create-react-app.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Ant Design](https://ant.design)
- [easy-peasy](https://easy-peasy.now.sh)
- [react-hook-form](https://react-hook-form.com)
- [Yup](https://github.com/jquense/yup) (Nesne tabanlı validasyon kütüphanesi)
- [customize-cra](https://github.com/arackaf/customize-cra)
- [react-app-rewired](https://github.com/timarney/react-app-rewired)
- [webpack](https://webpack.js.org)

## [Başlangıç](#başlangıç)

### Gereksinimler

`NodeJS (>10)`

### [Kurulum](#kurulum)

Uygulamayı kendi tarafınızda çalıştırmak için aşağıdaki adımları izleyin.

Bu projeyi bilgisayarınıza kopyalayın
`git clone https://github.com/mtekbilisim/goArenaPoc-javascript.git`

Proje klasörüne gidin ve
Komut satırı açara `npm install` komutunu çalıştırın.


### Kullanılabilir komutlar

### `npm install`

Projenin bağımlı kütüphanelerini indirin.

### `npm start`

Uygulama geliştirme modunda aşağıdaki adreste çalışır ve kod içerisinde yapılan değişiklikleri otomatik olarak sayfayı günceller.\
[http://localhost:1515](http://localhost:1515) tıklayarak görebilirisiniz.

### `npm run build`

Uygulamnın canlı halini `build` klasörünün altına çıkartır.\
Otomatik optimizasyon ve sıkıştırma yaparak temiz , kullanıma hazır uygulamayı verir.

Daha fazla detay için [deployment](https://facebook.github.io/create-react-app/docs/deployment) ziyaret edebilirsiniz.

### Docker

### `Dockerfile` ile çalışma

Sunucuda [Docker](https://www.docker.com/) kullanımına hazır, konfigüre edilebilir `Dockerfile` dosyası

### API

### Uygulamanın beslendiği API projecsini [buradan](https://github.com/mtekbilisim/goArenaPoc-backend) görebilirsini.
`.env` dosyları içinde `REACT_APP_API_BASE_URL` ile bağlanır. Geliştirici modunda `(.env.dev)` API url servisi `package.json` içinde `proxy` alanından beslenir.
Uygulamanın canlı versiyonu için `.env.production` dosyasındaki `REACT_APP_API_BASE_URL` değişkenindeki adres kullanılır.



<!-- CONTRIBUTING -->
## [Katılım](#katılım)

Katılım projenin bir POC olması sebebi ile **kapatılmıştır**. Ancak projemizi beğendiyseniz paylaşıma açığız. Bu sebeple MIT lisansını tercih ettik.</br>

<!-- LICENSE -->
## [Lisans](#lisans)

MIT lisansı altında dağıtılmaktadır.</br>
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


<!-- CONTACT -->
## [İletişim](#iletişim)

Fatih Pişkin - [linkedin.com/in/pknfatih](https://www.linkedin.com/in/pknfatih/) - fatih.piskin@mtekbilisim.com

Proje linki : [https://github.com/mtekbilisim/goArenaPoc-javascript](https://github.com/mtekbilisim/goArenaPoc-javascript)
