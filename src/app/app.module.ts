/**
 * Load angular app
 */
import * as Angular from "angular";
import UiRouter from "angular-ui-router";
import MainService from "./main/MainService";
import CustomerService from "./customers/CustomerService";
import Config from "./app.routes";
export default Angular.module("app", [UiRouter])
.config(Config)
.service("mainService", MainService)
.service("CustomerService", CustomerService);
