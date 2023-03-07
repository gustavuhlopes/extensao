/*global chrome*/
chrome.runtime.onInstalled.addListener(() => {
    console.log('Chrome extension successfully installed!');
    return;
    });


    const CLIENT_ID = encodeURIComponent('e9b133a6cf59a671d3019e636fbeb9');
const CLIENT_SECRET = encodeURIComponent('1c66d4190d08d91e42c3811c0274a764e70ed18f');
const DATE = 86400000;
let token;

const api = "https://wiki.brzinsurance.com/wp-json";

function isLog(){
    return false;
}


    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
       console.log('Mensagem recebida', request);
      if (request.greeting == "signin") {
        SignIn(true, request.payload)
        .then(res => {
          console.log(res)
            let status;
            if (res == 'fail') {
                status = 'fail';
            } else {
                setToken(res.data);
                chrome.storage.local.set({"brzinsurance_user_logged_in": true});
                // //change popout window
                // chrome.action.setPopup({popup: "./src/components/popout/popout.html"});
                // alarm.cancel();
                // alarm.setup(DATE, refreshToken);
                status = 'success';


            }
            sendResponse({message: status});
            return true;
        })
        .catch(function (err) {
            sendResponse({message: 'failed'});
        });
    return true;
      }
    });






    function SignIn(signIn, user_info) {
      if (signIn) {
          var formData = new FormData();
          formData.append("client_id", CLIENT_ID);
          formData.append("client_secret", CLIENT_SECRET);
          formData.append("username", user_info.email);
          formData.append("password", user_info.pass);
  
          return fetch(`${api}/er-authenticate/v1/get_token/`, {
              method: 'POST',
              body: formData,
          })
              .then(res => res.json())
              .then(res => {
                  return new Promise(resolve => {
                      if (res.status !== 200) resolve('fail')
                      resolve(res);
                  })
              })
  
              .catch(err => console.log(err));
      }
  }