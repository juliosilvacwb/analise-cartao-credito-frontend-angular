const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/credito-card'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname + '/dist/credito-card/index.html'));
});

app.listen(process.env.PORT || 4200, () => console.log(`Servidor subiu com sucesso`));
