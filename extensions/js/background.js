const githubSearchExtension = chrome.contextMenus.create({
  id: 'github-search-extension',
  title: 'GitHub Code Search',
  type: 'normal',
  contexts: ['page', 'frame', 'selection'],
  onclick: (info, tab) => {
    window.open(
      'https://github.com/search?type=code&q=' +
        encodeURIComponent(info.selectionText),
      '_blank'
    );
  },
});
