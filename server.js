
const path=require('path');

const {execSync}=require('child_process'); /* для запуска командной строки */
const express=require(execSync(`npm root -g`, {encoding: 'utf8'}).trim()+'\\express'); /* вызов глобального модуля */

/* для вызова модуля, установленного глобально, приходится ухищряться:
запускать командную строку, чтобы считать путь к установке, тримить ее ответ
 (там на конце перевод строки cmd возвращает) и еще экраноировать обратный слеш */




const colors=require('colors');

const app=express();




const port=3000;
//const pathToStaticFiles='/files';


//app.set('views', './template');
//app.set('view engine', 'pug');
/*
app.get('/', function (req, res) {
    console.log(`ко мне обратились`.blue);
    res.render('netcoin_main',{mainname: 'это гет'});
});

*/


//app.use(express.urlencoded({extended: false}));
//app.use(express.json());
//app.use(express.static(`${__dirname}${pathToStaticFiles}`));

app.listen(port,()=>{console.log(`Это экспресс запущен в работу...`.brightGreen+`Текущий порт ${port}`.bgYellow.black)});

