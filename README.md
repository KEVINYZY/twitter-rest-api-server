A prototype of twitter restful API server, copied from [@igorlima](https://github.com/igorlima/twitter-rest-api-server).

This repo is a public HTTP API to retrieve Twitter user timelines. It has basically two files: [server.js](https://gist.github.com/igorlima/b31f1a26a5b100186a98#file-server-js) and [twitter.js](https://gist.github.com/igorlima/b31f1a26a5b100186a98#file-twitter-js).

The first file creates [an basic instance](http://expressjs.com/starter/hello-world.html) of [express](http://expressjs.com) and defines [a route for a GET request method](http://expressjs.com/starter/basic-routing.html), which is ``/twitter/timeline/:user``.

The second one is a module responsible for retrieving data from Twitter. It requires:

* [**twit**](https://github.com/ttezel/twit): Twitter API Client for node
* [**async**](https://github.com/caolan/async): is a utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript
* [**moment**](http://momentjs.com): a lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.

Part of these modules will be mocked and overridden in our tests.

## Running the example

This example is already running [in a cloud](https://social-media-rest-api.herokuapp.com). So you can reach the urls below and see it working:

* [igorribeirolima timeline](https://social-media-rest-api.herokuapp.com/twitter/timeline/igorribeirolima)
* [strongloop timeline](https://social-media-rest-api.herokuapp.com/twitter/timeline/strongloop)
* [tableless timeline](https://social-media-rest-api.herokuapp.com/twitter/timeline/tableless)

To run it locally, clone [this gist](https://gist.github.com/igorlima/b31f1a26a5b100186a98) by ``git clone https://gist.github.com/b31f1a26a5b100186a98.git twitter-rest-api-server`` and set five environment variables. Those envs are listed below. For secure reason I won't share my token. To get yours, access [Twitter developer documentation](https://dev.twitter.com/overview/documentation), [create a new app](https://apps.twitter.com) and set up your credentials.

For [Mac users](http://stackoverflow.com/questions/7501678/set-environment-variables-on-mac-os-x-lion), you can simply type:

```
export TwitterConsumerKey="xxxx"
export TwitterConsumerSecret="xxxx"
export TwitterAccessToken="xxxx"
export TwitterAccessTokenSecret="xxxx"
export MomentLang="pt-br"
```

For [Windows users](http://stackoverflow.com/questions/21606419/set-windows-environment-variables-with-commandline-cmd-commandprompt-batch-file), do:

```
SET TwitterConsumerKey="xxxx"
SET TwitterConsumerSecret="xxxx"
SET TwitterAccessToken="xxxx"
SET TwitterAccessTokenSecret="xxxx"
SET MomentLang="pt-br"
```

After setting up the environment variables, go to ``twitter-rest-api-server`` folder, install all node dependencies by ``npm install``, then run via terminal ``node server.js``. It should be available at the port ``5000``. Go to your browser and reach ``http://localhost:5000/twitter/timeline/igorribeirolima``.

![running express app example locally](http://i1368.photobucket.com/albums/ag182/igorribeirolima/running%20express%20app%20example%20locally_zpsndaidg4w.png)
