# Introduction
Laravel-vue is my own take on using Laravel as a back-end API and VueJS as a front-end single page application.

The Laravel framework serves as a great API with eloquent and routing properties while VueJS is a great choice for front end driven development.

# Installation

## Install packages
Start by running `composer install` and then `npm install` or `yarn`.

## Laravel Homestead with Vagrant
If you haven't already installed Vagrant with VirtualBox do this. Watch out for newest version of either since they have tend to break Laravel homestead in the past. I've been running this with Vagrant V 1.9.2 and VirtualBox 5.1.14

Well installed run: (unix)`php vendor/bin/homestead make` (win)`vendor\\bin\\homestead make` to install project configs to use with Vagrant.

Now you should be able to start your Vagrant dev-box with `vagrant up` and after initiated (takes a while the first time) you can SSH into your box with `vagrant ssh` and run `php artisan migrate` to create mysql tables

Add "192.168.10.10 laravel-vue.test" to your system hosts file, located at (unix) `/etc/hosts` (win)`c:\Windows\System32\Drivers\etc\hosts` for remote access

Now visit http://laravel-vue.test on your local machine to see the server in action

## Passport
The repo comes prepared with Passport (API authentication), you just need to install it. After successfully running `php artisan migrate` on the dev-box (migration) Install Passport using the command `php artisan passport:install` (still on dev-box). The console will print "Password grant client created successfully." followed by "Client ID" and "Client Secret".

Copy "Client Secret" and paste it in your `.env` file for the key `PASSPORT_PASSWORD_CLIENT_SECRET`. The "Client ID" is usually "2" but if not, copy whatever ID was printed and paste to `PASSPORT_PASSWORD_CLIENT_ID` in your `.env` file.

## Laravel Echo and Redis
To broadcast event from Laravel to the front-end you will need the Laravel echo server running. Install (on dev-box) with `npm install laravel-echo-server -g` . You can now run the echo server using `npm run echo`. All commands are to be executed in the dev-box for this to work. Any configurations for laravel-echo-server can be found in `laravel-echo-server.json`.

## TinyMCE with responsivefilemanager
This repo comes prepared with a TinyMCE component for VueJS using the responsivefilemanager add-on. For the responsivefilemanager to work, PHP-GD needs to be installed. [Check PHP.net for more info](http://php.net/manual/en/image.installation.php).

## .env
The .env file which is accessable in the Laravel project is also accessable in your js-scripts. Simply refer to
process.env.ENV_VAR_NAME to access variable name. Webpack will make sure to replace any .env reference with its
string value from the .env file. If the var doesn't exists the reference will stay intact.

## Deploy
For easy deployment, two npm commands are awaiable: `npm run deploy-staging` and `npm run deploy-production`. To work
correctly make a copy of the .env file to .env.staging and .env.production. Each deploy script will make use of those
files for resolving compilation and SSH hostname.

# ~ Notice ~

### laravel-echo
Laravel-Echo is not intended to be used by a SPA in the first place but is easy to configure that way. Two things need to be changed:
- The middleware for the Laravel broadcaster needs to be changed to use auth:api
- The Echo object must include the api token in the header when register to listen to private channels.

[This article helped me on the right track](https://laravel.io/forum/10-09-2016-howto-broadcasting-laravel-echo-laravel-echo-server-and-jwt).

But don't worry about it. It's all already taken care of.