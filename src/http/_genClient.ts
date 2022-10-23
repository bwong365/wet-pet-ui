//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.17.0.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

export class Client {
  private instance: AxiosInstance;
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(baseUrl?: string, instance?: AxiosInstance) {
    this.instance = instance ? instance : axios.create();

    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : '';
  }

  /**
   * @return Success
   */
  createOwner(cancelToken?: CancelToken | undefined): Promise<void> {
    let url_ = this.baseUrl + '/owners';
    url_ = url_.replace(/[?&]$/, '');

    let options_: AxiosRequestConfig = {
      method: 'POST',
      url: url_,
      headers: {},
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        } else {
          throw _error;
        }
      })
      .then((_response: AxiosResponse) => {
        return this.processCreateOwner(_response);
      });
  }

  protected processCreateOwner(response: AxiosResponse): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (let k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      let resultData400 = _responseText;
      result400 = ValidationProblemDetails.fromJS(resultData400);
      return throwException('Bad Request', status, _responseText, _headers, result400);
    } else if (status === 201) {
      const _responseText = response.data;
      return Promise.resolve<void>(null as any);
    } else if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException('An unexpected server error occurred.', status, _responseText, _headers);
    }
    return Promise.resolve<void>(null as any);
  }

  /**
   * @return Success
   */
  getPets(cancelToken?: CancelToken | undefined): Promise<PetResponse[]> {
    let url_ = this.baseUrl + '/pets';
    url_ = url_.replace(/[?&]$/, '');

    let options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        } else {
          throw _error;
        }
      })
      .then((_response: AxiosResponse) => {
        return this.processGetPets(_response);
      });
  }

  protected processGetPets(response: AxiosResponse): Promise<PetResponse[]> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (let k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      let resultData400 = _responseText;
      result400 = ValidationProblemDetails.fromJS(resultData400);
      return throwException('Bad Request', status, _responseText, _headers, result400);
    } else if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      let resultData200 = _responseText;
      if (Array.isArray(resultData200)) {
        result200 = [] as any;
        for (let item of resultData200) result200!.push(PetResponse.fromJS(item));
      } else {
        result200 = <any>null;
      }
      return Promise.resolve<PetResponse[]>(result200);
    } else if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException('An unexpected server error occurred.', status, _responseText, _headers);
    }
    return Promise.resolve<PetResponse[]>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  addPet(body: PetAdditionRequest | undefined, cancelToken?: CancelToken | undefined): Promise<PetResponse> {
    let url_ = this.baseUrl + '/pets';
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    let options_: AxiosRequestConfig = {
      data: content_,
      method: 'POST',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        } else {
          throw _error;
        }
      })
      .then((_response: AxiosResponse) => {
        return this.processAddPet(_response);
      });
  }

  protected processAddPet(response: AxiosResponse): Promise<PetResponse> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (let k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      let resultData400 = _responseText;
      result400 = ValidationProblemDetails.fromJS(resultData400);
      return throwException('Bad Request', status, _responseText, _headers, result400);
    } else if (status === 201) {
      const _responseText = response.data;
      let result201: any = null;
      let resultData201 = _responseText;
      result201 = PetResponse.fromJS(resultData201);
      return Promise.resolve<PetResponse>(result201);
    } else if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException('An unexpected server error occurred.', status, _responseText, _headers);
    }
    return Promise.resolve<PetResponse>(null as any);
  }

  /**
   * @return Success
   */
  getPetReport(id: string, cancelToken?: CancelToken | undefined): Promise<PetReportResponse> {
    let url_ = this.baseUrl + '/pets/{id}/report';
    if (id === undefined || id === null) throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent('' + id));
    url_ = url_.replace(/[?&]$/, '');

    let options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        } else {
          throw _error;
        }
      })
      .then((_response: AxiosResponse) => {
        return this.processGetPetReport(_response);
      });
  }

  protected processGetPetReport(response: AxiosResponse): Promise<PetReportResponse> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (let k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      let resultData400 = _responseText;
      result400 = ValidationProblemDetails.fromJS(resultData400);
      return throwException('Bad Request', status, _responseText, _headers, result400);
    } else if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      let resultData200 = _responseText;
      result200 = PetReportResponse.fromJS(resultData200);
      return Promise.resolve<PetReportResponse>(result200);
    } else if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException('An unexpected server error occurred.', status, _responseText, _headers);
    }
    return Promise.resolve<PetReportResponse>(null as any);
  }

  /**
   * @param body (optional)
   * @return Success
   */
  updatePet(
    petId: string,
    body: PetUpdateRequest | undefined,
    cancelToken?: CancelToken | undefined
  ): Promise<PetResponse> {
    let url_ = this.baseUrl + '/pets/{petId}';
    if (petId === undefined || petId === null) throw new Error("The parameter 'petId' must be defined.");
    url_ = url_.replace('{petId}', encodeURIComponent('' + petId));
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    let options_: AxiosRequestConfig = {
      data: content_,
      method: 'PUT',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        } else {
          throw _error;
        }
      })
      .then((_response: AxiosResponse) => {
        return this.processUpdatePet(_response);
      });
  }

  protected processUpdatePet(response: AxiosResponse): Promise<PetResponse> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (let k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      let resultData400 = _responseText;
      result400 = ValidationProblemDetails.fromJS(resultData400);
      return throwException('Bad Request', status, _responseText, _headers, result400);
    } else if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      let resultData200 = _responseText;
      result200 = PetResponse.fromJS(resultData200);
      return Promise.resolve<PetResponse>(result200);
    } else if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException('An unexpected server error occurred.', status, _responseText, _headers);
    }
    return Promise.resolve<PetResponse>(null as any);
  }

  /**
   * @return Success
   */
  releasePet(petId: string, cancelToken?: CancelToken | undefined): Promise<void> {
    let url_ = this.baseUrl + '/pets/{petId}';
    if (petId === undefined || petId === null) throw new Error("The parameter 'petId' must be defined.");
    url_ = url_.replace('{petId}', encodeURIComponent('' + petId));
    url_ = url_.replace(/[?&]$/, '');

    let options_: AxiosRequestConfig = {
      method: 'DELETE',
      url: url_,
      headers: {},
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        } else {
          throw _error;
        }
      })
      .then((_response: AxiosResponse) => {
        return this.processReleasePet(_response);
      });
  }

  protected processReleasePet(response: AxiosResponse): Promise<void> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (let k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      let resultData400 = _responseText;
      result400 = ValidationProblemDetails.fromJS(resultData400);
      return throwException('Bad Request', status, _responseText, _headers, result400);
    } else if (status === 204) {
      const _responseText = response.data;
      return Promise.resolve<void>(null as any);
    } else if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException('An unexpected server error occurred.', status, _responseText, _headers);
    }
    return Promise.resolve<void>(null as any);
  }
}

