import { Injectable } from '@angular/core';

@Injectable()
export class JwtUtilsService {

  constructor() { }

  getRoles(token: string) {
    let jwtData = token.split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    // console.log('JWT UTILS, jwtData=' + jwtData);
    // console.log('JWT UTILS, decodedJwtJsonData=' + decodedJwtJsonData);
    // console.log('JWT UTILS, decodedJwtData=' + decodedJwtData);
    // console.log('JWT UTILS, decodedjwtData.ROLE=' + decodedJwtData.roles);

    return [decodedJwtData.roles];
  }

}
