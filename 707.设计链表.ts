/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * [707] 设计链表
 */

// @lc code=start

class ListNode2 {
  constructor(public value: number, public next: ListNode2 | null) {}
}

class MyLinkedList {
  private head: ListNode2 | null = null
  private size: number = 0
  constructor() {}

  private getNode(index: number): ListNode2 | null {
    if (index < 0 || index >= this.size) return null
    let curr = this.head
    while (curr?.next && index--) {
      curr = curr.next
    }
    return curr
  }

  get(index: number): number {
    return this.getNode(index)?.value ?? -1
  }

  addAtHead(val: number): void {
    const newNode = new ListNode2(val, this.head)
    this.head = newNode
    this.size++
  }

  addAtTail(val: number): void {
    const newNode = new ListNode2(val, null)
    if (!this.head) this.head = newNode
    else {
      let curr = this.head
      while (curr!.next) {
        curr = curr.next
      }
      curr!.next = newNode
    }
    this.size++
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) return
    if (index === 0) {
      this.addAtHead(val)
      return
    }
    if (index === this.size) {
      this.addAtTail(val)
      return
    }
    const prev = this.getNode(index - 1)
    const newNode = new ListNode2(val, prev!.next)
    prev!.next = newNode
    this.size++
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return
    if (index === 0) {
      this.head = this.head!.next
    } else {
      const prev = this.getNode(index - 1)
      prev!.next = prev!.next!.next
    }
    this.size--
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
