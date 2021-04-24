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
    },

    media_mediana(nome_arquivo) {
        var {exits} = require(`../arquivos/${nome_arquivo}.json`)

        var valor_total = 0
        var quantidade = exits.length
        var mediana = 0

        //acrescenta oa valor total os valores contidos em activity
        exits.forEach((exit, index) => {
            valor_total += exit.activity
        });

        //calcular o valor da média das activity
        var media = valor_total / quantidade

        //descobre o valor da mediana das activity
        if(quantidade%2 != 0){ // se a quantidade for impar
            var index = parseInt(quantidade/2)
            mediana = exits[index].activity
        }else{ //se a quantidade for par
            var valor1 = exits[(quantidade/2)-1].activity
            var valor2 = exits[(quantidade/2)].activity
            mediana = (valor1 + valor2) / 2
        }
        
        return {media: media, mediana: mediana}
    }
}