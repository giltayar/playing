// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const fetch = require('node-fetch');

function uniq(arr) {
  return Array.from(new Set(arr));
}

function getUrls() {
  const sitemapUrl = 'http://a142332.hostedsitemap.com/4049686/urllist.txt';
  const filters = [/\/blog/, /\/docs\//, /\.png/, /\.pdf/];

  return fetch(sitemapUrl)
    .then(res => res.text())
    .then(text =>
      uniq(
        text
          .split(/\n/g)
          .filter(u => !!u)
          .filter(u => !filters.some(f => u.match(f)))
          .map(u => {
            let qpIndex = u.indexOf('?');
            if (qpIndex > -1) {
              return u.substring(0, qpIndex);
            }
            return u;
          }),
      ),
    ).then(urls => {
      console.log('@@@@GIL urls', urls.length)

      return urls;
    });
}

module.exports = async (on, _config) => {
  on('task', {getUrls});
};

require('@applitools/eyes-cypress')(module)
