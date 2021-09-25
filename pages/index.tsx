import React, { useEffect, useState } from 'react';
import { Button, ButtonPanel } from '../components/button/button';
import { useMapGeoData, useGeoToLink } from '../hooks/useMapGeoData';
import { useChromeExtension } from '../hooks/useChromeExtension';

const Pages = () => {
    const sampleUrl = '';
    // const sampleUrl = 'https://www.google.com/maps/search/Googlemap/@34.6493797,136.4906096,16z';
    // const sampleUrl = 'https://www.google.com/maps/place/34%C2%B039\'03.2%22N+136%C2%B029\'33.8%22E/@34.6551142,136.4756721,17z/data=!4m9!1m2!2m1!1sGooglemap!3m5!1s0x0:0x0!7e2!8m2!3d34.650889!4d136.492734';
    // const sampleUrl = 'https://www.google.com/maps/@34.651854,136.4901689,718m/data=!3m1!1e3';
    // const sampleUrl = 'https://map.yahoo.co.jp/place?lat=34.71838&lon=136.49610&zoom=14&maptype=basic';
    // const sampleUrl =
    //     'https://maps.gsi.go.jp/#16/34.715803/136.502616/&base=std&ls=std&disp=1&vs=c1j0h0k0l0u0t0z0r0s0m0f1';
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
