function partition(head: ListNode | null, x: number): ListNode | null {
  const smallList = new ListNode(0)
  const bigList = new ListNode(0)

  let small = smallList,
    big = bigList
  while (head) {
    if (x > head.val) {
      small.next = head
      small = small.next
    } else {
      big.next = head
      big = big.next
    }
    head = head.next
  }
  small.next = bigList.next
  big.next = null
  return smallList.next
}

