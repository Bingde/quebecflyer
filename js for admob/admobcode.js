<script>
 function onLoad() {
        var localtime=new Date();
        if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
            document.addEventListener('deviceready', initApp, false);
			document.getElementById("demo1").innerHTML = localtime;

        } else {
            initApp();
        }	
   }	
  var admobid = {};
    if( /(android)/i.test(navigator.userAgent) ) { // for android
        admobid = {
           banner: 'ca-app-pub-7973587087974413/4750480885', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-7973587087974413/8774688087'
        };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
        admobid = {
            banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-xxx/kkk'
        };
    } else { // for windows phone
        admobid = {
            banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad"
            interstitial: 'ca-app-pub-xxx/kkk'
        };
    }
	
	  function initApp() {
		if (! AdMob ) { alert( 'admob plugin not ready' ); return; }
		initAd();
		     createSelectedBanner();
    }
 var defaultOptions = {
    bannerId: admobid.banner,
    interstitialId: admobid.interstitial,
    adSize: 'SMART_BANNER',
    width: 300, // valid when set adSize 'CUSTOM'
    height: 50, // valid when set adSize 'CUSTOM'
    position: AdMob.AD_POSITION.TOP_CENTER,
    x: 0,       // valid when set position to POS_XY
    y: 0,       // valid when set position to POS_XY
    isTesting: false,
    autoShow: true
	}
  function Show(){
     AdMob.setOptions( defaultOptions );
     AdMob.createBanner( admobid.banner );
                  }
    function Showbig(){
   AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    autoShow: true
});}
</script>