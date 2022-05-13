---
body: Object
excerpt: Object
toc: Array
title: Laravel Framework
description: Learning Laravel Framework in the first time
profile: /img.jpg
img: https://embed-ssl.wistia.com/deliveries/fece433e54f817872309273fb46fe6e9.jpg
alt: Laravel Framework
author:
  name: Miyuki Nagara
  bio: Learner, Fullstack Web Developper main Language PHP and Javascript, and Framework Stack Laravel, Vuejs, and for UI component I'am used Boostrap.
---

Laravel

what is laravel ? laravel is back end framework based on in PHP programming language. laravel write in Object Oriented Progamming or it can say OOP. acctually i used MVC for write architecture pattern in backend used laravel or any tech because i familiary with MVC Pattern. laravel have much version if you look at official documentation of laravel [laravel](https://laravel.com/docs/9.x) while i write this note laravel release version 9.x. so how I can swicth from Code Igniter 3 to laravel ? the answer i'm strong in fundamental , basic and how read the documentation.

laravel is popular framework for PHP, laravel also have much packge for artisan, PHP have big community because there are legend hahaha. before starting with laravel i need to now, some a part of laravel for fundamental and be your note for each you forgot the syntax as you can back to reading documentation and find them.

here we go

# package manager

manage your package, by default PHP have [composer](https://getcomposer.org/) for package manager. if you know or familiary wiht [npm](https://nodejs.org/en/) or [gem](https://rubygems.org/) there is same. npm for javascript and gem for ruby and the composer for php. you can easy install package or framework for your project.

in this case laravel how to install project laravel ?

### install laravel with composer

```bash
composer create-project laravel/laravel example-app
cd example-app
php artisan server
```

# artisan

artisan is cli or command line interface. if you familiar with termina linux like apt or suda, yes it the same. we get permission with interaction with artisan cli.

here a example command

## list commnand

show list command available in artisan

```bash
php artisan list
```

## migrate

migrate data to database

```bash
php artisan migrate
```

if don't about commnad you can type help like this

```bash
php artisan help migration
```

## make controller

magic you can writing file controller with artisan. I also have project framework like this [minimvcphp](https://github.com/naagaraa/mini-mvc-php-native) , currently in archive. i not maintenace again.

```bash
php artisan make:controller HomeController
```

# route

this routing is a URI four your apps example **/home** or **/about** this is important to know. and route also define the method HTTP like **get**, or **post**.

laravel have a part of route

1. web.php for web apllication path
2. api.php for Api interface path
3. console.php for console or cli path

### example write route

```php
use Illuminate\Http\Request;
use Apps\Controller\HomeController;

// if have slug with get method
Route::get('/user/{id}', function (Request $request, $id) {
    return 'User '.$id;
});

// route get passing controller handle
Route::get('/home', [HomeController:class, 'index']);
//
```

# controller

business logic and place for handling logic writing in OOP , Object Oriented Programming

### example controller

```php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{
    public function index(){
      return "hello world";
    }
    /**
     * Show the profile for a given user.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function show($id)
    {
        return view('user.profile', [
            'user' => User::findOrFail($id)
        ]);
    }
}
```

# models

database query logic or setting your table

### example for model

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['password'];
}
```

# migrations

database ORM give your magic for setting up database fast without end up the code editor

### createing table

```bash
php artisan make:migration create_flights_table
```

### example migrate file

this file will return database schema

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flights', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('airline');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('flights');
    }
};
```

# env file

file envitorment variabel. by default laravel use dotenv for configuration variabel. and configuration will be used in config direcctory

### example for dotenv

```env
APP_NAME=Laravel
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```

# public directory

The public directory contains the index.php file, which is the entry point for all requests entering your application and configures autoloading. This directory also houses your assets such as images, JavaScript, and CSS.

# storage

store you data here like image or pdf
for save file in file system, you can check more detail at here [documenatation](https://laravel.com/docs/8.x/filesystem#main-content).

# eloquent dan query builder

magic database query in laravel. this feature will often need to convert your models and relationshipt to arrays or JSON. Eloquent includes convenient method for making there convenrsons, as well as controlling which attributes are included in the serialized representation of your models.
for more detail you can visit here [documentation](https://laravel.com/docs/8.x/middleware#main-content)

# middleware

in simple definition middleware is provide a small method for handle spesific task like authentication. for more detail in can found at [documentation](https://laravel.com/docs/8.x/middleware#main-content)

### example

```php
<?php

namespace App\Http\Middleware;

use Closure;

class EnsureTokenIsValid
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->input('token') !== 'my-secret-token') {
            return redirect('home');
        }

        return $next($request);
    }
}
```
