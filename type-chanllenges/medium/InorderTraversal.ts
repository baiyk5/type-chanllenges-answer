// For example: 实现二叉树的类型版本的中序遍历

const tree1 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
} as const
  
type A = MyInorderTraversal<typeof tree1> // [1, 3, 2]

// 实现代码

interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

type MyInorderTraversal<T extends TreeNode | null> = 
    [T] extends [TreeNode] 
    ? [...MyInorderTraversal<T['left']>, T['val'], ...MyInorderTraversal<T['right']>] : []

/**
 * 二叉树中序遍历 从left->val->right 的顺序去获取val的值
 * 注意T extends TreeNode | null 需要考虑入参为空的情况 因此加了联合类型null
 */