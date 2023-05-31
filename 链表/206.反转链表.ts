/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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
// 双指针
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null
  let curr: ListNode | null = head
  let temp: ListNode | null = null
  while (curr) {
    temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }
  return prev
}

function cycle(curr: ListNode | null, prev: ListNode | null): ListNode | null {
  // 退出条件
  if (!curr) return prev
  let temp: ListNode | null = curr.next
  curr.next = prev
  // 递归条件：curr和prev进行了循环赋值操作即可进行递归调用
  return cycle(temp, curr)
}
// 递归(按照双指针的过程演练而来的)
function reverseList(head: ListNode | null): ListNode | null {
  return cycle(head, null)
}
// @lc code=end
