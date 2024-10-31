import config from "@proxtx/config";
import { genCombine } from "@proxtx/combine-rest/request.js";
import { genModule } from "@proxtx/combine/combine.js";
import { execute } from "../../public/api.js";

export class App {
  constructor(config) {
    this.config = config;
  }

  async(action) {
    execute(this.config.pwd, action.appName, action.method, action.arguments);
  }
}
