var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

// TODO esto debe ocurrir solo cuando la respuesta esté lista
xhr.onload = function() {
    if (xhr.status === 200) {
        // Obtenemos los datos dentro del evento
        var articles = xhr.response.articles;
        var articlesDiv = document.getElementById('articles');

        articles.forEach(function(article) {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            var title = document.createElement('h2');
            title.textContent = article.title;

            var description = document.createElement('p');
            description.textContent = article.description;

            // Ways to Achieve
            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to Achieve:';
            var waysList = document.createElement('ul');
            article.ways_to_achieve.forEach(function(way) {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                waysList.appendChild(listItem);
            });

            // Benefits
            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Benefits:';
            var benefitsList = document.createElement('ul');
            article.benefits.forEach(function(benefit) {
                var listItem = document.createElement('li');
                listItem.textContent = benefit;
                benefitsList.appendChild(listItem);
            });

            // Armar el div del artículo
            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            // Meterlo al contenedor principal
            articlesDiv.appendChild(articleDiv);
        });
    } else {
        console.error("Error al cargar el archivo JSON");
    }
};

// Finalmente, disparamos la petición
xhr.send();