import 'mysql2/promise'


const con = await mysql.creatConnection({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    pwd:process.env.MYSQL_PWD,
    db:process.env.MYSQL_BD

})

console.log('BD conectado!!!!!!!!!!!!!!!!!!!!!!!!!');
export {con};