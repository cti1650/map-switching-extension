import React, { useEffect, useState } from 'react';
import { Button } from '../components/button/button';
import { useMapGeoData, pageUrl } from '../hooks/useMapGeoData';


const Pages = () => {
    const sampleUrl = 'https://www.google.com/maps/search/Googlemap/@34.6493797,136.4906096,16z';
    const { url } = useMapGeoData(sampleUrl);
    // 測地系変換 https://docs.ekispert.com/v1/api/toolbox/geo/convert.html
    const sampleJson = {
        "GeoPoint": {
            "gcs": "tokyo or wgs84",
            "lati_d": "35.158918",
            "longi_d": "136.892320",
            "lati": "35.9.32.10",
            "longi": "136.53.32.35"
        }
    };

    return (
        <>
            <div className='my-1 mx-6 w-80'>
                {url}
                {pageUrl()}
                <Button></Button>
            </div>
        </>
    );
};

export default Pages;
