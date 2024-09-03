## Commande :

ng version

## Réponse :

Angular CLI: 18.2.2
Node: 20.17.0
Package Manager: npm 10.8.3
OS: win32 x64

Angular: 18.2.2

## La commande pour lancer l'application :

ng serve

## La commande pour savoir la version de yarn :

yarn -v

## Réponse :

1.22.22

## La commande pour savoir la version de compodoc :

compodoc -v

## Réponse :

1.1.25

## La partie où je me suis bloqué :

Je me suis bloqué à cette partie :

Faire en sorte que les services renvoient des Observables.
Faites en sorte que la façade renvoie des Observables en conséquence.
Faites en sorte que le smart component souscrive aux observables et mette à
jour ses properties lorsqu'une valeur est émise.
Imaginons que les données délivrées par les services soient issues de requêtes
HTTP. Décrivez les opérations à effectuer pour mettre en place le module
HttpClient ainsi que la requête à effectuer sur une url "https://domain/data" avec
un paramètre de requête "?param=test".
On cherche ici à inclure de l'asynchrone pour ne pas gêner le bon déroulement de
l'application.
Note : L’utilisation d’Observable standard vous forcera à souscrire à chaque retour
de fonction et à mettre à jour votre liste
