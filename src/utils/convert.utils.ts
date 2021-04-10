import { FormatUtils } from "utils";
import * as Temp from "./temp.json";

function groupSymbols(data: any) {
  if (!data || data.length == 0) {
    return;
  }

  let symbols = [];
  for (let account of data) {
    for (let symbol of account.positions) {
      symbols.push(symbol);
    }
  }
  // Group all positions by Symbol
  let group = arrayToObject(symbols, "symbol");

  // Covert data to show in UI
  let arr = [];
  for (let symbol in group) {
    let parent: any = {};
    parent["volume"] = 0;
    parent["profit"] = 0;
    parent["childs"] = [];
    parent["symbol"] = symbol.substr(0, 6);
    for (let item of group[symbol]) {
      parent["childs"].push(item);
      parent["volume"] += item.volume;
      parent["profit"] += item.profit;
    }

    parent["volume"] = FormatUtils.currency(parent["volume"]);
    parent["profit"] = FormatUtils.currency(parent["profit"]);

    parent["childs"].sort((a: any, b: any) => {
      return b.profit - a.profit;
    });
    parent["closePrice"] = 0;
    if (parent["childs"].length > 0) {
      parent["closePrice"] = parent["childs"][0].closePrice;
    }

    arr.push(parent);
  }
  arr.sort((a, b) => {
    return b.profit - a.profit;
  });

  return arr;
}

function arrayToObject(arr: any, key: string) {
  return arr.reduce((obj: any, item: any) => {
    obj[item[key].substring(0, 6)] = [
      ...(obj[item[key].substring(0, 6)] || []),
      item,
    ];
    return obj;
  }, {});
}

/**
 * Tổng balance
 * @param data Data thô
 */
function AUM(data: any[]) {
  let value = 0;
  for (let account of data) {
    value += account.balance;
  }
  return FormatUtils.currency(value);
}

/**
 * Tổng Tài sản
 * @param data Data thô
 */
function equities(data: any[]) {
  let value = 0;
  for (let account of data) {
    value += account.equity;
  }
  return FormatUtils.currency(value);
}

/**
 * Tổng vị thế
 * @param data Data thô
 */
function positions(data: any[]) {
  let positions = 0;
  for (let account of data) {
    positions += account.positions.length;
  }
  return positions;
}

/**
 * Tổng VOL đang giao dịch
 * @param data data sau khi xử lý
 */
function volumes(data: any[]) {
  let vol = 0;
  for (let parentSymbols of data) {
    vol += parentSymbols.volume;
  }
  return FormatUtils.currency(vol);
}

/**
 * Tổng cặp đang giao dịch
 * @param data data sau khi xử lý
 * @returns
 */
function symbols(data: any[]) {
  return data.length;
}

/**
 * Hiệu của lời so với lỗ
 * @param data  data sau khi xử lý
 * @returns
 */
function PL(data: any) {
  let value = 0;
  for (let parentSymbols of data) {
    value += parentSymbols.profit;
  }
  return FormatUtils.currency(value);
}

/**
 * Tổng số dư của tài khoản
 * @param data Data thô
 */
function accountById(data: any[], id: any) {
  let account = data.find((item) => {
    return item.account == id;
  });

  if (account) {
    return account;
  }
  return undefined;
}

export {
  groupSymbols,
  arrayToObject,
  AUM,
  positions,
  volumes,
  symbols,
  PL,
  equities,
  accountById,
};
