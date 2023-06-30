var formContato = document.getElementById('formContato');
var tabelaContatos = document.getElementById('tabelaContatos');
var tbody = tabelaContatos.getElementsByTagName('tbody')[0];

formContato.addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    adicionarContato(nome, telefone);

    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
});

function adicionarContato(nome, telefone) {
    var novaLinha = document.createElement('tr');

    var colunaNome = document.createElement('td');
    colunaNome.textContent = nome;

    var colunaTelefone = document.createElement('td');
    colunaTelefone.textContent = telefone;

    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaTelefone);

    tbody.appendChild(novaLinha);
}
