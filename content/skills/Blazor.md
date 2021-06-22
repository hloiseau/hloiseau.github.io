---
title: "Blazor"
categories: ["Compétences Techniques"]
description: "Lors de mon alternance chez Ketchapp, j’ai découvert une nouvelle technologie Microsoft, Blazor."
draft: false
---

Lors de mon alternance chez Ketchapp, j’ai découvert une nouvelle technologie Microsoft, Blazor.
Blazor est un Framework Web gratuit et open source qui permet aux développeurs de créer des applications Web en utilisant C# et HTML. Une application Blazor peut interopérer avec JavaScript, par exemple appelée des fonctions JavaScript à partir de méthodes .NET.

#### Blazor Server

Blazor Server est une application qui tourne sur un serveur, tout le code C# est donc exécuté sur celui-ci. Le client ne contient que du HTML, CSS et JavaScript, aucun code C# ne va dedans. Les échanges avec le serveur s’effectuent via une connexion SignalR. Les changements sont donc envoyés sur le serveur et le nouveau rendu est envoyé en retour.

#### Blazor WASM

Avec Blazor WebAssembly, tout le code s’exécute dans le client. Le C# est donc exécuté dans celui-ci, sur la machine, et non plus sur un serveur. Le code est compilé dans une DLL envoyée au client qui va s’en servir pour fonctionner. Il est ainsi possible de réaliser une application fonctionnant entièrement hors ligne. La philosophie ici est de faire une application qui n’a pour seule vocation que d’afficher des informations à un utilisateur.

#### Chez Ketchapp

Chaque développeur choisissait sa technologie côté back et front : VueJS, NodeJS, PHP, JQuery, Python… De plus, les développeurs utilisent tous des OS différents : Mac, Linux, Windows…
Avec toutes ces technologies différentes, impossible de maintenir le code ou de créer de nouvelles fonctionnalités, il fallait agir !
Pourquoi avons-nous choisi Blazor comme technologie pour nos Fronts ?
Le C# est la seule technologie commune à tous nos développeurs. Certains viennent de Unity, d’autres connaissaient ASP.NET… Le choix de Blazor nous a paru évident. Cela nous a permis de faire converger toute l’équipe vers une seule compétence C# avec Unity pour les SDKs, ASP.NET pour le Backend et Blazor pour le Frontend.
Et comme principal avantage, tous les développeurs deviennent polyvalents, par exemple un développeur de SDK Unity peut modifier une page sur le Front !

#### Avantage 

Blazor nous permet de garder une seule et même stack technologique, le C#.
Cela nous évite d’avoir une autre technologie, telle que le JavaScript ou le TypeScript. Nous avons donc moins de difficultés à maintenir nos projets. Les développeurs peuvent se concentrer sur l’acquisition de compétences en .NET. 
Blazor supporte la réutilisation de toutes les libs .NET Standard et nous propose un système de composant simple à utiliser et comprendre.
Pour finir, Blazor nous offre une communication avec le Backend simple. Le fait de travailler sur une stack entièrement C#, nous permet de réutiliser nos modèles de données que ce soit sur le client ou le serveur.
Et cerise sur le gâteau, ça nous évite l’utilisation de NPM !

#### Inconvénients

Blazor, comme toutes les technologies récentes présentent quelques désavantages. L’utilisation des librairies JS nécessite d’utiliser l’interopération, du coup, personne ne le fait. 
Le débogage sous Mac n’existe pas pour l’instant et Visual Studio Mac est bien inférieur à Visual Studio Windows, il manque beaucoup de fonctionnalités.
Également, Blazor WASM ne fonctionne pas sur les navigateurs (pré) historiques comme Internet Explorer, alors que Blazor Server, lui, fonctionne correctement et pourra être utilisé si c’est absolument nécessaire.

#### Une communauté très active

La communauté Blazor est actuellement en pleine expansion, il existe des initiatives comme Awesome-blazor, regroupant toutes les librairies open sources de la communauté, plusieurs centaines ! 
Il y a également des librairies payantes très efficaces comme Telerik ou SyncFusion et des alternatives gratuites comme Mud Blazor, Mat Blazor, Material.Blazor et beaucoup d’autres. 

#### Liens vers les réalisations associés:
- [Portails Ketchapp en Blazor]({{< ref "/projects/ketchapp" >}}) 
