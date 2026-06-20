let deferredPrompt;
const installButton = document.getElementById('installButton');

window.addEventListener('beforeinstallprompt', (e) => {
  // منع المتصفح من إظهار الشريط التلقائي
  e.preventDefault();
  // تخزين الحدث ليتم استخدامه لاحقاً
  deferredPrompt = e;
  // إظهار زر التثبيت الخاص بك
  installButton.style.display = 'block';
});

installButton.addEventListener('click', (e) => {
  // إخفاء الزر
  installButton.style.display = 'none';
  // إظهار نافذة التثبيت في المتصفح
  deferredPrompt.prompt();
  // انتظار رد المستخدم
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('تم قبول التثبيت');
    }
    deferredPrompt = null;
  });
});
