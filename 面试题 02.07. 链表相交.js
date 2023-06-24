/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let curr1 = this.headA
  let curr2 = this.headB
  let i,
    j = 1
  while (curr1 && i++) {
    curr1 = curr1.next
  }
  while (curr2 && j++) {
    curr2 = curr2.next
  }
  i > j ? (i += i - j) : (j += j - 1)
  
  return null
}

