const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/download1", (req, res) => {
  exec(
    'curl -v https://api.whatsapp.com/send/?phone=5531996166591"&"text=Esse+%C3%A9+um+teste+para+vermos+o+comportamento+da+API"&"type=phone_number"&"app_absent=0 -o /Users/lucas/Downloads/output1.html 2>&1',
    (error) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
    },
    res.status(200).send("Arquivo WhatsApp Baixado com Sucesso!")
  );
});

app.get("/download2", (req, res) => {
  exec(
    "curl -v https://www.pucminas.br/unidade/sao-gabriel/Paginas/default.aspx -o /Users/lucas/Downloads/output2.html 2>&1",
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      res.status(200).send("Arquivo PUC Baixado com Sucesso!");
    }
  );
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
