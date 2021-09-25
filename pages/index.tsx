import React, { useEffect, useState } from 'react';
import { Button, ButtonPanel } from '../components/button/button';
import { useMapGeoData, useGeoToLink } from '../hooks/useMapGeoData';
import { useChromeExtension } from '../hooks/useChromeExtension';

const Pages = () => {
    const sampleUrl = '';
    const { tabPageUrl, tabPageTitle } = useChromeExtension();
    const data = useMapGeoData(tabPageUrl || sampleUrl);
    const links = useGeoToLink(data);
    // 測地系変換 https://docs.ekispert.com/v1/api/toolbox/geo/convert.html
    const sampleJson = {
        GeoPoint: {
            gcs: 'tokyo or wgs84',
            lati_d: '35.158918',
            longi_d: '136.892320',
            lati: '35.9.32.10',
            longi: '136.53.32.35',
        },
    };
    // console.log(data);
    return (
        <>
            <div className='my-1 mx-6 w-80 h-1/2'>
                <h1 className='text-2xl text-center font-extrabold'>
                    Map Switching Extension
                </h1>
                {links ? (
                    <div className='grid grid-cols-2'>
                        <ButtonPanel title='Google Map' src={links.gmap} />
                        <ButtonPanel title='Yahoo! Map' src={links.ymap} />
                        <ButtonPanel title='Yahoo!カーナビ' src={links.ycarnavi} />
                        <ButtonPanel title='地理院地図' src={links.gsimap} />
                    </div>
                ) : (
                    <div className='w-full py-5 text-center'>
                        <div>マップ変換に対応していないサイトのようです…</div>
                    </div>
                )}
                <div className='pt-5 w-full truncate text-xs'>
                    ページURL : {tabPageUrl || sampleUrl}
                </div>
            </div>
        </>
    );
};

export default Pages;
