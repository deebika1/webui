export const sortBy = (list: any, data: any) => {
  let arrayCopy = [...data];
  if(list.isAsc){
    arrayCopy.sort(compareByAsc(list.id));

  }else{
    arrayCopy.sort(compareByDesc(list.id));
  }
  return arrayCopy;
}

export const sortByServer = (key: any, data: any) => {
  let arrayCopy = [...data];
  const arrInStr = JSON.stringify(arrayCopy);
  arrayCopy.sort(compareByAsc(key));
  const arrInStr1 = JSON.stringify(arrayCopy);
  if (arrInStr === arrInStr1) {
    arrayCopy.sort(compareByDesc(key));
  }
  return arrayCopy;
}

export type tableSortProps = {
  key: Array<string | object>;
  data: any;
};

function compareByAsc(key: any) {
  return function (a: any, b: any) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  };
}

function compareByDesc(key: any) {
  return function (a: any, b: any) {
    if (a[key] < b[key]) return 1;
    if (a[key] > b[key]) return -1;
    return 0;
  };
}

export const getFormattedPath = (pathname: string) => {
  return pathname[pathname.length - 1] === '/' ? pathname.substring(0, pathname.length - 1) : pathname;
}

export const decodeHtmlEntities = (str: any) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
};