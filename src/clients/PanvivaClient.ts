import Authentication from '../interfaces/Authentication';
import { ResourceApiKeys } from '../enums/ResourceApiKeys';
import localVarRequest from 'request';
import http from 'http';
import { Promise } from 'bluebird';
import GetDocumentContainersResponse from '../models/GetDocumentContainersResponse';
import GetDocumentContainerRelationshipsResponse from '../models/GetDocumentContainerRelationshipsResponse';
import GetContainerResponse from '../models/GetContainerResponse';
import GetArtefactCategoriesResponse from '../models/GetArtefactCategoriesResponse';
import GetDocumentResponse from '../models/GetDocumentResponse';
import GetFolderRootResponse from '../models/GetFolderRootResponse';
import GetFolderResponse from '../models/GetFolderResponse';
import GetFolderChildrenResponse from '../models/GetFolderChildrenResponse';
import GetFileResponse from '../models/GetFileResponse';
import PostArtefactCategoryRequest from '../models/PostArtefactCategoryRequest';
import PostArtefactCategoryResponse from '../models/PostArtefactCategoryResponse';
import GetDocumentTranslationsResponse from '../models/GetDocumentTranslationsResponse';
import GetFolderTranslationsResponse from '../models/GetFolderTranslationsResponse';
import GetImageResponse from '../models/GetImageResponse';
import GetResponseResponse from '../models/GetResponseResponse';
import VoidAuth from '../models/VoidAuth';
import ApiKeyAuth from '../models/ApiKeyAuth';
import PanvivaConstants from '../constants/PanvivaConstants';
import GetSearchArtefactResponse from '../models/GetSearchArtefactResponse';
import PostLiveCshRequest from '../models/PostLiveCshRequest';
import PostLiveDocumentRequest from '../models/PostLiveDocumentRequest';
import PostLiveDocumentResponse from '../models/PostLiveDocumentResponse';
import PostLiveSearchRequest from '../models/PostLiveSearchRequest';
import PostLiveSearchResponse from '../models/PostLiveSearchResponse';
import GetSearchResponse from '../models/GetSearchResponse';
import PostLiveCshResponse from '../models/PostLiveCshResponse';

export default class PanvivaClient {
    protected _basePath = PanvivaConstants.defaultBasePath;
    protected defaultHeaders: any = {};
    protected _useQuerystring: boolean = false;
    protected _instance: string = "";

    protected authentications = {
      default: new VoidAuth() as Authentication,
      apiKeyHeader: new ApiKeyAuth('header', 'Ocp-Apim-Subscription-Key'),
    };
  
    constructor(instance: string, basePath?: string){
      if(basePath)
      {
        // Remove training slash if any to avoid issues
        this.basePath = basePath.replace(/\/$/, "") + "/v3";
      }

      this._instance = instance;
    }
  
    set useQuerystring(value: boolean) {
      this._useQuerystring = value;
    }
  
    set basePath(basePath: string) {
      this._basePath = basePath;
    }
  
    get basePath() {
      return this._basePath;
    }
  
    public setDefaultAuthentication(auth: Authentication) {
      this.authentications.default = auth;
    }
  
    public setApiKey(key: ResourceApiKeys, value: string) {
      (this.authentications as any)[ResourceApiKeys[key]].apiKey = value;
    }
    /**
     * Return an artefact using the ID provided
     * @summary Artefact
     * @param id Format - uuid. The id (ID) of an artefact
     * @param {*} [options] Override http request options.
     */
    public getArtefactById(
      id: string,
      options: any = {},
    ): Promise<{ response: http.IncomingMessage; body: GetResponseResponse }> {
      const localVarPath =
        this.basePath +
        '/{instance}/resources/artefact/{id}'
          .replace('{instance}', encodeURIComponent(String(this._instance)))
          .replace('{' + id + '}', encodeURIComponent(String(id)));
      const localVarQueryParameters: any = {};
      const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
      const localVarFormParams: any = {};
  
      // verify required parameter this._instance is not null or undefined
      if (this._instance === null || this._instance === undefined) {
        throw new Error('Required parameter this._instance was null or undefined when calling getArtefactById.');
      }
  
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getArtefactById.');
      }
  
      Object.assign(localVarHeaderParams, options.headers);
  
      const localVarUseFormData = false;
  
      const localVarRequestOptions: localVarRequest.Options = {
        method: 'GET',
        qs: localVarQueryParameters,
        headers: localVarHeaderParams,
        uri: localVarPath,
        useQuerystring: this._useQuerystring,
        json: true,
      };
  
      this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
  