export class PetAdditionRequest implements IPetAdditionRequest {
  name!: string;
  city!: string;
  state?: string | undefined;
  country!: string;
  species!: PetSpecies;

  constructor(data?: IPetAdditionRequest) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.name = _data['name'];
      this.city = _data['city'];
      this.state = _data['state'];
      this.country = _data['country'];
      this.species = _data['species'];
    }
  }

  static fromJS(data: any): PetAdditionRequest {
    data = typeof data === 'object' ? data : {};
    let result = new PetAdditionRequest();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['name'] = this.name;
    data['city'] = this.city;
    data['state'] = this.state;
    data['country'] = this.country;
    data['species'] = this.species;
    return data;
  }
}

export interface IPetAdditionRequest {
  name: string;
  city: string;
  state?: string | undefined;
  country: string;
  species: PetSpecies;
}

export class PetReportResponse implements IPetReportResponse {
  id!: string;
  name!: string;
  city!: string;
  state!: string;
  country!: string;
  species!: PetSpecies;
  tempC!: number;
  statuses!: PetStatus[];

  constructor(data?: IPetReportResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
    if (!data) {
      this.statuses = [];
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data['id'];
      this.name = _data['name'];
      this.city = _data['city'];
      this.state = _data['state'];
      this.country = _data['country'];
      this.species = _data['species'];
      this.tempC = _data['tempC'];
      if (Array.isArray(_data['statuses'])) {
        this.statuses = [] as any;
        for (let item of _data['statuses']) this.statuses!.push(item);
      }
    }
  }

  static fromJS(data: any): PetReportResponse {
    data = typeof data === 'object' ? data : {};
    let result = new PetReportResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['id'] = this.id;
    data['name'] = this.name;
    data['city'] = this.city;
    data['state'] = this.state;
    data['country'] = this.country;
    data['species'] = this.species;
    data['tempC'] = this.tempC;
    if (Array.isArray(this.statuses)) {
      data['statuses'] = [];
      for (let item of this.statuses) data['statuses'].push(item);
    }
    return data;
  }
}

export interface IPetReportResponse {
  id: string;
  name: string;
  city: string;
  state: string;
  country: string;
  species: PetSpecies;
  tempC: number;
  statuses: PetStatus[];
}

