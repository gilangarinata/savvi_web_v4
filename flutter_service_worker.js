'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "93699752aae588acb518a2ae749fb2f2",
"index.html": "ae69e46122b1b4f66e5b4428e3350d48",
"/": "ae69e46122b1b4f66e5b4428e3350d48",
"main.dart.js": "403a4ac0dc892b70f3169c2bc8220ae4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4851254488ad85de559a0743fe04dbfe",
".git/config": "38881ccff4dc4e249623736f3cd97a15",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"assets/AssetManifest.json": "799a5305be8d7080e5c229f07c4acd57",
"assets/NOTICES": "d197781f38e319417bef8e134eec9b5f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/flutter_earth/assets/google_map_south_pole.png": "bc1f3fc8afc5455ece9b0f426ac528ea",
"assets/packages/flutter_earth/assets/google_map_north_pole.png": "eaf3b4c37cb1ca979b802b4f32c378c8",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/img_login.jpg": "2addcbe9af6aefbfa507c2e0fa8cfb3d",
"assets/assets/back_dashboard.jpg": "156557098fa5fa855eb339bff8738f9a",
"assets/assets/ic_map.xml": "00fdf93a2b3b9c799680a14119733954",
"assets/assets/back_dashboard.png": "7362fc6d738adffe7771be068f70eada",
"assets/assets/swipe_up_handle.xml": "54d42b97122e7e498136a5c709ebfe33",
"assets/assets/bg_multi_selection.xml": "8923f724f46b365acd4e6498aa5c12ad",
"assets/assets/ic_password.xml": "d473508522ac05e3b3bcf8f3399947ba",
"assets/assets/ic_add_to_photos.xml": "ba62e2d4546095415592e76dc0fee9b7",
"assets/assets/ic_notifications.xml": "93129b4b8adf41393ce4a16bbce39b4c",
"assets/assets/ic_keyboard_arrow_right.xml": "480eead5763a459b9434e2b08dcc4f8a",
"assets/assets/ic_schedule.xml": "78b353fab8c1de3c81e11b1846cb1dac",
"assets/assets/new_wallpaper.jpg": "5178fa4195a4d387150ddedb78a4d157",
"assets/assets/ic_photo_library.xml": "ae57e2f2a8258bef7853fea32e598cc9",
"assets/assets/apj.kml": "486f90ba85caa93d55b8b11bcc9e5181",
"assets/assets/ic_close.xml": "b499e9bc9d6a8821e122be975087373e",
"assets/assets/ic_camera.xml": "7c7c3df6aa52dd2b252716f70b0820d4",
"assets/assets/ic_home.xml": "d618d0a0bc6d73e99877784fda077e7a",
"assets/assets/ic_baseline_people_outline.xml": "71ae11c4d59eeb8bea7b05a5621c1aee",
"assets/assets/ic_add.xml": "3b14433d3b5e7ce31c00dffffe70ddc9",
"assets/assets/shape_circle.xml": "9448cd2384005e78df10ad64ffbc7a5f",
"assets/assets/ic_work.xml": "85fb845ba73ad6a069eb68622eba7051",
"assets/assets/ic_error.xml": "2dfc3f0851424ed25739c91d41535af3",
"assets/assets/ic_wifi.xml": "e32614c5d17395a322deeea314ccec37",
"assets/assets/ic_info.xml": "1dec4df9db3ddc6e3bf2b9128a2be591",
"assets/assets/new_wallpaper_2.jpg": "af0a96623442a08735ae9c3dfc758e14",
"assets/assets/ic_delete.xml": "06c83ec414e87cc2cbed541d9d6854b2",
"assets/assets/ic_device.xml": "1f4d72c01d12173468e475dd904d2947",
"assets/assets/kt1.jpg": "a05607b506bf3261dd26fb9d31441b2d",
"assets/assets/img_register.jpg": "afb8a7cb209b3c4ddbf07ce654ddb56c",
"assets/assets/ic_temperature.xml": "3ec57b2eead096630396eb38b671032a",
"assets/assets/btn_round_dark.xml": "c381f05253e7a960be759d9514eba201",
"assets/assets/ic_lamp_off.svg": "043e2a2de5470f1fa5a863f28067ed1f",
"assets/assets/ic_mail.xml": "02d43719bb814d8478d2eb441c65bbb1",
"assets/assets/kt2.jpg": "4d25aa4331b68f11caf9e556bc75b433",
"assets/assets/kt3.jpg": "9745142436e0914a36c1e55283826351",
"assets/assets/ic_power.xml": "0081f4a3b0e4ba9a5d66b8535b5714c6",
"assets/assets/ic_edit.xml": "21f45109d81d849386bc5a4dad0d6e79",
"assets/assets/ic_priority.xml": "534f9e95e9bb659e6a45d1a92373063e",
"assets/assets/shape_round_solid.xml": "2f3b8a057ead404e70b6d17d8672e1f8",
"assets/assets/back_signup.png": "da808a41c23cf9fe171320258e894f25",
"assets/assets/ic_delete_forever_black_24dp.xml": "c2ea998432331608959298e62b8ca056",
"assets/assets/logo.png": "1d3dd3db1a2f5de159172067f2e1ba02",
"assets/assets/logo2.png": "848369c297655a6b3f44cd929356c1f5",
"assets/assets/apj2.kmz": "486f90ba85caa93d55b8b11bcc9e5181",
"assets/assets/ic_settings.xml": "ea5fb29e554090235291243f9ecd97dc",
"assets/assets/back_sign.png": "705d5d668220693952fade1ea58ed074",
"assets/assets/ic_lamp.xml": "f78638823c92b1590347080bb2a34e87",
"assets/assets/ic_lamp.png": "781b76f46b124e602800664303337f3e",
"assets/assets/ic_loc.xml": "3e16bab585ca1bf06a796c1d0a858635",
"assets/assets/ic_back.xml": "12f682699702c0f42d12e40ee33f5ccd",
"assets/assets/ic_person.xml": "8883d137ac7b2f3387c7edf35a05aae7",
"assets/assets/ic_bluetooth.xml": "416164bf67a3029dff871dc9e0cc7af2",
"assets/assets/ic_date_range.xml": "9a626085054345f7643ed82618dcb17e",
"assets/assets/ic_notifications_black_24dp.xml": "93129b4b8adf41393ce4a16bbce39b4c",
"assets/assets/img_person.jpg": "cce9708258fc760609e1ff856eec54a8",
"assets/assets/shape_out_orange.xml": "161448ce16909eac799c07bc047d6d17",
"assets/assets/ic_menu.xml": "14e357f72fc8cd6aba7c568bbd19182e",
"assets/assets/ic_warning.xml": "933787af02bcb235fdfbf59b969cff1d",
"assets/assets/ic_lamp.svg": "ac736c047ddd88361d53e23f11f2d0f0",
"assets/assets/ic_baseline_person.xml": "d293b7d82e8441faaae35ee54e557a78",
"assets/assets/ic_username.xml": "dc66c6c16bc617c0848394cd074d837f",
"assets/assets/shape_oval_dark.xml": "b68542c1f5e33efe44a43ec1dd40be71",
"assets/assets/ic_bullet.xml": "9360a383e956325b6acb13578ae61bc4",
"assets/assets/ic_flash.xml": "00c68751c9073a4312a33ef694301396",
"assets/assets/ic_cloud_upload_black_24dp.xml": "4dbbe256e20c72f39793404ea17f3bf7",
"assets/assets/ic_exit.xml": "2149414cced846aa6fd760bbb109efc6",
"assets/assets/ripple_dark_bg.xml": "40fedd0fea34a86f9d3edb2903b62da4",
"assets/assets/ic_back_white.xml": "496109a3e2487420c1cf411681d83ee2",
"assets/assets/ic_exit_to_app.xml": "c4e3f05f285b9dba88d96eb1d6da7ff9",
"assets/assets/shape_rec_orange.xml": "f9d67d2b18a28a07a292af0955f4ba66",
"assets/assets/new_wallpaper_3.jpeg": "e5b8280bff91d7d88caed721344a1c64",
"assets/assets/seek_thumb_accent_outline.xml": "459e7a5973c0ae858b5fc7f5416d3a60",
"assets/assets/ic_launcher_background.xml": "8b1bf12e0d24ca30339b74a2b67fac4a",
"assets/assets/shape_oval_orange.xml": "90adfff4085e90d7fb68953602d3e9cf",
"assets/assets/negative_image.png": "f5af6ea1ff285df930f7c1934eedaa46"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
