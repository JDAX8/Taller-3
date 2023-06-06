import trips from "../mocks/trips";
import { trip } from "../types/trips";


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