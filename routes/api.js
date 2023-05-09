require('../set')
__path = process.cwd()

// Created by: King Of Bear | Saipul Anuar

// Module
var express = require('express');
var router  = express.Router();
var fetch = require('node-fetch');
const axios = require("axios");
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var isUrl = require('is-url');
var TinyUrl = require('tinyurl');
var zrapi = require("zrapi");
var BitlyClient = require('bitly').BitlyClient
const nodemailer = require("nodemailer");
const mintake = require("mintake");
const primbon = require('primbon-saipul')
const scrapper = require("@saipulanuar/open-apis");
var translate = require('@saipulanuar/google-translate-api');
const wikipediajs = require('wikipediajs')
const mediafire = require("./../lib/api/mediafire");

// Lib
var { fetchJson, runtime, getBuffer } = require('../lib/myfunc');

var scp1 = require('../lib/api/scraperr');
var KingOfBear = require("../lib/listapi");
const attp2 = require("../lib/api/attp2");

const { readFileTxt, readFileJson } = require('../lib/function');

const { TTScraper } = require("tiktok-scraper-ts");
const TikTokScraper = new TTScraper();
var zrapi = require("zrapi");

var { 
  stalkff,
  igstalk
} = require("./../lib/api/stalker");

var { 
  topupFreeFiree,
  gopay
} = require("./../lib/api/topup");

var { 
  openai
} = require("./../lib/api/open-ai");

var { 
  ngazap
} = require("./../lib/api/virtex/ngazap");

var { 
  vir
} = require("./../lib/api/virtex/vir");

var { 
  vir2
} = require("./../lib/api/virtex/virtex");

var { 
  vir3
} = require("./../lib/api/virtex/virus");

var { 
  philips
} = require("./../lib/api/virtex/philips");

var { 
  mlstalk
} = require("./../lib/api/mlstalk");

var { 
  musicaldown,
  tiktokstalk,
  jadwalmplid,
  attp,
  ttp,
  downvideo,
  emoji,
  emojimix,
  randomtt
} = require("./../lib/api/musicaldown");

var { 
    KbbiInfo
  } = require("./../lib/api/kbbi");

var { 
    facebookDownload
  } = require("./../lib/api/facebook");

var { 
  Joox, 
  FB,
  Tiktok,
  mediafiredownloader
} = require("./../lib/api/downloader");

var {
  pinterest
} = require("./../lib/api/pinterest");

var {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
} = require("./../lib/api/yt");

var {
  telesticker,
  stickersearch,
  sholat,
  styletext,
  linkwa
} = require("./../lib/api/scraper");

var {
  tiktokdl,
  tiktokdlv3,
  tiktokdlv4
} = require("./../lib/api/tiktokdl");

var {
  Cuaca, 
  Lirik
} = require('./../lib/api/information');

var tebakGambar = require('./../lib/api/tebakGambar');

var {
  Base, 
  WPUser
} = require('./../lib/api/tools');
const { query } = require('express');

