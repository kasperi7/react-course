import {useEffect, useState} from 'react';
import {baseUrl} from '../utils/variables';

const fetchJson = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    if (response.ok) {
      return json;
    } else {
      throw new Error('response error');
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const getMedia = async () => {
    try {
      const media = await fetchJson(baseUrl + 'media');
      const allFiles = await Promise.all(
        media.map(async (file) => {
          const fileResponse = await fetch(`${baseUrl}media/${file.file_id}`);
          return await fileResponse.json();
        })
      );
      setMediaArray(allFiles);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getMedia();
  }, []);
  return {mediaArray};
};

export {useMedia};
