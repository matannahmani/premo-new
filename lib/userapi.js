import axios from 'axios';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const getUserPurchase = ({jwt,uid}) => {
    // https://api.premo.live/v1/user/CIWmbGvAAACY95cZjVAtrA/order/his?timezone=Asia/Jerusalem&lang=en-US
    // route
    return axios.get(`${process.env.API_URL}user/${uid}/order/his?timezone=Asia/Jerusalem&lang=en-US`,{
      headers: {
        'accesstoken': jwt,
        'apikey': '126BB6D15A434E3AB3A9EC302EEE98B5'
      }
    }).then(response => {
        return response
      });
}

const getUserInfo = ({jwt}) => {
  return axios.get(`${process.env.API_URL}user`,{
    headers: {
      'accesstoken': jwt,
      'apikey': '126BB6D15A434E3AB3A9EC302EEE98B5'
    }
  }).then(response => {
      return response
    });
}



export {getUserPurchase,getUserInfo};