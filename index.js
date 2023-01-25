import inquirer from "inquirer";
async function perguntas() {
  let saida = false;
  let listaPropriedades = ["color, font-family, font-size, font-weight, font-style"];
  while (saida === false) {
    let answers = await inquirer.prompt([
      {
        name: "propriedadeCss",
        type: "input",
        message: "Digite uma propriedade CSS",
      },
    ]);
    if (answers.propriedadeCss == "sair" || answers.propriedadeCss == "SAIR") {
      saida = true;
      listaPropriedades.sort((a, b) => {
        return a.localeCompare(b);
      });
      listaPropriedades.forEach((propriedade) => console.log(propriedade));
    } else {
      listaPropriedades.push(answers.propriedadeCss);
    }
  }
}
perguntas();
