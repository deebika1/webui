import axios from "axios";
import { apiUrl, appConfig } from "../utils/config";
import https from 'https';
import querystring from 'querystring';

export function invokeGetService(path: any, reqData = {}, isNodeAPI = true, additionalHeaders = {}) {
  return new Promise(function (resolve, reject) {
    if (window.localStorage.getItem("IN_DESKTOP_ENV") == "true") {
      additionalHeaders = {
        "wp": window.localStorage.getItem("wp"),
        "wat": window.localStorage.getItem("wat"),
        "systemdetail": JSON.stringify({'SYSTEM_NAME':`${window.localStorage.getItem("SYSTEM_NAME")}`, 'USER_NAME': `${window.localStorage.getItem("USER_NAME")}`}),
        ...additionalHeaders
      }
    }  else {
      additionalHeaders = {
        "systemdetail": JSON.stringify({'SYSTEM_NAME':`WEB`, 'USER_NAME': `WEB`}),
        ...additionalHeaders
      }
    }
    axios({
      method: 'GET',
      withCredentials: isNodeAPI,
      url: (isNodeAPI ? appConfig.server.getUrl() : apiUrl.javaApi.base_url) + path,
      data: reqData,
      headers: {
        "Access-Control-Allow-Origin": true,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...additionalHeaders
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((err) => {
      if (err.response) {
        reject(err.response.data);
      }
    });
  });
};

export function invokePostService(path: any, reqData = {}, isNodeAPI = true, additionalHeaders = {}) {
  return new Promise((resolve, reject) => {
    if (window.localStorage.getItem("IN_DESKTOP_ENV") == "true") {
      additionalHeaders = {
        "wp": window.localStorage.getItem("wp"),
        "wat": window.localStorage.getItem("wat"),
        "systemdetail": JSON.stringify({'SYSTEM_NAME':`${window.localStorage.getItem("SYSTEM_NAME")}`, 'USER_NAME': `${window.localStorage.getItem("USER_NAME")}`}),
        ...additionalHeaders
      }
    } else {
      additionalHeaders = {
        "systemdetail": JSON.stringify({'SYSTEM_NAME':`WEB`, 'USER_NAME': `WEB`}),
        ...additionalHeaders
      }
    }
    axios({
      method: 'POST',
      withCredentials: isNodeAPI,
      url: (isNodeAPI ? appConfig.server.getUrl() : apiUrl.javaApi.base_url) + path,
      data: reqData,
      headers: {
        "Access-Control-Allow-Origin": true,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...additionalHeaders
      }
    }).then((response) => {
      resolve(response.data);
    }).catch((err) => {
      if (err.response) {
        reject(err.response.data);
      }
    });
  });
};


export function clientutilityPostService(path: any, reqData = {}) {
  return new Promise((resolve, reject) => {
    
    axios({
      method: 'POST',
      url:  path,
      data: reqData,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      httpsAgent: new https.Agent({  
        rejectUnauthorized: false
      })    
    }).then((response) => {
      resolve(response.data);
    }).catch((err) => {
      if (err.response) {
        reject(err.response.data);
      }
    });
  });
};

// //this function will be upload the file
export function invokeFileUpload(path: any, reqObj: any, isNodeAPI: boolean = true) {
  return new Promise(function (resolve, reject) {
    let headers = {
      'Content-Type': 'multipart/form-data',
      "Access-Control-Allow-Origin": true
    };
    const config: any = {
      method: 'POST',
      data: reqObj,
      headers
    };
    const apiEndPoint = isNodeAPI ? appConfig.server.getUrl() : apiUrl.javaApi.base_url;
    axios.create({
      baseURL: apiEndPoint + path,
      withCredentials: false
    })(config)
      .then((response: any) => {
        resolve(response)
      }).catch((err: any) => {
        if (err.response) {
          reject(err.response);
        }
      })
  });
}

export function invokeFileDelete(path: any, isNodeAPI: boolean = true) {
  return new Promise(function (resolve, reject) {
    let headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const config: any = {
      method: 'DELETE',
      data: '',
      headers
    };
    const apiEndPoint = isNodeAPI ? appConfig.server.getUrl() : apiUrl.javaApi.base_url;
    axios.create({
      baseURL: apiEndPoint + path,
      withCredentials: false
    })(config)
      .then((response: any) => {
        resolve(response)
      }).catch((err: any) => {
        if (err.response) {
          reject(err.response);
        }
      })
  });
}
export function invokeLocalFileDelete(path: any, isNodeAPI: boolean = true) {
  return new Promise(function (resolve, reject) {
    let headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const config: any = {
      method: 'GET',
      data: '',
      headers
    };
    const apiEndPoint = apiUrl.local_rest.base_url + apiUrl.local_rest.uri.localdelete;
    axios.create({
      baseURL: apiEndPoint +'?docId='+ path,
      withCredentials: false
    })(config)
      .then((response: any) => {
        resolve(response)
      }).catch((err: any) => {
        if (err.response) {
          reject(err.response);
        }
      })
  });
}
export function fileUpload(path: any, myFormData: any, isNodeAPI: boolean = true, onUploadProgress: any) {

  return invokeFileUploadOpenkm(path, myFormData, isNodeAPI, {}, onUploadProgress)

  // const formDataObj: any = {};
  // myFormData.forEach((value: string, key: string) => (formDataObj[key] = value));
  // 

  // let apiEndPoint = (isNodeAPI ? appConfig.server.getUrl() : apiUrl.javaApi.base_url) + path;

  // return axios.post(apiEndPoint, myFormData, {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //     "Access-Control-Allow-Origin": true
  //   },
  //   onUploadProgress,
  // });


};

// file upload from node to openkm

export function invokeFileUploadOpenkm(path: any, myFormData: any = {}, isNodeAPI = true, additionalHeaders = {}, onUploadProgress: any) {
  return new Promise((resolve, reject) => {
    let baseURL = (isNodeAPI ? appConfig.server.getUrl() : apiUrl.javaApi.base_url);
    let formDataObj: any = {};
    myFormData.forEach((value: string, key: string) => (formDataObj[key] = value));
    let { docPath, content } = formDataObj;
    const replacer = [];
    for (const key in content) {
      replacer.push(key);
    }
    let fileInfo: any = JSON.stringify(content, replacer);
    fileInfo = JSON.parse(fileInfo);
    myFormData.set('docPath', formDataObj.docPath + fileInfo.name);
    // baseURL = formDataObj.dmsType === 'azure' ? apiUrl.blob_rest.base_url : baseURL;
    // let apiEndPoint = baseURL + (formDataObj.dmsType === 'azure' ? apiUrl.blob_rest.uri.upload : path);
    let apiEndPoint ='';
    switch (formDataObj.dmsType) {
      case 'azure':
        apiEndPoint = apiUrl.blob_rest.base_url + apiUrl.blob_rest.uri.upload;
        break;
      case 'local':
        apiEndPoint = apiUrl.local_rest.base_url + apiUrl.local_rest.uri.localupload;
        break;
      default:
        apiEndPoint = baseURL + path;
        break;
    }

    if (window.localStorage.getItem("IN_DESKTOP_ENV") == "true") {
      additionalHeaders = {
        "wp": window.localStorage.getItem("wp"),
        "wat": window.localStorage.getItem("wat"),
        "systemdetail": JSON.stringify({'SYSTEM_NAME':`${window.localStorage.getItem("SYSTEM_NAME")}`, 'USER_NAME': `${window.localStorage.getItem("USER_NAME")}`}),
        ...additionalHeaders
      }
    }  else {
      additionalHeaders = {
        "systemdetail": JSON.stringify({'SYSTEM_NAME':`WEB`, 'USER_NAME': `WEB`}),
        ...additionalHeaders
      }
    }
    axios({
      method: 'POST',
      withCredentials: isNodeAPI,
      url: apiEndPoint,
      data: myFormData,
      headers: {
        'Content-Type': 'multipart/form-data; boundary=' + myFormData._boundary,
        "Access-Control-Allow-Origin": true,
        'maxContentLength': Infinity,
        'maxBodyLength': Infinity,
        ...additionalHeaders
      },
      onUploadProgress
    }).then((response) => {
      let data = response.data;
      let result = {
        data:
        {
          ...data, okmPath: docPath,
          name: fileInfo.name, path: docPath + fileInfo.name.replace(/\\/g, "/")
        }
      };
      resolve(result);
    }).catch((err) => {

      if (err.response) {
        reject(err.response.data);
      }
    });
  });
};

export function invokeFileDeleteAzure(path: any) {
  return new Promise(function (resolve, reject) {
    let headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    const config: any = {
      method: 'DELETE',
      data: '',
      headers
    };
    const apiEndPoint = appConfig.server.getUrl() + apiUrl.nodeApi.fileDelete;
    axios.create({
      baseURL: apiEndPoint,
      withCredentials: false
    })(config)
      .then((response: any) => {
        resolve(response)
      }).catch((err: any) => {
        if (err.response) {
          reject(err.response);
        }
      })
  });
}





/// file upload module for azure ////

export const uploadFileAzure = (formData: any, onUploadProgress: any,file: File) => {
  const delay = (ms:any) => new Promise(resolve => setTimeout(resolve, ms))
  return new Promise(async (resolve, reject) => {
    try {
      let retry = 0;
      let config: any = {
        method: "post",
        url: apiUrl.blob_rest.base_url + apiUrl.blob_rest.uri.upload,
        headers: {
          "Content-Type": "multipart/form-data; boundary=" + formData._boundary,
          "Access-Control-Allow-Origin": true,
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
        },
        onUploadProgress,
        data: formData,
      };
      while (retry <= 3) {
        try {
          retry = retry + 1;
          let response = await axios(config);
          response.data.file = file;
          resolve(response.data);
          retry = 100;
        } catch (error) {
          if (retry > 3) reject("Internet disconnection, upload process failed, please retry.");
          else await delay(5000);
        }
      }
    } catch (err) {
      reject("Internet disconnection, upload process failed, please retry.");
    }
  });
};
// file upload module for local ////
export const uploadFileLocal = (formData: any, onUploadProgress: any,file: File) => {
  const delay = (ms:any) => new Promise(resolve => setTimeout(resolve, ms))
    return new Promise(async (resolve, reject) => {
    try {
      let retry = 0;
      let config: any = {
        method: "post",
        url: apiUrl.local_rest.base_url + apiUrl.local_rest.uri.localupload,
        headers: {
          "Content-Type": "multipart/form-data; boundary=" + formData._boundary,
          "Access-Control-Allow-Origin": true,
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
        },
        onUploadProgress,
        data: formData,
      };
      while (retry <= 3) {
        try {
          retry = retry + 1;
          let response = await axios(config);
          response.data.file = file;
          resolve(response.data);
          retry = 100;
        } catch (error) {
          if (retry > 3) reject("Internet disconnection, upload process failed, please retry.");
          else await delay(5000);
        }
      }
    } catch (err) {
      reject("Internet disconnection, upload process failed, please retry.");
    }
  });
};


// ITRACKS URL
export function invokeITrackFileUpload(path: any, reqObj: any, isNodeAPI: boolean = true) {
  return new Promise(function (resolve, reject) {
    let headers = {
      'Content-Type': 'multipart/form-data',
      "Access-Control-Allow-Origin": true
    };
    const config: any = {
      method: 'POST',
      data: reqObj,
      headers
    };
    const baseUrl = appConfig.server.getItrackUrl();
    axios.create({
      baseURL: baseUrl + path,
      withCredentials: false
    })(config)
      .then((response: any) => {
        resolve(response)
      }).catch((err: any) => {
        if (err.response) {
          reject(err.response);
        }
      })
  });
}

export const getRetreivelocalFilesURL = (path: any) => {
  return new Promise(async (resolve, reject) => {
      try {
        const data = querystring.stringify({
          docPath: path
      });
        const url = `${apiUrl.local_rest.base_url + apiUrl.local_rest.uri.retreiveLocalFiles}?${data}`;
        axios({
          method: 'GET',
          url: url,
          data: {},
          headers: {
              "Access-Control-Allow-Origin": true,
              //'Content-Type': 'application/json',
              //'Accept': 'application/json',
          }
        }).then((response) => {
            resolve(response.data);
        }).catch(err => {
            const message = err.response?.data?.message ? err.response.data.message : (err.response?.data ? err.response.data : err.message);
            reject({ status: false, message, additionalInfo: { url } });
        });
      } catch (error) {
        console.log(error, 'Something went wrong in Retreiving Local Files URL!');
      };
  });
};


export function invokeFileDownloadPostService(path: any, reqData = {}, isNodeAPI = true, additionalHeaders = {}) {
  return new Promise((resolve, reject) => {
    if (window.localStorage.getItem("IN_DESKTOP_ENV") == "true") {
      additionalHeaders = {
        "wp": window.localStorage.getItem("wp"),
        "wat": window.localStorage.getItem("wat"),
        "systemdetail": JSON.stringify({'SYSTEM_NAME':`${window.localStorage.getItem("SYSTEM_NAME")}`, 'USER_NAME': `${window.localStorage.getItem("USER_NAME")}`}),
        ...additionalHeaders
      }
    } else {
      additionalHeaders = {
        "systemdetail": JSON.stringify({'SYSTEM_NAME':`WEB`, 'USER_NAME': `WEB`}),
        ...additionalHeaders
      }
    }
    console.log(additionalHeaders, "additionalHeaders for download")
    axios({
      method: 'POST',
      withCredentials: isNodeAPI,
      url: (isNodeAPI ? appConfig.server.getUrl() : apiUrl.javaApi.base_url) + path,
      data: reqData,
      headers: {
        "Access-Control-Allow-Origin": true,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...additionalHeaders
      },
      responseType: 'blob',
      maxBodyLength: Infinity,


    }).then((response) => {
      resolve(response.data);
    }).catch((err) => {
      if (err.response) {
        reject(err.response.data);
      }
    });
  });
};


export function invokeiAltFileUploadOpenkm(path: any, myFormData: any = {}, isNodeAPI = true, additionalHeaders = {}, onUploadProgress: any) {
  return new Promise((resolve, reject) => {
    let baseURL = (isNodeAPI ? appConfig.server.getUrl() : apiUrl.javaApi.base_url);
    let formDataObj: any = {};
    myFormData.forEach((value: string, key: string) => (formDataObj[key] = value));
    let { docPath, content, destName } = formDataObj;
    const replacer = [];
    for (const key in content) {
      replacer.push(key);
    }
    let fileInfo: any = JSON.stringify(content, replacer);
    fileInfo = JSON.parse(fileInfo);
    if(formDataObj && formDataObj?.destName){
      myFormData.set('docPath', formDataObj.docPath + formDataObj?.destName);

    }else{
      myFormData.set('docPath', formDataObj.docPath + fileInfo.name);

    }
    // baseURL = formDataObj.dmsType === 'azure' ? apiUrl.blob_rest.base_url : baseURL;
    // let apiEndPoint = baseURL + (formDataObj.dmsType === 'azure' ? apiUrl.blob_rest.uri.upload : path);
    let apiEndPoint ='';
    switch (formDataObj.dmsType) {
      case 'azure':
        apiEndPoint = appConfig.server.getUrl()+ path;
        break;
      case 'local':
        apiEndPoint = apiUrl.local_rest.base_url + apiUrl.local_rest.uri.localupload;
        break;
      default:
        apiEndPoint = baseURL + path;
        break;
    }

    if (window.localStorage.getItem("IN_DESKTOP_ENV") == "true") {
      additionalHeaders = {
        "wp": window.localStorage.getItem("wp"),
        "wat": window.localStorage.getItem("wat"),
        "systemdetail": JSON.stringify({'SYSTEM_NAME':`${window.localStorage.getItem("SYSTEM_NAME")}`, 'USER_NAME': `${window.localStorage.getItem("USER_NAME")}`}),
        ...additionalHeaders
      }
    }  else {
      additionalHeaders = {
        "systemdetail": JSON.stringify({'SYSTEM_NAME':`WEB`, 'USER_NAME': `WEB`}),
        ...additionalHeaders
      }
    }
    axios({
      method: 'POST',
      withCredentials: isNodeAPI,
      url: apiEndPoint,
      data: myFormData,
      headers: {
        'Content-Type': 'multipart/form-data; boundary=' + myFormData._boundary,
        "Access-Control-Allow-Origin": true,
        'maxContentLength': Infinity,
        'maxBodyLength': Infinity,
        ...additionalHeaders
      },
      onUploadProgress
    }).then((response) => {
      let data = response.data;
      let result = {
        data:
        {
          ...data, okmPath: docPath,
          name: fileInfo.name, path: docPath + destName
        }
      };
      resolve(result);
    }).catch((err) => {

      if (err.response) {
        reject(err.response.data);
      }
    });
  });
};