# Changelog

### Features:

* Added Github CLI to gitpod environment for greater ease of use
* Added `starport build` command to build and install app binaries.
* Improved the first-time experience for readers of the Starport readme and parts of the Starport Handbook.
* Added `starport module create` command to scaffold custom modules
* Downstream Pi now installs, builds, and serves the Vue UI
* Added IBC and some other modules.
* Added an option to configure server addresses under `servers` section in `config.yml`.

### Fixes:

* `--address-prefix` ensured to be translated to lowercase while scaffolding with `app` command.
* HTTP API: accept strings in JSON and cast them to int and bool
* Update @tendermint/vue to `v0.1.7`
* Removed "Starport Pi"
* Removed Makefile from Downstream Pi
* Fixed downstream pi image Github Action
* Prevent duplicated fields with `type` command

## `v0.11.1`

### Features:
* Published on Snapcraft.


## `v0.11.0`

### Features:

* Added experimental [Stargate](https://stargate.cosmos.network/) scaffolding option with `--sdk-version stargate` flag on `starport app` command.
* Pi Image Generation for chains generated with Starport
* Github action with capture of binary artifacts for chains generted with starport
* Gitpod: added guidelines and changed working directory into `docs`.
* Updated web scaffold with an improved sign in, balance list and a simple wallet.
* Added CRUD actions for scaffolded types: delete, update and get.

## `v0.0.10`

### Features:

* Add ARM64 releases.
* OS Image Generation for Raspberry Pi 3 and 4
* Added `version` command
* Added support for _validator_ configuration in _config.yml_.
* Starport can be launched on Gitpod
* Added `make clean`

### Fixes:

* Compile with go1.15
* Running `starport add type...` multiple times no longer breaks the app
* Running `appcli tx app create-x` now checks for all required args. -#173.
* Removed unused `--denom` flag from the `app` command. It previously has moved as a prop to the `config.yml` under `accounts` section.
* Disabled proxy server in the Vue app (this was causing to some compatibilitiy issues) and enabled CORS for `appcli rest-server` instead.
* `type` command supports dashes in app names.


## `v0.0.10-rc.3`

### Features:

* Configure `genesis.json` through `genesis` field in `config.yml`
* Initialize git repository on `app` scaffolding
* Check Go and GOPATH when running `serve`

### Changes:

* verbose is --verbose, not -v, in the cli
* Renamed `frontend` directory to `vue`
* Added first E2E tests (for `app` and `add wasm` subcommands)

### Fixes:

* No longer crashes, when git is initialized, but doesn't have commits
* Failure to start the frontend doesn't prevent Starport from running
* Changes to `config.yml` trigger reinitialization of the app
* Running `starport add wasm` multiple times no longer breaks the app

## `v0.0.10-rc.X`

### Features:

* Initialize with accounts defined `config.yml`
* `starport serve --verbose` shows detailed output from every process
* Custom address prefixes with `--address-prefix` flag
* Cosmos SDK Launchpad support
* Rebuild and reinitialize on file change

## `v0.0.9`

Initial release.
