/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
  let dummy: ListNode | null = new ListNode(0, head)
  let curr: ListNode | null = dummy
  while (curr.next && curr.next.next) {
    let temp1: ListNode | null = curr.next
    let temp2: ListNode | null = curr.next.next.next
    curr.next = temp1.next
    curr.next.next = temp1
    temp1.next = temp2
    curr = temp1
  }
  return dummy.next
}
// @lc code=end