// Apikey
var listkey = ["annavip","9286c1a775","9267ic6a0f1","927j59de9c","921n567ea6","921h5a4282","925n2c494","928b0323c9","927b0k3hp7o2","925b04ib0j","023l1qhbpk","92b1a0h7ts","92a70b789c","9291a7bk0p1","92a7o8pe9c","92y1a7l0a6","9221a7i9h2","921a7k3n94","92a0kk2bc9","921a7l9pho2","92a2n1kb0j","92b0a75k6f","92u1a7pr8s"];
var listkeyprem = ["annavip"];

  // FITUR DOWNLOAD
  router.get('/download/fb', async (req, res, next) => {
    var url = req.query.url
    facebookDownload(url).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/downloader/instagram', async (req, res, next) => {
    var url = req.query.url
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    
    scrapper
    .insta_post(url).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
              url: data.post1.url,
              title: data.title,
              expires: data.expires
            }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

router.get('/downloader/allvideo', async (req, res, next) => {
    
    var url = req.query.url
    
    
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    
    downvideo(url).then(data => {
        var result = data.medias
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/download/mediafire', async (req, res, next) => {
    var url = req.query.url
       
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    mediafiredownloader(url).then(data => {
        var result = data
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/download/mediafire-v2', async (req, res, next) => {
    var url = req.query.url    
    
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    
    mediafire(url).then(data => {
        var result = data
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/download/happymod', async (req, res, next) => {
    
    var query = req.query.query
    
    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    
    
    scp1.happymod(query).then(data => {
        var result = data
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

router.get('/download/cariresep', async (req, res, next) => {
    
    var query = req.query.query
    
    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    
    
    scp1.cariresep(query).then(data => {
        var result = data
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

router.get('/download/bacaresep', async (req, res, next) => {
    
    var url = req.query.url
    
    
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    
    scp1.bacaresep(url).then(data => {
        var result = data
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/pinterest', async (req, res, next) => {
    
    var query = req.query.query
    
    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    
    
    pinterest(query).then(result => {
        const url_download = result[Math.floor(Math.random() * result.length)];
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
                url: url_download
            }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/search/pinterest', async (req, res, next) => {
    
    var query = req.query.query
    
    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    
    
    KingOfBear.pinterest(query).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/download/soundcloud', async (req, res, next) => {
    
    var url = req.query.url
    
    
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    
    KingOfBear.soundcloud(url).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/download/tiktokview', async (req, res, next) => {
    
    var url = req.query.url
    
    
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    
    TikTokScraper.video(url).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/download/tiktok', async (req, res, next) => {
    
    var url = req.query.url
    
    
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    
    KingOfBear.ttdl(url).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

router.get('/download/tiktok2', async (req, res, next) => {
    
    var url = req.query.url
    
    
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    
    musicaldown(url).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

router.get('/download/tiktok3', async (req, res, next) => {
    var url = req.query.url
    
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    tiktokdl(url).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

router.get('/download/tiktok4', async (req, res, next) => {
    
    var url = req.query.url
    
    
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    
    tiktokdlv4(url).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/download/stickersearch', async (req, res, next) => {
    
    var text = req.query.text
    
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text`
    });
    
    
    stickersearch(text).then(data => {
        const url_download = data.sticker_url[Math.floor(Math.random() * data.sticker_url.length)];
        const title = result.title
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
                title: title,
                url: url_download
            }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/search/wikimedia', async (req, res, next) => {
    
    var query = req.query.query
    
    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    
    
    KingOfBear.wikimedia(query).then(data => {
        const wiki = data[Math.floor(Math.random() * data.length)];
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: wiki
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/download/telesticker', async (req, res, next) => {
    
    var url = req.query.url
    
    
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    
    telesticker(url).then(data => {
        const url_download = data[Math.floor(Math.random() * data.length)];
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: url_download
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

   router.get('/download/xnxx', async (req, res, next) => {
    
    var query = req.query.query
    
    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    
    
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/xnxx/search?query=${query}`))
    .then(response => response.json())
        .then(hasil => {
            var result = hasil.result;
            const xnxx = result[Math.floor(Math.random() * result.length)];
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: xnxx
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })
  
  router.get('/download/xvideo', async (req, res, next) => {
    
    var query = req.query.query
    
    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    
    
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/xvideo/search?query=${query}`))
    .then(response => response.json())
        .then(hasil => {
            var result = hasil.result;
            const xvideo = result[Math.floor(Math.random() * result.length)];
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: xvideo
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/download/ytmp4', async (req, res, next) => {
    
    var url = req.query.url
    
    
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    
    ytDonlodMp4(url).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/download/ytmp4-v2', async (req, res, next) => {
    var url = req.query.url
        
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    scrapper
    .insta_post(url).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
              "title": data.title,
              "url": data.post1.url,
              "type": data.post1.type,
              "expires": data.expires
              }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/download/ytmp3', async (req, res, next) => {
    
    var url = req.query.url
    
    
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    
    ytDonlodMp3(url).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/yt/playmp3', async (req, res, next) => {
    
    var query = req.query.query
    
    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    
    
    ytPlayMp3(query).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/yt/playmp4', async (req, res, next) => {
    
    var query = req.query.query
    
    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    
    
    ytPlayMp4(query).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/yt/search', async (req, res, next) => {
    
    var query = req.query.query
    
    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    
    
    ytSearch(query).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    })
  })

  // FITUR STALKER

  router.get('/stalk/ig', async (req, res, next) => {
    
    var username = req.query.username
    
    
    if (username === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter username`
    });
    
    
    igstalk(username).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalk/tiktok', async (req, res, next) => {
    
    var username = req.query.username
    
    
    if (username === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter username`
    });
    
    
    fetchJson(`https://zenzapis.xyz/stalker/tiktok?username=${username}&apikey=sonelstore`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/download/tiktokstalk', async (req, res, next) => {
    
    var username = req.query.username
    
    
    if (username === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter username`
    });
    
    
    tiktokstalk(username).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalk/npm', async (req, res, next) => {
    
    var username = req.query.username
    
    
    if (username === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter username`
    });
    
    
    fetchJson(`https://registry.npmjs.org/${username}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalk/epep', async (req, res, next) => {
    
    var id = req.query.id
    
    
    if (id === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id`
    });
    
    
    stalkff(id).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/topup/epep1', async (req, res, next) => {
    
    var id = req.query.id
    var jumlah = '5'
    var nomor = req.query.nomor
    
    
    if (id === undefined || nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id, nomor`
    });
    
    
    topupFreeFiree(id, jumlah, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
              Id: id,
              Jumlah: `${jumlah} DM`,
              Nomor: nomor,
              Harga: 'Rp 1.261',
              deepLink: data.deepLink,
              checkoutUrl: data.checkoutUrl,
              timerCount: data.timerCount,
              MetodePembayaran: data.paymentMethod,
              Qris: data.qrCode
            }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/topup/epep2', async (req, res, next) => {
    
    var id = req.query.id
    var jumlah = '12'
    var nomor = req.query.nomor
    
    
    if (id === undefined || nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id, nomor`
    });
    
    
    topupFreeFiree(id, jumlah, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
              Id: id,
              Jumlah: `${jumlah} DM`,
              Nomor: nomor,
              Harga: 'Rp 2.523',
              deepLink: data.deepLink,
              checkoutUrl: data.checkoutUrl,
              timerCount: data.timerCount,
              MetodePembayaran: data.paymentMethod,
              Qris: data.qrCode
            }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/topup/epep3', async (req, res, next) => {
    
    var id = req.query.id
    var jumlah = '70'
    var nomor = req.query.nomor
    
    
    if (id === undefined || nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id, nomor`
    });
    
    
    topupFreeFiree(id, jumlah, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
              Id: id,
              Jumlah: `${jumlah} DM`,
              Nomor: nomor,
              Harga: 'Rp 12.614',
              deepLink: data.deepLink,
              checkoutUrl: data.checkoutUrl,
              timerCount: data.timerCount,
              MetodePembayaran: data.paymentMethod,
              Qris: data.qrCode
            }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/topup/epep4', async (req, res, next) => {
    
    var id = req.query.id
    var jumlah = '140'
    var nomor = req.query.nomor
    
    
    if (id === undefined || nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id, nomor`
    });
    
    
    topupFreeFiree(id, jumlah, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
              Id: id,
              Jumlah: `${jumlah} DM`,
              Nomor: nomor,
              Harga: 'Rp 25.227',
              deepLink: data.deepLink,
              checkoutUrl: data.checkoutUrl,
              timerCount: data.timerCount,
              MetodePembayaran: data.paymentMethod,
              Qris: data.qrCode
            }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/topup/epep5', async (req, res, next) => {
    
    var id = req.query.id
    var jumlah = '355'
    var nomor = req.query.nomor
    
    
    if (id === undefined || nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id, nomor`
    });
    
    
    topupFreeFiree(id, jumlah, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
              Id: id,
              Jumlah: `${jumlah} DM`,
              Nomor: nomor,
              Harga: 'Rp 63.068',
              deepLink: data.deepLink,
              checkoutUrl: data.checkoutUrl,
              timerCount: data.timerCount,
              MetodePembayaran: data.paymentMethod,
              Qris: data.qrCode
            }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/topup/epep6', async (req, res, next) => {
    
    var id = req.query.id
    var jumlah = '720'
    var nomor = req.query.nomor
    
    
    if (id === undefined || nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id, nomor`
    });
    
    
    topupFreeFiree(id, jumlah, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
              Id: id,
              Jumlah: `${jumlah} DM`,
              Nomor: nomor,
              Harga: 'Rp 126.136',
              deepLink: data.deepLink,
              checkoutUrl: data.checkoutUrl,
              timerCount: data.timerCount,
              MetodePembayaran: data.paymentMethod,
              Qris: data.qrCode
            }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalk/ml', async (req, res, next) => {
    
    var id = req.query.id
    var server = req.query.server
    
    
    if (id === undefined || server === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id, server`
    });
    
    
    mlstalk(id, server).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
              Id: id,
              Server: server,
              Username: data.userName
        }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalk/nickhago', async (req, res, next) => {
    
    var id = req.query.id
    
    
    if (id === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id`
    });
    
    
    fetchJson(`https://zenzapis.xyz/stalker/nickhago?apikey=sonelstore&query=${id}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalker/nickccfun', async (req, res, next) => {
    
    var id = req.query.id
    
    
    if (id === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id`
    });
    
    
    fetchJson(`https://zenzapis.xyz/stalker/nickcocofun?apikey=sonelstore&query=${id}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalker/nickbgl', async (req, res, next) => {
    
    var id = req.query.id
    
    
    if (id === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id`
    });
    
    
    fetchJson(`https://zenzapis.xyz/stalker/nickbigolive?apikey=sonelstore&query=${id}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalker/nicknmtv', async (req, res, next) => {
    
    var id = req.query.id
    
    
    if (id === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id`
    });
    
    
    fetchJson(`https://zenzapis.xyz/stalker/nicknimotv?apikey=sonelstore&query=${id}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalker/nickpubg', async (req, res, next) => {
    
    var id = req.query.id
    
    
    if (id === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id`
    });
    
    
    fetchJson(`https://zenzapis.xyz/stalker/nickpubg?apikey=sonelstore&query=${id}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalker/nickmla', async (req, res, next) => {
    
    var id = req.query.id
    var zoneid = req.query.zoneid
    
    
    if (id === undefined || zoneid === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id, zoneid`
    });
    
    
    fetchJson(`https://zenzapis.xyz/stalker/nickmladventure?apikey=sonelstore&query=${id}&query2=${zoneid}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalker/nicklokapala', async (req, res, next) => {
    
    var id = req.query.id
    
    
    if (id === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id`
    });
    
    
    fetchJson(`https://zenzapis.xyz/stalker/nicklokapala?apikey=sonelstore&query=${id}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalker/nickzepeto', async (req, res, next) => {
    
    var id = req.query.id
    
    
    if (id === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id`
    });
    
    
    fetchJson(`https://zenzapis.xyz/stalker/nickzepeto?apikey=sonelstore&query=${id}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalker/nicksausage', async (req, res, next) => {
    
    var id = req.query.id
    
    
    if (id === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id`
    });
    
    
    fetchJson(`https://zenzapis.xyz/stalker/nicksausage?apikey=sonelstore&query=${id}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalker/nickpb', async (req, res, next) => {
    
    var id = req.query.id
    
    
    if (id === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id`
    });
    
    
    fetchJson(`https://zenzapis.xyz/stalker/nickpb?apikey=sonelstore&query=${id}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalk/higgs', async (req, res, next) => {
    
    var id = req.query.id
    var signature = '798e4a62e37692f3d3696c4020c7b0b0'
    
    
    if (id === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id`
    });
    
    
    fetchJson(`https://v1.apigames.id/merchant/M221008ISFN1832UF/cek-username/higgs?user_id=${id}&signature=${signature}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalk/aov', async (req, res, next) => {
    
    var id = req.query.id
    
    
    if (id === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id`
    });
    
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eba684a286msh8f9c9a40acf9d21p110bcfjsn9f04d418e8da',
            'X-RapidAPI-Host': 'check-username-games.p.rapidapi.com'
        }
    };
    fetchJson(`https://check-username-games.p.rapidapi.com/check-username/aov?userId=${id}`, options).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
                NamaGame: 'AOV',
            Id: `${id}`,
            Username: `${data}`
            }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalk/codm', async (req, res, next) => {
    
    var id = req.query.id
    
    
    if (id === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id`
    });
    
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eba684a286msh8f9c9a40acf9d21p110bcfjsn9f04d418e8da',
            'X-RapidAPI-Host': 'check-username-games.p.rapidapi.com'
        }
    };
    fetchJson(`https://check-username-games.p.rapidapi.com/check-username/codm?userId=${id}`, options).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
                NamaGame: 'CODM',
            Id: `${id}`,
            Username: `${data}`
            }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalk/speed-drifters', async (req, res, next) => {
    
    var id = req.query.id
    
    
    if (id === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id`
    });
    
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eba684a286msh8f9c9a40acf9d21p110bcfjsn9f04d418e8da',
            'X-RapidAPI-Host': 'check-username-games.p.rapidapi.com'
        }
    };
    fetchJson(`https://check-username-games.p.rapidapi.com/check-username/speed-drifters?userId=${id}`, options).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
                NamaGame: 'Speed Drifters',
            Id: `${id}`,
            Username: `${data}`
            }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/stalk/life-after', async (req, res, next) => {
    
    var id = req.query.id
    
    
    if (id === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter id`
    });
    
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eba684a286msh8f9c9a40acf9d21p110bcfjsn9f04d418e8da',
            'X-RapidAPI-Host': 'check-username-games.p.rapidapi.com'
        }
    };
    fetchJson(`https://check-username-games.p.rapidapi.com/check-username/life-after?userId=${id}&server=SandCastle`, options).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
                NamaGame: 'Life After',
            Id: `${id}`,
            Username: `${data}`
            }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  // FITUR MUSIK API
  router.get('/music/joox', async (req, res, next) => {
    
    var query = req.query.query
    
    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    
    
    Joox(query).then(data => {
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/music/liriklagu', async (req, res, next) => {
    
    var query = req.query.query
    
    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    
    
    Lirik(query).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  // FITUR ISLAMIC
  router.get('/muslim/hadits', async (req, res, next) => {
    
    var kitab = req.query.kitab
    var nomor = req.query.nomor
    
    
    if (kitab === undefined || nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter kitab, nomor`
    });
    
    
    fetchJson(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/muslim/quran', async (req, res, next) => {
    
    var surah = req.query.surah
    var ayat = req.query.ayat
    
    
    if (surah === undefined || ayat === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter surah, ayat`
    });
    
    
    fetchJson(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/muslim/tafsirsurah', async (req, res, next) => {
    
    var surah = req.query.surah
    
    
    if (surah === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter surah`
    });
    
    
    KingOfBear.tafsirsurah(surah).then(data => {
        const tafsirsurah = data[Math.floor(Math.random() * data.length)];
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: tafsirsurah
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/muslim/tahlil', async (req, res, next) => {
    
var tahlil = JSON.parse(
              fs.readFileSync(__path + '/lib/data/tahlil.json')
          )
      res
            .status(200)
            .json({
                code: 200,
                success: true,
            creator: `${creator}`,
            result: tahlil
            })
  })

  router.get('/muslim/wirid', async (req, res, next) => {
    var wirid = JSON.parse(
              fs.readFileSync(__path + '/lib/data/tahlil.json')
          )
      res
            .status(200)
            .json({
                code: 200,
                success: true,
            creator: `${creator}`,
            result: wirid
            })
  })

  router.get('/muslim/asmaulhusna', async (req, res, next) => {
var asmaulhusna = JSON.parse(
              fs.readFileSync(__path + '/lib/data/asmaul_husna.json')
          )
      res
            .status(200)
            .json({
                code: 200,
                success: true,
            creator: `${creator}`,
            result: asmaulhusna
            })
  })

  router.get('/muslim/ayatkursi', async (req, res, next) => {
    var ayatkursi = JSON.parse(
              fs.readFileSync(__path + '/lib/data/ayatkursi.json')
          )
      res
            .status(200)
            .json({
                code: 200,
                success: true,
            creator: `${creator}`,
            result: ayatkursi.data
            })
  })

  router.get('/muslim/kisahnabi', async (req, res, next) => {
    
    var nabi = req.query.nabi;
    
    
    if (nabi === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter nabi`
    });
    
    var kisahNabi = JSON.parse(
              fs.readFileSync(__path + `/lib/data/kisahNabi/${nabi}.json`)
          )
      res
            .status(200)
            .json({
                code: 200,
                success: true,
            creator: `${creator}`,
            result: kisahNabi
            })
  })

  router.get('/muslim/niatshalat', async (req, res, next) => {
   var niatshalat = JSON.parse(
              fs.readFileSync(__path + '/lib/data/niatsholat.json')
          )
      res
            .status(200)
            .json({
                code: 200,
                success: true,
            creator: `${creator}`,
            result: niatshalat
            })
  })

  router.get('/muslim/doaharian', async (req, res, next) => {
    var doaharian = JSON.parse(
              fs.readFileSync(__path + '/lib/data/doaharian.json')
          )
      res
            .status(200)
            .json({
                code: 200,
                success: true,
            creator: `${creator}`,
            result: doaharian
            })
  })

  router.get('/muslim/bacaanshalat', async (req, res, next) => {
    var bacaanshalat = JSON.parse(
              fs.readFileSync(__path + '/lib/data/niatsholat.json')
          )
      res
            .status(200)
            .json({
                code: 200,
                success: true,
            creator: `${creator}`,
            result: bacaanshalat
            })
  })

  router.get('/muslim/jadwalshalat', async (req, res, next) => {
    
    var kota = req.query.kota;
    
    
    if (kota === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter kota`
    });
    
    
    sholat(kota).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/random/quotes/muslim', async (req, res, next) => {
    fetchJson(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=agamis`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
                quotes: data.text_id
            }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  // RANDOM IMAGE API
  router.get('/random/couple', async (req, res, next) => {
    var couple = JSON.parse(
              fs.readFileSync(__path + '/lib/data/kopel.json')
          )
    var ppcp = couple[Math.floor(Math.random() * couple.length)]
      res
            .status(200)
            .json({
                code: 200,
                success: true,
            creator: `${creator}`,
            result: ppcp
            })
  })

  router.get('/search/image', async (req, res, next) => {
    var query = req.query.query;
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    
    var gis = require('g-i-s')
gis(query, logResults)

async function logResults(error, results) {
  if (error) {
  res.json(loghandler.notfound)
  }
  else {
  if (!results[0]) return res.json(loghandler.notfound)
  const ppcppp = results[Math.floor(Math.random() * results.length)];
    var kimak = ppcppp.url
    const data = await getBuffer(kimak)
         await fs.writeFileSync(__path +'/tmp/gimage.jpeg', data)
        res.sendFile(__path+'/tmp/gimage.jpeg')
        }
    }
})

router.get('/maker/dadu', async (req, res, next) => {
    random = Math.floor(Math.random() * 6) + 1
      hasil = 'https://www.random.org/dice/dice' + random + '.png'
     data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/dadu.png', data)
        res.sendFile(__path+'/tmp/dadu.png')
  })

  router.get('/wallpaper/teknologi', async (req, res, next) => {    
    var result = await fetchJson(`https://privatasw.herokuapp.com/cwelumanasu/teknologi`)
        bear = result.result
        const bear2 = await getBuffer(bear)
         await fs.writeFileSync(__path +'/tmp/teknologin.jpeg', bear2)
        res.sendFile(__path+'/tmp/teknologin.jpeg')
  })

  router.get('/wallpaper/programming', async (req, res, next) => {
    var result = await fetchJson(`https://privatasw.herokuapp.com/lariadahemkel/programming`)
        bear = result.result
        const bear2 = await getBuffer(bear)
         await fs.writeFileSync(__path +'/tmp/programming.jpeg', bear2)
        res.sendFile(__path+'/tmp/programming.jpeg')
  })

  router.get('/wallpaper/cyberspace', async (req, res, next) => {
    var result = await fetchJson(`https://privatasw.herokuapp.com/Lujomloajg/cybertod`)
        bear = result.result
        const bear2 = await getBuffer(bear)
         await fs.writeFileSync(__path +'/tmp/cyberspace.jpeg', bear2)
        res.sendFile(__path+'/tmp/cyberspace.jpeg')
  })

  router.get('/wallpaper/muslim', async (req, res, next) => {
    var result = await fetchJson(`https://privatasw.herokuapp.com/tobatboy/islam`)
        bear = result.result
        const bear2 = await getBuffer(bear)
         await fs.writeFileSync(__path +'/tmp/muslim.jpeg', bear2)
        res.sendFile(__path+'/tmp/muslim.jpeg')
  })

  router.get('/wallpaper/pegunungan', async (req, res, next) => {
    var result = await fetchJson(`https://privatasw.herokuapp.com/montain/gunung`)
        bear = result.result
        const bear2 = await getBuffer(bear)
         await fs.writeFileSync(__path +'/tmp/pegunungan.jpeg', bear2)
        res.sendFile(__path+'/tmp/pegunungan.jpeg')
  })

  // FITUR TIME LINE API
  router.get('/asupan', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/random-tiktok.json`)
    .then(async pepek => {    
    var result = pepek[Math.floor(Math.random() * pepek.length)];
        var buffer = result.url;
      musicaldown(`${buffer}`).then(async kimak => {
      kontol2= kimak.video.link2
         data = await fetch(kontol2).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/random-tiktok.mp4', data)
        res.sendFile(__path+'/tmp/random-tiktok.mp4')
         })
    })
         .catch(e => {
          console.log(e);
          res.json(loghandler.error)
})
})

  router.get('/asupan2', async (req, res, next) => {    
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/asupan-ppkk.json`).then(data => {
        var ppcp = data[Math.floor(Math.random() * data.length)]
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
                url: `${ppcp.asupan}`
            }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/asupan/santuy', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/asupan-santuy.json`).then(data => {
        var ppcp = data[Math.floor(Math.random() * data.length)]
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: ppcp
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/asupan/hijaber', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/asupan-hijaber.json`).then(data => {
        var ppcp = data[Math.floor(Math.random() * data.length)]
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: ppcp
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/asupan/ukhty', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/asupan-ukhti.json`).then(data => {
        var ppcp = data[Math.floor(Math.random() * data.length)]
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: ppcp
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/asupan/bocil', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/asupan-bocil.json`).then(data => {
        var ppcp = data[Math.floor(Math.random() * data.length)]
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: ppcp
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/asupan/gheayubi', async (req, res, next) => {
    var pepek= JSON.parse(
              fs.readFileSync(__path + '/lib/data/asupan/gheayubi.json')
          )
    var result = pepek[Math.floor(Math.random() * pepek.length)];
        var buffer = result.url;
      musicaldown(`${buffer}`).then(async kimak => {
      kontol2= kimak.video.link2
         data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/gheayubi.mp4', data)
        res.sendFile(__path+'/tmp/gheayubi.mp4')
         })

         .catch(e => {
          console.log(e);
          res.json(loghandler.error)
})
})

  router.get('/asupan/rikagusriani', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/rikagusriani.json`)
    .then(async pepek => {    
    var result = pepek[Math.floor(Math.random() * pepek.length)];
        var buffer = result.url;
      musicaldown(`${buffer}`).then(async kimak => {
      kontol2= kimak.video.link2
         data = await fetch(kontol2).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/rikagusriani.mp4', data)
        res.sendFile(__path+'/tmp/rikagusriani.mp4')
         })
    })
         .catch(e => {
          console.log(e);
          res.json(loghandler.error)
})
})

  //FITUR CECAN API
  router.get('/cecan/random', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/cecan-random.json`)
    .then(async data => {    
    var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
        await getBuffer(buffer).then(bear => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(bear)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })
  })

router.get('/cecan/hijaber', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/cecan-hijaber.json`)
    .then(async data => {    
    var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
        await getBuffer(buffer).then(bear => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(bear)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })
  })

router.get('/cecan/china', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/cecan-china.json`)
    .then(async data => {    
    var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
        await getBuffer(buffer).then(bear => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(bear)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })
  })

router.get('/cecan/indonesia', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/cecan-indonesia.json`)
    .then(async data => {    
    var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
        await getBuffer(buffer).then(bear => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(bear)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })
  })

router.get('/cecan/japan', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/cecan-japan.json`)
    .then(async data => {    
    var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
        await getBuffer(buffer).then(bear => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(bear)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })
  })

router.get('/cecan/korea', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/cecan-korea.json`)
    .then(async data => {    
    var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
        await getBuffer(buffer).then(bear => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(bear)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })
  })

router.get('/cecan/malaysia', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/cecan-malaysia.json`)
    .then(async data => {    
    var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
        await getBuffer(buffer).then(bear => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(bear)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })
  })

router.get('/cecan/thailand', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/cecan-thailand.json`)
    .then(async data => {    
    var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
        await getBuffer(buffer).then(bear => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(bear)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })
  })

router.get('/cecan/vietnam', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/cecan-vietnam.json`)
    .then(async data => {    
    var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
        await getBuffer(buffer).then(bear => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(bear)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })
  })

  // FITUR IMAGE MAKER API
  router.get('/textmaker/quoteser', async (req, res, next) => {
    var text = req.query.text    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text`
    });
    
    
    KingOfBear.textpro("https://textpro.me/firework-sparkle-text-effect-930.html", [text])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/textmaker/quobucin', async (req, res, next) => {
    
    var text = req.query.text
    
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text`
    });
    
    
    KingOfBear.textpro("https://textpro.me/create-neon-light-on-brick-wall-online-1062.html", [text])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/maker/nulis', async (req, res, next) => {
    
    const text = req.query.text;
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text dan apikey`
    });
    
    
    var result = await fetchJson(`https://itskhyaa-textmaker.herokuapp.com/api/nulis?text=${text}`)
        bear = result.result
        const bear2 = await getBuffer(bear)
         await fs.writeFileSync(__path +'/tmp/nulis.jpeg', bear2)
        res.sendFile(__path+'/tmp/nulis.jpeg')
  })

  router.get('/maker/nulis2', async (req, res, next) => {
    
    var text = req.query.text;
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text dan apikey`
    });
    
    
    var data = await fetchJson(`https://salism3api.pythonanywhere.com/write/?text=${text}`)
        bear = data.images
        const bear2 = await fetch(bear).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/nulis2.jpeg', bear2)
        res.sendFile(__path+'/tmp/nulis2.jpeg')
  })

  router.get('/textmaker/digital', async (req, res, next) => {
    
    var text = req.query.text;
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text dan apikey`
    });
    
    
    KingOfBear.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", [text])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/maker/pubeje', async (req, res, next) => {
    
    var text1 = req.query.text;
    var text2 = req.query.text2;
    
    if (text1 === undefined || text2 === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text, text2 dan apikey`
    });
    
    
    KingOfBear.photooxy("https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html", [text1,text2])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/maker/gammer', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/wallpaper-gamming.json`)
    .then(async data => {    
    var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
         data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/epep.jpeg', data)
        res.sendFile(__path+'/tmp/epep.jpeg')
         })
         .catch(e => {
          console.log(e);
          res.json(loghandler.error)
})
})

