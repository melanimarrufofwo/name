// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class TransferCounter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TransferCounter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TransferCounter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TransferCounter", id.toString(), this);
  }

  static load(id: string): TransferCounter | null {
    return store.get("TransferCounter", id) as TransferCounter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): i32 {
    let value = this.get("count");
    return value.toI32();
  }

  set count(value: i32) {
    this.set("count", Value.fromI32(value));
  }

  get totalTransferred(): BigInt {
    let value = this.get("totalTransferred");
    return value.toBigInt();
  }

  set totalTransferred(value: BigInt) {
    this.set("totalTransferred", Value.fromBigInt(value));
  }
}

export class UserCounter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UserCounter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UserCounter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UserCounter", id.toString(), this);
  }

  static load(id: string): UserCounter | null {
    return store.get("UserCounter", id) as UserCounter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): i32 {
    let value = this.get("count");
    return value.toI32();
  }

  set count(value: i32) {
    this.set("count", Value.fromI32(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): string {
    let value = this.get("address");
    return value.toString();
  }

  set address(value: string) {
    this.set("address", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get transactionCount(): i32 {
    let value = this.get("transactionCount");
    return value.toI32();
  }

  set transactionCount(value: i32) {
    this.set("transactionCount", Value.fromI32(value));
  }

  get burnCount(): i32 {
    let value = this.get("burnCount");
    return value.toI32();
  }

  set burnCount(value: i32) {
    this.set("burnCount", Value.fromI32(value));
  }

  get burnAmount(): BigInt {
    let value = this.get("burnAmount");
    return value.toBigInt();
  }

  set burnAmount(value: BigInt) {
    this.set("burnAmount", Value.fromBigInt(value));
  }

  get approvalCount(): i32 {
    let value = this.get("approvalCount");
    return value.toI32();
  }

  set approvalCount(value: i32) {
    this.set("approvalCount", Value.fromI32(value));
  }

  get approvalAmount(): BigInt {
    let value = this.get("approvalAmount");
    return value.toBigInt();
  }

  set approvalAmount(value: BigInt) {
    this.set("approvalAmount", Value.fromBigInt(value));
  }
}
