let lz = process.cwd()

const axios = require("axios");
const cheerio = require("cheerio");
var express = require('express');
var router = express.Router();
var { exec } = require('child_process')
var fetch = require('node-fetch')
var fs = require('fs')
const path = require('path');
const {
tiklydown,
dlpanda
} = require("./database/tiktok");

const criador = ['Deku']; // Nome do criador
const key = 'DekuKey' //apikey das apis
const keyinexistente = lz + '/paginas/keyerror.html' // html key de invalida

msgs = { //MSGS DE ERROR
error: {
 status: false,
criador: `${criador}`,
mensagem: 
'ops :/ deu erro no servidor interno'
}
}

async function getBuffer(url) {
he = await fetch(url).then(c => c.buffer())
 return he
}
async function Kibar(url) {
he = await fetch(url).then(c => c.json())
 return he
}
function MathRandom(nans) {
he = nans[Math.floor(Math.random() * nans.length)]
 return he
}

//[ - ////////// --- Api's Youtube --- ////////// - ]\\

router.get('/download/tiktok', async(req, res, next) => {
apikey = req.query.apikey;
 link = req.query.link
if(apikey !== key) return res.sendFile(keyinexistente)
if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloca el parametro link"})
tiktok.tiklydown(link).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `Ocurrio un error`
 })})})


router.post('/post/body', async (req, res) => {
res.send(req.body)
})
 router.all('*', async (req, res) => {
 res.status(404).json({
status:404,
error: 'página não encontrada Ou e Inexiste',
endpoint: req.path
})
})


module.exports = router
