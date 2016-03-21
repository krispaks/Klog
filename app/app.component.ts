import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
    selector: 'klog-main',
    templateUrl: '../templates/app.template.html'
})

export class AppComponent{}

bootstrap(AppComponent, [])