export class PetResponse implements IPetResponse {
  id!: string;
  name!: string;
  city!: string;
  state?: string | undefined;
  country!: string;
  species!: PetSpecies;

  constructor(data?: IPetResponse) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data['id'];
      this.name = _data['name'];
      this.city = _data['city'];
      this.state = _data['state'];
      this.country = _data['country'];
      this.species = _data['species'];
    }
  }

  static fromJS(data: any): PetResponse {
    data = typeof data === 'object' ? data : {};
    let result = new PetResponse();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['id'] = this.id;
    data['name'] = this.name;
    data['city'] = this.city;
    data['state'] = this.state;
    data['country'] = this.country;
    data['species'] = this.species;
    return data;
  }
}

export interface IPetResponse {
  id: string;
  name: string;
  city: string;
  state?: string | undefined;
  country: string;
  species: PetSpecies;
}

export enum PetSpecies {
  Camel = 'Camel',
  Dog = 'Dog',
  PolarBear = 'PolarBear',
  Swordfish = 'Swordfish',
}

export enum PetStatus {
  Content = 'Content',
  Cold = 'Cold',
  Hot = 'Hot',
  Wet = 'Wet',
  Dry = 'Dry',
  Scared = 'Scared',
  Snowman = 'Snowman',
}

export class PetUpdateRequest implements IPetUpdateRequest {
  name?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
  country?: string | undefined;

  constructor(data?: IPetUpdateRequest) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.name = _data['name'];
      this.city = _data['city'];
      this.state = _data['state'];
      this.country = _data['country'];
    }
  }

  static fromJS(data: any): PetUpdateRequest {
    data = typeof data === 'object' ? data : {};
    let result = new PetUpdateRequest();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['name'] = this.name;
    data['city'] = this.city;
    data['state'] = this.state;
    data['country'] = this.country;
    return data;
  }
}

export interface IPetUpdateRequest {
  name?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
  country?: string | undefined;
}

export class ValidationProblemDetails implements IValidationProblemDetails {
  type?: string | undefined;
  title?: string | undefined;
  status?: number | undefined;
  detail?: string | undefined;
  instance?: string | undefined;
  errors!: { [key: string]: string[] };

  [key: string]: any;

  constructor(data?: IValidationProblemDetails) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property)) (<any>this)[property] = (<any>data)[property];
      }
    }
    if (!data) {
      this.errors = {};
    }
  }

  init(_data?: any) {
    if (_data) {
      for (var property in _data) {
        if (_data.hasOwnProperty(property)) this[property] = _data[property];
      }
      this.type = _data['type'];
      this.title = _data['title'];
      this.status = _data['status'];
      this.detail = _data['detail'];
      this.instance = _data['instance'];
      if (_data['errors']) {
        this.errors = {} as any;
        for (let key in _data['errors']) {
          if (_data['errors'].hasOwnProperty(key))
            (<any>this.errors)![key] = _data['errors'][key] !== undefined ? _data['errors'][key] : [];
        }
      }
    }
  }

  static fromJS(data: any): ValidationProblemDetails {
    data = typeof data === 'object' ? data : {};
    let result = new ValidationProblemDetails();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    for (var property in this) {
      if (this.hasOwnProperty(property)) data[property] = this[property];
    }
    data['type'] = this.type;
    data['title'] = this.title;
    data['status'] = this.status;
    data['detail'] = this.detail;
    data['instance'] = this.instance;
    if (this.errors) {
      data['errors'] = {};
      for (let key in this.errors) {
        if (this.errors.hasOwnProperty(key)) (<any>data['errors'])[key] = (<any>this.errors)[key];
      }
    }
    return data;
  }
}

export interface IValidationProblemDetails {
  type?: string | undefined;
  title?: string | undefined;
  status?: number | undefined;
  detail?: string | undefined;
  instance?: string | undefined;
  errors: { [key: string]: string[] };

  [key: string]: any;
}

export class ApiException extends Error {
  message: string;
  status: number;
  response: string;
  headers: { [key: string]: any };
  result: any;

  constructor(message: string, status: number, response: string, headers: { [key: string]: any }, result: any) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isApiException = true;

  static isApiException(obj: any): obj is ApiException {
    return obj.isApiException === true;
  }
}

function throwException(
  message: string,
  status: number,
  response: string,
  headers: { [key: string]: any },
  result?: any
): any {
  if (result !== null && result !== undefined) throw result;
  else throw new ApiException(message, status, response, headers, null);
}

function isAxiosError(obj: any | undefined): obj is AxiosError {
  return obj && obj.isAxiosError === true;
}