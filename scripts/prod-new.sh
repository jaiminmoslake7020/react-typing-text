npm run playground-build
echo "$1" > ./out/version.txt
netlify deploy --prod
