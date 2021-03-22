Sorting 
=======

- Insertion Sorting
  ---------
    - start with zero index, *insert* (include) an element from i+1 index and compare it all the i elements
    - continue this till the end
    - Psudo code
     
        ```
        for(let i in array) {
            for(let j from i to 1) {
                if(array[j-1] < array[j]) {
                    break;
                }
                if(array[j-1] > array[j]) {
                    swap(array[j-1], array[j])
                }
            }
        }
        return array
        ```

- Merge sort
  ---
    - devide and conquer
    - top down impl
    - 