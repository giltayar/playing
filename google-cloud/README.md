# test-google-pubsub-problem

Reproduce the problem

## Installing

1. `git clone` this repo.
1. Run `npm install`. I tested this using NodeJS v10, but it can probably work with NodeJS v8.
1. Then, run `./scripts/create-backing-pubsub-topics.js <env>`. This will create a topic and a subscription that will later
   be used by the reproduction code. The `env` is whatever string you want, and it will be prepended to the
   topic and subscription name.

## Using it

The script to run is `./scripts/run-test-google-pubsub-problem.js`. You can run it with `-h` to get help on all the options.

To listen on messages, run:

```sh
./scripts/run-test-google-pubsub-problem.js -e <env> -l -c 100000 -w 5
```

To publish 100 messages, run:

```sh
./scripts/run-test-google-pubsub-problem.js -e <env> -m message -c 100
```

Once published, you should see them in the listener

## To test it in k8s

* Create a node pool using `gcloud container node-pools create test-google-pubsub-problem --scopes pubsub --machine-type=n1-standard-8 --node-labels=test-google-pubsub-problem=true --num-nodes=3 --cluster=prod`
* Now create the deployment using `kc apply -f deploy/deploy.yaml`. This will create 20 instances of the listener
* Create some messages using `./scripts/run-test-google-pubsub-problem.js -e foo -m message -c 100` and
  use `kc logs -l run=test-google-pubsub-problem` to view the logs of the listeners.
