module.exports = {
  branches: ['main'],
  repositoryUrl: 'https://github.com/MisterAlfred/web-front', // Remplace <user>/<repo> par ton repo GitHub
  plugins: [
    '@semantic-release/commit-analyzer', // Analyse les commits (conventionnel)
    '@semantic-release/release-notes-generator', // Génère les notes de release
    '@semantic-release/changelog', // Met à jour le changelog
    ['@semantic-release/npm', { npmPublish: false }], // Mise à jour du package.json (sans publier sur npm)
    ['@semantic-release/git', {
      assets: ['package.json', 'CHANGELOG.md'],
      message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }],
  ],
};
