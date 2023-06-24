/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const root: ListNode | null = new ListNode(0, head)
  let prev = root
  let curr = root.next
  while (curr) {
    if (val === curr.val) prev.next = prev.next.next
    else {
      prev = curr
    }
    curr = curr.next
  }
  return root.next
}
// @lc code=end
