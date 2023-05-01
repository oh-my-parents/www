import React from 'react';

const useQueryParams = (key:string) => {
  const {searchParams} = new URL(window.location.toString());
  const params = searchParams.get(key);
  
  return params
}

export default useQueryParams;