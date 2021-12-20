
const path=require('path');
const colors=require('colors');

const {execSync}=require('child_process'); /* для запуска командной строки */
const express=require(execSync(`npm root -g`, {encoding: 'utf8'}).trim()+'\\express'); /* вызов глобального модуля */

/* для вызова модуля, установленного глобально, приходится ухищряться:
запускать командную строку, чтобы считать путь к установке, тримить ее ответ
 (там на конце перевод строки cmd возвращает) и еще экраноировать обратный слеш */

const port=4000;
const pathToIndex=`${__dirname}/source-files/index.html`;
const app=express();




//const pathToStaticFiles='/files';


//app.set('views', './template');
//app.set('view engine', 'pug');

app.get('/', function (req, res) {
    console.log(`простой гет запрос...`.blue);

    res.sendFile(pathToIndex);
//    res.render('это гет');

});




//app.use(express.urlencoded({extended: false}));
//app.use(express.json());
app.use(express.static(`${__dirname}/source-files`));

app.listen(port,()=>{console.log(`Это экспресс запущен в работу...`.brightGreen+`Текущий порт ${port}`.bgYellow.black)});

