# Prova prática
-> No primeiro commit defini a pasta "arquivos" para armazenar o local onde ficaram os jsons.
-> No segundo commit defini a rota "obterJson" com os tipos get e post para demonstrar duas formas de enviar o nome do arquivo a ser lido.
-> No terceiro commit defini a rota "exibirActivity" com os tipos get e post para demonstrar duas formas de enviar o nome do arquivo a ser lido. Criei também uma pasta chamada "controller" com o arquivo "ler_arquivo", nele consta a função "ler" que vai identificar o arquivo e retornar somente as chaves "exit_name" e "activity" que estão contidas na chave "exits".
-> No quarto commit defini a rota "meanActivity" como das vezes citadas acima. No controller "ler_arquivo" defini a função "media_mediana" que percorrerá o arquivo indicado e fará o calculo e trará os resultados do que foi pedido
-> No quinto commit defini a rota "listMeanActivity" onde vai listar a média e mediana de todos os arquivos que estão na pasta arquivos. No controller criei um método "listMeanActivity" que contem uma váriavel chamada "diretório" que contem o caminho completo de onde os arquivos estão, a função vai listar todos os arquivos contidos dentro do diretório e chamar a função criada no commit anterior (media_mediana) para calcular os respectivos valores de cada arquivo. Em produção o aconselhado é o texto que esta contido na variável diretório seja colocado em um arquivo .env ou ser enviado pelo usuário para melhor a busca. Acrescentei a biblioteca "fs", é ela q me permiti vasculhar o diretório. 