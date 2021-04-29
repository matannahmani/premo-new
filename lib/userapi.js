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
    })
    .catch(function(error) {
      return (error.response.data); // this is the part you need that catches 400 request
    });
}

const resetPassword = ({email}) => {
  return axios.post(`${process.env.API_URL}user/reset-password`,{
      email: email
  },{
  headers: {
    'apikey': '126BB6D15A434E3AB3A9EC302EEE98B5'
  }}
  ).then(response => {
      return response
    });
}

const changePassword = ({jwt,id,password}) => {
  return axios.put(`${process.env.API_URL}user/${id}`,{
      id: id,
      password: password
  },{
  headers: {
    'apikey': '126BB6D15A434E3AB3A9EC302EEE98B5',
    'accesstoken': jwt
  }}
  ).then(response => {
      return response
    });
}

const purchaseLink = (props) => {
  return axios.get(`${process.env.API_URL}pay/payurl`,
  {
    params: { ...props},
    headers: {
      'apikey': '126BB6D15A434E3AB3A9EC302EEE98B5',
    }
  }).then(response => {
      return response
    });
}

const finishSignUp = ({token,name,countryCode,languageCode}) => {
  return axios.post(`${process.env.API_URL}user/create-through-firebase`,{
      token: token,
      name: name,
      countryCode: countryCode,
      languageCode: languageCode
  },{
  headers: {
    'apikey': '126BB6D15A434E3AB3A9EC302EEE98B5'
  }}
  ).then(response => {
      return response
    });
}



export {getUserPurchase,getUserInfo,resetPassword,changePassword,purchaseLink,finishSignUp};