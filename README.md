# nodejs-alay-converter
convert teks biasa ke alay

## Cara pakai
const alay=require('./alay')

let teks = `
	ahsiap santuy
`

let alaybanget = alay.Convert(teks);
let alaybapak_bapak = alay.bapacc(teks);
let alaysingkat = alay.singkat(teks);

console.log(alaybanget,alaybapak_bapak,alaysingkat)
