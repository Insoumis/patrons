set -e

git checkout master

# Build the site to _deploy
sh build.sh

git checkout gh-pages

# Remove everything that's not _deploy
shopt -s extglob
rm -r !(_deploy)
rm -r .asset-cache

# Move everything from _deploy to the root
mv _deploy/* .
rm -r _deploy

echo "Ready to commit, make sure to review your changes"
