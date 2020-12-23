/* function forceSWupdate () {
        alert('Force update');
        location.reload();
       
}; */


window.onload  = () => {

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./serviceWorker.js')
        .then(function(registration) {
         registration.pushManager.getSubscription()
         .then(function (subscription) {
           //If already access granted, enable push button status
           console.log('Enable');
           console.log(subscription);
         })
         .catch(function (error) {
           console.error('Error occurred while enabling push ', error);
         });
       });
    };
};
