import { Order } from "@/model/order";
import { pb } from "../../pocketbase";
import { OrderForm, OrderStatus } from "@/model/order-form";

export function get() {
    return pb.collection('orders').getList<Order>()
}

export function remove(id: string) {
    return pb.collection('orders').delete(id)
}

export function add(order: OrderForm) {
    return pb.collection('order').create<Order>(order)
}

export function toggleStatus(id: string, status: OrderStatus) {
    return pb.collection('orders').update<Order>(id, { status })
}