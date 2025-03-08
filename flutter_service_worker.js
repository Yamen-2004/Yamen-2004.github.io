'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "54e0887f2dd7a4e2cfa2594e198b09e0",
".git/config": "b7d273ff80514b6bff956c35328e840f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fdb9ee00af59c34732deb25d43fa9af5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b6ef08a80e84509d8838f2e37c627c53",
".git/logs/refs/heads/main": "61a975e61ff2991ef44b9cb951b5a209",
".git/logs/refs/remotes/origin/main": "026be025fbe4b1854092684e1718d4a2",
".git/objects/07/dc8222431661b8109c68ba80f632cc38c5d6de": "1a95d56935a25b488b744e33450a82c4",
".git/objects/0c/2ee5039531c9d487a75cc747e9eb2bdba5ba6f": "66a45a228fe1c13fbe84244b925594b9",
".git/objects/11/89024bf0af68bfb82f596639c54303d70c751f": "93dee2967eef49e06246f21b19abce95",
".git/objects/13/d67edafe83660c0bf5e47d23a0640d60b92a23": "3431b0eb7d868facecce7e308286c061",
".git/objects/19/e7d8417bda021bcb94a9d4c7238011bf767e19": "70f69f02f00b474c7f25528c8c34d707",
".git/objects/1b/d81fd691852da682bf3ec44bee12f27c64461c": "71266d9af9d31e9137080fb6d01be8f9",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1e/fd7001be513cd14a397cfdb8b9c88938b36a35": "29cf17c015a97c64bc8793b1433b6eca",
".git/objects/27/2e53ef02b83ff00fbb9708500ba44802919f7f": "bf60ce19665d46bc8f20aeecbbcbe2e0",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3b/8326616572c54280cf78deab4d369819206af8": "7ce8880c02d1a7755640bbf604e420b2",
".git/objects/3c/93b35ec0d34a6580581eb575a5bd4acfd0fc61": "fca34dd4eaf20608c3796b0554c1abfd",
".git/objects/3c/ff0cf4aa893dbfd37a887b53cbfa39472f94e8": "66320364c2de18bcc3f7e2727798d261",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/8a5d958ec4624a4f8986457975b530e471312f": "d1c7eeaf5303580a2d8511e9517bc380",
".git/objects/45/0caf05573d96e48ce85119af0930078a5c663d": "f757d0b07a871bd27e762722fafb1b4a",
".git/objects/46/66ea9208dd1f9cc9fc8e2864e5c195e9c95764": "17d45b802e7d0a6bb8519e9df1349a7a",
".git/objects/47/b6775d912cad35fb15250d3cb27156573ae6d0": "3a773aa9f891d9e828582fd991bcbd34",
".git/objects/4a/eeb3b47e14cf51966d622a047eb1be1fc865d4": "5473e3b4bceccf44cf7cf217efb64467",
".git/objects/4d/5b6eae15f2d8b2a57546560bdd1d60c7a1e8d4": "b4151ef4ce05369611fca15bad37c145",
".git/objects/4e/38d297ffa75c937c63359286cc8aaf1f3d258d": "1ddd3314f91cb892c565c88d9a4a5d49",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/54/e220ef0fae9415ae80e7e85aa4c35e7a8625eb": "e706974b66de7e5da74aabbf95d43f84",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/d400e290f7b902899f861d0880c3ad67211054": "eec609146a9ccc39b5d0161a980a8b6b",
".git/objects/5b/61b17ab3dcc46b445a1faa11ac78e05185bc18": "b2fdf1adab8204326365c170e8e73522",
".git/objects/5e/eff3a594a7fea76b4affb88e5029670d61e98e": "a7df12fa2f554f4a069ce375265ae9cd",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/106d265fb270629b0b19e8924d9b3311a616e8": "1e759290c2bee5f4ac549d7d4c8b2b7f",
".git/objects/62/a60b0eca2d762485a35347fce24a1e23d27005": "8893d79fbece679be8476949df53e054",
".git/objects/64/f580ffd7b02eaab687b80574f337161dc3925b": "d205c2194257010951febc81e94829ab",
".git/objects/68/89e73f23a29168ce1ebeec9ef93ed643768d84": "37b0394851261d3817cabe74821723ca",
".git/objects/69/49b7600a59dc9728a52bf1cf1bf84d6a299641": "403a8c9ae221a5892c93b46dc7e9b51c",
".git/objects/69/d61488900043cdaf417c5243e080a468c37712": "8bed80ba6e5790f05f8a5b230415c54d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/33809afc4f07a5783b834851e72b6d76c1e4dd": "a998fefe092b5ebacc1bf883b5ba9a95",
".git/objects/70/4a58afa0f992578d846b7aaca4cf0a234e0988": "755767bf84d2511c8496d54a1f685cbb",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/75/3881268cb8f87fbb2edee51953349c17256c81": "34b0864f4d9e50389db8f68bdc0dc14f",
".git/objects/76/b1c64bc2452d9539e4c4a545ff282885542eec": "3b13c5509f737e64d16031db8e7bb9ab",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/fbd2ac880e9c61d8abcc38d6213874c2dc913c": "e85543cccd277e6f0e3babb24749f28f",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/acf0d4d0dd4e0c5a5abd41138c8d4714dc0d74": "6372876ffa4fedd2eefb87ae43e01164",
".git/objects/8f/1f0246f3bb4ad29ae0ba55c911096dade463f7": "2ffee6120552e5ffc02b046bb422272a",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/9e/fc93b992098c753dc556a5161538df0e25af68": "7144fb995394e9c05cb41cca1fa9048a",
".git/objects/a0/b647d48cf3d3c9cb5f3bf9e9f44eb535212c45": "df4bbca0f202dc8152823317a6fb5183",
".git/objects/a4/1768fc7819b81d244e3a58a3b534ba489c0467": "8d9e2740de12580a35405e83d92cf864",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b2/7b90e05da0ae122df0946f24a8cc46383dbb08": "57953569a55ed4ff25790d3858a96a14",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5445d75bd1a79f1b58a3246c68ff4b5233b328": "35460f632985f3353740d882fe704b13",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/1efd722d5d6e0048a308973255007e97bf7649": "6ef4331c663aa73fcba1ac9c5960069e",
".git/objects/bc/6a2ffc2c70cb09fff001590911cddb494bb5a8": "e01ec327a7d74ddea5e4e65b5b119626",
".git/objects/c0/5051f3b52c1cce8d010cce0bbc14c8004ded4c": "ad309921b61fe837dc3183cdb38538d7",
".git/objects/c2/6ca482b2078899daff4a71165e6a27f9611014": "4a17886740ed3d1e7ec617e40fedfa0d",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cd/d1bb297b45d9328c1a87c21b6c7f267eb2c01f": "516533be427cb13ce161e3af33e0f9aa",
".git/objects/cd/e2c3cdfcaac589b796206d41bd9c1a16a54ea8": "4c5024636cb383f7736adef955b46eff",
".git/objects/d2/13513a6542b28b6f3da89e8af950d60b804a13": "c5c9d83c3d05eec42a20e4ea0cac89a3",
".git/objects/d2/742bad76cbae920dd1ace5a47440dadcced197": "4d75f5640769ee7c75e3d8136cc5ce38",
".git/objects/d3/38ac6148ca20defb36d77f0f7a09404218ac95": "b21c1fdda70a5879d9cec5770e6bd919",
".git/objects/d4/1ccfe90a573abc65562bf1342084b45fe96bbf": "e96fca849e76112f56248e950d657f75",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/28d21a21fe51d7b99ba2efc838cb5375d73618": "e35faf894ba203f89bd118242a9e428c",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dd/62d5d2a9456d4dc7ea43abab1e756d33ecf675": "8a7a2715fe44b5e90100b238a3e02936",
".git/objects/e1/8003b2041d8220f7a746887cc55886f591673a": "228aeb381a3e00caf99f14d4d514a637",
".git/objects/e7/df6daa9a8eaeb43e3e440850a175be5a6767a6": "f28ef440f8540fce158e1f9490c3ffcf",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/9023abee06049bec6868906e151f9c286766a6": "24c5eca7a763a30c0d5992af1ee36754",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/d98b7ce980f22ecff20cf42840be54302fa51b": "d33e4a6458316b26567be2b6e606b23f",
".git/objects/fb/fa75e6a3cb79d7dfa10e1ea21c4eaf09241960": "cd9168027ca19f1e1d1eec331ebae85f",
".git/refs/heads/main": "5e7120c09c5cd5625214f6c61a18eb2f",
".git/refs/remotes/origin/main": "5e7120c09c5cd5625214f6c61a18eb2f",
"assets/AssetManifest.bin": "97240a7fff3b8d4e59e50ca6605b8b1c",
"assets/AssetManifest.bin.json": "4c498a45d6ce28f14d013bb9fec70ff8",
"assets/AssetManifest.json": "3a3d1e78b1265872a5777bcbbd84a974",
"assets/assets/fonts/images/dumyah.png": "167811e90ae126cc1a392bf3e464ed59",
"assets/assets/fonts/images/flutter.png": "1c832a91341e177fba99586c58d6e81f",
"assets/assets/fonts/images/me.png": "4abd9e8883b8550984d6262779fa192f",
"assets/assets/fonts/images/sdk_logo.png": "eb3a8189a5ee4c57bbe434bb5dfce97f",
"assets/assets/fonts/Inkfree.ttf": "73428cd1ad823d01d77b642ee6104415",
"assets/assets/fonts/Inter_28pt-Light.ttf": "3ea4007efbbb2f30c2c73275eef5c2b0",
"assets/assets/fonts/JimNightshade-Regular.ttf": "9be86d0d0d87706ba36c18742ed8ef4c",
"assets/assets/projects/brown.png": "79923c18fadca3ff46da739fc30e759e",
"assets/assets/projects/driver.png": "ec8528cae1fc604a8d8d7db0ccb99c81",
"assets/assets/projects/drone.png": "e85ddec173155b4d008a4f74befc622d",
"assets/assets/projects/mowasalaty.png": "2f30f19186bedf0541d9a2f624173442",
"assets/assets/projects/todo.png": "dcd3d6d959589a2dc2a947a655d5553d",
"assets/assets/skills/control.png": "479f2043955555fdc41dc89a4eb637b4",
"assets/assets/skills/eda.png": "9bd8e8e73f80c7216ad7c50ad80eb18b",
"assets/assets/skills/ml.png": "12cffb85206b7c7f6764b5f582ecd082",
"assets/assets/skills/webdev.png": "6c73ade4a8ebd8e571dadca0bb6434c8",
"assets/assets/social_media/github.png": "9181c9cf2ee47b4265ac43d46f09bea5",
"assets/assets/social_media/githubb.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/social_media/instagram.png": "4f7cb5fbb28d0f9ddc97641f8b288735",
"assets/assets/social_media/linkedin.png": "9f03b54abd1a557a0ac435e9cec7ea17",
"assets/assets/social_media/telegram.png": "817d585a7dd0775dbc9b41927bd043ca",
"assets/assets/social_media/whatsapp.png": "19455d676899e370bd5cc0bab6b41c6f",
"assets/FontManifest.json": "26a2abbb159d0a7962ed766b56f13c51",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "0f0780514510d4e4cfd7926ed45dd29a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "9c6ce04b68f85001480cd885aeadeaf3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "db61ce5fd20c3b1ee057124715cbc5a0",
"/": "db61ce5fd20c3b1ee057124715cbc5a0",
"main.dart.js": "341cffe67641c966952f658e8751b762",
"manifest.json": "e82d1727840015ce9bae173445583b15",
"version.json": "773bd9868763077974ad8937450f63b8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
