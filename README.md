# Figr

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
@Output() Emoji = new EventEmitter();

  smiley = []
  emoji = [
    {start:128512 , end : 128567},
    {start:128577 , end : 128580},
    {start:129296 , end : 129301 },
    { start: 129312 , end : 129327 },
  ]
  ngOnInit() {
    
  for(let em = 0 ;em<this.emoji.length;em++)
  {
    for(let i=this.emoji[em].start;i<=this.emoji[em].end;i++)  this.smiley.push( "&#"+i);
  }
  }

  emojiClicked( i )
  {
    this.Emoji.emit(i);
  }
