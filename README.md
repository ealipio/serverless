## Using serverless with Lambda

> creating the project with name: blog
```bash
$ sls create -t aws-nodejs -n blog
```

> invoking locally
```bash
$ sls invoke local -f hello -p event.json
```

> invoking remotely
```bash
$ sls invoke -f hello -p event.json
```


> deploy changes to aws
```bash
$ sls deploy
```