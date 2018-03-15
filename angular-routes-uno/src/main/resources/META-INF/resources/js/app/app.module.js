var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@angular/platform-browser", "./app.component", "../about/about.component", "../home/home.component", "primeng-wl/chart", "primeng-wl/galleria", "./app-routing.module", "chart.js/dist/Chart.min"], function (require, exports, core_1, platform_browser_1, app_component_1, about_component_1, home_component_1, chart_1, galleria_1, app_routing_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppModule = (function () {
        function AppModule() {
        }
        // Avoid bootstraping any component statically because we need to attach to
        // the portlet's DOM, which is different for each portlet instance and,
        // thus, cannot be determined until the page is rendered (during runtime).
        AppModule.prototype.ngDoBootstrap = function () { };
        return AppModule;
    }());
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                app_routing_module_1.AppRoutingModule,
                platform_browser_1.BrowserModule,
                chart_1.ChartModule,
                galleria_1.GalleriaModule
            ],
            declarations: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                home_component_1.HomeComponent
            ],
            entryComponents: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                home_component_1.HomeComponent
            ],
            bootstrap: [],
            providers: []
        })
    ], AppModule);
    exports.AppModule = AppModule;
});
//# sourceMappingURL=app.module.js.map