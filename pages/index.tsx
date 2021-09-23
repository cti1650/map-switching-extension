import React, { useEffect, useState } from 'react';

const Pages = () => {
    const [keyword, setKeyword] = useState('')
    const [exclusionKeyword, setExclusionKeyword] = useState('')
    const handleKeywordChange = (event) => {
        setKeyword(prev => {
            if (prev !== event.target.value) {
                return event.target.value;
            }
        })
    }
    const handleExclusionKeywordChange = (event) => {
        setExclusionKeyword(prev => {
            if (prev !== event.target.value) {
                return event.target.value;
            }
        })
    }
    const handleClick = (event) => {
        const encodedKeyword = encodeURIComponent(keyword);
        const encodedExclusionKeyword = encodeURIComponent(exclusionKeyword.split(' ').map((word) => {
            if (word) {
                return '-' + word;
            }
        }).join(' '));
        localStorage.setItem("search_keyword", keyword)
        localStorage.setItem("search_exclusion_keyword", exclusionKeyword)
        switch (event.target.innerText) {
            case 'Code':
                window.open('https://github.com/search?type=code&q=' + encodedKeyword + ' ' + encodedExclusionKeyword, '_blank')
                break;
            case 'Packages':
                window.open('https://github.com/search?type=registrypackages&q=' + encodedKeyword + ' ' + encodedExclusionKeyword, '_blank')
                break;
            case 'Repositories':
                window.open('https://github.com/search?type=repositories&q=' + encodedKeyword + ' ' + encodedExclusionKeyword, '_blank')
                break;
            default:
                alert('else');
        }
    }
    useEffect(() => {
        setKeyword(localStorage.getItem("search_keyword") || '')
    }, []);
    useEffect(() => {
        setExclusionKeyword(localStorage.getItem("search_exclusion_keyword") || '')
    }, []);
    return (
        <>
            <div className='my-1 mx-6 w-80'>
                <div className="mt-2 mb-0.5"><h1 className="text-gray-200 text-lg font-extrabold">GitHub Search Extension</h1></div>
                <div className="mt-2 mb-0.5 text-gray-400 text-xs"><label>Keyword</label></div>
                <div>
                    <input
                        type='text'
                        placeholder='Search or jump to… ( keyword )'
                        onChange={handleKeywordChange}
                        value={keyword}
                        className='w-full px-4 py-1 text-white focus:text-black rounded-lg border border-gray-600 bg-gray-800 focus:bg-gray-200 focus:outline-none'
                    ></input>
                </div>
                <div className="mt-2 mb-0.5 text-gray-400 text-xs"><label>Exclusion</label></div>
                <div>
                    <input
                        type='text'
                        placeholder='Add keywords for searching ( -keyword )'
                        onChange={handleExclusionKeywordChange}
                        value={exclusionKeyword}
                        className='w-full px-4 py-1 text-white focus:text-black rounded-lg border border-gray-600 bg-gray-800 focus:bg-gray-200 focus:outline-none'
                    ></input>
                </div>
                <div className="mt-2 mb-0.5 text-gray-400 text-xs"><label>Search Type</label></div>
                <div className="grid grid-cols-2 space-x-2">
                    <button onClick={handleClick} className="py-1 text-white focus:text-blue-400 bg-gray-700 border border-gray-500 focus:border-blue-400 rounded-lg focus:outline-none">Code</button>
                    <button onClick={handleClick} className="py-1 text-white focus:text-blue-400 bg-gray-700 border border-gray-500 focus:border-blue-400 rounded-lg focus:outline-none">Repositories</button>
                    {/* <button onClick={handleClick} className="py-1 text-white focus:text-blue-400 bg-gray-700 border border-gray-500 focus:border-blue-400 rounded-lg focus:outline-none">Packages</button> */}
                </div>
            </div>
        </>
    );
};

export default Pages;
