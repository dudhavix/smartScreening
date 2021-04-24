module.exports = {
    ler(nome_arquivo) {
        var {exits} = require(`../arquivos/${nome_arquivo}.json`)
        exits = exits.map(function(exit, index){
            exit = {
                exit_name: exit.exit_name,
                activity: exit.activity
            }
            return exit;
          });
        return exits
    }
}