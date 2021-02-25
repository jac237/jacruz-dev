# [MongoDB - Add Comment]

## Resources
* https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded#:~:text=a.-,express.,Object%20as%20a%20JSON%20Object.&text=urlencoded()%20is%20a%20method,application%20using%20the%20code%3A%20app.
* https://www.chaijs.com/guide/styles/
* https://mochajs.org/#getting-started
* https://www.npmjs.com/package/chai-http
* https://medium.com/@osahonoboite/testing-restful-apis-using-mocha-chai-and-chai-http-plugin-4b9feb45d50

## Deployment
```
cd server
vercel --prod
```

Sample Output
```
> Changelog: https://github.com/vercel/vercel/releases/tag/vercel@21.1.0
Vercel CLI 20.1.1
? Set up and deploy “./jacruz-dev/server”? [Y/n] y
? Which scope do you want to deploy to? John Doe
? Found project “username/audius-tree-api”. Link to it? [Y/n] y
🔗  Linked to username/audius-tree-api (created .vercel and added it to .gitignore)
❗️  The vercel.json file should be inside of the provided root directory.
❗️  The `name` property in vercel.json is deprecated (https://vercel.link/name-prop)
> Upload [====================] 99% 0.0s🔍  Inspect: https://vercel.com/username/audius-tree-api/hvnnofyx4 [3s]
✅  Production: https://audius-tree-api.vercel.app [copied to clipboard] [21s]
❗️  Your project already has domains configured at https://vercel.com/username/audius-tree-api/domains, please remove `alias` from your now.json file.
❗️  Due to `builds` existing in your configuration file, the Build and Development Settings defined in your Project Settings will not apply. Learn More: https://vercel.link/unused-build-settings

```