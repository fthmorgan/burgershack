import { Burger } from "../models/Burger.js";

export const FakeDb = {
  burgers: [
    new Burger({
      name: 'Single 💗 Stopper',
      id: 1
    }),
    new Burger({
      name: 'Cheesy Meltdown',
      id: 2
    }),
    new Burger({
      name: 'Midlife Rye-sis: the Original Patty Melt',
      id: 1
    }),
    new Burger({
      name: 'Double Double 💗 Stopper',
      id: 1
    }),
  ]
}