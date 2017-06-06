rm -rf _deploy
JEKYLL_ENV=production bundle exec jekyll build -d _deploy
netlify deploy