router.get('/maker/joker', async (req, res, next) => {
    
    var text = req.query.text;
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text, text2 dan apikey`
    });
    
    
    KingOfBear.textpro("https://textpro.me/create-logo-joker-online-934.html", [text])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/maker/ttp', async (req, res, next) => {
    
    var text = req.query.text;
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text dan apikey`
    });
    
    
    var data = await fetchJson(`https://salism3api.pythonanywhere.com/text2img/?text=${text}`)
        bear = data.image
        const bear2 = await fetch(bear).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/ttp.png', bear2)
        res.sendFile(__path+'/tmp/ttp.png')
  })

router.get('/maker/ttp2', async (req, res, next) => {
    
    var text = req.query.text;
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text dan apikey`
    });
    
    
    ttp(text).then(async data => {    
        var buffer = data.result;
         data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/ttp2.png', data)
        res.sendFile(__path+'/tmp/ttp2.png')
         })
         .catch(e => {
          console.log(e);
          res.json(loghandler.error)
})
})

  router.get('/maker/attp', async (req, res, next) => {
    
    var text = req.query.text;
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text dan apikey`
    });
    
    
    var data = await fetchJson(`https://salism3api.pythonanywhere.com/text2gif/?text=${text}`)
        bear = data.image
        const bear2 = await fetch(bear).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/attp.png', bear2)
        res.sendFile(__path+'/tmp/attp.png')
  })

