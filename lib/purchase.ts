import { AxiosRequestConfig, AxiosResponse } from 'axios';
import Server from '@api/index';

export function paymentLinkAPI(
  data: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> {
  return Server.get('/v1/user/' + data.id + '/order/link?prod=' + data.prod + '&qty=' + data.qty + '&coupon=' + data.coupon + '&redirect-url=' + data.redirect_url, config);
}

export function newPaymentLinkAPI(
  data: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> {
  return Server.get(
    '/v1/pay/paylink?userid=' +
    data.userId +
    '&prod=' +
    data.prod +
    '&qty=' +
    data.qty +
    '&coupon=' +
    data.coupon +
    '&buyer-email=' +
    data.buyerEmail +
    '&buyer-name=' +
    data.buyerName +
    '&buyer-tel=' +
    data.buyerTel +
    '&buyer-addr=' +
    data.buyerAddr +
    '&buyer-post=' +
    data.buyerPost +
    '&redirect-url=' +
    data.redirectUrl
    ,
    config,
  );
}

export function freePaymentAPI(
  data: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> {
  return Server.get('/v1/pay/link?userid=' + data.id + '&prod=' + data.prod + '&qty=' + data.qty + '&coupon=' + data.coupon + '&redirect-url=' + data.redirect_url
    + '&buyer-name=' + data['buyer-name'] + "&buyer-tel=" + data['buyer-tel'], config);
}

export function getPurchaseInfoAPI(
  data: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> {
  return Server.get('/v1/user/' + data.id + '/order/his?timezone=' + data.timezone + "&lang=" + data.lang, config);
}

