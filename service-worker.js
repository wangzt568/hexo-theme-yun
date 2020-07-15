/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6773d1338905e5ea8b814bcaf377c345"
  },
  {
    "url": "about.html",
    "revision": "bf5714d61db0318810be8ac006cbb2f4"
  },
  {
    "url": "assets/css/0.styles.08a0540f.css",
    "revision": "3f1cf95f285c5d73fc435b716670412d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.986af9d6.js",
    "revision": "8d07197e0e8ffe74ab8db0680dd8ed31"
  },
  {
    "url": "assets/js/11.8fef1fb3.js",
    "revision": "57b86d4d0fe4ed6ed986df2ab905d1f9"
  },
  {
    "url": "assets/js/12.5fd97cf6.js",
    "revision": "bb57067cdfdb151bf29302b1576ff985"
  },
  {
    "url": "assets/js/13.09db7eea.js",
    "revision": "3fe7aad03328d4d7050ea713c24f29e0"
  },
  {
    "url": "assets/js/14.c1170179.js",
    "revision": "98d8b33ae4dd390152c24f39f777563b"
  },
  {
    "url": "assets/js/15.2d278adf.js",
    "revision": "969ec4734b992124e9f621a39f31c53b"
  },
  {
    "url": "assets/js/16.3d03c55b.js",
    "revision": "3f4780bc58b8f520e3af021009989d1a"
  },
  {
    "url": "assets/js/17.23774980.js",
    "revision": "271c1bf4db03274f85479f089e6d5737"
  },
  {
    "url": "assets/js/18.1a89581b.js",
    "revision": "8ee614d4c81f4cdda1ebecf6b61c7a34"
  },
  {
    "url": "assets/js/19.6247161d.js",
    "revision": "4f1807d0dc6e3c755ff9f9842d1dbc34"
  },
  {
    "url": "assets/js/2.c8e318ee.js",
    "revision": "e1f218e12637a8884888842fc51279d9"
  },
  {
    "url": "assets/js/20.c46fab6a.js",
    "revision": "0a6664afcec81aa45d5e74b459bbc73c"
  },
  {
    "url": "assets/js/21.60b9ae66.js",
    "revision": "f4db68e2e477a011c035eafabfac3eaa"
  },
  {
    "url": "assets/js/22.b454e526.js",
    "revision": "5932ccf1a14bdc4e1316935a9cc6fb26"
  },
  {
    "url": "assets/js/23.ee93132b.js",
    "revision": "00c38376d9c112d482f5017208c510c4"
  },
  {
    "url": "assets/js/24.485409c5.js",
    "revision": "c8467897aceccc49d7355dcdc1a76b86"
  },
  {
    "url": "assets/js/25.e4ea53f1.js",
    "revision": "b0e3a6f56ec0e1b33d5fbbc0b0e8f9fe"
  },
  {
    "url": "assets/js/26.efbed168.js",
    "revision": "f8297d743b6af929f87707f17e0d01ed"
  },
  {
    "url": "assets/js/27.b083e58b.js",
    "revision": "fe1a1eaf2e5f5ba562b3be4afe8a3534"
  },
  {
    "url": "assets/js/3.636665fe.js",
    "revision": "a4ead256bede2f71f22b73488497aed5"
  },
  {
    "url": "assets/js/4.b3719a29.js",
    "revision": "b8c9e78403bf0c6be59a1d7e58043579"
  },
  {
    "url": "assets/js/5.09d06dfa.js",
    "revision": "0ba187f2ee57db2931fc864b5958665f"
  },
  {
    "url": "assets/js/6.a2b0b332.js",
    "revision": "2a6a1b7a4ede9558423a8a608b62ba3e"
  },
  {
    "url": "assets/js/7.7e31cc32.js",
    "revision": "9191d0227b6c7c55a50296c1df51c492"
  },
  {
    "url": "assets/js/8.917805ff.js",
    "revision": "4417099c1a4238e8600d2463bb824e3b"
  },
  {
    "url": "assets/js/9.1b223ebc.js",
    "revision": "24700ad8b668545992064f5762bcec0b"
  },
  {
    "url": "assets/js/app.fbf6385e.js",
    "revision": "8cc9127487a0b3838ac8732e8f54cd47"
  },
  {
    "url": "demo.html",
    "revision": "4d6cdd3944ddb43da68973a29ffa1c00"
  },
  {
    "url": "en/about.html",
    "revision": "174684a9e8e477293bd614de43e1584d"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "ffe630d4e81484f00e1fb65c9dd3c874"
  },
  {
    "url": "en/guide/config.html",
    "revision": "e2251c110b4e81cebd4d3c3579b01b7c"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "c692206126803e14507b5a0ec319aa71"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "5dd4ed60a8c578cd2be684b3626d2528"
  },
  {
    "url": "en/guide/index.html",
    "revision": "617c62ac3eccb41d4b4572e53e402e79"
  },
  {
    "url": "en/guide/page.html",
    "revision": "5e73ee226bf014bcc40d71b7ec46cc3c"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "d3d006833b68b8c679eab4c2372b5e5c"
  },
  {
    "url": "en/index.html",
    "revision": "95884ac0482b0f726b234087e07a40fb"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "e8a2d3f1429baaa8c2f277fe1d0c3642"
  },
  {
    "url": "guide/config.html",
    "revision": "d876c56a04be66080a60eb3ccbfb67e8"
  },
  {
    "url": "guide/faq.html",
    "revision": "db4a57bcb01a53528260147fa0eaf18b"
  },
  {
    "url": "guide/icon.html",
    "revision": "5c00f580a0054996ddff2e640a4016af"
  },
  {
    "url": "guide/index.html",
    "revision": "fd2c7ef9650f11ba040ef2a9dc9bc3c8"
  },
  {
    "url": "guide/migrate.html",
    "revision": "26602430fd9df2325f0f3729578a7e70"
  },
  {
    "url": "guide/page.html",
    "revision": "babf378d08aba95bb9632f781ca23cfd"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "20e8eb8439373ebc78611adf782eb14a"
  },
  {
    "url": "index.html",
    "revision": "262f90924cf92ab2c11b244d40e34241"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
