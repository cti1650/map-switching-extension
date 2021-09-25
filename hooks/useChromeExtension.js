import { useEffect, useMemo, useState } from 'react';

export const useChromeExtension = () => {
  const [tabPageUrl, setTabPageUrl] = useState('');
  const [tabPageTitle, setTabPageTitle] = useState('');
  // console.log('load');
  // console.log(typeof chrome);
  useEffect(() => {
    if (typeof chrome !== 'undefined') {
      // console.log(typeof chrome.tabs);
      if (typeof chrome.tabs !== 'undefined') {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
          // console.log(tabs[0].url);
          setTabPageUrl((prev) => {
            if (prev !== tabs[0].url) {
              return tabs[0].url;
            }
          });
          setTabPageTitle((prev) => {
            if (prev !== tabs[0].title) {
              return tabs[0].title;
            }
          });
        });
      }
    }
  }, []);
  return useMemo(() => {
    return { tabPageUrl, tabPageTitle };
  }, [tabPageUrl, tabPageTitle]);
};