router.get('/maker/attp2', async (req, res, next) => {
    
    var text = req.query.text;
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text dan apikey`
    });
    
    
    attp(text).then(async data => {    
        var buffer = data.url;
         data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/attp2.png', data)
        res.sendFile(__path+'/tmp/attp2.png')
         })
         .catch(e => {
          console.log(e);
          res.json(loghandler.error)
})
})

router.get('/maker/attp3', async (req, res, next) => {
    
    var text = req.query.text;
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text dan apikey`
    });
    
    
    attp2(text).then(async data => {    
        var buffer = data.url;
         data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/attp2.png', data)
        res.sendFile(__path+'/tmp/attp2.png')
         })
         .catch(e => {
          console.log(e);
          res.json(loghandler.error)
})
})

  // FITUR EPHOTO 360 MAKER
  router.get('/maker/youtube-silver-button', async (req, res, next) => {
    
    var text = req.query.text;
    let radio = `jlady2un1`
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text dan apikey`
    });
    
    
    mintake 
  .ephoto4("https://en.ephoto360.com/create-silver-button-gold-button-social-network-online-450.html", [
    text
    ], radio
  )
  .then((data) => {
    var result = data.image
    var bear = `https://s1.ephoto360.com${result}`
    res.status(200).send({
        status: 200, 
        creator: `${creator}`,
        result: bear
    })
}).catch(error => {
    console.log(error);
    res.status(500).send({
        status: 500,
        message: 'Internal Server Error'
    })
});
})

router.get('/maker/youtube-gold-button', async (req, res, next) => {
    
    var text = req.query.text;
    let radio = `h093supm4`
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text dan apikey`
    });
    
    
    mintake 
  .ephoto4("https://en.ephoto360.com/create-silver-button-gold-button-social-network-online-450.html", [
    text
    ], radio
  )
  .then((data) => {
    var result = data.image
    var bear = `https://s1.ephoto360.com${result}`
    res.status(200).send({
        status: 200, 
        creator: `${creator}`,
        result: bear
    })
}).catch(error => {
    console.log(error);
    res.status(500).send({
        status: 500,
        message: 'Internal Server Error'
    })
});
})

router.get('/maker/instagram-gold-button', async (req, res, next) => {
    
    var text = req.query.text;
    let radio = `fg66107ov`
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text dan apikey`
    });
    
    
    mintake 
  .ephoto4("https://en.ephoto360.com/create-silver-button-gold-button-social-network-online-450.html", [
    text
    ], radio
  )
  .then((data) => {
    var result = data.image
    var bear = `https://s1.ephoto360.com${result}`
    res.status(200).send({
        status: 200, 
        creator: `${creator}`,
        result: bear
    })
}).catch(error => {
    console.log(error);
    res.status(500).send({
        status: 500,
        message: 'Internal Server Error'
    })
});
})

router.get('/maker/instagram-silver-button', async (req, res, next) => {
    
    var text = req.query.text;
    let radio = `wv902s1ri`
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text dan apikey`
    });
    
    
    mintake 
  .ephoto4("https://en.ephoto360.com/create-silver-button-gold-button-social-network-online-450.html", [
    text
    ], radio
  )
  .then((data) => {
    var result = data.image
    var bear = `https://s1.ephoto360.com${result}`
    res.status(200).send({
        status: 200, 
        creator: `${creator}`,
        result: bear
    })
}).catch(error => {
    console.log(error);
    res.status(500).send({
        status: 500,
        message: 'Internal Server Error'
    })
});
})

router.get('/maker/facebook-gold-button', async (req, res, next) => {
    
    var text = req.query.text;
    let radio = `1ie53a3yj`
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text dan apikey`
    });
    
    
    mintake 
  .ephoto4("https://en.ephoto360.com/create-silver-button-gold-button-social-network-online-450.html", [
    text
    ], radio
  )
  .then((data) => {
    var result = data.image
    var bear = `https://s1.ephoto360.com${result}`
    res.status(200).send({
        status: 200, 
        creator: `${creator}`,
        result: bear
    })
}).catch(error => {
    console.log(error);
    res.status(500).send({
        status: 500,
        message: 'Internal Server Error'
    })
});
})

router.get('/maker/facebook-silver-button', async (req, res, next) => {
    
    var text = req.query.text;
    let radio = `xy3n9c2cr`
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text dan apikey`
    });
    
    
    mintake 
  .ephoto4("https://en.ephoto360.com/create-silver-button-gold-button-social-network-online-450.html", [
    text
    ], radio
  )
  .then((data) => {
    var result = data.image
    var bear = `https://s1.ephoto360.com${result}`
    res.status(200).send({
        status: 200, 
        creator: `${creator}`,
        result: bear
    })
}).catch(error => {
    console.log(error);
    res.status(500).send({
        status: 500,
        message: 'Internal Server Error'
    })
});
})

router.get('/maker/twitter-gold-button', async (req, res, next) => {
    
    var text = req.query.text;
    let radio = `cs4ble8b9`
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text dan apikey`
    });
    
    
    mintake 
  .ephoto4("https://en.ephoto360.com/create-silver-button-gold-button-social-network-online-450.html", [
    text
    ], radio
  )
  .then((data) => {
    var result = data.image
    var bear = `https://s1.ephoto360.com${result}`
    res.status(200).send({
        status: 200, 
        creator: `${creator}`,
        result: bear
    })
}).catch(error => {
    console.log(error);
    res.status(500).send({
        status: 500,
        message: 'Internal Server Error'
    })
});
})

