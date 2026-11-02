// Google Analytics 4 for yoinkparty.com. The Measurement ID lives here, so every page shares it.
// Nothing loads until it's filled in.
(function () {
  var ID = "G-XXXXXXXXXX";
  if (ID.indexOf("XXXX") !== -1) return;
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
  document.head.appendChild(s);
  gtag("js", new Date());
  // The invite page keeps the party's details in the URL fragment. That never goes to Google:
  // the page is reported without its fragment.
  gtag("config", ID, { page_location: location.origin + location.pathname + location.search });
  // App Store taps count as the site's conversion, like the Pinterest lead.
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href*="apps.apple.com"]');
    if (a) gtag("event", "app_store_tap", { page: location.pathname });
  });
})();
