import chalk from 'chalk';
import fs from 'fs'

function trataErro(erro){
  throw new Error(chalk.red(erro.code, "não tem arquivo"));
}

function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8'
  fs.promises.readFile(caminhoDoArquivo, encoding)
  .then((texto) => chalk.green(console.log(texto)))
  .catch((erro) => trataErro(erro))
}

// function pegaArquivo(caminhoDoAqruivo) {
//   const encoding = 'utf-8'
//   fs.readFile(caminhoDoAqruivo, encoding, (erro, texto) => {
//     if (erro) {
//       trataErro(erro);
//     }
//     console.log(chalk.green(texto));
//   });
// };

pegaArquivo('./arquivos/texto1.md');