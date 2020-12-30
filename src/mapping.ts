import { Transfer, Approval, Burn } from "../generated/Tesra/Tesra";
import { TransferCounter, UserCounter, User } from "../generated/schema";
import { BigInt } from '@graphprotocol/graph-ts';



export function handleTransfer(event: Transfer): void {
    // @ts-ignore
    let day = (event.block.timestamp / BigInt.fromI32(60 * 60 * 24))
    let userFrom = User.load(event.params.from.toHex())
    if (userFrom == null) {
        userFrom = newUser(event.params.from.toHex(), event.params.from.toHex())
    }
    // @ts-ignore
    userFrom.balance = userFrom.balance - event.params.value
    userFrom.transactionCount = userFrom.transactionCount + 1
    userFrom.save()
    let userTo = User.load(event.params.to.toHex())
    if (userTo == null) {
        userTo = newUser(event.params.to.toHex(), event.params.to.toHex())
        let userCounter = UserCounter.load('singleton')
        if(userCounter == null){
            userCounter = new UserCounter('singleton')
            userCounter.count = 0
        }
        userCounter.count = userCounter.count + 1
        userCounter.save()
        userCounter.id = day.toString()
        userCounter.save()
    }
    // @ts-ignore
    userTo.balance = userTo.balance + event.params.value
    userTo.save()
}

export function handleApproval(event: Approval): void {
    let user = User.load(event.params._owner.toHex())
    user.approvalCount = user.approvalCount + 1
    // @ts-ignore
    user.approvalAmount = user.approvalAmount + event.params._value;
}

export function handleBurn(event: Burn): void {
    let user = User.load(event.params.from.toHex())
    user.burnCount = user.burnCount + 1
    // @ts-ignore
    user.burnAmount = user.burnAmount + event.params.value
}

function newUser(id: string, address: string): User {
    let user = new User(id);
    user.address = address
    user.balance = BigInt.fromI32(0)
    user.transactionCount = 0
    user.burnCount = 0
    user.burnAmount = BigInt.fromI32(0)
    user.approvalCount = 0
    user.approvalAmount = BigInt.fromI32(0)
    return user
}

// {
//     user(id:"0xbe418763ff45cb254542a6fd16dbf15ca511ef7f"){
//     id
//     address
//     balance
//     transactionCount
//     burnCount
//     burnAmount
//     approvalCount
//     approvalAmount
// }
// }
