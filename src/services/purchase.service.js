import Purchase from "../models/Purchase.js";

export const createService = (body) => Purchase.create(body);