router.get('/maker/twitter-silver-button', async (req, res, next) => {
    
    var text = req.query.text;
    let radio = `gx6w3rh9h`
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text dan apikey`
    });
    
    
    mintake 
  .ephoto4("https://en.ephoto360.com/create-silver-button-gold-button-social-network-online-450.html", [
    text
    ], radio
  )
  .then((data) => {
    var result = data.image
    var bear = `https://s1.ephoto360.com${result}`
    res.status(200).send({
        status: 200, 
        creator: `${creator}`,
        result: bear
    })
}).catch(error => {
    console.log(error);
    res.status(500).send({
        status: 500,
        message: 'Internal Server Error'
    })
});
})

    // FITUR BANNER
    router.get('/maker/ashe-banner', async (req, res, next) => {
        
        var text = req.query.text;
        var text2 = req.query.text2;
        let radio = `f5441267-088d-49e2-ac1f-50671225064a`
        
        if (text === undefined || text2 === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text, text2 dan apikey`
        });
        
        
        mintake 
      .ephoto4("https://en.ephoto360.com/create-overwatch-2-banner-for-the-online-youtube-channel-782.html", [
        text, text2
        ], radio
      )
      .then((data) => {
        var result = data.image
        var bear = `https://s1.ephoto360.com${result}`
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: bear
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
    })
    
    router.get('/maker/brigitte-banner', async (req, res, next) => {
        
        var text = req.query.text;
        var text2 = req.query.text2;
        let radio = `2e1bb772-e47a-40e7-901c-dcaa3bd3ab8b`
        
        if (text === undefined || text2 === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text, text2 dan apikey`
        });
        
        
        mintake 
      .ephoto4("https://en.ephoto360.com/create-overwatch-2-banner-for-the-online-youtube-channel-782.html", [
        text, text2
        ], radio
      )
      .then((data) => {
        var result = data.image
        var bear = `https://s1.ephoto360.com${result}`
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: bear
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
    })

    router.get('/maker/doomfist-banner', async (req, res, next) => {
        
        var text = req.query.text;
        var text2 = req.query.text2;
        let radio = `44fd87de-3b47-42ad-b07c-2060a90ab50b`
        
        if (text === undefined || text2 === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text, text2 dan apikey`
        });
        
        
        mintake 
      .ephoto4("https://en.ephoto360.com/create-overwatch-2-banner-for-the-online-youtube-channel-782.html", [
        text, text2
        ], radio
      )
      .then((data) => {
        var result = data.image
        var bear = `https://s1.ephoto360.com${result}`
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: bear
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
    })

    router.get('/maker/junker-banner', async (req, res, next) => {
        
        var text = req.query.text;
        var text2 = req.query.text2;
        let radio = `0bfdd79f-b5b8-4238-b06e-eb36cdc456f5`
        
        if (text === undefined || text2 === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text, text2 dan apikey`
        });
        
        
        mintake 
      .ephoto4("https://en.ephoto360.com/create-overwatch-2-banner-for-the-online-youtube-channel-782.html", [
        text, text2
        ], radio
      )
      .then((data) => {
        var result = data.image
        var bear = `https://s1.ephoto360.com${result}`
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: bear
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
    })

    router.get('/maker/kiriko-banner', async (req, res, next) => {
        
        var text = req.query.text;
        var text2 = req.query.text2;
        let radio = `1d66ed5f-c699-4b57-9e17-6184ac720708`
        
        if (text === undefined || text2 === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text, text2 dan apikey`
        });
        
        
        mintake 
      .ephoto4("https://en.ephoto360.com/create-overwatch-2-banner-for-the-online-youtube-channel-782.html", [
        text, text2
        ], radio
      )
      .then((data) => {
        var result = data.image
        var bear = `https://s1.ephoto360.com${result}`
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: bear
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
    })

    router.get('/maker/sojourn-banner', async (req, res, next) => {
        
        var text = req.query.text;
        var text2 = req.query.text2;
        let radio = `d32e7d71-fd3c-4e7d-9034-8b49e76e1056`
        
        if (text === undefined || text2 === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text, text2 dan apikey`
        });
        
        
        mintake 
      .ephoto4("https://en.ephoto360.com/create-overwatch-2-banner-for-the-online-youtube-channel-782.html", [
        text, text2
        ], radio
      )
      .then((data) => {
        var result = data.image
        var bear = `https://s1.ephoto360.com${result}`
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: bear
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
    })

    router.get('/maker/symmetra-banner', async (req, res, next) => {
        
        var text = req.query.text;
        var text2 = req.query.text2;
        let radio = `7f9c65dd-d274-4aa4-bd13-82eed868dc27`
        
        if (text === undefined || text2 === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text, text2 dan apikey`
        });
        
        
        mintake 
      .ephoto4("https://en.ephoto360.com/create-overwatch-2-banner-for-the-online-youtube-channel-782.html", [
        text, text2
        ], radio
      )
      .then((data) => {
        var result = data.image
        var bear = `https://s1.ephoto360.com${result}`
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: bear
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
    })

    router.get('/maker/tracer-banner', async (req, res, next) => {
        
        var text = req.query.text;
        var text2 = req.query.text2;
        let radio = `0515b286-fec1-4af5-ba2f-831c85838208`
        
        if (text === undefined || text2 === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text, text2 dan apikey`
        });
        
        
        mintake 
      .ephoto4("https://en.ephoto360.com/create-overwatch-2-banner-for-the-online-youtube-channel-782.html", [
        text, text2
        ], radio
      )
      .then((data) => {
        var result = data.image
        var bear = `https://s1.ephoto360.com${result}`
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: bear
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
    })

    router.get('/maker/zarya-banner', async (req, res, next) => {
        
        var text = req.query.text;
        var text2 = req.query.text2;
        let radio = `0623c49e-6884-4db9-af44-cbba8d0f2405`
        
        if (text === undefined || text2 === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text, text2 dan apikey`
        });
        
        
        mintake 
      .ephoto4("https://en.ephoto360.com/create-overwatch-2-banner-for-the-online-youtube-channel-782.html", [
        text, text2
        ], radio
      )
      .then((data) => {
        var result = data.image
        var bear = `https://s1.ephoto360.com${result}`
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: bear
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
    })

    router.get('/maker/reaper-banner', async (req, res, next) => {
        
        var text = req.query.text;
        var text2 = req.query.text2;
        let radio = `e9a56c47-e9cf-4bcf-87d8-86da0c9031dd`
        
        if (text === undefined || text2 === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text, text2 dan apikey`
        });
        
        
        mintake 
      .ephoto4("https://en.ephoto360.com/create-overwatch-2-banner-for-the-online-youtube-channel-782.html", [
        text, text2
        ], radio
      )
      .then((data) => {
        var result = data.image
        var bear = `https://s1.ephoto360.com${result}`
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: bear
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
    })

    //  FITUR API PHOTOOXY
    router.get('/photooxy/shadow', async (req, res, next) => {
        
        var text = req.query.text;
        
        if (text === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text dan apikey`
        });
        
        
        KingOfBear.photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [text])
        .then(data => {
            res.set({'Content-Type': 'image/png'})
            res.status(200).send(data)
        }).catch(error => {
            console.log(error);
            res.status(500).send({
                status: 500,
                message: 'Internal Server Error'
            })
        });
      })

      router.get('/photooxy/romantic', async (req, res, next) => {
        
        var text = req.query.text;
        
        if (text === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text dan apikey`
        });
        
        
        KingOfBear.photooxy("https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html", [text])
        .then(data => {
            res.set({'Content-Type': 'image/png'})
            res.status(200).send(data)
        }).catch(error => {
            console.log(error);
            res.status(500).send({
                status: 500,
                message: 'Internal Server Error'
            })
        });
      })

      router.get('/photooxy/smoke', async (req, res, next) => {
        
        var text = req.query.text;
        
        if (text === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text dan apikey`
        });
        
        
        KingOfBear.photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html", [text])
        .then(data => {
            res.set({'Content-Type': 'image/png'})
            res.status(200).send(data)
        }).catch(error => {
            console.log(error);
            res.status(500).send({
                status: 500,
                message: 'Internal Server Error'
            })
        });
      })

      router.get('/photooxy/burn-paper', async (req, res, next) => {
        
        var text = req.query.text;
        
        if (text === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text dan apikey`
        });
        
        
        KingOfBear.photooxy("https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html", [text])
        .then(data => {
            res.set({'Content-Type': 'image/png'})
            res.status(200).send(data)
        }).catch(error => {
            console.log(error);
            res.status(500).send({
                status: 500,
                message: 'Internal Server Error'
            })
        });
      })

      router.get('/photooxy/naruto', async (req, res, next) => {
        
        var text = req.query.text;
        
        if (text === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text dan apikey`
        });
        
        
        KingOfBear.photooxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [text])
        .then(data => {
            res.set({'Content-Type': 'image/png'})
            res.status(200).send(data)
        }).catch(error => {
            console.log(error);
            res.status(500).send({
                status: 500,
                message: 'Internal Server Error'
            })
        });
      })

      router.get('/photooxy/love-message', async (req, res, next) => {
        
        var text = req.query.text;
        
        if (text === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text dan apikey`
        });
        
        
        KingOfBear.photooxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [text])
        .then(data => {
            res.set({'Content-Type': 'image/png'})
            res.status(200).send(data)
        }).catch(error => {
            console.log(error);
            res.status(500).send({
                status: 500,
                message: 'Internal Server Error'
            })
        });
      })

      router.get('/photooxy/message-under-grass', async (req, res, next) => {
        
        var text = req.query.text;
        
        if (text === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text dan apikey`
        });
        
        
        KingOfBear.photooxy("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", [text])
        .then(data => {
            res.set({'Content-Type': 'image/png'})
            res.status(200).send(data)
        }).catch(error => {
            console.log(error);
            res.status(500).send({
                status: 500,
                message: 'Internal Server Error'
            })
        });
      })

      router.get('/photooxy/double-heart', async (req, res, next) => {
        
        var text = req.query.text;
        
        if (text === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text dan apikey`
        });
        
        
        KingOfBear.photooxy("https://photooxy.com/logo-and-text-effects/love-text-effect-372.html", [text])
        .then(data => {
            res.set({'Content-Type': 'image/png'})
            res.status(200).send(data)
        }).catch(error => {
            console.log(error);
            res.status(500).send({
                status: 500,
                message: 'Internal Server Error'
            })
        });
      })

      router.get('/photooxy/coffe-cup', async (req, res, next) => {
        
        var text = req.query.text;
        
        if (text === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text dan apikey`
        });
        
        
        KingOfBear.photooxy("https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html", [text])
        .then(data => {
            res.set({'Content-Type': 'image/png'})
            res.status(200).send(data)
        }).catch(error => {
            console.log(error);
            res.status(500).send({
                status: 500,
                message: 'Internal Server Error'
            })
        });
      })

      router.get('/photooxy/love-text', async (req, res, next) => {
        
        var text = req.query.text;
        
        if (text === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text dan apikey`
        });
        
        
        KingOfBear.photooxy("https://photooxy.com/logo-and-text-effects/love-text-effect-372.html", [text])
        .then(data => {
            res.set({'Content-Type': 'image/png'})
            res.status(200).send(data)
        }).catch(error => {
            console.log(error);
            res.status(500).send({
                status: 500,
                message: 'Internal Server Error'
            })
        });
      })

      router.get('/photooxy/butterfly', async (req, res, next) => {
        
        var text = req.query.text;
        
        if (text === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter text dan apikey`
        });
        
        
        KingOfBear.photooxy("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", [text])
        .then(data => {
            res.set({'Content-Type': 'image/png'})
            res.status(200).send(data)
        }).catch(error => {
            console.log(error);
            res.status(500).send({
                status: 500,
                message: 'Internal Server Error'
            })
        });
      })
      
// FITUR TEXTPRO ME
router.get('/textpro/natural-leaves', async (req, res, next) => {
    
    var text = req.query.text
    
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text`
    });
    
    
    KingOfBear.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [text])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/textpro/black-pink', async (req, res, next) => {
    
    var text = req.query.text
    
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text`
    });
    
    
    KingOfBear.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [text])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })
  
  router.get('/textpro/blackpink', async (req, res, next) => {
    
    var text = req.query.text;
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text dan apikey`
    });
    
    
    mintake 
  .ephoto3("https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html", [
    text
    ]
  )
  .then((data) => {
    var result = data.image
    var bear = `https://s1.ephoto360.com${result}`
    res.status(200).send({
        status: 200, 
        creator: `${creator}`,
        result: bear
    })
}).catch(error => {
    console.log(error);
    res.status(500).send({
        status: 500,
        message: 'Internal Server Error'
    })
});
})

