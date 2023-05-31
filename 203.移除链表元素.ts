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
  if (!head) return null
  const dummy = new ListNode(0, head)
  // 创建新的指针,用于遍历
  // curr被初始化为dummy，而不是dummy.next，是因为我们删除元素的时候,需要知道前一个元素
  let curr = dummy

  while (curr.next) {
    if (curr.next.val === val) curr.next = curr.next.next
    else curr = curr.next
  }

  // return head × ,head有可能被删掉了
  return dummy.next
}
// @lc code=end
