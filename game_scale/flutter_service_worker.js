'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "59296d1795dbd0fd1ed5a59a02046f9e",
"index.html": "f7c3ab5387a1a5572516d39e30ff8b9d",
"/": "f7c3ab5387a1a5572516d39e30ff8b9d",
"main.dart.js": "c4f6e222101ac7cf6dc382d04b3071a9",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "965fb05674408024bd51a06be6b26d42",
"assets/AssetManifest.json": "2b3ebdc3e6adba99fddb258c73a3a604",
"assets/NOTICES": "e8e324b5c1bc0884e18b6ac4f908b2be",
"assets/FontManifest.json": "713fccf43a260b11a3115acbf4271299",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/spacescape_package/assets/images/icon_plusSmall.png": "c99a3838b059d914f8a87189187d8378",
"assets/packages/spacescape_package/assets/images/nuke.png": "e927ed65e2d664e6789acb3988a534c6",
"assets/packages/spacescape_package/assets/images/freeze.png": "81a43a868c5333621bf1f1d17e921c53",
"assets/packages/spacescape_package/assets/images/ship_A.png": "b1edcfb82c9195cc8bf944fd6211e357",
"assets/packages/spacescape_package/assets/images/ship_B.png": "ce3f46234c1497eb50eaf2fa9368b56f",
"assets/packages/spacescape_package/assets/images/ship_C.png": "bf2f3d304737c51e05c92fa080b20fb0",
"assets/packages/spacescape_package/assets/images/ship_G.png": "3156250a6cb215c2d2b77a3a4aa98d2a",
"assets/packages/spacescape_package/assets/images/ship_F.png": "5c684f7e7a4e7f345e5f3a591638bd6e",
"assets/packages/spacescape_package/assets/images/ship_D.png": "b79d92dc288461b09733033babbdc96b",
"assets/packages/spacescape_package/assets/images/ship_E.png": "51a727a8d7f5c74d1647e39011312ac6",
"assets/packages/spacescape_package/assets/images/ship_H.png": "1e023a0b69de617989ec2baafb39df56",
"assets/packages/spacescape_package/assets/images/README.md": "13a8d1edbd9fe90fbd545ef6332635fd",
"assets/packages/spacescape_package/assets/images/simpleSpace_tilesheet@2.png": "cb4276060e56f7c1e711d6529e8eb905",
"assets/packages/spacescape_package/assets/images/multi_fire.png": "6b846707b372079a4871e8ac14425ea4",
"assets/packages/spacescape_package/assets/images/stars2.png": "b7bc0d6b8e94cdf1a05c1a9e0a28a229",
"assets/packages/spacescape_package/assets/images/stars1.png": "c25761cd6cade2f6dde20d36fde8218c",
"assets/packages/spacescape_package/assets/audio/laser1.ogg": "5f78bb9295b713822b54fdf8a9757c68",
"assets/packages/spacescape_package/assets/audio/README.md": "ba79b9f14a49d09865f618cf12ccb900",
"assets/packages/spacescape_package/assets/audio/laserSmall_001.ogg": "c457887d5ce38f76eeb046798ed4007f",
"assets/packages/spacescape_package/assets/audio/powerUp6.ogg": "0f918c50021cbf1e17e8c9a74426b6c7",
"assets/packages/spacescape_package/assets/fonts/BungeeInline/BungeeInline-Regular.ttf": "4152729d3cc033542060221b7449bd42",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/snake_game_package/assets/snake_game.jpg": "0c15c10911b9272f4b509b34b1fe5f49",
"assets/packages/flappy_bird_package/assets/pics/icon.png": "3cd380ab82e6c416763d78fec268211b",
"assets/packages/flappy_bird_package/assets/pics/blue.png": "32bca4bfe4e777523faacacc89cb0eea",
"assets/packages/flappy_bird_package/assets/pics/bird.png": "69059a4729481ac17b911da5d3541fdd",
"assets/packages/flappy_bird_package/assets/pics/loss.json": "d92f3140c29a34e30dfb5eefe157c042",
"assets/packages/flappy_bird_package/assets/pics/green.png": "60f3c04e5142fcbaa25a42f58fd17428",
"assets/packages/flappy_bird_package/assets/pics/2.png": "68b7127b7aaf9560e805a047cd0dfa66",
"assets/packages/flappy_bird_package/assets/pics/1.png": "90bac4fe87cde4c4e4ecd7be4e3cca1d",
"assets/packages/flappy_bird_package/assets/pics/0.png": "eaf95fbbe018c738f808c566a9be472c",
"assets/packages/flappy_bird_package/assets/audio/backgroundAudio.mp3": "a719507ac25dee7f4c1dcc52c1d556bf",
"assets/packages/flappy_bird_package/assets/fonts/DiloWorld-mLJLv.ttf": "7409a274f7beeed9b9a8ff5fe5396706",
"assets/packages/dino_game_package/assets/images/ptera/ptera_2.png": "3c26cf2df2f9251ca980258b50c3bcdc",
"assets/packages/dino_game_package/assets/images/ptera/ptera_1.png": "5562784ae28b5806ebc677762ec151f2",
"assets/packages/dino_game_package/assets/images/dino/dino_4.png": "c0cde8641992e7aacd52cfa00f9e2605",
"assets/packages/dino_game_package/assets/images/dino/dino_5.png": "f067a25cbfa503f2945fdbd570235b5b",
"assets/packages/dino_game_package/assets/images/dino/dino_6.png": "5280e1adedcfe9a155ad00579d2a253a",
"assets/packages/dino_game_package/assets/images/dino/dino_2.png": "59fa2ac70fd824d17db670293cc78eff",
"assets/packages/dino_game_package/assets/images/dino/dino_3.png": "96b0ea8d7b27a2f6ab7acc167090e4eb",
"assets/packages/dino_game_package/assets/images/dino/dino_1.png": "0ac2110bb26b1d0cdd5dbf7a606ef2c0",
"assets/packages/dino_game_package/assets/images/cloud.png": "1194dac984fe89ce7dddf45bc938f6b2",
"assets/packages/dino_game_package/assets/images/ground.png": "db55805383a6be5b4dc79cfc072c81d8",
"assets/packages/dino_game_package/assets/images/dino_all.png": "509588200e431bed5d733c9addfa900c",
"assets/packages/dino_game_package/assets/images/cacti/cacti_small_1.png": "897831ff6817113c6100553c4c88c5b9",
"assets/packages/dino_game_package/assets/images/cacti/cacti_small_2.png": "17e03de1680df08597b239f7eef84b6d",
"assets/packages/dino_game_package/assets/images/cacti/cacti_small_3.png": "49d60652da7a8a1387162e8cfad8a9df",
"assets/packages/dino_game_package/assets/images/cacti/cacti_group.png": "9f25b62bfa16295c0404836c03cea132",
"assets/packages/dino_game_package/assets/images/cacti/cacti_large_2.png": "2ba073b2d4e9867e42d6b405255e5217",
"assets/packages/dino_game_package/assets/images/cacti/cacti_large_1.png": "7f7ab49cb01f305c3c172b6d545834e9",
"assets/shaders/ink_sparkle.frag": "7906623b4fe507e4fbb9b0a0518b82e5",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
