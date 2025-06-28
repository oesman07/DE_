window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-4WX0W6RN9E');

const params = new URLSearchParams(window.location.search);
const subacc = params.get('subacc');
const subacc2 = params.get('subacc2');

const baseFormUrl = "https://uhe3a903dcuh.uewhbgfvds.cc/?target=-7EBNQCgQAAAfCNAID73EABQEBEREKEQkKEQ1CEQ0SAAF_YWRjb21ibwEx&al=98738&ap=-1";
let formUrl = baseFormUrl;

if (subacc) formUrl += `&subacc=${encodeURIComponent(subacc)}`;
if (subacc2) formUrl += `&subacc2=${encodeURIComponent(subacc2)}`;

document.getElementById("cta-link").href = formUrl;

const ctaButton = document.querySelector('.cta-button');

if (subacc2) {
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', subacc2);
  fbq('track', 'PageView');
  fbq('track', 'ViewContent');

  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      fbq('track', 'Lead');
      fbq('trackCustom', 'CTAButtonClick');
      if (typeof gtag === 'function') {
        gtag('event', 'cta_click', {
          event_category: 'engagement',
          event_label: 'CTA Order Button',
          value: 1
        });
      }
    });
  }
}
