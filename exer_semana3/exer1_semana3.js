var itemList = [];

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página ao enviar o formulario

    var newItem = document.getElementById('itemInput').value.trim();

    if(newItem) {
        itemList.push(newItem);
        itemList.sort();

        displayItems();

        document.getElementById('itemInput').value = '';
    }
});

function displayItems() {
    
    var listElement = document.getElementById('itemList');
    listElement.innerHTML = '' // LIMPAR LISTA ATUAL

    for (var i = 0; i < itemList.length; i++) {
        var item = document.createElement('li');
        item.textContent = itemList[i];
        listElement.appendChild(item);
    }
}