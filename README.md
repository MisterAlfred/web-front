# Alfred

Bienvenue dans le projet **Alfred**, une application web basée sur **Next.js**, conçue pour être rapide, modulaire et facile à maintenir. Ce projet utilise également **TypeScript**, **Tailwind CSS**, et des outils modernes comme **Semantic Release** pour une gestion optimisée des versions.

---

## 📦 Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/MisterAlfred/web-front.git
   cd Alfred
   ```

2. **Installer les dépendances**
   Assurez-vous d'avoir **Node.js** (version 21 ou plus) installé.
   ```bash
   npm install
   ```

## 🚀 Démarrage du projet

1. **Environnement de développement**
   Pour démarrer le serveur de développement local :
   ```bash
   npm run dev
   ```
   Le projet sera accessible à l'adresse suivante : [http://localhost:3000](http://localhost:3000).

2. **Construction pour production**
   Pour générer une version optimisée pour la production :
   ```bash
   npm run build
   ```

3. **Lancer l'application en production**
   Une fois la version construite, utilisez :
   ```bash
   npm run start
   ```

## ✅ Vérifier et corriger le code

1. **Linter (avec ESLint)**
   ```bash
   npm run lint
   ```

2. **Formatage automatique (avec Prettier)**
   ```bash
   npm run format
   ```

## 📝 Conventions de commit (Commit Conventionnel)

Le projet suit les conventions de commit **Conventional Commits**. Ces conventions permettent de garder un historique de commits lisible et de faciliter les déploiements automatisés avec **Semantic Release**.

### 📜 Structure d'un commit conventionnel

```text
<type>(<scope>): <description>
```
- **type** : Nature du changement (ex. `feat`, `fix`, `chore`, `refactor`, etc.).
- **scope** : Optionnel, indique la partie du code affectée (ex. `auth`, `navbar`).
- **description** : Résumé du changement en quelques mots.

### 🚀 Exemples de commits :

- **Ajout de fonctionnalité** :
  ```text
  feat(home): add hero banner section
  ```

- **Correction de bug** :
  ```text
  fix(auth): resolve login redirection issue
  ```

- **Refactorisation** :
  ```text
  refactor(navbar): simplify dropdown menu logic
  ```

### ⚙️ Utilisation de `npx cz` pour un commit assisté

1. Faites vos modifications dans le projet.
2. Ajoutez les fichiers modifiés au staging :
   ```bash
   git add .
   ```
3. Lancez Commitizen avec :
   ```bash
   npx cz
   ```
4. Répondez aux questions posées dans le terminal pour générer un message de commit conforme.

## 📤 Gestion des versions avec Semantic Release

**Semantic Release** gère automatiquement les versions du projet en fonction des messages de commit conventionnels. Voici les étapes typiques :

1. Chaque fois que vous poussez sur `master` :
   - **Semantic Release** analyse les commits et publie une nouvelle version si nécessaire.

2. Les étapes automatisées incluent :
   - Génération ou mise à jour du changelog (`CHANGELOG.md`).
   - Publication d'une release sur GitHub.
   - Incrémentation de version dans le fichier `package.json`.

### Types de commits et versions générées :

- **feat** → Nouvelle version mineure (e.g., `1.2.0`).
- **fix** → Patch (e.g., `1.2.1`).
- Tout autre type de commit (e.g., `chore`, `refactor`) n'entraîne pas de changement de version.

## 🌐 Technologies utilisées

- **Next.js** : Framework React pour le développement d'applications web.
- **TypeScript** : Typage statique pour JavaScript.
- **Tailwind CSS** : Framework CSS utilitaire.
- **Semantic Release** : Gestion automatisée des versions et des déploiements.
- **Commitizen** : Outil pour les commits conventionnels.
- **ESLint et Prettier** : Linting et formatage automatique du code.

## 🤝 Contribuer

1. Forkez ce projet.
2. Créez une branche pour votre fonctionnalité :
   ```bash
   git checkout -b feat/ma-nouvelle-fonctionnalite
   ```
3. Proposez vos changements via une Pull Request.

## 📄 Licence

Ce projet est sous licence **MIT**.

---

✨ Bon développement et bienvenue dans l'équipe Alfred ! 🎉
