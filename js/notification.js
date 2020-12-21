Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
});

/*
  Fungerar
*/
async function showNotification() {
	const result = await Notification.requestPermission();
	if (result === 'granted') {
		const noti = new Notification('Hello!', {
			body: 'It’s me.',
			icon: 'images/favicon.ico'
		});
		noti.onclick = () => alert('clicked');
	}
}
showNotification();

