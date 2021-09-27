import { useCallback, useEffect, useMemo, useState } from 'react';

export const useMapGeoData = (url) => {
  const [dataJson, setDataJson] = useState(null);
  // console.log('useMapGeoData:' + url);
  useEffect(() => {
    if (~url.indexOf('https://www.google.') && ~url.indexOf('map')) {
      const word = url.replace('https://www.google.', '');
      let re = /@(\d+\.\d+),(\d+\.\d+),(\d+[z,m,a])/i;
      let re2 = /!3d(\d+\.\d+)!4d(\d+\.\d+)$/i;
      const ex = word.match(re);
      const ex2 = word.match(re2);
      // console.log(ex);
      // console.log(ex2);
      if (ex2) {
        setDataJson({
          url: url,
          gcs: 'wgs84',
          lat: ex2[1],
          long: ex2[2],
        });
      } else if (ex) {
        setDataJson({
          url: url,
          gcs: 'wgs84',
          lat: ex[1],
          long: ex[2],
        });
      }
    } else if (~url.indexOf('https://map.yahoo.')) {
      const word = url.replace('https://map.yahoo.', '');
      let re = /\?lat=(\d+\.\d+)&lon=(\d+\.\d+)/i;
      const ex = word.match(re);
      // console.log(ex);
      if (ex) {
        setDataJson({
          url: url,
          gcs: 'wgs84',
          lat: ex[1],
          long: ex[2],
        });
      }
    } else if (~url.indexOf('https://maps.gsi.go.jp/')) {
      const word = url.replace('https://maps.gsi.go.jp/', '');
      let re = /\#\d+\/(\d+\.\d+)\/(\d+\.\d+)/i;
      const ex = word.match(re);
      // console.log(ex);
      if (ex) {
        setDataJson({
          url: url,
          gcs: 'wgs84',
          lat: ex[1],
          long: ex[2],
        });
      }
    } else {
      setDataJson(null);
    }
  }, [url]);
  return dataJson;
};

export const useGeoToLink = (GeoData) => {
  const [links, setLinks] = useState(null);
  useEffect(() => {
    if (GeoData) {
      setLinks({
        gmap:
          'https://www.google.com/maps/place/' +
          GeoData.lat +
          ',' +
          GeoData.long,
        ymap:
          'https://map.yahoo.co.jp/place/?lat=' +
          GeoData.lat +
          '&lon=' +
          GeoData.long +
          '&zoom=18',
        ycarnavi:
          'yjcarnavi://navi/select?lat=' + GeoData.lat + '&lon=' + GeoData.long,
        gsimap:
          'https://maps.gsi.go.jp/#18/' +
          GeoData.lat +
          '/' +
          GeoData.long +
          '/',
      });
    }
  }, [GeoData]);
  return links;
};
