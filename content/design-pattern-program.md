---
body: Object
excerpt: Object
toc: Array
title: design pattern program
description: design pattern most used in software development basic you must to know
profile: /img.jpg
img: https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
alt: design pattern program
author:
  name: Miyuki Nagara
  bio: Learner, Fullstack Web Developper main Language PHP and Javascript, and Framework Stack Laravel, Vuejs 3, and for UI component I'am used Boostrap.
---

[![Software Developmeny !](https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')](https://unsplash.com/s/photos/software?orientation=landscapehttps://unsplash.com/s/photos/software?orientation=landscape)

why you or me must to know about design pattern ? it's cause it very important if you want develop apps and wanna to be easier to maintenace and make scalable you need good structure at your apps. this concept about design pattern. I learning this after learn about fundamental and Object Orinted Programming. most pattern used or adapted in framework is a MVC, MVP, MVVM. what is that ? theree are popular design pattern in software development. all design pattern by and large help in developing application that are loosely combined, easy to test and maintain.

## MVC (Model - View - Controller )

MVC deign pattern divices an application into three major aspects : Model, View and Controller.

!['mvc'](https://miro.medium.com/max/778/1*TuWeZzR14MmB-RBbjtZl-A.png)

### Model

Model Means data that is required to display in the view. Model represents a collection of class that describes the business logic or it can say the business rules for data set in here.

### View

The View Represent UI Components like XML, HTML etc. View display the data that is received from the controller as the outcome.

### controller

The Controller is responsible to process incoming requests. it processes the user's data through the model and passing back the results to view. it normally acts as a mediator between the view and the model.

**example implementation**

example at php programming

```php
// code at here

```

!['mvp'](https://www.twoh.co/wp-content/uploads/2016/01/MVC_MVP.png)

## MVP (Model View Presenter)

the MVP pattern is similar to the MVC pattern. it is derived fromMVC Pattern where in the controller is replaced by th presenter.

**example implementation**

example at java programming

```java
// code at here

```

![mvvm](https://cdn.ttgtmedia.com/rms/onlineimages/whatis-model_view_viewmodel_mobile.png)

## MVVM (Model View Model)

MVVM pattern support two way data binding between View and View Model. This allows automatic propagation of changes, Inside the state of View - Model to the View. Generally. the View Model Utilizes the observer pattern to inform changes in the View - Model to the Model.

### View Model

is is responsible for exposing methids, commands, and other properties that help to maintain the state of the view, manipulate the model as the result of actions on the view, and trigger events in the view itself. View has a reference to View-Model but View-Model has no information about the View. There is many-to-one relationship between View and View-Model means many Views can be mapped to one View-Model. It is completely independent of Views.

### Model

this layer is respinsible for the a abstraction of the data sources. Model and viewModel work togerther to get and save the data

### view

the purpose of this layer is to inform the viewModel about the user's action. This layer oserves the view Model and does not contain any kind of application logic.

**example implementation**

example at dark programing

```dart
// code at here

```
