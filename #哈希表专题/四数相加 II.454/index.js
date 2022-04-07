/**
  �����ĸ��������� nums1��nums2��nums3 �� nums4 �����鳤�ȶ��� n ����������ж��ٸ�Ԫ�� (i, j, k, l) �����㣺

  0 <= i, j, k, l < n
  nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
  ?
  ʾ�� 1��
  ���룺nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
  �����2
  ���ͣ�
  ����Ԫ�����£�
  1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
  2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0

  ʾ�� 2��
  ���룺nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
  �����1

  ��ʾ��
  n == nums1.length
  n == nums2.length
  n == nums3.length
  n == nums4.length
  1 <= n <= 200
  -2^28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2^28
 */

/**
 * �ο����
 * ���� + ��ϣ���ҳ����� Map1 + Map2 = -(Map3 + Map4)
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
let fourSumCount = function(nums1, nums2, nums3, nums4) {
  let ans = 0;

  let groupMap1 = new Map();  // key: nums1[i] + nums2[i]  value: (nums1[i] + nums2[i]) ����
      groupMap1 = new Map();

  /**
      ���� A �� B������ʹ�ö���ѭ�������ǽ��б������õ����� A[i]+B[j] ��ֵ�������ϣӳ���С�
      ���ڹ�ϣӳ���е�ÿ����ֵ�ԣ�ÿ������ʾһ�� A[i]+B[j]����Ӧ��ֵΪ A[i]+B[j] ���ֵĴ�����
   */
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j];
      groupMap1.set(sum, (groupMap1.get(sum) || 0) + 1);
    }
  }

  /**
   * ���� CC �� DD������ͬ��ʹ�ö���ѭ�������ǽ��б���
   * �������� C[k]+D[l] ʱ����� -(C[k]+D[l])�����ڹ�ϣӳ���У���ô�� -(C[k]+D[l])��Ӧ��ֵ�ۼӽ����С�
   */

  for (let x = 0; x < nums3.length; x++) {
    for (let y = 0; y < nums4.length; y++) {
      let absNum = -(nums3[x] + nums4[y]);

      if (groupMap1.has(absNum)) {
        ans += groupMap1.get(absNum);
      }
    }
  }

  return ans;
};

// let input = [[1, 2], [-2, -1], [-1, 2], [0, 2]];
// let input = [[0], [0], [0], [0]];
let input = [[-1,-1], [-1,1], [-1,1], [1,-1]];

let result = fourSumCount(...input);

console.log(result);