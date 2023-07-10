import { FakeDb } from "../db/FakeDb.js";
class BurgersService {
  getBurgers() {
    return FakeDb.burgers
  }

}

export const burgersService = new BurgersService()