router.get('/textpro/horrorblood', async (req, res, next) => {
    
    var text = req.query.text
    
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text`
    });
    
    
    KingOfBear.textpro("https://textpro.me/horror-blood-text-effect-online-883.html", [text])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/textpro/drop-water', async (req, res, next) => {
    
    var text = req.query.text
    
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text`
    });
    
    
    KingOfBear.textpro("https://textpro.me/dropwater-text-effect-872.html", [text])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/textpro/logo-wolf', async (req, res, next) => {
    
    var text = req.query.text
    var text2 = req.query.text2
    
    
    if (text === undefined || text2 === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text, text2`
    });
    
    
    KingOfBear.textpro("https://textpro.me/create-wolf-logo-black-white-937.html", [text, text2])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/textpro/logo-wolf2', async (req, res, next) => {
    
    var text = req.query.text
    var text2 = req.query.text2
    
    
    if (text === undefined || text2 === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text, text2`
    });
    
    
    KingOfBear.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [text, text2])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/textpro/logo-wolf2', async (req, res, next) => {
    
    var text = req.query.text
    
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text`
    });
    
    
    KingOfBear.textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", [text])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/textpro/3d-gradient', async (req, res, next) => {
    
    var text = req.query.text
    
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text`
    });
    
    
    KingOfBear.textpro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", [text])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/textpro/christmas', async (req, res, next) => {
    
    var text = req.query.text
    
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text`
    });
    
    
    KingOfBear.textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", [text])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/textpro/logo-wolf2', async (req, res, next) => {
    
    var text = req.query.text1
    var text2 = req.query.text2
    
    
    if (text === undefined || text2 === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text, text2`
    });
    
    
    KingOfBear.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
        text, text2
      ])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/textpro/matrix', async (req, res, next) => {
    
    var text = req.query.text
    
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text`
    });
    
    
    KingOfBear.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [text])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/textpro/harry-potter', async (req, res, next) => {
    
    var text = req.query.text
    
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text`
    });
    
    
    KingOfBear.textpro("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [text])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/textpro/neondevil', async (req, res, next) => {
    
    var text = req.query.text
    
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text`
    });
    
    
    KingOfBear.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [text])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/textpro/neon', async (req, res, next) => {
    
    var text = req.query.text
    
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text`
    });
    
    
    KingOfBear.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [text])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/textpro/marvel', async (req, res, next) => {
    
    var text1 = req.query.text1
    var text2 = req.query.text2
    
    
    if (text1 === undefined || text2 === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text1, text2`
    });
    
    
    KingOfBear.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [text1,text2])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })
  
  router.get('/textpro/glitch2', async (req, res, next) => {
    
    var text1 = req.query.text1
    var text2 = req.query.text2
    
    
    if (text1 === undefined || text2 === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text1, text2`
    });
    
    
    KingOfBear.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [text1,text2])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/textpro/silvermetal', async (req, res, next) => {
    
    var text1 = req.query.text1
    var text2 = req.query.text2
    
    
    if (text1 === undefined || text2 === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text1, text2`
    });
    
    
    KingOfBear.textpro("https://textpro.me/text-logo-3d-metal-silver-946.html", [text1, text2])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/textpro/transfomer', async (req, res, next) => {
    
    var text = req.query.text
    
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text`
    });
    
    
    KingOfBear.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [text])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/textpro/sketsa', async (req, res, next) => {
    
    var text = req.query.text
    
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text`
    });
    
    
    KingOfBear.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [text])
    .then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/textpro/styletext', async (req, res, next) => {
    
    var teks = req.query.teks
    
    
    if (teks === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter teks`
    });
    
    
    styletext(teks).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

