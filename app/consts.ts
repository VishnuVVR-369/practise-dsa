export const topics: string[] = [
  'Sorting',
  'Two Pointers',
  'Prefix Sum',
  'Matrix',
  'Hashing',
  'Sliding Window',
  'Linked List',
  'Stack',
  'Queues',
  'Binary Search',
  'Bit Manipulation',
  'Recursion Backtracking',
  'Binary Tree',
  'Binary Search Tree',
  'Greedy',
  'Dynamic Programming',
  'String Matching',
  'Combinatorics & Geometry',
  'Heap & PQ',
  'Tries',
  'Graphs',
  'Game Theory',
  'Advance Algorithm',
];

export interface Problem {
  id: string;
  title: string;
  difficulty: string;
  status: string;
  problemLink: string;
  articleLink?: string;
  tags: string[];
  platform?: string;
}


export const problems: Problem[] = [
  {
      "id": "1",
      "title": "Bubble Sort",
      "difficulty": "Theory",
      "status": "Unsolved",
      "problemLink": "NA",
      "articleLink": "https://read.learnyard.com/dsa/bubble-sort/",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "2",
      "title": "Insertion Sort Algorithm",
      "difficulty": "Theory",
      "status": "Unsolved",
      "problemLink": "NA",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "3",
      "title": "Insertion Sort List ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/insertion-sort-list/description/",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "4",
      "title": "Selection Sort Algorithm",
      "difficulty": "Theory",
      "status": "Unsolved",
      "problemLink": "NA",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "5",
      "title": "Merge Sort",
      "difficulty": "Theory",
      "status": "Unsolved",
      "problemLink": "NA",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "6",
      "title": "Count Inversions",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1",
      "platform": "GeeksforGeeks",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "7",
      "title": "Count of Smaller Numbers After Self",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "8",
      "title": "Count of Range Sum",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/count-of-range-sum",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "9",
      "title": "Reverse Pairs",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/reverse-pairs",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "10",
      "title": "Create Sorted Array through Instructions",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/create-sorted-array-through-instructions/description/",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "11",
      "title": "Count Good Triplets in an Array",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/count-good-triplets-in-an-array/description/",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "12",
      "title": "Number of Pairs Satisfying Inequality",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-pairs-satisfying-inequality/description/",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "13",
      "title": "Quick Sort",
      "difficulty": "Theory",
      "status": "Unsolved",
      "problemLink": "NA",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "14",
      "title": "Sort an Array",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/sort-an-array/description/",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "15",
      "title": "Counting Sort",
      "difficulty": "Theory",
      "status": "Unsolved",
      "problemLink": "NA",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "16",
      "title": "Relative Sort Array",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/relative-sort-array/description/",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "17",
      "title": "Reduce Array Size to The Half",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/reduce-array-size-to-the-half/description/",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "18",
      "title": "Maximum Ice Cream Bars",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-ice-cream-bars/",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "19",
      "title": "Radix Sort",
      "difficulty": "Theory",
      "status": "Unsolved",
      "problemLink": "NA",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "20",
      "title": "Bucket Sort",
      "difficulty": "Theory",
      "status": "Unsolved",
      "problemLink": "NA",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "21",
      "title": "Top K Frequent Elements",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/top-k-frequent-elements/description/",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "22",
      "title": "Sort Characters By Frequency",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/sort-characters-by-frequency/description/",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "23",
      "title": "Maximum Gap",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-gap/",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "24",
      "title": "Top K Frequent Words",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/top-k-frequent-words/description/",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "25",
      "title": "Contains Duplicate III",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/contains-duplicate-iii/description/",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "26",
      "title": "Comparator Sort",
      "difficulty": "Theory",
      "status": "Unsolved",
      "problemLink": "NA",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "27",
      "title": "Custom Sort String",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/custom-sort-string/",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "28",
      "title": "Largest Number",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/largest-number/",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "29",
      "title": "Sort the Jumbled Numbers",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/sort-the-jumbled-numbers/",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "30",
      "title": "Rank Teams by Votes",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/rank-teams-by-votes/description/",
      "platform": "LeetCode",
      "tags": [
          "Sorting"
      ]
  },
  {
      "id": "31",
      "title": "Reverse String",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/reverse-string",
      "articleLink": "https://read.learnyard.com/dsa/reverse-string/",
      "platform": "Leetcode"
  },
  {
      "id": "32",
      "title": "Reverse Prefix of Word",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/reverse-prefix-of-word",
      "platform": "Leetcode"
  },
  {
      "id": "33",
      "title": "Reverse Vowels of a String",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/reverse-vowels-of-a-string",
      "platform": "Leetcode"
  },
  {
      "id": "34",
      "title": "Reverse Words in a String",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/reverse-words-in-a-string",
      "platform": "Leetcode"
  },
  {
      "id": "35",
      "title": "Reverse Words in a String III",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/reverse-words-in-a-string-iii",
      "platform": "Leetcode"
  },
  {
      "id": "36",
      "title": "Valid Palindrome",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/valid-palindrome",
      "platform": "Leetcode"
  },
  {
      "id": "37",
      "title": "Valid Palindrome II",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/valid-palindrome-ii",
      "platform": "Leetcode"
  },
  {
      "id": "38",
      "title": "Lexicographically Smallest Palindrome",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/lexicographically-smallest-palindrome",
      "platform": "Leetcode"
  },
  {
      "id": "39",
      "title": "Merge Strings Alternately",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/merge-strings-alternately",
      "platform": "Leetcode"
  },
  {
      "id": "40",
      "title": "Merge Two 2D Arrays by Summing Values",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values",
      "platform": "Leetcode"
  },
  {
      "id": "41",
      "title": "Merge Sorted Array",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/merge-sorted-array/description/",
      "platform": "Leetcode"
  },
  {
      "id": "42",
      "title": "Largest Merge of Two Strings",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/largest-merge-of-two-strings",
      "platform": "Leetcode"
  },
  {
      "id": "43",
      "title": "Sort Array by Parity",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/sort-array-by-parity/description/",
      "platform": "Leetcode"
  },
  {
      "id": "44",
      "title": "Sort Array by Parity II",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/sort-array-by-parity-ii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "45",
      "title": "Rearrange Array Elements by Sign",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/rearrange-array-elements-by-sign",
      "platform": "Leetcode"
  },
  {
      "id": "46",
      "title": "Remove Duplicates from Sorted Array",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-array",
      "platform": "Leetcode"
  },
  {
      "id": "47",
      "title": "Remove Element",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/remove-element",
      "platform": "Leetcode"
  },
  {
      "id": "48",
      "title": "Shortest Distance to a Character",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/shortest-distance-to-a-character ",
      "platform": "Leetcode"
  },
  {
      "id": "49",
      "title": "Partition Array According to Given Pivot",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/partition-array-according-to-given-pivot",
      "platform": "Leetcode"
  },
  {
      "id": "50",
      "title": "DI String Match",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/di-string-match",
      "platform": "Leetcode"
  },
  {
      "id": "51",
      "title": "Rotate Array",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/rotate-array",
      "platform": "Leetcode"
  },
  {
      "id": "52",
      "title": "Make String a Subsequence Using Cyclic Increments",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments",
      "platform": "Leetcode"
  },
  {
      "id": "53",
      "title": "Apply Operations to an Array",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/apply-operations-to-an-array",
      "platform": "Leetcode"
  },
  {
      "id": "54",
      "title": "Find All K-Distant Indices in an Array",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/find-all-k-distant-indices-in-an-array",
      "platform": "Leetcode"
  },
  {
      "id": "55",
      "title": "Count Binary Substrings",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/count-binary-substrings",
      "platform": "Leetcode"
  },
  {
      "id": "56",
      "title": "Two Sum",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/two-sum/",
      "platform": "Leetcode"
  },
  {
      "id": "57",
      "title": "3Sum",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/3sum",
      "platform": "Leetcode"
  },
  {
      "id": "58",
      "title": "3Sum Closest",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/3sum-closest",
      "platform": "Leetcode"
  },
  {
      "id": "59",
      "title": "4Sum",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/4sum",
      "platform": "Leetcode"
  },
  {
      "id": "60",
      "title": "Sort Colors",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/sort-colors",
      "platform": "Leetcode"
  },
  {
      "id": "61",
      "title": "Minimum Length of String After Deleting Similar Ends",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends",
      "platform": "Leetcode"
  },
  {
      "id": "62",
      "title": "Container With Most Water",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/container-with-most-water ",
      "platform": "Leetcode"
  },
  {
      "id": "63",
      "title": "String Compression",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/string-compression",
      "platform": "Leetcode"
  },
  {
      "id": "64",
      "title": "Separate Black and White Balls",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/separate-black-and-white-balls",
      "platform": "Leetcode"
  },
  {
      "id": "65",
      "title": "Watering Plants II",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/watering-plants-ii",
      "platform": "Leetcode"
  },
  {
      "id": "66",
      "title": "Move Pieces to Obtain a String",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/move-pieces-to-obtain-a-string",
      "platform": "Leetcode"
  },
  {
      "id": "67",
      "title": "Sentence Similarity III",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/sentence-similarity-iii",
      "platform": "Leetcode"
  },
  {
      "id": "68",
      "title": "Next Permutation",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/next-permutation",
      "platform": "Leetcode"
  },
  {
      "id": "69",
      "title": "Next Greater Element III",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Two Pointers"
      ],
      "problemLink": "https://leetcode.com/problems/next-greater-element-iii",
      "platform": "Leetcode"
  },
  {
      "id": "70",
      "title": "Range Sum Query - Immutable",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/range-sum-query-immutable",
      "platform": "Leetcode"
  },
  {
      "id": "71",
      "title": "Left and Right Sum Differences ",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/left-and-right-sum-differences/description/",
      "platform": "Leetcode"
  },
  {
      "id": "72",
      "title": "Count Vowel Strings in Ranges",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/count-vowel-strings-in-ranges/description/",
      "platform": "Leetcode"
  },
  {
      "id": "73",
      "title": "Minimum Penalty for a Shop",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-penalty-for-a-shop/description/",
      "platform": "Leetcode"
  },
  {
      "id": "74",
      "title": "Find Good Days to Rob the Bank",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/find-good-days-to-rob-the-bank/",
      "platform": "Leetcode"
  },
  {
      "id": "75",
      "title": "Sum of Absolute Differences in a Sorted Array",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/description/",
      "platform": "Leetcode"
  },
  {
      "id": "76",
      "title": "Product of Array Except Self",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/product-of-array-except-self",
      "platform": "Leetcode"
  },
  {
      "id": "77",
      "title": "Product of the Last K Numbers",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/product-of-the-last-k-numbers/description/",
      "platform": "Leetcode"
  },
  {
      "id": "78",
      "title": "Removing Minimum Number of Magic Beans",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/removing-minimum-number-of-magic-beans/description/",
      "platform": "Leetcode"
  },
  {
      "id": "79",
      "title": "Find All Good Indices",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/find-all-good-indices/description/",
      "platform": "Leetcode"
  },
  {
      "id": "80",
      "title": "Movement of Robots",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/movement-of-robots/description/",
      "platform": "Leetcode"
  },
  {
      "id": "81",
      "title": "Range Sum Query 2D - Immutable",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/range-sum-query-2d-immutable",
      "platform": "Leetcode"
  },
  {
      "id": "82",
      "title": "Increment Submatrices by One",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/increment-submatrices-by-one/",
      "platform": "Leetcode"
  },
  {
      "id": "83",
      "title": "Power of Heroes",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/power-of-heroes/description/",
      "platform": "Leetcode"
  },
  {
      "id": "84",
      "title": "Minimum Cost to Make Array Equal",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-cost-to-make-array-equal/description/",
      "platform": "Leetcode"
  },
  {
      "id": "85",
      "title": "Maximum Population Year",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-population-year/",
      "platform": "Leetcode"
  },
  {
      "id": "86",
      "title": "Points That Intersect With Cars",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/points-that-intersect-with-cars/",
      "platform": "Leetcode"
  },
  {
      "id": "87",
      "title": "Pongal Bunk",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://www.codechef.com/problems/COWA19B",
      "platform": "Leetcode"
  },
  {
      "id": "88",
      "title": "Car Pooling",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/car-pooling/",
      "platform": "Leetcode"
  },
  {
      "id": "89",
      "title": "My Calendar II",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/my-calendar-ii/",
      "platform": "Leetcode"
  },
  {
      "id": "90",
      "title": "Shifting Letters II",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/shifting-letters-ii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "91",
      "title": "Perfect Rectangle",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/perfect-rectangle/description/",
      "platform": "Leetcode"
  },
  {
      "id": "92",
      "title": "Rectangle Area II",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/rectangle-area-ii/",
      "platform": "Leetcode"
  },
  {
      "id": "93",
      "title": "Number of Flowers in Full Bloom",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-flowers-in-full-bloom/description/",
      "platform": "Leetcode"
  },
  {
      "id": "94",
      "title": "Convert 1D Array Into 2D Array",
      "problemLink": "https://leetcode.com/problems/convert-1d-array-into-2d-array/description/",
      "articleLink": "https://read.learnyard.com/dsa/convert-1d-array-into-2d-array/",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "95",
      "title": "Row With Maximum Ones",
      "problemLink": "https://leetcode.com/problems/row-with-maximum-ones ",
      "articleLink": "https://read.learnyard.com/dsa/row-with-maximum-ones/",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "96",
      "title": "Richest Customer Wealth",
      "problemLink": "https://leetcode.com/problems/richest-customer-wealth/description/  ",
      "articleLink": "https://read.learnyard.com/dsa/richest-customer-wealth/",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "97",
      "title": "Modify the Matrix",
      "problemLink": "https://leetcode.com/problems/modify-the-matrix/description/ ",
      "articleLink": "https://read.learnyard.com/dsa/modify-the-matrix/",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "98",
      "title": "Lucky Numbers in a Matrix",
      "problemLink": "https://leetcode.com/problems/lucky-numbers-in-a-matrix/description/  ",
      "articleLink": "https://read.learnyard.com/dsa/lucky-number-in-a-matrix/",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "99",
      "title": "Equal Row and Column Pairs",
      "problemLink": "https://leetcode.com/problems/equal-row-and-column-pairs/description/ ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "100",
      "title": "Set Matrix Zeroes",
      "problemLink": "https://leetcode.com/problems/set-matrix-zeroes ",
      "articleLink": "https://read.learnyard.com/dsa/set-matrix-zeroes/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "101",
      "title": "Difference Between Ones and Zeros in Row and Column",
      "problemLink": "https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "102",
      "title": "Find Valid Matrix Given Row and Column Sums",
      "problemLink": "https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "103",
      "title": "Matrix Diagonal Sum",
      "problemLink": "https://leetcode.com/problems/matrix-diagonal-sum/description/ ",
      "articleLink": "https://read.learnyard.com/dsa/matrix-diagonal-sum/",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "104",
      "title": "Prime in Diagonal",
      "problemLink": "https://leetcode.com/problems/prime-in-diagonal/description/ ",
      "articleLink": "https://read.learnyard.com/dsa/prime-in-diagonal/",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "105",
      "title": "Check if Matrix is X-Matrix",
      "problemLink": "https://leetcode.com/problems/check-if-matrix-is-x-matrix/description/ ",
      "articleLink": "https://read.learnyard.com/dsa/check-if-matrix-if-x-matrix/",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "106",
      "title": "Sort the Matrix Diagonally",
      "problemLink": "https://leetcode.com/problems/sort-the-matrix-diagonally ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "107",
      "title": "Queens That Can Attack the King",
      "problemLink": "https://leetcode.com/problems/queens-that-can-attack-the-king/description/ ",
      "articleLink": "https://read.learnyard.com/dsa/queens-that-can-attack-the-king-solution/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "108",
      "title": "Diagonal Traverse",
      "problemLink": "https://leetcode.com/problems/diagonal-traverse ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "109",
      "title": "Minimum Operations to Write the Letter Y on a Grid",
      "problemLink": "https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/description/ ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "110",
      "title": "Shift 2D Grid",
      "problemLink": "https://leetcode.com/problems/shift-2d-grid ",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "111",
      "title": "Matrix Similarity After Cyclic Shifts",
      "problemLink": "https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/description/ ",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "112",
      "title": "Transpose Matrix",
      "problemLink": "https://leetcode.com/problems/transpose-matrix ",
      "articleLink": "https://read.learnyard.com/dsa/transpose-matrix/",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "113",
      "title": "Rotate Image",
      "problemLink": "https://leetcode.com/problems/rotate-image/ ",
      "articleLink": "https://read.learnyard.com/dsa/rotate-image",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "114",
      "title": "Rotating the Box",
      "problemLink": "https://leetcode.com/problems/rotating-the-box ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "115",
      "title": "Cyclically Rotating a Grid",
      "problemLink": "https://leetcode.com/problems/cyclically-rotating-a-grid ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "116",
      "title": "Max Increase to Keep City Skyline",
      "problemLink": "https://leetcode.com/problems/max-increase-to-keep-city-skyline ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "117",
      "title": "Make a Square with the Same Color",
      "problemLink": "https://leetcode.com/problems/make-a-square-with-the-same-color/description/ ",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "118",
      "title": "Subrectangle Queries",
      "problemLink": "https://leetcode.com/problems/subrectangle-queries/ ",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "119",
      "title": "Matrix Block Sum",
      "problemLink": "https://leetcode.com/problems/matrix-block-sum/ ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "120",
      "title": "Largest Local Values in a Matrix",
      "problemLink": "https://leetcode.com/problems/largest-local-values-in-a-matrix ",
      "articleLink": "https://read.learnyard.com/dsa/largest-local-values-in-a-matrix/",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "121",
      "title": "Maximum Sum of an Hourglass",
      "problemLink": "https://leetcode.com/problems/maximum-sum-of-an-hourglass ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "122",
      "title": "Maximum Matrix Sum",
      "problemLink": "https://leetcode.com/problems/maximum-matrix-sum/description/ ",
      "articleLink": "https://read.learnyard.com/dsa/maximum-matrix-sum/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "123",
      "title": "Find the Grid of Region Average",
      "problemLink": "https://leetcode.com/problems/find-the-grid-of-region-average ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "124",
      "title": "Count Submatrices with Top-Left Element and Sum Less Than k",
      "problemLink": "https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "125",
      "title": "Find the Minimum Area to Cover All Ones I",
      "problemLink": "https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i   ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "126",
      "title": "Find the Minimum Area to Cover All Ones II",
      "problemLink": "https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-ii ",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "127",
      "title": "Spiral Matrix",
      "problemLink": "https://leetcode.com/problems/spiral-matrix ",
      "articleLink": "https://read.learnyard.com/dsa/spiral-matrix/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "128",
      "title": "Spiral Matrix II",
      "problemLink": "https://leetcode.com/problems/spiral-matrix-ii ",
      "articleLink": "https://read.learnyard.com/dsa/spiral-matrix-ii/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "129",
      "title": "Game of Life",
      "problemLink": "https://leetcode.com/problems/game-of-life ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "130",
      "title": "Valid Sudoku",
      "problemLink": "https://leetcode.com/problems/valid-sudoku ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "131",
      "title": "Check if Move is Legal",
      "problemLink": "https://leetcode.com/problems/check-if-move-is-legal ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "132",
      "title": "Valid Tic-Tac-Toe State",
      "problemLink": "https://leetcode.com/problems/valid-tic-tac-toe-state ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "133",
      "title": "Matrix Cells in Distance Order",
      "problemLink": "https://leetcode.com/problems/matrix-cells-in-distance-order",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "134",
      "title": "Number of Laser Beams in a Bank",
      "problemLink": "https://leetcode.com/problems/number-of-laser-beams-in-a-bank ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "135",
      "title": "Where Will the Ball Fall",
      "problemLink": "https://leetcode.com/problems/where-will-the-ball-fall ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "136",
      "title": "Image Overlap",
      "problemLink": "https://leetcode.com/problems/image-overlap ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "137",
      "title": "Minimum Operations to Make a Uni-Value Grid",
      "problemLink": "https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid ",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Matrix"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "138",
      "title": "Find Common Elements Between Two Arrays",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/find-common-elements-between-two-arrays",
      "platform": "Leetcode"
  },
  {
      "id": "139",
      "title": "Contains Duplicate",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/contains-duplicate",
      "platform": "Leetcode"
  },
  {
      "id": "140",
      "title": "Sum of Unique Elements",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/sum-of-unique-elements",
      "platform": "Leetcode"
  },
  {
      "id": "141",
      "title": "Find All Duplicates in an Array",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/find-all-duplicates-in-an-array",
      "platform": "Leetcode"
  },
  {
      "id": "142",
      "title": "Check if All Characters Have Equal Number of Occurrences",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences",
      "platform": "Leetcode"
  },
  {
      "id": "143",
      "title": "Unique Number of Occurrences",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/unique-number-of-occurrences",
      "platform": "Leetcode"
  },
  {
      "id": "144",
      "title": "Find Common Characters",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/find-common-characters",
      "platform": "Leetcode"
  },
  {
      "id": "145",
      "title": "Number of Good Pairs",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-good-pairs",
      "platform": "Leetcode"
  },
  {
      "id": "146",
      "title": "Permutation Difference Between Two Strings",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/permutation-difference-between-two-strings",
      "platform": "Leetcode"
  },
  {
      "id": "147",
      "title": "Check if the Sentence is Pangram",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/check-if-the-sentence-is-pangram",
      "platform": "Leetcode"
  },
  {
      "id": "148",
      "title": "Decode the Message",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/decode-the-message",
      "platform": "Leetcode"
  },
  {
      "id": "149",
      "title": "Replace Elements in an Array",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/replace-elements-in-an-array",
      "platform": "Leetcode"
  },
  {
      "id": "150",
      "title": "Count the Number of Special Characters II",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/count-the-number-of-special-characters-ii",
      "platform": "Leetcode"
  },
  {
      "id": "151",
      "title": "Reconstruct Original Digits from English",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/reconstruct-original-digits-from-english",
      "platform": "Leetcode"
  },
  {
      "id": "152",
      "title": "Integer to Roman",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/integer-to-roman",
      "platform": "Leetcode"
  },
  {
      "id": "153",
      "title": "Find Words That Can Be Formed by Characters",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/find-words-that-can-be-formed-by-characters",
      "platform": "Leetcode"
  },
  {
      "id": "154",
      "title": "Find the XOR of Numbers Which Appear Twice",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice",
      "platform": "Leetcode"
  },
  {
      "id": "155",
      "title": "Sort the People",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/sort-the-people",
      "platform": "Leetcode"
  },
  {
      "id": "156",
      "title": "Form Smallest Number from Two-Digit Arrays",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays",
      "platform": "Leetcode"
  },
  {
      "id": "157",
      "title": "Increasing Decreasing String",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/increasing-decreasing-string",
      "platform": "Leetcode"
  },
  {
      "id": "158",
      "title": "Sort Array by Increasing Frequency",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/sort-array-by-increasing-frequency",
      "platform": "Leetcode"
  },
  {
      "id": "159",
      "title": "Sort Characters by Frequency",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/sort-characters-by-frequency",
      "platform": "Leetcode"
  },
  {
      "id": "160",
      "title": "Merge Similar Items",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/merge-similar-items",
      "platform": "Leetcode"
  },
  {
      "id": "161",
      "title": "Substrings of Size Three with Distinct Characters",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters",
      "platform": "Leetcode"
  },
  {
      "id": "162",
      "title": "Clear Digits",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/clear-digits",
      "platform": "Leetcode"
  },
  {
      "id": "163",
      "title": "HTML Entity Parser",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/html-entity-parser",
      "platform": "Leetcode"
  },
  {
      "id": "164",
      "title": "Largest Substring Between Two Equal Characters",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/largest-substring-between-two-equal-characters",
      "platform": "Leetcode"
  },
  {
      "id": "165",
      "title": "Remove Letter to Equalize Frequency",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/remove-letter-to-equalize-frequency",
      "platform": "Leetcode"
  },
  {
      "id": "166",
      "title": "Distribute Candies",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/distribute-candies",
      "platform": "Leetcode"
  },
  {
      "id": "167",
      "title": "Path Crossing",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/path-crossing",
      "platform": "Leetcode"
  },
  {
      "id": "168",
      "title": "Buddy Strings",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/buddy-strings",
      "platform": "Leetcode"
  },
  {
      "id": "169",
      "title": "Word Pattern",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/word-pattern",
      "platform": "Leetcode"
  },
  {
      "id": "170",
      "title": "Valid Anagram",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/valid-anagram",
      "platform": "Leetcode"
  },
  {
      "id": "171",
      "title": "Find Resultant Array After Removing Anagrams",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/find-resultant-array-after-removing-anagrams",
      "platform": "Leetcode"
  },
  {
      "id": "172",
      "title": "Group Anagrams",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/group-anagrams",
      "platform": "Leetcode"
  },
  {
      "id": "173",
      "title": "Majority Element",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/majority-element/",
      "platform": "Leetcode"
  },
  {
      "id": "174",
      "title": "Majority Element II",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/majority-element-ii",
      "platform": "Leetcode"
  },
  {
      "id": "175",
      "title": "Find All Lonely Numbers in the Array",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/find-all-lonely-numbers-in-the-array",
      "platform": "Leetcode"
  },
  {
      "id": "176",
      "title": "Smallest Missing Integer Greater Than Sequential Prefix Sum",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum",
      "platform": "Leetcode"
  },
  {
      "id": "177",
      "title": "First Missing Positive",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/first-missing-positive",
      "platform": "Leetcode"
  },
  {
      "id": "178",
      "title": "Shortest Impossible Sequence of Rolls",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/shortest-impossible-sequence-of-rolls",
      "platform": "Leetcode"
  },
  {
      "id": "179",
      "title": "Find Occurrences of an Element in an Array",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array",
      "platform": "Leetcode"
  },
  {
      "id": "180",
      "title": "Redistribute Characters to Make All Strings Equal",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal",
      "platform": "Leetcode"
  },
  {
      "id": "181",
      "title": "Isomorphic Strings",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/isomorphic-strings",
      "platform": "Leetcode"
  },
  {
      "id": "182",
      "title": "Groups of Special Equivalent Strings",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/groups-of-special-equivalent-strings",
      "platform": "Leetcode"
  },
  {
      "id": "183",
      "title": "Word Subsets",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/word-subsets",
      "platform": "Leetcode"
  },
  {
      "id": "184",
      "title": "Find the Maximum Number of Elements in Subset",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset",
      "platform": "Leetcode"
  },
  {
      "id": "185",
      "title": "People Whose List of Favorite Companies is Not a Subset of Another List",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list",
      "platform": "Leetcode"
  },
  {
      "id": "186",
      "title": "Count the Number of Good Partitions",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/count-the-number-of-good-partitions",
      "platform": "Leetcode"
  },
  {
      "id": "187",
      "title": "Optimal Partition of String",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/optimal-partition-of-string",
      "platform": "Leetcode"
  },
  {
      "id": "188",
      "title": "Custom Sort String",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/custom-sort-string",
      "platform": "Leetcode"
  },
  {
      "id": "189",
      "title": "Finding the Users Active Minutes",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/finding-the-users-active-minutes",
      "platform": "Leetcode"
  },
  {
      "id": "190",
      "title": "Convert an Array into a 2D Array with Conditions",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions",
      "platform": "Leetcode"
  },
  {
      "id": "191",
      "title": "Group the People Given the Group Size They Belong To",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to",
      "platform": "Leetcode"
  },
  {
      "id": "192",
      "title": "Evaluate the Bracket Pairs of a String",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string",
      "platform": "Leetcode"
  },
  {
      "id": "193",
      "title": "Minimum Number of Operations to Make Word K-Periodic",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic",
      "platform": "Leetcode"
  },
  {
      "id": "194",
      "title": "Can Convert String in K Moves",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/can-convert-string-in-k-moves",
      "platform": "Leetcode"
  },
  {
      "id": "195",
      "title": "Restore the Array from Adjacent Pairs",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/restore-the-array-from-adjacent-pairs",
      "platform": "Leetcode"
  },
  {
      "id": "196",
      "title": "Tuple with Same Product",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/tuple-with-same-product",
      "platform": "Leetcode"
  },
  {
      "id": "197",
      "title": "Split the Array to Make Coprime Products",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/split-the-array-to-make-coprime-products",
      "platform": "Leetcode"
  },
  {
      "id": "198",
      "title": "4Sum II",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/4sum-ii",
      "platform": "Leetcode"
  },
  {
      "id": "199",
      "title": "Count Artifacts That Can Be Extracted",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/count-artifacts-that-can-be-extracted",
      "platform": "Leetcode"
  },
  {
      "id": "200",
      "title": "Brick Wall",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/brick-wall",
      "platform": "Leetcode"
  },
  {
      "id": "201",
      "title": "Pairs of Songs with Total Durations Divisible by 60",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60",
      "platform": "Leetcode"
  },
  {
      "id": "202",
      "title": "Alphabet Board Path",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/alphabet-board-path",
      "platform": "Leetcode"
  },
  {
      "id": "203",
      "title": "Vowel Spellchecker",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/vowel-spellchecker",
      "platform": "Leetcode"
  },
  {
      "id": "204",
      "title": "Bulls and Cows",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/bulls-and-cows",
      "platform": "Leetcode"
  },
  {
      "id": "205",
      "title": "Card Flipping Game",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/card-flipping-game",
      "platform": "Leetcode"
  },
  {
      "id": "206",
      "title": "Maximum Size of a Set After Removals",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-size-of-a-set-after-removals",
      "platform": "Leetcode"
  },
  {
      "id": "207",
      "title": "Minimum Absolute Difference Queries",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-absolute-difference-queries",
      "platform": "Leetcode"
  },
  {
      "id": "208",
      "title": "Check if Array Pairs are Divisible by K",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k",
      "platform": "Leetcode"
  },
  {
      "id": "209",
      "title": "Count Pairs That Form a Complete Day II",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii",
      "platform": "Leetcode"
  },
  {
      "id": "210",
      "title": "Count Number of Bad Pairs",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/count-number-of-bad-pairs",
      "platform": "Leetcode"
  },
  {
      "id": "211",
      "title": "Minimum Seconds to Equalize a Circular Array",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array",
      "platform": "Leetcode"
  },
  {
      "id": "212",
      "title": "Sum of Imbalance Numbers of All Subarrays",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/sum-of-imbalance-numbers-of-all-subarrays",
      "platform": "Leetcode"
  },
  {
      "id": "213",
      "title": "Grid Illumination",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/grid-illumination",
      "platform": "Leetcode"
  },
  {
      "id": "214",
      "title": "Maximum Equal Frequency",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-equal-frequency",
      "platform": "Leetcode"
  },
  {
      "id": "215",
      "title": "Rearranging Fruits",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Hashing"
      ],
      "problemLink": "https://leetcode.com/problems/rearranging-fruits",
      "platform": "Leetcode"
  },
  {
      "id": "216",
      "title": "Subarray Sum Equals K",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing",
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/subarray-sum-equals-k/description/",
      "articleLink": "https://read.learnyard.com/dsa/subarray-sum-equals-k/",
      "platform": "Leetcode"
  },
  {
      "id": "217",
      "title": "Subarray Sums Divisible by K",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing",
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/subarray-sums-divisible-by-k/description/",
      "platform": "Leetcode"
  },
  {
      "id": "218",
      "title": "Make Sum Divisible by P",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing",
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/make-sum-divisible-by-p/description/",
      "platform": "Leetcode"
  },
  {
      "id": "219",
      "title": "Count Number of Bad Pairs",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing",
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/count-number-of-bad-pairs/description/",
      "platform": "Leetcode"
  },
  {
      "id": "220",
      "title": "Continuous Subarray Sum",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing",
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/continuous-subarray-sum",
      "platform": "Leetcode"
  },
  {
      "id": "221",
      "title": "Count of Interesting Subarrays",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing",
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/count-of-interesting-subarrays/description/",
      "platform": "Leetcode"
  },
  {
      "id": "222",
      "title": "Count Number of Nice Subarrays",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing",
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/count-number-of-nice-subarrays/description/",
      "platform": "Leetcode"
  },
  {
      "id": "223",
      "title": "Count Beautiful Substrings II",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Hashing",
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/count-beautiful-substrings-ii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "224",
      "title": "Sum of Digit Differences of All Pairs",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing",
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/description/",
      "platform": "Leetcode"
  },
  {
      "id": "225",
      "title": "Binary Subarrays with Sum",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing",
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/binary-subarrays-with-sum/description/",
      "platform": "Leetcode"
  },
  {
      "id": "226",
      "title": "Number of Wonderful Substrings",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing",
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-wonderful-substrings/description/",
      "platform": "Leetcode"
  },
  {
      "id": "227",
      "title": "Count the Number of Beautiful Subarrays",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Hashing",
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/description/",
      "platform": "Leetcode"
  },
  {
      "id": "228",
      "title": "Number of Submatrices That Sum to Target",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Hashing",
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/description/",
      "platform": "Leetcode"
  },
  {
      "id": "229",
      "title": "Count Subarrays with Median K",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Hashing",
          "Prefix Sum"
      ],
      "problemLink": "https://leetcode.com/problems/count-subarrays-with-median-k/description/",
      "platform": "Leetcode"
  },
  {
      "id": "9999",
      "title": "Substrings of Size Three with Distinct Characters",
      "problemLink": "https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "230",
      "title": "Find All Anagrams in a String",
      "problemLink": "https://leetcode.com/problems/find-all-anagrams-in-a-string/description/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "231",
      "title": "Permutation in String",
      "problemLink": "https://leetcode.com/problems/permutation-in-string/description/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "232",
      "title": "Check If a String Contains All Binary Codes of Size K",
      "problemLink": "https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/description/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "233",
      "title": "Maximum Number of Vowels in a Substring of Given Length",
      "problemLink": "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "234",
      "title": "Maximum Average Subarray I",
      "problemLink": "https://leetcode.com/problems/maximum-average-subarray-i/description/",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "235",
      "title": "Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold",
      "problemLink": "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/description/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "236",
      "title": "K Radius Subarray Averages",
      "problemLink": "https://leetcode.com/problems/k-radius-subarray-averages/description/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "237",
      "title": "Maximum Sum of Distinct Subarrays With Length K",
      "problemLink": "https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "238",
      "title": "Sliding Subarray Beauty",
      "problemLink": "https://leetcode.com/problems/sliding-subarray-beauty/description/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "239",
      "title": "Maximum Points You Can Obtain from Cards",
      "problemLink": "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "240",
      "title": "Sliding Window Median",
      "problemLink": "https://leetcode.com/problems/sliding-window-median/description/",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "241",
      "title": "Sliding Window Maximum",
      "problemLink": "https://leetcode.com/problems/sliding-window-maximum/",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "242",
      "title": "Max Value of Equation",
      "problemLink": "https://leetcode.com/problems/max-value-of-equation/description/",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "243",
      "title": "Maximum Sum of 3 Non-Overlapping Subarrays",
      "problemLink": "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/description/",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "244",
      "title": "Longest Substring Without Repeating Characters",
      "problemLink": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "245",
      "title": "Longest Repeating Character Replacement",
      "problemLink": "https://leetcode.com/problems/longest-repeating-character-replacement/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "246",
      "title": "Maximum Number of Occurrences of a Substring",
      "problemLink": "https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/description/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "247",
      "title": "Max Consecutive Ones III",
      "problemLink": "https://leetcode.com/problems/max-consecutive-ones-iii/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "248",
      "title": "Count the Number of Substrings With Dominant Ones",
      "problemLink": "https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "249",
      "title": "Minimum Window Substring",
      "problemLink": "https://leetcode.com/problems/minimum-window-substring/",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "250",
      "title": "Substring with Concatenation of All Words",
      "problemLink": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "251",
      "title": "Minimum Size Subarray Sum",
      "problemLink": "https://leetcode.com/problems/minimum-size-subarray-sum/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "252",
      "title": "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit",
      "problemLink": "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/description/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "253",
      "title": "Fruit Into Baskets",
      "problemLink": "https://leetcode.com/problems/fruit-into-baskets/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "254",
      "title": "Subarray Product Less Than K",
      "problemLink": "https://leetcode.com/problems/subarray-product-less-than-k/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "255",
      "title": "Grumpy Bookstore Owner",
      "problemLink": "https://leetcode.com/problems/grumpy-bookstore-owner/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "256",
      "title": "Moving Stones Until Consecutive II",
      "problemLink": "https://leetcode.com/problems/moving-stones-until-consecutive-ii/description/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "257",
      "title": "Count Number of Nice Subarrays",
      "problemLink": "https://leetcode.com/problems/count-number-of-nice-subarrays/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "258",
      "title": "Number of Subarrays with Bounded Maximum",
      "problemLink": "https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "259",
      "title": "Maximum Erasure Value",
      "problemLink": "https://leetcode.com/problems/maximum-erasure-value/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "260",
      "title": "Longest Subarray of 1's After Deleting One Element",
      "problemLink": "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "261",
      "title": "Count the Number of Good Subarrays",
      "problemLink": "https://leetcode.com/problems/count-the-number-of-good-subarrays/description/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "262",
      "title": "Minimum Consecutive Cards to Pick Up",
      "problemLink": "https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/description/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "263",
      "title": "Minimum Operations to Reduce X to Zero",
      "problemLink": "https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/description/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "264",
      "title": "Frequency of the Most Frequent Element",
      "problemLink": "https://leetcode.com/problems/frequency-of-the-most-frequent-element/description/",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "265",
      "title": "Subarrays with K Different Integers",
      "problemLink": "https://leetcode.com/problems/subarrays-with-k-different-integers/description/",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Sliding Window"
      ],
      "platform": "Leetcode"
  },
  {
      "id": "266",
      "title": "Convert Binary Number in a Linked List to Integer",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/",
      "platform": "Leetcode"
  },
  {
      "id": "267",
      "title": "Intersection of Two Linked Lists",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/intersection-of-two-linked-lists/description/",
      "platform": "Leetcode"
  },
  {
      "id": "268",
      "title": "Middle of the Linked List",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/middle-of-the-linked-list",
      "platform": "Leetcode"
  },
  {
      "id": "269",
      "title": "Linked List Cycle",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/linked-list-cycle/",
      "platform": "Leetcode"
  },
  {
      "id": "270",
      "title": "Linked List Cycle II",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/linked-list-cycle-ii/",
      "platform": "Leetcode"
  },
  {
      "id": "271",
      "title": "Find Length of Loop",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/find-length-of-loop/0",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "272",
      "title": "Reverse Linked List",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/reverse-linked-list",
      "platform": "Leetcode"
  },
  {
      "id": "273",
      "title": "Palindrome Linked List",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/palindrome-linked-list",
      "platform": "Leetcode"
  },
  {
      "id": "274",
      "title": "Reverse Nodes in k-Group",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/reverse-nodes-in-k-group",
      "platform": "Leetcode"
  },
  {
      "id": "275",
      "title": "Odd Even Linked List",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/odd-even-linked-list/",
      "platform": "Leetcode"
  },
  {
      "id": "276",
      "title": "Remove Duplicates from Sorted List",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/",
      "platform": "Leetcode"
  },
  {
      "id": "277",
      "title": "Remove Nth Node From End of List",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/",
      "platform": "Leetcode"
  },
  {
      "id": "278",
      "title": "Delete the Middle Node of a Linked List",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/",
      "platform": "Leetcode"
  },
  {
      "id": "279",
      "title": "Add 1 to a Linked List Number",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/0",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "280",
      "title": "Add Two Numbers",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/add-two-numbers/description/",
      "platform": "Leetcode"
  },
  {
      "id": "281",
      "title": "Sort a Linked List of 0s, 1s, and 2s",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/0",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "282",
      "title": "Sort List",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/sort-list/",
      "platform": "Leetcode"
  },
  {
      "id": "283",
      "title": "Linked List Random Node",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/linked-list-random-node/description/",
      "platform": "Leetcode"
  },
  {
      "id": "284",
      "title": "Copy List with Random Pointer",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/copy-list-with-random-pointer/description/",
      "platform": "Leetcode"
  },
  {
      "id": "285",
      "title": "Flattening a Linked List",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "286",
      "title": "Merge Two Sorted Lists",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/merge-two-sorted-lists/description/",
      "platform": "Leetcode"
  },
  {
      "id": "287",
      "title": "Merge k Sorted Lists",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/merge-k-sorted-lists/description/",
      "platform": "Leetcode"
  },
  {
      "id": "288",
      "title": "Design HashSet",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/design-hashset/description/",
      "platform": "Leetcode"
  },
  {
      "id": "289",
      "title": "Design HashMap",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/design-hashmap/description/",
      "platform": "Leetcode"
  },
  {
      "id": "290",
      "title": "Design Browser History",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/design-browser-history/description/",
      "platform": "Leetcode"
  },
  {
      "id": "291",
      "title": "Design a Text Editor",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/design-a-text-editor/description/",
      "platform": "Leetcode"
  },
  {
      "id": "292",
      "title": "All O'one Data Structure",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/all-oone-data-structure/",
      "platform": "Leetcode"
  },
  {
      "id": "293",
      "title": "LRU Cache",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/lru-cache/",
      "platform": "Leetcode"
  },
  {
      "id": "294",
      "title": "LFU Cache",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Linked List"
      ],
      "problemLink": "https://leetcode.com/problems/lfu-cache",
      "platform": "Leetcode"
  },
  {
      "id": "295",
      "title": "Valid Parentheses",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/valid-parentheses/",
      "platform": "Leetcode"
  },
  {
      "id": "296",
      "title": "Maximum Nesting Depth of the Parentheses",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses",
      "platform": "Leetcode"
  },
  {
      "id": "297",
      "title": "Remove Outermost Parentheses",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/remove-outermost-parentheses",
      "platform": "Leetcode"
  },
  {
      "id": "298",
      "title": "Minimum Add to Make Parentheses Valid",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/",
      "platform": "Leetcode"
  },
  {
      "id": "299",
      "title": "Minimum Remove to Make Valid Parentheses",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses",
      "platform": "Leetcode"
  },
  {
      "id": "300",
      "title": "Maximum Nesting Depth of Two Valid Parentheses Strings",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings",
      "platform": "Leetcode"
  },
  {
      "id": "301",
      "title": "Check if a Parentheses String Can Be Valid",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid",
      "platform": "Leetcode"
  },
  {
      "id": "302",
      "title": "Reverse Substrings Between Each Pair of Parentheses",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses",
      "platform": "Leetcode"
  },
  {
      "id": "303",
      "title": "Score of Parentheses",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/score-of-parentheses",
      "platform": "Leetcode"
  },
  {
      "id": "304",
      "title": "Minimum Insertions to Balance a Parentheses String",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string",
      "platform": "Leetcode"
  },
  {
      "id": "305",
      "title": "Longest Valid Parentheses",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/longest-valid-parentheses/",
      "platform": "Leetcode"
  },
  {
      "id": "306",
      "title": "Redundant Parenthesis",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/redundant-parenthesis--170647/1",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "307",
      "title": "Min Stack",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/min-stack/",
      "platform": "Leetcode"
  },
  {
      "id": "308",
      "title": "Maximum Frequency Stack",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-frequency-stack/",
      "platform": "Leetcode"
  },
  {
      "id": "309",
      "title": "Design a Stack With Increment Operation",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/design-a-stack-with-increment-operation/description/",
      "platform": "Leetcode"
  },
  {
      "id": "310",
      "title": "Dinner Plate Stacks",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/dinner-plate-stacks/description/",
      "platform": "Leetcode"
  },
  {
      "id": "311",
      "title": "Merge Intervals",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/merge-intervals/",
      "platform": "Leetcode"
  },
  {
      "id": "312",
      "title": "Insert Intervals",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/insert-interval/",
      "platform": "Leetcode"
  },
  {
      "id": "313",
      "title": "Asteroid Collision",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/asteroid-collision/",
      "platform": "Leetcode"
  },
  {
      "id": "314",
      "title": "Construct Smallest Number From DI String",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/construct-smallest-number-from-di-string/",
      "platform": "Leetcode"
  },
  {
      "id": "315",
      "title": "Evaluate Reverse Polish Notation",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
      "platform": "Leetcode"
  },
  {
      "id": "316",
      "title": "Simplify Path",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/simplify-path/",
      "platform": "Leetcode"
  },
  {
      "id": "317",
      "title": "Basic Calculator",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/basic-calculator/",
      "platform": "Leetcode"
  },
  {
      "id": "318",
      "title": "Basic Calculator II",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/basic-calculator-ii/",
      "platform": "Leetcode"
  },
  {
      "id": "319",
      "title": "Basic Calculator IV",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/basic-calculator-iv/",
      "platform": "Leetcode"
  },
  {
      "id": "320",
      "title": "Replace Non-Coprime Numbers in Array",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/replace-non-coprime-numbers-in-array/",
      "platform": "Leetcode"
  },
  {
      "id": "321",
      "title": "Robot Collisons",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/robot-collisions/",
      "platform": "Leetcode"
  },
  {
      "id": "322",
      "title": "Number of atoms",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-atoms/description/",
      "platform": "Leetcode"
  },
  {
      "id": "323",
      "title": "Final Prices With a Special Discount in a Shop",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop",
      "platform": "Leetcode"
  },
  {
      "id": "324",
      "title": "Next Greater Element I",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/next-greater-element-i",
      "articleLink": "https://read.learnyard.com/dsa/next-greater-element-i/",
      "platform": "Leetcode"
  },
  {
      "id": "325",
      "title": "Next Greater Element II",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/next-greater-element-ii",
      "platform": "Leetcode"
  },
  {
      "id": "326",
      "title": "Next Greater Element IV",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/next-greater-element-iv",
      "platform": "Leetcode"
  },
  {
      "id": "327",
      "title": "Daily Temperatures",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/daily-temperatures",
      "platform": "Leetcode"
  },
  {
      "id": "328",
      "title": "Car Fleet",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/car-fleet/",
      "platform": "Leetcode"
  },
  {
      "id": "329",
      "title": "Car Fleet II",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/car-fleet-ii/",
      "platform": "Leetcode"
  },
  {
      "id": "330",
      "title": "132 Pattern",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/132-pattern",
      "platform": "Leetcode"
  },
  {
      "id": "331",
      "title": "Smallest Subsequence of Distinct Characters",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/smallest-subsequence-of-distinct-characters",
      "platform": "Leetcode"
  },
  {
      "id": "332",
      "title": "Count Submatrices With All Ones",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/count-submatrices-with-all-ones",
      "platform": "Leetcode"
  },
  {
      "id": "333",
      "title": "Remove Duplicate Letters",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/remove-duplicate-letters",
      "platform": "Leetcode"
  },
  {
      "id": "334",
      "title": "The Number of Weak Characters in the Game",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/the-number-of-weak-characters-in-the-game",
      "platform": "Leetcode"
  },
  {
      "id": "335",
      "title": "Maximum Subarray Min-Product",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-subarray-min-product",
      "platform": "Leetcode"
  },
  {
      "id": "336",
      "title": "Sum of Subarray Minimums",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/sum-of-subarray-minimums",
      "platform": "Leetcode"
  },
  {
      "id": "337",
      "title": "Shortest Unsorted Continuous Subarray",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/shortest-unsorted-continuous-subarray",
      "platform": "Leetcode"
  },
  {
      "id": "338",
      "title": "Remove K Digits",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/remove-k-digits",
      "platform": "Leetcode"
  },
  {
      "id": "339",
      "title": "Beautiful Towers I",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/beautiful-towers-i/description/ ",
      "platform": "Leetcode"
  },
  {
      "id": "340",
      "title": "Beautiful Towers II",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/beautiful-towers-ii",
      "platform": "Leetcode"
  },
  {
      "id": "341",
      "title": "Online Stock Span",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/online-stock-span",
      "platform": "Leetcode"
  },
  {
      "id": "342",
      "title": "Minimum Number of Increments on Subarrays to Form a Target Array",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array",
      "platform": "Leetcode"
  },
  {
      "id": "343",
      "title": "Maximum Score of a Good Subarray",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-score-of-a-good-subarray",
      "platform": "Leetcode"
  },
  {
      "id": "344",
      "title": "Number of Visible People in a Queue",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-visible-people-in-a-queue",
      "platform": "Leetcode"
  },
  {
      "id": "345",
      "title": "Trapping Rain Water",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/trapping-rain-water",
      "platform": "Leetcode"
  },
  {
      "id": "346",
      "title": "Maximal Rectangle",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/maximal-rectangle",
      "platform": "Leetcode"
  },
  {
      "id": "347",
      "title": "Largest Rectangle in Histogram",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/largest-rectangle-in-histogram",
      "platform": "Leetcode"
  },
  {
      "id": "348",
      "title": "Create Maximum Number",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/create-maximum-number",
      "platform": "Leetcode"
  },
  {
      "id": "349",
      "title": "Find Building Where Alice And Bob Can Meet",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/",
      "platform": "Leetcode"
  },
  {
      "id": "350",
      "title": "Sum Of Total Strength Of Wizards",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/sum-of-total-strength-of-wizards/",
      "platform": "Leetcode"
  },
  {
      "id": "351",
      "title": "Find the Number of Subarrays Where Boundary Elements Are Maximum",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Stack"
      ],
      "problemLink": "https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/",
      "platform": "Leetcode"
  },
  {
      "id": "352",
      "title": "C++ STL (queue)",
      "problemLink": "https://www.geeksforgeeks.org/problems/c-stl-set-5-queue/1?page=2&category=Queue&sortBy=submissions",
      "difficulty": "Easy",
      "platform": "GeeksforGeeks",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "353",
      "title": "Implement Queue using Array",
      "problemLink": "https://www.geeksforgeeks.org/problems/implement-queue-using-array/1",
      "difficulty": "Easy",
      "platform": "GeeksforGeeks",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "354",
      "title": "Implement Stack using Queues",
      "problemLink": "https://leetcode.com/problems/implement-stack-using-queues/",
      "difficulty": "Easy",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "355",
      "title": "Implement Queue using Stacks",
      "problemLink": "https://leetcode.com/problems/implement-queue-using-stacks/",
      "difficulty": "Easy",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "356",
      "title": "Queue using Two Stacks",
      "problemLink": "https://www.geeksforgeeks.org/problems/queue-using-two-stacks/1?page=1&category=Queue&sortBy=submissions",
      "difficulty": "Easy",
      "platform": "GeeksforGeeks",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "357",
      "title": "Implement Queue using Linked List",
      "problemLink": "https://www.geeksforgeeks.org/problems/implement-queue-using-linked-list/1",
      "difficulty": "Easy",
      "platform": "GeeksforGeeks",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "358",
      "title": "Design Circular Queue",
      "problemLink": "https://leetcode.com/problems/design-circular-queue/",
      "difficulty": "Medium",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "359",
      "title": "Design Front Middle Back Queue",
      "problemLink": "https://leetcode.com/problems/design-front-middle-back-queue/",
      "difficulty": "Medium",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "360",
      "title": "N-Queue using Array",
      "problemLink": "https://www.naukri.com/code360/problems/n-queue-using-array_1170053?count=25&page=1&search=&sort_entity=order&sort_order=ASC",
      "difficulty": "Hard",
      "platform": "GeeksforGeeks",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "361",
      "title": "Reverse First K Elements of Queue",
      "problemLink": "https://www.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1?page=1&category=Queue&sortBy=submissions",
      "difficulty": "Easy",
      "platform": "GeeksforGeeks",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "362",
      "title": "First Non-Repeating Character in a Stream",
      "problemLink": "https://www.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream1216/1?page=1&category=Queue&sortBy=submissions",
      "difficulty": "Easy",
      "platform": "GeeksforGeeks",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "363",
      "title": "First Negative Integer in Every Window of Size K",
      "problemLink": "https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1?page=1&category=Queue&sortBy=submissions",
      "difficulty": "Medium",
      "platform": "GeeksforGeeks",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "364",
      "title": "Dota2 Senate",
      "problemLink": "https://leetcode.com/problems/dota2-senate/",
      "difficulty": "Medium",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "365",
      "title": "Find the Winner of the Circular Game",
      "problemLink": "https://leetcode.com/problems/find-the-winner-of-the-circular-game/",
      "difficulty": "Medium",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "366",
      "title": "Reveal Cards in Increasing Order",
      "problemLink": "https://leetcode.com/problems/reveal-cards-in-increasing-order/",
      "difficulty": "Medium",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "367",
      "title": "Minimum Number of K Consecutive Bit Flips",
      "problemLink": "https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/",
      "difficulty": "Hard",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "368",
      "title": "Stamping the Sequence",
      "problemLink": "https://leetcode.com/problems/stamping-the-sequence",
      "difficulty": "Hard",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "369",
      "title": "Deque Implementations",
      "problemLink": "https://www.geeksforgeeks.org/problems/deque-implementations/1?page=2&category=Queue&sortBy=submissions",
      "difficulty": "Easy",
      "platform": "GeeksforGeeks",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "370",
      "title": "Design Circular Deque",
      "problemLink": "https://leetcode.com/problems/design-circular-deque/",
      "difficulty": "Medium",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "371",
      "title": "Jump Game VI",
      "problemLink": "https://leetcode.com/problems/jump-game-vi/",
      "difficulty": "Medium",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "372",
      "title": "Continuous Subarrays",
      "problemLink": "https://leetcode.com/problems/continuous-subarrays/",
      "difficulty": "Medium",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "373",
      "title": "Max Value of Equation",
      "problemLink": "https://leetcode.com/problems/max-value-of-equation/",
      "difficulty": "Hard",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "374",
      "title": "Sliding Window Maximum",
      "problemLink": "https://leetcode.com/problems/sliding-window-maximum/",
      "difficulty": "Hard",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "375",
      "title": "Shortest Subarray with Sum at Least K",
      "problemLink": "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",
      "difficulty": "Hard",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "376",
      "title": "Constrained Subsequence Sum",
      "problemLink": "https://leetcode.com/problems/constrained-subsequence-sum/",
      "difficulty": "Hard",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Queues"
      ]
  },
  {
      "id": "377",
      "title": "Binary Search",
      "difficulty": "Easy",
      "problemLink": "https://leetcode.com/problems/binary-search/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "378",
      "title": "Guess Number Higher or Lower",
      "difficulty": "Easy",
      "problemLink": "https://leetcode.com/problems/guess-number-higher-or-lower/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "379",
      "title": "H-Index II",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/h-index-ii/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "380",
      "title": "Find First and Last Position of Element in Sorted Array",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "381",
      "title": "Special Array With X Elements Greater Than or Equal X",
      "difficulty": "Easy",
      "problemLink": "https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "382",
      "title": "Find Smallest Letter Greater Than Target",
      "difficulty": "Easy",
      "problemLink": "https://leetcode.com/problems/find-smallest-letter-greater-than-target/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "383",
      "title": "Longest Subsequence With Limited Sum",
      "difficulty": "Easy",
      "problemLink": "https://leetcode.com/problems/longest-subsequence-with-limited-sum/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "384",
      "title": "First Bad Version",
      "difficulty": "Easy",
      "problemLink": "https://leetcode.com/problems/first-bad-version/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "385",
      "title": "Arranging Coins",
      "difficulty": "Easy",
      "problemLink": "https://leetcode.com/problems/arranging-coins/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "386",
      "title": "Find the Distance Value Between Two Arrays",
      "difficulty": "Easy",
      "problemLink": "https://leetcode.com/problems/find-the-distance-value-between-two-arrays/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "387",
      "title": "Search Insert Position",
      "difficulty": "Easy",
      "problemLink": "https://leetcode.com/problems/search-insert-position/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "388",
      "title": "Find Target Indices After Sorting Array",
      "difficulty": "Easy",
      "problemLink": "https://leetcode.com/problems/find-target-indices-after-sorting-array/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "389",
      "title": "Find Right Interval",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/find-right-interval/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "390",
      "title": "Online Election",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/online-election/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "391",
      "title": "Most Beautiful Item for Each Query",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/most-beautiful-item-for-each-query/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "392",
      "title": "Time Based Key-Value Store",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/time-based-key-value-store/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "393",
      "title": "Random Pick with Weight",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/random-pick-with-weight/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "394",
      "title": "Plates Between Candles",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/plates-between-candles/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "395",
      "title": "Successful Pairs of Spells and Potions",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/successful-pairs-of-spells-and-potions/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "396",
      "title": "Range Frequency Queries",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/range-frequency-queries/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "397",
      "title": "Minimum Operations to Make All Array Elements Equal",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "398",
      "title": "Count Number of Rectangles Containing Each Point",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "399",
      "title": "Count the Number of Fair Pairs",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/count-the-number-of-fair-pairs/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "400",
      "title": "Minimum Absolute Sum Difference",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/minimum-absolute-sum-difference/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "401",
      "title": "Find the Longest Valid Obstacle Course at Each Position",
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "402",
      "title": "Find the Number of Subarrays Where Boundary Elements Are Maximum",
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "403",
      "title": "Count Negative Numbers in a Sorted Matrix",
      "difficulty": "Easy",
      "problemLink": "https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "404",
      "title": "Search a 2D Matrix",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/search-a-2d-matrix/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "405",
      "title": "Search a 2D Matrix II",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/search-a-2d-matrix-ii/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "406",
      "title": "Median in a Row-wise Sorted Matrix",
      "difficulty": "Hard",
      "problemLink": "https://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "407",
      "title": "Missing Number",
      "difficulty": "Easy",
      "problemLink": "https://leetcode.com/problems/missing-number/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "408",
      "title": "Kth Missing Positive Number",
      "difficulty": "Easy",
      "problemLink": "https://leetcode.com/problems/kth-missing-positive-number/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "409",
      "title": "Single Element in a Sorted Array",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/single-element-in-a-sorted-array/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "410",
      "title": "Minimum Common Value",
      "difficulty": "Easy",
      "problemLink": "https://leetcode.com/problems/minimum-common-value/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "411",
      "title": "Find the Duplicate Number",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/find-the-duplicate-number/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "412",
      "title": "Find Peak Element",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/find-peak-element/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "413",
      "title": "Find a Peak Element II",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/find-a-peak-element-ii/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "414",
      "title": "Find Minimum in Rotated Sorted Array",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "415",
      "title": "Peak Index in a Mountain Array",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/peak-index-in-a-mountain-array/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "416",
      "title": "Search in Rotated Sorted Array",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/search-in-rotated-sorted-array/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "417",
      "title": "Search in Rotated Sorted Array II",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "418",
      "title": "Rotation",
      "difficulty": "Medium",
      "problemLink": "https://www.geeksforgeeks.org/problems/rotation4723/1",
      "platform": "GeeksForGeeks",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "419",
      "title": "Find Minimum in Rotated Sorted Array II",
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "420",
      "title": "Find in Mountain Array",
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/find-in-mountain-array/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "421",
      "title": "Sqrt(x)",
      "difficulty": "Easy",
      "problemLink": "https://leetcode.com/problems/sqrtx/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "422",
      "title": "Capacity to Ship Packages Within D Days",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "423",
      "title": "Koko Eating Bananas",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/koko-eating-bananas/description/ ",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "424",
      "title": "Find the Smallest Divisor Given a Threshold",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "425",
      "title": "Minimum Number of Days to Make M Bouquets",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "426",
      "title": "Aggressive Cows",
      "difficulty": "Medium",
      "problemLink": "https://www.geeksforgeeks.org/problems/aggressive-cows/1",
      "platform": "GeeksForGeeks",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "427",
      "title": "Maximum Candies Allocated to K Children",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/maximum-candies-allocated-to-k-children/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "428",
      "title": "Most Profit Assigning Work",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/most-profit-assigning-work/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "429",
      "title": "Maximum Value at a Given Index in a Bounded Array",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "430",
      "title": "Maximum Side Length of a Square With Sum Less Than or Equal to Threshold",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/description/ ",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "431",
      "title": "Minimum Speed to Arrive on Time",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/minimum-speed-to-arrive-on-time/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "432",
      "title": "Minimum Time to Repair Cars",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/minimum-time-to-repair-cars/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "433",
      "title": "Maximum Number of Removable Characters",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/maximum-number-of-removable-characters/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "434",
      "title": "Heaters",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/heaters/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "435",
      "title": "Earliest Second to Mark Indices I",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/earliest-second-to-mark-indices-i/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "436",
      "title": "Maximum White Tiles Covered by a Carpet",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "437",
      "title": "Minimum Absolute Difference Between Elements with Constraint",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "438",
      "title": "Sell Diminishing-Valued Colored Balls",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/sell-diminishing-valued-colored-balls/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "439",
      "title": "Ugly Number III",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/ugly-number-iii/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "440",
      "title": "Minimize the Maximum of Two Arrays",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "441",
      "title": "Split Array Largest Sum",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/split-array-largest-sum/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "442",
      "title": "Maximum Running Time of N Computers",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/maximum-running-time-of-n-computers/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "443",
      "title": "Maximum Number of Robots Within Budget",
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/maximum-number-of-robots-within-budget/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "444",
      "title": "Maximum Number of Groups With Increasing Length",
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "445",
      "title": "Maximum Number of Tasks You Can Assign",
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "446",
      "title": "Median of Two Sorted Arrays",
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/median-of-two-sorted-arrays/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "447",
      "title": "Magnetic Force Between Two Balls",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/magnetic-force-between-two-balls/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "448",
      "title": "Maximum Tastiness of Candy Basket",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/maximum-tastiness-of-candy-basket/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "449",
      "title": "Minimum Limit of Balls in a Bag",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "450",
      "title": "Minimized Maximum of Products Distributed to Any Store",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "451",
      "title": "Minimize the Maximum Difference of Pairs",
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "452",
      "title": "Maximize the Minimum Powered City",
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/maximize-the-minimum-powered-city/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "453",
      "title": "Kth Smallest Number in Multiplication Table",
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "454",
      "title": "Find K-th Smallest Pair Distance",
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/find-k-th-smallest-pair-distance/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "455",
      "title": "Kth Smallest Element in a Sorted Matrix",
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "456",
      "title": "Find the Median of the Uniqueness Array",
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/find-the-median-of-the-uniqueness-array/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "457",
      "title": "Kth Smallest Product of Two Sorted Arrays",
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "458",
      "title": "Kth Smallest Amount With Single Denomination Combination",
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "459",
      "title": "Find the Kth Smallest Sum of a Matrix With Sorted Rows",
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/description/",
      "platform": "Leetcode",
      "status": "Unsolved",
      "tags": [
          "Binary Search"
      ]
  },
  {
      "id": "460",
      "title": "Decimal to Binary",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/decimal-to-binary-1587115620/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "461",
      "title": "Get, Set, Clear ith Bit",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/bit-manipulation-1666686020/0",
      "platform": "GeeksForGeeks",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "462",
      "title": "Kth Bit is Set or Not",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/check-whether-k-th-bit-is-set-or-not-1587115620/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "463",
      "title": "Check Odd or Even",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/odd-or-even3618/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "464",
      "title": "Set the Rightmost Unset Bit",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/set-the-rightmost-unset-bit4436/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "465",
      "title": "Number Complement",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-complement/description/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "466",
      "title": "Number of 1 Bits",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-1-bits/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "467",
      "title": "Counting Bits",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/counting-bits/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "468",
      "title": "Count Total Set Bits",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/count-total-set-bits-1587115620/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "469",
      "title": "Reverse Bits",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/reverse-bits/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "470",
      "title": "Power of Two",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/power-of-two/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "471",
      "title": "Power of Four",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/power-of-four",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "472",
      "title": "Hamming Distance",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/hamming-distance/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "473",
      "title": "Add Binary",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/add-binary/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "474",
      "title": "Total Hamming Distance",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/total-hamming-distance/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "475",
      "title": "UTF-8 Validation",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/utf-8-validation ",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "476",
      "title": "Single Number II",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/single-number-ii/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "477",
      "title": "Divide Two Integers",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/divide-two-integers/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "478",
      "title": "Decode Xored Array",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/decode-xored-array ",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "479",
      "title": "Single Number",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/single-number/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "480",
      "title": "Single Number III",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/single-number-iii/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "481",
      "title": "Sum of Two Integers",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/sum-of-two-integers/description/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "482",
      "title": "Swap Two Numbers (with Temp Variable)",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/swap-two-numbers3844/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "483",
      "title": "Missing Number",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/missing-number/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "484",
      "title": "Decode Xored Permutation",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/decode-xored-permutation",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "485",
      "title": "Find the Original Array of Prefix XOR",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/find-the-original-array-of-prefix-xor",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "486",
      "title": "Gray Code",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/gray-code/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "487",
      "title": "XOR Queries of a Subarray",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/xor-queries-of-a-subarray/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "488",
      "title": "XOR Sequences",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://codeforces.com/problemset/problem/1979/B",
      "platform": "Codeforces",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "489",
      "title": "Minimum Number of Operations to Make Array XOR Equal to K",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "490",
      "title": "Maximum XOR Product",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-xor-product",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "491",
      "title": "Neighboring Bitwise XOR",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/neighboring-bitwise-xor",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "492",
      "title": "Minimum XOR Sum of Two Arrays",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "493",
      "title": "Find XOR Sum of All Pairs Bitwise AND",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "494",
      "title": "Find Longest Awesome Substring",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/find-longest-awesome-substring",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "495",
      "title": "Shortest Subarray with OR at Least K",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "496",
      "title": "Minimum Array End",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-array-end",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "497",
      "title": "Maximum OR",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-or/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "498",
      "title": "Find Subarray with Bitwise OR Closest to K",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "499",
      "title": "Minimize OR of Remaining Elements Using Operations",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimize-or-of-remaining-elements-using-operations",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "500",
      "title": "Minimum Flips to Make A or B Equal to C",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "501",
      "title": "Longest Nice Subarray",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/longest-nice-subarray/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "502",
      "title": "Bitwise AND of Numbers Range",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/bitwise-and-of-numbers-range/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "503",
      "title": "Longest Subarray with Maximum Bitwise AND",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "504",
      "title": "Number of Subarrays with AND Value of K",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-subarrays-with-and-value-of-k/",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "505",
      "title": "Triples with Bitwise AND Equal to Zero",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "506",
      "title": "Minimum Operations to Form Subsequence with Target Sum",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-operations-to-form-subsequence-with-target-sum",
      "platform": "Leetcode",
      "tags": [
          "Bit Manipulation"
      ]
  },
  {
      "id": "546",
      "title": "Power of Two",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/power-of-two",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "507",
      "title": "Power of Three",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/power-of-three",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "508",
      "title": "Power of Four",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/power-of-four",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "509",
      "title": "Fibonacci Number",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/fibonacci-number",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "510",
      "title": "Pow(x, n)",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/powx-n",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "511",
      "title": "Count Good Numbers",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/count-good-numbers",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "512",
      "title": "Minimum Non-Zero Product of the Array Elements",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "513",
      "title": "Delete Middle Element of a Stack",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/delete-middle-element-of-a-stack/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "514",
      "title": "Sort a Stack",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/sort-a-stack/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "515",
      "title": "Josephus Problem",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/josephus-problem/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "516",
      "title": "Find the Winner of the Circular Game",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/find-the-winner-of-the-circular-game",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "517",
      "title": "Predict the Winner",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/predict-the-winner",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "518",
      "title": "Tower of Hanoi",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/tower-of-hanoi-1587115621/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "519",
      "title": "Different Ways to Add Parentheses",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/different-ways-to-add-parentheses",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "520",
      "title": "Basic Calculator",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/basic-calculator",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "521",
      "title": "Permutation Sequence",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/permutation-sequence",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "522",
      "title": "Regular Expression Matching",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/regular-expression-matching",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "523",
      "title": "Wildcard Matching",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/wildcard-matching",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "524",
      "title": "Integer to English Words",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/integer-to-english-words/description/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "525",
      "title": "Special Binary String",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/special-binary-string/description/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "526",
      "title": "Permutations",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/permutations/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "527",
      "title": "Construct Smallest Number from DI String",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/construct-smallest-number-from-di-string/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "528",
      "title": "Beautiful Arrangement",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/beautiful-arrangement/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "529",
      "title": "Target Sum",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/target-sum/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "530",
      "title": "Combinations",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/combinations/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "531",
      "title": "Letter Combinations of a Phone Number",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "532",
      "title": "Letter Case Permutation",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/letter-case-permutation/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "533",
      "title": "K-th Lexicographical String of All Happy Strings of Length n",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "534",
      "title": "Combination Sum",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/combination-sum/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "535",
      "title": "Combination Sum II",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/combination-sum-ii/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "536",
      "title": "Combination Sum III",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/combination-sum-iii/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "537",
      "title": "Maximum Compatibility Score Sum",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-compatibility-score-sum/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "538",
      "title": "Numbers with Same Consecutive Differences",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/numbers-with-same-consecutive-differences/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "539",
      "title": "N-Queens",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/n-queens/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "540",
      "title": "Subsets",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/subsets/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "541",
      "title": "Subsets II",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/subsets-ii/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "542",
      "title": "Non-Decreasing Subsequences",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/non-decreasing-subsequences/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "543",
      "title": "Number of Beautiful Subsets",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/the-number-of-beautiful-subsets/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "544",
      "title": "Rat in a Maze Problem",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "545",
      "title": "Sudoku Solver",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/sudoku-solver/",
      "platform": "Leetcode",
      "tags": [
          "Recursion & Backtracking"
      ]
  },
  {
      "id": "547",
      "title": "Binary Tree Preorder Traversal",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "548",
      "title": "Binary Tree Inorder Traversal",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "549",
      "title": "Binary Tree Postorder Traversal",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "550",
      "title": "Preorder, Postorder, Inorder in a single traverse",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/preorder-postorder-and-inorder-traversal-of-a-binary-tree-using-a-single-stack/",
      "platform": "GeeksForGeeks",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "551",
      "title": "Remove Half Nodes",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/remove-half-nodes/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "552",
      "title": "Balanced Binary Tree",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/balanced-binary-tree/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "553",
      "title": "Maximum Depth of Binary Tree",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-depth-of-binary-tree/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "554",
      "title": "Diameter of Binary Tree",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/diameter-of-binary-tree/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "555",
      "title": "Count Complete Tree Nodes",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/count-complete-tree-nodes/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "556",
      "title": "Minimum Depth of Binary Tree",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "557",
      "title": "Check Completeness of a Binary Tree",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/check-completeness-of-a-binary-tree/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "558",
      "title": "Construct Binary Tree from Parent Array",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/construct-binary-tree-from-parent-array/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "559",
      "title": "Linked List to Binary Tree",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/make-binary-tree/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "560",
      "title": "Construct Binary Tree from Preorder and Inorder Traversal",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "561",
      "title": "Construct Binary Tree from Inorder and Postorder Traversal",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "562",
      "title": "Construct Binary Tree from Preorder and Postorder Traversal",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "563",
      "title": "Construct Binary Tree from String with bracket representation",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/construct-binary-tree-string-bracket-representation/",
      "platform": "GeeksForGeeks",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "564",
      "title": "Same Tree",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/same-tree/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "565",
      "title": "Two Mirror Trees",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/two-mirror-trees/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "566",
      "title": "Merge Two Binary Trees",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/merge-two-binary-trees/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "567",
      "title": "Subtree of Another Tree",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/subtree-of-another-tree/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "568",
      "title": "Check if Tree is Isomorphic",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/check-if-tree-is-isomorphic/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "569",
      "title": "Leaf-Similar Trees",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/leaf-similar-trees/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "570",
      "title": "Check if subtree",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/check-if-subtree/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "571",
      "title": "Mirror Tree",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/mirror-tree/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "572",
      "title": "Binary Tree Level Order Traversal",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/binary-tree-level-order-traversal/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "573",
      "title": "Binary Tree Level Order Traversal II",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "574",
      "title": "Cousins in Binary Tree",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/cousins-in-binary-tree/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "575",
      "title": "Average of Levels in Binary Tree",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/average-of-levels-in-binary-tree/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "576",
      "title": "Minimum Number of Operations to Sort a Binary Tree by Level",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "577",
      "title": "Binary Tree Right Side View",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/binary-tree-right-side-view/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "578",
      "title": "Left View of Binary Tree",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "579",
      "title": "Top View of Binary Tree",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "580",
      "title": "Vertical Order Traversal of a Binary Tree",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "581",
      "title": "Serialize and Deserialize Binary Tree",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "582",
      "title": "All Nodes Distance K in Binary Tree",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "583",
      "title": "Burning Tree",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/burning-tree/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "584",
      "title": "Populating Next Right Pointers in Each Node",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "585",
      "title": "Binary Tree Paths",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/binary-tree-paths/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "586",
      "title": "Path Sum",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/path-sum/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "587",
      "title": "Children Sum in a Binary Tree",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/children-sum-parent/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "588",
      "title": "Path Sum II",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/path-sum-ii/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "589",
      "title": "Sum Root to Leaf Numbers",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "590",
      "title": "Binary Tree Maximum Path Sum",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/binary-tree-maximum-path-sum/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "591",
      "title": "Path Sum III",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/path-sum-iii/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "592",
      "title": "Lowest Common Ancestor of a Binary Tree",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "593",
      "title": "N-ary Tree",
      "difficulty": "Theory",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/explore/learn/card/n-ary-tree/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "594",
      "title": "N-ary Tree Postorder Traversal",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/n-ary-tree-postorder-traversal",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "595",
      "title": "N-ary Tree Preorder Traversal",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/n-ary-tree-preorder-traversal",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "596",
      "title": "Maximum Depth of N-ary Tree",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-depth-of-n-ary-tree",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "597",
      "title": "Search in a Binary Search Tree",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/search-in-a-binary-search-tree/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "598",
      "title": "Insert into a Binary Search Tree",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "599",
      "title": "Delete Node in a BST",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/delete-node-in-a-bst/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "600",
      "title": "Convert Sorted Array to Binary Search Tree",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "601",
      "title": "Convert Sorted List to Binary Search Tree",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "602",
      "title": "Convert BST to Greater Tree",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/convert-bst-to-greater-tree",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "603",
      "title": "Trim a Binary Search Tree",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/trim-a-binary-search-tree",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "604",
      "title": "Serialize and Deserialize BST",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/serialize-and-deserialize-bst",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "605",
      "title": "Construct Binary Search Tree from Preorder Traversal",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "606",
      "title": "Construct BST from Postorder",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/construct-bst-from-post-order/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "607",
      "title": "Balance a Binary Search Tree",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/balance-a-binary-search-tree",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "608",
      "title": "Binary Search Tree to Greater Sum Tree",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "609",
      "title": "Find Mode in Binary Search Tree",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/find-mode-in-binary-search-tree",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "610",
      "title": "Range Sum of BST",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/range-sum-of-bst/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "611",
      "title": "Validate Binary Search Tree",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/validate-binary-search-tree/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "612",
      "title": "Minimum Distance Between BST Nodes",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-distance-between-bst-nodes",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "613",
      "title": "Kth Smallest Element in a BST",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "614",
      "title": "Increasing Order Search Tree",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/increasing-order-search-tree",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "615",
      "title": "Two Sum IV - Input is a BST",
      "difficulty": "Easy",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/two-sum-iv-input-is-a-bst",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "616",
      "title": "Maximum Sum BST in Binary Tree",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "617",
      "title": "Find Common Nodes in two BSTs",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/print-common-nodes-in-bst/1",
      "platform": "GeeksForGeeks",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "618",
      "title": "All Elements in Two Binary Search Trees",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/all-elements-in-two-binary-search-trees/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "619",
      "title": "Unique Binary Search Trees",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/unique-binary-search-trees/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "620",
      "title": "Recover Binary Search Tree",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/recover-binary-search-tree/description/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "621",
      "title": "Number of Ways to Reorder Array to Get Same BST",
      "difficulty": "Hard",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "622",
      "title": "Binary Search Tree Iterator",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/binary-search-tree-iterator/",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "623",
      "title": "Lowest Common Ancestor of a Binary Search Tree",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "624",
      "title": "Closest Nodes Queries in a Binary Search Tree",
      "difficulty": "Medium",
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree",
      "platform": "Leetcode",
      "tags": [
          "Tree"
      ]
  },
  {
      "id": "732",
      "title": "Maximum 69 Number",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-69-number/description/",
      "platform": "Leetcode"
  },
  {
      "id": "733",
      "title": "Maximum Sum with Exactly K Elements",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/description/",
      "platform": "Leetcode"
  },
  {
      "id": "734",
      "title": "Minimum Time to Type Word Using Special Typewriter",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/description/",
      "platform": "Leetcode"
  },
  {
      "id": "735",
      "title": "Minimum Operations to Make the Array Increasing",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/description/",
      "platform": "Leetcode"
  },
  {
      "id": "736",
      "title": "Minimum Number of Operations to Convert Time",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/description/",
      "platform": "Leetcode"
  },
  {
      "id": "737",
      "title": "Assign Cookies",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/assign-cookies/",
      "platform": "Leetcode"
  },
  {
      "id": "738",
      "title": "Play with Chips",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/play-with-chips/",
      "platform": "Leetcode"
  },
  {
      "id": "739",
      "title": "Jump Game",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/jump-game/",
      "platform": "Leetcode"
  },
  {
      "id": "740",
      "title": "Jump Game II",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/jump-game-ii/",
      "platform": "Leetcode"
  },
  {
      "id": "741",
      "title": "Wiggle Subsequence",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/wiggle-subsequence/",
      "platform": "Leetcode"
  },
  {
      "id": "742",
      "title": "Cinema Seat Allocation",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/cinema-seat-allocation/",
      "platform": "Leetcode"
  },
  {
      "id": "743",
      "title": "Advantage Shuffle",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/advantage-shuffle/",
      "platform": "Leetcode"
  },
  {
      "id": "744",
      "title": "Minimum Score by Changing Two Elements",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-score-by-changing-two-elements/",
      "platform": "Leetcode"
  },
  {
      "id": "745",
      "title": "Minimum Operations to Make Array Equal II",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/",
      "platform": "Leetcode"
  },
  {
      "id": "746",
      "title": "Mice and Cheese",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/mice-and-cheese/",
      "platform": "Leetcode"
  },
  {
      "id": "747",
      "title": "Minimum Seconds to Equalize a Circular Array",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/",
      "platform": "Leetcode"
  },
  {
      "id": "748",
      "title": "Maximum Bags with Full Capacity of Rocks",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/",
      "platform": "Leetcode"
  },
  {
      "id": "749",
      "title": "Minimize Maximum of Array",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/minimize-maximum-of-array/",
      "platform": "Leetcode"
  },
  {
      "id": "750",
      "title": "Minimum Platforms",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "751",
      "title": "Fractional Knapsack",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "752",
      "title": "Activity Selection",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/activity-selection-1587115620/1",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "753",
      "title": "Job Sequencing Problem",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "754",
      "title": "Non-Overlapping Intervals",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/non-overlapping-intervals/description/",
      "platform": "Leetcode"
  },
  {
      "id": "755",
      "title": "Divide Intervals into Minimum Number of Groups",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/description/",
      "platform": "Leetcode"
  },
  {
      "id": "756",
      "title": "Task Scheduler",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/task-scheduler/",
      "platform": "Leetcode"
  },
  {
      "id": "757",
      "title": "Minimum Number of Operations to Make Arrays Similar",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/description/",
      "platform": "Leetcode"
  },
  {
      "id": "758",
      "title": "Minimum Cost for Cutting Cake II",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "759",
      "title": "Patching Array",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/patching-array/description/",
      "platform": "Leetcode"
  },
  {
      "id": "760",
      "title": "Reverse Subarray to Maximize Array Value",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/description/",
      "platform": "Leetcode"
  },
  {
      "id": "761",
      "title": "Super Washing Machines",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/super-washing-machines/description/",
      "platform": "Leetcode"
  },
  {
      "id": "762",
      "title": "Minimum Cost to Equalize Array",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-cost-to-equalize-array/description/",
      "platform": "Leetcode"
  },
  {
      "id": "763",
      "title": "Optimal Partition of String",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/optimal-partition-of-string/",
      "platform": "Leetcode"
  },
  {
      "id": "764",
      "title": "Minimum Swaps to Make Strings Equal",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/",
      "platform": "Leetcode"
  },
  {
      "id": "765",
      "title": "Maximum Number of Non-Overlapping Substrings",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/description/",
      "platform": "Leetcode"
  },
  {
      "id": "766",
      "title": "Lexicographically Smallest Beautiful String",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/lexicographically-smallest-beautiful-string/description/",
      "platform": "Leetcode"
  },
  {
      "id": "767",
      "title": "Count K-Subsequences of a String with Maximum Beauty",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/description/",
      "platform": "Leetcode"
  },
  {
      "id": "768",
      "title": "Bag of Tokens",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/bag-of-tokens/",
      "platform": "Leetcode"
  },
  {
      "id": "769",
      "title": "Boats to Save People",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/boats-to-save-people/",
      "platform": "Leetcode"
  },
  {
      "id": "770",
      "title": "Maximum Matching of Players with Trainers",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-matching-of-players-with-trainers/",
      "platform": "Leetcode"
  },
  {
      "id": "771",
      "title": "Candy",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/candy/",
      "platform": "Leetcode"
  },
  {
      "id": "772",
      "title": "Lemonade Change",
      "difficulty": "Easy",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/lemonade-change/",
      "platform": "Leetcode"
  },
  {
      "id": "773",
      "title": "Gas Station",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/gas-station/",
      "platform": "Leetcode"
  },
  {
      "id": "774",
      "title": "Group the People Given the Group Size They Belong To",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/",
      "platform": "Leetcode"
  },
  {
      "id": "775",
      "title": "Divide Array in Sets of K Consecutive Numbers",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/",
      "platform": "Leetcode"
  },
  {
      "id": "776",
      "title": "Previous Permutation with One Swap",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/previous-permutation-with-one-swap/",
      "platform": "Leetcode"
  },
  {
      "id": "777",
      "title": "Partition Labels",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/partition-labels/",
      "platform": "Leetcode"
  },
  {
      "id": "778",
      "title": "Construct K Palindrome Strings",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/construct-k-palindrome-strings/",
      "platform": "Leetcode"
  },
  {
      "id": "779",
      "title": "Reorganize String",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/reorganize-string/",
      "platform": "Leetcode"
  },
  {
      "id": "780",
      "title": "String Without AAA or BBB",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/string-without-aaa-or-bbb/",
      "platform": "Leetcode"
  },
  {
      "id": "781",
      "title": "Check If a String Can Break Another String",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/check-if-a-string-can-break-another-string/",
      "platform": "Leetcode"
  },
  {
      "id": "782",
      "title": "Remove Duplicate Letters",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/remove-duplicate-letters/",
      "platform": "Leetcode"
  },
  {
      "id": "783",
      "title": "Largest Merge of Two Strings",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/largest-merge-of-two-strings/description/",
      "platform": "Leetcode"
  },
  {
      "id": "784",
      "title": "Shortest String That Contains Three Strings",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/shortest-string-that-contains-three-strings/",
      "platform": "Leetcode"
  },
  {
      "id": "785",
      "title": "Lexicographically Smallest String After Substring Operation",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/",
      "platform": "Leetcode"
  },
  {
      "id": "786",
      "title": "Minimum Rounds to Complete All Tasks",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/description/",
      "platform": "Leetcode"
  },
  {
      "id": "787",
      "title": "Number of Burgers with No Waste of Ingredients",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/",
      "platform": "Leetcode"
  },
  {
      "id": "788",
      "title": "Queue Reconstruction by Height",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/queue-reconstruction-by-height/",
      "platform": "Leetcode"
  },
  {
      "id": "789",
      "title": "Car Pooling",
      "difficulty": "Medium",
      "status": "Unsolved",
      "tags": [
          "Greedy"
      ],
      "problemLink": "https://leetcode.com/problems/car-pooling/",
      "platform": "Leetcode"
  },
  {
      "id": "790",
      "title": "Climbing Stairs",
      "difficulty": "Easy",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/climbing-stairs/",
      "platform": "Leetcode"
  },
  {
      "id": "791",
      "title": "Min Cost Climbing Stairs",
      "difficulty": "Easy",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/min-cost-climbing-stairs/",
      "platform": "Leetcode"
  },
  {
      "id": "792",
      "title": "Perfect Squares",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/perfect-squares/",
      "platform": "Leetcode"
  },
  {
      "id": "793",
      "title": "Decode Ways",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/decode-ways/",
      "platform": "Leetcode"
  },
  {
      "id": "794",
      "title": "Unique Binary Search Trees",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/unique-binary-search-trees/",
      "platform": "Leetcode"
  },
  {
      "id": "795",
      "title": "House Robber",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/house-robber/",
      "platform": "Leetcode"
  },
  {
      "id": "796",
      "title": "Coin Change",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/coin-change/",
      "platform": "Leetcode"
  },
  {
      "id": "797",
      "title": "Best Time to Buy and Sell Stock",
      "difficulty": "Easy",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      "platform": "Leetcode"
  },
  {
      "id": "798",
      "title": "Minimum Cost For Tickets",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-cost-for-tickets/",
      "platform": "Leetcode"
  },
  {
      "id": "799",
      "title": "Delete and Earn",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/delete-and-earn/",
      "platform": "Leetcode"
  },
  {
      "id": "800",
      "title": "Maximum Total Damage With Spell Casting",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-total-damage-with-spell-casting/description/",
      "platform": "Leetcode"
  },
  {
      "id": "801",
      "title": "Arithmetic Slices",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/arithmetic-slices/",
      "platform": "Leetcode"
  },
  {
      "id": "802",
      "title": "Longest Arithmetic Subsequence of Given Difference",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/description/",
      "platform": "Leetcode"
  },
  {
      "id": "803",
      "title": "Partition Array for Maximum Sum",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/partition-array-for-maximum-sum/description/",
      "platform": "Leetcode"
  },
  {
      "id": "804",
      "title": "Maximize Consecutive Elements in an Array After Modification",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "Maximize Consecutive Elements in an Array After Modification",
      "platform": "Leetcode"
  },
  {
      "id": "805",
      "title": "Coin Change II",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/coin-change-ii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "806",
      "title": "Knight Dialer",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/knight-dialer/",
      "platform": "Leetcode"
  },
  {
      "id": "807",
      "title": "Partition Equal Subset Sum",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/partition-equal-subset-sum/description/",
      "platform": "Leetcode"
  },
  {
      "id": "808",
      "title": "Triangle",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/triangle/",
      "platform": "Leetcode"
  },
  {
      "id": "809",
      "title": "Student Attendance Record Leetcode",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/student-attendance-record-ii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "810",
      "title": "Find the Maximum Length of a Good Subsequence II",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "811",
      "title": "K Inverse Pairs Array",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/k-inverse-pairs-array/",
      "platform": "Leetcode"
  },
  {
      "id": "812",
      "title": "Combination Sum IV",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/combination-sum-iv/",
      "platform": "Leetcode"
  },
  {
      "id": "813",
      "title": "Largest Sum of Averages",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/largest-sum-of-averages/",
      "platform": "Leetcode"
  },
  {
      "id": "814",
      "title": "Longest Arithmetic Subsequence",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/longest-arithmetic-subsequence/",
      "platform": "Leetcode"
  },
  {
      "id": "815",
      "title": "Number of Dice Rolls With Target Sum",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/",
      "platform": "Leetcode"
  },
  {
      "id": "816",
      "title": "Dice Roll Simulation",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/dice-roll-simulation/",
      "platform": "Leetcode"
  },
  {
      "id": "817",
      "title": "Number of Strings Which Can Be Rearranged to Contain Substring",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-strings-which-can-be-rearranged-to-contain-substring/description/",
      "platform": "Leetcode"
  },
  {
      "id": "818",
      "title": "Frog Jump",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/frog-jump/",
      "platform": "Leetcode"
  },
  {
      "id": "819",
      "title": "Best Time to Buy and Sell Stock II",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "820",
      "title": "Best Time to Buy and Sell Stock III",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "821",
      "title": "Best Time to Buy and Sell Stock IV",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
      "platform": "Leetcode"
  },
  {
      "id": "822",
      "title": "Freedom Trail",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/freedom-trail/",
      "platform": "Leetcode"
  },
  {
      "id": "823",
      "title": "Number of Music Playlists",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-music-playlists/",
      "platform": "Leetcode"
  },
  {
      "id": "824",
      "title": "Count Vowels Permutation",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/count-vowels-permutation/",
      "platform": "Leetcode"
  },
  {
      "id": "825",
      "title": "Best Time to Buy and Sell Stock with Transaction Fee",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
      "platform": "Leetcode"
  },
  {
      "id": "826",
      "title": "Minimum Distance to Type a Word Using Two Fingers",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/",
      "platform": "Leetcode"
  },
  {
      "id": "827",
      "title": "Minimum Difficulty of a Job Schedule",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/",
      "platform": "Leetcode"
  },
  {
      "id": "828",
      "title": "Best Time to Buy and Sell Stock with Cooldown",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
      "platform": "Leetcode"
  },
  {
      "id": "829",
      "title": "Number of Ways to Paint N Ã— 3 Grid",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/",
      "platform": "Leetcode"
  },
  {
      "id": "830",
      "title": "Build Array Where You Can Find The Maximum Exactly K Comparisons",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons/",
      "platform": "Leetcode"
  },
  {
      "id": "831",
      "title": "Number of Ways of Cutting a Pizza",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/",
      "platform": "Leetcode"
  },
  {
      "id": "832",
      "title": "Paint House III",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/paint-house-iii/",
      "platform": "Leetcode"
  },
  {
      "id": "833",
      "title": "Count All Possible Routes",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/count-all-possible-routes/",
      "platform": "Leetcode"
  },
  {
      "id": "834",
      "title": "Geek's Training",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/geeks-training/1",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "835",
      "title": "Unique Paths",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/unique-paths/",
      "platform": "Leetcode"
  },
  {
      "id": "836",
      "title": "Unique Paths II",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/unique-paths-ii/",
      "platform": "Leetcode"
  },
  {
      "id": "837",
      "title": "Minimum Path Sum",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-path-sum/",
      "platform": "Leetcode"
  },
  {
      "id": "838",
      "title": "1594. Maximum Non Negative Product in a Matrix",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/",
      "platform": "Leetcode"
  },
  {
      "id": "839",
      "title": "Maximum Difference Score in a Grid",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-difference-score-in-a-grid/description/",
      "platform": "Leetcode"
  },
  {
      "id": "840",
      "title": "Minimum Number of Operations to Satisfy Conditions",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/description/",
      "platform": "Leetcode"
  },
  {
      "id": "841",
      "title": "Maximum Number of Moves in a Grid",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/description/",
      "platform": "Leetcode"
  },
  {
      "id": "842",
      "title": "Where Will the Ball Fall",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/where-will-the-ball-fall/",
      "platform": "Leetcode"
  },
  {
      "id": "843",
      "title": "Dungeon Game",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/dungeon-game/",
      "platform": "Leetcode"
  },
  {
      "id": "844",
      "title": "Cherry Pickup",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/cherry-pickup/",
      "platform": "Leetcode"
  },
  {
      "id": "845",
      "title": "Number of Paths with Max Score",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-paths-with-max-score/",
      "platform": "Leetcode"
  },
  {
      "id": "846",
      "title": "Cherry Pickup II",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/cherry-pickup-ii/",
      "platform": "Leetcode"
  },
  {
      "id": "847",
      "title": "Minimum Falling Path Sum II",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-falling-path-sum-ii/",
      "platform": "Leetcode"
  },
  {
      "id": "848",
      "title": "Out of Boundary Paths",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/out-of-boundary-paths/",
      "platform": "Leetcode"
  },
  {
      "id": "849",
      "title": "Minimum Falling Path Sum",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-falling-path-sum/",
      "platform": "Leetcode"
  },
  {
      "id": "850",
      "title": "Knapsack - 1",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://atcoder.jp/contests/dp/tasks/dp_d",
      "platform": "Atcoder"
  },
  {
      "id": "851",
      "title": "Knapsack - 2",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://atcoder.jp/contests/dp/tasks/dp_e",
      "platform": "Atcoder"
  },
  {
      "id": "852",
      "title": "Ones and Zeroes",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/ones-and-zeroes/",
      "platform": "Leetcode"
  },
  {
      "id": "853",
      "title": "Target Sum",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/target-sum/",
      "platform": "Leetcode"
  },
  {
      "id": "854",
      "title": "2 Keys Keyboard",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/2-keys-keyboard/",
      "platform": "Leetcode"
  },
  {
      "id": "855",
      "title": "Best Team With No Conflicts",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/best-team-with-no-conflicts/",
      "platform": "Leetcode"
  },
  {
      "id": "856",
      "title": "Shopping Offers",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/shopping-offers/",
      "platform": "Leetcode"
  },
  {
      "id": "857",
      "title": "Minimum Number of Coins for Fruits",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-number-of-coins-for-fruits/description/",
      "platform": "Leetcode"
  },
  {
      "id": "858",
      "title": "Last Stone Weight II",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/last-stone-weight-ii/",
      "platform": "Leetcode"
  },
  {
      "id": "859",
      "title": "Rod Cutting",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/rod-cutting0840/1",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "860",
      "title": "Filling Bookcase Shelves",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/filling-bookcase-shelves/description/",
      "platform": "Leetcode"
  },
  {
      "id": "861",
      "title": "Video Stitching",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/video-stitching/",
      "platform": "Leetcode"
  },
  {
      "id": "862",
      "title": "Maximize Total Cost of Alternating Subarrays",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/description/",
      "platform": "Leetcode"
  },
  {
      "id": "863",
      "title": "Pizza With 3n Slices",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/pizza-with-3n-slices/",
      "platform": "Leetcode"
  },
  {
      "id": "864",
      "title": "Minimum Swaps To Make Sequences Increasing",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/",
      "platform": "Leetcode"
  },
  {
      "id": "865",
      "title": "Profitable Schemes",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/profitable-schemes/",
      "platform": "Leetcode"
  },
  {
      "id": "866",
      "title": "Reducing Dishes",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/reducing-dishes/",
      "platform": "Leetcode"
  },
  {
      "id": "867",
      "title": "Find Number of Ways to Reach the K-th Stair",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/",
      "platform": "Leetcode"
  },
  {
      "id": "868",
      "title": "Find the Sum of Subsequence Powers",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/find-the-sum-of-subsequence-powers/description/",
      "platform": "Leetcode"
  },
  {
      "id": "869",
      "title": "Count of Sub-Multisets With Bounded Sum",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/description/",
      "platform": "Leetcode"
  },
  {
      "id": "870",
      "title": "Longest Increasing Subsequence",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/longest-increasing-subsequence/",
      "platform": "Leetcode"
  },
  {
      "id": "871",
      "title": "Printing Longest Increasing Subsequence",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/printing-longest-increasing-subsequence/0",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "872",
      "title": "Number of Longest Increasing Subsequence",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
      "platform": "Leetcode"
  },
  {
      "id": "873",
      "title": "Largest Divisible Subset",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/largest-divisible-subset/",
      "platform": "Leetcode"
  },
  {
      "id": "874",
      "title": "Longest Unequal Adjacent Groups Subsequence II",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "875",
      "title": "Max Sum Increasing Subsequence",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "876",
      "title": "Find the Maximum Length of Valid Subsequence II",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "877",
      "title": "Wiggle Subsequence",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/wiggle-subsequence/",
      "platform": "Leetcode"
  },
  {
      "id": "878",
      "title": "Find the Count of Monotonic Pairs I",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/find-the-count-of-monotonic-pairs-i/description/",
      "platform": "Leetcode"
  },
  {
      "id": "879",
      "title": "Russian Doll Envelopes",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/russian-doll-envelopes/",
      "platform": "Leetcode"
  },
  {
      "id": "880",
      "title": "Delete Columns to Make Sorted III",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/delete-columns-to-make-sorted-iii/",
      "platform": "Leetcode"
  },
  {
      "id": "881",
      "title": "Minimum Number of Removals to Make Mountain Array",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/",
      "platform": "Leetcode"
  },
  {
      "id": "882",
      "title": "Maximum Height by Stacking Cuboids",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-height-by-stacking-cuboids/",
      "platform": "Leetcode"
  },
  {
      "id": "883",
      "title": "Maximum Length of Pair Chain",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-length-of-pair-chain/",
      "platform": "Leetcode"
  },
  {
      "id": "884",
      "title": "Make Array Strictly Increasing",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/make-array-strictly-increasing/",
      "platform": "Leetcode"
  },
  {
      "id": "885",
      "title": "Longest Common Subsequence",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/longest-common-subsequence/",
      "platform": "Leetcode"
  },
  {
      "id": "886",
      "title": "Print all LCS sequences",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/print-all-lcs-sequences3413/1",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "887",
      "title": "Count common subsequence in two strings",
      "difficulty": "Theory",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/count-common-subsequence-in-two-strings/",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "888",
      "title": "Delete operation for two strings",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/delete-operation-for-two-strings/description/",
      "platform": "Leetcode"
  },
  {
      "id": "889",
      "title": "Longest Palindromic Substring",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/longest-palindromic-substring/",
      "platform": "Leetcode"
  },
  {
      "id": "890",
      "title": "Longest Palindromic Subsequence",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/longest-palindromic-subsequence/",
      "platform": "Leetcode"
  },
  {
      "id": "891",
      "title": "Maximum Length of Repeated Subarray",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-length-of-repeated-subarray/",
      "platform": "Leetcode"
  },
  {
      "id": "892",
      "title": "Edit Distance",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/edit-distance/",
      "platform": "Leetcode"
  },
  {
      "id": "893",
      "title": "Interleaving String",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/interleaving-string/",
      "platform": "Leetcode"
  },
  {
      "id": "894",
      "title": "Regular Expression Matching",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/regular-expression-matching/",
      "platform": "Leetcode"
  },
  {
      "id": "895",
      "title": "Wildcard Matching",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/wildcard-matching/",
      "platform": "Leetcode"
  },
  {
      "id": "896",
      "title": "Shortest Common Supersequence",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/shortest-common-supersequence/",
      "platform": "Leetcode"
  },
  {
      "id": "897",
      "title": "Minimum Insertion Steps to Make a String Palindrome",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/",
      "platform": "Leetcode"
  },
  {
      "id": "898",
      "title": "Max Dot Product of Two Subsequences",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/max-dot-product-of-two-subsequences/",
      "platform": "Leetcode"
  },
  {
      "id": "899",
      "title": "Minimum Substring Partition of Equal Character Frequency",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/description/",
      "platform": "Leetcode"
  },
  {
      "id": "900",
      "title": "Apply Operations to Make Two Strings Equal",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/description/",
      "platform": "Leetcode"
  },
  {
      "id": "901",
      "title": "Minimum ASCII Delete Sum for Two Strings",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/",
      "platform": "Leetcode"
  },
  {
      "id": "902",
      "title": "Word Break",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/word-break/",
      "platform": "Leetcode"
  },
  {
      "id": "903",
      "title": "Longest String Chain",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/longest-string-chain/",
      "platform": "Leetcode"
  },
  {
      "id": "904",
      "title": "Unique Substrings in Wraparound String",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/unique-substrings-in-wraparound-string/",
      "platform": "Leetcode"
  },
  {
      "id": "905",
      "title": "Longest Valid Parentheses",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/longest-valid-parentheses/",
      "platform": "Leetcode"
  },
  {
      "id": "906",
      "title": "Distinct Subsequences",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/distinct-subsequences/",
      "platform": "Leetcode"
  },
  {
      "id": "907",
      "title": "Word Break II",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/word-break-ii/",
      "platform": "Leetcode"
  },
  {
      "id": "908",
      "title": "Sort an Array",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/count-the-repetitions/",
      "platform": "Leetcode"
  },
  {
      "id": "909",
      "title": "Concatenated Words",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/concatenated-words/",
      "platform": "Leetcode"
  },
  {
      "id": "910",
      "title": "Count Different Palindromic Subsequences",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/count-different-palindromic-subsequences/",
      "platform": "Leetcode"
  },
  {
      "id": "911",
      "title": "Distinct Subsequences II",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/distinct-subsequences-ii/",
      "platform": "Leetcode"
  },
  {
      "id": "912",
      "title": "Longest Chunked Palindrome Decomposition",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/longest-chunked-palindrome-decomposition/",
      "platform": "Leetcode"
  },
  {
      "id": "913",
      "title": "String Compression II",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/string-compression-ii/",
      "platform": "Leetcode"
  },
  {
      "id": "914",
      "title": "Number of Ways to Form a Target String Given a Dictionary",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/",
      "platform": "Leetcode"
  },
  {
      "id": "915",
      "title": "Minimum Changes to Make K Semi-palindromes",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/description/",
      "platform": "Leetcode"
  },
  {
      "id": "916",
      "title": "Maximal Square",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximal-square/",
      "platform": "Leetcode"
  },
  {
      "id": "917",
      "title": "Range Sum Query 2D - Immutable",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/range-sum-query-2d-immutable/",
      "platform": "Leetcode"
  },
  {
      "id": "918",
      "title": "Largest Plus Sign",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/largest-plus-sign/",
      "platform": "Leetcode"
  },
  {
      "id": "919",
      "title": "Largest 1-Bordered Square",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/largest-1-bordered-square/",
      "platform": "Leetcode"
  },
  {
      "id": "920",
      "title": "Count Square Submatrices with All Ones",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/count-square-submatrices-with-all-ones/",
      "platform": "Leetcode"
  },
  {
      "id": "921",
      "title": "Matrix Block Sum",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/matrix-block-sum/",
      "platform": "Leetcode"
  },
  {
      "id": "922",
      "title": "Count Submatrices With All Ones",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/count-submatrices-with-all-ones/",
      "platform": "Leetcode"
  },
  {
      "id": "923",
      "title": "Ways to Make a Fair Array",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/ways-to-make-a-fair-array/",
      "platform": "Leetcode"
  },
  {
      "id": "924",
      "title": "Maximal Rectangle",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximal-rectangle/",
      "platform": "Leetcode"
  },
  {
      "id": "925",
      "title": "Max Sum of Rectangle No Larger Than K",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/",
      "platform": "Leetcode"
  },
  {
      "id": "926",
      "title": "Super Washing Machines",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/super-washing-machines/",
      "platform": "Leetcode"
  },
  {
      "id": "927",
      "title": "Maximum Sum of 3 Non-Overlapping Subarrays",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/",
      "platform": "Leetcode"
  },
  {
      "id": "928",
      "title": "Number of Submatrices That Sum to Target",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/",
      "platform": "Leetcode"
  },
  {
      "id": "929",
      "title": "find-the-count-of-monotonic-pairs-ii",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "930",
      "title": "Get the Maximum Score",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/get-the-maximum-score/",
      "platform": "Leetcode"
  },
  {
      "id": "931",
      "title": "Matrix Chain Multiplication",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "932",
      "title": "Guess Number Higher or Lower II",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/guess-number-higher-or-lower-ii/",
      "platform": "Leetcode"
  },
  {
      "id": "933",
      "title": "Predict the Winner",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/predict-the-winner/",
      "platform": "Leetcode"
  },
  {
      "id": "934",
      "title": "Stone Game",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/stone-game/",
      "platform": "Leetcode"
  },
  {
      "id": "935",
      "title": "Burst Balloons",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/burst-balloons/",
      "platform": "Leetcode"
  },
  {
      "id": "936",
      "title": "Minimum Score Triangulation of Polygon",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-score-triangulation-of-polygon/",
      "platform": "Leetcode"
  },
  {
      "id": "937",
      "title": "Minimum Cost Tree From Leaf Values",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/",
      "platform": "Leetcode"
  },
  {
      "id": "938",
      "title": "Partition Array for Maximum Sum",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/partition-array-for-maximum-sum/description/",
      "platform": "Leetcode"
  },
  {
      "id": "939",
      "title": "Palindrome Partitioning II",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/palindrome-partitioning-iii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "940",
      "title": "Stone Game VII",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/stone-game-vii/",
      "platform": "Leetcode"
  },
  {
      "id": "941",
      "title": "Remove Boxes",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/remove-boxes/",
      "platform": "Leetcode"
  },
  {
      "id": "942",
      "title": "Strange Printer",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/strange-printer/",
      "platform": "Leetcode"
  },
  {
      "id": "943",
      "title": "Valid Permutations for DI Sequence",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/valid-permutations-for-di-sequence/",
      "platform": "Leetcode"
  },
  {
      "id": "944",
      "title": "Minimum Cost to Merge Stones",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-cost-to-merge-stones/",
      "platform": "Leetcode"
  },
  {
      "id": "945",
      "title": "Allocate Mailboxes",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/allocate-mailboxes/",
      "platform": "Leetcode"
  },
  {
      "id": "946",
      "title": "Minimum Cost to Cut a Stick",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/",
      "platform": "Leetcode"
  },
  {
      "id": "947",
      "title": "Stone Game V",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/stone-game-v/",
      "platform": "Leetcode"
  },
  {
      "id": "948",
      "title": "Palindrome Partitioning III",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/palindrome-partitioning-iii/",
      "platform": "Leetcode"
  },
  {
      "id": "949",
      "title": "Can I Win",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/can-i-win/",
      "platform": "Leetcode"
  },
  {
      "id": "950",
      "title": "Partition to K Equal Sum Subsets",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
      "platform": "Leetcode"
  },
  {
      "id": "951",
      "title": "Stickers to Spell Word",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/stickers-to-spell-word/",
      "platform": "Leetcode"
  },
  {
      "id": "952",
      "title": "Smallest Sufficient Team",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/smallest-sufficient-team/",
      "platform": "Leetcode"
  },
  {
      "id": "953",
      "title": "Maximum Students Taking Exam",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-students-taking-exam/",
      "platform": "Leetcode"
  },
  {
      "id": "954",
      "title": "1434. Number of Ways to Wear Different Hats to Each Other",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/",
      "platform": "Leetcode"
  },
  {
      "id": "955",
      "title": "Minimum Cost to Connect Two Groups of Points",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/",
      "platform": "Leetcode"
  },
  {
      "id": "956",
      "title": "Maximum Number of Achievable Transfer Requests",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/",
      "platform": "Leetcode"
  },
  {
      "id": "957",
      "title": "https://www.codechef.com/problems/TSHIRTS",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://www.codechef.com/problems/TSHIRTS",
      "platform": "Codechef"
  },
  {
      "id": "958",
      "title": "Distribute Repeating Integers",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/distribute-repeating-integers/",
      "platform": "Leetcode"
  },
  {
      "id": "959",
      "title": "Maximize Grid Happiness",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximize-grid-happiness/",
      "platform": "Leetcode"
  },
  {
      "id": "960",
      "title": "Find Minimum Time to Finish All Jobs",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/",
      "platform": "Leetcode"
  },
  {
      "id": "961",
      "title": "Minimum Sum of Values by Dividing Array",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/description/",
      "platform": "Leetcode"
  },
  {
      "id": "962",
      "title": "Shortest Path Visiting All Nodes",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/shortest-path-visiting-all-nodes/",
      "platform": "Leetcode"
  },
  {
      "id": "963",
      "title": "Grouping",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://atcoder.jp/contests/dp/tasks/dp_u",
      "platform": "Atcoder"
  },
  {
      "id": "964",
      "title": "Matching",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://atcoder.jp/contests/dp/tasks/dp_o",
      "platform": "Atcoder"
  },
  {
      "id": "965",
      "title": "Counting Numbers",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://cses.fi/problemset/task/2220",
      "platform": "CSES"
  },
  {
      "id": "966",
      "title": "Non-negative Integers without Consecutive Ones",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/",
      "platform": "Leetcode"
  },
  {
      "id": "967",
      "title": "Numbers At Most N Given Digit Set",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/numbers-at-most-n-given-digit-set/",
      "platform": "Leetcode"
  },
  {
      "id": "968",
      "title": "Numbers With Repeated Digits",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/numbers-with-repeated-digits/",
      "platform": "Leetcode"
  },
  {
      "id": "969",
      "title": "Number of Digit One",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-digit-one/",
      "platform": "Leetcode"
  },
  {
      "id": "970",
      "title": "Number of Beautiful Integers in the Range",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/",
      "platform": "Leetcode"
  },
  {
      "id": "971",
      "title": "Count the Number of Powerful Integers",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/count-the-number-of-powerful-integers/description/",
      "platform": "Leetcode"
  },
  {
      "id": "972",
      "title": "Find All Good Strings",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/find-all-good-strings/description/",
      "platform": "Leetcode"
  },
  {
      "id": "973",
      "title": "House Robber III",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/house-robber-iii/",
      "platform": "Leetcode"
  },
  {
      "id": "974",
      "title": "Longest ZigZag Path in a Binary Tree",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/",
      "platform": "Leetcode"
  },
  {
      "id": "975",
      "title": "Maximum Score After Applying Operations on a Tree",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/description/",
      "platform": "Leetcode"
  },
  {
      "id": "976",
      "title": "CSES - Subordinates",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://cses.fi/problemset/task/1674",
      "platform": "CSES"
  },
  {
      "id": "977",
      "title": "Tree Matching",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://cses.fi/problemset/task/1130",
      "platform": "CSES"
  },
  {
      "id": "978",
      "title": "Maximum Sum BST in Binary Tree",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/",
      "platform": "Leetcode"
  },
  {
      "id": "979",
      "title": "1569. Number of Ways to Reorder Array to Get Same BST",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/",
      "platform": "Leetcode"
  },
  {
      "id": "980",
      "title": "Maximum Points After Collecting Coins From All Nodes",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/description/",
      "platform": "Leetcode"
  },
  {
      "id": "981",
      "title": "Sum of Distances in Tree",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/sum-of-distances-in-tree/description/",
      "platform": "Leetcode"
  },
  {
      "id": "982",
      "title": "Maximum Points After Collecting Coins From All Nodes",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/description/",
      "platform": "Leetcode"
  },
  {
      "id": "983",
      "title": "Count Paths That Can Form a Palindrome in a Tree",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/description/",
      "platform": "Leetcode"
  },
  {
      "id": "984",
      "title": "Find Number of Coins to Place in Tree Nodes",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/find-number-of-coins-to-place-in-tree-nodes/description/",
      "platform": "Leetcode"
  },
  {
      "id": "985",
      "title": "Minimize the Total Price of the Trips",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimize-the-total-price-of-the-trips/description/",
      "platform": "Leetcode"
  },
  {
      "id": "986",
      "title": "Tree Distances 1",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://cses.fi/problemset/task/1132",
      "platform": "CSES"
  },
  {
      "id": "987",
      "title": "Tree Distances II",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://cses.fi/problemset/task/1133",
      "platform": "CSES"
  },
  {
      "id": "988",
      "title": "Company Queries I",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://cses.fi/problemset/task/1687",
      "platform": "CSES"
  },
  {
      "id": "989",
      "title": "Company Queries II",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://cses.fi/problemset/task/1688",
      "platform": "CSES"
  },
  {
      "id": "990",
      "title": "Distance Queries",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://cses.fi/problemset/task/1135",
      "platform": "CSES"
  },
  {
      "id": "991",
      "title": "Time Taken to Mark All Nodes",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/time-taken-to-mark-all-nodes/description/",
      "platform": "Leetcode"
  },
  {
      "id": "992",
      "title": "Maximum Subarray",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-subarray/",
      "platform": "Leetcode"
  },
  {
      "id": "993",
      "title": "Maximum Product Subarray",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-product-subarray/",
      "platform": "Leetcode"
  },
  {
      "id": "994",
      "title": "Bitwise ORs of Subarrays",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/bitwise-ors-of-subarrays/",
      "platform": "Leetcode"
  },
  {
      "id": "995",
      "title": "Longest Turbulent Subarray",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/longest-turbulent-subarray/",
      "platform": "Leetcode"
  },
  {
      "id": "996",
      "title": "Maximum Subarray Sum with One Deletion",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/",
      "platform": "Leetcode"
  },
  {
      "id": "997",
      "title": "K-Concatenation Maximum Sum",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/k-concatenation-maximum-sum/",
      "platform": "Leetcode"
  },
  {
      "id": "998",
      "title": "Length of Longest Fibonacci Subsequence",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/",
      "platform": "Leetcode"
  },
  {
      "id": "999",
      "title": "Minimum Jumps to Reach Home",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-jumps-to-reach-home/",
      "platform": "Leetcode"
  },
  {
      "id": "1000",
      "title": "Scramble String",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/scramble-string/",
      "platform": "Leetcode"
  },
  {
      "id": "1001",
      "title": "1240. Tiling a Rectangle with the Fewest Squares",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/",
      "platform": "Leetcode"
  },
  {
      "id": "1002",
      "title": "1269. Number of Ways to Stay in the Same Place After Some Steps",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/",
      "platform": "Leetcode"
  },
  {
      "id": "1003",
      "title": "Jump Game V",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/jump-game-v/",
      "platform": "Leetcode"
  },
  {
      "id": "1004",
      "title": "Minimum Number of Days to Eat N Oranges",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/",
      "platform": "Leetcode"
  },
  {
      "id": "1005",
      "title": "Ugly Number II",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/ugly-number-ii/",
      "platform": "Leetcode"
  },
  {
      "id": "1006",
      "title": "Count Sorted Vowel Strings",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/count-sorted-vowel-strings/",
      "platform": "Leetcode"
  },
  {
      "id": "1007",
      "title": "Race Car",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/race-car/",
      "platform": "Leetcode"
  },
  {
      "id": "1008",
      "title": "Super Egg Drop",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/super-egg-drop/",
      "platform": "Leetcode"
  },
  {
      "id": "1009",
      "title": "Least Operators to Express Number",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/least-operators-to-express-number/",
      "platform": "Leetcode"
  },
  {
      "id": "1010",
      "title": "Largest Multiple of Three",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/largest-multiple-of-three/",
      "platform": "Leetcode"
  },
  {
      "id": "1011",
      "title": "Kth Smallest Instructions",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/kth-smallest-instructions/",
      "platform": "Leetcode"
  },
  {
      "id": "1012",
      "title": "Number of Sets of K Non-Overlapping Line Segments",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/",
      "platform": "Leetcode"
  },
  {
      "id": "1013",
      "title": "Domino and Tromino Tiling",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/domino-and-tromino-tiling/",
      "platform": "Leetcode"
  },
  {
      "id": "1014",
      "title": "Count Numbers with Unique Digits",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/count-numbers-with-unique-digits/",
      "platform": "Leetcode"
  },
  {
      "id": "1015",
      "title": "Minimum One Bit Operations to Make Integers Zero",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/",
      "platform": "Leetcode"
  },
  {
      "id": "1016",
      "title": "Find All Possible Stable Binary Arrays II",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/find-all-possible-stable-binary-arrays-ii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1017",
      "title": "Counting Tilings",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://cses.fi/problemset/task/2181",
      "platform": "CSES"
  },
  {
      "id": "1018",
      "title": "Soup Servings",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/soup-servings/",
      "platform": "Leetcode"
  },
  {
      "id": "1019",
      "title": "New 21 Game",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/new-21-game/",
      "platform": "Leetcode"
  },
  {
      "id": "1020",
      "title": "Airplane Seat Assignment Probability",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/airplane-seat-assignment-probability/",
      "platform": "Leetcode"
  },
  {
      "id": "1021",
      "title": "Knight Probability in Chessboard",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/knight-probability-in-chessboard/",
      "platform": "Leetcode"
  },
  {
      "id": "1022",
      "title": "Champagne Tower",
      "difficulty": "Medium",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/champagne-tower/",
      "platform": "Leetcode"
  },
  {
      "id": "1023",
      "title": "Sushi",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://atcoder.jp/contests/dp/tasks/dp_j",
      "platform": "Atcoder"
  },
  {
      "id": "1024",
      "title": "Coins",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://atcoder.jp/contests/dp/tasks/dp_i",
      "platform": "Atcoder"
  },
  {
      "id": "1025",
      "title": "Probability of a Two Boxes Having The Same Number of Distinct Balls",
      "difficulty": "Hard",
      "tags": [
          "Dynamic Programming"
      ],
      "status": "Unsolved",
      "problemLink": "https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1167",
      "title": "KMP Algorithm for Pattern Searching",
      "difficulty": "Theory",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "1168",
      "title": "Rabin-Karp Algorithm for Pattern Searching",
      "difficulty": "Theory",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "1169",
      "title": "Z Algorithm (Linear-Time Pattern Searching Algorithm)",
      "difficulty": "Theory",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "1170",
      "title": "Count Prefix and Suffix Pairs II",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1171",
      "title": "Number of Subarrays That Match a Pattern II",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1172",
      "title": "Minimum Time to Revert Word to Initial State II",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1173",
      "title": "Find Beautiful Indices in the Given Array II",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1174",
      "title": "String Transformation",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://leetcode.com/problems/string-transformation/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1175",
      "title": "Find Substring with Given Hash Value",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://leetcode.com/problems/find-substring-with-given-hash-value",
      "platform": "Leetcode"
  },
  {
      "id": "1176",
      "title": "Maximum Deletions on a String",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-deletions-on-a-string/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1177",
      "title": "Match Substring After Replacement",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://leetcode.com/problems/match-substring-after-replacement/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1178",
      "title": "Sum of Scores of Built Strings",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://leetcode.com/problems/sum-of-scores-of-built-strings/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1179",
      "title": "Find All Good Strings",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://leetcode.com/problems/find-all-good-strings/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1180",
      "title": "Longest Happy Prefix",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://leetcode.com/problems/longest-happy-prefix/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1181",
      "title": "Shortest Palindrome",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://leetcode.com/problems/shortest-palindrome/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1182",
      "title": "Distinct Echo Substrings",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://leetcode.com/problems/distinct-echo-substrings/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1183",
      "title": "Longest Chunked Palindrome Decomposition",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://leetcode.com/problems/longest-chunked-palindrome-decomposition/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1184",
      "title": "Maximum Product of the Length of Two Palindromic Substrings",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1185",
      "title": "Longest Duplicate Substring",
      "difficulty": "Hard",
      "status": "Unsolved",
      "tags": [
          "String Matching"
      ],
      "problemLink": "https://leetcode.com/problems/longest-duplicate-substring/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1186",
      "title": "Check If It Is a Straight Line",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Easy",
      "problemLink": "https://leetcode.com/problems/check-if-it-is-a-straight-line/",
      "platform": "Leetcode"
  },
  {
      "id": "1187",
      "title": "Minimum Lines to Represent a Line Chart",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1188",
      "title": "K Closest Points to Origin",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/k-closest-points-to-origin/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1189",
      "title": "Check If Two Line Segments Intersect",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://www.geeksforgeeks.org/problems/check-if-two-line-segments-intersect0017/1",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "1190",
      "title": "Max Points on a Line",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/max-points-on-a-line/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1191",
      "title": "Minimize Manhattan Distances",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/minimize-manhattan-distances/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1192",
      "title": "Self Crossing",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/self-crossing/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1193",
      "title": "Rectangle Overlap",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Easy",
      "problemLink": "https://leetcode.com/problems/rectangle-overlap/",
      "platform": "Leetcode"
  },
  {
      "id": "1194",
      "title": "Largest Triangle Area",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Easy",
      "problemLink": "https://leetcode.com/problems/largest-triangle-area/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1195",
      "title": "Minimum Rectangles to Cover Points",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/minimum-rectangles-to-cover-points/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1196",
      "title": "Rectangle Area",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/rectangle-area/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1197",
      "title": "Minimum Area Rectangle",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/minimum-area-rectangle/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1198",
      "title": "Minimum Area Rectangle II",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/minimum-area-rectangle-ii/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1199",
      "title": "Mirror Reflection",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/mirror-reflection/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1200",
      "title": "Find the Largest Area of Square Inside Two Rectangles",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1201",
      "title": "Minimum Cuts to Divide a Circle",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1202",
      "title": "Generate Random Point in a Circle",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/generate-random-point-in-a-circle/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1203",
      "title": "Circle and Rectangle Overlapping",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/circle-and-rectangle-overlapping/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1204",
      "title": "Count Lattice Points Inside a Circle",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/count-lattice-points-inside-a-circle/",
      "platform": "Leetcode"
  },
  {
      "id": "1205",
      "title": "Queries on Number of Points Inside a Circle",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/",
      "platform": "Leetcode"
  },
  {
      "id": "1206",
      "title": "Maximum Number of Darts Inside of a Circular Dartboard",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/",
      "platform": "Leetcode"
  },
  {
      "id": "1207",
      "title": "Factorial of Large Numbers",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://www.geeksforgeeks.org/problems/ncr-mod-m-part-20611/1",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "1208",
      "title": "ncr-mod-m",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://www.geeksforgeeks.org/problems/ncr-mod-m-part-20611/1",
      "platform": "GeeksForGeeks"
  },
  {
      "id": "1209",
      "title": "Tiles",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://codeforces.com/contest/1178/problem/C",
      "platform": "Codeforces"
  },
  {
      "id": "1210",
      "title": "Distribute Candies Among Children II ",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/distribute-candies-among-children-ii/",
      "platform": "Leetcode"
  },
  {
      "id": "1211",
      "title": "Unique Paths",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://leetcode.com/problems/unique-paths/",
      "platform": "Leetcode"
  },
  {
      "id": "1212",
      "title": " Right Triangles",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Medium",
      "problemLink": "https://codeforces.com/contest/52/problem/B",
      "platform": "Codeforces"
  },
  {
      "id": "1213",
      "title": "Permutation Sequence ",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/permutation-sequence/",
      "platform": "Leetcode"
  },
  {
      "id": "1214",
      "title": "Count Anagrams ",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/count-anagrams/",
      "platform": "Leetcode"
  },
  {
      "id": "1215",
      "title": "Number of Ways to Reorder Array to Get Same BST",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/",
      "platform": "Leetcode"
  },
  {
      "id": "1216",
      "title": "Count the Number of Ideal Arrays ",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/count-the-number-of-ideal-arrays/",
      "platform": "Leetcode"
  },
  {
      "id": "1217",
      "title": "Count All Valid Pickup and Delivery Options",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/",
      "platform": "Leetcode"
  },
  {
      "id": "1218",
      "title": "Bitwise OR of All Subsequence Sums",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Hard",
      "problemLink": "https://leetcode.com/problems/count-the-number-of-infection-sequences/description/",
      "platform": "Leetcode"
  },
  {
      "id": "1219",
      "title": "Count the Arrays",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Hard",
      "problemLink": "https://codeforces.com/problemset/problem/1312/D",
      "platform": "Codeforces"
  },
  {
      "id": "1220",
      "title": "Beautiful Numbers",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Hard",
      "problemLink": "https://codeforces.com/contest/300/problem/C",
      "platform": "Codeforces"
  },
  {
      "id": "1221",
      "title": "String Mark",
      "status": "Unsolved",
      "tags": [
          "Combinatorics & Geometry"
      ],
      "difficulty": "Hard",
      "problemLink": "https://codeforces.com/contest/895/problem/D",
      "platform": "Codeforces"
  },
  {
      "id": "625",
      "title": "Implementation of Priority Queue using Binary Heap",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/implementation-of-priority-queue-using-binary-heap/1",
      "difficulty": "Easy",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "626",
      "title": "Heap Sort",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/heap-sort/1",
      "difficulty": "Medium",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "627",
      "title": "Does Array Represent Heap?",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/does-array-represent-heap4345/1",
      "difficulty": "Easy",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "628",
      "title": "Is Binary Tree Heap?",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/is-binary-tree-heap/1",
      "difficulty": "Medium",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "629",
      "title": "Operations on Binary Min Heap",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/operations-on-binary-min-heap/1",
      "difficulty": "Medium",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "630",
      "title": "Convert Min Heap to Max Heap",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/convert-min-heap-to-max-heap-1666385109/1",
      "difficulty": "Medium",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "631",
      "title": "Relative Ranks",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/relative-ranks/",
      "difficulty": "Easy",
      "platform": "Leetcode"
  },
  {
      "id": "632",
      "title": "Take Gifts From the Richest Pile",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/take-gifts-from-the-richest-pile/",
      "difficulty": "Easy",
      "platform": "Leetcode"
  },
  {
      "id": "633",
      "title": "Last Stone Weight",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/last-stone-weight/",
      "difficulty": "Easy",
      "platform": "Leetcode"
  },
  {
      "id": "634",
      "title": "Largest Number After Digit Swaps by Parity",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/",
      "difficulty": "Easy",
      "platform": "Leetcode"
  },
  {
      "id": "635",
      "title": "Minimum Amount of Time to Fill Cups",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/",
      "difficulty": "Easy",
      "platform": "Leetcode"
  },
  {
      "id": "636",
      "title": "Seat Reservation Manager",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/seat-reservation-manager/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "637",
      "title": "Sort Characters By Frequency",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/sort-characters-by-frequency/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "638",
      "title": "Reduce Array Size to The Half",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/reduce-array-size-to-the-half/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "639",
      "title": "Longest Happy String",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/longest-happy-string/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "640",
      "title": "Reorganize String",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/reorganize-string/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "641",
      "title": "Maximum Average Pass Ratio",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-average-pass-ratio/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "642",
      "title": "Find Score of an Array After Marking All Elements",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "643",
      "title": "Furthest Building You Can Reach",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/furthest-building-you-can-reach/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "644",
      "title": "Distant Barcodes",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/distant-barcodes/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "645",
      "title": "Task Scheduler",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/task-scheduler/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "646",
      "title": "Maximal Score After Applying K Operations",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/maximal-score-after-applying-k-operations/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "647",
      "title": "Single Threaded CPU",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/single-threaded-cpu/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "648",
      "title": "Most Popular Video Creator",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/most-popular-video-creator/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "649",
      "title": "Total Cost to Hire K Workers",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/total-cost-to-hire-k-workers/description/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "650",
      "title": "Most Frequent IDs",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/most-frequent-ids/description/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "651",
      "title": "Process Tasks Using Servers",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/process-tasks-using-servers/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "652",
      "title": "Maximum Number of Eaten Apples",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-number-of-eaten-apples/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "653",
      "title": "Maximum Number of Events That Can Be Attended",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/description/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "654",
      "title": "Minimum Operations to Exceed Threshold Value II",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "655",
      "title": "Put Marbles in Bags",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/put-marbles-in-bags/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "656",
      "title": "Maximum Spending After Buying Items",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-spending-after-buying-items/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "657",
      "title": "Trapping Rain Water II",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/trapping-rain-water-ii/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "658",
      "title": "Maximum Subsequence Score",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-subsequence-score/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "659",
      "title": "Maximum Performance of a Team",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-performance-of-a-team/description/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "660",
      "title": "Max Value of Equation",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/max-value-of-equation/description/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "661",
      "title": "The Skyline Problem",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/the-skyline-problem/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "662",
      "title": "Maximum Elegance of a K-Length Subsequence",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/description/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "663",
      "title": "The K Weakest Rows in a Matrix",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/",
      "difficulty": "Easy",
      "platform": "Leetcode"
  },
  {
      "id": "664",
      "title": "Kth Largest Element in an Array",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/kth-largest-element-in-an-array/description/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "665",
      "title": "Kth Largest Element in a Stream",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
      "difficulty": "Easy",
      "platform": "Leetcode"
  },
  {
      "id": "666",
      "title": "Find Subsequence of Length K With the Largest Sum",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/description/",
      "difficulty": "Easy",
      "platform": "Leetcode"
  },
  {
      "id": "667",
      "title": "K-th Smallest Prime Fraction",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/k-th-smallest-prime-fraction/description/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "668",
      "title": "K Closest Points to Origin",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/k-closest-points-to-origin/description/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "669",
      "title": "Top K Frequent Elements",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/top-k-frequent-elements/description/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "670",
      "title": "Kth Smallest Element in a Sorted Matrix",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "671",
      "title": "Find Kth Largest XOR Coordinate Value",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/description/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "672",
      "title": "Top K Frequent Words",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/top-k-frequent-words/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "673",
      "title": "Find K Closest Elements",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/find-k-closest-elements/description/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "674",
      "title": "Ugly Number II",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/ugly-number-ii/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "675",
      "title": "Find the Kth Largest Integer in the Array",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/description/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "676",
      "title": "Reward Top K Students",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/reward-top-k-students/description/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "677",
      "title": "Query Kth Smallest Trimmed Number",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/query-kth-smallest-trimmed-number/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "678",
      "title": "K Highest Ranked Items Within a Price Range",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/description/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "679",
      "title": "Find the Kth Smallest Sum of a Matrix With Sorted Rows",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/description/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "680",
      "title": "Find the K-Sum of an Array",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/find-the-k-sum-of-an-array/description/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "681",
      "title": "Remove Stones to Minimize the Total",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/remove-stones-to-minimize-the-total/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "682",
      "title": "Minimum Operations to Halve Array Sum",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-operations-to-halve-array-sum/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "683",
      "title": "The Number of the Smallest Unoccupied Chair",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "684",
      "title": "Lexicographically Minimum String After Removing Stars",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/description/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "685",
      "title": "Replace Question Marks in String to Minimize Its Value",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/replace-question-marks-in-string-to-minimize-its-value/description/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "686",
      "title": "Minimum Sum of Squared Difference",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-sum-of-squared-difference/description/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "687",
      "title": "Minimum Cost to Hire K Workers",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "688",
      "title": "Minimize Deviation in Array",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/minimize-deviation-in-array/description/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "689",
      "title": "Minimum Moves to Move a Box to Their Target Location",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/description/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "690",
      "title": "Minimum Interval to Include Each Query",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-interval-to-include-each-query/description/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "691",
      "title": "Merge K Sorted Lists",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/merge-k-sorted-lists/description/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "692",
      "title": "Find K Pairs with Smallest Sums",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/  ",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "693",
      "title": "Merge K Sorted Arrays",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/merge-k-sorted-arrays/1",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "694",
      "title": "Number of Orders in the Backlog",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-orders-in-the-backlog/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "695",
      "title": "Sliding Window Median",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/sliding-window-median/description/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "696",
      "title": "IPO",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/ipo/description/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "697",
      "title": "Find Median from Data Stream",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/find-median-from-data-stream/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "698",
      "title": "Meeting Rooms III",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/meeting-rooms-iii/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "699",
      "title": "Time to Cross a Bridge",
      "status": "Unsolved",
      "tags": [
          "Heap & PQ"
      ],
      "problemLink": "https://leetcode.com/problems/time-to-cross-a-bridge/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "700",
      "title": "Implement Trie (Prefix Tree)",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/implement-trie-prefix-tree/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "701",
      "title": "Trie Delete",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/trie-delete/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card",
      "difficulty": "Hard",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "702",
      "title": "Design Add and Search Words Data Structure",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "703",
      "title": "Map Sum Pairs",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/map-sum-pairs/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "704",
      "title": "Maximum XOR of Two Numbers in an Array",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "705",
      "title": "Minimum XOR Value Pair",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/minimum-xor-value-pair/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card",
      "difficulty": "Hard",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "706",
      "title": "Maximum XOR With an Element From Array",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "707",
      "title": "Count Pairs With XOR in a Range",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/count-pairs-with-xor-in-a-range/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "708",
      "title": "Maximum Strong Pair XOR II",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-strong-pair-xor-ii/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "709",
      "title": "Longest Common Prefix",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/longest-common-prefix/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "710",
      "title": "Find the Length of the Longest Common Prefix",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "711",
      "title": "Search Suggestions System",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/search-suggestions-system/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "712",
      "title": "Sum of Prefix Scores of Strings",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/sum-of-prefix-scores-of-strings/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "713",
      "title": "Prefix and Suffix Search",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/prefix-and-suffix-search/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "714",
      "title": "Longest Common Suffix Queries",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/longest-common-suffix-queries/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "715",
      "title": "Count Prefix and Suffix Pairs II",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "716",
      "title": "Stream of Characters",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/stream-of-characters/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "717",
      "title": "Extra Characters in a String",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/extra-characters-in-a-string/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "718",
      "title": "Implement Magic Dictionary",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/implement-magic-dictionary/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "719",
      "title": "Number of Matching Subsequences",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-matching-subsequences/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "720",
      "title": "Camelcase Matching",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/camelcase-matching/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "721",
      "title": "Short Encoding of Words",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/short-encoding-of-words/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "722",
      "title": "Encrypt and Decrypt Strings",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/encrypt-and-decrypt-strings/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "723",
      "title": "Longest Word in Dictionary",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/longest-word-in-dictionary/description/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "724",
      "title": "Construct String With Minimum Cost",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/construct-string-with-minimum-cost/description/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "725",
      "title": "Shortest Uncommon Substring in an Array",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "726",
      "title": "Word Break",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/word-break/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "727",
      "title": "Word Break II",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/word-break-ii/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "728",
      "title": "Word Search II",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/word-search-ii/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "729",
      "title": "Palindrome Pairs",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/palindrome-pairs/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "730",
      "title": "Remove Sub-Folders from the Filesystem",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "731",
      "title": "Delete Duplicate Folders in System",
      "status": "Unsolved",
      "tags": [
          "Tries"
      ],
      "problemLink": "https://leetcode.com/problems/delete-duplicate-folders-in-system/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "1039",
      "title": "DFS Traversal",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://www.naukri.com/code360/problems/dfs-traversal_630462",
      "difficulty": "Easy",
      "platform": "Naukri"
  },
  {
      "id": "1040",
      "title": "Find if Path Exists in Graph",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/find-if-path-exists-in-graph/description/",
      "difficulty": "Easy",
      "platform": "LeetCode"
  },
  {
      "id": "1041",
      "title": "Keys and Rooms",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/keys-and-rooms/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1042",
      "title": "Number of Provinces",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-provinces/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1043",
      "title": "Count the Number of Complete Components",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/count-the-number-of-complete-components/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1044",
      "title": "Reorder Routes to Make All Paths Lead to the City Zero",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1045",
      "title": "Longest Cycle in a Graph",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/longest-cycle-in-a-graph/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1046",
      "title": "BFS in Graph",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://www.naukri.com/code360/problems/bfs-in-graph_973002",
      "difficulty": "Easy",
      "platform": "Naukri"
  },
  {
      "id": "1047",
      "title": "Snakes and Ladders",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/snakes-and-ladders/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1048",
      "title": "Open the Lock",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/open-the-lock/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1049",
      "title": "Round Trip ",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://cses.fi/problemset/task/1667",
      "difficulty": "Medium",
      "platform": "CSES"
  },
  {
      "id": "1050",
      "title": "Word Ladder",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/word-ladder/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1051",
      "title": "Valid BFS? ",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://codeforces.com/problemset/problem/1037/D",
      "difficulty": "Hard",
      "platform": "Codeforces"
  },
  {
      "id": "1052",
      "title": "Count the Number of Houses at a Certain Distance I",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1053",
      "title": "As Far from Land as Possible",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/as-far-from-land-as-possible/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1054",
      "title": "Minimum Operations to Convert Number",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-operations-to-convert-number/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1055",
      "title": "Minimum Score of a Path Between Two Cities",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1056",
      "title": "Shortest Path with Alternating Colors",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/shortest-path-with-alternating-colors/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1057",
      "title": "Minimum Number of Operations to Make X and Y Equal",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1058",
      "title": "Shortest Path Visiting All Nodes",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/shortest-path-visiting-all-nodes/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1059",
      "title": "Jump Game III",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/jump-game-iii/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1060",
      "title": "Clone Graph",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/clone-graph/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1061",
      "title": "Last Day Where You Can Still Cross",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/last-day-where-you-can-still-cross/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1062",
      "title": "Sliding Puzzle",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/sliding-puzzle/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1063",
      "title": "Maximum Candies You Can Get from Boxes",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/description/ ",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1064",
      "title": "Shortest Path to Get All Keys",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/shortest-path-to-get-all-keys/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1065",
      "title": "Jump Game IV",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/jump-game-iv/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1066",
      "title": "Word Ladder II",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/word-ladder-ii/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1067",
      "title": "Escape the Spreading Fire",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/escape-the-spreading-fire/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1068",
      "title": "Detect Cycle in an Undirected Graph (GeeksforGeeks)",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/0",
      "difficulty": "Medium",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "1069",
      "title": "Detect Cycle in a Directed Graph (GeeksforGeeks)",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1",
      "difficulty": "Medium",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "1070",
      "title": "Check if a Graph Has a Cycle of Odd Length",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://www.naukri.com/code360/library/check-if-a-graph-has-a-cycle-of-odd-length",
      "difficulty": "Medium",
      "platform": "Naukri"
  },
  {
      "id": "1071",
      "title": "Detect Cycles in 2D Grid",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/detect-cycles-in-2d-grid/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1072",
      "title": "Shortest Cycle in a Graph",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/shortest-cycle-in-a-graph/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1073",
      "title": "Is Graph Bipartite?",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/is-graph-bipartite/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1074",
      "title": "Possible Bipartition",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/possible-bipartition/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1075",
      "title": "Flower Planting With No Adjacent",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/flower-planting-with-no-adjacent/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1076",
      "title": "Divide Nodes into the Maximum Number of Groups",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1080",
      "title": "Course Schedule",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/course-schedule",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1081",
      "title": "Course Schedule II",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/course-schedule-ii",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1082",
      "title": "Find Eventual Safe States",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/find-eventual-safe-states/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1083",
      "title": "Minimum Height Trees",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-height-trees",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1084",
      "title": "Loud and Rich",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/loud-and-rich",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1085",
      "title": "All Ancestors of a Node in a Directed Acyclic Graph",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1086",
      "title": "Find All Possible Recipes from Given Supplies",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1087",
      "title": "Alien Dictionary ",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/alien-dictionary/1",
      "difficulty": "Hard",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "1088",
      "title": "Longest Increasing Path in a Matrix",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1089",
      "title": "Cat and Mouse",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/cat-and-mouse/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1090",
      "title": "Sort Items by Groups Respecting Dependencies",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1091",
      "title": "Sort Items by Groups Respecting Dependencies",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1092",
      "title": "Largest Color Value in a Directed Graph",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/largest-color-value-in-a-directed-graph/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1093",
      "title": "Parallel Courses III",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/parallel-courses-iii",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1094",
      "title": "Parallel Courses II",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/parallel-courses-ii/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1095",
      "title": "Number of Increasing Paths in a Grid",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-increasing-paths-in-a-grid",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1096",
      "title": "Build a Matrix With Conditions",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/build-a-matrix-with-conditions",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1097",
      "title": "Flood Fill",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/flood-fill/description/",
      "difficulty": "Easy",
      "platform": "LeetCode"
  },
  {
      "id": "1098",
      "title": "Island Perimeter",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/island-perimeter/description/",
      "difficulty": "Easy",
      "platform": "LeetCode"
  },
  {
      "id": "1099",
      "title": "Battleships in a Board",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/battleships-in-a-board/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1100",
      "title": "Number of Islands",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-islands/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1101",
      "title": "Max Area of Island",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/max-area-of-island/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1102",
      "title": "Count Sub Islands",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/count-sub-islands/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1103",
      "title": "Find All Groups of Farmland",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/find-all-groups-of-farmland/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1104",
      "title": "Rotting Oranges",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/rotting-oranges/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1105",
      "title": "Number of Enclaves",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-enclaves/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1106",
      "title": "Map of Highest Peak",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/map-of-highest-peak/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1107",
      "title": "Surrounded Regions",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/surrounded-regions/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1108",
      "title": "Number of Closed Islands",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-closed-islands/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1109",
      "title": "01 Matrix",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/01-matrix/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1110",
      "title": "Shortest Bridge",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/shortest-bridge/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1111",
      "title": "Shortest Route I",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://cses.fi/problemset/task/1671/",
      "difficulty": "Medium",
      "platform": "CSES"
  },
  {
      "id": "1112",
      "title": "Dijkstra? ",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://codeforces.com/contest/20/problem/C",
      "difficulty": "Medium",
      "platform": "Codeforces"
  },
  {
      "id": "1113",
      "title": "Investigation",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://cses.fi/problemset/task/1202/",
      "difficulty": "Medium",
      "platform": "CSES"
  },
  {
      "id": "1114",
      "title": "Flight Discount",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://cses.fi/problemset/task/1195",
      "difficulty": "Medium",
      "platform": "CSES"
  },
  {
      "id": "1115",
      "title": "Network Delay Time",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/network-delay-time/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1116",
      "title": "Cheapest Flights Within K Stops",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/cheapest-flights-within-k-stops",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1117",
      "title": "Number of Ways to Arrive at Destination",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1118",
      "title": "Path with Maximum Probability",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/path-with-maximum-probability/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1119",
      "title": "Path with Minimum Effort",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/path-with-minimum-effort/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1120",
      "title": "Number of Restricted Paths from First to Last Node",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1121",
      "title": "Reachable Nodes in Subdivided Graph",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1122",
      "title": "Minimum Cost to Make at Least One Valid Path in a Grid",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "Minimum Cost to Make at Least One Valid Path in a Grid",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1123",
      "title": "Minimum Obstacle Removal to Reach Corner",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "Minimum Obstacle Removal to Reach Corner",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1124",
      "title": "Shortest Path in Binary Matrix",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/shortest-path-in-binary-matrix/description/ ",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1125",
      "title": "Nearest Exit from Entrance in Maze",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/description/ ",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1126",
      "title": "Minimum Cost to Make at Least One Valid Path in a Grid",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1127",
      "title": "Second Minimum Time to Reach Destination",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/second-minimum-time-to-reach-destination/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1128",
      "title": "High Score ",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://cses.fi/problemset/task/1673",
      "difficulty": "Medium",
      "platform": "CSES"
  },
  {
      "id": "1129",
      "title": "Cycle Finding",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://cses.fi/problemset/task/1197",
      "difficulty": "Medium",
      "platform": "CSES"
  },
  {
      "id": "1130",
      "title": "Bus Routes",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/bus-routes/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1131",
      "title": "Road Construction",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://cses.fi/problemset/task/1672/",
      "difficulty": "Medium",
      "platform": "CSES"
  },
  {
      "id": "1132",
      "title": "Course Schedule IV",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/course-schedule-iv",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1133",
      "title": "Find the City With the Smallest Number of Neighbors at a Threshold Distance",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1134",
      "title": "Count the Number of Houses at a Certain Distance I",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/description/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1135",
      "title": "Minimum Cost to Convert String I",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/minimum-cost-to-convert-string-i/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1136",
      "title": "B. Greg and Array ",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://codeforces.com/problemset/problem/295/B",
      "difficulty": "Medium",
      "platform": "Codeforces"
  },
  {
      "id": "1137",
      "title": "Design Graph With Shortest Path Calculator",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/design-graph-with-shortest-path-calculator",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1138",
      "title": "Number of Possible Sets of Closing Branches",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1140",
      "title": "Find the Shortest Superstring",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/find-the-shortest-superstring/description/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "1143",
      "title": "Redundant Connection",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/redundant-connection/",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "1144",
      "title": "Satisfiability of Equality Equations",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/satisfiability-of-equality-equations/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1145",
      "title": "Smallest String With Swaps",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/smallest-string-with-swaps/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1146",
      "title": "Accounts Merge",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/accounts-merge/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1147",
      "title": "Most Stones Removed with Same Row or Column",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1148",
      "title": "Find Latest Group of Size M",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/find-latest-group-of-size-m/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1149",
      "title": "Redundant Connection II",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/redundant-connection-ii/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1150",
      "title": "Making a Large Island",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/making-a-large-island/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1151",
      "title": "GCD Sort of an Array",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/gcd-sort-of-an-array/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1152",
      "title": "Bricks Falling When Hit",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/bricks-falling-when-hit/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1153",
      "title": "Checking Existence of Edge Length Limited Paths",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1154",
      "title": "Remove Max Number of Edges to Keep Graph Fully Traversable",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1155",
      "title": "Rank Transform of a Matrix",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/rank-transform-of-a-matrix",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1156",
      "title": "Primâ€™s Minimum Spanning Tree (MST) â€“ Greedy Algorithm ",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/",
      "difficulty": "Theory",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "1157",
      "title": "Kruskalâ€™s Minimum Spanning Tree Algorithm â€“ Greedy Algorithm ",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
      "difficulty": "Theory",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "1158",
      "title": "Minimum Spanning Tree ",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1",
      "difficulty": "Medium",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "1159",
      "title": "Min Cost to Connect All Points",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/min-cost-to-connect-all-points/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1160",
      "title": "Water Connection Problem ",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://www.geeksforgeeks.org/problems/water-connection-problem5822/1",
      "difficulty": "Hard",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "1161",
      "title": "Connecting Cities with Minimum Cost",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://www.naukri.com/code360/problems/connecting-cities-with-minimum-cost_1386586",
      "difficulty": "Medium",
      "platform": "Naukri"
  },
  {
      "id": "1162",
      "title": "Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1163",
      "title": "Remove Max Number of Edges to Keep Graph Fully Traversable",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/description/",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1164",
      "title": "Articulation Points (or Cut Vertices) in a Graph ",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/",
      "difficulty": "Theory",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "1165",
      "title": "Strongly Connected Components",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://www.geeksforgeeks.org/strongly-connected-components/",
      "difficulty": "Theory",
      "platform": "GeeksforGeeks"
  },
  {
      "id": "1166",
      "title": "Critical Connections in a Network",
      "status": "Unsolved",
      "tags": [
          "Graphs"
      ],
      "problemLink": "https://leetcode.com/problems/critical-connections-in-a-network/",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1222",
      "title": "Divisor Game",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://leetcode.com/problems/divisor-game",
      "difficulty": "Easy",
      "platform": "LeetCode"
  },
  {
      "id": "1223",
      "title": "Nim Game",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://leetcode.com/problems/nim-game",
      "difficulty": "Easy",
      "platform": "LeetCode"
  },
  {
      "id": "1224",
      "title": "Find the Winning Player in Coin Game",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://leetcode.com/problems/find-the-winning-player-in-coin-game",
      "difficulty": "Easy",
      "platform": "LeetCode"
  },
  {
      "id": "1225",
      "title": "Yet Another String Game",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://codeforces.com/problemset/problem/1480/A",
      "difficulty": "Easy",
      "platform": "Codeforces"
  },
  {
      "id": "1226",
      "title": "Substring Removal Game",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://codeforces.com/problemset/problem/1398/B",
      "difficulty": "Easy",
      "platform": "Codeforces"
  },
  {
      "id": "1227",
      "title": "Sasha and Sticks",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://codeforces.com/problemset/problem/832/A",
      "difficulty": "Easy",
      "platform": "Codeforces"
  },
  {
      "id": "1228",
      "title": "Card Game",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://codeforces.com/problemset/problem/1270/A",
      "difficulty": "Easy",
      "platform": "Codeforces"
  },
  {
      "id": "1229",
      "title": "01 Game",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://codeforces.com/problemset/problem/1373/B",
      "difficulty": "Easy",
      "platform": "Codeforces"
  },
  {
      "id": "1230",
      "title": "Digit Game",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://codeforces.com/problemset/problem/1419/A",
      "difficulty": "Easy",
      "platform": "Codeforces"
  },
  {
      "id": "1231",
      "title": "Can I Win",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://leetcode.com/problems/can-i-win",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1232",
      "title": "Guess Number Higher or Lower II",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://leetcode.com/problems/guess-number-higher-or-lower-ii",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1233",
      "title": "Maximum Number of Coins You Can Get",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-number-of-coins-you-can-get",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1234",
      "title": "Remove Colored Pieces if Both Neighbors are the Same Color",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color",
      "difficulty": "Medium",
      "platform": "LeetCode"
  },
  {
      "id": "1235",
      "title": "Digit Game",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://codeforces.com/problemset/problem/1419/A",
      "difficulty": "Medium",
      "platform": "Codeforces"
  },
  {
      "id": "1236",
      "title": "Dinner With Emma",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://codeforces.com/problemset/problem/616/B",
      "difficulty": "Medium",
      "platform": "Codeforces"
  },
  {
      "id": "1237",
      "title": "Matrix Game",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://codeforces.com/problemset/problem/1365/A",
      "difficulty": "Medium",
      "platform": "Codeforces"
  },
  {
      "id": "1238",
      "title": "Sequential Game",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://codeforces.com/contest/1382/problem/B",
      "difficulty": "Medium",
      "platform": "Codeforces"
  },
  {
      "id": "1239",
      "title": "Ping-pong",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://codeforces.com/problemset/problem/1455/C",
      "difficulty": "Medium",
      "platform": "Codeforces"
  },
  {
      "id": "1240",
      "title": "Godsend",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://codeforces.com/problemset/problem/841/B",
      "difficulty": "Medium",
      "platform": "Codeforces"
  },
  {
      "id": "1241",
      "title": "PolandBall and Game",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://codeforces.com/problemset/problem/755/B",
      "difficulty": "Medium",
      "platform": "Codeforces"
  },
  {
      "id": "1242",
      "title": "Even-Odd Game",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://codeforces.com/problemset/problem/1472/D",
      "difficulty": "Medium",
      "platform": "Codeforces"
  },
  {
      "id": "1243",
      "title": "Palindrome Game",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://codeforces.com/contest/1527/problem/B1",
      "difficulty": "Medium",
      "platform": "Codeforces"
  },
  {
      "id": "1244",
      "title": "Cat and Mouse",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://leetcode.com/problems/cat-and-mouse",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1245",
      "title": "Cat and Mouse II",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://leetcode.com/problems/cat-and-mouse-ii",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1246",
      "title": "Guess the Word",
      "status": "Unsolved",
      "tags": [
          "Game Theory"
      ],
      "problemLink": "https://leetcode.com/problems/guess-the-word",
      "difficulty": "Hard",
      "platform": "LeetCode"
  },
  {
      "id": "1247",
      "title": "Alternating Groups III",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://leetcode.com/problems/alternating-groups-iii/description/ ",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "1248",
      "title": "Number of Pairs Satisfying Inequality",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://leetcode.com/problems/number-of-pairs-satisfying-inequality/description/ ",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "1249",
      "title": "Count Good Triplets in an Array",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://leetcode.com/problems/count-good-triplets-in-an-array/description/ ",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "1250",
      "title": "Booking Concert Tickets in Groups",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://leetcode.com/problems/booking-concert-tickets-in-groups/description/ ",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "1251",
      "title": "Longest Uploaded Prefix",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://leetcode.com/problems/longest-uploaded-prefix/description/ ",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "1252",
      "title": "Range Sum Query - Mutable",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://leetcode.com/problems/range-sum-query-mutable/description/  ",
      "difficulty": "Medium",
      "platform": "Leetcode"
  },
  {
      "id": "1253",
      "title": "Falling Squares",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://leetcode.com/problems/falling-squares/description/ ",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "1254",
      "title": "Range Module",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://leetcode.com/problems/range-module/description/ ",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "1255",
      "title": "Count of Range Sum",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://leetcode.com/problems/count-of-range-sum/description/ ",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "1256",
      "title": "Longest Substring of One Repeating Character",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://leetcode.com/problems/longest-substring-of-one-repeating-character/description/ ",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "1257",
      "title": "Maximum Sum Queries",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-sum-queries/description/ ",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "1258",
      "title": "Handling Sum Queries After Update",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://leetcode.com/problems/handling-sum-queries-after-update/description/ ",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "1259",
      "title": "Peaks in Array",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://leetcode.com/problems/peaks-in-array/description/ ",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "1260",
      "title": "Maximum Sum of Subsequence With Non-Adjacent Elements",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-sum-of-subsequence-with-non-adjacent-elements/description/",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "1261",
      "title": "Block Placement Queries",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://leetcode.com/problems/block-placement-queries/description/ ",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "1262",
      "title": "Range Minimum Query",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://www.spoj.com/problems/RMQSQ/",
      "difficulty": "Hard",
      "platform": "SPOJ"
  },
  {
      "id": "1263",
      "title": "Catapult that ball",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "http://www.spoj.com/problems/THRBL/",
      "difficulty": "Hard",
      "platform": "SPOJ"
  },
  {
      "id": "1264",
      "title": "Miraculous",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "http://www.spoj.com/problems/TNVFC1M/",
      "difficulty": "Hard",
      "platform": "SPOJ"
  },
  {
      "id": "1265",
      "title": "Negative Score",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "http://www.spoj.com/problems/RPLN/",
      "difficulty": "Hard",
      "platform": "SPOJ"
  },
  {
      "id": "1266",
      "title": "DIFERENCIJA",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://www.spoj.com/problems/DIFERENC/",
      "difficulty": "Hard",
      "platform": "SPOJ"
  },
  {
      "id": "1267",
      "title": "Find a Value of a Mysterious Function Closest to Target",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/ ",
      "difficulty": "Hard",
      "platform": "Leetcode"
  },
  {
      "id": "1268",
      "title": "Maximum Binary Tree",
      "status": "Unsolved",
      "tags": [
          "Advance Algorithm"
      ],
      "problemLink": "https://leetcode.com/problems/maximum-binary-tree/description/ ",
      "difficulty": "Hard",
      "platform": "Leetcode"
  }
];

