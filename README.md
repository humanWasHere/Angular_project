# TP AngularJS (EPSI - B3)
## TP AngularJS de listing de produit de papetrie

### Sommaire
1. [Explications](#Explications)
2. [Travail à faire](#Travail-à-faire)
3. [Structure du projet](#Structure-du-projet)  
4. [Installation](#Installation)
5. [Our developping environnement](#Our-developping-environnement)
6. [Développeurs](#Développeurs)  

### Explications
Explication 👍

### Travail à faire
```
1. Créer une page qui s’occupera uniquement du listing
  a. Cette page affiche uniquement la liste des produits
  b. Au clic sur un produit, on doit être redirigé sur une page affichant uniquement le 
détail d’un produit 
  c. Elle contiendra un bouton (ou un lien) « créer » qui affiche le formulaire de 
modification vierge
2. Créer une page qui affichera le détail d’un produit (et qui permettra de sauvegarder les 
modifications)
  a. Cette page permettra de modifier un produit
  b. Elle permettra également de créer un nouveau produit (en passant 0 comme 
identifiant via l’url par exemple)
3. Mettre en place le routing
  a. Créer un menu qui permet d’accéder aux pages suivantes : 
    i. Affichage de la liste des produits, avec le détail en dessous (page faite dans la 
première partie du projet)
    ii. Affichage du listing des produits (nouvelle page créée dans cette seconde 
partie du projet)
  b. Créer dynamiquement le menu, sans passer par l’html
i. Idéalement, retirer le /produit/:id
4. Service : faire passer l’ensemble des ajouts / modifications par le service
  a. => Il faut créer une méthode update qui prend en paramètre un produit qui fera 
l’ajout ou la mise à jour
5. Mettre en place l’asynchrone : la liste des produits sera fournie de manière asynchrone, de la 
même manière que les informations d’un produit.
```

### Structure du projet
```
tree
```

### Installation
be carefull to run the following commands before running the application : 
```npm install -g @angular/cli```
```npm install```
```npm i @angular/material```

#### Our developping environnement
```
Angular CLI: 16.2.11
Node: 18.18.2
Package Manager: npm 9.6.4
```

### Développeurs
Romain C  
Théo C  
Alexis L