//FITUR CANVAS WELCOME OR CREATOR
router.get('/canvas/welcome', async (req, res, next) => {
    
    var name = req.query.name;
    var pp = req.query.pp;
    var bg = req.query.bg;
    var gcname = req.query.gcname;
    var gcicon = req.query.gcicon;
    var membercount = req.query.membercount;
    
    
    if (name === undefined || pp === undefined || bg === undefined || gcname === undefined || gcicon === undefined || membercount === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter name, pp, bg, gcname, gcicon, membercount dan apikey`
    });
    
    
    var requestSettings = {
        url: `https://avm.rafazahendra.repl.co/api/canvas/welcome2?avatar=${pp}&groupname=${gcname}&username=${name}&membercount=${membercount}&groupicon=${gcicon}&bg=${bg}`, method: 'GET', encoding: null };
        request(requestSettings, function(error, response, body) {
        res.set('Content-Type', 'image/png');
        res.status(200).send(body)
        })
    })

    router.get('/canvas/welcome2', async (req, res, next) => {
    
    var name = req.query.name;
    var pp = req.query.pp;
    var bg = req.query.bg;
    var gcname = req.query.gcname;
    var membercount = req.query.membercount;
    
    
    if (name === undefined || pp === undefined || bg === undefined || gcname === undefined || membercount === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter name, pp, bg, gcname, membercount dan apikey`
    });
    
    
    var requestSettings = {
        url: `https://avm.rafazahendra.repl.co/api/canvas/welcome3?avatar=${pp}&groupname=${gcname}&username=${name}&membercount=${membercount}&bg=${bg}`, method: 'GET', encoding: null };
        request(requestSettings, function(error, response, body) {
        res.set('Content-Type', 'image/png');
        res.status(200).send(body)
        })
    })

router.get('/canvas/welcome4', async (req, res, next) => {
    
    var name = req.query.name;
    var pp = req.query.pp;
    var bg = req.query.bg;
    var gcname = req.query.gcname;
    var to = 'to '
    
    
    if (name === undefined || pp === undefined || bg === undefined || gcname === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter name, pp, bg, gcname dan apikey`
    });
    
    
    var requestSettings = {
        url: `https://api.saipulanuar.repl.co/card?avatar=${pp}&middle=${name}&name=Welcome&bottom=${to}${gcname}&avatarborder=0&avatarbg=220,20,60,1&background=${bg}`, method: 'GET', encoding: null };
        request(requestSettings, function(error, response, body) {
        res.set('Content-Type', 'image/png');
        res.status(200).send(body)
        })
    })
    
  router.get('/canvas/goodbye', async (req, res, next) => {
        
        var desk = req.query.desk;
        var pp = req.query.pp;
        var bg = req.query.bg;
        var name = req.query.name;
        
        
        if (desk === undefined || pp === undefined || bg === undefined || name === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter name, pp, bg, desk dan apikey`
        });
        
        
        var requestSettings = {
            url: `https://avm.rafazahendra.repl.co/api/canvas/leave?avatar=${pp}&name=${name}&desk=${desk}&bg=${bg}`, method: 'GET', encoding: null };
            request(requestSettings, function(error, response, body) {
            res.set('Content-Type', 'image/png');
            res.status(200).send(body)
            })
        })

router.get('/canvas/goodbye4', async (req, res, next) => {
        
        var name = req.query.name;
        var pp = req.query.pp;
        var bg = req.query.bg;
        var gcname = req.query.gcname;
        
        
        if (name === undefined || pp === undefined || bg === undefined || gcname === undefined) return res.status(404).send({
            status: 404,
            message: `Input Parameter name, pp, bg, gcname dan apikey`
        });
        
        
        var requestSettings = {
            url: `https://api.saipulanuar.repl.co/card?avatar=${pp}&middle=${name}&name=Out Of&bottom=${gcname}&avatarborder=0&avatarbg=220,20,60,1&background=${bg}`, method: 'GET', encoding: null };
            request(requestSettings, function(error, response, body) {
            res.set('Content-Type', 'image/png');
            res.status(200).send(body)
            })
        })

// FITUR RANDOM  
  router.get('/quotes', async (req, res, next) => {
          var soal = JSON.parse(
              fs.readFileSync(__path + '/lib/data/quotes.json')
          )
      res
            .status(200)
            .json({
                code: 200,
                success: true,
            creator: `${creator}`,
            result: {
                   ...soal[~~(Math.random() * soal.length)] 
            }
            })
  })

  router.get('/random/pantun', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/pantun.json`).then(data => {
        var result = data[Math.floor(Math.random() * data.length)];    
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/random/meme', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/random-jokes-api/main/src/Assets/memes_list.json`)
    .then(async data => {    
    var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.url;
         data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/meme.jpeg', data)
        res.sendFile(__path+'/tmp/meme.jpeg')
         })
         .catch(e => {
          console.log(e);
          res.json(loghandler.error)
})
})

router.get('/memeh', async (req, res, next) => {
    const memeindo = JSON.parse(fs.readFileSync(__path +'/lib/api/memeindo.json'));
    const Memeindo = memeindo[Math.floor(Math.random() * memeindo.length)];
    let hasil = Memeindo.memeindo;
         data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/memeh.jpeg', data)
        res.sendFile(__path+'/tmp/memeh.jpeg')
})

router.get('/loli', async (req, res, next) => {
    const loli = JSON.parse(fs.readFileSync(__path +'/lib/api/loli.json'));
    const Loli = loli[Math.floor(Math.random() * loli.length)];
    let hasil = Loli.loli;
         data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/loli.jpeg', data)
        res.sendFile(__path+'/tmp/loli.jpeg')
})

router.get('/nsfwloli', async (req, res, next) => {
    const nsfwloli = JSON.parse(fs.readFileSync(__path +'/lib/api/NsfwLoli.json'));
    const NsfwLoli = nsfwloli[Math.floor(Math.random() * nsfwloli.length)];
    let hasil = NsfwLoli.nsfwloli;
         data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/nsfwloli.jpeg', data)
        res.sendFile(__path+'/tmp/nsfwloli.jpeg')
})

router.get('/bokepig', async (req, res, next) => {
    const bokepig = JSON.parse(fs.readFileSync(__path +'/lib/api/bokepig.json'));
    const Bokepig = bokepig[Math.floor(Math.random() * bokepig.length)];
    let hasil = Bokepig.bokepig;
         data = await fetch(hasil).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/bokepig.jpeg', data)
        res.sendFile(__path+'/tmp/bokepig.jpeg')
})

router.get('/darkjoke', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/darkjoke.json`)
    .then(async data => {    
    var result = data[Math.floor(Math.random() * data.length)];
        var buffer = result.image;
         data = await fetch(buffer).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/darkjoke.jpeg', data)
        res.sendFile(__path+'/tmp/darkjoke.jpeg')
         })
         .catch(e => {
          console.log(e);
          res.json(loghandler.error)
})
})

// FITUR ANIME/MANGA API
router.get('/anime/manga', async (req, res, next) => {
    
    var search = req.query.search
    
    
    if (search === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter search`
    });
    
    
    fetchJson(`https://manga-api.kingofbear-yt1.repl.co/api/search/${search}`).then(data => {
        var result = data.manga_list[Math.floor(Math.random() * data.manga_list.length)];    
        kimak = result
        kimak2 = result.type
        kimak3 = result.endpoint
        kimak4 = `https://komiku.id/manga/${kimak3}`
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
                "title": `${result.title}`,
                "thumb": `${result.thumb}`,
                "type": `${kimak2}`,
                "url": `${kimak4}`
            }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

// FITUR FUN API
router.get('/cerpen/random', async (req, res, next) => {
    fetchJson(`https://saipulanuar-cerpen-api.cyclic.app/`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/cerpen/cinta', async (req, res, next) => {
    fetchJson(`https://privatasw.herokuapp.com/cerita/cinta`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/cerpen/horor', async (req, res, next) => {
    fetchJson(`https://privatasw.herokuapp.com/cerita/horor`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/kuis/caklontong', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/caklontong.json`).then(data => {
    var result = data[Math.floor(Math.random() * data.length)];
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/kuis/asahotak', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/asahotak.json`).then(data => {
    var result = data[Math.floor(Math.random() * data.length)];
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/kuis/family100', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/family100.json`).then(data => {
    var result = data[Math.floor(Math.random() * data.length)];
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/kuis/siapakahaku', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/siapakahaku.json`).then(data => {
    var result = data[Math.floor(Math.random() * data.length)];
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/kuis/susunkata', async (req, res, next) => {
    fetchJson(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/random/susunkata.json`).then(data => {
    var result = data[Math.floor(Math.random() * data.length)];
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/kuis/tebaktebakan', async (req, res, next) => {
    var soal = JSON.parse(
        fs.readFileSync(__path + '/lib/api/tebaktebakan.json')
    )
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
                ...soal[~~(Math.random() * soal.length)] 
         }
        })
    })

    router.get('/kuis/tebaklirik', async (req, res, next) => {
        var soal = JSON.parse(
            fs.readFileSync(__path + '/lib/api/tebaklirik.json')
        )
            res.status(200).send({
                status: 200, 
                creator: `${creator}`,
                result: {
                    ...soal[~~(Math.random() * soal.length)] 
             }
            })
        })

        router.get('/kuis/tekateki', async (req, res, next) => {
            var soal = JSON.parse(
                fs.readFileSync(__path + '/lib/api/tekateki.json')
            )
                res.status(200).send({
                    status: 200, 
                    creator: `${creator}`,
                    result: {
                        ...soal[~~(Math.random() * soal.length)] 
                 }
                })
            })

            router.get('/kuis/tebakjenaka', async (req, res, next) => {
                var soal = JSON.parse(
                    fs.readFileSync(__path + '/lib/api/tebakjenaka.json')
                )
                    res.status(200).send({
                        status: 200, 
                        creator: `${creator}`,
                        result: {
                            ...soal[~~(Math.random() * soal.length)] 
                     }
                    })
                })

                router.get('/kuis/tebakGambar', async (req, res, next) => {
                    var soal = JSON.parse(
                        fs.readFileSync(__path + '/lib/api/tebakGambar.json')
                    )
                        res.status(200).send({
                            status: 200, 
                            creator: `${creator}`,
                            result: {
                                ...soal[~~(Math.random() * soal.length)] 
                         }
                        })
                    })

    router.get('/kuis/tebakGambar', async (req, res, next) => {
        var soal = JSON.parse(
        fs.readFileSync(__path + '/lib/api/tebakGambar.json')
        )
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
            ...soal[~~(Math.random() * soal.length)] 
            }
        })
     })

     router.get('/kuis/tebakbendera', async (req, res, next) => {
            var soal = JSON.parse(
            fs.readFileSync(__path + '/lib/api/tebakbendera.json')
            )
            res.status(200).send({
                status: 200, 
                creator: `${creator}`,
                result: {
                ...soal[~~(Math.random() * soal.length)] 
                }
            })
         })

         router.get('/random/artinama', async (req, res, next) => {
            
            var name = req.query.name;

            
            if (name === undefined) return res.status(404).send({
                status: 404,
                message: `Input Parameter nama`
            });
            
            
            primbon.artiNama(name).then(data => {
                res.status(200).send({
                    status: 200, 
                    creator: `${creator}`,
                    result: data
                })
            }).catch(error => {
                console.log(error);
                res.status(500).send({
                    status: 500,
                    message: 'Internal Server Error'
                })
            });
          })

// FITUR API TOOLS
router.get('/hack/sms', async (req, res, next) => {
    
    var query = req.query.query;

    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    
    
    fetchJson(`https://id.jagreward.com/member/verify-mobile/${query}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.message
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/hack/tlpn', async (req, res, next) => {
    
    var query = req.query.query;

    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    
    
    fetchJson(`https://id.jagreward.com/member/verify-mobile/` + query).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.message
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/text-to-audio/tts', async (req, res, next) => {
    
    var text = req.query.text;
    var idbahasa = req.query.idbahasa;
    
    if (text === undefined || idbahasa === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text, idbahasa dan apikey`
    });
    
    
    var data = `https://salism3api.pythonanywhere.com/text2sound/?text=${text}&languageCode=${idbahasa}`
        const bear2 = await fetch(data).then(v => v.buffer())
         await fs.writeFileSync(__path +'/tmp/tts.mp3', bear2)
        res.sendFile(__path+'/tmp/tts.mp3')
  })

  router.get('/fakedata', async (req, res, next) => {
    fetchJson(`https://random-data-api.com/api/address/random_address?size=3`).then(data => {
        var result = data[Math.floor(Math.random() * data.length)];    
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })
  
  router.get('/translate', async (req, res, next) => {
    
    var kata = req.query.kata;

    
    if (kata === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter kata`
    });
    
    
    fetchJson(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/translate2', async (req, res, next) => {
    
    var text = req.query.text;
    var dari = req.query.from;
    var lang = req.query.to;

    
    if (text === undefined || dari === undefined || lang === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text, from, to`
    });
    
    
    translate(`${text}`, {from: `${dari}`, to: `${lang}`}).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
                from: `${dari}`,
                to: `${lang}`,
                hasil: `${data.text}`
              }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/short/tinyurl', async (req, res, next) => {
    
    var url = req.query.url;

    
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    
    TinyUrl.shorten(url).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/tools/wpuser', async (req, res, next) => {
    
    var url = req.query.url;

    
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    
    WPUser(url).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/download/ssweb', async (req, res, next) => {
    
    var url = req.query.url;

    
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    
    KingOfBear.ssweb(url).then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/download/ssweb2', async (req, res, next) => {
    
    var url = req.query.url;

    
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    
    
    
await getBuffer(`https://image.thum.io/get/width/1900/crop/1000/fullpage/${url}`).then(data => {
        res.set({'Content-Type': 'image/png'})
        res.status(200).send(data)
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/download/linkwa', async (req, res, next) => {
    
    var query = req.query.query;

    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    
    
    linkwa(query).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/sendmailCareer', async (req, res, next) => {
    
    var from  = req.query.from;
    var to  = req.query.to;
    var subject  = req.query.subject;
    var text  = req.query.text;

    
    if (from === undefined || to === undefined || subject === undefined || text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter from, to, subject, text`
    });
    
    
    var transporter = nodemailer.createTransport({
        service: 'mailgun',
        auth: {
            user: 'postmaster@sandbox239bdf0c53e34161ba6e31f1c2bbb7eb.mailgun.org',
            pass: 'd3e5519dcbedaa5f07f7ce5961a81e11-2de3d545-cf61b8df'
        }
    });
    var mailOptions = {
        from: `KING OF BEAR SEND MAIL <${from}>`,
        to: `${to}`,
        subject: `${subject}`,
        text: `${text}`
    }
    transporter.sendMail(mailOptions).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
                From: `${mailOptions.from}`,
                To: `${mailOptions.to}`,
                Subject: `${mailOptions.subject}`,
                Text: `${mailOptions.text}`,
                Emailsent: `${data.response}`
              }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/info/wikipedia', async (req, res, next) => {
    
    var search = req.query.search;

    
    if (search === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter search`
    });
    
    
    wikipediajs.search(search).then(data => {
        var bear = data.query
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: bear
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/info/covidworld', async (req, res, next) => {
    fetchJson(`https://api-covid19-indonesia-saipulanuar.vercel.app/api/indonesia/provinsi`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/info/covidindo', async (req, res, next) => {
    
    var provinsi = req.query.provinsi

    
    if (provinsi === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter provinsi`
    });
    
    
    fetchJson(`https://api-covid19-indonesia-saipulanuar.vercel.app/api/indonesia/provinsi?name=${provinsi}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/info/cuaca', async (req, res, next) => {
    
    var provinsi = req.query.provinsi
    var kota = req.query.kota

    
    if (provinsi === undefined || kota === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter provinsi, kota`
    });
    
    
    fetchJson(`https://cuaca-gempa-rest-api-saipulanuar.vercel.app/weather/${provinsi}/${kota}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/info/gempa', async (req, res, next) => {
    fetchJson(`https://cuaca-gempa-rest-api-saipulanuar.vercel.app/quake`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/info/drakorasia', async (req, res, next) => {
    
    var search = req.query.search

    
    if (search === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter search`
    });
    
    
    fetchJson(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/info/berita2', async (req, res, next) => {
    
    var kota = req.query.kota

    
    if (kota === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter kota`
    });
    
    
    fetchJson(`https://api-berita-indo-saipulanuar.vercel.app/v1/tribun-news/${kota}/techno`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            messages: data.messages,
            result: data.data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/info/berita', async (req, res, next) => {
    
    var kota = req.query.kota

    
    if (kota === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter kota`
    });
    
    
    fetchJson(`https://api-berita-indo-saipulanuar.vercel.app/v1/tribun-news/${kota}/ramadan`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            messages: data.messages,
            result: data.data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/info/kodepos', async (req, res, next) => {
    var provinsi = req.query.provinsi
    
    if (provinsi === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter provinsi`
    });
    
    fetchJson(`https://saipul-kodepos.vercel.app/search/?q=${provinsi}`).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            messages: data.messages,
            result: data.data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/info/kbbi', async (req, res, next) => {
    var provinsi = req.query.provinsi
    
    if (provinsi === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter provinsi`
    });
    
    KbbiInfo(provinsi).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

router.get('/info/jadwalmplid', async (req, res, next) => {
    jadwalmplid().then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/info/emoji', async (req, res, next) => {
    
    var query = req.query.query

    
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    
    
    emoji(query).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/info/emojimix', async (req, res, next) => {
    
    var emoji1 = req.query.emoji1
    var emoji2 = req.query.emoji2

    
    if (emoji1 === undefined || emoji2 === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter emoji1, emoji2`
    });
    
    
    emojimix(emoji1, emoji2).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

router.get('/info/randomtt', async (req, res, next) => {
    
    var user = req.query.user

    
    if (user === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter user`
    });
    
    
    randomtt(user).then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

// FITUR VIRTEX
  router.get('/virus/ngazap', async (req, res, next) => {
    ngazap().then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/virus/philips', async (req, res, next) => {
    philips().then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/virus/vir', async (req, res, next) => {
    vir().then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/virus/virtex', async (req, res, next) => {
    vir2().then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/virus/virus', async (req, res, next) => {
    vir3().then(data => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

// FITUR WHM
  router.get('/whm/totaluser', async (req, res, next) => {
        var usrwhm = req.query.usrwhm
    var tokenwhm = req.query.tokenwhm
    var server = req.query.server
    
    
    if (usrwhm === undefined || tokenwhm === undefined || server === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter usrwhm, tokenwhm, server`
    });
    
    
    let authWhm = {headers: {Authorization: `WHM ${usrwhm}:${tokenwhm}`}}
axios.get(`https://${server}:2087/json-api/json-api/get_current_users_count?api.version=1`, authWhm).then(data => {
        let np = data.data.data.users
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: {
              Server: `https://${server}:2087/`,
              JumlahUser: `${np} Users`
            }
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

router.get('/info/genshin', async (req, res, next) => {
    var query = req.query.query
    
        if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    
    
    fetchJson(`https://genshin-db-api.vercel.app/api/characters?query=${query}`).then(data => {
        var result = data
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

router.get('/fakta', async (req, res, next) => {
    readFileTxt(__path +'/lib/data/fakta.txt').then(result => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

router.get('/kata-bijak', async (req, res, next) => {
    readFileTxt(__path +'/lib/data/bijak.txt').then(result => {
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: result
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

router.get('/convert/gopay1', async (req, res, next) => {
    var nomor = req.query.nomor
    var idProduct = '24'
    
    if (nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter nomor`
    });
    
    
    gopay(idProduct, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

router.get('/convert/gopay2', async (req, res, next) => {
    var nomor = req.query.nomor
    var idProduct = '25'
    
    if (nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter nomor`
    });
    
    
    gopay(idProduct, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

router.get('/convert/gopay3', async (req, res, next) => {
    var nomor = req.query.nomor
    var idProduct = '26'
    
    if (nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter nomor`
    });
    
    
    gopay(idProduct, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/convert/gopay4', async (req, res, next) => {
    var nomor = req.query.nomor
    var idProduct = '27'
    
    if (nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter nomor`
    });
    
    
    gopay(idProduct, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/convert/gopay5', async (req, res, next) => {
    var nomor = req.query.nomor
    var idProduct = '28'
    
    if (nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter nomor`
    });
    
    
    gopay(idProduct, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/convert/gopay6', async (req, res, next) => {
    var nomor = req.query.nomor
    var idProduct = '29'
    
    if (nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter nomor`
    });
    
    
    gopay(idProduct, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/convert/gopay7', async (req, res, next) => {
    var nomor = req.query.nomor
    var idProduct = '30'
    
    if (nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter nomor`
    });
    
    
    gopay(idProduct, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/convert/gopay8', async (req, res, next) => {
    var nomor = req.query.nomor
    var idProduct = '31'
    
    if (nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter nomor`
    });
    
    
    gopay(idProduct, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/convert/gopay9', async (req, res, next) => {
    var nomor = req.query.nomor
    var idProduct = '32'
    
    if (nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter nomor`
    });
    
    
    gopay(idProduct, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/convert/gopay10', async (req, res, next) => {
    var nomor = req.query.nomor
    var idProduct = '33'
    
    if (nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter nomor`
    });
    
    
    gopay(idProduct, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/convert/gopay11', async (req, res, next) => {
    var nomor = req.query.nomor
    var idProduct = '34'
    
    if (nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter nomor`
    });
    
    
    gopay(idProduct, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/convert/gopay12', async (req, res, next) => {
    var nomor = req.query.nomor
    var idProduct = '35'
    
    if (nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter nomor`
    });
    
    
    gopay(idProduct, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/convert/gopay13', async (req, res, next) => {
    var nomor = req.query.nomor
    var idProduct = '57'
    
    if (nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter nomor`
    });
    
    
    gopay(idProduct, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

  router.get('/convert/gopay14', async (req, res, next) => {
    var nomor = req.query.nomor
    var idProduct = '122'
    
    if (nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter nomor`
    });
    
    
    gopay(idProduct, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

router.get('/convert/gopay15', async (req, res, next) => {
    var nomor = req.query.nomor
    var idProduct = '58'
    
    if (nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter nomor`
    });
    
    
    gopay(idProduct, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

router.get('/convert/dana1', async (req, res, next) => {
    var nomor = req.query.nomor
    var idProduct = '36'
    
    if (nomor === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter nomor`
    });
    
    
    dana(idProduct, nomor).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

//SIMI FITUR
router.get('/f/simi', async (req, res, next) => {
    var text = req.query.text
    
    if (text === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter text`
    });
    
    
    fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=id`).then(data => { 
        res.status(200).send({
            status: 200, 
            creator: `${creator}`,
            result: data.success
        })
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
  })

//OpenAi
router.get('/openai/buatcode', async (req, res, next) => {
  var text = req.query.text
  
  if (text === undefined) return res.status(404).send({
      status: 404,
      message: `Input Parameter text`
  });
  openai(text).then(data => { 
      res.status(200).send({
          status: 200, 
          creator: `${creator}`,
          result: data
      })
  }).catch(error => {
      console.log(error);
      res.status(500).send({
          status: 500,
          message: 'Internal Server Error'
      })
    });
  })

module.exports = router;
