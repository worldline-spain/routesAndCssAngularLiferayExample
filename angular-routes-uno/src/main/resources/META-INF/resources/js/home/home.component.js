var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@angular/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HomeComponent = (function () {
        function HomeComponent() {
        }
        HomeComponent.prototype.ngOnInit = function () {
            this.images = [];
            this.images.push({ source: 'https://www.mundogato.net/wp-content/uploads/alternativas-al-cascabel-de-los-gatos.jpg', alt: 'Description for Image 1', title: 'Title 1' });
            this.images.push({ source: 'https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg', alt: 'Description for Image 2', title: 'Title 2' });
            this.images.push({ source: 'https://t1.ea.ltmcdn.com/es/images/7/1/2/img_cuidados_de_gatos_cachorros_21217_600.jpg', alt: 'Description for Image 3', title: 'Title 3' });
        };
        return HomeComponent;
    }());
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: '/o/angular-routes-uno/js/home/home.html'
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    exports.HomeComponent = HomeComponent;
});
//# sourceMappingURL=home.component.js.map