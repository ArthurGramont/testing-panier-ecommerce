## 🧩 **Examen – Développement piloté par les tests (TDD)**

**Durée :** 1 heure
**Total :** 100 points

---

### 🧠 **Partie 1 – Compréhension rapide (15 points, ~10 min)**

**1.** En une ou deux phrases, expliquez le principe du TDD et ses trois étapes clés. *(5 pts)*
**2.** Citez deux avantages concrets du TDD. *(5 pts)*
**3.** Quelle est la différence entre un fake et un stub ? Donnez un exemple rapide. *(5 pts)*

----------------- Réponses -----------------

1. Le TDD (Test-Driven Development) est une approche de développement logiciel où les tests sont écrits avant le code de production. Les trois étapes clés sont : écrire un test qui échoue, écrire le code minimum pour faire passer le test, puis refactoriser le code tout en s'assurant que les tests passent toujours.
2. Deux avantages concrets du TDD sont : une meilleure conception du code grâce à la réflexion préalable sur les tests, et une réduction des bugs car le code est continuellement testé pendant le développement.
3. Un stub est un objet qui fournit des réponses prédéfinies aux appels de méthodes, tandis qu'un fake est une implémentation simplifiée mais fonctionnelle d'une interface. Par exemple, un stub pourrait retourner une valeur fixe pour une méthode de calcul, tandis qu'un fake pourrait être une base de données en mémoire utilisée pour les tests. En plus de cela, un fake contient des informations fausses mais plausibles pour simuler un comportement réel. Tandis qu'un stub est principalement utilisé pour isoler le code testé en fournissant des réponses spécifiques.

---

### 💻 **Partie 2 – Cas pratique : gestion de panier e-commerce (85 points, ~50 min)**

#### **Contexte :**

Vous développez un système qui permet d’ajouter des produits et de calculer le total du panier.
Chaque produit a un nom et un prix. Le panier doit appliquer une **réduction de 10 %** si le total dépasse **100 €**.

---

#### **Objectif :**

Mettre en œuvre le cycle **TDD complet** pour cette fonctionnalité.

---


Le panier doit permettre :

- d’ajouter des produits (nom + prix),
- de calculer le total du panier,
- d’appliquer une réduction de 10 % si le total dépasse 100 €,
- et de renvoyer un total exact dans tous les cas.

Vous devez produire :

1. Les tests unitaires nécessaires pour valider le comportement attendu.
2. Le code correspondant (implémentation complète et propre).
3. Un code final refactorisé, lisible et cohérent.
4. Expliquez en quelques lignes comment vous intégreriez ces tests dans un pipeline CI/CD.

---

### 🧾 **Barème récapitulatif**

| Partie    | Description             |  Points |
| :-------- | :---------------------- | :-----: |
| 1         | Compréhension rapide    |    15   |
| 2.1       | Rédaction des tests     |    25   |
| 2.2       | Implémentation minimale |    25   |
| 2.3       | Refactoring             |    25   |
| 2.4       | Intégration continue    |    10   |
| **Total** |                         | **100** |