export interface SubGroup {
  id: string;
  title: string;
  description: string;
  problems: string[];
}

export const subgroups = [
  {
    "id": "5",
    "title": "Sorting",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Bubble Sort",
        "description": "",
        "problems": [
          "1"
        ]
      },
      {
        "id": "2",
        "title": "Insertion Sort",
        "description": "",
        "problems": [
          "2",
          "3"
        ]
      },
      {
        "id": "3",
        "title": "Selection Sort",
        "description": "",
        "problems": [
          "4"
        ]
      },
      {
        "id": "4",
        "title": "Merge Sort",
        "description": "",
        "problems": [
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12"
        ]
      },
      {
        "id": "5",
        "title": "Quick Sort",
        "description": "",
        "problems": [
          "13",
          "14"
        ]
      },
      {
        "id": "6",
        "title": "Counting Sort",
        "description": "",
        "problems": [
          "15",
          "16",
          "17",
          "18"
        ]
      },
      {
        "id": "7",
        "title": "Radix Sort",
        "description": "",
        "problems": [
          "19"
        ]
      },
      {
        "id": "8",
        "title": "Bucket Sort",
        "description": "",
        "problems": [
          "20",
          "21",
          "22",
          "23",
          "24",
          "25"
        ]
      },
      {
        "id": "9",
        "title": "Cyclic Sort",
        "description": "",
        "problems": [
          "407",
          "411",
          "177"
        ]
      },
      {
        "id": "10",
        "title": "Custom Sort",
        "description": "",
        "problems": [
          "26",
          "27",
          "28",
          "29",
          "30"
        ]
      }
    ]
  },
  {
    "id": "6",
    "title": "Two Pointers",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Two Pointer on Arrays",
        "description": "",
        "problems": [
          "40",
          "41",
          "43",
          "44",
          "45",
          "46",
          "47",
          "49",
          "51",
          "53",
          "54",
          "56",
          "57",
          "58",
          "59",
          "60",
          "62",
          "65",
          "68",
          "69"
        ]
      },
      {
        "id": "2",
        "title": "Two Pointer on Strings",
        "description": "",
        "problems": [
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "42",
          "48",
          "50",
          "52",
          "55",
          "61",
          "63",
          "64",
          "66",
          "67"
        ]
      }
    ]
  },
  {
    "id": "7",
    "title": "Prefix Sum",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Prefix Sum",
        "description": "",
        "problems": [
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84"
        ]
      },
      {
        "id": "2",
        "title": "Line Sweep",
        "description": "",
        "problems": [
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93"
        ]
      }
    ]
  },
  {
    "id": "8",
    "title": "Matrix",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Matrix Transformation and Modification",
        "description": "",
        "problems": [
          "94",
          "97",
          "100",
          "106",
          "109",
          "110",
          "111",
          "112",
          "113",
          "114",
          "115",
          "129",
          "133"
        ]
      },
      {
        "id": "2",
        "title": "Matrix Patterns and Validity Checks",
        "description": "",
        "problems": [
          "102",
          "105",
          "107",
          "116",
          "117",
          "118",
          "124",
          "125",
          "126",
          "130",
          "131",
          "132",
          "134",
          "135",
          "136",
          "137"
        ]
      },
      {
        "id": "3",
        "title": "Matrix Traversal and Summation",
        "description": "",
        "problems": [
          "95",
          "96",
          "98",
          "99",
          "101",
          "103",
          "104",
          "108",
          "119",
          "120",
          "121",
          "122",
          "123",
          "127",
          "128"
        ]
      }
    ]
  },
  {
    "id": "9",
    "title": "Hashing",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Implementary Problems",
        "description": "",
        "problems": [
          "138",
          "139",
          "140",
          "141",
          "142",
          "143",
          "144",
          "145",
          "146",
          "147",
          "148",
          "149",
          "150",
          "151",
          "152",
          "153",
          "154",
          "155",
          "156",
          "157",
          "158",
          "159",
          "160",
          "161",
          "162",
          "163",
          "164",
          "165",
          "166",
          "167",
          "168",
          "169",
          "170",
          "171",
          "172",
          "173",
          "174",
          "175",
          "176",
          "177",
          "178",
          "179",
          "180",
          "181",
          "182",
          "183",
          "184",
          "185",
          "186",
          "187",
          "188",
          "189",
          "190",
          "191",
          "192",
          "193",
          "194",
          "195",
          "196",
          "197",
          "198",
          "199",
          "200",
          "201",
          "202",
          "203",
          "204",
          "205",
          "206",
          "207",
          "208",
          "209",
          "210",
          "211",
          "212",
          "213",
          "214",
          "215"
        ]
      },
      {
        "id": "2",
        "title": "Hashing With Prefix Sum",
        "description": "",
        "problems": [
          "216",
          "217",
          "218",
          "219",
          "220",
          "221",
          "222",
          "223",
          "224",
          "225",
          "226",
          "227",
          "228",
          "229"
        ]
      }
    ]
  },
  {
    "id": "10",
    "title": "Sliding Window",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Fixed Size Sliding-Window",
        "description": "",
        "problems": [
          "9999",
          "230",
          "231",
          "232",
          "233",
          "234",
          "235",
          "236",
          "237",
          "238",
          "239",
          "240",
          "241",
          "242",
          "243"
        ]
      },
      {
        "id": "2",
        "title": "Dynamic Size Sliding-Window",
        "description": "",
        "problems": [
          "244",
          "245",
          "246",
          "247",
          "248",
          "249",
          "250",
          "251",
          "252",
          "253",
          "254",
          "255",
          "256",
          "257",
          "258",
          "259",
          "260",
          "261",
          "262",
          "263",
          "264",
          "265"
        ]
      }
    ]
  },
  {
    "id": "11",
    "title": "Linked List",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Linked List (Part 1)",
        "description": "",
        "problems": [
          "266",
          "267",
          "268",
          "269",
          "270",
          "271",
          "272",
          "273",
          "274",
          "275",
          "276",
          "277",
          "278",
          "279",
          "280",
          "281",
          "282",
          "283",
          "284",
          "285",
          "286",
          "287"
        ]
      },
      {
        "id": "2",
        "title": "Linked List (Part 2) : Design Pattern",
        "description": "",
        "problems": [
          "288",
          "289",
          "290",
          "291",
          "292",
          "293",
          "294"
        ]
      }
    ]
  },
  {
    "id": "12",
    "title": "Stack",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Parentheses Problem",
        "description": "",
        "problems": [
          "295",
          "296",
          "297",
          "298",
          "299",
          "300",
          "301",
          "302",
          "303",
          "304",
          "305",
          "306"
        ]
      },
      {
        "id": "2",
        "title": "Design Problems",
        "description": "",
        "problems": [
          "307",
          "308",
          "309",
          "310"
        ]
      },
      {
        "id": "3",
        "title": "Advance Stack Problems",
        "description": "",
        "problems": [
          "311",
          "312",
          "313",
          "314",
          "315",
          "316",
          "317",
          "318",
          "319",
          "320",
          "321",
          "322"
        ]
      },
      {
        "id": "4",
        "title": "Monotonic Stack",
        "description": "",
        "problems": [
          "323",
          "324",
          "325",
          "326",
          "327",
          "328",
          "329",
          "330",
          "331",
          "332",
          "333",
          "334",
          "335",
          "336",
          "337",
          "338",
          "339",
          "340",
          "341",
          "342",
          "343",
          "344",
          "345",
          "346",
          "347",
          "348",
          "349",
          "350",
          "351"
        ]
      }
    ]
  },
  {
    "id": "13",
    "title": "Queues",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Implementation Problems",
        "description": "",
        "problems": [
          "352",
          "353",
          "354",
          "355",
          "356",
          "357",
          "358",
          "359",
          "360"
        ]
      },
      {
        "id": "2",
        "title": "Singly-Ended Queue",
        "description": "",
        "problems": [
          "361",
          "362",
          "363",
          "364",
          "365",
          "366",
          "367",
          "368"
        ]
      },
      {
        "id": "3",
        "title": "Doubly-Ended Queue",
        "description": "",
        "problems": [
          "369",
          "370",
          "371",
          "372",
          "373",
          "374",
          "375",
          "376"
        ]
      }
    ]
  },
  {
    "id": "14",
    "title": "Binary Search",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Introductory Problems",
        "description": "",
        "problems": [
          "377",
          "378",
          "379"
        ]
      },
      {
        "id": "2",
        "title": "Upper Bound and Lower Bound",
        "description": "",
        "problems": [
          "380",
          "381",
          "382",
          "383",
          "384",
          "385",
          "386",
          "387",
          "388",
          "389",
          "390",
          "391",
          "392",
          "393",
          "394",
          "395",
          "396",
          "397",
          "398",
          "399",
          "400",
          "401",
          "402"
        ]
      },
      {
        "id": "3",
        "title": "Search on Matrix",
        "description": "",
        "problems": [
          "403",
          "404",
          "405",
          "406"
        ]
      },
      {
        "id": "4",
        "title": "Missing and Repeating Number",
        "description": "",
        "problems": [
          "407",
          "408",
          "409",
          "410",
          "411"
        ]
      },
      {
        "id": "5",
        "title": "Binary Search on Semi-Sorted Space",
        "description": "",
        "problems": [
          "412",
          "413",
          "414",
          "415",
          "416",
          "417",
          "418",
          "419",
          "420"
        ]
      },
      {
        "id": "6",
        "title": "Binary Search On Answer",
        "description": "",
        "problems": [
          "421",
          "422",
          "423",
          "424",
          "425",
          "426",
          "427",
          "428",
          "429",
          "430",
          "431",
          "432",
          "433",
          "434",
          "435",
          "436",
          "437",
          "438",
          "439",
          "440",
          "441",
          "442",
          "443",
          "444",
          "445",
          "446"
        ]
      },
      {
        "id": "7",
        "title": "Minmax Problems",
        "description": "",
        "problems": [
          "447",
          "448",
          "449",
          "450",
          "451",
          "452"
        ]
      },
      {
        "id": "8",
        "title": "Finding the K-th Element",
        "description": "",
        "problems": [
          "453",
          "454",
          "455",
          "456",
          "457",
          "458",
          "459"
        ]
      }
    ]
  },
  {
    "id": "15",
    "title": "Bit Manipulation",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Basic Bit Concepts",
        "description": "",
        "problems": [
          "460",
          "461",
          "462",
          "463",
          "464",
          "465",
          "466",
          "467",
          "468",
          "469",
          "470",
          "471",
          "472",
          "473",
          "474",
          "475",
          "476",
          "477"
        ]
      },
      {
        "id": "2",
        "title": "Bitwise XOR operator",
        "description": "",
        "problems": [
          "478",
          "479",
          "480",
          "481",
          "482",
          "483",
          "484",
          "485",
          "486",
          "487",
          "488",
          "489",
          "490",
          "491",
          "492",
          "493",
          "494"
        ]
      },
      {
        "id": "3",
        "title": "Bitwise OR operator",
        "description": "",
        "problems": [
          "495",
          "496",
          "497",
          "498",
          "499"
        ]
      },
      {
        "id": "4",
        "title": "Bitwise AND operator",
        "description": "",
        "problems": [
          "500",
          "501",
          "502",
          "503",
          "504",
          "505",
          "506"
        ]
      }
    ]
  },
  {
    "id": "16",
    "title": "Recursion Backtracking",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Recursion Problems",
        "description": "",
        "problems": [
          "546",
          "507",
          "508",
          "509",
          "510",
          "511",
          "512",
          "513",
          "514",
          "515",
          "516",
          "517",
          "518",
          "519",
          "520",
          "521",
          "522",
          "523",
          "524",
          "525"
        ]
      },
      {
        "id": "2",
        "title": "Permutation Problems",
        "description": "",
        "problems": [
          "526",
          "527",
          "528"
        ]
      },
      {
        "id": "3",
        "title": "Combination Problems",
        "description": "",
        "problems": [
          "529",
          "530",
          "531",
          "532",
          "533",
          "534",
          "535",
          "536",
          "537",
          "538",
          "539"
        ]
      },
      {
        "id": "4",
        "title": "Subsets Problems",
        "description": "",
        "problems": [
          "540",
          "541",
          "542",
          "543"
        ]
      },
      {
        "id": "5",
        "title": "Path on Grid Problems",
        "description": "",
        "problems": [
          "544",
          "545"
        ]
      }
    ]
  },
  {
    "id": "17",
    "title": "Binary Tree",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Traversals",
        "description": "",
        "problems": [
          "547",
          "548",
          "549",
          "550"
        ]
      },
      {
        "id": "2",
        "title": "Properties of trees",
        "description": "",
        "problems": [
          "551",
          "552",
          "553",
          "554",
          "555",
          "556",
          "557"
        ]
      },
      {
        "id": "3",
        "title": "Construction of Tree",
        "description": "",
        "problems": [
          "558",
          "559",
          "560",
          "561",
          "562",
          "563"
        ]
      },
      {
        "id": "4",
        "title": "Two tree Validation",
        "description": "",
        "problems": [
          "564",
          "565",
          "566",
          "567",
          "568",
          "569",
          "570",
          "571"
        ]
      },
      {
        "id": "5",
        "title": "Level Order Traversal",
        "description": "",
        "problems": [
          "572",
          "573",
          "574",
          "575",
          "576",
          "577",
          "578",
          "579",
          "580",
          "581",
          "582",
          "583",
          "584"
        ]
      },
      {
        "id": "6",
        "title": "Binary Tree Path",
        "description": "",
        "problems": [
          "585",
          "586",
          "587",
          "588",
          "589",
          "590",
          "591",
          "592"
        ]
      },
      {
        "id": "7",
        "title": "N-ary Tree",
        "description": "",
        "problems": [
          "593",
          "594",
          "595",
          "596"
        ]
      }
    ]
  },
  {
    "id": "18",
    "title": "Binary Search Tree",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Basic Operations",
        "description": "",
        "problems": [
          "597",
          "598",
          "599"
        ]
      },
      {
        "id": "2",
        "title": "Construction of BST",
        "description": "",
        "problems": [
          "600",
          "601",
          "602",
          "603",
          "604",
          "605",
          "606",
          "607",
          "608"
        ]
      },
      {
        "id": "3",
        "title": "Validation and Property",
        "description": "",
        "problems": [
          "609",
          "610",
          "611",
          "612",
          "613",
          "614",
          "615",
          "616",
          "617",
          "618",
          "619",
          "620",
          "621",
          "622",
          "623",
          "624"
        ]
      }
    ]
  },
  {
    "id": "19",
    "title": "Heap & PQ",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Introductory Questions",
        "description": "",
        "problems": [
          "625",
          "626",
          "627",
          "628",
          "629",
          "630"
        ]
      },
      {
        "id": "2",
        "title": "Implementary Questions",
        "description": "",
        "problems": [
          "631",
          "632",
          "633",
          "634",
          "635",
          "636",
          "637",
          "638",
          "639",
          "640",
          "641",
          "642",
          "643",
          "644",
          "645",
          "646",
          "647",
          "648",
          "649",
          "650",
          "651",
          "652",
          "653",
          "654",
          "655",
          "656",
          "657",
          "658",
          "659",
          "660",
          "661",
          "662"
        ]
      },
      {
        "id": "3",
        "title": "Kth Pattern Problems",
        "description": "",
        "problems": [
          "663",
          "664",
          "665",
          "666",
          "667",
          "668",
          "669",
          "670",
          "671",
          "672",
          "673",
          "674",
          "675",
          "676",
          "677",
          "678",
          "679",
          "680"
        ]
      },
      {
        "id": "4",
        "title": "Minimize Operations",
        "description": "",
        "problems": [
          "681",
          "682",
          "683",
          "684",
          "685",
          "686",
          "687",
          "688",
          "689",
          "690"
        ]
      },
      {
        "id": "5",
        "title": "Merge K Sorted Patterns",
        "description": "",
        "problems": [
          "691",
          "692",
          "693"
        ]
      },
      {
        "id": "6",
        "title": "Two Heap Pattern",
        "description": "",
        "problems": [
          "694",
          "695",
          "696",
          "697",
          "698",
          "699"
        ]
      }
    ]
  },
  {
    "id": "20",
    "title": "Tries",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Introductory Questions",
        "description": "",
        "problems": [
          "700",
          "701",
          "702",
          "703"
        ]
      },
      {
        "id": "2",
        "title": "Trie with Bit Manipulation",
        "description": "",
        "problems": [
          "704",
          "705",
          "706",
          "707",
          "708"
        ]
      },
      {
        "id": "3",
        "title": "Trie involving String",
        "description": "",
        "problems": [
          "709",
          "710",
          "711",
          "712",
          "713",
          "714",
          "715",
          "716",
          "717",
          "718",
          "719",
          "720",
          "721",
          "722",
          "723",
          "724"
        ]
      },
      {
        "id": "4",
        "title": "Trie involving Recursion",
        "description": "",
        "problems": [
          "725",
          "726",
          "727",
          "728",
          "729"
        ]
      },
      {
        "id": "5",
        "title": "Trie involving File System",
        "description": "",
        "problems": [
          "730",
          "731"
        ]
      }
    ]
  },
  {
    "id": "21",
    "title": "Greedy",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Part I",
        "description": "",
        "problems": [
          "732",
          "733",
          "734",
          "735",
          "736",
          "737",
          "738",
          "739",
          "740",
          "741",
          "742",
          "743",
          "744",
          "745",
          "746",
          "747",
          "748",
          "749",
          "750",
          "751",
          "752",
          "753",
          "754",
          "755",
          "756",
          "757",
          "758",
          "759",
          "760",
          "761",
          "762",
          "763",
          "764",
          "765",
          "766",
          "767",
          "768",
          "769",
          "770",
          "771"
        ]
      },
      {
        "id": "2",
        "title": "Part II",
        "description": "",
        "problems": [
          "772",
          "773",
          "774",
          "775",
          "776",
          "777",
          "778",
          "779",
          "780",
          "781",
          "782",
          "783",
          "784",
          "785",
          "786",
          "787",
          "788",
          "789"
        ]
      }
    ]
  },
  {
    "id": "22",
    "title": "Dynamic Programming",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Linear DP",
        "description": "",
        "problems": [
          "790",
          "791",
          "792",
          "793",
          "794",
          "795",
          "796",
          "797",
          "798",
          "799",
          "800",
          "801",
          "802",
          "803",
          "804"
        ]
      },
      {
        "id": "2",
        "title": "2 Dimensional DP",
        "description": "",
        "problems": [
          "805",
          "806",
          "807",
          "808",
          "809",
          "810",
          "811",
          "812",
          "813",
          "814",
          "815",
          "816",
          "817",
          "818",
          "819",
          "820",
          "821",
          "822",
          "823",
          "824",
          "825",
          "826",
          "827",
          "828",
          "829",
          "830",
          "831",
          "832",
          "833"
        ]
      },
      {
        "id": "3",
        "title": "DP On Grid",
        "description": "",
        "problems": [
          "834",
          "835",
          "836",
          "837",
          "838",
          "839",
          "840",
          "841",
          "842",
          "843",
          "844",
          "845",
          "846",
          "847",
          "848",
          "849"
        ]
      },
      {
        "id": "4",
        "title": "Knapsack DP",
        "description": "",
        "problems": [
          "850",
          "851",
          "852",
          "853",
          "854",
          "855",
          "856",
          "857",
          "858",
          "859",
          "860",
          "861",
          "862",
          "863",
          "864",
          "865",
          "866",
          "867",
          "868",
          "869"
        ]
      },
      {
        "id": "5",
        "title": "Longest Increasing Subsequence",
        "description": "",
        "problems": [
          "870",
          "871",
          "872",
          "873",
          "874",
          "875",
          "876",
          "877",
          "878",
          "879",
          "880",
          "881",
          "882",
          "883",
          "884"
        ]
      },
      {
        "id": "6",
        "title": "Longest Common Subsequence",
        "description": "",
        "problems": [
          "885",
          "886",
          "887",
          "888",
          "889",
          "890",
          "891",
          "892",
          "893",
          "894",
          "895",
          "896",
          "897",
          "898"
        ]
      },
      {
        "id": "7",
        "title": "DP on String",
        "description": "",
        "problems": [
          "899",
          "900",
          "901",
          "902",
          "903",
          "904",
          "905",
          "906",
          "907",
          "908",
          "909",
          "910",
          "911",
          "912",
          "913",
          "914",
          "915"
        ]
      },
      {
        "id": "8",
        "title": "Cummulative Sum",
        "description": "",
        "problems": [
          "916",
          "917",
          "918",
          "919",
          "920",
          "921",
          "922",
          "923",
          "924",
          "925",
          "926",
          "927",
          "928",
          "929",
          "930"
        ]
      },
      {
        "id": "9",
        "title": "Matrix Chain Multiplication",
        "description": "",
        "problems": [
          "931",
          "932",
          "933",
          "934",
          "935",
          "936",
          "937",
          "938",
          "939",
          "940",
          "941",
          "942",
          "943",
          "944",
          "945",
          "946",
          "947",
          "948"
        ]
      },
      {
        "id": "10",
        "title": "Kadane Algo",
        "description": "",
        "problems": [
          "992",
          "993",
          "994",
          "995",
          "996",
          "997",
          "998"
        ]
      }
    ]
  },
  {
    "id": "23",
    "title": "Graphs",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Graph Representation",
        "description": "",
        "problems": []
      },
      {
        "id": "2",
        "title": "DFS and BFS on Graphs",
        "description": "",
        "problems": [
          "1039",
          "1040",
          "1041",
          "1042",
          "1043",
          "1044",
          "1045",
          "1046",
          "1047",
          "1048",
          "1049",
          "1050",
          "1051",
          "1052",
          "1053",
          "1054",
          "1055",
          "1056",
          "1057",
          "1058",
          "1059",
          "1060",
          "1061",
          "1062",
          "1063",
          "1064",
          "1065",
          "1066",
          "1067"
        ]
      },
      {
        "id": "3",
        "title": "Cycle Detection ",
        "description": "",
        "problems": [
          "1068",
          "1069",
          "1070",
          "1071",
          "1072",
          "1073",
          "1074",
          "1075",
          "1076"
        ]
      },
      {
        "id": "4",
        "title": "Topological Sort",
        "description": "",
        "problems": [
          "1080",
          "1081",
          "1082",
          "1083",
          "1084",
          "1085",
          "1086",
          "1087",
          "1088",
          "1089",
          "1090",
          "1091",
          "1092",
          "1093",
          "1094",
          "1095",
          "1096"
        ]
      },
      {
        "id": "5",
        "title": "Flood Fill",
        "description": "",
        "problems": [
          "1097",
          "1098",
          "1099",
          "1100",
          "1101",
          "1102",
          "1103"
        ]
      },
      {
        "id": "6",
        "title": "Multi Source BFS",
        "description": "",
        "problems": [
          "1104",
          "1105",
          "1106",
          "1107",
          "1108",
          "1109",
          "1110"
        ]
      },
      {
        "id": "7",
        "title": "Dijsktra Algorithm",
        "description": "",
        "problems": [
          "1111",
          "1112",
          "1113",
          "1114",
          "1115",
          "1116",
          "1117",
          "1118",
          "1119",
          "1120",
          "1121",
          "1122",
          "1123",
          "1124",
          "1125",
          "1126",
          "1127"
        ]
      },
      {
        "id": "8",
        "title": "Bellman Ford",
        "description": "",
        "problems": [
          "1128",
          "1129",
          "1130"
        ]
      },
      {
        "id": "9",
        "title": "Floyd Warshall",
        "description": "",
        "problems": [
          "1131",
          "1132",
          "1133",
          "1134",
          "1135",
          "1136",
          "1137",
          "1138"
        ]
      },
      {
        "id": "10",
        "title": "Travelling Salesman Problem",
        "description": "",
        "problems": [
          "1140"
        ]
      },
      {
        "id": "11",
        "title": "Disjoint Set Union",
        "description": "",
        "problems": [
          "1143",
          "1144",
          "1145",
          "1146",
          "1147",
          "1148",
          "1149",
          "1150",
          "1151",
          "1152",
          "1153",
          "1154",
          "1155"
        ]
      },
      {
        "id": "12",
        "title": "Minimum Spanning Tree",
        "description": "",
        "problems": [
          "1156",
          "1157",
          "1158",
          "1159",
          "1160",
          "1161",
          "1162",
          "1163"
        ]
      },
      {
        "id": "13",
        "title": "Additional Graph Algorithm",
        "description": "",
        "problems": [
          "1164",
          "1165",
          "1166"
        ]
      }
    ]
  },
  {
    "id": "24",
    "title": "Combinatorics & Geometry",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Line",
        "description": "",
        "problems": [
          "1186",
          "1187",
          "1188",
          "1189",
          "1190",
          "1191",
          "1192"
        ]
      },
      {
        "id": "2",
        "title": "Rectangle",
        "description": "",
        "problems": [
          "1193",
          "1194",
          "1195",
          "1196",
          "1197",
          "1198",
          "1199",
          "1200"
        ]
      },
      {
        "id": "3",
        "title": "Circle",
        "description": "",
        "problems": [
          "1201",
          "1202",
          "1203",
          "1204",
          "1205",
          "1206"
        ]
      },
      {
        "id": "4",
        "title": "Combinatorics",
        "description": "",
        "problems": [
          "1207",
          "1208",
          "1209",
          "1210",
          "1211",
          "1212",
          "1213",
          "1214",
          "1215",
          "1216",
          "1217",
          "1218",
          "1219",
          "1220",
          "1221"
        ]
      }
    ]
  },
  {
    "id": "25",
    "title": "Game Theory",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Level I",
        "description": "",
        "problems": [
          "1222",
          "1223",
          "1224",
          "1225",
          "1226",
          "1227",
          "1228",
          "1229",
          "1230"
        ]
      },
      {
        "id": "2",
        "title": "Level II",
        "description": "",
        "problems": [
          "1231",
          "1232",
          "1233",
          "1234",
          "1235",
          "1236",
          "1237",
          "1238",
          "1239",
          "1240",
          "1241",
          "1242",
          "1243"
        ]
      },
      {
        "id": "3",
        "title": "Level III",
        "description": "",
        "problems": [
          "1244",
          "1245",
          "1246"
        ]
      }
    ]
  },
  {
    "id": "26",
    "title": "Dynamic Programming 2",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "DP with Bitmask",
        "description": "",
        "problems": [
          "949",
          "950",
          "951",
          "952",
          "953",
          "954",
          "955",
          "956",
          "957",
          "958",
          "959",
          "960",
          "961",
          "962",
          "963",
          "964"
        ]
      },
      {
        "id": "2",
        "title": "Digit DP",
        "description": "",
        "problems": [
          "965",
          "966",
          "967",
          "968",
          "969",
          "970",
          "971",
          "972"
        ]
      },
      {
        "id": "3",
        "title": "DP on Trees",
        "description": "",
        "problems": [
          "973",
          "974",
          "975",
          "976",
          "977",
          "978",
          "979",
          "980",
          "981",
          "982",
          "983",
          "984",
          "985",
          "986",
          "987",
          "988",
          "989",
          "990",
          "991"
        ]
      },
      {
        "id": "4",
        "title": "DP with Math",
        "description": "",
        "problems": [
          "1005",
          "1006",
          "1007",
          "1008",
          "1009",
          "1010",
          "1011",
          "1012",
          "1013",
          "1014",
          "1015",
          "1016",
          "1017"
        ]
      },
      {
        "id": "5",
        "title": "Dp with Probability",
        "description": "",
        "problems": [
          "1018",
          "1019",
          "1020",
          "1021",
          "1022",
          "1023",
          "1024",
          "1025"
        ]
      }
    ]
  },
  {
    "id": "27",
    "title": "String Matching",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Introduction",
        "description": "",
        "problems": [
          "1167",
          "1168",
          "1169"
        ]
      },
      {
        "id": "1",
        "title": "Implementary Problems",
        "description": "",
        "problems": [
          "1170",
          "1171",
          "1172",
          "1173",
          "1174",
          "1175",
          "1176",
          "1177",
          "1178",
          "1179",
          "1180",
          "1181",
          "1182",
          "1183",
          "1184",
          "1185"
        ]
      }
    ]
  },
  {
    "id": "28",
    "title": "Advance Algorithm",
    "description": "",
    "subgroups": [
      {
        "id": "1",
        "title": "Fenwick Tree",
        "description": "",
        "problems": [
          "1247",
          "1248",
          "1249",
          "1250"
        ]
      },
      {
        "id": "2",
        "title": "Segment Tree",
        "description": "",
        "problems": [
          "1251",
          "1252",
          "1253",
          "1254",
          "1255",
          "1256",
          "1257",
          "1258",
          "1259",
          "1260",
          "1261"
        ]
      },
      {
        "id": "3",
        "title": "Sparse Table",
        "description": "",
        "problems": [
          "1262",
          "1263",
          "1264",
          "1265",
          "1266",
          "1267",
          "1268"
        ]
      }
    ]
  }
]