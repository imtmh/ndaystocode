Two pointers
-------------

1. Sorted array, fine i, j where arr[i] + arr[j]=k
    ```
    i=0; j=n;
    while(i<j) {
        if(arr[i]+arr[j]==k) {
            return true
        } if(arr[i]+arr[j] < k) {
            i++;
        } else {
            j--;
        }
    }
    return false;
    ```
2. Sorted array, find i,j where a[i]-a[j]=k 
    ```
    i=0; j=1;
    while(j<n) {
        if(arr[i]+ k = arr[j]) {
            return true
        } if(arr[i]+k < arr[j]) {
            i++;
        } else {
            j++;
        }
    }
    return false;
    ```
3. sorted array, find i,j where a[i]*a[j] <= k 
    ```
    i=0; j=n; ans=0
    while(i<j) {
        if(arr[i] * arr[j] <k) {
            j--;
        } else {
            j++;
            ans = j-i+1; // ans is all the ii, ii+i, ii+2...... ij
        }
    }
    return ans;
    ```

4. sorted arrays, find a,b,c such that max(a,b,c)-min(a,b,c) should be minimum

    ```
    a=0;b=0;c=0; ans=0;

    while(i<j) {
        mx = max(a,b,c)
        mn = min(a,b,c)
        
        ans = ans > mx-mn ? mx-mn:ans;
        if(a==mn)
            a++
        if(b==mn)
            b++
        if(c==mn)
            c++
    }
    return ans;
    ```

5. Given random array (not sorted), find if subarray exists with sum = k;
    ```
    prefix array

    pi = pi-1 + [i]

    // or use two pointers
    i=0, j=1;
    while(i<=j && j< N) {
        diff = p[j]-p[i];
        if(diff=k)
            return true
            

    }
    ```