      this.authentications.default.applyToRequest(localVarRequestOptions);
  
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          localVarRequestOptions.formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: GetResponseResponse }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
              resolve({ response, body });
            } else {
              reject({ response, body });
            }
          }
        });
      });
    }
    /**
     * Gets a list of all available artefact categories
     * @summary Get Artefact Categories
     * @param {*} [options] Override http request options.
     */
    public getArtefactCategories(
      options: any = {},
    ): Promise<{ response: http.IncomingMessage; body: GetArtefactCategoriesResponse }> {
      const localVarPath =
        this.basePath +
        '/{instance}/resources/artefactcategory'.replace('{instance}', encodeURIComponent(String(this._instance)));
      const localVarQueryParameters: any = {};
      const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
      const localVarFormParams: any = {};
  
      // verify required parameter this._instance is not null or undefined
      if (this._instance === null || this._instance === undefined) {
        throw new Error('Required parameter this._instance was null or undefined when calling getArtefactCategoriesGet.');
      }
  
      Object.assign(localVarHeaderParams, options.headers);
  
      const localVarUseFormData = false;
  
      const localVarRequestOptions: localVarRequest.Options = {
        method: 'GET',
        qs: localVarQueryParameters,
        headers: localVarHeaderParams,
        uri: localVarPath,
        useQuerystring: this._useQuerystring,
        json: true,
      };
  
      this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
  
      this.authentications.default.applyToRequest(localVarRequestOptions);
  
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          localVarRequestOptions.formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: GetArtefactCategoriesResponse }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
              resolve({ response, body });
            } else {
              reject({ response, body });
            }
          }
        });
      });
    }
    /**
     * Creates a category for classifying artefacts
     * @summary Create Artefact Category
     * @param postArtefactCategoryRequest JSON object containing the category name
     * @param {*} [options] Override http request options.
     */
    public getArtefactCategoryPost(
      postArtefactCategoryRequest?: PostArtefactCategoryRequest,
      options: any = {},
    ): Promise<{ response: http.IncomingMessage; body: PostArtefactCategoryResponse }> {
      const localVarPath =
        this.basePath +
        '/{instance}/resources/artefactcategory'.replace('{instance}', encodeURIComponent(String(this._instance)));
      const localVarQueryParameters: any = {};
      const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
      const localVarFormParams: any = {};
  
      // verify required parameter this._instance is not null or undefined
      if (this._instance === null || this._instance === undefined) {
        throw new Error('Required parameter this._instance was null or undefined when calling getArtefactCategoryPost.');
      }
  
      Object.assign(localVarHeaderParams, options.headers);
  
      const localVarUseFormData = false;
  
      const localVarRequestOptions: localVarRequest.Options = {
        method: 'POST',
        qs: localVarQueryParameters,
        headers: localVarHeaderParams,
        uri: localVarPath,
        useQuerystring: this._useQuerystring,
        json: true,
        body: postArtefactCategoryRequest
      };
  
      this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
  
      this.authentications.default.applyToRequest(localVarRequestOptions);
  
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          localVarRequestOptions.formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: PostArtefactCategoryResponse }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
              resolve({ response, body });
            } else {
              reject({ response, body });
            }
          }
        });
      });
    }
    /**
     * Return a container using the container ID provided
     * @summary Container
     * @param id The id of a document container
     * @param {*} [options] Override http request options.
     */
    public getContainerById(
      id: string,
      options: any = {},
    ): Promise<{ response: http.IncomingMessage; body: GetContainerResponse }> {
      const localVarPath =
        this.basePath +
        '/{instance}/resources/container/{id}'
          .replace('{instance}', encodeURIComponent(String(this._instance)))
          .replace('{' + id + '}', encodeURIComponent(String(id)));
      const localVarQueryParameters: any = {};
      const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
      const localVarFormParams: any = {};
  
      // verify required parameter this._instance is not null or undefined
      if (this._instance === null || this._instance === undefined) {
        throw new Error('Required parameter this._instance was null or undefined when calling getContainerById.');
      }
  
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getContainerById.');
      }
  
      Object.assign(localVarHeaderParams, options.headers);
  
      const localVarUseFormData = false;
  
      const localVarRequestOptions: localVarRequest.Options = {
        method: 'GET',
        qs: localVarQueryParameters,
        headers: localVarHeaderParams,
        uri: localVarPath,
        useQuerystring: this._useQuerystring,
        json: true,
      };
  
      this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
  
      this.authentications.default.applyToRequest(localVarRequestOptions);
  
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          localVarRequestOptions.formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: GetContainerResponse }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
              resolve({ response, body });
            } else {
              reject({ response, body });
            }
          }
        });
      });
    }
    /**
     * Return a document using the document ID provided
     * @summary Document
     * @param id A document unique identifier, Document ID. If a document is a translated document, this value represents Internal ID or IID in Panviva API v1.
     * @param version Request the API to return a particular version of the specified document.
     * @param {*} [options] Override http request options.
     */
    public getDocumentById(
      id: string,
      version?: number,
      options: any = {},
    ): Promise<{ response: http.IncomingMessage; body: GetDocumentResponse }> {
      const localVarPath =
        this.basePath +
        '/{instance}/resources/document/{id}'
          .replace('{instance}', encodeURIComponent(String(this._instance)))
          .replace('{' + id + '}', encodeURIComponent(String(id)));
      const localVarQueryParameters: any = {};
      const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
      const localVarFormParams: any = {};
  
      // verify required parameter this._instance is not null or undefined
      if (this._instance === null || this._instance === undefined) {
        throw new Error('Required parameter this._instance was null or undefined when calling getDocumentById.');
      }
  
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getDocumentById.');
      }
  
      if (version !== undefined) {
        localVarQueryParameters['version'] = version;
      }
  
      Object.assign(localVarHeaderParams, options.headers);
  
      const localVarUseFormData = false;
  
      const localVarRequestOptions: localVarRequest.Options = {
        method: 'GET',
        qs: localVarQueryParameters,
        headers: localVarHeaderParams,
        uri: localVarPath,
        useQuerystring: this._useQuerystring,
        json: true,
      };
  
      this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
  
      this.authentications.default.applyToRequest(localVarRequestOptions);
  
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          localVarRequestOptions.formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: GetDocumentResponse }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
              resolve({ response, body });
            } else {
              reject({ response, body });
            }
          }
        });
      });
    }
    /**
     * Return a list of containers using the document ID provided
     * @summary Document Containers
     * @param id The internal id (IID) of a Panviva document
     * @param {*} [options] Override http request options.
     */
    public getDocumentByIdContainers(
      id: number,
      options: any = {},
    ): Promise<{ response: http.IncomingMessage; body: GetDocumentContainersResponse }> {
      const localVarPath =
        this.basePath +
        '/{instance}/resources/document/{id}/containers'
          .replace('{instance}', encodeURIComponent(String(this._instance)))
          .replace('{' + id + '}', encodeURIComponent(String(id)));
      const localVarQueryParameters: any = {};
      const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
      const localVarFormParams: any = {};
  
      // verify required parameter this._instance is not null or undefined
      if (this._instance === null || this._instance === undefined) {
        throw new Error(
          'Required parameter this._instance was null or undefined when calling getDocumentByIdContainers.',
        );
      }
  
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getDocumentByIdContainers.');
      }
  
      Object.assign(localVarHeaderParams, options.headers);
  
      const localVarUseFormData = false;
  
      const localVarRequestOptions: localVarRequest.Options = {
        method: 'GET',
        qs: localVarQueryParameters,
        headers: localVarHeaderParams,
        uri: localVarPath,
        useQuerystring: this._useQuerystring,
        json: true,
      };
  
      this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
  
      this.authentications.default.applyToRequest(localVarRequestOptions);
  
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          localVarRequestOptions.formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: GetDocumentContainersResponse }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
              resolve({ response, body });
            } else {
              reject({ response, body });
            }
          }
        });
      });
    }
    /**
     * Return a list of the parent-child relationship between each container for the document ID provided
     * @summary Document Container Relationships
     * @param id The internal id (IID) of a Panviva document
     * @param {*} [options] Override http request options.
     */
    public getDocumentByIdContainersRelationships(
      id: number,
      options: any = {},
    ): Promise<{ response: http.IncomingMessage; body: GetDocumentContainerRelationshipsResponse }> {
      const localVarPath =
        this.basePath +
        '/{instance}/resources/document/{id}/containers/relationships'
          .replace('{instance}', encodeURIComponent(String(this._instance)))
          .replace('{' + id + '}', encodeURIComponent(String(id)));
      const localVarQueryParameters: any = {};
      const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
      const localVarFormParams: any = {};
  
      // verify required parameter this._instance is not null or undefined
      if (this._instance === null || this._instance === undefined) {
        throw new Error(
          'Required parameter this._instance was null or undefined when calling getDocumentByIdContainersRelationships.',
        );
      }
  
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new Error(
          'Required parameter id was null or undefined when calling getDocumentByIdContainersRelationships.',
        );
      }
  
      Object.assign(localVarHeaderParams, options.headers);
  
      const localVarUseFormData = false;
  
      const localVarRequestOptions: localVarRequest.Options = {
        method: 'GET',
        qs: localVarQueryParameters,
        headers: localVarHeaderParams,
        uri: localVarPath,
        useQuerystring: this._useQuerystring,
        json: true,
      };
  
      this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
  
      this.authentications.default.applyToRequest(localVarRequestOptions);
  
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          localVarRequestOptions.formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: GetDocumentContainerRelationshipsResponse }>(
        (resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                resolve({ response, body });
              } else {
                reject({ response, body });
              }
            }
          });
        },
      );
    }
    /**
     * Return a list of all translations (per language and locale) of a Panviva document
     * @summary Document Translations
     * @param id The internal id (IID) of a Panviva document.
     * @param {*} [options] Override http request options.
     */
    public getDocumentByIdTranslations(
      id: number,
      options: any = {},
    ): Promise<{ response: http.IncomingMessage; body: GetDocumentTranslationsResponse }> {
      const localVarPath =
        this.basePath +
        '/{instance}/resources/document/{id}/translations'
          .replace('{instance}', encodeURIComponent(String(this._instance)))
          .replace('{' + id + '}', encodeURIComponent(String(id)));
      const localVarQueryParameters: any = {};
      const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
      const localVarFormParams: any = {};
  
      // verify required parameter this._instance is not null or undefined
      if (this._instance === null || this._instance === undefined) {
        throw new Error(
          'Required parameter this._instance was null or undefined when calling getDocumentByIdTranslations.',
        );
      }
  
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getDocumentByIdTranslations.');
      }
  
      Object.assign(localVarHeaderParams, options.headers);
  
      const localVarUseFormData = false;
  
      const localVarRequestOptions: localVarRequest.Options = {
        method: 'GET',
        qs: localVarQueryParameters,
        headers: localVarHeaderParams,
        uri: localVarPath,
        useQuerystring: this._useQuerystring,
        json: true,
      };
  
      this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
  
      this.authentications.default.applyToRequest(localVarRequestOptions);
  
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          localVarRequestOptions.formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: GetDocumentTranslationsResponse }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
              resolve({ response, body });
            } else {
              reject({ response, body });
            }
          }
        });
      });
    }
    /**
     * Returns a file (external document) from Panviva
     * @summary File
     * @param id The internal id (IID) of a Panviva file (external document)
     * @param {*} [options] Override http request options.
     */
    public getFileById(
      id: number,
      options: any = {},
    ): Promise<{ response: http.IncomingMessage; body: GetFileResponse }> {
      const localVarPath =
        this.basePath +
        '/{instance}/resources/file/{id}'
          .replace('{instance}', encodeURIComponent(String(this._instance)))
          .replace('{' + id + '}', encodeURIComponent(String(id)));
      const localVarQueryParameters: any = {};
      const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
      const localVarFormParams: any = {};
  
      // verify required parameter this._instance is not null or undefined
      if (this._instance === null || this._instance === undefined) {
        throw new Error('Required parameter this._instance was null or undefined when calling getFileById.');
      }
  
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getFileById.');
      }
  
      Object.assign(localVarHeaderParams, options.headers);
  
      const localVarUseFormData = false;
  
      const localVarRequestOptions: localVarRequest.Options = {
        method: 'GET',
        qs: localVarQueryParameters,
        headers: localVarHeaderParams,
        uri: localVarPath,
        useQuerystring: this._useQuerystring,
        json: true,
      };
  
      this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
  
      this.authentications.default.applyToRequest(localVarRequestOptions);
  
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          localVarRequestOptions.formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: GetFileResponse }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
              resolve({ response, body });
            } else {
              reject({ response, body });
            }
          }
        });
      });
    }
    /**
     * Return information about a Panviva folder and references to each of its direct children
     * @summary Folder
     * @param id The internal id (IID) of a Panviva folder
     * @param {*} [options] Override http request options.
     */
    public getFolderById(
      id: number,
      options: any = {},
    ): Promise<{ response: http.IncomingMessage; body: GetFolderResponse }> {
      const localVarPath =
        this.basePath +
        '/{instance}/resources/folder/{id}'
          .replace('{instance}', encodeURIComponent(String(this._instance)))
          .replace('{' + id + '}', encodeURIComponent(String(id)));
      const localVarQueryParameters: any = {};
      const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
      const localVarFormParams: any = {};
  
      // verify required parameter this._instance is not null or undefined
      if (this._instance === null || this._instance === undefined) {
        throw new Error('Required parameter this._instance was null or undefined when calling getFolderById.');
      }
  
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getFolderById.');
      }
  
      Object.assign(localVarHeaderParams, options.headers);
  
      const localVarUseFormData = false;
  
      const localVarRequestOptions: localVarRequest.Options = {
        method: 'GET',
        qs: localVarQueryParameters,
        headers: localVarHeaderParams,
        uri: localVarPath,
        useQuerystring: this._useQuerystring,
        json: true,
      };
  
      this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
  
      this.authentications.default.applyToRequest(localVarRequestOptions);
  
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          localVarRequestOptions.formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: GetFolderResponse }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
              resolve({ response, body });
            } else {
              reject({ response, body });
            }
          }
        });
      });
    }
    /**
     * Gets all the immediate children of a Panviva folder, not including grandchildren. Children can be folders, documents, or files (external documents)
     * @summary Folder Children
     * @param id The internal id (IID) of a Panviva folder
     * @param {*} [options] Override http request options.
     */
    public getFolderByIdChildren(
      id: number,
      options: any = {},
    ): Promise<{ response: http.IncomingMessage; body: GetFolderChildrenResponse }> {
      const localVarPath =
        this.basePath +
        '/{instance}/resources/folder/{id}/children'
          .replace('{instance}', encodeURIComponent(String(this._instance)))
          .replace('{' + id + '}', encodeURIComponent(String(id)));
      const localVarQueryParameters: any = {};
      const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
      const localVarFormParams: any = {};
  
      // verify required parameter this._instance is not null or undefined
      if (this._instance === null || this._instance === undefined) {
        throw new Error('Required parameter this._instance was null or undefined when calling getFolderByIdChildren.');
      }
  
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getFolderByIdChildren.');
      }
  
      Object.assign(localVarHeaderParams, options.headers);
  
      const localVarUseFormData = false;
  
      const localVarRequestOptions: localVarRequest.Options = {
        method: 'GET',
        qs: localVarQueryParameters,
        headers: localVarHeaderParams,
        uri: localVarPath,
        useQuerystring: this._useQuerystring,
        json: true,
      };
  
      this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
  
      this.authentications.default.applyToRequest(localVarRequestOptions);
  
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          localVarRequestOptions.formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: GetFolderChildrenResponse }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
              resolve({ response, body });
            } else {
              reject({ response, body });
            }
          }
        });
      });
    }
    /**
     * Gets all the translations of a Panviva folder, along with each translated folders respective children
     * @summary Folder Translations
     * @param id The internal id (IID) of a Panviva folder
     * @param {*} [options] Override http request options.
     */
    public getFolderByIdTranslations(
      id: number,
      options: any = {},
    ): Promise<{ response: http.IncomingMessage; body: GetFolderTranslationsResponse }> {
      const localVarPath =
        this.basePath +
        '/{instance}/resources/folder/{id}/translations'
          .replace('{instance}', encodeURIComponent(String(this._instance)))
          .replace('{' + id + '}', encodeURIComponent(String(id)));
      const localVarQueryParameters: any = {};
      const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
      const localVarFormParams: any = {};
  
      // verify required parameter this._instance is not null or undefined
      if (this._instance === null || this._instance === undefined) {
        throw new Error(
          'Required parameter this._instance was null or undefined when calling getFolderByIdTranslations.',
        );
      }
  
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getFolderByIdTranslations.');
      }
  
      Object.assign(localVarHeaderParams, options.headers);
  
      const localVarUseFormData = false;
  
      const localVarRequestOptions: localVarRequest.Options = {
        method: 'GET',
        qs: localVarQueryParameters,
        headers: localVarHeaderParams,
        uri: localVarPath,
        useQuerystring: this._useQuerystring,
        json: true,
      };
  
      this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
  
      this.authentications.default.applyToRequest(localVarRequestOptions);
  
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          localVarRequestOptions.formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: GetFolderTranslationsResponse }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
              resolve({ response, body });
            } else {
              reject({ response, body });
            }
          }
        });
      });
    }
    /**
     * Gets the root/home folder in all of Panviva, which can be drilled into using the Get Folder Children endpoint. Note this endpoint was formerly referred to as the 'Folder Search' endpoint
     * @summary Folder Root
     * @param {*} [options] Override http request options.
     */
    public getFolderRoot(
      options: any = {},
    ): Promise<{ response: http.IncomingMessage; body: GetFolderRootResponse }> {
      const localVarPath =
        this.basePath +
        '/{instance}/resources/folder/root'.replace('{instance}', encodeURIComponent(String(this._instance)));
      const localVarQueryParameters: any = {};
      const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
      const localVarFormParams: any = {};
  
      // verify required parameter this._instance is not null or undefined
      if (this._instance === null || this._instance === undefined) {
        throw new Error('Required parameter this._instance was null or undefined when calling getFolderRoot.');
      }
  
      Object.assign(localVarHeaderParams, options.headers);
  
      const localVarUseFormData = false;
  
      const localVarRequestOptions: localVarRequest.Options = {
        method: 'GET',
        qs: localVarQueryParameters,
        headers: localVarHeaderParams,
        uri: localVarPath,
        useQuerystring: this._useQuerystring,
        json: true,
      };
  
      this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
  
      this.authentications.default.applyToRequest(localVarRequestOptions);
  
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          localVarRequestOptions.formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: GetFolderRootResponse }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
              resolve({ response, body });
            } else {
              reject({ response, body });
            }
          }
        });
      });
    }
    /**
     * Returns an image from Panviva. Image data is represented as a base64 string
     * @summary Image
     * @param id The id of a Panviva image
     * @param {*} [options] Override http request options.
     */
    public getImageById(
      id: number,
      options: any = {},
    ): Promise<{ response: http.IncomingMessage; body: GetImageResponse }> {
      const localVarPath =
        this.basePath +
        '/{instance}/resources/image/{id}'
          .replace('{instance}', encodeURIComponent(String(this._instance)))
          .replace('{' + id + '}', encodeURIComponent(String(id)));
      const localVarQueryParameters: any = {};
      const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
      const localVarFormParams: any = {};
  
      // verify required parameter this._instance is not null or undefined
      if (this._instance === null || this._instance === undefined) {
        throw new Error('Required parameter this._instance was null or undefined when calling getImageById.');
      }
  
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getImageById.');
      }
  
      Object.assign(localVarHeaderParams, options.headers);
  
      const localVarUseFormData = false;
  
      const localVarRequestOptions: localVarRequest.Options = {
        method: 'GET',
        qs: localVarQueryParameters,
        headers: localVarHeaderParams,
        uri: localVarPath,
        useQuerystring: this._useQuerystring,
        json: true,
      };
  
      this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
  
      this.authentications.default.applyToRequest(localVarRequestOptions);
  
      if (Object.keys(localVarFormParams).length) {
        if (localVarUseFormData) {
          localVarRequestOptions.formData = localVarFormParams;
        } else {
          localVarRequestOptions.form = localVarFormParams;
        }
      }
      return new Promise<{ response: http.IncomingMessage; body: GetImageResponse }>((resolve, reject) => {
        localVarRequest(localVarRequestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
              resolve({ response, body });
            } else {
              reject({ response, body });
            }
          }
        });
      });
    }

    /**
     * Return search results for a given query
     * @summary Search Artefacts
     * @param simplequery Natural language query string. For example: &#x60;&#x60;&#x60;Action Movies&#x60;&#x60;&#x60;. (Note: Use simplequery OR advancedquery, not both.)
     * @param advancedquery Query string written in Lucene query syntax. For example: &#x60;&#x60;&#x60;films AND \&quot;a story\&quot;&#x60;&#x60;&#x60;. (Note: Use simplequery OR advancedquery, not both.)
     * @param filter Accepts a Lucene-formatted filter string. Examples: &#x60;&#x60;&#x60;category eq &#39;Mortgages&#39;&#x60;&#x60;&#x60;, &#x60;&#x60;&#x60;panvivaDocumentVersion gt &#39;8&#39;&#x60;&#x60;&#x60;. (Filterable fields include dateCreated, dateModified, dateDeconsted, categoryJson, queryVariationsJson, title, category, primaryQuery, isDeconsted, timestamp, panvivaDocumentId, panvivaDocumentVersion, id)
     * @param channel Return response for a specific channel, instead of the default
     * @param pageOffset The pagination offset to denote the number of initial search results to skip. For example, pageOffset of 100 and pageLimit of 10 would return records 101-110.
     * @param pageLimit The number of records to return. Must be an integer between 0 and 1000.
     * @param facet Accepts a Lucene-formatted facet string. Examples: &#x60;&#x60;&#x60;facet&#x3D;Category,count:10&amp;amp;facet&#x3D;Rating&#x60;&#x60;&#x60;. (Facetable fields include metaData/values)
     * @param {*} [options] Override http request options.
     */
    public searchArtefacts(
        simplequery?: string,
        advancedquery?: string,
        filter?: string,
        channel?: string,
        pageOffset?: number,
        pageLimit?: number,
        facet?: string,
        options: any = {},
      ): Promise<{ response: http.IncomingMessage; body: GetSearchArtefactResponse }> {
        const localVarPath =
          this.basePath +
          '/{instance}/operations/artefact/nls'.replace('{instance}', encodeURIComponent(String(this._instance)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
        const localVarFormParams: any = {};
    
        // verify required parameter this._instance is not null or undefined
        if (this._instance === null || this._instance === undefined) {
          throw new Error('Required parameter this._instance was null or undefined when calling artefactNls.');
        }
    
        if (simplequery !== undefined) {
          localVarQueryParameters['simplequery'] = simplequery;
        }
    
        if (advancedquery !== undefined) {
          localVarQueryParameters['advancedquery'] = advancedquery;
        }
    
        if (filter !== undefined) {
          localVarQueryParameters['filter'] = filter;
        }
    
        if (channel !== undefined) {
          localVarQueryParameters['channel'] = channel;
        }
    
        if (pageOffset !== undefined) {
          localVarQueryParameters['pageOffset'] = pageOffset;
        }
    
        if (pageLimit !== undefined) {
          localVarQueryParameters['pageLimit'] = pageLimit;
        }
    
        if (facet !== undefined) {
          localVarQueryParameters['facet'] = facet;
        }
    
        (Object as any).assign(localVarHeaderParams, options.headers);
    
        const localVarUseFormData = false;
    
        const localVarRequestOptions: localVarRequest.Options = {
          method: 'GET',
          qs: localVarQueryParameters,
          headers: localVarHeaderParams,
          uri: localVarPath,
          useQuerystring: this._useQuerystring,
          json: true,
        };
    
        this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
    
        this.authentications.default.applyToRequest(localVarRequestOptions);
    
        if (Object.keys(localVarFormParams).length) {
          if (localVarUseFormData) {
            (localVarRequestOptions as any).formData = localVarFormParams;
          } else {
            localVarRequestOptions.form = localVarFormParams;
          }
        }
        return new Promise<{ response: http.IncomingMessage; body: GetSearchArtefactResponse }>((resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error: any, response: { statusCode: number }, body: any) => {
            if (error) {
              reject(error);
            } else {
              if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                resolve({ response: response as http.IncomingMessage, body });
              } else {
                reject({ response, body });
              }
            }
          });
        });
      }
      /**
       * Present a CSH search result page of the passing query on Panviva client to specified user on Panviva client
       * @summary Live CSH
       * @param postLiveCshRequest JSON object containing information required to perform a live activity&lt;span&gt;:&lt;/span&gt;
       * @param {*} [options] Override http request options.
       */
      public postLiveCsh(
        postLiveCshRequest?: PostLiveCshRequest,
        options: any = {},
      ): Promise<{ response: http.IncomingMessage; body: PostLiveCshResponse }> {
        const localVarPath =
          this.basePath +
          '/{instance}/operations/live/csh'.replace('{instance}', encodeURIComponent(String(this._instance)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
        const localVarFormParams: any = {};
    
        // verify required parameter this._instance is not null or undefined
        if (this._instance === null || this._instance === undefined) {
          throw new Error('Required parameter this._instance was null or undefined when calling liveCsh.');
        }
    
        Object.assign(localVarHeaderParams, options.headers);
    
        const localVarUseFormData = false;
    
        const localVarRequestOptions: localVarRequest.Options = {
          method: 'POST',
          qs: localVarQueryParameters,
          headers: localVarHeaderParams,
          uri: localVarPath,
          useQuerystring: this._useQuerystring,
          json: true,
          body: postLiveCshRequest
        };
    
        this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
    
        this.authentications.default.applyToRequest(localVarRequestOptions);
    
        if (Object.keys(localVarFormParams).length) {
          if (localVarUseFormData) {
            localVarRequestOptions.formData = localVarFormParams;
          } else {
            localVarRequestOptions.form = localVarFormParams;
          }
        }
        return new Promise<{ response: http.IncomingMessage; body: PostLiveCshResponse }>((resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                resolve({ response, body });
              } else {
                reject({ response, body });
              }
            }
          });
        });
      }
      /**
       * Present a document page to specified user on Panviva client
       * @summary Live Document
       * @param postLiveDocumentRequest JSON object containing information required to perform a live activity&lt;span&gt;:&lt;/span&gt;
       * @param {*} [options] Override http request options.
       */
      public postliveDocument(
        postLiveDocumentRequest?: PostLiveDocumentRequest,
        options: any = {},
      ): Promise<{ response: http.IncomingMessage; body: PostLiveDocumentResponse }> {
        const localVarPath =
          this.basePath +
          '/{instance}/operations/live/document'.replace('{instance}', encodeURIComponent(String(this._instance)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
        const localVarFormParams: any = {};
    
        // verify required parameter this._instance is not null or undefined
        if (this._instance === null || this._instance === undefined) {
          throw new Error('Required parameter this._instance was null or undefined when calling liveDocument.');
        }
    
        Object.assign(localVarHeaderParams, options.headers);
    
        const localVarUseFormData = false;
    
        const localVarRequestOptions: localVarRequest.Options = {
          method: 'POST',
          qs: localVarQueryParameters,
          headers: localVarHeaderParams,
          uri: localVarPath,
          useQuerystring: this._useQuerystring,
          json: true,
          body: postLiveDocumentRequest
        };
    
        this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
    
        this.authentications.default.applyToRequest(localVarRequestOptions);
    
        if (Object.keys(localVarFormParams).length) {
          if (localVarUseFormData) {
            localVarRequestOptions.formData = localVarFormParams;
          } else {
            localVarRequestOptions.form = localVarFormParams;
          }
        }
        return new Promise<{ response: http.IncomingMessage; body: PostLiveDocumentResponse }>((resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                resolve({ response, body });
              } else {
                reject({ response, body });
              }
            }
          });
        });
      }
      /**
       * Present a search result page of the passing query on Panviva client to specified user on Panviva client
       * @summary Live Search
       * @param postLiveSearchRequest JSON object containing information required to perform a live activity&lt;span&gt;:&lt;/span&gt;
       * @param {*} [options] Override http request options.
       */
      public postLiveSearch(
        postLiveSearchRequest?: PostLiveSearchRequest,
        options: any = {},
      ): Promise<{ response: http.IncomingMessage; body: PostLiveSearchResponse }> {
        const localVarPath =
          this.basePath +
          '/{instance}/operations/live/search'.replace('{instance}', encodeURIComponent(String(this._instance)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
        const localVarFormParams: any = {};
    
        // verify required parameter this._instance is not null or undefined
        if (this._instance === null || this._instance === undefined) {
          throw new Error('Required parameter this._instance was null or undefined when calling liveSearch.');
        }
    
        Object.assign(localVarHeaderParams, options.headers);
    
        const localVarUseFormData = false;
    
        const localVarRequestOptions: localVarRequest.Options = {
          method: 'POST',
          qs: localVarQueryParameters,
          headers: localVarHeaderParams,
          uri: localVarPath,
          useQuerystring: this._useQuerystring,
          json: true,
          body: postLiveSearchRequest
        };
    
        this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
    
        this.authentications.default.applyToRequest(localVarRequestOptions);
    
        if (Object.keys(localVarFormParams).length) {
          if (localVarUseFormData) {
            localVarRequestOptions.formData = localVarFormParams;
          } else {
            localVarRequestOptions.form = localVarFormParams;
          }
        }
        return new Promise<{ response: http.IncomingMessage; body: PostLiveSearchResponse }>((resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                resolve({ response, body });
              } else {
                reject({ response, body });
              }
            }
          });
        });
      }
      /**
       * Searches documents, folders, and files (external documents) for a term and returns paginated results
       * @summary Search
       * @param term The word or phrase to be searched for
       * @param pageOffset The pagination offset to denote the number of initial search results to skip. For example, pageOffset of 100 and pageLimit of 10 would return records 101-110.
       * @param pageLimit The number of records to return. Must be an integer between 0 and 1000.
       * @param {*} [options] Override http request options.
       */
      public search(
        term: string,
        pageOffset?: number,
        pageLimit?: number,
        options: any = {},
      ): Promise<{ response: http.IncomingMessage; body: GetSearchResponse }> {
        const localVarPath =
          this.basePath +
          '/{instance}/operations/search'.replace('{instance}', encodeURIComponent(String(this._instance)));
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = Object.assign({}, this.defaultHeaders);
        const localVarFormParams: any = {};
    
        // verify required parameter this._instance is not null or undefined
        if (this._instance === null || this._instance === undefined) {
          throw new Error('Required parameter this._instance was null or undefined when calling search.');
        }
    
        // verify required parameter 'term' is not null or undefined
        if (term === null || term === undefined) {
          throw new Error('Required parameter term was null or undefined when calling search.');
        }
    
        if (term !== undefined) {
          localVarQueryParameters['term'] = term;
        }
    
        if (pageOffset !== undefined) {
          localVarQueryParameters['pageOffset'] = pageOffset;
        }
    
        if (pageLimit !== undefined) {
          localVarQueryParameters['pageLimit'] = pageLimit;
        }
    
        Object.assign(localVarHeaderParams, options.headers);
    
        const localVarUseFormData = false;
    
        const localVarRequestOptions: localVarRequest.Options = {
          method: 'GET',
          qs: localVarQueryParameters,
          headers: localVarHeaderParams,
          uri: localVarPath,
          useQuerystring: this._useQuerystring,
          json: true,
        };
    
        this.authentications.apiKeyHeader.applyToRequest(localVarRequestOptions);
    
        this.authentications.default.applyToRequest(localVarRequestOptions);
    
        if (Object.keys(localVarFormParams).length) {
          if (localVarUseFormData) {
            localVarRequestOptions.formData = localVarFormParams;
          } else {
            localVarRequestOptions.form = localVarFormParams;
          }
        }
        return new Promise<{ response: http.IncomingMessage; body: GetSearchResponse }>((resolve, reject) => {
          localVarRequest(localVarRequestOptions, (error, response, body) => {
            if (error) {
              reject(error);
            } else {
              if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                resolve({ response, body });
              } else {
                reject({ response, body });
              }
            }
          });
        });
      }
  }
  