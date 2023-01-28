const { default: Axios } = require('axios')
const cheerio = require('cheerio')


function tiklydown(url) {
     return new Promise((resolve, reject) => {
          Axios.get(`https://developers.tiklydown.me/api/download?url=${url}`)
               .then(({ data }) => {
                    resolve(data)
               })
               .catch(e => {
                    reject(e)
               })
     })
}

function dlpanda(url) {
     return new Promise((resolve, reject) => {
          Axios.get(`https://dlpanda.com/?url=${url}`)
               .then(({ data }) => {
                    const $ = cheerio.load(data)
                    let images = []
                    $('div.card-body.row > div').get().map(rest => {
                         var image = $(rest).find('img').attr('src')
                         if (image) images.push(image)
                    })
                    resolve(images)
               })
               .catch(e => {
                    reject(e) 
               })
     })
}

module.exports.tikly = tiklydown
module.exports.dlpanda = dlpanda
