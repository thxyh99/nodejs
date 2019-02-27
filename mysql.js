var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT * FROM user_t WHERE 1', function (error, results, fields) {
  if (error) throw error;
  for(i=0;i<results.length;i++){
      console.log('The result is: ', results[i]);
  }
});