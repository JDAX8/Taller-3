import psbdata from "../mocks/psb";
import { user } from "../types/psb";
import trips from "../mocks/trips";
import { trip } from "../types/trips";
import sgfydata from "../mocks/usdata"
import { DataSFY } from "../types/usdata"


class Trips {
  async get(): Promise<trip[]> {
    console.log("starting fetch...");
    const value: trip[] = await new Promise((resolve) => {
      setTimeout(() => resolve(trips), 1000);
    });
    return value;
  }
}

export default new Trips();