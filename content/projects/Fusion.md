---
title: "Fusion"
image: "images/portfolio/Fusion.png"
date: 2018-04-01
categories: ["Réalisations scolaires"]
description: "This is meta description."
draft: false
---


Fusion est une application ayant pour but de « Fusionner » les différentes fonctionnalités de votre téléphone Android avec vos autres appareils. Envoyer des SMS depuis n’importe quel appareil, ou partager des fichiers entre les appareils.

#### Un vrai casse-tête
Son architecture fut un vrai casse-tête de conception. Nous avons réalisé un serveur ASP NET CORE pour :
- Gérer la base de données
- Faire du signaling par Firebase à une application Android
- Faire du signaling par SignalR à une application Vue.js
- Héberger toute la logique « Business » de l’application

#### Application Android Kotlin
L’application Android a été développée en Kotlin, elle nous servait principalement de récepteur pour les requêtes envoyées par le serveur. Mais aussi partager des fichiers vers le serveur, envoyer des photos, des documents…

#### Application Web Vue.JS
Nous avons également réalisé une application web en Vue.JS pour permettre à l’utilisateur d’effectuer des actions sur son téléphone. Par exemple, envoyer des fichiers vers le téléphone, envoyer un SMS à un destinataire ou même faire sonner le téléphone pour pouvoir le retrouver facilement.

#### Conclusion
Nous avons réussi à implémenter beaucoup de fonctionnalité dans ce projet, pour nous c’est un vrai succès. Mais peu après, Google et Apple ont sorti des outils similaires pour leurs écosystèmes respectifs, nous avons donc pris la décision de ne pas continuer ce projet.

#### Liens vers les compétences associés:
- [Ambitieux]({{< ref "/skills/ambitieux" >}}) 
- [Autoformation]({{< ref "/skills/autoformation" >}}) 
- [Persévérance]({{< ref "/skills/persévérance" >}})
- [Front End]({{< ref "/skills/frontend" >}})
- [C#]({{< ref "/skills/csharp" >}}) 