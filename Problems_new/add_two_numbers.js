/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let result = new ListNode();
    let dummy = result;
    let carry = 0;

    while (l1 || l2 || carry) {
        let value = carry;
        carry = 0;

        if (l1) {
            value += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            value += l2.val;
            l2 = l2.next;
        }
        value > 9 ? (carry = 1) : (carry = 0);
        dummy.next = new ListNode(value % 10);
        dummy = dummy.next;
    }
    return result.next;
};
